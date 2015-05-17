(ns gamma.ast)


;(defrecord Term [head body id])

(defn head [x] (:head x))
(defn body [x] (:body x))

(def term-counter (atom 0))

;(defrecord Id [id])

(defn id? [x]
  (and (map? x) (= :id (:tag x))))

(defn gen-term-id [] (let [id (swap! term-counter inc)] {:tag :id :id id}))

(defn term? [x]
  (and (map? x) (= :term (:tag x))))


;(assoc (->Term :literal nil (gen-term-id)) :value %)




(defn literal [x]
  (let [type (cond
               (clojure.core/or (= true x) (= false x)) :bool
               ;(integer? x) :int
               (number? x) :float
               (map? x) (:type x)
               :default (throw (js/Error. (str "Invalid literal: " (pr-str x)))))]
    {:tag :term
     :head :literal
     :value x
     :type type
     :id (gen-term-id)}))


(defn term [h & args]
  {:tag :term
   :head h
   :body (map #(if (term? %) % (literal %)) args)
   :id (gen-term-id)})


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
      [:vec4 :texture2DProj [:sampler2D :sampler :vec4 :coord]]
      [:vec4 :textureCube [:samplerCube :sampler :vec3 :coord]]

      ])))


(def matrix-functions
  (map
    (fn [x]
      {:name      (x 1) :input (x 2) :output (x 0)
       :parameter {:mat #{:mat2 :mat3 :mat4}}})
    [[:mat :matrixCompMult [:mat :x :mat :y]]])
  )



(def vector-relational-functions
  (map
    (fn [x]
      {:name (x 1) :input (x 2) :output (x 0)
       :parameter {:T #{:ivec2 :ivec3 :ivec4 :vec2 :vec3 :vec4} :bvec #{:bvec2 :bvec3 :bvec4}}})
    [[:bvec :lessThan [:T :x :T :y]]
     [:bvec :lessThanEqual [:T :x :T :y]]
     [:bvec :greaterThan [:T :x :T :y]]
     [:bvec :greaterThanEqual [:T :x :T :y]]
     [:bvec :equal [:T :x :T :y]]
     [:bvec :equal [:bvec :x :bvec :y]]
     [:bvec :notEqual [:T :x :T :y]]
     [:bvec :notEqual [:bvec :x :bvec :y]]
     [:bool :any [:bvec :x]]
     [:bool :all [:bvec :x]]
     [:bvec :notv [:bvec :x]]]))



(def functions
  (into #{}
        (concat
          (map :name vector-relational-functions)
          (map :name matrix-functions)
          (map first standard-functions))))



