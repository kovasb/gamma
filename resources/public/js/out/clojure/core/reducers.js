// Compiled by ClojureScript 0.0-3208 {}
goog.provide('clojure.core.reducers');
goog.require('cljs.core');
goog.require('cljs.core');
clojure.core.reducers.fjtask = (function clojure$core$reducers$fjtask(f){
return f;
});
clojure.core.reducers.fjinvoke = (function clojure$core$reducers$fjinvoke(f){
return f.call(null);
});
clojure.core.reducers.fjfork = (function clojure$core$reducers$fjfork(task){
return task;
});
clojure.core.reducers.fjjoin = (function clojure$core$reducers$fjjoin(task){
return task.call(null);
});
/**
 * Like core/reduce except:
 * When init is not provided, (f) is used.
 * Maps are reduced with reduce-kv
 */
clojure.core.reducers.reduce = (function clojure$core$reducers$reduce(){
var G__6983 = arguments.length;
switch (G__6983) {
case 2:
return clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return clojure.core.reducers.reduce.call(null,f,f.call(null),coll);
});

clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3 = (function (f,init,coll){
if(cljs.core.map_QMARK_.call(null,coll)){
return cljs.core._kv_reduce.call(null,coll,f,init);
} else {
if((coll == null)){
return init;
} else {
if(cljs.core.array_QMARK_.call(null,coll)){
return cljs.core.array_reduce.call(null,coll,f,init);
} else {
return cljs.core._reduce.call(null,coll,f,init);

}
}
}
});

clojure.core.reducers.reduce.cljs$lang$maxFixedArity = 3;

clojure.core.reducers.CollFold = (function (){var obj6986 = {};
return obj6986;
})();

clojure.core.reducers.coll_fold = (function clojure$core$reducers$coll_fold(coll,n,combinef,reducef){
if((function (){var and__3939__auto__ = coll;
if(and__3939__auto__){
return coll.clojure$core$reducers$CollFold$coll_fold$arity$4;
} else {
return and__3939__auto__;
}
})()){
return coll.clojure$core$reducers$CollFold$coll_fold$arity$4(coll,n,combinef,reducef);
} else {
var x__4587__auto__ = (((coll == null))?null:coll);
return (function (){var or__3951__auto__ = (clojure.core.reducers.coll_fold[goog.typeOf(x__4587__auto__)]);
if(or__3951__auto__){
return or__3951__auto__;
} else {
var or__3951__auto____$1 = (clojure.core.reducers.coll_fold["_"]);
if(or__3951__auto____$1){
return or__3951__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"CollFold.coll-fold",coll);
}
}
})().call(null,coll,n,combinef,reducef);
}
});

/**
 * Reduces a collection using a (potentially parallel) reduce-combine
 * strategy. The collection is partitioned into groups of approximately
 * n (default 512), each of which is reduced with reducef (with a seed
 * value obtained by calling (combinef) with no arguments). The results
 * of these reductions are then reduced with combinef (default
 * reducef). combinef must be associative, and, when called with no
 * arguments, (combinef) must produce its identity element. These
 * operations may be performed in parallel, but the results will
 * preserve order.
 * 
 * Note: Performing operations in parallel is currently not implemented.
 */
clojure.core.reducers.fold = (function clojure$core$reducers$fold(){
var G__6988 = arguments.length;
switch (G__6988) {
case 2:
return clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$2 = (function (reducef,coll){
return clojure.core.reducers.fold.call(null,reducef,reducef,coll);
});

clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$3 = (function (combinef,reducef,coll){
return clojure.core.reducers.fold.call(null,(512),combinef,reducef,coll);
});

clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$4 = (function (n,combinef,reducef,coll){
return clojure.core.reducers.coll_fold.call(null,coll,n,combinef,reducef);
});

clojure.core.reducers.fold.cljs$lang$maxFixedArity = 4;
/**
 * Given a reducible collection, and a transformation function xf,
 * returns a reducible collection, where any supplied reducing
 * fn will be transformed by xf. xf is a function of reducing fn to
 * reducing fn.
 */
clojure.core.reducers.reducer = (function clojure$core$reducers$reducer(coll,xf){
if(typeof clojure.core.reducers.t6993 !== 'undefined'){
} else {

/**
* @constructor
*/
clojure.core.reducers.t6993 = (function (xf,coll,reducer,meta6994){
this.xf = xf;
this.coll = coll;
this.reducer = reducer;
this.meta6994 = meta6994;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 917504;
})
clojure.core.reducers.t6993.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f1){
var self__ = this;
var this$__$1 = this;
return cljs.core._reduce.call(null,this$__$1,f1,f1.call(null));
});

clojure.core.reducers.t6993.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f1,init){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.call(null,self__.coll,self__.xf.call(null,f1),init);
});

clojure.core.reducers.t6993.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6995){
var self__ = this;
var _6995__$1 = this;
return self__.meta6994;
});

clojure.core.reducers.t6993.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6995,meta6994__$1){
var self__ = this;
var _6995__$1 = this;
return (new clojure.core.reducers.t6993(self__.xf,self__.coll,self__.reducer,meta6994__$1));
});

clojure.core.reducers.t6993.cljs$lang$type = true;

clojure.core.reducers.t6993.cljs$lang$ctorStr = "clojure.core.reducers/t6993";

clojure.core.reducers.t6993.cljs$lang$ctorPrWriter = (function (this__4530__auto__,writer__4531__auto__,opt__4532__auto__){
return cljs.core._write.call(null,writer__4531__auto__,"clojure.core.reducers/t6993");
});

clojure.core.reducers.__GT_t6993 = (function clojure$core$reducers$reducer_$___GT_t6993(xf__$1,coll__$1,reducer__$1,meta6994){
return (new clojure.core.reducers.t6993(xf__$1,coll__$1,reducer__$1,meta6994));
});

}

return (new clojure.core.reducers.t6993(xf,coll,clojure$core$reducers$reducer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Given a foldable collection, and a transformation function xf,
 * returns a foldable collection, where any supplied reducing
 * fn will be transformed by xf. xf is a function of reducing fn to
 * reducing fn.
 */
clojure.core.reducers.folder = (function clojure$core$reducers$folder(coll,xf){
if(typeof clojure.core.reducers.t6999 !== 'undefined'){
} else {

/**
* @constructor
*/
clojure.core.reducers.t6999 = (function (xf,coll,folder,meta7000){
this.xf = xf;
this.coll = coll;
this.folder = folder;
this.meta7000 = meta7000;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 917504;
})
clojure.core.reducers.t6999.prototype.clojure$core$reducers$CollFold$ = true;

clojure.core.reducers.t6999.prototype.clojure$core$reducers$CollFold$coll_fold$arity$4 = (function (_,n,combinef,reducef){
var self__ = this;
var ___$1 = this;
return clojure.core.reducers.coll_fold.call(null,self__.coll,n,combinef,self__.xf.call(null,reducef));
});

clojure.core.reducers.t6999.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (_,f1){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.call(null,self__.coll,self__.xf.call(null,f1),f1.call(null));
});

clojure.core.reducers.t6999.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f1,init){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.call(null,self__.coll,self__.xf.call(null,f1),init);
});

clojure.core.reducers.t6999.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7001){
var self__ = this;
var _7001__$1 = this;
return self__.meta7000;
});

clojure.core.reducers.t6999.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7001,meta7000__$1){
var self__ = this;
var _7001__$1 = this;
return (new clojure.core.reducers.t6999(self__.xf,self__.coll,self__.folder,meta7000__$1));
});

clojure.core.reducers.t6999.cljs$lang$type = true;

clojure.core.reducers.t6999.cljs$lang$ctorStr = "clojure.core.reducers/t6999";

clojure.core.reducers.t6999.cljs$lang$ctorPrWriter = (function (this__4530__auto__,writer__4531__auto__,opt__4532__auto__){
return cljs.core._write.call(null,writer__4531__auto__,"clojure.core.reducers/t6999");
});

clojure.core.reducers.__GT_t6999 = (function clojure$core$reducers$folder_$___GT_t6999(xf__$1,coll__$1,folder__$1,meta7000){
return (new clojure.core.reducers.t6999(xf__$1,coll__$1,folder__$1,meta7000));
});

}

return (new clojure.core.reducers.t6999(xf,coll,clojure$core$reducers$folder,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Applies f to every value in the reduction of coll. Foldable.
 */
clojure.core.reducers.map = (function clojure$core$reducers$map(){
var G__7003 = arguments.length;
switch (G__7003) {
case 1:
return clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (x__4373__auto__){
return clojure.core.reducers.map.call(null,f,x__4373__auto__);
});
});

clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return clojure.core.reducers.folder.call(null,coll,(function (f1){
return (function() {
var G__7005 = null;
var G__7005__0 = (function (){
return f1.call(null);
});
var G__7005__2 = (function (ret,v){
return f1.call(null,ret,f.call(null,v));
});
var G__7005__3 = (function (ret,k,v){
return f1.call(null,ret,f.call(null,k,v));
});
G__7005 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__7005__0.call(this);
case 2:
return G__7005__2.call(this,ret,k);
case 3:
return G__7005__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__7005.cljs$core$IFn$_invoke$arity$0 = G__7005__0;
G__7005.cljs$core$IFn$_invoke$arity$2 = G__7005__2;
G__7005.cljs$core$IFn$_invoke$arity$3 = G__7005__3;
return G__7005;
})()
}));
});

clojure.core.reducers.map.cljs$lang$maxFixedArity = 2;
/**
 * Applies f to every value in the reduction of coll, concatenating the result
 * colls of (f val). Foldable.
 */
clojure.core.reducers.mapcat = (function clojure$core$reducers$mapcat(){
var G__7007 = arguments.length;
switch (G__7007) {
case 1:
return clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (x__4373__auto__){
return clojure.core.reducers.mapcat.call(null,f,x__4373__auto__);
});
});

clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return clojure.core.reducers.folder.call(null,coll,(function (f1){
return (function() {
var G__7009 = null;
var G__7009__0 = (function (){
return f1.call(null);
});
var G__7009__2 = (function (ret,v){
return clojure.core.reducers.reduce.call(null,f1,ret,f.call(null,v));
});
var G__7009__3 = (function (ret,k,v){
return clojure.core.reducers.reduce.call(null,f1,ret,f.call(null,k,v));
});
G__7009 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__7009__0.call(this);
case 2:
return G__7009__2.call(this,ret,k);
case 3:
return G__7009__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__7009.cljs$core$IFn$_invoke$arity$0 = G__7009__0;
G__7009.cljs$core$IFn$_invoke$arity$2 = G__7009__2;
G__7009.cljs$core$IFn$_invoke$arity$3 = G__7009__3;
return G__7009;
})()
}));
});

clojure.core.reducers.mapcat.cljs$lang$maxFixedArity = 2;
/**
 * Retains values in the reduction of coll for which (pred val)
 * returns logical true. Foldable.
 */
clojure.core.reducers.filter = (function clojure$core$reducers$filter(){
var G__7011 = arguments.length;
switch (G__7011) {
case 1:
return clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (x__4373__auto__){
return clojure.core.reducers.filter.call(null,pred,x__4373__auto__);
});
});

clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return clojure.core.reducers.folder.call(null,coll,(function (f1){
return (function() {
var G__7013 = null;
var G__7013__0 = (function (){
return f1.call(null);
});
var G__7013__2 = (function (ret,v){
if(cljs.core.truth_(pred.call(null,v))){
return f1.call(null,ret,v);
} else {
return ret;
}
});
var G__7013__3 = (function (ret,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return f1.call(null,ret,k,v);
} else {
return ret;
}
});
G__7013 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__7013__0.call(this);
case 2:
return G__7013__2.call(this,ret,k);
case 3:
return G__7013__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__7013.cljs$core$IFn$_invoke$arity$0 = G__7013__0;
G__7013.cljs$core$IFn$_invoke$arity$2 = G__7013__2;
G__7013.cljs$core$IFn$_invoke$arity$3 = G__7013__3;
return G__7013;
})()
}));
});

clojure.core.reducers.filter.cljs$lang$maxFixedArity = 2;
/**
 * Takes any nested combination of sequential things (lists, vectors,
 * etc.) and returns their contents as a single, flat foldable
 * collection.
 */
clojure.core.reducers.flatten = (function clojure$core$reducers$flatten(){
var G__7015 = arguments.length;
switch (G__7015) {
case 0:
return clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$0 = (function (){
return (function (x__4373__auto__){
return clojure.core.reducers.flatten.call(null,x__4373__auto__);
});
});

clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return clojure.core.reducers.folder.call(null,coll,(function (f1){
return (function() {
var G__7017 = null;
var G__7017__0 = (function (){
return f1.call(null);
});
var G__7017__2 = (function (ret,v){
if(cljs.core.sequential_QMARK_.call(null,v)){
return cljs.core._reduce.call(null,clojure.core.reducers.flatten.call(null,v),f1,ret);
} else {
return f1.call(null,ret,v);
}
});
G__7017 = function(ret,v){
switch(arguments.length){
case 0:
return G__7017__0.call(this);
case 2:
return G__7017__2.call(this,ret,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__7017.cljs$core$IFn$_invoke$arity$0 = G__7017__0;
G__7017.cljs$core$IFn$_invoke$arity$2 = G__7017__2;
return G__7017;
})()
}));
});

clojure.core.reducers.flatten.cljs$lang$maxFixedArity = 1;
/**
 * Removes values in the reduction of coll for which (pred val)
 * returns logical true. Foldable.
 */
clojure.core.reducers.remove = (function clojure$core$reducers$remove(){
var G__7019 = arguments.length;
switch (G__7019) {
case 1:
return clojure.core.reducers.remove.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.remove.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

clojure.core.reducers.remove.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (x__4373__auto__){
return clojure.core.reducers.remove.call(null,pred,x__4373__auto__);
});
});

clojure.core.reducers.remove.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return clojure.core.reducers.filter.call(null,cljs.core.complement.call(null,pred),coll);
});

clojure.core.reducers.remove.cljs$lang$maxFixedArity = 2;
/**
 * Ends the reduction of coll when (pred val) returns logical false.
 */
clojure.core.reducers.take_while = (function clojure$core$reducers$take_while(){
var G__7022 = arguments.length;
switch (G__7022) {
case 1:
return clojure.core.reducers.take_while.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.take_while.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

clojure.core.reducers.take_while.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (x__4373__auto__){
return clojure.core.reducers.take_while.call(null,pred,x__4373__auto__);
});
});

clojure.core.reducers.take_while.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return clojure.core.reducers.reducer.call(null,coll,(function (f1){
return (function() {
var G__7024 = null;
var G__7024__0 = (function (){
return f1.call(null);
});
var G__7024__2 = (function (ret,v){
if(cljs.core.truth_(pred.call(null,v))){
return f1.call(null,ret,v);
} else {
return cljs.core.reduced.call(null,ret);
}
});
var G__7024__3 = (function (ret,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return f1.call(null,ret,k,v);
} else {
return cljs.core.reduced.call(null,ret);
}
});
G__7024 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__7024__0.call(this);
case 2:
return G__7024__2.call(this,ret,k);
case 3:
return G__7024__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__7024.cljs$core$IFn$_invoke$arity$0 = G__7024__0;
G__7024.cljs$core$IFn$_invoke$arity$2 = G__7024__2;
G__7024.cljs$core$IFn$_invoke$arity$3 = G__7024__3;
return G__7024;
})()
}));
});

clojure.core.reducers.take_while.cljs$lang$maxFixedArity = 2;
/**
 * Ends the reduction of coll after consuming n values.
 */
clojure.core.reducers.take = (function clojure$core$reducers$take(){
var G__7026 = arguments.length;
switch (G__7026) {
case 1:
return clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$1 = (function (n){
return (function (x__4373__auto__){
return clojure.core.reducers.take.call(null,n,x__4373__auto__);
});
});

clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return clojure.core.reducers.reducer.call(null,coll,(function (f1){
var cnt = cljs.core.atom.call(null,n);
return ((function (cnt){
return (function() {
var G__7028 = null;
var G__7028__0 = (function (){
return f1.call(null);
});
var G__7028__2 = (function (ret,v){
cljs.core.swap_BANG_.call(null,cnt,cljs.core.dec);

if((cljs.core.deref.call(null,cnt) < (0))){
return cljs.core.reduced.call(null,ret);
} else {
return f1.call(null,ret,v);
}
});
var G__7028__3 = (function (ret,k,v){
cljs.core.swap_BANG_.call(null,cnt,cljs.core.dec);

if((cljs.core.deref.call(null,cnt) < (0))){
return cljs.core.reduced.call(null,ret);
} else {
return f1.call(null,ret,k,v);
}
});
G__7028 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__7028__0.call(this);
case 2:
return G__7028__2.call(this,ret,k);
case 3:
return G__7028__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__7028.cljs$core$IFn$_invoke$arity$0 = G__7028__0;
G__7028.cljs$core$IFn$_invoke$arity$2 = G__7028__2;
G__7028.cljs$core$IFn$_invoke$arity$3 = G__7028__3;
return G__7028;
})()
;})(cnt))
}));
});

clojure.core.reducers.take.cljs$lang$maxFixedArity = 2;
/**
 * Elides the first n values from the reduction of coll.
 */
clojure.core.reducers.drop = (function clojure$core$reducers$drop(){
var G__7030 = arguments.length;
switch (G__7030) {
case 1:
return clojure.core.reducers.drop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.drop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

clojure.core.reducers.drop.cljs$core$IFn$_invoke$arity$1 = (function (n){
return (function (x__4373__auto__){
return clojure.core.reducers.drop.call(null,n,x__4373__auto__);
});
});

clojure.core.reducers.drop.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return clojure.core.reducers.reducer.call(null,coll,(function (f1){
var cnt = cljs.core.atom.call(null,n);
return ((function (cnt){
return (function() {
var G__7032 = null;
var G__7032__0 = (function (){
return f1.call(null);
});
var G__7032__2 = (function (ret,v){
cljs.core.swap_BANG_.call(null,cnt,cljs.core.dec);

if((cljs.core.deref.call(null,cnt) < (0))){
return f1.call(null,ret,v);
} else {
return ret;
}
});
var G__7032__3 = (function (ret,k,v){
cljs.core.swap_BANG_.call(null,cnt,cljs.core.dec);

if((cljs.core.deref.call(null,cnt) < (0))){
return f1.call(null,ret,k,v);
} else {
return ret;
}
});
G__7032 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__7032__0.call(this);
case 2:
return G__7032__2.call(this,ret,k);
case 3:
return G__7032__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__7032.cljs$core$IFn$_invoke$arity$0 = G__7032__0;
G__7032.cljs$core$IFn$_invoke$arity$2 = G__7032__2;
G__7032.cljs$core$IFn$_invoke$arity$3 = G__7032__3;
return G__7032;
})()
;})(cnt))
}));
});

clojure.core.reducers.drop.cljs$lang$maxFixedArity = 2;

/**
* @constructor
*/
clojure.core.reducers.Cat = (function (cnt,left,right){
this.cnt = cnt;
this.left = left;
this.right = right;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 8912898;
})
clojure.core.reducers.Cat.prototype.clojure$core$reducers$CollFold$ = true;

clojure.core.reducers.Cat.prototype.clojure$core$reducers$CollFold$coll_fold$arity$4 = (function (this$,n,combinef,reducef){
var self__ = this;
var this$__$1 = this;
return cljs.core._reduce.call(null,this$__$1,reducef);
});

clojure.core.reducers.Cat.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f1){
var self__ = this;
var this$__$1 = this;
return cljs.core._reduce.call(null,this$__$1,f1,f1.call(null));
});

clojure.core.reducers.Cat.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f1,init){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.call(null,self__.right,f1,cljs.core._reduce.call(null,self__.left,f1,init));
});

clojure.core.reducers.Cat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.concat.call(null,cljs.core.seq.call(null,self__.left),cljs.core.seq.call(null,self__.right));
});

clojure.core.reducers.Cat.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cnt;
});

clojure.core.reducers.Cat.cljs$lang$type = true;

clojure.core.reducers.Cat.cljs$lang$ctorStr = "clojure.core.reducers/Cat";

clojure.core.reducers.Cat.cljs$lang$ctorPrWriter = (function (this__4530__auto__,writer__4531__auto__,opt__4532__auto__){
return cljs.core._write.call(null,writer__4531__auto__,"clojure.core.reducers/Cat");
});

clojure.core.reducers.__GT_Cat = (function clojure$core$reducers$__GT_Cat(cnt,left,right){
return (new clojure.core.reducers.Cat(cnt,left,right));
});

/**
 * A high-performance combining fn that yields the catenation of the
 * reduced values. The result is reducible, foldable, seqable and
 * counted, providing the identity collections are reducible, seqable
 * and counted. The single argument version will build a combining fn
 * with the supplied identity constructor. Tests for identity
 * with (zero? (count x)). See also foldcat.
 */
clojure.core.reducers.cat = (function clojure$core$reducers$cat(){
var G__7034 = arguments.length;
switch (G__7034) {
case 0:
return clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$0 = (function (){
return [];
});

clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$1 = (function (ctor){
return (function() {
var G__7036 = null;
var G__7036__0 = (function (){
return ctor.call(null);
});
var G__7036__2 = (function (left,right){
return clojure.core.reducers.cat.call(null,left,right);
});
G__7036 = function(left,right){
switch(arguments.length){
case 0:
return G__7036__0.call(this);
case 2:
return G__7036__2.call(this,left,right);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__7036.cljs$core$IFn$_invoke$arity$0 = G__7036__0;
G__7036.cljs$core$IFn$_invoke$arity$2 = G__7036__2;
return G__7036;
})()
});

clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$2 = (function (left,right){
if((cljs.core.count.call(null,left) === (0))){
return right;
} else {
if((cljs.core.count.call(null,right) === (0))){
return left;
} else {
return (new clojure.core.reducers.Cat((cljs.core.count.call(null,left) + cljs.core.count.call(null,right)),left,right));

}
}
});

clojure.core.reducers.cat.cljs$lang$maxFixedArity = 2;
/**
 * .adds x to acc and returns acc
 */
clojure.core.reducers.append_BANG_ = (function clojure$core$reducers$append_BANG_(acc,x){
var G__7038 = acc;
G__7038.push(x);

return G__7038;
});
/**
 * Equivalent to (fold cat append! coll)
 */
clojure.core.reducers.foldcat = (function clojure$core$reducers$foldcat(coll){
return clojure.core.reducers.fold.call(null,clojure.core.reducers.cat,clojure.core.reducers.append_BANG_,coll);
});
/**
 * Builds a combining fn out of the supplied operator and identity
 * constructor. op must be associative and ctor called with no args
 * must return an identity value for it.
 */
clojure.core.reducers.monoid = (function clojure$core$reducers$monoid(op,ctor){
return (function() {
var clojure$core$reducers$monoid_$_m = null;
var clojure$core$reducers$monoid_$_m__0 = (function (){
return ctor.call(null);
});
var clojure$core$reducers$monoid_$_m__2 = (function (a,b){
return op.call(null,a,b);
});
clojure$core$reducers$monoid_$_m = function(a,b){
switch(arguments.length){
case 0:
return clojure$core$reducers$monoid_$_m__0.call(this);
case 2:
return clojure$core$reducers$monoid_$_m__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$core$reducers$monoid_$_m.cljs$core$IFn$_invoke$arity$0 = clojure$core$reducers$monoid_$_m__0;
clojure$core$reducers$monoid_$_m.cljs$core$IFn$_invoke$arity$2 = clojure$core$reducers$monoid_$_m__2;
return clojure$core$reducers$monoid_$_m;
})()
});
clojure.core.reducers.foldvec = (function clojure$core$reducers$foldvec(v,n,combinef,reducef){
if(cljs.core.empty_QMARK_.call(null,v)){
return combinef.call(null);
} else {
if((cljs.core.count.call(null,v) <= n)){
return clojure.core.reducers.reduce.call(null,reducef,combinef.call(null),v);
} else {
var split = cljs.core.quot.call(null,cljs.core.count.call(null,v),(2));
var v1 = cljs.core.subvec.call(null,v,(0),split);
var v2 = cljs.core.subvec.call(null,v,split,cljs.core.count.call(null,v));
var fc = ((function (split,v1,v2){
return (function (child){
return ((function (split,v1,v2){
return (function (){
return clojure$core$reducers$foldvec.call(null,child,n,combinef,reducef);
});
;})(split,v1,v2))
});})(split,v1,v2))
;
return clojure.core.reducers.fjinvoke.call(null,((function (split,v1,v2,fc){
return (function (){
var f1 = fc.call(null,v1);
var t2 = clojure.core.reducers.fjtask.call(null,fc.call(null,v2));
clojure.core.reducers.fjfork.call(null,t2);

return combinef.call(null,f1.call(null),clojure.core.reducers.fjjoin.call(null,t2));
});})(split,v1,v2,fc))
);

}
}
});
cljs.core.PersistentVector.prototype.clojure$core$reducers$CollFold$ = true;

cljs.core.PersistentVector.prototype.clojure$core$reducers$CollFold$coll_fold$arity$4 = (function (v,n,combinef,reducef){
var v__$1 = this;
return clojure.core.reducers.foldvec.call(null,v__$1,n,combinef,reducef);
});

(clojure.core.reducers.CollFold["object"] = true);

(clojure.core.reducers.coll_fold["object"] = (function (coll,n,combinef,reducef){
return clojure.core.reducers.reduce.call(null,reducef,combinef.call(null),coll);
}));

(clojure.core.reducers.CollFold["null"] = true);

(clojure.core.reducers.coll_fold["null"] = (function (coll,n,combinef,reducef){
return combinef.call(null);
}));

//# sourceMappingURL=reducers.js.map