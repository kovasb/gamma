// Compiled by ClojureScript 0.0-2913 {:target :nodejs}
goog.provide('gamma.compiler.insert_assignments');
goog.require('cljs.core');
goog.require('gamma.compiler.common');
goog.require('gamma.ast');
gamma.compiler.insert_assignments.insert_assignment = (function insert_assignment(db,location,target_id){
var set_id = gamma.ast.gen_term_id.call(null);
var var_id = gamma.ast.gen_term_id.call(null);
var this_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(location);
var parent_loc = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(location);
return gamma.compiler.common.assoc_in_location.call(null,gamma.compiler.common.assoc_elements.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),set_id,new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [var_id,this_id], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),var_id,new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"literal","literal",1664775605),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"id","id",-1388402092),target_id,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(gamma.compiler.common.get_element.call(null,db,location))], null)], null)], null)),parent_loc,set_id);
});
gamma.compiler.insert_assignments.insert_assignments = (function insert_assignments(){
return (function (db,location){
var e = gamma.compiler.common.get_element.call(null,db,location);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"head","head",-771383919).cljs$core$IFn$_invoke$arity$1(e))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignments","assignments",-1114514911),(function (){var x = cljs.core.map_indexed.call(null,((function (e){
return (function (i,y){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,gamma.compiler.insert_assignments.insert_assignments_sub.call(null,y)], null);
});})(e))
,new cljs.core.Keyword(null,"assignments","assignments",-1114514911).cljs$core$IFn$_invoke$arity$1(e));
return ((function (x,e){
return (function (db__$1,location__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db__$1,x], null);
});
;})(x,e))
})()], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,null], null);
}
});
});
gamma.compiler.insert_assignments.in_path = (function in_path(p__13184,f){
var vec__13186 = p__13184;
var a = cljs.core.nth.call(null,vec__13186,(0),null);
var b = cljs.core.nth.call(null,vec__13186,(1),null);
return ((function (vec__13186,a,b){
return (function (db,loc){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,((function (vec__13186,a,b){
return (function (db__$1,loc__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,f], null)], null)], null);
});})(vec__13186,a,b))
], null)], null)], null);
});
;})(vec__13186,a,b))
});
gamma.compiler.insert_assignments.insert_assignments_sub = (function insert_assignments_sub(target_id){
return (function (db,location){
var e = gamma.compiler.common.get_element.call(null,db,location);
var pred__13190 = cljs.core._EQ_;
var expr__13191 = new cljs.core.Keyword(null,"head","head",-771383919).cljs$core$IFn$_invoke$arity$1(e);
if(cljs.core.truth_(pred__13190.call(null,new cljs.core.Keyword(null,"if","if",-458814265),expr__13191))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gamma.compiler.insert_assignments.in_path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),(1)], null),insert_assignments_sub.call(null,target_id)),gamma.compiler.insert_assignments.in_path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),(2)], null),insert_assignments_sub.call(null,target_id))], null)], null);
} else {
if(cljs.core.truth_(pred__13190.call(null,new cljs.core.Keyword(null,"block","block",664686210),expr__13191))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gamma.compiler.insert_assignments.in_path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),(cljs.core.count.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(e)) - (1))], null),insert_assignments_sub.call(null,target_id))], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gamma.compiler.insert_assignments.insert_assignment.call(null,db,location,target_id),null], null);
}
}
});
});
