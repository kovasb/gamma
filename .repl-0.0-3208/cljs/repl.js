// Compiled by ClojureScript 0.0-3208 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__11353_11365 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11354_11366 = null;
var count__11355_11367 = (0);
var i__11356_11368 = (0);
while(true){
if((i__11356_11368 < count__11355_11367)){
var f_11369 = cljs.core._nth.call(null,chunk__11354_11366,i__11356_11368);
cljs.core.println.call(null,"  ",f_11369);

var G__11370 = seq__11353_11365;
var G__11371 = chunk__11354_11366;
var G__11372 = count__11355_11367;
var G__11373 = (i__11356_11368 + (1));
seq__11353_11365 = G__11370;
chunk__11354_11366 = G__11371;
count__11355_11367 = G__11372;
i__11356_11368 = G__11373;
continue;
} else {
var temp__4126__auto___11374 = cljs.core.seq.call(null,seq__11353_11365);
if(temp__4126__auto___11374){
var seq__11353_11375__$1 = temp__4126__auto___11374;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11353_11375__$1)){
var c__5657__auto___11376 = cljs.core.chunk_first.call(null,seq__11353_11375__$1);
var G__11377 = cljs.core.chunk_rest.call(null,seq__11353_11375__$1);
var G__11378 = c__5657__auto___11376;
var G__11379 = cljs.core.count.call(null,c__5657__auto___11376);
var G__11380 = (0);
seq__11353_11365 = G__11377;
chunk__11354_11366 = G__11378;
count__11355_11367 = G__11379;
i__11356_11368 = G__11380;
continue;
} else {
var f_11381 = cljs.core.first.call(null,seq__11353_11375__$1);
cljs.core.println.call(null,"  ",f_11381);

var G__11382 = cljs.core.next.call(null,seq__11353_11375__$1);
var G__11383 = null;
var G__11384 = (0);
var G__11385 = (0);
seq__11353_11365 = G__11382;
chunk__11354_11366 = G__11383;
count__11355_11367 = G__11384;
i__11356_11368 = G__11385;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__4872__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4872__auto__)){
return or__4872__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
}
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

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__11357 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11358 = null;
var count__11359 = (0);
var i__11360 = (0);
while(true){
if((i__11360 < count__11359)){
var vec__11361 = cljs.core._nth.call(null,chunk__11358,i__11360);
var name = cljs.core.nth.call(null,vec__11361,(0),null);
var map__11362 = cljs.core.nth.call(null,vec__11361,(1),null);
var map__11362__$1 = ((cljs.core.seq_QMARK_.call(null,map__11362))?cljs.core.apply.call(null,cljs.core.hash_map,map__11362):map__11362);
var arglists = cljs.core.get.call(null,map__11362__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__11362__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__11386 = seq__11357;
var G__11387 = chunk__11358;
var G__11388 = count__11359;
var G__11389 = (i__11360 + (1));
seq__11357 = G__11386;
chunk__11358 = G__11387;
count__11359 = G__11388;
i__11360 = G__11389;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__11357);
if(temp__4126__auto__){
var seq__11357__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11357__$1)){
var c__5657__auto__ = cljs.core.chunk_first.call(null,seq__11357__$1);
var G__11390 = cljs.core.chunk_rest.call(null,seq__11357__$1);
var G__11391 = c__5657__auto__;
var G__11392 = cljs.core.count.call(null,c__5657__auto__);
var G__11393 = (0);
seq__11357 = G__11390;
chunk__11358 = G__11391;
count__11359 = G__11392;
i__11360 = G__11393;
continue;
} else {
var vec__11363 = cljs.core.first.call(null,seq__11357__$1);
var name = cljs.core.nth.call(null,vec__11363,(0),null);
var map__11364 = cljs.core.nth.call(null,vec__11363,(1),null);
var map__11364__$1 = ((cljs.core.seq_QMARK_.call(null,map__11364))?cljs.core.apply.call(null,cljs.core.hash_map,map__11364):map__11364);
var arglists = cljs.core.get.call(null,map__11364__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__11364__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__11394 = cljs.core.next.call(null,seq__11357__$1);
var G__11395 = null;
var G__11396 = (0);
var G__11397 = (0);
seq__11357 = G__11394;
chunk__11358 = G__11395;
count__11359 = G__11396;
i__11360 = G__11397;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});
