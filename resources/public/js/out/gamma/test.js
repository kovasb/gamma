// Compiled by ClojureScript 0.0-3208 {}
goog.provide('gamma.test');
goog.require('cljs.core');
goog.require('gamma.ast');
goog.require('gamma.emit.tag');
goog.require('gamma.emit.statement');
goog.require('gamma.emit.operator');
goog.require('clojure.walk');
goog.require('gamma.compiler.print');
goog.require('gamma.emit.emit');
goog.require('gamma.compiler.flatten_ast');
goog.require('gamma.api');
goog.require('gamma.emit.constructor');
goog.require('gamma.tools');
goog.require('fipp.printer');
goog.require('gamma.emit.fun');
gamma.test.test = (function gamma$test$test(p){
return gamma.tools.print_dag.call(null,cljs.core.comp.call(null,gamma.tools.stages_map.call(null,new cljs.core.Keyword(null,"move-assignments","move-assignments",227590285)),gamma.tools.stages_map.call(null,new cljs.core.Keyword(null,"insert-assignments","insert-assignments",-958460342)),gamma.tools.stages_map.call(null,new cljs.core.Keyword(null,"insert-variables","insert-variables",714202855)),gamma.tools.stages_map.call(null,new cljs.core.Keyword(null,"lift-assignments","lift-assignments",-511943341)),gamma.tools.stages_map.call(null,new cljs.core.Keyword(null,"separate-usages","separate-usages",1675573500)),gamma.tools.stages_map.call(null,new cljs.core.Keyword(null,"bubble-terms","bubble-terms",264068819)),gamma.tools.stages_map.call(null,new cljs.core.Keyword(null,"flatten-ast","flatten-ast",2089185660))).call(null,p));
});
gamma.test.trim_keys = (function gamma$test$trim_keys(x){
return clojure.walk.postwalk.call(null,(function (x__$1){
if(cljs.core.map_QMARK_.call(null,x__$1)){
return cljs.core.dissoc.call(null,x__$1,new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"shared","shared",-384145993));
} else {
return x__$1;
}
}),x);
});

//# sourceMappingURL=test.js.map