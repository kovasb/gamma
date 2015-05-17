(ns gamma.api
  (:refer-clojure
  :exclude [aget
            not
            not=
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



(defn attribute [name type]
  {:tag :variable :name name :type type :storage :attribute})

(defn uniform [name type]
  {:tag :variable :name name :type type :storage :uniform})

(defn varying [name type precision]
  {:tag :variable :name name :type type :storage :varying :precision precision})

(defn variable
  ([x] (variable x nil))
  ([x t] {:tag :variable :name x :type t}))

;; built-in glsl variables

(defn gl-position []
  {:tag :variable :name "gl_Position" :type :vec4})

(defn gl-point-size []
  {:tag :variable :name "gl_PointSize" :type :float})

(defn gl-frag-coord []
  {:tag :variable :name "gl_FragCoord" :type :vec4})

(defn gl-front-facing []
  {:tag :variable :name "gl_FrontFacing" :type :bool})

(defn gl-point-coord []
  {:tag :variable :name "gl_PointCoord" :type :vec2})

(defn gl-frag-color []
  {:tag :variable :name "gl_FragColor" :type :vec4})

(defn gl-frag-data [n]
  {:tag :variable :name (str "gl_FragData" n) :type :vec4})


(defn ensure-term [x]
  (if (ast/term? x)
    x
    (ast/literal x)))

;; operators

(defn arithmetic-type [a b]
  (let [t (into #{} (map :type [a b]))]
    (if (= 1 (count t))
      (#{:float :int :vec2 :vec3 :vec4 :ivec2 :ivec3 :ivec4}
        (first t)))))


(defn + [a b]
  (let [a (ensure-term a)
        b (ensure-term b)
        t (arithmetic-type a b)]
    (if t
      (assoc (ast/term :+ a b) :type t)
      (throw (js/Error. (str "Arguments to + must have type :int or :float"))))))

(defn - [a b]
  (let [a (ensure-term a)
        b (ensure-term b)
        t (arithmetic-type a b)]
    (if t
      (assoc (ast/term :- a b) :type t)
      (throw (js/Error. (str "Arguments to - must have type :int or :float"))))))

(defn * [a b]
  (let [a (ensure-term a)
        b (ensure-term b)
        at (:type a)
        bt (:type b)]
    (if-let
      [t (cljs.core/or
           ({[:float :float] :float
            [:mat4 :vec4]   :vec4
            [:mat3 :vec3]   :vec3
            [:mat2 :vec2]   :vec2
            [:mat4 :mat4]   :mat4
            [:mat3 :mat3]   :mat3
            [:mat2 :mat2]   :mat2
            [:vec4 :vec4]   :vec4
            [:vec3 :vec3]   :vec3
            [:vec2 :vec2]   :vec2}
            [at bt])
           ({
             #{:mat2 :float} :mat2
             #{:mat3 :float} :mat3
              #{:mat4 :float} :mat4
              #{:vec2 :float} :vec2
              #{:vec3 :float} :vec3
              #{:vec4 :float} :vec4} #{at bt}))]
      (assoc (ast/term :* a b) :type t)
      (throw (js/Error. (str "Arguments to * of incompatible type: " at "," bt))))))

(defn div [a b]
  (let [a (ensure-term a)
        b (ensure-term b)
        t (arithmetic-type a b)]
    (if t
      (assoc (ast/term :div a b) :type t)
      (throw (js/Error. (str "Arguments to div must have type :int or :float"))))))



(defn < [a b] (assoc (ast/term :< (ensure-term a) (ensure-term b)) :type :bool))

(defn > [a b] (assoc (ast/term :> (ensure-term a) (ensure-term b)) :type :bool))

(defn <= [a b] (assoc (ast/term :<= (ensure-term a) (ensure-term b)) :type :bool))

(defn >= [a b] (assoc (ast/term :>= (ensure-term a) (ensure-term b)) :type :bool))

(defn == [a b] (assoc (ast/term :== (ensure-term a) (ensure-term b)) :type :bool))

(defn not= [a b] (assoc (ast/term :!= (ensure-term a) (ensure-term b)) :type :bool))

(defn and [a b] (assoc (ast/term :and (ensure-term a) (ensure-term b)) :type :bool))

(defn or [a b] (assoc (ast/term :or (ensure-term a) (ensure-term b)) :type :bool))

(defn xor [a b] (assoc (ast/term :xor (ensure-term a) (ensure-term b)) :type :bool))

(defn not [a] (assoc (ast/term :not (ensure-term a)) :type :bool))



(defn if [c a b]
  (let [a (ensure-term a)
        b (ensure-term b)
        at (:type a) bt (:type b)]
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
    (if (cljs.core/not= (count input-types) (count args))
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





(defn build-standard-function-term [name specs args]
  (let [t (apply ast/term name args)]
    (if-let [result
             (first
               (filter #(cljs.core/not= :fail %)
                       (map #(infer-parameterized-type % (map :type (:body t)))
                            specs)))]
      (assoc t :type result)
      (throw (js/Error. (apply str "Wrong argument types for term " (clojure.core/name name)
                                ": " (interpose " ," (map :type (:body t))))))
      )))


(api-macro/gen-fns)


(defn swizzle-type [x c]
  (let [l (count (name c))
        ]
    ({1 :float 2 :vec2 3 :vec3 4 :vec4} l)))


(defn swizzle [x c]
  (assoc
    (ast/term :swizzle x)
    :swizzle c
    :type (swizzle-type x c)))


