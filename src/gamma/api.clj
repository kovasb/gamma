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


;; these guys should also do arg checking and type inference
(defn ^:private gen-fn [tag]
  `(defn ~(symbol (name tag)) [& body#]
     (apply gamma.ast/term ~tag body#)
     #_(gamma.ast/->Term ~tag body# (gamma.ast/gen-term-id))))

(defn if [c a b]
  (ast/term :if c (ast/term :block a) (ast/term :block b)))


(defmacro ^:private gen-fns []
  `(do
     ~@(clojure.core/map gen-fn
                         (concat
                           (keys gamma.ast/functions)
                           (keys gamma.ast/operators)
                           [ :for :block :continue :break :discard]))))

(gen-fns)
