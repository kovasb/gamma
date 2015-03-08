(ns gamma.emit.tag
  (:use [gamma.emit.emit :only [emit]]
        [gamma.ast :only [head body term ->Term]]))

;;;; PROGRAM


(defmethod emit :variable [db x]
  (if-let [n (:name x)]
    n
    (str "v" (:id (:id x)))))


(comment
  (def
    r
    (let [x (shader vs)]
     (map
       (fn [v] (gamma.emit.emit/emit (:ir x) {:tag :declaration :variable v}))
       (filter
         #(not (re-matches (js/RegExp. "gl_.*") (:name %)))
         (concat (:inputs x) (:outputs x))))))

  (def
    r
    (let [x (shader vs)]
      (filter
        #(not (re-matches (js/RegExp. "gl_.*") (:name %)))
        (concat (:inputs x) (:outputs x)))))

  (gamma.emit.emit/emit
    nil
    {:tag :declaration :variable
         {:tag :variable, :name "aAttr", :type :vec2, :storage :attribute}})

  (gamma.emit.emit/emit
    nil
    {:tag :variable, :name "aAttr", :type :vec2, :storage :attribute})

  (gamma.emit.emit/emit )


  )

(defmethod emit :shader [db x]
  [:span
   (interpose
     :break
     (map
      (fn [v] (emit db {:tag :declaration :variable v}))
      (filter
        #(not (re-matches (js/RegExp. "gl_.*") (:name %)))
        (concat (:inputs x) (:outputs x)))))
   :break

   "void main(void){"
   :break
   (interpose
     :break
     (map
      (fn [v] (emit db {:tag :declaration :variable v}))
      (filter
        #(not (if (:name %) (re-matches (js/RegExp. "gl_.*") (:name %))))
        (:locals x))))
   :break
   (emit db (db :root))
   :break
   "}"])

(defmethod emit :declaration [db x]
  (let [v (:variable x)]
    [:span
     (if-let [s (:storage v)] (str (name s) " ") "")
     (name (:type v)) " " (emit db v) ";"]))




(comment
  (defmethod emit :program [x]
            (str
              (emit
                (->Term :block
                        (map #(->Term :declaration [%])
                             (:declarations x))))
              "main(){"
              (emit (:main x))
              "}"))



  (defmethod emit :vector [x]
             (str
               ({:float   "vec"
                 :boolean "bvec"
                 :int     "ivec"} (:member-type x))
               (:length x)))


  (defmethod emit :matrix [x]))



;;;; VARIABLES







(comment
  (emit
    {:tag :program
     :declarations [{:tag :variable
                     :storage :attribute
                     :name "x"
                     :type :float}]
     :main (term :block
                 (term :+ 1 2))
     })


  )



