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
        ;; some kind of mechanism to know where we are in the db
        (conj s [(location-conj db location (first o)) (second o)])
        (conj s [location o])))
    stack
    ;; make sure certain nodes get processed before others?
    (reverse ops)

    ))


;; a way of walking a tree that is represented as a map of nodes
;; stack contains pairs of (db-location, fn-to-appy) aka ops
;; fns consume the current db and a location, and return new db and list of new ops
;; fns are typically closures that contain details of what to do to the given node

(defn transform-1 [db stack]
  (loop [db db stack stack c 0]
    (if-let [f (peek stack)]
      (let [[db ops]
            (do
              ;(println [(f 1) (f 0)])

              ;; invoke function at position 1 on the current db and any args at position 0
              ;; return new db and a list of further ops
              ((f 1) db (f 0))

              )]

        (recur db

               (push-ops
                 db
                 ops
                 (f 0)                                      ;; 'location'
                 (pop stack))

               (inc c)))
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

(comment

  (require 'gamma.compiler.core)
  (gamma.compiler.core/compile (g/+ 1 2))



  (in-ns 'gamma.compiler.core)

  (require '[gamma.api :as g])

  (def input (g/+ 1 2))

  (flatten-ast input)

  (bubble-terms (flatten-ast input))

  (separate-usages
    (bubble-terms (flatten-ast input)) {} #{})

  (transform
    {:root {:source-id :root :id :root}}
    (separate-usages
      (bubble-terms (flatten-ast input)) {} #{}))












  )

