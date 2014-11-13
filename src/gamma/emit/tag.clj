(ns gamma.emit.tag
  (:use [gamma.emit.emit :only [emit]]
        [gamma.ast :only [head body term ->Term]]))

;;;; PROGRAM

(defmethod emit :program [x]
  (str
    (emit
      (->Term :block
              (map #(->Term :declaration [%])
                   (:declarations x))))
    "main(){"
    (emit (:main x))
    "}"))



;;;; VARIABLES


(defmethod emit :variable [x]
  (:name x))


(defmethod emit :vector [x]
  (str
    ({:float   "vec"
      :boolean "bvec"
      :int     "ivec"} (:member-type x))
    (:length x)))


(defmethod emit :matrix [x])




(comment
  (emit
    {:tag :program
     :declarations [{:tag :variable
                     :storage :attribute
                     :name "x"
                     :type :float}]
     :main (term :block
                 (term :+ 1 2))
     })


  )



