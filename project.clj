(defproject kovasb/gamma "auto"
  :description "glsl shaders made simple"
  :url "https://github.com/kovasb/gamma"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :deploy-repositories [["clojars" {:sign-releases false}]]
  :dependencies [[org.clojure/clojure "1.7.0-beta2"]
                 [org.clojure/clojurescript "0.0-3269"]
                 [fipp "0.6.1"]]
  :plugins [[org.clojars.cvillecsteele/lein-git-version "1.0.0"]]
  :source-paths ["src" "test"])

