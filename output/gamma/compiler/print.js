// Compiled by ClojureScript 0.0-2913 {:target :nodejs}
goog.provide('gamma.compiler.print');
goog.require('cljs.core');
goog.require('fipp.printer');
goog.require('gamma.ast');
gamma.compiler.print.ast_doc = (function ast_doc(db,node_id,f){
var x = (((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"root","root",-448657453),node_id)) || (gamma.ast.id_QMARK_.call(null,node_id)))?db.call(null,node_id):node_id);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"head","head",-771383919).cljs$core$IFn$_invoke$arity$1(x)),(cljs.core.truth_(f)?(function (){var temp__4124__auto__ = f.call(null,x,db);
if(cljs.core.truth_(temp__4124__auto__)){
var y = temp__4124__auto__;
return y;
} else {
return "";
}
})():null),"[",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),""], null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"literal","literal",1664775605),new cljs.core.Keyword(null,"head","head",-771383919).cljs$core$IFn$_invoke$arity$1(x)))?cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(x)):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nest","nest",-314993663),(2),cljs.core.interpose.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),",",new cljs.core.Keyword(null,"line","line",212345235)], null),cljs.core.map.call(null,((function (x){
return (function (p1__13203_SHARP_){
return ast_doc.call(null,db,p1__13203_SHARP_,f);
});})(x))
,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(x)))], null)),"]"], null);
});
gamma.compiler.print.print_ast = (function print_ast(x,f,w){
return fipp.printer.pprint_document.call(null,gamma.compiler.print.ast_doc.call(null,x,new cljs.core.Keyword(null,"root","root",-448657453),f),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),w], null));
});
gamma.compiler.print.helper = (function helper(db,paths,list){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nest","nest",-314993663),(2),cljs.core.interpose.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),",",new cljs.core.Keyword(null,"line","line",212345235)], null),cljs.core.map.call(null,(function (p1__13204_SHARP_){
return gamma.compiler.print.ast_doc2.call(null,db,p1__13204_SHARP_,paths);
}),list))], null);
});
gamma.compiler.print.ast_doc2 = (function ast_doc2(db,node_id,paths){
var x = (((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"root","root",-448657453),node_id)) || (gamma.ast.id_QMARK_.call(null,node_id)))?db.call(null,node_id):node_id);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"head","head",-771383919).cljs$core$IFn$_invoke$arity$1(x)),"(",(function (){var i = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"root","root",-448657453),i)){
return ":root";
} else {
return [cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(i))].join('');
}
})(),")",((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"literal","literal",1664775605),new cljs.core.Keyword(null,"head","head",-771383919).cljs$core$IFn$_invoke$arity$1(x)))?cljs.core.pr_str.call(null,cljs.core.select_keys.call(null,x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null))):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"{",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nest","nest",-314993663),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),""], null),(function (){var temp__4124__auto__ = new cljs.core.Keyword(null,"assignments","assignments",-1114514911).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(temp__4124__auto__)){
var y = temp__4124__auto__;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),":assignments ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),""], null),gamma.compiler.print.helper.call(null,db,paths,y),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),""], null);
}
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),":body ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),""], null),gamma.compiler.print.helper.call(null,db,paths,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(x))], null)], null),"}"], null))], null);
});
gamma.compiler.print.helper2 = (function helper2(db,paths,list){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nest","nest",-314993663),(2),cljs.core.interpose.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),",",new cljs.core.Keyword(null,"line","line",212345235)], null),cljs.core.map.call(null,(function (p1__13205_SHARP_){
return gamma.compiler.print.ast_doc3.call(null,db,p1__13205_SHARP_,paths);
}),list))], null);
});
gamma.compiler.print.ast_doc3 = (function ast_doc3(db,node_id,paths){
var x = (((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"root","root",-448657453),node_id)) || (gamma.ast.id_QMARK_.call(null,node_id)))?db.call(null,node_id):node_id);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"head","head",-771383919).cljs$core$IFn$_invoke$arity$1(x)),"(",(function (){var i = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"root","root",-448657453),i)){
return ":root";
} else {
return [cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(i))].join('');
}
})(),")",((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"literal","literal",1664775605),new cljs.core.Keyword(null,"head","head",-771383919).cljs$core$IFn$_invoke$arity$1(x)))?cljs.core.pr_str.call(null,cljs.core.select_keys.call(null,x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null))):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"{",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nest","nest",-314993663),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),""], null),(function (){var temp__4124__auto__ = cljs.core.vec.call(null,new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(x));
if(cljs.core.truth_(temp__4124__auto__)){
var y = temp__4124__auto__;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),":shared ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),""], null),gamma.compiler.print.helper2.call(null,db,paths,y),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),""], null);
}
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),":body ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),""], null),gamma.compiler.print.helper2.call(null,db,paths,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(x))], null)], null),"}"], null))], null);
});
gamma.compiler.print.print_ast2 = (function print_ast2(x,w){
return fipp.printer.pprint_document.call(null,gamma.compiler.print.ast_doc2.call(null,x,new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),w], null));
});
