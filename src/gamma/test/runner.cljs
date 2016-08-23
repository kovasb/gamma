(ns gamma.test.runner
  (:require [gamma.test.constructors]))

(enable-console-print!)

(cljs.test/run-tests 'gamma.test.constructors)
