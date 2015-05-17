(ns gamma.compiler.lift-assignments
  (:use [gamma.ast :only [id? gen-term-id]]
        [gamma.compiler.common :only [get-element map-path]])
  )


(defn liftable? [db location]
  (let [e (get-element db location)]
    (or
     (= :shared (peek (pop (:path (:parent location)))))
     (and
       (#{:if} (:head e))
       (let [env (into #{} (:env (db (:id (:parent location)))))]
         (not
           (if env (env (:id e)) false)))))))


;; do not lift statements that have been bound from above.


(defn lift-assignments-sub [db location target-block-id]
  (if (liftable? db location)
    (update-in db [target-block-id :assignments] (fnil conj []) (:id location))
    db))

(defn get-target [db location target-block-id]
  (let [e (get-element db location)]
    (if (= :block (:head e))
      (:id e)
      target-block-id)))

;; do we need to topologically sort the assignments at a given level?


(defn lift-assignments [target-block-id]
  (fn [db location]
    [db
     ;; if path is in :shared, or is a statement, lift into target
     ;; problem is that the :shared bits of a statement must be inserted first


    [


     [:shared (map-path (lift-assignments target-block-id))]

     [:body (let [target (get-target db location target-block-id)]
               (map-path (lift-assignments target)))]

     (fn [db location]
       [(lift-assignments-sub db location target-block-id) nil])
     ]]))


