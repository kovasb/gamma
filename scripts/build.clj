(require '[cljs.closure :as cljsc]
         '[cljs.build.api])

(cljsc/build (cljs.build.api/inputs "src" "test")
             {:output-dir "resources/public/js/out"
              :output-to "resources/public/js/main.js"
              :main "gamma.test.repl"
              :asset-path "http://localhost:9000/js/out"})