(ns gamma.compiler.move-assignments
  (:use [gamma.ast :only [id? gen-term-id]])
  (:use [gamma.compiler.common :only [get-element map-path assoc-elements assoc-in-location]]))


;; move assignments into the body of blocks

(defn move-assignments []
  (fn [db location ]
    (let [e (get-element db location)]
      (if (= :block (:head e))
        (let [a (:assignments e) b (:body e)]
          [(assoc-in db [(:id e) :body] (concat a b))])
        [db nil]))))