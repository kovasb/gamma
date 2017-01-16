(require '[gamma.compiler.core :as c])
(in-ns 'gamma.compiler.core)
(require '[clojure.walk])
(require '[gamma.ast])

(require '[gamma.api :as g])

(defn compilet [x]
  (cleanup (->tree-sub (c/compile x) :root)))

(reset! gamma.ast/term-counter 0)
(let [x1 (g/+ 1 2)]
  (= (compilet x1)
     '{:head :block,
      :body ({:head :+,
              :tag :term,
              :type :float,
              :body ({:value 1, :type :float, :head :literal, :tag :term, :body ()}
                      {:value 2, :type :float, :head :literal, :tag :term, :body ()})})}))

(reset! gamma.ast/term-counter 0)
(let [x1 (g/+ 1 2)
      x2 (g/+ x1 x1)]
  (= (compilet x2)
     '{:head :block,
      :body ({:head :set,
              :tag :term,
              :body ({:value {:type :float, :id 6, :tag :variable}, :head :literal, :tag :term, :body ()}
                      {:type :float,
                       :head :+,
                       :tag :term,
                       :body ({:value 1, :type :float, :head :literal, :tag :term, :body ()}
                               {:value 2, :type :float, :head :literal, :tag :term, :body ()})})}
              {:head :+,
               :tag :term,
               :type :float,
               :body ({:value {:type :float, :id 6, :tag :variable}, :type :float, :head :literal, :tag :term, :body ()}
                       {:value {:type :float, :id 6, :tag :variable}, :type :float, :head :literal, :tag :term, :body ()})})}))

(reset! gamma.ast/term-counter 0)
(let [x1 (g/+ 1 2)
      x2 (g/+ x1 1)
      x3 (g/+ x2 x2)]
  (= (compilet x3)
     '{:head :block,
       :body ({:head :set,
               :tag :term,
               :body ({:value {:type :float, :id 8, :tag :variable}, :head :literal, :tag :term, :body ()}
                       {:type :float,
                        :head :+,
                        :tag :term,
                        :body ({:head :+,
                                :tag :term,
                                :type :float,
                                :body ({:value 1, :type :float, :head :literal, :tag :term, :body ()}
                                        {:value 2, :type :float, :head :literal, :tag :term, :body ()})}
                                {:value 1, :type :float, :head :literal, :tag :term, :body ()})})}
               {:head :+,
                :tag :term,
                :type :float,
                :body ({:value {:type :float, :id 8, :tag :variable}, :type :float, :head :literal, :tag :term, :body ()}
                        {:value {:type :float, :id 8, :tag :variable}, :type :float, :head :literal, :tag :term, :body ()})})})
  )

(reset! gamma.ast/term-counter 0)
(let [x1 (g/+ 1 2)
      x2 (g/+ x1 1)
      x3 (g/+ x2 x1)]
  (= (compilet x3)
     '{:head :block,
       :body ({:head :set,
               :tag :term,
               :body ({:value {:type :float, :id 8, :tag :variable}, :head :literal, :tag :term, :body ()}
                       {:type :float,
                        :head :+,
                        :source-id {:tag :id},
                        :tag :term,
                        :body ({:value 1, :type :float, :head :literal, :tag :term, :body ()}
                                {:value 2, :type :float, :head :literal, :tag :term, :body ()})})}
               {:head :+,
                :tag :term,
                :type :float,
                :body ({:head :+,
                        :tag :term,
                        :type :float,
                        :body ({:value {:type :float, :id 8, :tag :variable}, :type :float, :head :literal, :tag :term, :body ()}
                                {:value 1, :type :float, :head :literal, :tag :term, :body ()})}
                        {:value {:type :float, :id 8, :tag :variable}, :type :float, :head :literal, :tag :term, :body ()})})}))

(reset! gamma.ast/term-counter 0)
(let [x1 (g/+ 1 2)
      x2 (g/+ x1 x1)
      x3 (g/+ x2 x2)
      x3 (g/+ x3 x1)]
  (compilet x3))

(reset! gamma.ast/term-counter 0)
(let [x1 (g/+ 1 2)
      x2 (if true x1 x1)]
  (c/compile x2))

(reset! gamma.ast/term-counter 0)
(let [x1 (g/+ 1 2)
      x2 (if true x1 x1)
      x3 (g/+ x2 x2)]
  (c/compile x3))

(reset! gamma.ast/term-counter 0)
(def x
  (let [x1 (g/+ 1 2)
        x2 (g/+ x1 x1)]
    (c/compile x2)))


(defn ->tree-sub [db id]
  (update (db id) :body #(map (fn [x] (->tree-sub db x)) %)))

(->tree-sub x :root)

(defn cleanup [tree]
  (clojure.walk/postwalk
    (fn [y]
      (if
        (map? y)
        (let [x (dissoc y :parents :shared :env :id-mapping :assignments)]
          (if (not (= :variable (:tag x))) (dissoc x :id) x)
          )
        y))
    tree))

(cleanup (->tree-sub x :root))


(defn ->tree [db id]
  (let [e (db id)]
    (assoc
      (clojure.walk/postwalk
        (fn [y]
          (if
            (gamma.ast/id? y)
            (->tree db y)
            y))
        (dissoc e :parents :id))
      :id id)))