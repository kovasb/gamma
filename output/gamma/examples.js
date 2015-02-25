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
