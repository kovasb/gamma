// Compiled by ClojureScript 0.0-2913 {:target :nodejs}
goog.provide('gamma.emit.tag');
goog.require('cljs.core');
goog.require('gamma.ast');
goog.require('gamma.emit.emit');
cljs.core._add_method.call(null,gamma.emit.emit.emit,new cljs.core.Keyword(null,"variable","variable",-281346492),(function (db,x){
return [cljs.core.str("v"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(x)))].join('');
}));
cljs.core._add_method.call(null,gamma.emit.emit.emit,new cljs.core.Keyword(null,"program","program",781564284),(function (db,x){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"break","break",126570225),cljs.core.map.call(null,(function (v){
return gamma.emit.emit.emit.call(null,db,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"declaration","declaration",-1819933768),new cljs.core.Keyword(null,"variable","variable",-281346492),v], null));
}),new cljs.core.Keyword(null,"global-variables","global-variables",-870031532).cljs$core$IFn$_invoke$arity$1(x))),"main(){",new cljs.core.Keyword(null,"break","break",126570225),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"break","break",126570225),cljs.core.map.call(null,(function (v){
return gamma.emit.emit.emit.call(null,db,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"declaration","declaration",-1819933768),new cljs.core.Keyword(null,"variable","variable",-281346492),v], null));
}),new cljs.core.Keyword(null,"local-variables","local-variables",-1899802034).cljs$core$IFn$_invoke$arity$1(x))),new cljs.core.Keyword(null,"break","break",126570225),gamma.emit.emit.emit.call(null,db,db.call(null,new cljs.core.Keyword(null,"root","root",-448657453))),new cljs.core.Keyword(null,"break","break",126570225),"}"], null);
}));
cljs.core._add_method.call(null,gamma.emit.emit.emit,new cljs.core.Keyword(null,"declaration","declaration",-1819933768),(function (db,x){
var v = new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(x);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var temp__4124__auto__ = new cljs.core.Keyword(null,"storage","storage",1867247511).cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(temp__4124__auto__)){
var s = temp__4124__auto__;
return [cljs.core.str(cljs.core.name.call(null,s)),cljs.core.str(" ")].join('');
} else {
return "";
}
})(),cljs.core.name.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(v))," ",gamma.emit.emit.emit.call(null,db,v),";"], null);
}));
