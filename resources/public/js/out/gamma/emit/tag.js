// Compiled by ClojureScript 0.0-3208 {}
goog.provide('gamma.emit.tag');
goog.require('cljs.core');
goog.require('gamma.ast');
goog.require('gamma.emit.emit');
cljs.core._add_method.call(null,gamma.emit.emit.emit,new cljs.core.Keyword(null,"variable","variable",-281346492),(function (db,x){
var temp__4124__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(temp__4124__auto__)){
var n = temp__4124__auto__;
return n;
} else {
return [cljs.core.str("v"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(x))].join('');
}
}));
cljs.core._add_method.call(null,gamma.emit.emit.emit,new cljs.core.Keyword(null,"shader","shader",1492833021),(function (db,x){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"break","break",126570225),cljs.core.map.call(null,(function (v){
return gamma.emit.emit.emit.call(null,db,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"declaration","declaration",-1819933768),new cljs.core.Keyword(null,"variable","variable",-281346492),v], null));
}),cljs.core.filter.call(null,(function (p1__5045_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,(new RegExp("gl_.*")),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__5045_SHARP_)));
}),cljs.core.concat.call(null,new cljs.core.Keyword(null,"inputs","inputs",865803858).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"outputs","outputs",-1896513034).cljs$core$IFn$_invoke$arity$1(x))))),new cljs.core.Keyword(null,"break","break",126570225),"void main(void){",new cljs.core.Keyword(null,"break","break",126570225),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"break","break",126570225),cljs.core.map.call(null,(function (v){
return gamma.emit.emit.emit.call(null,db,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"declaration","declaration",-1819933768),new cljs.core.Keyword(null,"variable","variable",-281346492),v], null));
}),cljs.core.filter.call(null,(function (p1__5046_SHARP_){
return cljs.core.not.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__5046_SHARP_))?cljs.core.re_matches.call(null,(new RegExp("gl_.*")),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__5046_SHARP_)):null));
}),new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(x)))),new cljs.core.Keyword(null,"break","break",126570225),gamma.emit.emit.emit.call(null,db,db.call(null,new cljs.core.Keyword(null,"root","root",-448657453))),new cljs.core.Keyword(null,"break","break",126570225),"}"], null);
}));
gamma.emit.tag.qualifier_order = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"invariant","invariant",-1658446508),new cljs.core.Keyword(null,"storage","storage",1867247511),new cljs.core.Keyword(null,"precision","precision",-1175707478)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"storage","storage",1867247511),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.Keyword(null,"precision","precision",-1175707478)], null)], null);
cljs.core._add_method.call(null,gamma.emit.emit.emit,new cljs.core.Keyword(null,"declaration","declaration",-1819933768),(function (db,x){
try{var v = new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(x);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var temp__4124__auto__ = new cljs.core.Keyword(null,"storage","storage",1867247511).cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(temp__4124__auto__)){
var s = temp__4124__auto__;
return [cljs.core.str(cljs.core.name.call(null,s)),cljs.core.str(" ")].join('');
} else {
return "";
}
})(),(function (){var temp__4124__auto__ = new cljs.core.Keyword(null,"precision","precision",-1175707478).cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(temp__4124__auto__)){
var p = temp__4124__auto__;
return [cljs.core.str(cljs.core.name.call(null,p)),cljs.core.str(" ")].join('');
} else {
return "";
}
})(),cljs.core.name.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(v))," ",gamma.emit.emit.emit.call(null,db,v),";"], null);
}catch (e5047){if((e5047 instanceof Error)){
var e = e5047;
return cljs.core.println.call(null,[cljs.core.str("declaration error on: ")].join(''),cljs.core.pr_str.call(null,x));
} else {
throw e5047;

}
}}));

//# sourceMappingURL=tag.js.map