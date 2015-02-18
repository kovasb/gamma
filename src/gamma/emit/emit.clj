(ns gamma.emit.emit
  (:use [gamma.ast :only [term ->Term head body]]))


(defn function? [x]
  (gamma.ast/functions (head x)))

(defn operator-class [x]
  (if-let [o (gamma.ast/operators (head x))]
    (:class o)))

(defn primitive? [x]
  (or (#{true false} x) (integer? x) (float? x)))

(defn emit-dispatch [db x]
  (if (primitive? x)
    :primitive
    (if (#{:float :bool :int} x)
      :primitive-type
      (if (function? x)
       :function
       (if-let [c (operator-class x)]
         c
         (if-let [h (head x)]
           h
           (:tag x)))))))


(defmulti emit emit-dispatch)

(defmethod emit :primitive [db x] (str x))

(defmethod emit :primitive-type [db x] (name x))

(defmethod emit :literal [db x] (emit db (:value x)))

(defmethod emit nil [db x] (println [:nil x]))


(comment
  (use 'gamma.emit.emit :reload)
  (use 'gamma.emit.tag :reload)
  (in-ns 'gamma.emit.emit)

  (use '[gamma.ast :only [id? term]]
       '[gamma.compiler.flatten-ast :only [flatten-ast]])

  (def db
    (flatten-ast (let [x (term :abs 1)]
                   (term :mod
                         (term :floor x)
                         (term :ceil x)))))

  (use 'gamma.emit.function)

  (emit db (db (first (:body (:root db)))))

  (require '[fipp.edn :refer (pprint) :rename {pprint fipp}]
   'fipp.printer)

  (fipp.printer/pprint-document
    (emit db (db (first (:body (:root db)))))
     {:width 10})

  (use 'gamma.emit.operator :reload)


  (def db
    (flatten-ast (let [x (term :abs 1)]
                   (term :>
                         (term :floor x)
                         (term :increment (term :ceil x))))))

  (fipp.printer/pprint-document
    (emit db (db (first (:body (:root db)))))
    {:width 15})

  (fipp.printer/pprint-document
    [:group "a" :break "b"]
    {:width 15})

  (use 'gamma.emit.statement :reload)

  (def db
    (flatten-ast (let [x (term :abs 1)]
                   (term :block
                         x
                         (term :floor x)
                         (term :increment (term :ceil x))))))

  (def db
    (flatten-ast (term :set
                       {:head :literal :value {:tag :variable :id 1}}

                       (term :floor 1)
                       )))


  (fipp.printer/pprint-document
    (emit db (db (first (:body (:root db)))))
    {:width 10})




  (emit-dispatch 1)
  (operator-class (term :+ []))
  (gamma.ast/operators (term :+ []))
  (emit-dispatch (term :+ []))

  (emit-dispatch (term :max [1 2]))

  (emit-dispatch {:tag :program})
  (emit-dispatch :float))












(comment
  (emit (->Term :declaration [{:name "v" :type :float}]))
  (emit (->Term :declaration [{:name "v"
                                   :storage :varying
                                   :type {:tag :vector
                                          :member-type :float
                                          :length 4}}]))

  (emit-type :float)


  )


(comment


  (emit (->Term :aget [A 1]))
  (emit (->Term :selector [A :xxy]))

  (emit (->Term :increment [A]))
  (emit (->Term :decrement [A]))
  (emit (->Term :pre-increment [A]))
  (emit (->Term :pre-decrement [A]))
  (emit (->Term :not [A]))
  ;; bug
  (emit (->Term :+- [A B]))

  (emit (->Term :* [A B]))
  (emit (->Term :div [A B]))
  (emit (->Term :+ [A B]))
  (emit (->Term :- [A B]))
  (emit (->Term :< [A B]))
  (emit (->Term :> [A B]))
  (emit (->Term :<= [A B]))
  (emit (->Term :>= [A B]))
  (emit (->Term :== [A B]))
  (emit (->Term :!= [A B]))
  (emit (->Term :and [A B]))
  (emit (->Term :or [A B]))
  (emit (->Term :xor [A B]))
  ;; bug
  (emit (->Term :conditional-choice [A B]))

  (emit (->Term :set [A B]))
  (emit (->Term :set+ [A B]))
  (emit (->Term :set- [A B]))
  (emit (->Term :set* [A B]))
  (emit (->Term :set-div [A B]))

  (emit (->Term :constructor [{:tag :vector :member-type :float :length 3}
                                  B]))
  ;; need matrix case


  )

(comment

  (use 'glsl-ast.gen :reload)
  (in-ns 'glsl-ast.gen)
  (emit-dispatch (->Term :aget [A 1]))
  (emit-operator-dispatch 1 (->Term :aget [A 1]))
  (emit-operator 1 (->Term :aget [A 1]))




  (emit-dispatch (->Term :increment [1]))
  (emit-dispatch (->Term :clamp [1]))

  (def A {:tag :variable :name "A"})
  (def B {:tag :variable :name "B"})


  (emit (->Term :and [A B]))
  (emit (->Term :or [A B]))

  (emit (->Term :clamp [1])))