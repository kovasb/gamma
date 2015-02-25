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
var seq__12870_12874 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12871_12875 = null;
var count__12872_12876 = (0);
var i__12873_12877 = (0);
while(true){
if((i__12873_12877 < count__12872_12876)){
var f_12878 = cljs.core._nth.call(null,chunk__12871_12875,i__12873_12877);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_12878);

var G__12879 = seq__12870_12874;
var G__12880 = chunk__12871_12875;
var G__12881 = count__12872_12876;
var G__12882 = (i__12873_12877 + (1));
seq__12870_12874 = G__12879;
chunk__12871_12875 = G__12880;
count__12872_12876 = G__12881;
i__12873_12877 = G__12882;
continue;
} else {
var temp__4126__auto___12883 = cljs.core.seq.call(null,seq__12870_12874);
if(temp__4126__auto___12883){
var seq__12870_12884__$1 = temp__4126__auto___12883;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12870_12884__$1)){
var c__6009__auto___12885 = cljs.core.chunk_first.call(null,seq__12870_12884__$1);
var G__12886 = cljs.core.chunk_rest.call(null,seq__12870_12884__$1);
var G__12887 = c__6009__auto___12885;
var G__12888 = cljs.core.count.call(null,c__6009__auto___12885);
var G__12889 = (0);
seq__12870_12874 = G__12886;
chunk__12871_12875 = G__12887;
count__12872_12876 = G__12888;
i__12873_12877 = G__12889;
continue;
} else {
var f_12890 = cljs.core.first.call(null,seq__12870_12884__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_12890);

var G__12891 = cljs.core.next.call(null,seq__12870_12884__$1);
var G__12892 = null;
var G__12893 = (0);
var G__12894 = (0);
seq__12870_12874 = G__12891;
chunk__12871_12875 = G__12892;
count__12872_12876 = G__12893;
i__12873_12877 = G__12894;
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
