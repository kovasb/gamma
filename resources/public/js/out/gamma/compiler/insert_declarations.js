// Compiled by ClojureScript 0.0-3208 {}
goog.provide('gamma.compiler.insert_declarations');
goog.require('cljs.core');
goog.require('gamma.compiler.core');
goog.require('gamma.compiler.common');
goog.require('gamma.ast');
gamma.compiler.insert_declarations.walk = (function gamma$compiler$insert_declarations$walk(db,pre){
return gamma.compiler.core.transform.call(null,db,(function gamma$compiler$insert_declarations$walk_$_walk_fn(db__$1,path){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre.call(null,db__$1,path),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),gamma.compiler.common.map_path.call(null,gamma$compiler$insert_declarations$walk_$_walk_fn)], null)], null)], null);
}));
});
gamma.compiler.insert_declarations.variables = (function gamma$compiler$insert_declarations$variables(db){
var a = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
gamma.compiler.insert_declarations.walk.call(null,db,((function (a){
return (function (db__$1,location){
var e_6098 = gamma.compiler.common.get_element.call(null,db__$1,location);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"literal","literal",1664775605),new cljs.core.Keyword(null,"head","head",-771383919).cljs$core$IFn$_invoke$arity$1(e_6098))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(e_6098)))){
cljs.core.swap_BANG_.call(null,a,cljs.core.conj,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(e_6098));

if(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(e_6098)))){
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

//# sourceMappingURL=insert_declarations.js.map