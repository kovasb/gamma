(ns gamma.emit.tag
  (:use [gamma.emit.emit :only [emit]]
        [gamma.ast :only [head body term ->Term]]))

;;;; PROGRAM


(defmethod emit :variable [db x]
  (str "v" (:id (:id x))))

(comment
  (defmethod emit :program [x]
            (str
              (emit
                (->Term :block
                        (map #(->Term :declaration [%])
                             (:declarations x))))
              "main(){"
              (emit (:main x))
              "}"))



  (defmethod emit :vector [x]
             (str
               ({:float   "vec"
                 :boolean "bvec"
                 :int     "ivec"} (:member-type x))
               (:length x)))


  (defmethod emit :matrix [x]))



;;;; VARIABLES







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



