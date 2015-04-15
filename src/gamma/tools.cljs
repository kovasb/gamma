(ns gamma.tools
  (:use
    [gamma.compiler.common :only [get-element map-path location-conj]]
    [gamma.ast :only [id? term]]
    [gamma.compiler.flatten-ast :only [flatten-ast]]
    [gamma.compiler.bubble-term :only [bubble-terms]]
    [gamma.compiler.insert-assignments :only [insert-assignments]]
    [gamma.compiler.lift-assignments :only [lift-assignments]]
    [gamma.compiler.separate-usages :only [separate-usages]]
    [gamma.compiler.insert-variables :only [insert-variables]]
    [gamma.compiler.move-assignments :only [move-assignments]]
    [gamma.compiler.print :only [printer]]
    [gamma.emit.emit :refer [emit]])
  (:require
    [gamma.compiler.core :refer [transform]]
            [gamma.api :as g]))


(def stages-map
  {:flatten-ast  flatten-ast
   :bubble-terms bubble-terms
   :separate-usages
                 (fn [input]
                   (transform {:root {:source-id :root :id :root}}
                              (separate-usages input {} #{})))
   :lift-assignments
                 (fn [input]
                   (transform input (lift-assignments :root)))
   :insert-variables
                 (fn [input]
                   (transform input (insert-variables #{})))
   :insert-assignments
                 (fn [input]
                   (transform input (insert-assignments)))
   :move-assignments
                 (fn [input]
                   (transform input (move-assignments)))})

(def stages [:flatten-ast :bubble-terms :separate-usages :lift-assignments
             :insert-variables :insert-assignments :move-assignments])

(defn compile-stages [input]
  (last
    (reduce
     (fn [[input result] stage]
       (try
         (let [x ((stages-map stage) input)]
           [x (assoc-in result [:stages stage] x)])
         (catch js/Error e
           (reduced [nil (assoc
                           (assoc-in result [:stages stage] e)
                           :exception-at stage)]))))
     [input {:stages {}}]
     stages)))

(defn print-stage [stages stage]
  (let [x (gamma.compiler.flatten-ast/->tree
            (get-in stages [:stages stage])
            :root)]
    (fipp.printer/pprint-document
      ((printer) x)
      {:width 30})))

(defn print-dag [x]
  (fipp.printer/pprint-document
    ((printer) (gamma.compiler.flatten-ast/->tree x :root))
    {:width 30}))


(defn print-tree [x]
  (fipp.printer/pprint-document
    ((printer) x)
    {:width 30}))

(defn glsl-stage [stages stage]
  (fipp.printer/pprint-document
    (emit
      (:move-assignments (:stages stages))
      (:root (stage (:stages stages))))
    {:width 30}))


(comment
  (def p (g/+ 1 2))

  (def s (compile-stages p))




  (print-stage s (nth stages 1))

  (get-in s [:stages :separate-usages])

  (nth stages 2)

  ((stages-map :separate-usages)
    (:bubble-terms (:stages s)))

  ((stages-map :flatten-ast)
    p )

  (print-dag
    ((comp
       (stages-map :move-assignments)
       (stages-map :insert-assignments)
       (stages-map :insert-variables)
      (stages-map :lift-assignments)
      (stages-map :separate-usages)
      (stages-map :bubble-terms)
      (stages-map :flatten-ast))
     p))


  (fipp.printer/pprint-document
    ((printer) (gamma.compiler.flatten-ast/->tree
                 (get-in s [:stages (nth stages 1)])
                 :root))
    {:width 30}))


(comment

  ;; after separate usages
  (print-ast d2
             (fn [x db] [(:id (:id x)) (mapv :id (:shared x))]) 30)


  ;; after lift-assignments
  (print-ast d3
             (fn [x db] [(:id (:id x)) (mapv :id (:assignments x))]) 30)

  (fipp.printer/pprint-document
    (ast-doc2 gamma.compiler.lift-assignments/test3 :root [:body])
    {:width 30})


  ;; after insert variables
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