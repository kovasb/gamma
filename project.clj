(defproject kovasb/gamma "auto"
  :description "glsl shaders made simple"
  :url "https://github.com/kovasb/gamma"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :deploy-repositories [["clojars" {:sign-releases false}]]
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.48"]
                 [fipp "0.6.2"]]
  :plugins [[org.clojars.cvillecsteele/lein-git-version "1.0.0"]]
  :source-paths ["src" "test"])

