// Compiled by ClojureScript 0.0-2913 {:target :nodejs}
goog.provide('gamma.examples');
goog.require('cljs.core');
goog.require('gamma.ast');
goog.require('gamma.emit.tag');
goog.require('gamma.emit.statement');
goog.require('gamma.emit.operator');
goog.require('gamma.compiler.move_assignments');
goog.require('gamma.emit.function$');
goog.require('gamma.emit.emit');
goog.require('gamma.compiler.flatten_ast');
goog.require('gamma.compiler.insert_variables');
goog.require('gamma.api');
goog.require('gamma.compiler.bubble_term');
goog.require('gamma.compiler.separate_usages');
goog.require('gamma.compiler.core');
goog.require('gamma.compiler.lift_assignments');
goog.require('gamma.compiler.common');
goog.require('gamma.compiler.print');
goog.require('gamma.compiler.insert_assignments');
gamma.examples.gcompile = (function gcompile(input){
return gamma.compiler.core.transform.call(null,gamma.compiler.core.transform.call(null,gamma.compiler.core.transform.call(null,gamma.compiler.core.transform.call(null,gamma.compiler.core.transform.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source-id","source-id",-585995304),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"root","root",-448657453)], null)], null),gamma.compiler.separate_usages.separate_usages.call(null,gamma.compiler.bubble_term.bubble_terms.call(null,gamma.compiler.flatten_ast.flatten_ast.call(null,input)),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY)),gamma.compiler.lift_assignments.lift_assignments.call(null,new cljs.core.Keyword(null,"root","root",-448657453))),gamma.compiler.insert_variables.insert_variables.call(null,cljs.core.PersistentHashSet.EMPTY)),gamma.compiler.insert_assignments.insert_assignments.call(null)),gamma.compiler.move_assignments.move_assignments.call(null));
});
gamma.examples.show_ast = (function show_ast(y){
var x = gamma.examples.gcompile.call(null,y);
return fipp.printer.pprint_document.call(null,gamma.compiler.print.ast_doc2.call(null,x,new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(30)], null));
});
gamma.examples.show = (function show(x){
var y = gamma.examples.gcompile.call(null,x);
return fipp.printer.pprint_document.call(null,gamma.emit.emit.emit.call(null,y,y.call(null,new cljs.core.Keyword(null,"root","root",-448657453))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(80)], null));
});
gamma.examples.shader_str = (function shader_str(x){
var sb__6174__auto__ = (new goog.string.StringBuffer());
var _STAR_print_fn_STAR_7502_7503 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_7502_7503,sb__6174__auto__){
return (function (x__6175__auto__){
return sb__6174__auto__.append(x__6175__auto__);
});})(_STAR_print_fn_STAR_7502_7503,sb__6174__auto__))
;

try{gamma.examples.show.call(null,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_7502_7503;
}
return [cljs.core.str(sb__6174__auto__)].join('');
});
gamma.examples.walk = (function walk(db,pre){
return gamma.compiler.core.transform.call(null,db,(function walk_fn(db__$1,path){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre.call(null,db__$1,path),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),gamma.compiler.common.map_path.call(null,walk_fn)], null)], null)], null);
}));
});
gamma.examples.variables = (function variables(db){
var a = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
gamma.examples.walk.call(null,db,((function (a){
return (function (db__$1,location){
var e_7504 = gamma.compiler.common.get_element.call(null,db__$1,location);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"literal","literal",1664775605),new cljs.core.Keyword(null,"head","head",-771383919).cljs$core$IFn$_invoke$arity$1(e_7504))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(e_7504)))){
cljs.core.swap_BANG_.call(null,a,cljs.core.conj,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(e_7504));

if(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(e_7504)))){
} else {
cljs.core.println.call(null,location);
}
} else {
}
} else {
}

return db__$1;
});})(a))
);

return cljs.core.deref.call(null,a);
});
gamma.examples.program = (function program(db){
var v = gamma.examples.variables.call(null,db);
var locals = cljs.core.filter.call(null,((function (v){
return (function (p1__7505_SHARP_){
return cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),null,new cljs.core.Keyword(null,"varying","varying",685535123),null,new cljs.core.Keyword(null,"uniform","uniform",496503348),null], null), null).call(null,new cljs.core.Keyword(null,"storage","storage",1867247511).cljs$core$IFn$_invoke$arity$1(p1__7505_SHARP_)));
});})(v))
,v);
var globals = cljs.core.filter.call(null,((function (v,locals){
return (function (p1__7506_SHARP_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),null,new cljs.core.Keyword(null,"varying","varying",685535123),null,new cljs.core.Keyword(null,"uniform","uniform",496503348),null], null), null).call(null,new cljs.core.Keyword(null,"storage","storage",1867247511).cljs$core$IFn$_invoke$arity$1(p1__7506_SHARP_));
});})(v,locals))
,v);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"program","program",781564284),new cljs.core.Keyword(null,"global-variables","global-variables",-870031532),globals,new cljs.core.Keyword(null,"local-variables","local-variables",-1899802034),locals], null);
});
gamma.examples.emit_program = (function emit_program(db){
return gamma.emit.emit.emit.call(null,db,gamma.examples.program.call(null,db));
});
