(ns gamma.test
  (:require
            [gamma.api :as g]
            [gamma.ast :as ast]
            [gamma.compiler.print :as prn]
            [clojure.walk :as walk])
  (:use
    [gamma.tools :only [stages-map print-dag print-tree compile-stages stages]]
    [gamma.compiler.flatten-ast :only [->tree]]))



(defn test [p]
  (print-dag
    ((comp
       (stages-map :move-assignments)
       (stages-map :insert-assignments)
       (stages-map :insert-variables)
       (stages-map :lift-assignments)
       (stages-map :separate-usages)
       (stages-map :bubble-terms)
       (stages-map :flatten-ast))
      p)))

(defn trim-keys [x]
  (walk/postwalk
    (fn [x]
      (if (map? x)
        (dissoc x :env :shared)
        x))
    x))

(comment

  (def stages [:flatten-ast :bubble-terms :separate-usage :lift-assignments
               :insert-variables :insert-assignments :move-assignments])

  (test (g/+ 1 2))

  (test (g/if true 1 0))

  (:exception-at
    (compile-stages (g/+ 1 2)))

  (test
    (let [x (g/sin 1)]
      (g/+ x x)))

  (test
    (let [x (g/sin 1)]
     (g/if true x 1)))

  (g/if true (g/sin 1) (ast/literal 1))
  (g/if true (g/sin 1) 1)

  (require '[gamma.ast :as ast])

  (ast/literal 1)
  ()

  (test (ast/literal 1))

  (require '[clojure.walk :as walk])


  (print-tree
    (trim-keys
     (->tree
       (get-in
         (compile-stages (g/+ 1 2))
         [:stages :move-assignments]) :root)))

  (print-tree
    (trim-keys
      (->tree
        (get-in
          (compile-stages (let [x (g/sin 1)]
                            (g/if true x 1)))
          [:stages :move-assignments]) :root)))






  ;; get compiler stages to work



  )

