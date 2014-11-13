(ns gamma.emit.function
  (:use [gamma.emit.emit :only [emit]]
        [gamma.ast :only [head body term ->Term]]))


;;;; FUNCTIONS

(defmethod emit :function [x]
  (apply
    str
    (flatten [(name (head x))
              "("
              (interpose ", " (map emit (body x)))
              ")"])))


(comment
  (use 'gamma.emit.function)
  (in-ns 'gamma.emit.function)

  (emit (term :max 1 2))

  )