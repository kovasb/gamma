(ns gamma.compiler.bubble-term
  (:use [gamma.ast :only [id?]]))


(defn parent-bubbles [db bubble]
  (map
    (fn [x]
      (if (= :if (:head (db x)))
        (assoc bubble :current x :conditional true)
        (assoc bubble :current x)))
    (get-in db [(:current bubble) :parents])))


;; term structure {:shared {nodeid {:conditional bool :unconditional int} }}

(defn bubble-term [db queue]
  (let [bubble (first queue)]
    (if (nil? bubble)
      ;; base case. If bubble is nil, return the db we've built up
      db
      (if (= :root (:current bubble))
        ;; if bubble has reached the root node, recur to the next bubble in the queue
        (recur db (rest queue))
        ;; if not at the root node, inspect and mark node and recur
        (let [info-path [(:current bubble) :shared (:start bubble)]
              node-info (get-in db info-path)]
          (if (:conditional bubble)
            ;; bubble is conditional
            (if (nil? node-info)
              ;; node hasn't been visited before; mark and bubble
              (let [parent-bubbles (parent-bubbles db bubble)]
                (recur (assoc-in db info-path {:conditional true}) (concat (rest queue) parent-bubbles)))
              (if (:unconditional node-info)
                ;; node has been visited by an unconditional bubble. mark conditional and recur to next bubble
                (recur (assoc-in db (conj info-path :conditional) true) (rest queue))
                ;; node has been visited by conditional bubble. recur to next bubble
                (recur db (rest queue))))

            ;; bubble is unconditional
            (if (or (nil? node-info) (nil? (:unconditional node-info)))
              ;; node has not been visited by an unconditional bubble. mark and bubble
              (let [parent-bubbles (parent-bubbles db bubble)]
                (recur (assoc-in db info-path (assoc node-info :unconditional 1)) (concat (rest queue) parent-bubbles)))
              ;; node has been visited by unconditional bubble. increment and recur to next bubble.
              (recur
                (assoc-in db info-path (assoc node-info :unconditional (+ 1 (:unconditional node-info))))
                (rest queue))))

          )))))

(defn bubble-terms [db]
  (reduce bubble-term db
          (map
            (fn [x] (map (fn [y] {:start (:id x)  :current y}) (:parents x)))
            (filter #(clojure.core/< 1 (count (:parents %)))
                    (map last db)))))
