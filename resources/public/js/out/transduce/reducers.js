// Compiled by ClojureScript 0.0-3208 {}
goog.provide('transduce.reducers');
goog.require('cljs.core');
goog.require('clojure.core.reducers');
/**
 * Like map, but threads a state through the sequence of transformations.
 * For each x in coll, f is applied to [state x] and should return [state' x'].
 * The first invocation of f uses init as the state.
 */
transduce.reducers.map_state = (function transduce$reducers$map_state(){
var G__6970 = arguments.length;
switch (G__6970) {
case 2:
return transduce.reducers.map_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return transduce.reducers.map_state.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

transduce.reducers.map_state.cljs$core$IFn$_invoke$arity$2 = (function (f,init){
return (function (x__5365__auto__){
return transduce.reducers.map_state.call(null,f,init,x__5365__auto__);
});
});

transduce.reducers.map_state.cljs$core$IFn$_invoke$arity$3 = (function (f,init,coll){
return clojure.core.reducers.reducer.call(null,coll,(function (f1){
var state = cljs.core.atom.call(null,init);
return ((function (state){
return (function (acc,x){
var vec__6971 = f.call(null,cljs.core.deref.call(null,state),x);
var state_STAR_ = cljs.core.nth.call(null,vec__6971,(0),null);
var x_STAR_ = cljs.core.nth.call(null,vec__6971,(1),null);
cljs.core.reset_BANG_.call(null,state,state_STAR_);

return f1.call(null,acc,x_STAR_);
});
;})(state))
}));
});

transduce.reducers.map_state.cljs$lang$maxFixedArity = 3;
/**
 * Like mapcat, but threads a state through the sequence of transformations.
 * For each x in coll, f is applied to [state x] and should return [state' xs].
 * The result is the concatenation of each returned xs.
 */
transduce.reducers.mapcat_state = (function transduce$reducers$mapcat_state(){
var G__6974 = arguments.length;
switch (G__6974) {
case 2:
return transduce.reducers.mapcat_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return transduce.reducers.mapcat_state.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

transduce.reducers.mapcat_state.cljs$core$IFn$_invoke$arity$2 = (function (f,init){
return (function (x__5365__auto__){
return transduce.reducers.mapcat_state.call(null,f,init,x__5365__auto__);
});
});

transduce.reducers.mapcat_state.cljs$core$IFn$_invoke$arity$3 = (function (f,init,coll){
return clojure.core.reducers.reducer.call(null,coll,(function (f1){
var state = cljs.core.atom.call(null,init);
return ((function (state){
return (function (acc,x){
var vec__6975 = f.call(null,cljs.core.deref.call(null,state),x);
var state_STAR_ = cljs.core.nth.call(null,vec__6975,(0),null);
var xs = cljs.core.nth.call(null,vec__6975,(1),null);
cljs.core.reset_BANG_.call(null,state,state_STAR_);

if(cljs.core.seq.call(null,xs)){
return cljs.core.reduce.call(null,f1,acc,xs);
} else {
return acc;
}
});
;})(state))
}));
});

transduce.reducers.mapcat_state.cljs$lang$maxFixedArity = 3;
/**
 * Applies f to each item in coll, returns nil
 */
transduce.reducers.each = (function transduce$reducers$each(){
var G__6978 = arguments.length;
switch (G__6978) {
case 1:
return transduce.reducers.each.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return transduce.reducers.each.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

transduce.reducers.each.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (x__5365__auto__){
return transduce.reducers.each.call(null,f,x__5365__auto__);
});
});

transduce.reducers.each.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return cljs.core.reduce.call(null,(function (_,x){
f.call(null,x);

return null;
}),null,coll);
});

transduce.reducers.each.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=reducers.js.map