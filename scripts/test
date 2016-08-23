#!/bin/sh
echo "clean gamma js"
rm -rf resources/public/js/out/gamma
echo "build..."
lein trampoline run -m clojure.main scripts/test_build.clj
echo "run..."
lein trampoline run -m clojure.main scripts/test_run.clj
