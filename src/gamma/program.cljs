(ns gamma.program
  (:require [gamma.webgl :as webgl]
            [goog.webgl :as ggl]))


(comment

  (defn show [x]
    (let [y (gcompile x)]
      (fipp.printer/pprint-document
        (emit y (y :root))
        {:width 80})))

  (defn shader-str [x]
    (with-out-str (show x)))


  (defn walk [db pre]
    (transform
      db
      (fn walk-fn [db path]
        [(pre db path) [[:body (map-path walk-fn)]]])))



  (defn variables [db]
    (let [a (atom #{})]
      (walk db (fn [db location]
                 (let [e (get-element db location)]
                   (if (= :literal (:head e))
                     (if (= :variable (:tag (:value e)))
                       (do
                         (swap! a conj (:value e))
                         (if (:type (:value e))
                           nil
                           (println location))
                         ))))
                 db))
      @a
      ))


  (defn program [db]
    (let [v (variables db)
          locals (filter #(not (#{:attribute :uniform :varying}
                                 (:storage %))) v)
          globals (filter #(#{:attribute :uniform :varying}
                            (:storage %)) v)]

      {:tag              :program
       :global-variables globals
       :local-variables  locals}))

  (defn emit-program [db]
    (emit db (program db)))


  (let [c (gcompile
            (g/block (g/set {:tag :variable :name "gl_Position" :type :float}
                            (sample-shader (g/attribute "aAttr" :float)))))]
    (println
      (with-out-str
        (fipp.printer/pprint-document
          (emit c (program c))
          {:width 50}))))

  (def create-program [m]
    (apply g/block
           (map
             (fn [[k v]]
               (g/set k v))
             m)))

  )


;;;




;;;

(defn compile [input]
  (->
    (transform
      {:root {:source-id :root :id :root}}
      (separate-usages
        (bubble-terms (flatten-ast input)) {} #{}))
    (transform (lift-assignments :root))
    (transform (insert-variables #{}))
    (transform (insert-assignments))
    (transform (move-assignments))))



(defn glsl [shader]
  (with-out-str
    (fipp.printer/pprint-document
      (emit (:ir shader) shader)
      {:width 80})))

(defn ast [shader]
  (apply g/block
         (map
           (fn [[k v]]
             (g/set k v))
           (:inputs shader))))


(defn shader [shader]
  (let [ast (ast shader)
        ir (compile ast)
        v (variables ir)
        locals (filter #(not (#{:attribute :uniform :varying}
                               (:storage %))) v)
        globals (filter #(#{:attribute :uniform :varying}
                          (:storage %)) v)
        outputs (keys (:outputs shader))
        inputs (clojure.set/difference globals outputs)
        ]
    (let
      [p
       {:tag     :shader
        :inputs  inputs
        :outputs outputs
        :locals  locals
        :ir      ir
        :ast     ast}]
      (assoc p :glsl (glsl p)))))


(defn program [vertex-shader fragment-shader]
  {:tag :program
   :vertex-shader (shader vertex-shader)
   :fragment-shader (shader vertex-shader)})


(defn program-inputs [program]

  ;; {attribute {buffer} uniform {spec}}
  ;; if we want to share inputs across programs, gonna need to look at context
  ;; would pass such sharing info as a map to the context, rather than trying to infer it
  (into {}
        (map [% (webgl/input program %)]
        (:inputs (:vertex-shader program)))))



(defn install-program [context program]
  (let [p
        (assoc program
          :context context
          :program (webgl/create-program
                     (:gl @context)
                     (get-in program [:vertex-shader :glsl])
                     (get-in program [:fragment-shader :glsl])))]
    (assoc p :inputs (program-inputs p))))




(defn draw [program data]
  (doseq [[variable input] (:inputs program)]
    (webgl/fill-input program input (data variable)))
  (.drawArrays
    ggl/TRIANGLES
    (:gl @(:context program))
    (:count data)))






;; browser specific? look at sample program
(defn webgl-context [canvas] ())



(comment

  (def p (program (some-shader (attribute :foo :vec3))))

  (def s {:tag :shader :vertex p1 :fragment p2})

  ;; how to create, link, run etc

  ;; representation of gl program object?

  ;; should defer compiling shader programs until entire shader is built?

  (compile shader)

  (run context shader input)
  ;; --> new context recording shader, input state?

  (create-context )

  (bind context input)

  ;; dont understand how state is kept in gl program.
  ;; what if we want to change the contents of a single buffer?


  (some-shader (:foo (descriptor {:foo data})))



(comment
  ;; basic processing flow (p 31)
  ;; retrieve canvas element
  ;; get webgl rendering context
  ;; initialize shaders. check initShaders() in cuon-util.js
  ;; set color for clearning canvas
  ;; clear canvas
  ;; draw


  )





  )