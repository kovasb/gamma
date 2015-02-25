// Compiled by ClojureScript 0.0-2913 {:target :nodejs}
goog.provide('transduce.reducers');
goog.require('cljs.core');
goog.require('clojure.core.reducers');
/**
* Like map, but threads a state through the sequence of transformations.
* For each x in coll, f is applied to [state x] and should return [state' x'].
* The first invocation of f uses init as the state.
*/
transduce.reducers.map_state = (function() {
var map_state = null;
var map_state__2 = (function (f,init){
return (function (x__13079__auto__){
return map_state.call(null,f,init,x__13079__auto__);
});
});
var map_state__3 = (function (f,init,coll){
return clojure.core.reducers.reducer.call(null,coll,(function (f1){
var state = cljs.core.atom.call(null,init);
return ((function (state){
return (function (acc,x){
var vec__13257 = f.call(null,cljs.core.deref.call(null,state),x);
var state_STAR_ = cljs.core.nth.call(null,vec__13257,(0),null);
var x_STAR_ = cljs.core.nth.call(null,vec__13257,(1),null);
cljs.core.reset_BANG_.call(null,state,state_STAR_);

return f1.call(null,acc,x_STAR_);
});
;})(state))
}));
});
map_state = function(f,init,coll){
switch(arguments.length){
case 2:
return map_state__2.call(this,f,init);
case 3:
return map_state__3.call(this,f,init,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map_state.cljs$core$IFn$_invoke$arity$2 = map_state__2;
map_state.cljs$core$IFn$_invoke$arity$3 = map_state__3;
return map_state;
})()
;
/**
* Like mapcat, but threads a state through the sequence of transformations.
* For each x in coll, f is applied to [state x] and should return [state' xs].
* The result is the concatenation of each returned xs.
*/
transduce.reducers.mapcat_state = (function() {
var mapcat_state = null;
var mapcat_state__2 = (function (f,init){
return (function (x__13079__auto__){
return mapcat_state.call(null,f,init,x__13079__auto__);
});
});
var mapcat_state__3 = (function (f,init,coll){
return clojure.core.reducers.reducer.call(null,coll,(function (f1){
var state = cljs.core.atom.call(null,init);
return ((function (state){
return (function (acc,x){
var vec__13259 = f.call(null,cljs.core.deref.call(null,state),x);
var state_STAR_ = cljs.core.nth.call(null,vec__13259,(0),null);
var xs = cljs.core.nth.call(null,vec__13259,(1),null);
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
mapcat_state = function(f,init,coll){
switch(arguments.length){
case 2:
return mapcat_state__2.call(this,f,init);
case 3:
return mapcat_state__3.call(this,f,init,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_state.cljs$core$IFn$_invoke$arity$2 = mapcat_state__2;
mapcat_state.cljs$core$IFn$_invoke$arity$3 = mapcat_state__3;
return mapcat_state;
})()
;
/**
* Applies f to each item in coll, returns nil
*/
transduce.reducers.each = (function() {
var each = null;
var each__1 = (function (f){
return (function (x__13079__auto__){
return each.call(null,f,x__13079__auto__);
});
});
var each__2 = (function (f,coll){
return cljs.core.reduce.call(null,(function (_,x){
f.call(null,x);

return null;
}),null,coll);
});
each = function(f,coll){
switch(arguments.length){
case 1:
return each__1.call(this,f);
case 2:
return each__2.call(this,f,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
each.cljs$core$IFn$_invoke$arity$1 = each__1;
each.cljs$core$IFn$_invoke$arity$2 = each__2;
return each;
})()
;
