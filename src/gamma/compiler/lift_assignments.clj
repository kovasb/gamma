(ns gamma.compiler.lift-assignments
  (:use [gamma.ast :only [id? gen-term-id]])
  (:use [gamma.compiler.common :only [get-element map-path]]))


(defn liftable? [db location]
  (or
    (= :shared (peek (pop (:path (:parent location)))))
    (#{:if} (:head (db (:id location))))))


(defn lift-assignments-sub [db location target-block-id]
  (if (liftable? db location)
    (update-in db [target-block-id :assignments] (fnil conj []) (:id location))
    db))

(defn get-target [db location target-block-id]
  (let [e (get-element db location)]
    (if (= :block (:head e))
      (:id e)
      target-block-id)))


(defn lift-assignments [target-block-id]
  (fn [db location]
    [
     ;; if path is in :shared, or is a statement, lift into target
     (lift-assignments-sub db location target-block-id)
    [[:shared (map-path (lift-assignments target-block-id))]
      [:body (let [target (get-target db location target-block-id)]
               (map-path (lift-assignments target)))]]]))


(comment
  1
  (in-ns 'user)
  (use 'gamma.compiler.core)
  (use 'gamma.compiler.lift-assignments)
  (in-ns 'gamma.compiler.lift-assignments)

  (use 'gamma.compiler.separate-usages
       '[gamma.ast :only [id? term]]
       '[gamma.compiler.flatten-ast :only [flatten-ast]]
       'clojure.stacktrace
       'gamma.ast
       'gamma.compiler.core
       'gamma.compiler.bubble-term
       'gamma.compiler.print
       )

  (require 'gamma.compiler.core :reload)
  (use 'gamma.compiler.print :reload)


  (def db2
    (flatten-ast (let [x (term :clamp 1)]
                   (term :sin
                         (term :cos x)
                         (term :cos x)))))

  (def d2
    (transform {:root {:source-id :root :id :root}}
               (separate-usages (bubble-terms db2) {} #{})))

  (print-ast d2
             (fn [x db] [(:id (:id x)) (mapv :id (:shared x))]) 30)

  (:root d2)

  (def d3
    (transform d2
               (lift-assignments :root)))

  (print-ast d3
             (fn [x db] [(:id (:id x)) (mapv :id (:assignments x))]) 30)

  (require '[gamma.api :as g] )

  (def test1
    (let [c1 (term :clamp 1)
         c2 (g/if true (term :sin c1 c1) false)]
      (bubble-terms (flatten-ast c2))))

  (def test2
        (transform  {:root {:source-id :root :id :root}}
                    (separate-usages test1 {} #{})))

  (def test3
    (transform test2 (lift-assignments :root)))

  (print-ast gamma.compiler.lift-assignments/test3
             (fn [x db] [(:id (:id x)) (mapv :id (:assignments x))]) 30)

  (ast-doc2 gamma.compiler.lift-assignments/test3 :root [:body])

  (fipp.printer/pprint-document
    (ast-doc2 gamma.compiler.lift-assignments/test3 :root [:body])
    {:width 30})

  (require 'gamma.emit.statement)
  (require 'gamma.emit.function)

  (gamma.emit.emit/emit
    gamma.compiler.lift-assignments/test3 (gamma.compiler.lift-assignments/test3 :root))

  (fipp.printer/pprint-document
    (gamma.emit.emit/emit
      gamma.compiler.lift-assignments/test3 (gamma.compiler.lift-assignments/test3 :root))
    {:width 30})


  (d3 (gamma.ast.Id. 71))
  (d3 (gamma.ast.Id. 77))

  (clojure.stacktrace/e)



  )