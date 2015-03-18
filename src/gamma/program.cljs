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
            gamma.emit.constructor
            [gamma.api :as g]))




(defn glsl [shader]
  (with-out-str
    (fipp.printer/pprint-document
      (emit/emit (:ir shader) shader)
      {:width 80})))

(defn ast [inputs]
  (apply g/block
         (mapv
           (fn [[k v]]
             (g/set k v))
           inputs)))


(defn shader [shader]
  (let [ast (ast shader)
        ir (gamma.compiler.core/compile ast)
        v (gamma.compiler.core/variables ir)
        locals (filter #(not (#{:attribute :uniform :varying}
                               (:storage %))) v)
        globals (filter #(#{:attribute :uniform :varying}
                          (:storage %)) v)
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
      (assoc p :glsl (glsl p)))))


(defn program [vertex-shader fragment-shader]
  {:tag :program
   :vertex-shader (shader vertex-shader)
   :fragment-shader (shader fragment-shader)})


(defn program-inputs [program]

  ;; {attribute {buffer} uniform {spec}}
  ;; if we want to share inputs across programs, gonna need to look at context
  ;; would pass such sharing info as a map to the context, rather than trying to infer it
  (into {}
        (map (fn [x] [x (webgl/input program x)])
             (into
               (:inputs (:vertex-shader program))
               (filter #(= :uniform (:storage %))
                       (:inputs (:fragment-shader program)))))))



(defn install-program [context program]
  (let [p
        (assoc program
          :context context
          :program (webgl/create-program
                     (:gl @context)
                     (get-in program [:vertex-shader :glsl])
                     (get-in program [:fragment-shader :glsl])))]
    (.useProgram (:gl @context) (:program p))
    (assoc p :inputs (program-inputs p))))




(defn draw [program data]

  (let [gl (:gl @(:context program))]
    ;(.useProgram  gl (:program program))
    (doseq [[variable input] (:inputs program)]
      (if-let [d (data variable)]
        (webgl/fill-input program input d)))

  (.viewport gl 0 0 500 500)
  ;(.clearColor gl 0.0 0.0 0.0 1.0)
  (.clear gl ggl/COLOR_BUFFER_BIT)


  (.drawArrays
    gl
    ggl/TRIANGLES
    0
    (:count data))))

(defn context [elt]
  (atom {:gl (webgl/webgl-context elt)}))

(comment
  (require 'gamma.program)

  (in-ns 'gamma.program)


    (def vs {{:tag :variable :name "gl_Position" :type :vec4}
           (g/vec4 (g/attribute "aAttr" :vec2) 0.0 1.0)})


  (def fs {{:tag :variable :name "gl_FragColor" :type :vec4}
           (g/vec4 0.2 0.4 0.8 1)})


  (def p (program vs fs))



  (document.getElementsByTagName("html")[0]).appendChild(document.createElement("body"))
  (document.getElementsByTagName("body")[0]).innerHTML="<canvas id=glcanvas width=500 height=500></canvas>"


  (def canvas-elt (.getElementById js/document "glcanvas"))



  (def d (webgl/normalize-data
           {(g/attribute "aAttr" :vec2) [[0 0.5] [0.5 0.6] [0.5 0]]}
           ))


  (let [c (atom {:gl (webgl/webgl-context canvas-elt)})
        p2 (install-program c p)]
    (draw p2 d))

  (def c (atom {:gl (webgl/webgl-context canvas-elt)}))
  (def p2 (install-program c p))

  (draw p2
        (webgl/normalize-data
          {(g/attribute "aAttr" :vec2) [[0 0.5] [0.5 0.6] [0.5 0.0]]}))



  )
