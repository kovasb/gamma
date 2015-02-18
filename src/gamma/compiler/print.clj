(ns gamma.compiler.print
  (:use gamma.ast)
  (:use [gamma.ast :only [id?]])
  (:require [fipp.edn :refer (pprint) :rename {pprint fipp}]
            fipp.printer))

(defn ast-doc [db node-id f]
  (let [x (if (or (= :root node-id) (id? node-id)) (db node-id) node-id)]
    [:group
     (pr-str (:head x))
     (if f
       (if-let [y (f x db)]
         y
         ""))
     "["
     [:line ""]
     (if (= :literal (:head x))
       (pr-str (:body x))
       [:nest 2
        (interpose [:span "," :line]
                   (map #(ast-doc db % f) (:body x)))])
     "]"]))





(defn print-ast [x f w]
  (fipp.printer/pprint-document
    (ast-doc
      x
      :root
      f) {:width w}))

(declare ast-doc2)

(defn helper [db paths list]
  [:nest 2
   (interpose [:span "," :line]
              (map #(ast-doc2 db % paths) list))]

  )

(defn ast-doc2 [db node-id paths]
  (let [x  (if (or (= :root node-id) (id? node-id)) (db node-id) node-id)]
    [:group
     (pr-str (:head x))
     "("
     (let [i (:id x)] (if (= :root i) ":root" (str (:id i))))
     ")"
     (if (= :literal (:head x))
       (pr-str (select-keys x [:value]))
       [:span
        "{"
        [:nest 2
         [:line ""]
         (if-let [y (:assignments x)]
           [:span  ":assignments " [:line ""] (helper db paths y) [:line]]
           [:span ""])
         [:span ":body " [:line ""] (helper db paths (:body x))]]

        "}"]
       )
     ]))


(defn helper2 [db paths list]
  [:nest 2
   (interpose [:span "," :line]
              (map #(ast-doc3 db % paths) list))]

  )

(defn ast-doc3 [db node-id paths]
  (let [x  (if (or (= :root node-id) (id? node-id)) (db node-id) node-id)]
    [:group
     (pr-str (:head x))
     "("
     (let [i (:id x)] (if (= :root i) ":root" (str (:id i))))
     ")"
     (if (= :literal (:head x))
       (pr-str (select-keys x [:value]))
       [:span
        "{"
        [:nest 2
         [:line ""]
         (if-let [y (vec (:shared x))]
           [:span  ":shared " [:line ""] (helper2 db paths y) [:line]]
           [:span ""])
         [:span ":body " [:line ""] (helper2 db paths (:body x))]]

        "}"]
       )
     ]))

(defn print-ast2 [x  w]
  (fipp.printer/pprint-document
    (ast-doc2
      x
      :root
      [:body]) {:width w}))

(comment
  (print-ast2 data3 30)


  (print-ast data3
             (fn printer [x db]
               [:group "{"
                (str (:id (:id x))) " "
                (if (= :literal (:head x))
                  (str "val:" (:value x))
                  (map #(gamma.compiler.print/ast-doc db % printer)
                       (:assignments x)))
                "}"
                ]) 30)

  )

