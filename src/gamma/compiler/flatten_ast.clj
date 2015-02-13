(ns gamma.compiler.flatten-ast)



(defn flatten-ast
  ([node] (flatten-ast {:root {:id :root :head :block :body [(:id node)] :parents [:root]}} node :root))
  ([db node parent-id]
   (let [id (:id node) seen (db id)]
     (if seen
       (update-in db [id :parents] conj parent-id)
       (if (= :literal (:head node))
         (assoc db id (assoc node :parents [parent-id]))
         (reduce
           #(flatten-ast %1 %2 id)
           (assoc db (:id node)
                  (assoc node
                         :body (mapv :id (:body node))
                         :parents [parent-id]))
           (:body node)))))))




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

  (require '[gamma.api :as g])
  (g/if true 1 2)

  )