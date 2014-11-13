(comment

  (require '[fipp.edn :refer (pprint) :rename {pprint fipp}])

  (fipp (range 20) {:width 10})

  (use 'fipp.printer)
  (in-ns 'fipp.printer)

  (defn dbg [x]
    (println "DBG:")
    (clojure.pprint/pprint x)
    (println "----")
    x)

  (serialize "apple")
  (serialize [:text "apple" "ball"])
  (serialize [:span "apple" [:group "ball" :line "cat"]])
  (serialize [:span "apple" [:line ","] "ball"])

  (def doc1 [:group "A" :line [:group "B" :line "C"]])
  (serialize doc1)

  (defn map-dbg [prefix coll]
    (r/map (fn [x]
             (print prefix)
             (prn x)
             x)
           coll))

  (def doc2 [:group "A" :line [:nest 2 "B" :line "C"] :line "D"])
  (def doc3 [:group "A"
             :line [:nest 2 "B-XYZ" [:align -3 :line "C"]]
             :line "D"])

  (binding [*options* {:width 10}]
    (->> doc3
         serialize
         ;(map-dbg "node: ")
         annotate-rights
         annotate-begins
         format-nodes
         ;clojure.pprint/pprint
         (t/each print)
         ;(into [])
         )
    ;nil
    )

  ;; test of :pass op
  (do
    (pprint-document
      [:group "AB" :line "B" :line "C"]
      {:width 6})
    (println "--")
    (pprint-document
      [:group "<AB>" :line "B" :line "C"]
      {:width 6})
    (println "--")
    (pprint-document
      [:group [:pass "<"] "AB" [:pass ">"] :line "B" :line "C"]
      {:width 6}))

  (def ex1

    [:group "["
     [:nest 2
      [:line ""] "0,"
      :line "1,"
      :line "2,"
      :line "3"
      [:line ""]]
     "]"]

    )

  (pprint-document ex1 {:width 20})
  (pprint-document ex1 {:width 6})

  (def ex2

    [:span "["
     [:align
      [:group [:line ""]] "0,"
      [:group :line] "1,"
      [:group :line] "2,"
      [:group :line] "3"]
     "]"]

    )

  (pprint-document ex2 {:width 20})
  (pprint-document ex2 {:width 6})

  (pprint-document
    [:group "[" :line "A" :line "B" :line "C" :line "]" ] {:width 2})

  (pprint-document
    [:group "asdf[" [:nest 2 :line "A" :line "B" :line "C"  ] :line "]" ]
    {:width 2})

  (pprint-document
    [:group "asdf[" [:align :line "A" :line "B" :line "C"  ] :line "]" ]
    {:width 2})

  (pprint-document
    [:group "asdf[" [:align :line "A" :line "B" :line "C"  ] :line "]" ]
    {:width 20})





  )