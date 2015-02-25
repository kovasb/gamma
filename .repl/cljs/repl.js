// Compiled by ClojureScript 0.0-2913 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__6988_6992 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__6989_6993 = null;
var count__6990_6994 = (0);
var i__6991_6995 = (0);
while(true){
if((i__6991_6995 < count__6990_6994)){
var f_6996 = cljs.core._nth.call(null,chunk__6989_6993,i__6991_6995);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_6996);

var G__6997 = seq__6988_6992;
var G__6998 = chunk__6989_6993;
var G__6999 = count__6990_6994;
var G__7000 = (i__6991_6995 + (1));
seq__6988_6992 = G__6997;
chunk__6989_6993 = G__6998;
count__6990_6994 = G__6999;
i__6991_6995 = G__7000;
continue;
} else {
var temp__4126__auto___7001 = cljs.core.seq.call(null,seq__6988_6992);
if(temp__4126__auto___7001){
var seq__6988_7002__$1 = temp__4126__auto___7001;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6988_7002__$1)){
var c__6254__auto___7003 = cljs.core.chunk_first.call(null,seq__6988_7002__$1);
var G__7004 = cljs.core.chunk_rest.call(null,seq__6988_7002__$1);
var G__7005 = c__6254__auto___7003;
var G__7006 = cljs.core.count.call(null,c__6254__auto___7003);
var G__7007 = (0);
seq__6988_6992 = G__7004;
chunk__6989_6993 = G__7005;
count__6990_6994 = G__7006;
i__6991_6995 = G__7007;
continue;
} else {
var f_7008 = cljs.core.first.call(null,seq__6988_7002__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_7008);

var G__7009 = cljs.core.next.call(null,seq__6988_7002__$1);
var G__7010 = null;
var G__7011 = (0);
var G__7012 = (0);
seq__6988_6992 = G__7009;
chunk__6989_6993 = G__7010;
count__6990_6994 = G__7011;
i__6991_6995 = G__7012;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

return cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));
}
});
