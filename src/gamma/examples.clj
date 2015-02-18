(ns gamma.examples
  (:require
    [gamma.api :as g]

    gamma.emit.function
    gamma.emit.operator
    gamma.emit.statement
    gamma.emit.tag
    [gamma.ast :as ast])
  (:use
    [gamma.emit.emit :only [emit]]
    [gamma.compiler.print :only [ast-doc2 ast-doc3]]
    [gamma.compiler.flatten-ast :only [flatten-ast]]
    [gamma.compiler.bubble-term :only [bubble-terms]]
    [gamma.compiler.insert-assignments :only [insert-assignments]]
    [gamma.compiler.lift-assignments :only [lift-assignments]]
    [gamma.compiler.separate-usages :only [separate-usages]]
    [gamma.compiler.insert-variables :only [insert-variables]]
    [gamma.compiler.move-assignments :only [move-assignments]]
    [gamma.compiler.core :only [transform]]))




(defn gcompile [input]
  (->
    (transform
      {:root {:source-id :root :id :root}}
      (separate-usages
        (bubble-terms (flatten-ast input)) {} #{}))
    ;(transform (lift-assignments :root))
    ;(transform (insert-variables))
    ;(transform (insert-assignments))
    ;(transform (move-assignments))
    )
  )

(let
  [x
   (gcompile
     (let [c1 (ast/term :foo 1)]
       (g/if true (ast/term :bar c1 c1) false)))]
  (fipp.printer/pprint-document
    (ast-doc2 x :root [:body])
    {:width 30}))

(gcompile
  (let [c1 (ast/term :foo 1)]
    (g/if true (ast/term :bar c1 c1) false)))

(let
  [x
   (gcompile
     (ast/term :foo 1))]
  (fipp.printer/pprint-document
    (ast-doc2 x :root [:body])
    {:width 30}))

(defn show-ast [y]
  (let
    [x
     (gcompile y)]
    (fipp.printer/pprint-document
      (ast-doc3 x :root [:body])
      {:width 30})))

(defn show [x]
  (let [y (gcompile x)]
    (fipp.printer/pprint-document
      (emit y (y :root))
      {:width 80})))

(show (g/sin 1))

(show-ast (let [x (g/sin 1)]
        (g/if true x x)))

(show-ast (let [x (g/sin 1) y (g/cos 1)]
        (g/block
          x
          y
          x)))

(show (let [x (g/sin 1) y (g/cos 1)]
        (g/block
          x
          y
          (g/if true (g/if true y x) (g/if true x y)))))

;; why aren't assignments showing up?

;; works
(show (let [x (g/sin 1)]
        (g/if true x x)))

;; works
(show (let [x (g/sin 1)]
        (g/cos (g/if true x x))))

;; works
(show (let [x (g/sin 1)]
        (g/if true
          (g/cos (g/if true x x))
          (g/sin (g/if true x x)))))

;; works, but usage of sin(1) is not being propogated to if branches
(show-ast (let [x (g/sin 1)]
        (g/sin
          (g/if true
            (g/cos (g/if true x x))
            (g/sin (g/if true x x))) x)))


;; doesn't
(show-ast (let [x (g/sin 1)]
        (g/block (g/if true x x))))

;; insert assignments not recursing?




(g/sin 1)


(let
  [x
   (gcompile
     (ast/term :sin 1))]
  )






(



  (def y 1)
  y

  (print
    (g/attribute "a_Position" (g/vector-type 4)))

  (g/block
    (g/set (g/gl-position)
           (g/attribute "a_Position" (g/vector-type 4))))


  (def x
    (let [gl-pos (g/gl-position)
          a-pos  (g/attribute "a_Position" (g/vector-type 4))
          point-size (g/gl-point-size)]
      {:tag          :program
       :declarations [a-pos]
       :main
                     (g/block
                       (g/set gl-pos a-pos)
                       (g/set point-size 10.0))}))

  (use 'clojure.pprint)

  (pprint x)

  (print (emit s))






  (g/gl-position)
  (g/gl-point-size)




  (my-for #(fn [i] (g/set a i)) [1 10])




  (defn my-shader [attr]
    (let [gl-pos (g/gl-position)

          point-size (g/gl-point-size)]
      {:tag          :program
       :declarations [attr]
       :main
                     (g/block
                       (g/set gl-pos attr)
                       (g/set point-size 10.0))}))



  (my-shader
    (g/uniform "a_Position" (g/vector-type 4)))

  (defn shade1 [x]
    {:color (g/+ 1 (g/max 1 2))})

  (defn shade2 [y]
    {:color (g/- y)})

  (run-shader
    {:FragmentColor (:color (let [{:keys [color]} (shade1 z)]
                             (shade2 color)))})


  (def s
    )

  (pprint s)

  (g/+ 1 (g/max 2 3))

  (print (emit s))

  )



;; insert assignments




(print-ast2 data3  30)
