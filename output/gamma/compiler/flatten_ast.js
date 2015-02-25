// Compiled by ClojureScript 0.0-2913 {:target :nodejs}
goog.provide('gamma.compiler.flatten_ast');
goog.require('cljs.core');
var x_13850 = (1);
gamma.compiler.flatten_ast.flatten_ast = (function() {
var flatten_ast = null;
var flatten_ast__1 = (function (node){
return flatten_ast.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node)], null),new cljs.core.Keyword(null,"parents","parents",-2027538891),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root","root",-448657453)], null)], null)], null),node,new cljs.core.Keyword(null,"root","root",-448657453));
});
var flatten_ast__3 = (function (db,node,parent_id){
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node);
var seen = db.call(null,id);
if(cljs.core.truth_(seen)){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"parents","parents",-2027538891)], null),cljs.core.conj,parent_id);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"literal","literal",1664775605),new cljs.core.Keyword(null,"head","head",-771383919).cljs$core$IFn$_invoke$arity$1(node))){
return cljs.core.assoc.call(null,db,id,cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"parents","parents",-2027538891),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id], null)));
} else {
return cljs.core.reduce.call(null,((function (id,seen){
return (function (p1__13851_SHARP_,p2__13852_SHARP_){
return flatten_ast.call(null,p1__13851_SHARP_,p2__13852_SHARP_,id);
});})(id,seen))
,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node),cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.mapv.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(node)),new cljs.core.Keyword(null,"parents","parents",-2027538891),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id], null))),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(node));
}
}
});
flatten_ast = function(db,node,parent_id){
switch(arguments.length){
case 1:
return flatten_ast__1.call(this,db);
case 3:
return flatten_ast__3.call(this,db,node,parent_id);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
flatten_ast.cljs$core$IFn$_invoke$arity$1 = flatten_ast__1;
flatten_ast.cljs$core$IFn$_invoke$arity$3 = flatten_ast__3;
return flatten_ast;
})()
;
