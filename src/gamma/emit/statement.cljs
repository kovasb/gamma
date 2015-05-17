(ns gamma.emit.statement
  (:use [gamma.emit.emit :only [emit]]
        [gamma.ast :only [head body term]]))

;;;; STATEMENTS

(defmethod emit :break [db x]
  "break")

(defmethod emit :continue [db x]
  "continue")

(defmethod emit :discard [db x]
  "discard")

(defmethod emit :block [db x]
  [:group
   (interpose :break
              (map (fn [y]
                     [:group
                      (emit db (db y))
                            (if (#{:if :block} (head (db y)))
                                "" ";")]) (body x)))])

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
    [:group
     "if("
     (emit db (db test))
     ")"
     "{"
     [:nest 2 :break (emit db (db then))]

     "}"
     :break
     [:nest 2 "else {" :break [:nest 2 (emit db (db else))]]

     "}"]
    ))





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
         "}")))


