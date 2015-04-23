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
var seq__7424_7436 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7425_7437 = null;
var count__7426_7438 = (0);
var i__7427_7439 = (0);
while(true){
if((i__7427_7439 < count__7426_7438)){
var f_7440 = cljs.core._nth.call(null,chunk__7425_7437,i__7427_7439);
cljs.core.println.call(null,"  ",f_7440);

var G__7441 = seq__7424_7436;
var G__7442 = chunk__7425_7437;
var G__7443 = count__7426_7438;
var G__7444 = (i__7427_7439 + (1));
seq__7424_7436 = G__7441;
chunk__7425_7437 = G__7442;
count__7426_7438 = G__7443;
i__7427_7439 = G__7444;
continue;
} else {
var temp__4126__auto___7445 = cljs.core.seq.call(null,seq__7424_7436);
if(temp__4126__auto___7445){
var seq__7424_7446__$1 = temp__4126__auto___7445;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7424_7446__$1)){
var c__4736__auto___7447 = cljs.core.chunk_first.call(null,seq__7424_7446__$1);
var G__7448 = cljs.core.chunk_rest.call(null,seq__7424_7446__$1);
var G__7449 = c__4736__auto___7447;
var G__7450 = cljs.core.count.call(null,c__4736__auto___7447);
var G__7451 = (0);
seq__7424_7436 = G__7448;
chunk__7425_7437 = G__7449;
count__7426_7438 = G__7450;
i__7427_7439 = G__7451;
continue;
} else {
var f_7452 = cljs.core.first.call(null,seq__7424_7446__$1);
cljs.core.println.call(null,"  ",f_7452);

var G__7453 = cljs.core.next.call(null,seq__7424_7446__$1);
var G__7454 = null;
var G__7455 = (0);
var G__7456 = (0);
seq__7424_7436 = G__7453;
chunk__7425_7437 = G__7454;
count__7426_7438 = G__7455;
i__7427_7439 = G__7456;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__3951__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3951__auto__)){
return or__3951__auto__;
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
var seq__7428 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7429 = null;
var count__7430 = (0);
var i__7431 = (0);
while(true){
if((i__7431 < count__7430)){
var vec__7432 = cljs.core._nth.call(null,chunk__7429,i__7431);
var name = cljs.core.nth.call(null,vec__7432,(0),null);
var map__7433 = cljs.core.nth.call(null,vec__7432,(1),null);
var map__7433__$1 = ((cljs.core.seq_QMARK_.call(null,map__7433))?cljs.core.apply.call(null,cljs.core.hash_map,map__7433):map__7433);
var arglists = cljs.core.get.call(null,map__7433__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__7433__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__7457 = seq__7428;
var G__7458 = chunk__7429;
var G__7459 = count__7430;
var G__7460 = (i__7431 + (1));
seq__7428 = G__7457;
chunk__7429 = G__7458;
count__7430 = G__7459;
i__7431 = G__7460;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__7428);
if(temp__4126__auto__){
var seq__7428__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7428__$1)){
var c__4736__auto__ = cljs.core.chunk_first.call(null,seq__7428__$1);
var G__7461 = cljs.core.chunk_rest.call(null,seq__7428__$1);
var G__7462 = c__4736__auto__;
var G__7463 = cljs.core.count.call(null,c__4736__auto__);
var G__7464 = (0);
seq__7428 = G__7461;
chunk__7429 = G__7462;
count__7430 = G__7463;
i__7431 = G__7464;
continue;
} else {
var vec__7434 = cljs.core.first.call(null,seq__7428__$1);
var name = cljs.core.nth.call(null,vec__7434,(0),null);
var map__7435 = cljs.core.nth.call(null,vec__7434,(1),null);
var map__7435__$1 = ((cljs.core.seq_QMARK_.call(null,map__7435))?cljs.core.apply.call(null,cljs.core.hash_map,map__7435):map__7435);
var arglists = cljs.core.get.call(null,map__7435__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__7435__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__7465 = cljs.core.next.call(null,seq__7428__$1);
var G__7466 = null;
var G__7467 = (0);
var G__7468 = (0);
seq__7428 = G__7465;
chunk__7429 = G__7466;
count__7430 = G__7467;
i__7431 = G__7468;
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

//# sourceMappingURL=repl.js.map