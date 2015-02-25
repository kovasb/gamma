(ns gamma.api
  (:refer-clojure
  :exclude [aget
            not
            or
            set
            *
            +
            -
            <
            >
            <=
            >=
            ==
            max
            mod
            and
            if
            for
            ])
  (:require [gamma.ast :as ast])
  (:require-macros [gamma.api :as api-macro])
  )


(defn vector-type [l]
  {:tag :vector :member-type :float :length l})

(defn array-type [type length]
  {:tag :array :member-type type :length length})

(defn gl-position []
  {:tag :variable :name "gl_Position" :type (vector-type 4)})

(defn gl-point-size []
  {:tag :variable :name "gl_PointSize" :type :float})

(defn attribute [name type]
  {:tag :variable :name name :type type :storage :attribute})

(defn uniform [name type]
  {:tag :variable :name name :type type :storage :uniform})

(defn variable
  ([x] (variable x nil))
  ([x t] {:tag :variable :name x :type t}))




(defn if [c a b]
  (let [at (:type a) bt (:type b)]
    (if (= at bt)
      (assoc
        (ast/term :if c
                 (ast/term :block a)
                 (ast/term :block b))
        :type at)
      (throw (js/Error. (str "Branches of if term are not of same type: " at ", " bt) )))))







(defn infer-parameterized-type [rule args]
  (let [prule (:parameter rule)
        input-types (:input rule)]
    (if (not= (count input-types) (count args))
      :fail
      (loop [input args
             expected input-types
             parameter nil]
        (if (clojure.core/or (empty? expected) (empty? input))
          (if (clojure.core/and (empty? expected) (empty? input))
            (if (prule (:output rule)) parameter (:output rule))
            :fail)
          (let [i (first input) e (first expected) p (prule e)]
            (if p
              ;; expecting a parameterized type
              (if parameter
                ;; already have determined the concrete parameter
                (if (= parameter i)
                  (recur (next input) (next expected) parameter)
                  :fail)
                ;; need to determine concrete parameter
                (if (p i)
                  ;; type is within the parameterized range
                  (recur (next input) (next expected) (p i))
                  :fail))
              ;; not expected a parameterized type
              (if (= i e)
                (recur (next input) (next expected) parameter)
                :fail))))))))


(comment
  (infer-parameterized-type {:parameter {:T #{:vec3 :vec4}}
                             :input     [:T :bool :T] :output :T}
                            [:vec4 :bool :vec4]))


(defn build-standard-function-term [name specs args]
  (let [t (apply ast/term name args)]
    (if-let [result
             (first
               (filter #(not= :fail %)
                       (map #(infer-parameterized-type % (map :type (:body t)))
                            specs)))]
      (assoc t :type result)
      (throw (js/Error. (apply str "Wrong argument types for term " (clojure.core/name name)
                                ": " (interpose " ," (map :type (:body t))))))
      )))




(api-macro/gen-fns)
