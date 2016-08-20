(ns gamma.test.constructors
  (:require [cljs.test]
            [gamma.api :as g]
            [gamma.tools :refer [glsl-string]])
  (:require-macros [cljs.test :refer [is deftest testing]]))

(enable-console-print!)

(defn ->glsl [x]
  (clojure.string/replace
    (glsl-string x)
    #"\s" ""))

;; test variables, declarations, literals


(->glsl (gamma.ast/literal {:tag :variable :name "v" :type :vec4}))

(def vec4-variable {:tag :variable :id "v" :type :vec4})
;; operators

;;;;;;; OPERATORS WITH VARIABLES

(deftest
  operators
  (let [f {:tag :variable :name "f" :type :float}
        v {:tag :variable :name "v" :type :vec4}
        b {:tag :variable :name "b" :type :bool}]
    (is (= (->glsl (g/aget v 0)) "v[0.0];"))
    ;; selector?
    (is (= (->glsl (g/increment f)) "(f++);"))
    (is (= (->glsl (g/decrement f)) "(f--);"))
    (is (= (->glsl (g/pre-increment f)) "(++f);"))
    (is (= (->glsl (g/pre-decrement f)) "(--f);"))
    ;(is (= (g/+- t) "x+-"))                        ;;?
    (is (= (->glsl (g/* f f)) "(f*f);"))
    (is (= (->glsl (g/div f f)) "(f/f);"))
    (is (= (->glsl (g/+ f f)) "(f+f);"))
    (is (= (->glsl (g/- f f)) "(f-f);"))
    (is (= (->glsl (g/< f f)) "(f<f);"))
    (is (= (->glsl (g/> f f)) "(f>f);"))
    (is (= (->glsl (g/<= f f)) "(f<=f);"))
    (is (= (->glsl (g/>= f f)) "(f>=f);"))
    (is (= (->glsl (g/== f f)) "(f==f);"))
    (is (= (->glsl (g/not= f f)) "(f!=f);"))
    ;(is (= (g/conditional-choice f) "vec4_v--"))
    (is (= (->glsl (g/set f f)) "(f=f);"))
    (is (= (->glsl (g/set+ f f)) "(f+=f);"))
    (is (= (->glsl (g/set- f f)) "(f-=f);"))
    (is (= (->glsl (g/set* f f)) "(f*=f);"))
    (is (= (->glsl (g/set-div f f)) "(f/=f);"))
    ;(is (= (g/constructor f) "vec4_v--"))
    (is (= (->glsl (g/and b b)) "(b&&b);"))
    (is (= (->glsl (g/or b b)) "(b||b);"))
    (is (= (->glsl (g/xor b b)) "(b^^b);"))
    (is (= (->glsl (g/not b)) "(!b);"))))

(operators)

;; need swizzle tests

(deftest
  variables
  (is (= (->glsl (g/gl-position)) "gl_Position;"))
  (is (= (->glsl (g/gl-point-size)) "gl_PointSize;"))
  (is (= (->glsl (g/gl-frag-coord)) "gl_FragCoord;"))
  (is (= (->glsl (g/gl-front-facing)) "gl_FrontFacing;"))
  (is (= (->glsl (g/gl-point-coord)) "gl_PointCoord;"))
  (is (= (->glsl (g/gl-frag-color)) "gl_FragColor;"))
  (is (= (->glsl (g/gl-frag-data 1)) "gl_FragData1;")))

(deftest
  constructors
  (is (= (->glsl (g/vec2 1 2)) "vec2(1.0,2.0);"))
  (is (= (->glsl (g/vec3 1 2 3)) "vec3(1.0,2.0,3.0);"))
  (is (= (->glsl (g/vec4 1 2 3 4)) "vec4(1.0,2.0,3.0,4.0);"))
  (is (= (->glsl (g/bvec2 true false)) "bvec2(true,false);"))
  (is (= (->glsl (g/bvec3 true false true)) "bvec3(true,false,true);"))
  (is (= (->glsl (g/bvec4 true false true false)) "bvec4(true,false,true,false);"))
  (is (= (->glsl (g/ivec2 1 2)) "ivec2(1.0,2.0);"))
  (is (= (->glsl (g/ivec3 1 2 3)) "ivec3(1.0,2.0,3.0);"))
  (is (= (->glsl (g/ivec4 1 2 3 4)) "ivec4(1.0,2.0,3.0,4.0);"))
  (is (= (->glsl (g/mat2 0 1 1 0)) "mat2(0.0,1.0,1.0,0.0);"))
  (is (=  (->glsl (g/mat3 1 0 0 0 1 0 0 0 1))
          "mat3(1.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,1.0);"))
  (is (= (->glsl (g/mat4 1 0 0 0 0 1  0 0 0 0 1 0 0 0 0 1))
         "mat4(1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0);")))

(deftest
  standard-functions
  (let [t {:tag :variable :name "t" :type :float}
        f {:tag :variable :name "f" :type :float}
        f2 {:tag :variable :name "f2" :type :float}
        v2 {:tag :variable :name "v2" :type :vec2}
        v3 {:tag :variable :name "v3" :type :vec3}
        v4 {:tag :variable :name "v4" :type :vec4}
        sampler {:tag :variable :id "sampler" :type :sampler2D}]
    (is (= (->glsl (g/radians t)) "radians(t);"))
    (is (= (->glsl (g/degrees t)) "degrees(t);"))
    (is (= (->glsl (g/sin t)) "sin(t);"))
    (is (= (->glsl (g/cos t)) "cos(t);"))
    (is (= (->glsl (g/tan t)) "tan(t);"))
    (is (= (->glsl (g/asin t)) "asin(t);"))
    (is (= (->glsl (g/acos t)) "acos(t);"))
    (is (= (->glsl (g/atan t f2)) "atan(t,f2);"))
    (is (= (->glsl (g/atan t)) "atan(t);"))
    (is (= (->glsl (g/pow t f2)) "pow(t,f2);"))
    (is (= (->glsl (g/exp t)) "exp(t);"))
    (is (= (->glsl (g/log t)) "log(t);"))
    (is (= (->glsl (g/exp2 t)) "exp2(t);"))
    (is (= (->glsl (g/log2 t)) "log2(t);"))
    (is (= (->glsl (g/sqrt t)) "sqrt(t);"))
    (is (= (->glsl (g/inversesqrt t)) "inversesqrt(t);"))
    (is (= (->glsl (g/abs t)) "abs(t);"))
    (is (= (->glsl (g/sign t)) "sign(t);"))
    (is (= (->glsl (g/floor t)) "floor(t);"))
    (is (= (->glsl (g/ceil t)) "ceil(t);"))
    (is (= (->glsl (g/fract t)) "fract(t);"))
    (is (= (->glsl (g/mod t t)) "mod(t,t);"))
    (is (= (->glsl (g/min t t)) "min(t,t);"))
    (is (= (->glsl (g/min t t)) "min(t,t);"))
    (is (= (->glsl (g/min v2 v2)) "min(v2,v2);"))
    (is (= (->glsl (g/min v3 v3)) "min(v3,v3);"))
    (is (= (->glsl (g/min v4 v4)) "min(v4,v4);"))
    (is (= (->glsl (g/max t t)) "max(t,t);"))
    (is (= (->glsl (g/max v2 v2)) "max(v2,v2);"))
    (is (= (->glsl (g/max v3 v3)) "max(v3,v3);"))
    (is (= (->glsl (g/max v4 v4)) "max(v4,v4);"))
    (is (= (->glsl (g/clamp t t t)) "clamp(t,t,t);"))
    (is (= (->glsl (g/clamp t f f)) "clamp(t,f,f);"))
    (is (= (->glsl (g/step t t)) "step(t,t);"))
    (is (= (->glsl (g/step f t)) "step(f,t);"))
    (is (= (->glsl (g/smoothstep t t t)) "smoothstep(t,t,t);"))
    (is (= (->glsl (g/smoothstep f f t)) "smoothstep(f,f,t);"))
    (is (= (->glsl (g/length t)) "length(t);"))
    (is (= (->glsl (g/distance t t)) "distance(t,t);"))
    (is (= (->glsl (g/dot t t)) "dot(t,t);"))
    (is (= (->glsl (g/cross v3 v3)) "cross(v3,v3);"))
    (is (= (->glsl (g/normalize t)) "normalize(t);"))
    (is (= (->glsl (g/faceforward t t t)) "faceforward(t,t,t);"))
    (is (= (->glsl (g/reflect t t)) "reflect(t,t);"))
    (is (= (->glsl (g/refract t t f)) "refract(t,t,f);"))
    (is (= (->glsl (g/texture2DLod sampler v2 f)) "texture2DLod(sampler,v2,f);"))
    (is (= (->glsl (g/texture2DProjLod sampler v3 f)) "texture2DProjLod(sampler,v3,f);"))
    (is (= (->glsl (g/texture2DProjLod sampler v4 f)) "texture2DProjLod(sampler,v4,f);"))
    (is (= (->glsl (g/textureCubeLod sampler v4 f)) "textureCubeLod(sampler,v4,f);"))
    (is (= (->glsl (g/texture2D sampler v2 f)) "texture2D(sampler,v2,f);"))
    (is (= (->glsl (g/texture2DProj sampler v3 f)) "texture2DProj(sampler,v3,f);"))
    (is (= (->glsl (g/texture2DProj sampler v4 f)) "texture2DProj(sampler,v4,f);"))
    (is (= (->glsl (g/textureCube sampler v3 f)) "textureCube(sampler,v3,f);"))
    (is (= (->glsl (g/texture2D sampler v2)) "texture2D(sampler,v2);"))
    (is (= (->glsl (g/texture2DProj sampler v3 f)) "texture2DProj(sampler,v3,f);"))
    (is (= (->glsl (g/texture2DProj sampler v4 f)) "texture2DProj(sampler,v4,f);"))
    (is (= (->glsl (g/textureCube sampler v3)) "textureCube(sampler,v3);"))))
