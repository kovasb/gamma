(require '[cljs.repl :as repl])
(require '[cljs.repl.browser])

(repl/repl*
  (cljs.repl.browser/repl-env*
    {:static-dir ["resources/public" "resources/public/js/out"]})
  {:output-dir "resources/public/js/out"
   :main "gamma.test.runner"
   :asset-path "http://localhost:9000/js/out"})
