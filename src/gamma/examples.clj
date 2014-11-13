(ns gamma.examples)

(comment
  (use '[gamma.api :as g])
  (use 'gamma.emit.emit
       'gamma.emit.function
       'gamma.emit.operator
       'gamma.emit.statement
       'gamma.emit.tag)


  (def s
    (let [gl-pos (g/gl-position)
         a-pos (g/attribute "a_Position" (g/vector-type 4))
         point-size (g/gl-point-size)]
     {:tag          :program
      :declarations [a-pos]
      :main
                    (g/block
                      (g/set gl-pos a-pos)
                      (g/set point-size 10.0))}))

  (print (emit s))

  )
