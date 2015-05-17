(ns gamma.compiler.insert-variables
  (:use [gamma.ast :only [id? gen-term-id]]
        [gamma.compiler.common :only [get-element map-path assoc-in-location assoc-elements]])
  )


(defn insert-variables-sub [db location]
  (let [id (gen-term-id)]
    (-> db
        (assoc-in-location (:parent location) id)
        (assoc-elements [{:id    id :head :literal :tag :term
                          :type  (:type (get-element db location))
                          :value {:tag  :variable :id (:id (:id location))
                                  :type (:type (get-element db location))}}]))))

(defn parent-env [db location]
  (get (db (:id (:parent location))) :env {}))

(defn insert-variables [env]
  (fn [db location]
    (let [elt (get-element db location)
         ]
      (if (env (:id elt))
       [(insert-variables-sub db location) nil]
       (let [new-env (into env (concat
                                 (:assignments elt)
                                 (:env elt)))]
         [
          db
          [[:assignments (map-path (insert-variables env))]
           [:body (map-path (insert-variables new-env))]
           ]])))))


