// Compiled by ClojureScript 0.0-2913 {:target :nodejs}
goog.provide('clojure.core.rrb_vector.protocols');
goog.require('cljs.core');

clojure.core.rrb_vector.protocols.PSpliceableVector = (function (){var obj13600 = {};
return obj13600;
})();

clojure.core.rrb_vector.protocols._splicev = (function _splicev(v1,v2){
if((function (){var and__5210__auto__ = v1;
if(and__5210__auto__){
return v1.clojure$core$rrb_vector$protocols$PSpliceableVector$_splicev$arity$2;
} else {
return and__5210__auto__;
}
})()){
return v1.clojure$core$rrb_vector$protocols$PSpliceableVector$_splicev$arity$2(v1,v2);
} else {
var x__5866__auto__ = (((v1 == null))?null:v1);
return (function (){var or__5222__auto__ = (clojure.core.rrb_vector.protocols._splicev[goog.typeOf(x__5866__auto__)]);
if(or__5222__auto__){
return or__5222__auto__;
} else {
var or__5222__auto____$1 = (clojure.core.rrb_vector.protocols._splicev["_"]);
if(or__5222__auto____$1){
return or__5222__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"PSpliceableVector.-splicev",v1);
}
}
})().call(null,v1,v2);
}
});


clojure.core.rrb_vector.protocols.PSliceableVector = (function (){var obj13602 = {};
return obj13602;
})();

clojure.core.rrb_vector.protocols._slicev = (function _slicev(v,start,end){
if((function (){var and__5210__auto__ = v;
if(and__5210__auto__){
return v.clojure$core$rrb_vector$protocols$PSliceableVector$_slicev$arity$3;
} else {
return and__5210__auto__;
}
})()){
return v.clojure$core$rrb_vector$protocols$PSliceableVector$_slicev$arity$3(v,start,end);
} else {
var x__5866__auto__ = (((v == null))?null:v);
return (function (){var or__5222__auto__ = (clojure.core.rrb_vector.protocols._slicev[goog.typeOf(x__5866__auto__)]);
if(or__5222__auto__){
return or__5222__auto__;
} else {
var or__5222__auto____$1 = (clojure.core.rrb_vector.protocols._slicev["_"]);
if(or__5222__auto____$1){
return or__5222__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"PSliceableVector.-slicev",v);
}
}
})().call(null,v,start,end);
}
});

