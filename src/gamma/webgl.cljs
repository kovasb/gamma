(ns gamma.webgl
  (:require [goog.webgl :as ggl])
  )


(defn webgl-context [canvas-element]
  (.getContext canvas-element "webgl"))


(defn load-shader [gl type source]
  (let [shader (.createShader gl type)]
    (if shader
      (do
        (.shaderSource gl shader source)
        (.compileShader gl shader)
        (let [compiled (.getShaderParameter gl ggl/COMPILE_STATUS)]
          (if compiled
            shader
            (throw. (js/Error. (str "failed to compile shader: "
                                    (.getShaderInfoLog gl shader)))))))
      (throw (js/Error. "Unable to create shader")))))



(defn create-program [gl vshader fshader]
  (let [vertex-shader (load-shader gl ggl/VERTEX_SHADER vshader)
        fragment-shader (load-shader gl ggl/FRAGMENT_SHADER fshader)]
    (let [program (.createProgram gl)]
      (.attachShader program vertex-shader)
      (.attachShader program fragment-shader)
      (.linkProgram gl program)
      (if (.getProgramParameter gl program ggl/LINK_STATUS)
        program
        (throw (js/Error. (str "failed to link program: "
                               (.getProgramInfoLog gl program))))))))


(defn attribute-input [context program attribute-name ]
  {:buffer (.createBuffer context)
   :location (.getAttribLocation program attribute-name)})

(defn uniform-input [program uniform-name]
  {:location (.getUniformLocation program uniform-name)})

(defn input [program variable]
  (assoc
    (if (= :attribute (:storage variable))
     (attribute-input
       (:gl @(:context program))
       (:program program)
       (:name variable))
     (uniform-input (:program program) (:name variable)))
    :variable variable))


(defn fill-attribute-input [gl buffer location data]
  (.bindBuffer gl ggl/ARRAY_BUFFER buffer)
  (.bufferData ggl/ARRAY_BUFFER data ggl/STATIC_DRAW)
  (.vertexAttribPointer gl
                        location
                        2
                        ggl/FLOAT
                        false 0 0)
  (.enableVertexAttribArray gl location))

(defn fill-uniform-input [gl type data]
  (case type
    :vec4 (.uniformf4 gl (nth data 0) (nth data 1) (nth data 2) (nth data 3))))


(defn fill-input [program input data]
  (let [gl (:gl @(:context program))]
    (if (= :attribute (:storage (:variable input)))
     (fill-attribute-input gl (:buffer input) (:location input) data)
     (fill-uniform-input gl (:type input) data))))






;; input: {attribute [ [vertex] [vertex] ] }
;; output: {attribute typedarray :count count}

(defn normalize-attribute [data]
  (js/Float64Array. (clj->js (vec (flatten data)))))


(defn normalize-data [data]
  (let [x (group-by #(:storage (first %)) data)]
    (assoc
      (into
       {}
       (concat
         (map (fn [[k v]] [k (normalize-attribute v)]) (:attribute x))
         (:uniform x)))
      :count (first (map #(count (last %)) (:attribute x))))))

;; can attribute-buffer ops be done in a different order? tie together, then write data?

(comment
  {:tag    :attribute-buffer
  :buffer the-buffer
  :attribute the-attribute

  }

  {:tag :gl-context
   :programs []
   :current-program x
   :gl-context gl-object
   :attribute-buffers
   {attribute {:buffer the-buffer :location position} }

   ;; or

   :inputs {attribute buffer uniform {:location x }}

   ;; or organize by buffer

   ;; how to share buffers between programs?

   ;; program can contain an atom pointing to the gl context object, which then keeps track of state


   }



  )


(comment
  (defn attribute-buffer [gl data]
    ;; 1. create buffer object
    (let [vertexBuffer (.createBuffer gl)
          attribute-position (.getAttribLocation (.program gl) attribute-name)

          ]

      ;; 2. bind buffer object to a target
      (.bindBuffer gl gl.ARRAY_BUFFER vertexBuffer)

      ;; 3. write data into buffer object
      (.bufferData gl.ARRAY_BUFFER data gl.STATIC_DRAW)
      ;; is it possible to do step 2&3 later?


      ;; 4. assign buffer object to attribute variable
      (.vertexAttribPointer gl
                            attribute-position
                            2
                            gl.FLOAT
                            false 0 0)

      ;; 5. enable assignment
      (.enableVertexAttribArray gl attribute-position)
      ))

  (defn draw [gl]
    (.clearColor gl 0.0 0.0 0.0 1.0)
    (.clear gl.COLOR_BUFFER_BIT)
    (.drawArrays gl.POINTS 0 1))
  )







