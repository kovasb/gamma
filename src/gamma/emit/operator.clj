(ns gamma.emit.operator
  (:use [gamma.emit.emit :only [emit]]
        [gamma.ast :only [head body term ->Term]]))


;;; OPERATOR CASES

(defmethod emit :infix [x]
  (let [literal (:literal (gamma.ast/operators (head x)))]
    (apply str (interpose literal (map emit (body x))))))

(defmethod emit :prefix [x]
  (let [literal (:literal (gamma.ast/operators (head x)))]
    (str literal (emit (first (body x))))))

(defmethod emit :postfix [x]
  (let [literal (:literal (gamma.ast/operators (head x)))]
    (str (emit (first (body x))) literal)))


(defmethod emit :constructor [x]
  (apply
    str
    (flatten [(emit (first (body x)))
              "("
              (interpose ", " (map emit (rest (body x))))
              ")"])))

(defmethod emit :conditional-choice [x])


(defmethod emit :aget [x]
  (str (emit (first (body x))) "[" (emit (second (body x))) "]"))


(defmethod emit :selector [x]
  (str (emit (first (body x))) "." (name (second (body x)))))

(comment
  (use 'gamma.emit.operator)
  (in-ns 'gamma.emit.operator)
  (use 'gamma.emit.tag)

  (def a {:tag :variable :name "a"})
  (def b {:tag :variable :name "b"})
  (emit (term :selector a :xx))
  (emit (term :<= a b))
  (emit (term :* a b))
    (emit (term :increment a))
    (emit (term :pre-decrement a))
    (emit (term :> a b))
    (emit (term :- a b))
    (emit (term :or a b))
    (emit (term :set-div a b))
    (emit (term :pre-increment a))
    ;;bug
    (emit (term :not a))
    (emit (term :>= a b))
    (emit (term :div a b))
    ;;bug
    (emit (term :conditional-choice))
    (emit (term :set+ a b))
    (emit (term :set- a b))
    (emit (term :xor a b))
    (emit (term :+ a b))
    (emit (term :!= a b))
    (emit (term :== a b))

    (emit (term :constructor
                {:tag :vector :length 2 :member-type :float}
                a))

    (emit (term :and a b))
    (emit (term :decrement a b))
    (emit (term :set a b))
    (emit (term :set* a b))
    (emit (term :aget a b))
    (emit (term :+- a b))
    (emit (term :< a b))



  )
