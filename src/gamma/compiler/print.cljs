(ns gamma.compiler.print
  (:use [gamma.ast :only [id?]])
  (:require
    [fipp.engine]))



(defn pretty-nil [trans x]
  [:text "nil"])

(defn pretty-object [trans x]
  [:text (pr-str x)])

(defn pretty-vector [trans v]
  [:group "[" [:align (interpose :line (map trans v))] "]"])

(defn pretty-seq [trans s]
  [:group "(" [:align (interpose :line (map trans s))] ")"])

(defn pretty-map [trans m]
  (let [kvps (for [[k v] m]
               [:span (trans k) " " (trans v)])
        doc [:group "{" [:align (interpose [:span "," :line] kvps)]  "}"]]
    (if (implements? IRecord m)
      [:span "#"
       (str (type m))
       doc]
      doc)))

(defn pretty-set [trans s]
  [:group "#{" [:align (interpose :line (map trans s))] "}"])


;;;;;;;;;;;;;;;;;;;;;;

(defn pretty-term [trans x]
  [:group (str (:head x)) "(" (str (:id (:id x))) ")"
   (pretty-map trans (dissoc x :id :head :tag))])





;;;;;;;;;;;;;;;;;;;;;;

(deftype Dispatcher [dispatch-fn]
  IFn
  (-invoke [this x] ((dispatch-fn x) this x)))

(defn printer []
  (Dispatcher.
    (fn [x]
      (cond
        (and (map? x) (= :term (:tag x))) pretty-term
        (map? x) pretty-map
        (vector? x) pretty-vector
        (seq? x) pretty-seq
        (set? x) pretty-set
        (nil? x) pretty-nil
        :default pretty-object))))



;;;;;;;;;;;;;;;;;;;;;;
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
  (fipp.engine/pprint-document
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

(declare ast-doc3)

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
  (fipp.engine/pprint-document
    (ast-doc2
      x
      :root
      [:body]) {:width w}))




