(ns gamma.compiler.core
  (:use [gamma.compiler.common :only [get-element map-path location-conj]]
        [gamma.ast :only [id? term]]
        [gamma.compiler.flatten-ast :only [flatten-ast]]
        [gamma.compiler.bubble-term :only [bubble-terms]]
        [gamma.compiler.insert-assignments :only [insert-assignments]]
        [gamma.compiler.lift-assignments :only [lift-assignments]]
        [gamma.compiler.separate-usages :only [separate-usages]]
        [gamma.compiler.insert-variables :only [insert-variables]]
        [gamma.compiler.move-assignments :only [move-assignments]]
        ))




(defn push-ops [db ops location stack]
  (reduce
    (fn [s o]
      (if (vector? o)
        (conj s [(location-conj db location (first o)) (second o)])
        (conj s [location o])))
    stack
    (reverse ops)))


(defn transform-1 [db stack]
  (loop [db db stack stack c 0]
    (if-let [f (peek stack)]
      (let [[db ops]
            (do
              ;(println [(f 1) (f 0)])
              ((f 1) db (f 0)))]

        (recur db (push-ops db ops (f 0) (pop stack)) (inc c)))
      db)))

(defn transform [db f]
  (transform-1 db [[{:id :root :path []} f]]))





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

(defn compile [input]
  (->
    (transform
      {:root {:source-id :root :id :root}}
      (separate-usages
        (bubble-terms (flatten-ast input)) {} #{}))
    (transform (lift-assignments :root))
    (transform (insert-variables #{}))
    (transform (insert-assignments))
    (transform (move-assignments))))



