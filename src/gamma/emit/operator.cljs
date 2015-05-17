(ns gamma.emit.operator
  (:use [gamma.emit.emit :only [emit]]
        [gamma.ast :only [head body term]]))


;;; OPERATOR CASES

(defmethod emit :infix [db x]
  (let [literal (:literal (gamma.ast/operators (head x)))]
    [:group "(" (interpose (str " " literal " ") (map #(emit db (db %)) (body x))) ")"]))

(defmethod emit :prefix [db x]
  (let [literal (:literal (gamma.ast/operators (head x)))]
    [:group "(" (str " " literal ) (emit db (db (first (body x)))) ")"]))

(defmethod emit :postfix [db x]
  (let [literal (:literal (gamma.ast/operators (head x)))]
    [:group "(" (emit db (db (first (body x)))) (str literal " ") ")"]))


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

