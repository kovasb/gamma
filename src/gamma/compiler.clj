(ns gamma.compiler
  (:use gamma.ast))




(comment

  (use 'gamma.compiler)
  (in-ns 'gamma.compiler)

  ;; representation

  {term-id {:head h :body [id1 id2 ..] :parents [id1 id2 ..]}}

  {term-id #{parent-id..}}




  )



;;; Convert tree ast into flat ast



(defn flatten-ast
  ([node] (flatten-ast {:root {:id :root :head :root :body [(:id node)] :parents [:root]}} node :root))
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









  (require '[fipp.edn :refer (pprint) :rename {pprint fipp}])
  (require 'fipp.printer)


  (defn ast-doc [db node-id f]
    (let [x (db node-id)]
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


  (clojure.pprint/pprint (let [x (term :foo)]
     (term :bar
           (term :baz x)
           (term :baz x))))

  (def db
    (flatten-ast {} (let [x (term :foo)]
                      (term :bar
                            (term :baz x)
                            (term :baz x))) :root))

  (clojure.pprint/pprint db)

  (fipp.printer/pprint-document
    (ast-doc
      db
      1050
      nil) {:width 20})

  db


 (fipp.printer/pprint-document
   (ast-doc
     db
     1050
     (fn [node db] (dissoc node :head :body))) {:width 40})


  (fipp (range 20) {:width 10})

  (use 'fipp.printer)
  (in-ns 'fipp.printer)


  (use 'gamma.emit.function)
  (in-ns 'gamma.emit.function)



  (fipp.printer/pprint-document
    (emit (term :max 1 (term :max 2 3 4))) {:width 15})



  )



;;; CSE

(defn terminal? [t db]
  (cond
    (= :root (:id t)) true
    (= :if (:head (db (first (:parents t))))) true
    :default false))


(defn bubble-term-set-step [set db]
  (mapcat
    (fn [t]
      (if (terminal? (last t) db)
        [t]
        (map #(conj t (db %)) (:parents (last t)))))
    set ))


(defn bubble-term-set [set db]
  (let [s (iterate #(bubble-term-set-step % db) set)]
    (loop [c (first s) n (next s)]
      (if (= c (first n))
        c
        (recur (first n) (next n))))))



(defn bubble-terms [db]
  (map #(bubble-term-set (vector (vector %)) db)
       (filter #(clojure.core/< 1 (count (:parents %)))
           (map last db))))



(comment
  (def db (let [dup (term :foo)]
            (flatten-ast (term :bar dup (term :baz dup)))))


  (bubble-term-set
    (map vector
         (filter #(< 1 (count (:parents %)))
                 (map last db)))
    db)

  (count *1)

  (bubble-terms db)



  )



(defn filter-sharing [x]
  ;; needs to have more than 1 parent, and not be a literal, possible check if its worth cost

  )

(defn lift-sharing [ast])

;; for each expr, bubble up through parents to enclosing context
;; want to group occurences and find appropriate LCA
;;


;;; lift statements


;; remove parent block index and assume block starts with only a seed expression
;; statements only need to be lifted; do block-reset logic only on blocks
(comment
  (defn lift-assignments [current-id parent-block-id db]
   (let [e (db current-id)]
     (cond
       (literal? e)
       db

       (block? e)
       (let [db2 (update-in db [parent-block-id :assignments] cons e)
             db2 (assoc-in db [current-id :assignments] (list))]
         (reduce #(lift-assignments %2 current-id %1) db2 (:body e)))

       (liftable? e)
       (let [db2 (update-in db [parent-block-id :assignments] cons e)]
         (reduce #(lift-assignments %2 parent-block-id %1) db2 (:body e)))

       :default

       ))))


;; walk and substitute assignments
;; just create new terms all the way down, with new ids for each path taken.

(defn walk-replace [x])




