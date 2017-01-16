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


;; assignments need to be placed into the bodys of AST nodes
;; in previous stage, we identified what assignments need to be made, and put that info in node metadata
;; need to create the actual AST nodes associated with the assignment
;; however we need to contend with the statement-oriented nature of glsl; assignments can only appear in certain positions
;; How relates to move-assignments?

(defn insert-assignments []
  (fn [db location ]
    (let [e (get-element db location)]
      (if (= :block (:head e))
        [db
         ;; if node is a block, then do this on the next step
         ;; move into the assignments part of the metadata
         [[:assignments
           (let [x (map-indexed
                     ;; create a bunch of closures that will do the assignments
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
        ;; push assignments through both branchs of the conditional
        ;; assignments need to happen at the laves
        [db
         [(in-path [:body 1] (insert-assignments-sub target-id))
          (in-path [:body 2] (insert-assignments-sub target-id))]]
        :block
        ;; for blocks, assingments happen at the last steo
        [db
         [(in-path [:body (- (count (:body e)) 1)] (insert-assignments-sub target-id))
          ;(insert-assignments)
          ]]
        ;:set [db nil]

        [
         ;; we are now at the rhs of the assignment
         (insert-assignment db location target-id)

         nil]))))










