(ns gamma.emit.fun
  (:use [gamma.emit.emit :only [emit]]
        [gamma.ast :only [head body term ]]))


;;;; FUNCTIONS



(defmethod emit :function [db x]
  [:group
   (name (head x))
   "("
   [:line ""]
   [:nest 2
    (interpose [:span "," :line]
               (map #(emit db (db %)) (body x)))]
   ")"])

(defmethod emit :swizzle [db x]
  [:span (emit db (db (first (body x))))  "." (name (:swizzle x))])

