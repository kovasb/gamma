(ns gamma.emit.emit
  (:use [gamma.ast :only [term  head body]]))


(defn function? [x]
  (gamma.ast/functions (head x)))

(defn operator-class [x]
  (if-let [o (gamma.ast/operators (head x))]
    (:class o)))

(defn primitive? [x]
  (or (true? x) (false? x) (integer? x) (number? x)))

(defn constructor? [x]
  (#{:vec2 :vec3 :vec4 :bvec2 :bvec3 :bvec4 :ivec2 :ivec3 :ivec4 :mat2 :mat3 :mat4}
    (:head x)))

(defn emit-dispatch [db x]
  (if (primitive? x)
    :primitive
    (if (#{:float :bool :int} x)
      :primitive-type
      (if
        (constructor? x)
        :constructor
        (if (function? x)
         :function
         (if-let [c (operator-class x)]
           c
           (if-let [h (head x)]
             h
             (:tag x))))))))


(defmulti emit emit-dispatch)

(defmethod emit :primitive [db x]
  (if (number? x)
    (let [tmp (str x)]
      (if (pos? (.indexOf tmp "."))
        tmp
        (str tmp ".0")))
    (str x)))

(defmethod emit :primitive-type [db x] (name x))

(defmethod emit :literal [db x] (emit db (:value x)))

(defmethod emit nil [db x] (println [:nil x]))
