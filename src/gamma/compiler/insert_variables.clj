(ns gamma.compiler.insert-variables
  (:use [gamma.ast :only [id? gen-term-id]])
  (:use [gamma.compiler.common :only [get-element map-path assoc-in-location assoc-elements]]))


(defn insert-variables-sub [db location]
  (let [id (gen-term-id)]
    (-> db
        (assoc-in-location (:parent location) id)
        (assoc-elements [{:id id :head :literal
                          :type (:type (get-element db location))
                          :value {:tag :variable :id (:id location)
                                  :type (:type (get-element db location))}}]))))

(defn parent-env [db location]
  (get (db (:id (:parent location))) :env {}))

(defn insert-variables [env]
  (fn [db location]
    (let [elt (get-element db location)
         ]
      (if (env (:id elt))
       [(insert-variables-sub db location) nil]
       (let [new-env (into env (concat
                                 (:assignments elt)
                                 (:env elt)))]
         [
          db
          [[:assignments (map-path (insert-variables env))]
           [:body (map-path (insert-variables new-env))]
           ]])))))

;; need to insert variables before we lift the assignments



(comment






  (def iv1
    (let [c1 (term :foo 1)
          c2 (g/if true (term :bar c1 c1) false)]
      (bubble-terms (flatten-ast c2))))

  (def iv2
    (transform  {:root {:source-id :root :id :root}}
                (separate-usages iv1 {} #{})))

  (def iv3
    (transform iv2 (lift-assignments :root)))

  (def iv4
    (transform iv3 (insert-variables #{})))

  (print-ast iv4
             (fn printer [x db]
               [:group "{"
                (str (:id (:id x))) " "
                (if (= :literal (:head x))
                  (str (:id (:id (:value x))))
                  (map #(gamma.compiler.print/ast-doc db % printer)
                      (:assignments x)))
                 "}"
                ]) 30)





  )
