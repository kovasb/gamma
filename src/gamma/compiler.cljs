(ns gamma.compiler
  (:use [gamma.ast :only [id?]])
  (:require
    [fipp.printer]))







;;; Convert tree ast into flat ast




;;; CSE



;{:conditional tf :current n :start id}


(comment
  (defn walk [db id]
        (loop [db (assoc-in db [id :walk :children] (:body (db id))) id id]
              (let [e (db id)
                    c (:children (:walk e))]
                   (println e)
                   (if (or (= :literal (:head e)) (empty? c))
                     (if (= :root (:id e))
                       db
                       (recur (update-in db [id] dissoc :walk) (:parent (:walk e))))

                     (let [f (first c) n (next c)]
                          (recur
                            (assoc-in
                              (assoc-in db [f :walk] {:parent id :children (:body (db f))})
                              [id :walk :children] n)
                            f))))))

  ;; parent should get to decide what to do with the env that is returned from children
  ;; pass the fn than gets applied to itself. pass up and down fns
  ;; can pass the env in the node data

  (defn standard-down [db p c]
        (assoc-in db [(:id c) :env] {:parent (:id p) :children (:body c)}))

  (defn standard-up [db c p]
        (update-in
          (update-in db [(:id c)] dissoc :env)
          [(:id p) :env :children]
          next))


  (defn walk [db id down up]
        (loop [db (assoc-in db [id :env :children] (:body (db id))) id id]
              (let [e (db id)
                    c (:children (:env e))]
                   (println e)
                   (if (or (= :literal (:head e)) (empty? c))
                     (if (= :root (:id e))
                       db
                       (recur (up db e (db (:parent (:env e)))) (:parent (:env e))))

                     (let [f (first c) ]
                          (recur
                            (down db e (db f))
                            f))))))

  ;;;;

  (defn node [x]
        ((:db x) (:id x)))

  (defn parent [x]
        (assoc x :id (:parent (:env (node x)))))

  (defn node-update [x p f & args]
        (assoc-in x [:db (:id x)] (apply update-in (node x) p f args)))

  (defn node-assoc [x & args] 1)

  (defn env-merge [to from keys]
        (node-update to [:env] merge (select-keys (:env (node from)) keys)))

  (defn env-assoc [loc & args]
        (apply node-update loc [:env] assoc args))


  (defn move-to [id loc] (assoc loc :id id))

  (defn standard-next [loc]
        (let [{:keys [db id]} loc
              no (node loc)
              c (get-in no [:env :children])
              f (first c)
              n (next c)
              ]
             (if f
               (env-assoc
                 (move-to f (env-assoc loc :children n))
                 :parent id :children (:body no))
               (move-to nil loc))))


  (defn standard-next [loc]
        (let [{:keys [db id]} loc
              c (get-in db [id :env :children])
              f (first c)
              n (next c)
              ]
             (if f
               {:id f :db (assoc-in
                            (assoc-in db [id :env :children] n)
                            [f :env] {:parent id :children (:body (db f))})}
               {:id nil :db db})))


  (defn standard-up [loc]
        (let [p (parent loc)]
             (move-to (:id p) (assoc (:db loc) (:id loc) (dissoc (node loc) :env)))))

  (defn standard-up [loc]
        (let [{:keys [db id]} loc]
             {:id (:parent (:env (db id))) :db (update-in db [id] dissoc :env)}))


  (defn walk [loc next-child up]
        (let [{:keys [db id]} loc]
             (loop [loc {:id id :db (assoc-in db [id :env :children] (:body (db id)))}]
                   (let [{:keys [db id]} loc]
                        (println loc)
                        (if (= :literal (:head (db id)))
                          (recur (up loc))
                          (let [n (next-child loc)]
                               (if (:id n)
                                 (recur n)
                                 (if (= :root id)
                                   loc
                                   (recur (up (assoc n :id id)))))))))))



  (comment

    (let [x (term :plus 1 2)
          y (term :plus x x (g/if true 1 x))]
         (walk {:db (flatten-ast y) :id :root}  standard-next standard-up)))



  (defn statement? [x]
        (#{:if} (:head x)))

  (defn block? [x]
        (#{:block} (:head x)))

  (defn literal? [x]
        (#{:literal} (:head x)))


  (defn shared-set [x]
        (into #{}
              (map first
                   (filter (fn [y] (let [u (:unconditional (last y)) c (:conditional (last y))] (if u (<= 2 u))))
                           x))))




  (defn env-get [x k]

        )



  (defn iterate-stages [stages]
        (let [stage-index (into {} (map-indexed #(vector %2 %2) stages)) last-stage (last stages)]
             (fn iterate-stages-sub [loc]
                 (let [children (env-get loc :children)]
                      (if (= :none children)
                        nil
                        (let [current-stage (env-get loc :stage)
                              f (first children)
                              n (next children)]
                             (if f
                               (env-assoc
                                 (move-to f (env-assoc loc :children n))
                                 :parent (:id loc))
                               (if current-stage
                                 ;; move to next stage, if any
                                 (if (= last-stage current-stage)
                                   nil
                                   (let [new-stage (if current-stage
                                                     (nth stages (+ 1 (stage-index current-stage)))
                                                     (first stages))]
                                        (iterate-stages-sub
                                          (env-assoc loc
                                                     :stage new-stage
                                                     :children ((node loc) new-stage)))))))))))))


  (def separate-usages-next-0 (iterate-stages [:shared :body]))

  (defn separate-usages-next [loc]
        (if-let [next-loc (separate-usages-next-0 loc)]
                (let [id-map (env-get loc :id-map)
                      next-loc
                      (env-assoc
                        (env-merge next-loc loc [:id-map :output])
                        :new-id (gen-term-id))]
                     (if-let [binding-id (id-map (:id next-loc))]
                             (env-assoc next-loc :binding-id binding-id :children :none)
                             next-loc))))

  (defn separate-usages-up [loc output-fn]
        (let [parent-loc (parent loc)
              stage (env-get parent-loc :stage)
              parent-newid (env-get parent-loc :new-id)
              newid (env-get loc :new-id)]
             (if-let [bid (env-get loc :binding-id)]
                     (output-fn parent-loc parent-newid stage bid)
                     (if (= :body stage)
                       (env-merge
                         (parent loc)
                         (output-fn loc
                                    parent-newid
                                    stage
                                    (env-get loc :new-id))
                         [:output])
                       (node-update
                         (env-merge
                           (parent loc)
                           (output-fn loc parent-newid stage (env-get loc :new-id)) [:output])
                         [:env :id-mapping]
                         assoc (:id loc) newid)))))

  ;;;;;;;;;;;;;

  (defn walk [x]
        (loop [y x]
              (let [s (:stack y) f (peek s)]
                   (if f
                     (f (assoc y :stack (pop s)))
                     y))))

  (defn push [x y])

  (declare separate-usages-path separate-usages-body)

  (defn separate-usages-node [node id-mapping]
        (fn [x]
            (if (literal? node)
              x
              ;; need to initialize :shared for the node, and set the path in reduce
              (reduce
                #(push %1 (separate-usages-path %2 node id-mapping))
                (push x (separate-usages-body node id-mapping))
                (get-shared x node)))))

  (defn separate-usages-path [path id-mapping]
        ;; create new node and insert into parent
        ;; recurse onto self with separate-usages-node
        (fn [x]
            (let [{:keys [parent-id parent-path id]} path]
                 (if-let [target-id (id-mapping (:id path))]
                         (assoc-in x [parent-id parent-path] target-id)
                         (let [newid (gen-term-id)
                               node (assoc ((:source-db x) id) :id newid :parents [parent-id] :source-id id)]
                              (push
                                (assoc-in
                                  (assoc-in x [:db newid] node)
                                  [parent-id parent-path] newid)
                                (separate-usages-node newid id-mapping)))))))

  (defn id-map [x id id-mapping])

  (defn separate-usages-body [id id-mapping]
        ;; gather id mapping
        ;; push separate-usages-body-node
        (fn [x]
            (let [im (id-map x id id-mapping)
                  body (get-in x [:db :id :body])]
                 ;; asssoc bindings to node for later use
                 (reduce #(push %1
                                (separate-usages-path
                                  {:parent-id id :parent-path [:body (first %2)] :id (last %2)} id-mapping))
                         x (map-indexed vector body)))))

  ;;;;;;;;;;;;;;;;;;;;;;;;;;;;










  ;;

  (defn db-assoc [x])
  (defn db-assoc-in [x])
  (defn db-get [x])
  (defn db-update-in [x])

  (defn path-assoc [db path])

  (defn lift-assignments-sub )


  (defn lift-assignments [target-block-id]
        (fn [db path]
            [
             ;; if path is in :shared, or is a statement, lift into target
             (lift-assignments-sub db path target-block-id)
             [[:assignments (map-path #(lift-assignments target-block-id))]
              [:body (let [target (get-target arg)] (map-path #(lift-assignments target)))]]]))


  ;;

  (defn insert-variables [db path element]
        [
         ;; if id is in the binding map of self (or parent when looking at an :assignments path), insert new node at that position with a literal variable
         (insert-variables-sub)]
        [[:assignments (map-path insert-variables-sub)] [:body (map-path insert-variables-sub)]])





  ;;;;;;;;;;;;;;;;;;;;;;;;;;;;





  {:db {:root {:body [old-id]}} :source-db {} :stack []}


  ;;;;;;;;;;;;;

  (defn separate-usages-next-child [parent]
        (let [parent-env (:env parent)
              new-env (if-let [n (next (:children parent-env))]
                              (assoc parent-env :children n)
                              (if (= :shared (:stage parent-env))
                                (assoc parent-env :stage :body :children (:body parent))))]
             (assoc parent :env new-env)))


  (defn separate-usages-up [db child parent]
        (let [parent-env (:env parent)
              child-env (:env child)
              new-db
              (update-in
                (:db child-env)
                [(:new-id parent-env) (:stage parent-env)]
                conj
                (if (:shared-usage child-env)
                  ((:id-map parent-env) (:id child))
                  (:new-id child-env)))
              new-env (assoc parent-env :db new-db)
              new-env (if (= :shared (:stage parent-env))
                        (update-in new-env [:id-mapping] assoc (:id child) (:new-id child-env))
                        new-env)
              ]
             (assoc db
                    (:id child) (dissoc child :env)
                    (:id parent) (separate-usages-next-child (assoc parent :env new-env)))))

  (defn separate-usages-down [db parent child]

        (let [id-map (:id-map (:env parent))]
             (if (id-map (:id child))
               (assoc-in db [(:id child) :env]
                         {:children nil :parent (:id parent) :shared-usage true})
               (let [s (shared-set (:shared child))
                     s2 (filter #(not (id-map %)) s)
                     new-id (gamma.ast/gen-term-id)]
                    (assoc-in db
                              [(:id child) :env]
                              {:new-id new-id
                               :parent   (:id parent)
                               :stage    (if s2 :shared :body)
                               :children (if s2 s2 (:body child))
                               :id-map id-map
                               :db (assoc (:db (:env parent))
                                          new-id (assoc child
                                                        :id new-id
                                                        :parents [(:new-id (:env parent))]
                                                        :body (if (literal? child) (:body child) [])
                                                        :shared (if s2 [] nil)))}))))





        ;; set up walk env
        ;; if walking :shared, mark node
        ;; if node contains :shared, set children to those
        ;; push env to children
        ;; if node is in env, set children to nil to prevent iteration

        ;; emit new nodes

        )

  ;; should not introduce variables yet
  (defn separate-usages [db new-db parent-id id new-id env]
        (let [x (db id)
              s (shared-set (:shared x))
              s2 (filter #(not (env %)) s)
              ]
             (if (literal? x)
               (assoc new-db new-id (assoc x :id new-id))
               (let [new-children-ids (repeatedly (count (:body x)) gamma.ast/gen-term-id)
                     new-shared-ids (repeatedly (count s2) gamma.ast/gen-term-id)
                     new-env (merge env (zipmap s2 new-shared-ids))
                     new-db2 (reduce #(separate-usages db % new-id (first %2) (last %2) env)
                                     new-db
                                     (map list s2 new-shared-ids))
                     new-db3 (reduce #(separate-usages db % new-id (first %2) (last %2) new-env)
                                     new-db2
                                     (filter #(not (new-env (first %)))
                                             (map list (:body x) new-children-ids)))

                     ]
                    ;(println [x parent-id id new-id])
                    (let [n (merge x {:id new-id :body   (map #(if (new-env %1) (new-env %1) %2) (:body x) new-children-ids)
                                      :shared new-shared-ids :parents [parent-id]})]
                         (println n)
                         (assoc new-db3
                                new-id n
                                ))))))

  )




(comment
  (emit parent-id :body my-id)
  (emit my-id :shared shared-set)



  )


(comment
  (use 'gamma.compiler)
  (in-ns 'gamma.compiler)
  (require '[gamma.api :as g])

  (def d (let [x (term :plus 1 2)
         y (term :plus x x (g/if true 1 x))]
     (separate-usages
       (bubble-terms (flatten-ast y))
       {}
       :root
       :root
       :root
       {})))

  (print-ast d (fn [x db] [(:id x) (:shared x)]) 30)

  (let [x (term :plus 1 2)
        y (term :plus x x (g/if true 1 x))]
    (print-ast
      (separate-usages
       (bubble-terms (flatten-ast y))
       {}
       :root
       :root
       :root
       {})
      (fn [x db] [(:id x) (:shared x)]) 30))
  )


;; continue bubbling of unconditional terms drawn from both sides of if statement
;; needs to be done to a fixed point

;; walk db and replace :shared with a single statement :shared [ids..]

;; create new db with unique paths for all exprs and minimal shared identifiers



(comment
  (defn lift-assignments [node-id parent-block-id]
        (fn [x]

            (reduce (lift-shared node-id parent-block-id))


            )

        )


  (def lift-assignments-next-0 (iterate-stages [:shared :body]))

  (defn lift-assignments-next [loc]
        (if-let [next-loc (separate-usages-next-0 loc)]
                (if (= :block (:head (node loc)))
                  (env-assoc next-loc :parent-block-id (:id loc))
                  (env-merge next-loc loc [:parent-block-id]))))

  (defn assign-to-block [loc]
        (move-to
          (:id loc)
          (node-update (move-to (env-get loc :parent-block-id) loc)
                       :assignments conj (:id loc))))

  (defn lift-assignments-up [loc]
        ;; if is shared, or if statement, assign self to parent-block
        (let [p (parent loc)
              stage (:stage (node parent))]
             (if (or (= :shared stage) (statement? loc))
               (parent (assign-to-block loc))
               (parent loc))))





  (defn lift-assignments-next [loc]
        ;; if parent is block, pass new block id down
        )

  ;; by now shared elements are specifically identified
  (defn lift-assignments
        ([db]
          (lift-assignments :root :root db))
        ([current-id parent-block-id db]
          (let [e (db current-id)]
               ;; first lift any shared expressions

               ;; all shared exprs
               (let [db2 (reduce
                           (fn [db eid]
                               (lift-assignments
                                 eid parent-block-id
                                 (update-in db [parent-block-id :assignments] conj eid)))
                           db
                           (:shared e))]
                    (cond
                      (literal? e)
                      db2

                      (statement? e)
                      ;; if a statement, add self to parent block assignments
                      (let [db3 (update-in db2 [parent-block-id :assignments] conj (:id e))]
                           (reduce #(lift-assignments %2 parent-block-id %1) db3 (:body e)))

                      (block? e)
                      ;; children of block see a new node in which to place assignment
                      (let [db3 (assoc-in db2 [current-id :assignments] [])]
                           (reduce #(lift-assignments %2 current-id %1) db3 (:body e)))


                      :default
                      ;; expressions just recurse to children
                      (reduce #(lift-assignments %2 parent-block-id %1) db2 (:body e))))))))


