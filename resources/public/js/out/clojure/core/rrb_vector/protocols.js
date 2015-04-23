// Compiled by ClojureScript 0.0-3208 {}
goog.provide('clojure.core.rrb_vector.protocols');
goog.require('cljs.core');

clojure.core.rrb_vector.protocols.PSpliceableVector = (function (){var obj7340 = {};
return obj7340;
})();

clojure.core.rrb_vector.protocols._splicev = (function clojure$core$rrb_vector$protocols$_splicev(v1,v2){
if((function (){var and__3939__auto__ = v1;
if(and__3939__auto__){
return v1.clojure$core$rrb_vector$protocols$PSpliceableVector$_splicev$arity$2;
} else {
return and__3939__auto__;
}
})()){
return v1.clojure$core$rrb_vector$protocols$PSpliceableVector$_splicev$arity$2(v1,v2);
} else {
var x__4587__auto__ = (((v1 == null))?null:v1);
return (function (){var or__3951__auto__ = (clojure.core.rrb_vector.protocols._splicev[goog.typeOf(x__4587__auto__)]);
if(or__3951__auto__){
return or__3951__auto__;
} else {
var or__3951__auto____$1 = (clojure.core.rrb_vector.protocols._splicev["_"]);
if(or__3951__auto____$1){
return or__3951__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"PSpliceableVector.-splicev",v1);
}
}
})().call(null,v1,v2);
}
});


clojure.core.rrb_vector.protocols.PSliceableVector = (function (){var obj7342 = {};
return obj7342;
})();

clojure.core.rrb_vector.protocols._slicev = (function clojure$core$rrb_vector$protocols$_slicev(v,start,end){
if((function (){var and__3939__auto__ = v;
if(and__3939__auto__){
return v.clojure$core$rrb_vector$protocols$PSliceableVector$_slicev$arity$3;
} else {
return and__3939__auto__;
}
})()){
return v.clojure$core$rrb_vector$protocols$PSliceableVector$_slicev$arity$3(v,start,end);
} else {
var x__4587__auto__ = (((v == null))?null:v);
return (function (){var or__3951__auto__ = (clojure.core.rrb_vector.protocols._slicev[goog.typeOf(x__4587__auto__)]);
if(or__3951__auto__){
return or__3951__auto__;
} else {
var or__3951__auto____$1 = (clojure.core.rrb_vector.protocols._slicev["_"]);
if(or__3951__auto____$1){
return or__3951__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"PSliceableVector.-slicev",v);
}
}
})().call(null,v,start,end);
}
});


//# sourceMappingURL=protocols.js.map