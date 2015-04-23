if(typeof goog == "undefined") document.write('<script src="http://localhost:9000/js/out/goog/base.js"></script>');
document.write('<script src="http://localhost:9000/js/out/cljs_deps.js"></script>');
document.write('<script>if (typeof goog != "undefined") { goog.require("gamma.test.repl"); } else { console.warn("ClojureScript could not load :main, did you forget to specify :asset-path?"); };</script>');
