// Compiled by ClojureScript 0.0-2913 {:target :nodejs}
goog.provide('gamma.compiler.move_assignments');
goog.require('cljs.core');
goog.require('gamma.compiler.common');
goog.require('gamma.ast');
gamma.compiler.move_assignments.helper = (function helper(db,location){
var e = gamma.compiler.common.get_element.call(null,db,location);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"head","head",-771383919).cljs$core$IFn$_invoke$arity$1(e))){
var a = new cljs.core.Keyword(null,"assignments","assignments",-1114514911).cljs$core$IFn$_invoke$arity$1(e);
var b = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(e);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(e),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,e,new cljs.core.Keyword(null,"assignments","assignments",-1114514911)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.vec.call(null,cljs.core.concat.call(null,a,b))));
} else {
return db;
}
});
gamma.compiler.move_assignments.move_assignments = (function move_assignments(){
return (function (db,location){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gamma.compiler.move_assignments.helper.call(null,db,location),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),gamma.compiler.common.map_path.call(null,move_assignments.call(null))], null)], null)], null);
});
});
