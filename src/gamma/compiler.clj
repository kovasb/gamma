(ns gamma.compiler
  (:use gamma.ast)
  (:require [fipp.edn :refer (pprint) :rename {pprint fipp}]
            fipp.printer))



(defn ast-doc [db node-id f]
  (let [x (if (map? node-id) node-id (db node-id))]
    [:group
     (name (head x))
     (if f
       (if-let [y (f x db)]
         (pr-str y)
         ""))
     "["
     [:line ""]
     (if (= :literal (head x))
       (pr-str (:body x))
       [:nest 2
        (interpose [:span "," :line]
                   (map #(ast-doc db % f) (body x)))])
     "]"]))


(defn print-ast [x f w]
  (fipp.printer/pprint-document
    (ast-doc
      x
      :root
      f) {:width w}))



;;; Convert tree ast into flat ast
(defn flatten-ast
  ([node] (flatten-ast {:root {:id :root :head :block :body [(:id node)] :parents [:root]}} node :root))
  ([db node parent-id]
   (let [id (:id node) seen (db id)]
     (if seen
       (update-in db [id :parents] conj parent-id)
       (if (= :literal (head node))
         (assoc db id (assoc node :parents [parent-id]))
         (reduce
           #(flatten-ast %1 %2 id)
           (assoc db (:id node)
                  (assoc node
                         :body (map :id (body node))
                         :parents [parent-id]))
           (body node)))))))


(comment
  (:root (flatten-ast (term :bar 0 (term :foo 1))))


  (flatten-ast {} (let [x (term :foo)]
     (term :bar x x)) :root)

  (flatten-ast {} (let [x (term :foo)]
                    (term :bar x x)) :root)


  (clojure.pprint/pprint (let [x (term :foo)]
     (term :bar
           (term :baz x)
           (term :baz x))))

  (def db
    (flatten-ast (let [x (term :foo)]
                      (term :bar
                            (term :baz x)
                            (term :baz x)))))

  )



;;; CSE



;{:conditional tf :current n :start id}


(defn parent-bubbles [db bubble]
  (map
    (fn [x]
      (if (= :if (head (db x)))
        (assoc bubble :current x :conditional true)
        (assoc bubble :current x)))
    (get-in db [(:current bubble) :parents])))



(defn bubble-term [db queue]
  (let [bubble (first queue)]
    (if (nil? bubble)
     ;; base case. If bubble is nil, return the db we've built up
     db
     (if (= :root (:current bubble))
       ;; if bubble has reached the root node, recur to the next bubble in the queue
       (recur db (rest queue))
       ;; if not at the root node, inspect and mark node and recur
       (let [info-path [(:current bubble) :shared (:start bubble)]
             node-info (get-in db info-path)]
         (if (:conditional bubble)
           ;; bubble is conditional
           (if (nil? node-info)
             ;; node hasn't been visited before; mark and bubble
             (let [parent-bubbles (parent-bubbles db bubble)]
               (recur (assoc-in db info-path {:conditional true}) (concat (rest queue) parent-bubbles)))
             (if (:unconditional node-info)
               ;; node has been visited by an unconditional bubble. mark conditional and recur to next bubble
               (recur (assoc-in db (conj info-path :conditional) true) (rest queue))
               ;; node has been visited by conditional bubble. recur to next bubble
               (recur db (rest queue))))

           ;; bubble is unconditional
           (if (or (nil? node-info) (nil? (:unconditional node-info)))
             ;; node has not been visited by an unconditional bubble. mark and bubble
             (let [parent-bubbles (parent-bubbles db bubble)]
               (recur (assoc-in db info-path (assoc node-info :unconditional 1)) (concat (rest queue) parent-bubbles)))
             ;; node has been visited by unconditional bubble. increment and recur to next bubble.
             (recur
               (assoc-in db info-path (assoc node-info :unconditional (+ 1 (:unconditional node-info))))
               (rest queue))))

         )))))

(defn bubble-terms [db]
  (reduce bubble-term db
          (map
            (fn [x] (map (fn [y] {:start (:id x)  :current y}) (:parents x)))
            (filter #(clojure.core/< 1 (count (:parents %)))
                    (map last db)))))




(comment
  (let [y (term :plus 1 2)]
    (def x (flatten-ast (term :plus y y))))

  (let [x (term :plus 1 2)
        y (term :plus x x x)]
    (print-ast (bubble-terms (flatten-ast y))
               (fn [x db] [(:id x) (:shared x)]) 30))

  (let [x (term :plus 1 2)
        y (term :plus x x (g/if true 1 x))]
    (print-ast (bubble-terms (flatten-ast y))
               (fn [x db] [(:id x) (:shared x)]) 30))




  )

(defn statement? [x]
  (#{:if} (:head x)))

(defn block? [x]
  (#{:block} (:head x)))

(defn literal? [x]
  (#{:literal} (:head x)))


(defn shared-set [x]
  (into #{}
        (map first
             (filter (fn [y] (let [u (:unconditional (last y)) c (:conditional (last y))] (if u (<= 2 u))))
                     x))))

;; should not introduce variables yet
(defn separate-usages [db new-db parent-id id new-id env]
  (let [x (db id)
        s (shared-set (:shared x))
        s2 (filter #(not (env %)) s)
        ]
    (if (literal? x)
      (assoc new-db new-id (assoc x :id new-id))
      (let [new-children-ids (repeatedly (count (:body x)) gamma.ast/gen-term-id)
           new-shared-ids (repeatedly (count s2) gamma.ast/gen-term-id)
           new-env (merge env (zipmap s2 new-shared-ids))
           new-db2 (reduce #(separate-usages db % new-id (first %2) (last %2) env)
                          new-db
                          (map list s2 new-shared-ids))
           new-db3 (reduce #(separate-usages db % new-id (first %2) (last %2) new-env)
                          new-db2
                          (filter #(not (new-env (first %)))
                                  (map list (:body x) new-children-ids)))

           ]
        ;(println [x parent-id id new-id])
        (let [n (merge x {:id new-id :body   (map #(if (new-env %1) (new-env %1) %2) (:body x) new-children-ids)
                  :shared new-shared-ids :parents [parent-id]})]
          (println n)
          (assoc new-db3
                new-id n
                ))))))



(comment
  (use 'gamma.compiler)
  (in-ns 'gamma.compiler)
  (require '[gamma.api :as g])

  (def d (let [x (term :plus 1 2)
         y (term :plus x x (g/if true 1 x))]
     (separate-usages
       (bubble-terms (flatten-ast y))
       {}
       :root
       :root
       :root
       {})))

  (print-ast d (fn [x db] [(:id x) (:shared x)]) 30)

  (let [x (term :plus 1 2)
        y (term :plus x x (g/if true 1 x))]
    (print-ast
      (separate-usages
       (bubble-terms (flatten-ast y))
       {}
       :root
       :root
       :root
       {})
      (fn [x db] [(:id x) (:shared x)]) 30))
  )


;; continue bubbling of unconditional terms drawn from both sides of if statement
;; needs to be done to a fixed point

;; walk db and replace :shared with a single statement :shared [ids..]

;; create new db with unique paths for all exprs and minimal shared identifiers








;; by now shared elements are specifically identified
(defn lift-assignments
  ([db]
   (lift-assignments :root :root db))
  ([current-id parent-block-id db]
   (let [e (db current-id)]
     ;; first lift any shared expressions

     (let [db2 (reduce
                 (fn [db eid]
                   (lift-assignments
                     eid parent-block-id
                     (update-in db [parent-block-id :assignments] conj eid)))
                 db
                 (:shared e))]
       (cond
        (literal? e)
        db2

        (statement? e)
        (let [db3 (update-in db2 [parent-block-id :assignments] conj (:id e))]
          (reduce #(lift-assignments %2 parent-block-id %1) db3 (:body e)))

        (block? e)
        (let [db3 (assoc-in db2 [current-id :assignments] [])]
          (reduce #(lift-assignments %2 current-id %1) db3 (:body e)))


        :default
        (reduce #(lift-assignments %2 parent-block-id %1) db2 (:body e)))))))

(comment
  (use 'gamma.compiler)
  (in-ns 'gamma.compiler)
  (require '[gamma.api :as g])

  (def d (let [x (term :plus 1 2)
               y (term :plus x x (g/if true 1 x))]
           (separate-usages
             (bubble-terms (flatten-ast y))
             {}
             :root
             :root
             :root
             {})))

  (print-ast d (fn [x db] [(:id x) (:shared x)]) 30)


  (def d2 (lift-assignments d))
  (print-ast d2 (fn [x db] [(:id x) (:assignments x)]) 30)


  )


;; need to lift assignments produced by CSE
;; look at the :shared key, compute exprs that should be shared
;; those not already in the env need to be stuffed into the assignments block

(declare insert-variables)

(defn insert-variables-block [current-id db env]
  (let [e (db current-id)]
    (first
      (reduce
       (fn [[db env] id]
         (let [db (insert-variables id db env)
               v {:head :literal :body [{:variable id}]}
               env2 (assoc env id v)]
           [(update-in db [current-id :body] conj {:head :set :body [v (if (env id) (env id) id)]}) env2]))
       [(assoc-in db [current-id :body] []) env]
       (concat (:assignments e) (:body e))))))



(defn insert-variables [current-id db env]
  (let [e (db current-id)]
    (cond
      (env current-id)
      db

      (literal? e)
      db

      (block? e)
      (insert-variables-block current-id db env)

      :default
      (assoc-in
        (reduce #(insert-variables %2 %1 env) db (:body e))
        [current-id :body] (map #(if (env %) (env %) %) (:body e))))))

(comment

  (def d (let [x (term :plus 1 2)
               y (term :plus x x (g/if true 1 x))]
           (separate-usages
             (bubble-terms (flatten-ast y))
             {}
             :root
             :root
             :root
             {})))

  (def d3 (insert-variables :root d2 {}))

  (print-ast d3 nil 30)
  (:root d3)
  (get-in d3 [:root :body]))
  (get-in d3 [394])




(comment

  (def x (flatten-ast (term :if true (term :if true true))))
  (def x (flatten-ast (g/if true true (g/if true true true)) ))

  (x (first (:body (:root x))))

  (lift-assignments x)

  (require '[gamma.api :as g])

  (fipp.printer/pprint-document
    (ast-doc
      (lift-assignments x)
      :root
      (fn [x db] [(:id x) (:assignments x)])) {:width 40})





  )





