(ns gamma.compiler.common
  (:use [gamma.ast :only [id? term]]))

(defn get-element [db location]
   (get-in (db (:id location)) (:path location)))

(defn map-path [f]
  (fn [db path]
    [db
     (let [elt (get-element db path)]
       (if (vector? elt)
         (mapv #(vector % f) (range 0 (count elt)))
         (if (map? elt)
           (mapv #(vector % f) (keys elt))
           nil)))]))

(defn assoc-in-location [db location val]
  (let [id (:id location)]
    (assoc db id (assoc-in (db id) (:path location) val))))


(defn assoc-in-parent [db location value]
  (let [p (:parent location)
        pid (:id p)]
    (assoc db pid (assoc-in (db pid) (:path p) value))))



(defn location-conj [db location key]
  (let [base-location (update-in location [:path] conj key)
        elt (get-element db base-location)]
    (if (id? elt)
      {:id elt :path [] :parent base-location}
      base-location)))


(defn merge-elements
  ([db elements] (reduce #(update-in %1 [(:id %2)] (fnil merge {}) %2) db elements))
  ([db location elements]
   (-> db
       (merge-elements elements)
       (assoc-in-location location (mapv :id elements)))))
(defn assoc-elements
  ([db elements] (reduce #(assoc %1 (:id %2) %2) db elements))
  ([db location elements]
   (-> db
       (assoc-elements elements)
       (assoc-in-location location (mapv :id elements)))))
