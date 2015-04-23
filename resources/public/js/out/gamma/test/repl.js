// Compiled by ClojureScript 0.0-3208 {}
goog.provide('gamma.test.repl');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof gamma.test.repl.conn !== 'undefined'){
} else {
gamma.test.repl.conn = clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
}

//# sourceMappingURL=repl.js.map