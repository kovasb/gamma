// Compiled by ClojureScript 0.0-3208 {}
goog.provide('gamma.compiler.core');
goog.require('cljs.core');
goog.require('gamma.compiler.move_assignments');
goog.require('gamma.compiler.insert_variables');
goog.require('gamma.compiler.separate_usages');
goog.require('gamma.compiler.lift_assignments');
goog.require('gamma.compiler.insert_assignments');
goog.require('gamma.compiler.bubble_term');
goog.require('gamma.compiler.flatten_ast');
goog.require('gamma.ast');
goog.require('gamma.compiler.common');
gamma.compiler.core.push_ops = (function gamma$compiler$core$push_ops(db,ops,location,stack){
return cljs.core.reduce.call(null,(function (s,o){
if(cljs.core.vector_QMARK_.call(null,o)){
return cljs.core.conj.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gamma.compiler.common.location_conj.call(null,db,location,cljs.core.first.call(null,o)),cljs.core.second.call(null,o)], null));
} else {
return cljs.core.conj.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [location,o], null));
}
}),stack,cljs.core.reverse.call(null,ops));
});
gamma.compiler.core.transform_1 = (function gamma$compiler$core$transform_1(db,stack){
var db__$1 = db;
var stack__$1 = stack;
var c = (0);
while(true){
if((c > (100))){
return db__$1;
} else {
var temp__4124__auto__ = cljs.core.peek.call(null,stack__$1);
if(cljs.core.truth_(temp__4124__auto__)){
var f = temp__4124__auto__;
var vec__5506 = f.call(null,(1)).call(null,db__$1,f.call(null,(0)));
var db__$2 = cljs.core.nth.call(null,vec__5506,(0),null);
var ops = cljs.core.nth.call(null,vec__5506,(1),null);
var G__5507 = db__$2;
var G__5508 = gamma.compiler.core.push_ops.call(null,db__$2,ops,f.call(null,(0)),cljs.core.pop.call(null,stack__$1));
var G__5509 = (c + (1));
db__$1 = G__5507;
stack__$1 = G__5508;
c = G__5509;
continue;
} else {
return db__$1;
}
}
break;
}
});
gamma.compiler.core.transform = (function gamma$compiler$core$transform(db,f){
return gamma.compiler.core.transform_1.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY], null),f], null)], null));
});
gamma.compiler.core.walk = (function gamma$compiler$core$walk(db,pre){
return gamma.compiler.core.transform.call(null,db,(function gamma$compiler$core$walk_$_walk_fn(db__$1,path){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre.call(null,db__$1,path),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),gamma.compiler.common.map_path.call(null,gamma$compiler$core$walk_$_walk_fn)], null)], null)], null);
}));
});
gamma.compiler.core.variables = (function gamma$compiler$core$variables(db){
var a = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
gamma.compiler.core.walk.call(null,db,((function (a){
return (function (db__$1,location){
var e_5510 = gamma.compiler.common.get_element.call(null,db__$1,location);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"literal","literal",1664775605),new cljs.core.Keyword(null,"head","head",-771383919).cljs$core$IFn$_invoke$arity$1(e_5510))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(e_5510)))){
cljs.core.swap_BANG_.call(null,a,cljs.core.conj,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(e_5510));

if(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(e_5510)))){
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
gamma.compiler.core.compile = (function gamma$compiler$core$compile(input){
return gamma.compiler.core.transform.call(null,gamma.compiler.core.transform.call(null,gamma.compiler.core.transform.call(null,gamma.compiler.core.transform.call(null,gamma.compiler.core.transform.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source-id","source-id",-585995304),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"root","root",-448657453)], null)], null),gamma.compiler.separate_usages.separate_usages.call(null,gamma.compiler.bubble_term.bubble_terms.call(null,gamma.compiler.flatten_ast.flatten_ast.call(null,input)),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY)),gamma.compiler.lift_assignments.lift_assignments.call(null,new cljs.core.Keyword(null,"root","root",-448657453))),gamma.compiler.insert_variables.insert_variables.call(null,cljs.core.PersistentHashSet.EMPTY)),gamma.compiler.insert_assignments.insert_assignments.call(null)),gamma.compiler.move_assignments.move_assignments.call(null));
});

//# sourceMappingURL=core.js.map