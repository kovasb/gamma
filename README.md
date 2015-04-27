# gamma

Gamma simplifies developing GLSL shaders for use with WebGL or OpenGL. It represents shaders as composable expressions, giving you the full power of Clojure to compose, abstract and manipulate them before finally compiling to an executable GLSL string. 

Read the [rationale](https://github.com/kovasb/gamma/wiki/Gamma-Rationale).

# usage

Gamma represents the GLSL AST as Clojure maps. Instead of entering the maps directly, use the constructor functions in the gamma.api namespace:

```clojure
(g/sin 1)
=>
{:tag :term, :head :sin, :id {:tag :id, :id 1}, :type :float,
  :body ({:tag :term, :head :literal, :value 1, :type :float, :id {:tag :id, :id 2}})}
```


You typically won't need to know the details of this format, but it is useful to know that the constructor functions simply resolve to a pure data representation. 

In addition to clarity & brevity, these constructor functions also provide type checking and inference:

```clojure
(g/sin true)
=> "Error: Wrong argument types for term sin: :bool"
```

To see the GLSL fragment corresponding to an expression, use gamma.tools/glsl-string:

```clojure
(require '[gamma.tools :as tools])

(tools/glsl-string (g/sin 1))
=> "sin(1);\n"
```

To compile a full GLSL program, use XX, shown below. 

## Input Variables

GLSL allows three kinds of input variables: attributes, which pass data to vertex shaders; varyings, which pass data from vertex shaders to fragment shaders; and uniforms, which are constant values available in both vertex and fragment shaders.

Gamma provides constructors for the three kinds of variables, which again resolve into maps:

```clojure
(g/attribute "my_Attribute" :float)
=> {:tag :variable, :name "my_Attribute", :type :float, :storage :attribute}
```

To use a variable in your program, simply create it and pass it as an argument:

```clojure
(def code-fragment 
 (let [a (g/attribute "my_Attribute" :float)]
    (g/sin a)))
    
(tools/glsl-string code-fragment)
=> "sin(my_Attribute);\n"
```  
  
In GLSL, there are 3 kinds of input variables: attributes, uniforms, and varyings. Consult WebGL or OpenGL references for their semantics.   


## Statements as Expressions

GLSL is a statement-oriented language, but Gamma's compiler transformations allow you to compose with expressions:

```clojure
(def code-fragment 
  (let [a (g/attribute "my_Attribute" :float)] 
    (g/cos (g/sin (g/if (g/< 1 a) 2 3)))))
```
```
(println (tools/glsl-string code-fragment))
=>
if(1 < my_Attribute){
  v50 = 2;}
  else {
    v50 = 3;}
cos(sin(v50));
```

Gamma has created the intermediate variable v50, assigns to it in the different branches of the if statement, and then uses in the the subsequent expression. The declaration of v50 does not appear in the code fragment above, but it will appear when we compile the full shader program. 




## Binding, Reuse, and Common Subexpression Elimination

Gamma allows you to use all of Clojure's binding forms to pass the data to multiple places, or to organize the logic of your code. It does not introduce new binding constructs, or require you to juggle intermediary variables at the meta level. 

```clojure
(let [x (g/sin 1)]
  (g/vec4 x x x x))
```  

This means that (g/sin 1) is repeated many times within the body of g/vec4. However, the compiler eliminates this repetition and inserts an intermediary variable, so that (g/sin 1) is only computed once:

Gamma does not have its own version of let or defn, we simply reuse the mechanisms of Clojure for all our binding needs. There is no magic, we simply put those expressions where they need to go, and let the compiler remove duplicated expressions later.

Not having to worry about manipulating variables in the target GLSL is a massive simplicity win, making it easy to compose and reason about code, and reuse Clojure's existing constructs without worry. 


## Free-form Shader Composition

We are free to build up shader expressions any way we want. You can define functions, pass shader fragments inside maps, etc:

```clojure

 (defn helper [x] {:some-key (g/sin x)})
 
 (g/cos (:some-key (helper 1)))
```
 
As long as the final result is a well-formed Gamma expression, you can build it up any way you want. 






## License

Copyright © 2014 Kovas Boguta

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
