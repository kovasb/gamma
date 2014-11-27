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

  (defmethod emit :function [x]
    [:group
     (name (head x))
     "("
     [:line ""]
     [:nest 2
      (interpose [:span "," :line]
                 (map emit (body x)))]
     ")"])

  (fipp.printer/pprint-document
    (emit (term :max 1 (term :max 2 3 4))) {:width 15})

  )