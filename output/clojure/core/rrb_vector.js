// Compiled by ClojureScript 0.0-2913 {:target :nodejs}
goog.provide('clojure.core.rrb_vector');
goog.require('cljs.core');
goog.require('clojure.core.rrb_vector.interop');
goog.require('clojure.core.rrb_vector.rrbt');
goog.require('clojure.core.rrb_vector.protocols');
/**
* Concatenates the given vectors in logarithmic time.
* @param {...*} var_args
*/
clojure.core.rrb_vector.catvec = (function() {
var catvec = null;
var catvec__0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});
var catvec__1 = (function (v1){
return v1;
});
var catvec__2 = (function (v1,v2){
return clojure.core.rrb_vector.protocols._splicev.call(null,v1,v2);
});
var catvec__3 = (function (v1,v2,v3){
return clojure.core.rrb_vector.protocols._splicev.call(null,clojure.core.rrb_vector.protocols._splicev.call(null,v1,v2),v3);
});
var catvec__4 = (function (v1,v2,v3,v4){
return clojure.core.rrb_vector.protocols._splicev.call(null,clojure.core.rrb_vector.protocols._splicev.call(null,v1,v2),clojure.core.rrb_vector.protocols._splicev.call(null,v3,v4));
});
var catvec__5 = (function() { 
var G__13308__delegate = function (v1,v2,v3,v4,vn){
return clojure.core.rrb_vector.protocols._splicev.call(null,clojure.core.rrb_vector.protocols._splicev.call(null,clojure.core.rrb_vector.protocols._splicev.call(null,v1,v2),clojure.core.rrb_vector.protocols._splicev.call(null,v3,v4)),cljs.core.apply.call(null,catvec,vn));
};
var G__13308 = function (v1,v2,v3,v4,var_args){
var vn = null;
if (arguments.length > 4) {
var G__13309__i = 0, G__13309__a = new Array(arguments.length -  4);
while (G__13309__i < G__13309__a.length) {G__13309__a[G__13309__i] = arguments[G__13309__i + 4]; ++G__13309__i;}
  vn = new cljs.core.IndexedSeq(G__13309__a,0);
} 
return G__13308__delegate.call(this,v1,v2,v3,v4,vn);};
G__13308.cljs$lang$maxFixedArity = 4;
G__13308.cljs$lang$applyTo = (function (arglist__13310){
var v1 = cljs.core.first(arglist__13310);
arglist__13310 = cljs.core.next(arglist__13310);
var v2 = cljs.core.first(arglist__13310);
arglist__13310 = cljs.core.next(arglist__13310);
var v3 = cljs.core.first(arglist__13310);
arglist__13310 = cljs.core.next(arglist__13310);
var v4 = cljs.core.first(arglist__13310);
var vn = cljs.core.rest(arglist__13310);
return G__13308__delegate(v1,v2,v3,v4,vn);
});
G__13308.cljs$core$IFn$_invoke$arity$variadic = G__13308__delegate;
return G__13308;
})()
;
catvec = function(v1,v2,v3,v4,var_args){
var vn = var_args;
switch(arguments.length){
case 0:
return catvec__0.call(this);
case 1:
return catvec__1.call(this,v1);
case 2:
return catvec__2.call(this,v1,v2);
case 3:
return catvec__3.call(this,v1,v2,v3);
case 4:
return catvec__4.call(this,v1,v2,v3,v4);
default:
var G__13311 = null;
if (arguments.length > 4) {
var G__13312__i = 0, G__13312__a = new Array(arguments.length -  4);
while (G__13312__i < G__13312__a.length) {G__13312__a[G__13312__i] = arguments[G__13312__i + 4]; ++G__13312__i;}
G__13311 = new cljs.core.IndexedSeq(G__13312__a,0);
}
return catvec__5.cljs$core$IFn$_invoke$arity$variadic(v1,v2,v3,v4, G__13311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
catvec.cljs$lang$maxFixedArity = 4;
catvec.cljs$lang$applyTo = catvec__5.cljs$lang$applyTo;
catvec.cljs$core$IFn$_invoke$arity$0 = catvec__0;
catvec.cljs$core$IFn$_invoke$arity$1 = catvec__1;
catvec.cljs$core$IFn$_invoke$arity$2 = catvec__2;
catvec.cljs$core$IFn$_invoke$arity$3 = catvec__3;
catvec.cljs$core$IFn$_invoke$arity$4 = catvec__4;
catvec.cljs$core$IFn$_invoke$arity$variadic = catvec__5.cljs$core$IFn$_invoke$arity$variadic;
return catvec;
})()
;
/**
* Returns a new vector containing the elements of the given vector v
* lying between the start (inclusive) and end (exclusive) indices in
* logarithmic time. end defaults to end of vector. The resulting
* vector shares structure with the original, but does not hold on to
* any elements of the original vector lying outside the given index
* range.
*/
clojure.core.rrb_vector.subvec = (function() {
var subvec = null;
var subvec__2 = (function (v,start){
return clojure.core.rrb_vector.protocols._slicev.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__3 = (function (v,start,end){
return clojure.core.rrb_vector.protocols._slicev.call(null,v,start,end);
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subvec.cljs$core$IFn$_invoke$arity$2 = subvec__2;
subvec.cljs$core$IFn$_invoke$arity$3 = subvec__3;
return subvec;
})()
;
/**
* Creates a new vector containing the args.
* @param {...*} var_args
*/
clojure.core.rrb_vector.vector = (function() {
var vector = null;
var vector__0 = (function (){
var arr__13318 = [];
return (new clojure.core.rrb_vector.rrbt.Vector(0,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__13318,null,(0)));
});
var vector__1 = (function (x1){
var arr__13319 = [null];
(arr__13319[(0)] = x1);

return (new clojure.core.rrb_vector.rrbt.Vector(1,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__13319,null,null));
});
var vector__2 = (function (x1,x2){
var arr__13320 = [null,null];
(arr__13320[(0)] = x1);

(arr__13320[(1)] = x2);

return (new clojure.core.rrb_vector.rrbt.Vector(2,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__13320,null,null));
});
var vector__3 = (function (x1,x2,x3){
var arr__13321 = [null,null,null];
(arr__13321[(0)] = x1);

(arr__13321[(1)] = x2);

(arr__13321[(2)] = x3);

return (new clojure.core.rrb_vector.rrbt.Vector(3,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__13321,null,null));
});
var vector__4 = (function (x1,x2,x3,x4){
var arr__13322 = [null,null,null,null];
(arr__13322[(0)] = x1);

(arr__13322[(1)] = x2);

(arr__13322[(2)] = x3);

(arr__13322[(3)] = x4);

return (new clojure.core.rrb_vector.rrbt.Vector(4,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__13322,null,null));
});
var vector__5 = (function() { 
var G__13323__delegate = function (x1,x2,x3,x4,xn){
return cljs.core.into.call(null,vector.call(null,x1,x2,x3,x4),xn);
};
var G__13323 = function (x1,x2,x3,x4,var_args){
var xn = null;
if (arguments.length > 4) {
var G__13324__i = 0, G__13324__a = new Array(arguments.length -  4);
while (G__13324__i < G__13324__a.length) {G__13324__a[G__13324__i] = arguments[G__13324__i + 4]; ++G__13324__i;}
  xn = new cljs.core.IndexedSeq(G__13324__a,0);
} 
return G__13323__delegate.call(this,x1,x2,x3,x4,xn);};
G__13323.cljs$lang$maxFixedArity = 4;
G__13323.cljs$lang$applyTo = (function (arglist__13325){
var x1 = cljs.core.first(arglist__13325);
arglist__13325 = cljs.core.next(arglist__13325);
var x2 = cljs.core.first(arglist__13325);
arglist__13325 = cljs.core.next(arglist__13325);
var x3 = cljs.core.first(arglist__13325);
arglist__13325 = cljs.core.next(arglist__13325);
var x4 = cljs.core.first(arglist__13325);
var xn = cljs.core.rest(arglist__13325);
return G__13323__delegate(x1,x2,x3,x4,xn);
});
G__13323.cljs$core$IFn$_invoke$arity$variadic = G__13323__delegate;
return G__13323;
})()
;
vector = function(x1,x2,x3,x4,var_args){
var xn = var_args;
switch(arguments.length){
case 0:
return vector__0.call(this);
case 1:
return vector__1.call(this,x1);
case 2:
return vector__2.call(this,x1,x2);
case 3:
return vector__3.call(this,x1,x2,x3);
case 4:
return vector__4.call(this,x1,x2,x3,x4);
default:
var G__13326 = null;
if (arguments.length > 4) {
var G__13327__i = 0, G__13327__a = new Array(arguments.length -  4);
while (G__13327__i < G__13327__a.length) {G__13327__a[G__13327__i] = arguments[G__13327__i + 4]; ++G__13327__i;}
G__13326 = new cljs.core.IndexedSeq(G__13327__a,0);
}
return vector__5.cljs$core$IFn$_invoke$arity$variadic(x1,x2,x3,x4, G__13326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vector.cljs$lang$maxFixedArity = 4;
vector.cljs$lang$applyTo = vector__5.cljs$lang$applyTo;
vector.cljs$core$IFn$_invoke$arity$0 = vector__0;
vector.cljs$core$IFn$_invoke$arity$1 = vector__1;
vector.cljs$core$IFn$_invoke$arity$2 = vector__2;
vector.cljs$core$IFn$_invoke$arity$3 = vector__3;
vector.cljs$core$IFn$_invoke$arity$4 = vector__4;
vector.cljs$core$IFn$_invoke$arity$variadic = vector__5.cljs$core$IFn$_invoke$arity$variadic;
return vector;
})()
;
/**
* Returns a vector containing the contents of coll.
* 
* If coll is a vector, returns an RRB vector using the internal tree
* of coll.
*/
clojure.core.rrb_vector.vec = (function vec(coll){
if(cljs.core.vector_QMARK_.call(null,coll)){
return clojure.core.rrb_vector.rrbt._as_rrbt.call(null,coll);
} else {
return cljs.core.apply.call(null,clojure.core.rrb_vector.vector,coll);
}
});
