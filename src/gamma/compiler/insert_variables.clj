(ns gamma.compiler.insert-variables
  (:use [gamma.ast :only [id? gen-term-id]])
  (:use [gamma.compiler.common :only [get-element map-path assoc-in-location assoc-elements]]))


(defn insert-variables-sub [db location]
  (let [id (gen-term-id)]
    (println "z")
    (-> db
        (assoc-in-location (:parent location) id)
        (assoc-elements [{:id id :head :literal :value {:tag :variable :id (:id location)}}]))))


(defn insert-variables [env]
  (fn [db location]
    (if (env (:id (get-element db location)))
      [(insert-variables-sub db location) nil]
      (let [new-env (into env (:assignments (get-element db location)))]
       [
        db
        [[:assignments (map-path (insert-variables env))]
         [:body (map-path (insert-variables new-env))]
         ]]))))




(comment
  (use 'gamma.compiler.insert-variables)
  (in-ns 'gamma.compiler.insert-variables)

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
  (use 'gamma.compiler.lift-assignments)


  (def db2
    (flatten-ast (let [x (term :foo 1)]
                   (term :bar
                         (term :baz x)
                         (term :baz x)))))

  (def d2
    (transform {:root {:source-id :root :id :root}}
               (separate-usages (bubble-terms db) {} #{})))


  (def d3
    (transform d2
               insert-variables))

  (print-ast d3
             (fn [x db] [(:id (:id x)) (mapv :id (:shared x))]) 30)

  (d3 (gamma.ast.Id. 71))
  (d3 (gamma.ast.Id. 77))

  (clojure.stacktrace/e)




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

  (iv4 (gamma.ast.Id. 83))



  [:group ]
  (:root iv4)
  (iv4 (gamma.ast.Id. 92))
  (iv4 (gamma.ast.Id. 82))



  )

(comment
  (defn usage? [db location]
    (let [env (or
                (if (= :assignments (peek (pop (:path (:source location)))))
                  (:env (get-element db (:parent (:parent location))))
                  (:env (get-element db {:id (:id (:parent location))
                                         :path []})))
                {})]
      (println "y")
      (println [env (:id location) location])
      (env (:id location)))))