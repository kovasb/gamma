(ns transduce.reducers
  "Provides reducers support for State Transducers"
  (:require [clojure.core.reducers :as r])
  (:require-macros [transduce.macros :refer (defcurried)]))

(defcurried map-state
  "Like map, but threads a state through the sequence of transformations.
  For each x in coll, f is applied to [state x] and should return [state' x'].
  The first invocation of f uses init as the state."
  [f init coll]
  (r/reducer coll
    (fn [f1]
      (let [state (atom init)]
        (fn [acc x]
          (let [[state* x*] (f @state x)]
            (reset! state state*)
            (f1 acc x*)))))))

(defcurried mapcat-state
  "Like mapcat, but threads a state through the sequence of transformations.
  For each x in coll, f is applied to [state x] and should return [state' xs].
  The result is the concatenation of each returned xs."
  [f init coll]
  (r/reducer coll
    (fn [f1]
      (let [state (atom init)]
        (fn [acc x]
          (let [[state* xs] (f @state x)]
            (reset! state state*)
            (if (seq xs)
              (reduce f1 acc xs)
              acc)))))))

(defcurried each
  "Applies f to each item in coll, returns nil"
  [f coll]
  (reduce (fn [_ x] (f x) nil) nil coll))
