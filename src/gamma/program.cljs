(ns gamma.program
  (:require [gamma.webgl :as webgl]
            [goog.webgl :as ggl]
            gamma.compiler.core
            fipp.printer
            [gamma.emit.emit :as emit]
            gamma.emit.fun
            gamma.emit.operator
            gamma.emit.statement
            gamma.emit.tag
            gamma.emit.construct
            [gamma.api :as g]))


(defn precision-defaults [p]
  (let [x (map (fn [[k v]] (str "precision " (name v) " " (name k) ";\n")) p)]
    (if (empty? x)
      ""
      (apply str x))))


(defn glsl [shader opts]
  (let [p (:precision opts)]
    (str
      (precision-defaults p)
      (with-out-str
       (fipp.printer/pprint-document
         (emit/emit (:ir shader) shader)
         {:width 80})))))


(defn ast [inputs]
  (apply g/block
         (mapv
           (fn [[k v]]
             (g/set k v))
           inputs)))


(defn shader [shader opts]
  (let [ast (ast shader)
        ir (gamma.compiler.core/compile ast)
        v (gamma.compiler.core/variables ir)
        locals (filter
                 #(not
                   (#{:attribute :uniform :varying} (:storage %)))
                 v)
        globals (filter
                  #(#{:attribute :uniform :varying} (:storage %))
                  v)
        outputs (keys shader)
        inputs (clojure.set/difference (into #{} globals) (into #{} outputs))
        ]
    (let
      [p
       {:tag     :shader
        :inputs  inputs
        :outputs outputs
        :locals  locals
        :ir      ir
        :ast     ast}]
      p
      (assoc p :glsl (glsl p opts)))))



(defn program-inputs [vs fs]
  (into
    (:inputs vs)
    (filter #(= :uniform (:storage %))
            (:inputs fs))))

(defn program
  ([x] (program x {}))
  ([x opts]
   (let [{:keys [vertex-shader fragment-shader]} x
         vs (shader vertex-shader opts) fs (shader fragment-shader opts)]
     {:tag             :program
      :vertex-shader   vs
      :fragment-shader fs
      :inputs          (program-inputs vs fs)})))







