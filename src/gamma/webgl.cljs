(ns gamma.webgl
  (:require [goog.webgl :as ggl]))


(defn webgl-context [canvas-element]
  (.getContext canvas-element "webgl"))


(defn load-shader [gl type source]
  (let [shader (.createShader gl ({:vertex ggl/VERTEX_SHADER
                                   :fragment ggl/FRAGMENT_SHADER} type))]
    (if shader
      (do
        (.shaderSource gl shader source)
        (.compileShader gl shader)
        (let [compiled (.getShaderParameter gl shader ggl/COMPILE_STATUS)]
          (if compiled
            shader
            (throw (js/Error. (str "failed to compile " (name type) " shader:"
                                    (.getShaderInfoLog gl shader)))))))
      (throw (js/Error. "Unable to create shader")))))



(defn create-program [gl vshader fshader]
  (let [vertex-shader (load-shader gl :vertex vshader)
        fragment-shader (load-shader gl :fragment fshader)]
    (let [program (.createProgram gl)]
      (.attachShader gl program vertex-shader)
      (.attachShader gl program fragment-shader)
      (.linkProgram gl program)
      (if (.getProgramParameter gl program ggl/LINK_STATUS)
        program
        (throw (js/Error. (str "failed to link program: "
                               (.getProgramInfoLog gl program))))))))

(comment
  (def gl (:gl @gamma.program.c) )
  (def vshader (:glsl (:vertex-shader gamma.program/p)))
  (def fshader (:glsl (:fragment-shader gamma.program/p)))



  (def vertex-shader (load-shader gl :vertex vshader))
  (def fragment-shader (load-shader gl :fragment fshader))
  (def prog (.createProgram gl))

  (.attachShader gl prog vertex-shader)
  (.attachShader gl prog fragment-shader)
  (.linkProgram gl prog)
  (.getProgramParameter gl prog ggl/LINK_STATUS)




  )


(defn attribute-input [context program attribute-name ]
  {:buffer (.createBuffer context)
   :location (.getAttribLocation context program attribute-name)})

(defn uniform-input [context program uniform-name]
  {:location (.getUniformLocation context program uniform-name)})

(defn texture-input [context program uniform-name]
  {:location (.getUniformLocation context program uniform-name)
   :texture (.createTexture context)})

(defn input [program variable]
  (assoc
    (cond
      (= :attribute (:storage variable))
      (attribute-input
        (:gl @(:context program))
        (:program program)
        (:name variable))

      (and (= :uniform (:storage variable)) (= :sampler2D (:type variable)))
      (texture-input
        (:gl @(:context program))
        (:program program)
        (:name variable))

      (= :uniform (:storage variable))
      (uniform-input
        (:gl @(:context program))
        (:program program)
        (:name variable)))

      :variable variable))



(defn fill-attribute-input [gl input data ]
  (let [buffer (:buffer input)
        location (:location input)]
    (.bindBuffer gl ggl/ARRAY_BUFFER buffer)
    (.bufferData gl ggl/ARRAY_BUFFER data ggl/STATIC_DRAW)

    (.vertexAttribPointer gl
                          location
                          ({:float 1 :vec2 2 :vec3 3 :vec4 4}
                            (:type (:variable input)))
                          ggl/FLOAT
                          false 0 0)
    (.enableVertexAttribArray gl location)))

(defn fill-texture-input [gl input data]
  (let [texture (:texture input)
        location (:location input)]
    (.pixelStorei gl ggl/UNPACK_FLIP_Y_WEBGL 1)
    (.activeTexture gl ggl/TEXTURE0)
    (.bindTexture gl ggl/TEXTURE_2D texture)
    (.texParameteri gl ggl/TEXTURE_2D ggl/TEXTURE_MIN_FILTER ggl/LINEAR)
    (.texImage2D gl
                 ggl/TEXTURE_2D
                 0
                 ggl/RGB
                 ggl/RGB
                 ggl/UNSIGNED_BYTE
                 data)
    (.uniform1i gl location 0)))



(defn fill-uniform-input [gl input data]
  (let [location (:location input)
        type (:type (:variable input))]
    (case type
     :bool (.uniform1fv gl location data)
     :bvec2 (.uniform2fv gl location data)
     :bvec3 (.uniform3fv gl location data)
     :bvec4 (.uniform4fv gl location data)
     :float (.uniform1fv gl location data)
     :vec2 (.uniform2fv gl location data)
     :vec3 (.uniform3fv gl location data)
     :vec4 (.uniform4fv gl location data)
     :int (.uniform1iv gl location data)
     :ivec2 (.uniform2iv gl location data)
     :ivec3 (.uniform3iv gl location data)
     :ivec4 (.uniform4iv gl location data)
     :mat2 (.uniformMatrix2fv gl location false data)
     :mat3 (.uniformMatrix3fv gl location false data)
     :mat4 (.uniformMatrix4fv gl location false data)
     nil)))




(defn fill-input [program input data]
  (let [gl (:gl @(:context program))]
    (cond
      (= :attribute (:storage (:variable input)))
      (fill-attribute-input gl input data)

      (and (= :uniform (:storage (:variable input))) (= :sampler2D (:type (:variable input))))
      (fill-texture-input gl input data)

      (= :uniform (:storage (:variable input)))
      (fill-uniform-input gl input data))))





;; input: {attribute [ [vertex] [vertex] ] }
;; output: {attribute typedarray :count count}

(defn normalize-attribute [data]
  (js/Float32Array. (clj->js (vec (flatten data)))))

(defn normalize-uniform [data]
  (js/Float32Array. (clj->js (vec (flatten data)))))

(defn normalize-data [data]
  (let [x (group-by #(:storage (first %)) data)]
    (assoc
      (into
       {}
       (concat
         (map (fn [[k v]] [k (normalize-attribute v)]) (:attribute x))
         (map (fn [[k v]] [k (normalize-uniform v)]) (:uniform x))))
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






(comment



  )
