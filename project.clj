(defproject kovasb/gamma "0.1.2-SNAPSHOT"
  :description "glsl shaders made simple"
  :url "https://github.com/kovasb/gamma"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :deploy-repositories [["clojars" {:sign-releases false}]]
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [kovasb/fipp "0.5.3"]
                 [org.clojure/clojurescript "0.0-3208"]]
  :source-paths ["src" "test"])

