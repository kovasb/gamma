(ns gamma.compiler.insert-assignments
  (:use [gamma.ast :only [id? gen-term-id]])
  (:use [gamma.compiler.common :only [get-element map-path assoc-elements assoc-in-location]]))



;;;;



(defn insert-assignment [db location target-id]
  (let [set-id (gen-term-id) var-id (gen-term-id)
        this-id (:id location) parent-loc (:parent location)]
    (-> db
        (assoc-elements [{:id set-id :head :set :body [var-id this-id]}
                         {:id var-id :head :literal :value {:tag :variable :id target-id}}])
        (assoc-in-location parent-loc set-id))))

(declare insert-assignments-sub)

(defn insert-assignments []
  (fn [db location ]
    (let [e (get-element db location)]
      (if (= :block (:head e))
        [db
         [[:assignments
           (let [x (map-indexed
                     (fn [i y] [i (insert-assignments-sub y)])
                     (:assignments e))]
             (fn [db location] [db x]))]]]
        [db nil]))))


(defn in-path [[a b] f]
  (fn [db loc]
    [db
     [[a (fn [db loc] [db [[b f]]])]]]))



(defn insert-assignments-sub [target-id]
  (fn [db location]
    (let [e (get-element db location)]
      (condp = (:head e)
        :if
        [db
         [(in-path [:body 1] (insert-assignments-sub target-id))
          (in-path [:body 2] (insert-assignments-sub target-id))]]
        :block
        [db
         [(in-path [:body (- (count (:body e)) 1)] (insert-assignments-sub target-id))
          (insert-assignments)]]

        [(insert-assignment db location target-id) nil]))))


(comment
  (use 'gamma.compiler.insert-assignments)
  (in-ns 'gamma.compiler.insert-assignments)

  (use 'gamma.compiler.separate-usages
       '[gamma.ast :only [id? term]]
       '[gamma.compiler.flatten-ast :only [flatten-ast]]
       'clojure.stacktrace
       'gamma.ast
       'gamma.compiler.core
       'gamma.compiler.bubble-term
       'gamma.compiler.print
       )
  (require '[gamma.api :as g] )

  (use '[gamma.compiler.lift-assignments :only [lift-assignments]])
  (use '[gamma.compiler.insert-variables :only [insert-variables]])


  (clojure.stacktrace/e)

  (def data1 (let [c1 (term :foo 1)
                  c2 (g/if true (term :bar c1 c1) false)]
              (bubble-terms (flatten-ast c2))))


  (def data2
    (-> (transform {:root {:source-id :root :id :root}}
                   (separate-usages data1 {} #{}))
        (transform  (lift-assignments :root))
        (transform  (insert-variables #{}))
        ))

  (def data3 (transform data2 (insert-assignments)))


  (use 'gamma.emit.emit)
  (require
           'gamma.emit.function
           'gamma.emit.operator
           'gamma.emit.statement
           'gamma.emit.tag)
  (emit data3 (data3 :root))




  (print-ast2 data3  30)

  (fn printer [x db]
    [:group "{"
     (str (:id (:id x))) " "
     (if (= :literal (:head x))
       (str "val:" (:value x))
       (map #(gamma.compiler.print/ast-doc db % printer)
            (:assignments x)))
     "}"
     ])

  (get-element data2 {:id (gamma.ast.Id. 111) :path [:body 1]})
  (:body (data2 (gamma.ast.Id. 111)))



  [:group ]
  (:root iv4)
  (iv4 (gamma.ast.Id. 92))
  (iv4 (gamma.ast.Id. 82))



  )




(comment
  (defn insert-assignments []
    (fn [db location]
      (let [a (assignment? db location) id (:id location)]
        [(if a (insert-assignment-1 db location) db)
         [[:assignments (map-path (insert-assignments))]
          [:body (map-path (insert-assignments))]
          (if a (fn [db loc] [db nil]) (fn [db loc] (conj-new-body db loc id)))
          (fn [db loc] [(swap-body db loc) nil])]]))))


(comment

  (defn conj-new-body [db location id]
    (update-in db [(:id (:parent location)) :new-body]
               (fnil conj []) id))

  (defn swap-body [db location]
    (assoc-in db [(:id location) :body] (:new-body (db (:id location)))))

  (defn assignment? [db location]
    (= :assignments (peek (pop (:path (:parent location))))))

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
          [current-id :body] (map #(if (env %) (env %) %) (:body e)))))))