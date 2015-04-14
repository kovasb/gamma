(ns gamma.test
  (:require
            [gamma.api :as g]
            [gamma.ast :as ast]
            [gamma.compiler.print :as prn])
  (:use
    [gamma.tools :only [stages-map print-dag compile-stages]]
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


(comment

  (test (g/+ 1 2))

  (test (g/if true 1 0))



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





  )