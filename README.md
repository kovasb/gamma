# gamma

Gamma is a substrate for graphics software, such as games and data visualization tools. It presents a simple, composable language for representing GLSL shaders. 

- [Hello Triangle Tutorial](#Hello Triangle Tutorial ) 
- [Documenation](https://github.com/kovasb/gamma/wiki/API-Guide)

Benefits: 
- Decouple, simplify, abstract shader code 
- Release graphics pipeline from rigid demands of shaders
- Create composable, multiplatform shader libraries 
- Quickly build higher-level GL libraries 

Gamma targets the OpenGL ES 1.0 Shading Language, which runs on the Web through WebGL, and on iOs, Android, and desktop platforms. Gamma runs in Clojurescript, but the shaders it generates can be used from any language. 

Read the [full rationale](https://github.com/kovasb/gamma/wiki/Gamma-Rationale). Look at the tests. See examples. 

#### WIP

Gamma's API is not complete or stable yet. Still early days. 

# Hello Triangle Tutorial 

```clojure
(require '[gamma.api :as g])
(require '[gamma.program :as p])
```

Lets use Gamma to create a minimum shader program to simply draw a red triangle.

```clojure
;; shader input attribute will be a vec2 of x,y coordinates
(def vertex-position (g/attribute "a_VertexPosition" :vec2))

;; vertex shader turns input into a vec4, and assigns it to gl_Position
(def vertex-shader {(g/gl-position) (g/vec4 vertex-position 0 1)})

;; fragment shader assigns red, represented as a vec4, to gl_FragColor 
(def fragment-shader {(g/gl-frag-color) (g/vec4 1 0 0 1})

;; compile Gamma into a GLSL program string 
(def hello-triangle 
  (p/program 
    {:vertex-shader vertex-shader 
     :fragment-shader fragment-shader}))
```
Thats it! hello-triangle now contains the GLSL for this shader. 

```clojure
;; print vertex shader glsl
(println (:glsl (:vertex-shader hello-triangle-program)))
=> 
"attribute vec2 a_VertexPosition;
void main(void){
 gl_Position = vec4(a_VertexPosition, 0, 1);
}"

;; print fragment shader glsl
(println (:glsl (:fragment-shader hello-triangle-program)))
=>
"void main(void){
 gl_FragColor = vec4(1, 0, 0, 1);
}"
```

Lets actually execute this shader in WebGL. Gamma's shader representation is useful to automate away WebGL boilerplate, but here the standard low level way to do it (sans error checking).   

```clojure
(require '[goog.webgl :as ggl])

(def gl-context (.getContext xx))

;; use WebGL APIs to install the shader in a GL context
;; nothing gamma-specific until we bind data to input variable

;;; set up vertex shader
(def vertex-shader (.createShader gl-context ggl/VERTEX_SHADER))
(.shaderSource gl-context vertex-shader (:glsl (:vertex-shader hello-triangle-program)))
(.compileShader gl-context vertex-shader)

;;; set up fragment shader
(def fragment-shader (.createShader gl-context ggl/FRAGMENT_SHADER))
(.shaderSource gl-context fragment-shader (:glsl (:fragment-shader hello-triangle-program)))
(.compileShader gl-context fragment-shader)

;;; set up program
(def hello-triangle (.createProgram gl-context))
(.attachShader gl-context hello-triangle vertex-shader)
(.attachShader gl-context hello-triangle fragment-shader)
(.linkProgram gl-context hello-triangle)

;; set up input data 
(def data (js/Float32Array. #js [0 1, 1 0, 1 1])
(def array-buffer (.createBuffer gl-context))
(.bindBuffer gl-context array-buffer)
(.bufferData gl-context ggl/ARRAY_BUFFER data ggl/STATIC_DRAW)

;; bind data to input variable
;; can programmatically figure out name of input variable!! WOOT!
(.vertexAttribPointer 
  gl-context 
  (.getAttribLocation 
    gl-context 
    hello-triangle 
    (:name vertex-position))
  2 ggl/FLOAT false 0 0)

;; draw 
(.useProgram gl-context hello-triangle)
(.drawArrays gl-context ggl/TRIANGLES 0 3)



```


# API

Gamma lets you do two main things:
- Construct a GLSL AST as clojure data
  - require gamma.api    
- Compile it to a GLSL program string 
  - require gamma.program 

There are also namespaces for AST pretty printing (gamma.print) and tooling (gamma.tools). 

## Constructing GLSL 

##### GLSL represented as Clojure maps. Generate maps with constructor functions.  

The GLSL AST is represented as Clojure maps with certain keys. 

Instead of entering the maps directly, use the constructor functions provided in gamma.api:

```clojure
(require '[gamma.api :as g])
```

```clojure
(g/sin 1)
=> {:tag :term, :head :sin, :id {:tag :id, :id 1}, :type :float,
      :body ({:tag :term, :head :literal, :value 1, :type :float, :id {:tag :id, :id 2}})}
```

Each GLSL operator, function, or type constructor has an equivalent function in gamma.api. 

##### GLSL Input/Ouput variables are also maps with constructor functions. 

The different species of GLSL input/output variables also have constructors:

```clojure
;; attribute 
(g/attribute "a_Attr" :float)
=> {:tag :variable, :name "a_Attr", :type :float, :storage :attribute}
;; uniform 
(g/uniform "u_Uniform" :mat4)
=> {:tag :variable, :name "u_Uniform", :type :mat4, :storage :uniform}
;; varying 
(g/varying "v_Varying" :float :highp)
=> {:tag :variable, :name "v_Varying", :type :float, :storage :varying, :precision :highp} 

;; bult-in variables
(g/gl-position)
=> {:tag :variable, :name "gl_Position", :type :vec4}
(g/gl-frag-color)
=> {:tag :variable, :name "gl_FragColor", :type :vec4}
```

##### Compose constructor functions to buld the AST

Building the AST is just a matter of composing constructor functions, resulting in nested maps:

```clojure
(g/clamp (g/sin 1.0) 0.25 0.5)
=> {:tag :term, :head :clamp, 
      :body (
        {:tag :term, :head :sin, 
          :body ({:tag :term, :head :literal, :value 1, :type :float, :id {:tag :id, :id 3}}), 
                    :id {:tag :id, :id 2}, :type :float} 
                  {:tag :term, :head :literal, :value 0.25, :type :float, 
                    :id {:tag :id, :id 5}} 
        {:tag :term, :head :literal, :value 0.5, :type :float, :id {:tag :id, :id 6}}), 
          :id {:tag :id, :id 4}, :type :float}
```

To refer to a input variable with the AST, simply create it and pass it to an AST constuctor: 

```clojure 
(g/sin (g/attribute "a_Attr" :float))
```

If's are expressions, so we can nest if's inside of other expressions:

```clojure 
(g/sin (g/if (g/attribute "b_Bool" :bool) 1 2))
```

##### Use Clojure's binding forms 

To reuse an expression in multiple places, use let, or any other binding form:
```clojure
(let [x (g/sin (g/attribute "a_Attr" :float))]
  (g/vec3 x x x))
  
;; equivalent to 
(g/vec3 
  (g/sin (g/attribute "a_Attr" :float))
  (g/sin (g/attribute "a_Attr" :float))
  (g/sin (g/attribute "a_Attr" :float)))
```

Gamma's compiler will ensure that the (g/length ...) expression will only be evaluated once. This frees you from having to think about intermediary variables within the AST and their impact on performance. 

In general, Gamma disallows use of binding forms within the AST. This is because the Gamma AST needs an important property: referential transparency. This property is what allows easy metaprogramming and full use of Clojurescript's facilities. 

##### Types are checked and inferred by constructor functions

Constructor functions typecheck their arguments and infer their own types:

```clojure
(:type (g/sin 1.0))
=> :float
(:type (g/sin (g/vec3 0.0 0.0 1.0))
=> :vec3
```

Passing the wrong type results in an exception:

```
(g/sin true)
=> Error: Wrong argument types for term sin: :bool
```
This is useful for debugging. Your code can also dispatch based on the GLSL type of the AST.

##### Factor your AST with functions and datastructures

It doesn't really matter how the AST comes together, just flow data to where it is needed.

We can create AST, put in in some datastructure, and write logic to flow it to a destination:

```clojure
;; create some AST fragments and hang on to them
(def x {:partA (g/sin 1) :partB (g/cos a)})
;; get AST fragments and put them where we want
(g/clamp (:partA x) 0 (:partB x))
```
Functions are an even more powerful abstraction. Use functions to factor out or parameterize subtrees:

```clojure
;; start with 
(g/+ 1 (g/+ 2 3))

;; create helper
(defn my-helper [x] (g/+ x 3))

;; refactor tree using helper:
(g/+ 1 (my-helper 2))
```

Metaprogramming GLSL with higher-order functions:

```clojure
(reduce g/+ 0 [1 2 3 4])

(apply g/vec4 (map #(g/clamp % 0 1) [0 0.5 1 2]))
```

Feel free to use whatever abstractions you want for building up the tree. Just remember that GLSL is a typed language, and its functions and operations have type signatures that need to be respected. 

##### Create abstractions

For example, Gamma does not provide a for loop, since WebGL only supports unrollable for-loops. 

Using Clojurescript, it is trivial to unroll loops ourselves:

```clojure
(defn map-over-vec4 [f v]
 (apply g/vec4 (for [i (range 4)] (f (g/part v i)))))
``` 

A third party is free to develop a general-purpose library to cover common iteration pattens. 

## Compiling to GLSL program strings






## License

Copyright © 2014 Kovas Boguta

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
