(ns gamma.compiler.insert-assignments
  (:use [gamma.ast :only [id? gen-term-id]]
        [gamma.compiler.common :only [get-element map-path assoc-elements assoc-in-location]]))


(defn insert-assignment [db location target-id]
  (let [set-id (gen-term-id) var-id (gen-term-id)
        this-id (:id location) parent-loc (:parent location)]
    ;(println [this-id ])
    (-> db
        (assoc-elements [{:id set-id :head :set :body [var-id this-id] :tag :term}
                         {:id    var-id :head :literal :tag :term
                          :value {:tag  :variable :id (:id target-id)
                                  :type (:type (get-element db location))}}])
        (assoc-in-location parent-loc set-id))))

(declare insert-assignments-sub)

(defn insert-assignments []
  (fn [db location ]
    (let [e (get-element db location)]
      (if (= :block (:head e))
        [db
         [[:assignments
           (let [x (map-indexed
                     (fn [i y] [i (insert-assignments-sub y)])
                     (:assignments e))]
             (fn [db location] [db x]))]]]
        [db nil]))))


(defn in-path [[a b] f]
  (fn [db loc]
    [db
     [[a (fn [db loc] [db [[b f]]])]]]))



(defn insert-assignments-sub [target-id]
  (fn [db location]
    (let [e (get-element db location)]
      (condp = (:head e)
        :if
        [db
         [(in-path [:body 1] (insert-assignments-sub target-id))
          (in-path [:body 2] (insert-assignments-sub target-id))]]
        :block
        [db
         [(in-path [:body (- (count (:body e)) 1)] (insert-assignments-sub target-id))
          ;(insert-assignments)
          ]]
        ;:set [db nil]

        [(insert-assignment db location target-id) nil]))))










