(ns gamma.compiler.core
  (:use [gamma.compiler.common
         :only [get-element map-path location-conj]])
  (:use [gamma.ast :only [id? term]]
        [gamma.compiler.flatten-ast :only [flatten-ast]])
  (:require [fipp.edn :refer (pprint) :rename {pprint fipp}]
            fipp.printer))





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
    (if (> c 100 )
      db
      (if-let [f (peek stack)]
       (let [[db ops]
             (do
               ;(println [(f 1) (f 0)])
               ((f 1) db (f 0)))]

         (recur db (push-ops db ops (f 0) (pop stack)) (inc c)))
       db))))

(defn transform [db f]
  (transform-1 db [[{:id :root :path []} f]]))





(defn walk [db pre]
  (transform
    db
    (fn walk-fn [db path]
     [(pre db path) [[:body (map-path walk-fn)]]])))




(comment
  ;; smiple recursion
  (def db
    (flatten-ast (let [x (term :foo)]
                   (term :bar
                         (term :baz x)
                         (term :baz x)))))

  (walk db
        (fn [db path] (println ["print" path]) db)
        (fn [db path] [db nil]))

  (use 'clojure.stacktrace)
  (clojure.stacktrace/e)


  )

