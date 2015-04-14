(ns gamma.compiler.flatten-ast
  (:require [clojure.walk]
            [gamma.ast]))

(defn flatten-ast
  ([node] (flatten-ast
            (if (= :block (:head node))
              {:root {:id :root :head :block :body (mapv :id (:body node)) :parents [:root]}}
              {:root {:id :root :head :block :body [(:id node)] :parents [:root]}})
            node
            :root))
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



(defn ->tree [db id]
  (let [e (db id)]
    (assoc
      (clojure.walk/postwalk
       (fn [y]
         (if
           (gamma.ast/id? y)
           (->tree db y)
           y))
       (dissoc e :parents :id))
      :id id)))


(comment


  (def x
    (->tree
     (flatten-ast
       (gamma.ast/term :bar 0 (gamma.ast/term :foo 1))) :root))

  (require '[gamma.compiler.print :refer [printer]] )

  (fipp.printer/pprint-document
    ((printer) x)
    {:width 30})

  (fipp.printer/pprint-document
    ((printer) {:id 1 :head :foo :tag :term})
    {:width 30})

  (fipp.printer/pprint-document
    [:group "1" "(" "1"  ")" [:group "{" [:align '()] "}"]]
    {:width 30})




  )

(comment

  (def c (crazy. 1))

  (c 2)

  (defrecord crazy [arg]
    IFn
    (-invoke [this arg]  (crazy. this)))


  (get-fn data) -> fn specific to data (polymorphism)


  (defrecord dispatcher [get-fn]
    IFn
    (-invoke [this arg] ((get-fn arg) this arg)))


  (declare dispatch-map)

    (def dispatch-map (dispatch-map-constructor
                      dispatch-map
                      {rule my-transform2}))

  (defn my-transform [dispatch-map arg]

    )


  (defn my-transform [dispatcher data]
    (.populateSomeObject
      (o.)
      (:somedata data)
      ((assoc dispatcher
         :environment-data) (:subdata data)))
    )




  (fn crazy [arg arg2]
    [(crazy arg crazy)])




  )