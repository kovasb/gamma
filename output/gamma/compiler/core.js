// Compiled by ClojureScript 0.0-2913 {:target :nodejs}
goog.provide('gamma.compiler.core');
goog.require('cljs.core');
goog.require('fipp.printer');
goog.require('gamma.compiler.flatten_ast');
goog.require('gamma.ast');
goog.require('gamma.compiler.common');
gamma.compiler.core.push_ops = (function push_ops(db,ops,location,stack){
return cljs.core.reduce.call(null,(function (s,o){
if(cljs.core.vector_QMARK_.call(null,o)){
return cljs.core.conj.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gamma.compiler.common.location_conj.call(null,db,location,cljs.core.first.call(null,o)),cljs.core.second.call(null,o)], null));
} else {
return cljs.core.conj.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [location,o], null));
}
}),stack,cljs.core.reverse.call(null,ops));
});
gamma.compiler.core.transform_1 = (function transform_1(db,stack){
var db__$1 = db;
var stack__$1 = stack;
var c = (0);
while(true){
if((c > (100))){
return db__$1;
} else {
var temp__4124__auto__ = cljs.core.peek.call(null,stack__$1);
if(cljs.core.truth_(temp__4124__auto__)){
var f = temp__4124__auto__;
var vec__13608 = f.call(null,(1)).call(null,db__$1,f.call(null,(0)));
var db__$2 = cljs.core.nth.call(null,vec__13608,(0),null);
var ops = cljs.core.nth.call(null,vec__13608,(1),null);
var G__13609 = db__$2;
var G__13610 = gamma.compiler.core.push_ops.call(null,db__$2,ops,f.call(null,(0)),cljs.core.pop.call(null,stack__$1));
var G__13611 = (c + (1));
db__$1 = G__13609;
stack__$1 = G__13610;
c = G__13611;
continue;
} else {
return db__$1;
}
}
break;
}
});
gamma.compiler.core.transform = (function transform(db,f){
return gamma.compiler.core.transform_1.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY], null),f], null)], null));
});
gamma.compiler.core.walk = (function walk(db,pre){
return gamma.compiler.core.transform.call(null,db,(function walk_fn(db__$1,path){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre.call(null,db__$1,path),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),gamma.compiler.common.map_path.call(null,walk_fn)], null)], null)], null);
}));
});
