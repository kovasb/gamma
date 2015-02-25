// Compiled by ClojureScript 0.0-2913 {:target :nodejs}
goog.provide('gamma.compiler.common');
goog.require('cljs.core');
goog.require('gamma.ast');
gamma.compiler.common.get_element = (function get_element(db,location){
return cljs.core.get_in.call(null,db.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(location)),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(location));
});
gamma.compiler.common.map_path = (function map_path(f){
return (function (db,path){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,(function (){var elt = gamma.compiler.common.get_element.call(null,db,path);
if(cljs.core.vector_QMARK_.call(null,elt)){
return cljs.core.mapv.call(null,((function (elt){
return (function (p1__13195_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__13195_SHARP_,f],null));
});})(elt))
,cljs.core.range.call(null,(0),cljs.core.count.call(null,elt)));
} else {
if(cljs.core.map_QMARK_.call(null,elt)){
return cljs.core.mapv.call(null,((function (elt){
return (function (p1__13196_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__13196_SHARP_,f],null));
});})(elt))
,cljs.core.keys.call(null,elt));
} else {
return null;
}
}
})()], null);
});
});
gamma.compiler.common.assoc_in_location = (function assoc_in_location(db,location,val){
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(location);
return cljs.core.assoc.call(null,db,id,cljs.core.assoc_in.call(null,db.call(null,id),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(location),val));
});
gamma.compiler.common.assoc_in_parent = (function assoc_in_parent(db,location,value){
var p = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(location);
var pid = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p);
return cljs.core.assoc.call(null,db,pid,cljs.core.assoc_in.call(null,db.call(null,pid),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p),value));
});
gamma.compiler.common.location_conj = (function location_conj(db,location,key){
var base_location = cljs.core.update_in.call(null,location,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168)], null),cljs.core.conj,key);
var elt = gamma.compiler.common.get_element.call(null,db,base_location);
if(gamma.ast.id_QMARK_.call(null,elt)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),elt,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"parent","parent",-878878779),base_location], null);
} else {
return base_location;
}
});
gamma.compiler.common.merge_elements = (function() {
var merge_elements = null;
var merge_elements__2 = (function (db,elements){
return cljs.core.reduce.call(null,(function (p1__13197_SHARP_,p2__13198_SHARP_){
return cljs.core.update_in.call(null,p1__13197_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__13198_SHARP_)], null),cljs.core.fnil.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY),p2__13198_SHARP_);
}),db,elements);
});
var merge_elements__3 = (function (db,location,elements){
return gamma.compiler.common.assoc_in_location.call(null,merge_elements.call(null,db,elements),location,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),elements));
});
merge_elements = function(db,location,elements){
switch(arguments.length){
case 2:
return merge_elements__2.call(this,db,location);
case 3:
return merge_elements__3.call(this,db,location,elements);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge_elements.cljs$core$IFn$_invoke$arity$2 = merge_elements__2;
merge_elements.cljs$core$IFn$_invoke$arity$3 = merge_elements__3;
return merge_elements;
})()
;
gamma.compiler.common.assoc_elements = (function() {
var assoc_elements = null;
var assoc_elements__2 = (function (db,elements){
return cljs.core.reduce.call(null,(function (p1__13199_SHARP_,p2__13200_SHARP_){
return cljs.core.assoc.call(null,p1__13199_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__13200_SHARP_),p2__13200_SHARP_);
}),db,elements);
});
var assoc_elements__3 = (function (db,location,elements){
return gamma.compiler.common.assoc_in_location.call(null,assoc_elements.call(null,db,elements),location,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),elements));
});
assoc_elements = function(db,location,elements){
switch(arguments.length){
case 2:
return assoc_elements__2.call(this,db,location);
case 3:
return assoc_elements__3.call(this,db,location,elements);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
assoc_elements.cljs$core$IFn$_invoke$arity$2 = assoc_elements__2;
assoc_elements.cljs$core$IFn$_invoke$arity$3 = assoc_elements__3;
return assoc_elements;
})()
;
