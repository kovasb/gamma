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
    [gamma.compiler.print :only [printer]])
  (:require
    [gamma.compiler.core :refer [transform]]
    [gamma.api :as g]
    [gamma.emit.emit :refer [emit]]
    gamma.emit.fun
    gamma.emit.operator
    gamma.emit.statement
    gamma.emit.tag
    gamma.emit.construct
    clojure.string))


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


(defn glsl-string [ast]
  (let [ir (gamma.compiler.core/compile ast)]
    (with-out-str
      (fipp.printer/pprint-document
        (emit ir (:root ir))
        {:width 80}))))
