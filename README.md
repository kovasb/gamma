# gamma

Gamma simplifies developing GLSL shaders for use with WebGL or OpenGL. It represents shaders as composable expressions, giving you the full power of Clojure to compose, abstract and manipulate them before finally compiling to an executable GLSL string. 

## Basic Usage

GLSL operations are represented by simple Clojure maps. Instead of entering the maps directly, use the constructor functions in the gamma.api namespace:

(g/sin 1)

In addition to clarity & brevity, these constructor functions provide type checking and inference:

(g/sin "a")

To see the GLSL fragment corresponding to an expression, use XX. 


To compile a full GLSL program, use XX, shown below. 

## Input Variables

The only kinds of variables you need to think about in Gamma are the inputs to your program. Like everything else, there are represented as data, so you only need to construct the variable and pass it into the operations you want. 

To create a variable and use it in gamma code, simply create the variable and pass it as an argument:

(let [a (g/attribute "my_Attribute" :float)]
  (g/sin a))
  
In GLSL, there are 3 kinds of input variables: attributes, uniforms, and varyings. Consult WebGL or OpenGL references for their semantics.   


## Statements as Expessions

GLSL is a statement-oriented language, but Gamma's compiler transformations allow you to compose with expressions:

(g/cos (g/sin (g/if (g/< 1 a) 2 3)))

Gamma will trasform the expression into a statement and create the intermediary variables necessary.

## Binding, Reuse, and Common Subexpression Elimination

Gamma allows you to use all of Clojure's binding forms to pass the data to multiple places, or to organize the logic of your code.

(let [x (g/sin 1)]
  (g/vec4 x x x x))

This means that (g/sin 1) is repeated many times within the body of g/vec4. However, the compiler eliminates this repetition and inserts an intermediary variable, so that (g/sin 1) is only computed once:

Gamma does not have its own version of let or defn, we simply reuse the mechanisms of Clojure for all our binding needs. There is no magic, we simply put those expressions where they need to go, and let the compiler remove duplicated expressions later.

Not having to worry about manipulating variables in the target GLSL is a massive simplicity win, making it easy to compose and reason about code, and reuse Clojure's existing constructs without worry. 


## Free-form Shader Composition

We are free to build up shader expressions any way we want. You can define functions, pass shader fragments inside maps, etc:

 (defn helper [x] {:some-key (g/sin x)})
 
 (g/cos (:some-key (helper 1)))
 
As long as the final result is a well-formed Gamma expression, you can build it up any way you want. 






## License

Copyright © 2014 Kovas Boguta

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
