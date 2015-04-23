// Compiled by ClojureScript 0.0-3208 {}
goog.provide('gamma.compiler.flatten_ast');
goog.require('cljs.core');
goog.require('gamma.ast');
goog.require('clojure.walk');
gamma.compiler.flatten_ast.flatten_ast = (function gamma$compiler$flatten_ast$flatten_ast(){
var G__5205 = arguments.length;
switch (G__5205) {
case 1:
return gamma.compiler.flatten_ast.flatten_ast.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return gamma.compiler.flatten_ast.flatten_ast.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

gamma.compiler.flatten_ast.flatten_ast.cljs$core$IFn$_invoke$arity$1 = (function (node){
return gamma.compiler.flatten_ast.flatten_ast.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"head","head",-771383919).cljs$core$IFn$_invoke$arity$1(node)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.mapv.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(node)),new cljs.core.Keyword(null,"parents","parents",-2027538891),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root","root",-448657453)], null)], null)], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node)], null),new cljs.core.Keyword(null,"parents","parents",-2027538891),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root","root",-448657453)], null)], null)], null)),node,new cljs.core.Keyword(null,"root","root",-448657453));
});

gamma.compiler.flatten_ast.flatten_ast.cljs$core$IFn$_invoke$arity$3 = (function (db,node,parent_id){
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node);
var seen = db.call(null,id);
if(cljs.core.truth_(seen)){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"parents","parents",-2027538891)], null),cljs.core.conj,parent_id);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"literal","literal",1664775605),new cljs.core.Keyword(null,"head","head",-771383919).cljs$core$IFn$_invoke$arity$1(node))){
return cljs.core.assoc.call(null,db,id,cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"parents","parents",-2027538891),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id], null)));
} else {
return cljs.core.reduce.call(null,((function (id,seen){
return (function (p1__5202_SHARP_,p2__5203_SHARP_){
return gamma.compiler.flatten_ast.flatten_ast.call(null,p1__5202_SHARP_,p2__5203_SHARP_,id);
});})(id,seen))
,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node),cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.mapv.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(node)),new cljs.core.Keyword(null,"parents","parents",-2027538891),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id], null))),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(node));
}
}
});

gamma.compiler.flatten_ast.flatten_ast.cljs$lang$maxFixedArity = 3;
gamma.compiler.flatten_ast.__GT_tree = (function gamma$compiler$flatten_ast$__GT_tree(db,id){
var e = db.call(null,id);
return cljs.core.assoc.call(null,clojure.walk.postwalk.call(null,((function (e){
return (function (y){
if(cljs.core.truth_(gamma.ast.id_QMARK_.call(null,y))){
return gamma$compiler$flatten_ast$__GT_tree.call(null,db,y);
} else {
return y;
}
});})(e))
,cljs.core.dissoc.call(null,e,new cljs.core.Keyword(null,"parents","parents",-2027538891),new cljs.core.Keyword(null,"id","id",-1388402092))),new cljs.core.Keyword(null,"id","id",-1388402092),id);
});

//# sourceMappingURL=flatten_ast.js.map