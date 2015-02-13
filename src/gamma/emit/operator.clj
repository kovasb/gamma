(ns gamma.emit.operator
  (:use [gamma.emit.emit :only [emit]]
        [gamma.ast :only [head body term ->Term]]))


;;; OPERATOR CASES

(defmethod emit :infix [db x]
  (let [literal (:literal (gamma.ast/operators (head x)))]
    [:group (interpose (str " " literal " ") (map #(emit db (db %)) (body x)))]))

(defmethod emit :prefix [db x]
  (let [literal (:literal (gamma.ast/operators (head x)))]
    [:group (str " " literal ) (emit db (db (first (body x))))]))

(defmethod emit :postfix [db x]
  (let [literal (:literal (gamma.ast/operators (head x)))]
    [:group (emit db (db (first (body x)))) (str literal " ")]))


(defmethod emit :constructor [db x]
  [:group
   (emit db (db (first (body x))))
   "("
   [:line ""]
   [:nest 2
    (interpose [:span "," :line]
               (map #(emit db (db %)) (rest (body x))))]
   ")"])

(defmethod emit :conditional-choice [db x])


(defmethod emit :aget [db x]
  (str (emit (first (body x))) "[" (emit (second (body x))) "]"))


(defmethod emit :selector [db x]
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
