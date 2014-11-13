(ns gamma.emit.statement
  (:use [gamma.emit.emit :only [emit]]
        [gamma.ast :only [head body term ->Term]]))

;;;; STATEMENTS

(defmethod emit :break [x]
  "break")

(defmethod emit :continue [x]
  "continue")

(defmethod emit :discard [x]
  "discard")

(defmethod emit :block [x]
  (str (apply str (interpose ";\n" (map emit (body x)))) ";\n"))


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

(defmethod emit :if [x]
  (let [[test then] (body x)]
    (str "if(" (emit test) ")"
         "{" (emit then) "}")))


(defmethod emit :if-else [x]
  (let [[test then else] (body x)]
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