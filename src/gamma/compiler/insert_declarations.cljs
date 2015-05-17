(ns gamma.compiler.insert-declarations
  (:use [gamma.ast :only [id? gen-term-id]]
        [gamma.compiler.common :only [get-element map-path assoc-in-location assoc-elements]]
        [gamma.compiler.core :only [transform]])
    )


(defn walk [db pre]
  (transform
    db
    (fn walk-fn [db path]
      [(pre db path) [[:body (map-path walk-fn)]]])))



(defn variables [db]
  (let [a (atom #{})]
    (walk db (fn [db location]
               (let [e (get-element db location)]
                 (if (= :literal (:head e))
                   (if (= :variable (:tag (:value e)))
                     (do
                       (swap! a conj (:value e))
                       (if (:type (:value e))
                         nil
                         (println location))
                       ))))
               db))
    @a))

