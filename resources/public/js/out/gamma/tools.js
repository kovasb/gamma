// Compiled by ClojureScript 0.0-3208 {}
goog.provide('gamma.tools');
goog.require('cljs.core');
goog.require('gamma.ast');
goog.require('gamma.emit.tag');
goog.require('gamma.emit.statement');
goog.require('gamma.emit.operator');
goog.require('gamma.compiler.move_assignments');
goog.require('gamma.emit.emit');
goog.require('gamma.compiler.flatten_ast');
goog.require('gamma.compiler.insert_variables');
goog.require('gamma.api');
goog.require('gamma.emit.constructor');
goog.require('gamma.compiler.bubble_term');
goog.require('gamma.compiler.separate_usages');
goog.require('gamma.compiler.core');
goog.require('gamma.compiler.lift_assignments');
goog.require('clojure.string');
goog.require('gamma.compiler.common');
goog.require('gamma.compiler.print');
goog.require('gamma.emit.fun');
goog.require('gamma.compiler.insert_assignments');
gamma.tools.stages_map = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"flatten-ast","flatten-ast",2089185660),gamma.compiler.flatten_ast.flatten_ast,new cljs.core.Keyword(null,"bubble-terms","bubble-terms",264068819),gamma.compiler.bubble_term.bubble_terms,new cljs.core.Keyword(null,"separate-usages","separate-usages",1675573500),(function (input){
return gamma.compiler.core.transform.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source-id","source-id",-585995304),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"root","root",-448657453)], null)], null),gamma.compiler.separate_usages.separate_usages.call(null,input,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY));
}),new cljs.core.Keyword(null,"lift-assignments","lift-assignments",-511943341),(function (input){
return gamma.compiler.core.transform.call(null,input,gamma.compiler.lift_assignments.lift_assignments.call(null,new cljs.core.Keyword(null,"root","root",-448657453)));
}),new cljs.core.Keyword(null,"insert-variables","insert-variables",714202855),(function (input){
return gamma.compiler.core.transform.call(null,input,gamma.compiler.insert_variables.insert_variables.call(null,cljs.core.PersistentHashSet.EMPTY));
}),new cljs.core.Keyword(null,"insert-assignments","insert-assignments",-958460342),(function (input){
return gamma.compiler.core.transform.call(null,input,gamma.compiler.insert_assignments.insert_assignments.call(null));
}),new cljs.core.Keyword(null,"move-assignments","move-assignments",227590285),(function (input){
return gamma.compiler.core.transform.call(null,input,gamma.compiler.move_assignments.move_assignments.call(null));
})], null);
gamma.tools.stages = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flatten-ast","flatten-ast",2089185660),new cljs.core.Keyword(null,"bubble-terms","bubble-terms",264068819),new cljs.core.Keyword(null,"separate-usages","separate-usages",1675573500),new cljs.core.Keyword(null,"lift-assignments","lift-assignments",-511943341),new cljs.core.Keyword(null,"insert-variables","insert-variables",714202855),new cljs.core.Keyword(null,"insert-assignments","insert-assignments",-958460342),new cljs.core.Keyword(null,"move-assignments","move-assignments",227590285)], null);
gamma.tools.compile_stages = (function gamma$tools$compile_stages(input){
return cljs.core.last.call(null,cljs.core.reduce.call(null,(function (p__5545,stage){
var vec__5546 = p__5545;
var input__$1 = cljs.core.nth.call(null,vec__5546,(0),null);
var result = cljs.core.nth.call(null,vec__5546,(1),null);
try{var x = gamma.tools.stages_map.call(null,stage).call(null,input__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.assoc_in.call(null,result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stages","stages",-442109532),stage], null),x)], null);
}catch (e5547){if((e5547 instanceof Error)){
var e = e5547;
return cljs.core.reduced.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stages","stages",-442109532),stage], null),e),new cljs.core.Keyword(null,"exception-at","exception-at",895478648),stage)], null));
} else {
throw e5547;

}
}}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stages","stages",-442109532),cljs.core.PersistentArrayMap.EMPTY], null)], null),gamma.tools.stages));
});
gamma.tools.print_stage = (function gamma$tools$print_stage(stages,stage){
var x = gamma.compiler.flatten_ast.__GT_tree.call(null,cljs.core.get_in.call(null,stages,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stages","stages",-442109532),stage], null)),new cljs.core.Keyword(null,"root","root",-448657453));
return fipp.printer.pprint_document.call(null,gamma.compiler.print.printer.call(null).call(null,x),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(30)], null));
});
gamma.tools.print_dag = (function gamma$tools$print_dag(x){
return fipp.printer.pprint_document.call(null,gamma.compiler.print.printer.call(null).call(null,gamma.compiler.flatten_ast.__GT_tree.call(null,x,new cljs.core.Keyword(null,"root","root",-448657453))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(30)], null));
});
gamma.tools.print_tree = (function gamma$tools$print_tree(x){
return fipp.printer.pprint_document.call(null,gamma.compiler.print.printer.call(null).call(null,x),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(30)], null));
});
gamma.tools.glsl_stage = (function gamma$tools$glsl_stage(stages,stage){
return fipp.printer.pprint_document.call(null,gamma.emit.emit.emit.call(null,new cljs.core.Keyword(null,"move-assignments","move-assignments",227590285).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"stages","stages",-442109532).cljs$core$IFn$_invoke$arity$1(stages)),new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(stage.call(null,new cljs.core.Keyword(null,"stages","stages",-442109532).cljs$core$IFn$_invoke$arity$1(stages)))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(30)], null));
});
gamma.tools.glsl_string = (function gamma$tools$glsl_string(ast){
var ir = gamma.compiler.core.compile.call(null,ast);
var sb__4907__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_5550_5552 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_5551_5553 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_5550_5552,_STAR_print_fn_STAR_5551_5553,sb__4907__auto__,ir){
return (function (x__4908__auto__){
return sb__4907__auto__.append(x__4908__auto__);
});})(_STAR_print_newline_STAR_5550_5552,_STAR_print_fn_STAR_5551_5553,sb__4907__auto__,ir))
;

try{fipp.printer.pprint_document.call(null,gamma.emit.emit.emit.call(null,ir,new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(ir)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(80)], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_5551_5553;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_5550_5552;
}
return [cljs.core.str(sb__4907__auto__)].join('');
});

//# sourceMappingURL=tools.js.map