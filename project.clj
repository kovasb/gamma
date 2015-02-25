(defproject gamma "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [kovasb/fipp "0.5.3-SNAPSHOT"]
                 [org.clojure/clojurescript "0.0-2913"]]
  :plugins [[lein-cljsbuild "1.0.5"]]
  :cljsbuild {
              :builds [{
                        ; The path to the top-level ClojureScript source directory:
                        :source-paths ["src"]
                        ; The standard ClojureScript compiler options:
                        ; (See the ClojureScript compiler documentation for details.)
                        :compiler {

                                   :optimizations :whitespace
                                   :pretty-print true}}]})

(comment
 (def opts
   {
   :output-dir "output"

   }))