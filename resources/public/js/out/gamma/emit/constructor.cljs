(ns gamma.emit.constructor
  (:use [gamma.emit.emit :only [emit]]
        [gamma.ast :only [head body term ]]))

(defmethod emit :vec4 [db x]
  [:group
   (name (head x))
   "("
   [:line ""]
   [:nest 2
    (interpose [:span "," :line]
               (map #(emit db (db %)) (body x)))]
   ")"])