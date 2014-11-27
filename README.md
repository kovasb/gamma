# gamma

Gamma's point is to make graphics shaders simple, by recovering a natural functional programming model that enables the full range of abstraction and composition facilities available in Clojure. 

Graphics shaders are conceptually very simple, but in practice very complicated. They have virtually no capacity for abstraction, resulting in huge monolothic shaders, or shader templates composed at the level of string manipulation. There is no such thing as a framework-agnostic standard library of shader functionality (beyond the glsl built-ins), nor is it feasible to have shaders adapt to varying inputs or program them against interfaces. 

Gamma tries to change that, and bring real programming to bear on shader construction, in the simplest way possible. 

## Functional Metaprogramming

Metaprogramming does not have to be a confusing and complicated mess. Aided by the nature of it domain, Gamma tries hard to make metaprogramming simple, according to the following principles:

- No function definitions, variables or binding forms
- No macros, quoting, unquoting etc
- Clear visual distinction between GLSL code and Clojure code
- No attempt to "cross-compile" clojure constructs into GLSL


In Gamma, we write functions that, given a description of the data they will run against, will output corresponding shader code. In effect, we've turned shaders into functions. Not only does this get our code out of the variable-name game, but it also allows the shader to be specified with respect to abstractions. 

At the bottom layer, Gamma represents GLSL programs as an AST of plain Clojure data. It can take that AST and spit out a valid GLSL program string. To create a shader, we simply compose AST fragments until they represent the value we want the shader to compute, and send it to the compiler. 

The magic of Gamma is that its compiler allows one to treat the GLSL AST as if it were a referentially-transparent, value-oriented language with no binding forms. This means that instead of creating variables and bindings via explicit metaprogramming, one can instead pass program fragments to wherever their value is needed. The compiler will perform common subexpression elimination, type inference, and variable insertion for you. 

In Gamma, shader metaprogramming is simply traditional Clojure programming against the GLSL AST. Gamma explicitly is *not* an attempt to provide a lisp-like psuedolanguage or subset that compiles to GLSL. There are no macros or new language semantics to learn, or any confusion about what is the code and what is the meta-code. There is no quoting or unquoting, gensyms, or any of the other complications typical of metaprogramming.

Gamma's API is designed to make the distinction between GLSL shader code and Clojure code evident. GLSL constructor functions are namespaced, and the GLSL AST has a special printed form. 







## License

Copyright © 2014 FIXME

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
