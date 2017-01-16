(ns gamma.compiler.lift-assignments
  (:use [gamma.ast :only [id? gen-term-id]]
        [gamma.compiler.common :only [get-element map-path]])
  )


;; transformation from :shared (can occur on any node) to :assignments (can occur only on blocks?)

(defn liftable? [db location]
  (let [e (get-element db location)]
    (or
     (= :shared (peek (pop (:path (:parent location)))))
     ;; if expr is on the shared path, then its liftable
     (and
       ;; if an 'if' is not in the parent's env
       ;; if's need to be placed into a block
       (#{:if} (:head e))
       (let [env (into #{} (:env (db (:id (:parent location)))))]
         (not
           (if env
             (env (:id e))
             false)))))))


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


;; could be done as a bottom-up walk, instead of top down + passing the id along?

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


