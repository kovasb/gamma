(ns gamma.emit.tag
  (:use [gamma.emit.emit :only [emit]]
        [gamma.ast :only [head body term]]))

;;;; PROGRAM


(defmethod emit :variable [db x]
  (if-let [n (:name x)]
    n
    (str "v" (:id x))))


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

(def qualifier-order
  [[:invariant :storage :precision]
   [:storage :parameter :precision]])

(defmethod emit :declaration [db x]
  (try
    (let [v (:variable x)]
     [:span
      (if-let [s (:storage v)] (str (name s) " ") "")
      (if-let [p (:precision v)] (str (name p) " ") "")
      (name (:type v)) " " (emit db v) ";"])
    (catch js/Error e (println (str "declaration error on: ") (pr-str x)))))





