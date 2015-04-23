(ns gamma.compiler.move-assignments
  (:use [gamma.ast :only [id? gen-term-id]]
        [gamma.compiler.common :only [get-element map-path assoc-elements assoc-in-location]])
  )


;; move assignments into the body of blocks

(defn helper [db location]
  (let [e (get-element db location)]
    (if (= :block (:head e))
      (let [a (:assignments e) b (:body e)]
        (assoc
          db
          (:id e)
          (assoc (dissoc e :assignments) :body (vec (concat a b))))
        )
      db)))

(defn move-assignments []
  (fn [db location]
    [(helper db location) [ [:body (map-path (move-assignments))]]]))