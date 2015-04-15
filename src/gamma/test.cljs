(ns gamma.test
  (:require
            [gamma.api :as g]
            [gamma.ast :as ast]
            [gamma.compiler.print :as prn]
            [clojure.walk :as walk]
            [gamma.emit.emit :refer [emit]]
            gamma.emit.fun
            gamma.emit.operator
            gamma.emit.statement
            gamma.emit.tag
            gamma.emit.constructor
            [fipp.printer]
            [gamma.tools :refer [stages-map print-dag print-tree compile-stages stages glsl-stage]]
            [gamma.compiler.flatten-ast :refer [->tree]])
  (:use


    ))



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


  (def s (compile-stages (g/+ 1 2)))

  (:move-assignments (:stages s))


  (require '[gamma.ast :as ast])



  (glsl-stage (compile-stages (let [x (g/sin 1)]
                                (g/if true x 1)))
              :move-assignments)

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


  (def p )



  (require '[clojure.walk :as walk])

  (walk/prewalk (fn [x] (if (and (map? x) (:foo x))
                          (dissoc
                            (assoc-in x [:foo :bar] (:bar x))
                            :bar)
                          x))
                {:foo {:foo {:foo {}}} :bar 1})

  (walk/postwalk (fn [x]
                   (if (and (map? x) (:foo x))
                     (update-in
                       (assoc x :bar (:bar (:foo x)))
                       [:foo] dissoc :bar)
                     x)
                   )
                 {:foo {:foo {:foo {:bar 1}}}})




  ;; get compiler stages to work



  )

