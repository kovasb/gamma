(ns gamma.emit.statement
  (:use [gamma.emit.emit :only [emit]]
        [gamma.ast :only [head body term ->Term]]))

;;;; STATEMENTS

(defmethod emit :break [db x]
  "break")

(defmethod emit :continue [db x]
  "continue")

(defmethod emit :discard [db x]
  "discard")

(defmethod emit :block [db x]
  [:group (interpose [:line] (map (fn [y] [:group (emit db (db y)) ";"]) (body x)))])

(defmethod emit :set [db x]
  [:group (emit db (db (first (body x)))) "=" (emit db (db (second (body x))))])





(comment
  [:group
   (name (head x))
   "("
   [:line ""]
   [:nest 2
    (interpose [:span "," :line]
               (map #(emit db (db %)) (body x)))]
   ")"])

(defmethod emit :if [db x]
  (let [[test then else] (body x)]
    [:group "if(" (emit db (db test)) ")" "{" (emit db (db then)) "}"]))


(def qualifier-order
  [[:invariant :storage :precision]
   [:storage :parameter :precision]])


(defmethod emit :declaration [x]
  (let [v (first (body x))]
    (str (if (:invariant v) "invariant " "")
         (if (:storage v) (str (name (:storage v)) " ") "")
         (if (:precision v) (str (name (:precision v)) " ") "")
         (emit (:type v)) " "
         (:name v))))


(defmethod emit :for [x]
  (let [[init condition increment bod] (body x)]
    (str "for("
         (emit init) ";"
         (emit condition) ";"
         (emit increment) ";){"
         (emit bod)
         "}")))




(defmethod emit :if-else [x]
  (let [[test then else] (body x)]
    [:group "if" "(" ()]
    (str "if(" (emit test) ")"
         "{" (emit then) "}"
         "else" "{"
         (emit else)
         "}"
         )))


(comment
  (use 'gamma.emit.statement)
  (in-ns 'gamma.emit.statement)
  (use 'gamma.emit.tag)
  (use 'gamma.api)

   (def a {:tag :variable :name "a"})
  (def b {:tag :variable :name "b"})

  (emit (term :block (variable "a") (variable "b")))
  (emit
    (term :for
          (variable "a")
          (variable "b")
          (variable "c")
          (term :block (variable "d") (variable "e"))))

  (emit (term :if (variable "a")
                  (term :block (variable "b") (variable "c"))))

  (print
    (emit (term :if-else (variable "a")
               (term :block (variable "b") (variable "c"))
               (term :block (variable "d") (variable "e")))))


  )