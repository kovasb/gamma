(ns gamma.examples)

(comment
  (use '[gamma.api :as g])
  (use 'gamma.emit.emit
       'gamma.emit.function
       'gamma.emit.operator
       'gamma.emit.statement
       'gamma.emit.tag)
  (use 'gamma.ast)


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
