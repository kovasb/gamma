// Compiled by ClojureScript 0.0-2913 {:target :nodejs}
goog.provide('gamma.compiler.insert_variables');
goog.require('cljs.core');
goog.require('gamma.compiler.common');
goog.require('gamma.ast');
gamma.compiler.insert_variables.insert_variables_sub = (function insert_variables_sub(db,location){
var id = gamma.ast.gen_term_id.call(null);
return gamma.compiler.common.assoc_elements.call(null,gamma.compiler.common.assoc_in_location.call(null,db,new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(location),id),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"literal","literal",1664775605),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(gamma.compiler.common.get_element.call(null,db,location)),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(location),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(gamma.compiler.common.get_element.call(null,db,location))], null)], null)], null));
});
gamma.compiler.insert_variables.parent_env = (function parent_env(db,location){
return cljs.core.get.call(null,db.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(location))),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.PersistentArrayMap.EMPTY);
});
gamma.compiler.insert_variables.insert_variables = (function insert_variables(env){
return (function (db,location){
var elt = gamma.compiler.common.get_element.call(null,db,location);
if(cljs.core.truth_(env.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(elt)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gamma.compiler.insert_variables.insert_variables_sub.call(null,db,location),null], null);
} else {
var new_env = cljs.core.into.call(null,env,cljs.core.concat.call(null,new cljs.core.Keyword(null,"assignments","assignments",-1114514911).cljs$core$IFn$_invoke$arity$1(elt),new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(elt)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignments","assignments",-1114514911),gamma.compiler.common.map_path.call(null,insert_variables.call(null,env))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),gamma.compiler.common.map_path.call(null,insert_variables.call(null,new_env))], null)], null)], null);
}
});
});
