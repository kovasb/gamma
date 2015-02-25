(ns gamma.api)

(def standard-functions
  (group-by :name
            (map
              (fn [x]
                {:name      (x 1) :input (vec (take-nth 2 (x 2))) :output (x 0)
                 :parameter {:T #{:float :vec2 :vec3 :vec4}}})
              [[:T :radians [:T :degrees]]
               [:T :degrees [:T :radians]]
               [:T :sin [:T :angle]]
               [:T :cos [:T :angle]]
               [:T :tan [:T :angle]]
               [:T :asin [:T :x]]
               [:T :acos [:T :x]]
               [:T :atan [:T :y :T :x]]
               [:T :atan [:T :y_over_x]]

               [:T :power [:T :x :T :y]]
               [:T :exp [:T :x]]
               [:T :log [:T :x]]
               [:T :exp2 [:T :x]]
               [:T :log2 [:T :x]]
               [:T :sqrt [:T :x]]
               [:T :inversesqrt [:T :x]]

               [:T :abs [:T :x]]
               [:T :sign [:T :x]]
               [:T :floor [:T :x]]
               [:T :ceil [:T :x]]
               [:T :fract [:T :x]]
               [:T :mod [:T :x :T :y]]
               [:T :max [:T :x :float :y]]
               [:T :clamp [:T :x :T :minVal :T :maxVal]]
               [:T :clamp [:T :x :float :minVal :float :maxVal]]
               [:T :step [:T :edge :T :x]]
               [:T :step [:float :edge :T :x]]
               [:T :smoothstep [:T :edge0 :T :edge1 :T :x]]
               [:T :smoothstep [:float :edge0 :float :edge1 :T :x]]

               [:float :length [:T :x]]
               [:float :distance [:T :p0 :T :p1]]
               [:float :dot [:T :x :T :y]]
               [:vec3 :cross [:vec3 :x :vec3 :y]]
               [:T :normalize [:T :x]]
               [:T :faceforward [:T :N :T :I :T :Nref]]
               [:T :reflect [:T :I :T :N]]
               [:T :refract [:T :I :T :N :float :eta]]

               [:vec4 :texture2DLod [:sampler2D :sampler :vec2 :coord :float :lod]]
               [:vec4 :texture2DProjLod [:sampler2D :sampler :vec3 :coord :float :lod]]
               [:vec4 :texture2DProjLod [:sampler2D :sampler :vec4 :coord :float :lod]]
               [:vec4 :textureCubeLod [:sampler2D :sampler :vec4 :coord :float :lod]]
               ;; available only in fragement shaders
               [:vec4 :texture2D [:sampler2D :sampler :vec2 :coord :float :bias]]
               [:vec4 :texture2DProj [:sampler2D :sampler :vec3 :coord :float :bias]]
               [:vec4 :texture2DProj [:sampler2D :sampler :vec4 :coord :float :bias]]
               [:vec4 :textureCube [:samplerCube :sampler :vec3 :coord :float :bias]]
               ;; available in both
               [:vec4 :texture2D [:sampler2D :sampler :vec2 :coord]]
               [:vec4 :texture2DProj [:sampler2D :sampler :vec3 :coord]]
               [:vec4 :texture2DProj [:sampler2D :vec4 :coord]]
               [:vec4 :textureCube [:samplerCube :sampler :vec3 :coord]]

               ])))



(def operators
  (into
    {}
    (map
      #(vector (:operator %) %)
      [
       {:operator :aget}
       {:operator :selector}
       {:operator :increment :literal "++" :class :postfix}
       {:operator :decrement :literal "--" :class :postfix}
       {:operator :pre-increment :literal "++" :class :prefix}
       {:operator :pre-decrement :literal "--" :class :prefix}
       {:operator :not :literal "!" :class :prefix}
       {:operator :+- :literal "+-" :class :infix}
       {:operator :* :literal "*" :class :infix}
       {:operator :div :literal "/" :class :infix}
       {:operator :+ :literal "+" :class :infix}
       {:operator :- :literal "-" :class :infix}
       {:operator :< :literal "<" :class :infix}
       {:operator :> :literal ">" :class :infix}
       {:operator :<= :literal "<=" :class :infix}
       {:operator :>= :literal ">=" :class :infix}
       {:operator :== :literal "==" :class :infix}
       {:operator :!= :literal "!=" :class :infix}
       {:operator :and :literal "&&" :class :infix}
       {:operator :or :literal "||" :class :infix}
       {:operator :xor :literal "^^" :class :infix}
       {:operator :conditional-choice}
       {:operator :set :literal "=" :class :infix}
       {:operator :set+ :literal "+=" :class :infix}
       {:operator :set- :literal "-=" :class :infix}
       {:operator :set* :literal "*=" :class :infix}
       {:operator :set-div :literal "/=" :class :infix}
       {:operator :constructor}
       ])))



;; these guys should also do arg checking and type inference
(defn ^:private gen-fn [tag]
  `(defn ~(symbol (name tag)) [& body#]
     (apply gamma.ast/term ~tag body#)
     #_(gamma.ast/->Term ~tag body# (gamma.ast/gen-term-id))))


(defn define-standard-function [[n specs]]
  `(defn ~(symbol (name n)) [& body#]
     (build-standard-function-term ~n ~specs body#)))




(defmacro ^:private gen-fns []
  `(do
     ~@(clojure.core/map define-standard-function standard-functions)
     ~@(clojure.core/map gen-fn
                         (concat
                           ;(keys gamma.ast/functions)
                           (keys operators)
                           [ :for :block :continue :break :discard]))))