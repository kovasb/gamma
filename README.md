# gamma

Gamma is a substrate for graphics software, such as games and data visualization tools. It presents a simple, composable language for representing GLSL shaders. 

- [Tutorial](https://github.com/kovasb/gamma/blob/master/README.md#hello-triangle-tutorial), [Tutorial repo](https://github.com/kovasb/gamma-hello-triangle)
- [Examples repo](https://github.com/kovasb/gamma-examples)
- [Docs](https://github.com/kovasb/gamma/wiki/API-Guide)
- [Rationale](https://github.com/kovasb/gamma/wiki/Gamma-Rationale)

Benefits: 
- Decouple, simplify, abstract shader code 
- Release graphics pipeline from rigid demands of shaders
- Create composable, multiplatform shader libraries 
- Quickly build higher-level GL libraries 

Technically, Gamma is an [EDSL](http://c2.com/cgi/wiki?EmbeddedDomainSpecificLanguage) that hosts GLSL within Clojurescript. It is inspired by [Carlos Scheidegger](http://cscheid.net/)'s [Lux](http://cscheid.github.io/lux/) and [Conal Elliot](http://conal.net/)'s [Vertigo](http://conal.net/papers/Vertigo/) and [Pan](http://conal.net/papers/jfp-saig/). Gamma targets the WebGL subset of the OpenGL ES 1.0 Shading Language. Gamma can be used a la carte to compile shader source, without adopting Clojure/Clojurescript for your runtime application.

Gamma is very early alpha (0.1.1)

# Installation

Add the following to your project.clj's :dependencies

```clojure
[kovasb/gamma "0.1.1"]
```

# "Hello Triangle" Tutorial 

See the batteries-included [Hello Triangle example project](https://github.com/kovasb/gamma-hello-triangle) for how to set up your project, and how to invoke the generated shader so that a triangle appears on screen. 

Lets use Gamma at the REPL to create a minimum shader program for drawing a red triangle.

```clojure
(require '[gamma.api :as g])
(require '[gamma.program :as p])
```

```clojure
;; shader input attribute will be a vec2 of x,y coordinates
(def vertex-position (g/attribute "a_VertexPosition" :vec2))

;; vertex shader turns input into a vec4, and assigns it to gl_Position
(def vertex-shader {(g/gl-position) (g/vec4 vertex-position 0 1)})

;; fragment shader assigns the rgba value for red to gl_FragColor 
(def fragment-shader {(g/gl-frag-color) (g/vec4 1 0 0 1)})

;; compile Gamma into a GLSL program string 
(def hello-triangle 
  (p/program 
    {:vertex-shader vertex-shader 
     :fragment-shader fragment-shader}))
```
Thats it! hello-triangle now contains the GLSL for this shader, and other useful information such as a description of its inputs.  

```clojure
;; print vertex shader glsl
(println (:glsl (:vertex-shader hello-triangle)))
=> 
"attribute vec2 a_VertexPosition;
void main(void){
 gl_Position = vec4(a_VertexPosition, 0, 1);
}"

;; print fragment shader glsl
(println (:glsl (:fragment-shader hello-triangle)))
=>
"void main(void){
 gl_FragColor = vec4(1, 0, 0, 1);
}"

;; get shader inputs 
(:inputs hello-triangle)
=> #{{:tag :variable, :name "a_VertexPosition", :type :vec2, :storage :attribute}}
```



## License

Copyright © 2015 Kovas Boguta

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
