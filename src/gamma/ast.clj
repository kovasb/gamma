(ns gamma.ast)


(defrecord Term [head body])

(defn head [x] (:head x))
(defn body [x] (:body x))

(defn term [h & args] (->Term h args))



(def primitive-types
  [:bool
   :int
   ;;uint
   :float
   ;;double
   ])


(def qualifiers
  {:storage [:const :attribute :uniform :varying]
   :precision [:highp :mediump :lowp]
   :invariant [:in :out :inout]                             ;; ??
   })



(def statements
  [:if
   :if-else
   :continue
   :break
   :discard])

(defn vector-class [primitive-type]
  (for [length [2 3 4]]
    {:tag :vector :member-type primitive-type :length length}))

(def vector-types
  (mapcat vector-class primitive-types))


(def matrix-types
  (map (fn [dim] {:tag :matrix :member-type :float :dimensions dim})
       2 3 4))


;; what are the type signatures of the operators?
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





;;; BUILT IN FUNCTIONS


;; T = float, vec2, vec3, vec4

(def functions
  (group-by
    #(nth % 1)
    [
    ;; TRIG
    [:T :radians [:T :degrees]]
    [:T :degrees [:T :radians]]
    [:T :sin [:T :angle]]
    [:T :cos [:T :angle]]
    [:T :tan [:T :angle]]
    [:T :asin [:T :x]]
    [:T :acos [:T :x]]
    [:T :atan [:T :y :T :x]]
    [:T :atan [:T :y_over_x]]

    ;; Exponential
    [:T :power [:T :x :T :y]]
    [:T :exp [:T :x]]
    [:T :log [:T :x]]
    [:T :exp2 [:T :x]]
    [:T :log2 [:T :x]]
    [:T :sqrt [:T :x]]
    [:T :inversesqrt [:T :x]]

    ;; Common Functions
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

    ;; Geometric Functions
    [:float :length [:T :x]]
    [:float :distance [:T :p0 :T :p1]]
    [:float :dot [:T :x :T :y]]
    [:vec3 :cross [:vec3 :x :vec3 :y]]
    [:T :normalize [:T :x]]
    [:T :faceforward [:T :N :T :I :T :Nref]]
    [:T :reflect [:T :I :T :N]]
    [:T :refract [:T :I :T :N :float :eta]]

    ;; Matrix
    [:mat :MatrixCompMult [:mat :x :mat :y]]

    ;; Vector Relational Functions
    [:bvec :lessThan [:T :x :T :y]]
    [:bvec :lessThanEqual [:T :x :T :y]]
    [:bvec :greaterThan [:T :x :T :y]]
    [:bvec :greaterThanEqual [:T :x :T :y]]
    [:bvec :equal [:T :x :T :y]]
    [:bvec :equal [:bvec :x :bvec :y]]
    [:bvec :notEqual [:T :x :T :y]]
    [:bvec :notEqual [:bvec :x :bvec :y]]
    [:bool :any [:bvec :x]]
    [:bool :all [:bvec :x]]
    [:bvec :not [:bvec :x]]

    ;; Texture Lookup Functions
    ;; available only in vertex shaders
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

    ]))





;{:output-type :T :input-types [:T :T] :parameter {:T #{types}}}

(defn infer-parameterized-type [rule args]
  (let [prule (:parameter rule)
        input-types (:input-types rule)]
    (if (not= (count input-types) (count args))
      :fail
      (loop [input args
             expected input-types
             parameter nil]
        (if (empty? input-types)
          parameter
          (let [i (first input) e (first expected) p (prule e)]
            (if p
              ;; expecting a parameterized type
              (if parameter
                ;; already have determined the concrete parameter
                (if (= parameter i)
                  (recur (next input) (next expected) parameter)
                  :fail)
                ;; need to determine concrete parameter
                (if (p i)
                  ;; type is within the parameterized range
                  (recur (next input) (next expected) (p i))
                  :fail))
              ;; not expected a parameterized type
              (if (= i e)
                (recur (next input) (next expected) parameter)
                :fail))))))))

(comment
  (infer-parameterized-type {:parameter {:T #{:vec3 :vec4}}
                             :input-types [:T :bool :T]} [:vec4 :bool :vec4]))



(defn infer-type [rule args]
  (map (fn [x]
         x)
       args))



(def ast-class-map
  (into {}
        (concat
          (map #(vector % :function) (map #(nth % 1) functions))
          (map #(vector (:op %) :operator) operators))))


