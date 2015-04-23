// Compiled by ClojureScript 0.0-3208 {}
goog.provide('gamma.compiler.common');
goog.require('cljs.core');
goog.require('gamma.ast');
gamma.compiler.common.get_element = (function gamma$compiler$common$get_element(db,location){
return cljs.core.get_in.call(null,db.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(location)),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(location));
});
gamma.compiler.common.map_path = (function gamma$compiler$common$map_path(f){
return (function (db,path){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,(function (){var elt = gamma.compiler.common.get_element.call(null,db,path);
if(cljs.core.vector_QMARK_.call(null,elt)){
return cljs.core.mapv.call(null,((function (elt){
return (function (p1__5178_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__5178_SHARP_,f],null));
});})(elt))
,cljs.core.range.call(null,(0),cljs.core.count.call(null,elt)));
} else {
if(cljs.core.map_QMARK_.call(null,elt)){
return cljs.core.mapv.call(null,((function (elt){
return (function (p1__5179_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__5179_SHARP_,f],null));
});})(elt))
,cljs.core.keys.call(null,elt));
} else {
return null;
}
}
})()], null);
});
});
gamma.compiler.common.assoc_in_location = (function gamma$compiler$common$assoc_in_location(db,location,val){
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(location);
return cljs.core.assoc.call(null,db,id,cljs.core.assoc_in.call(null,db.call(null,id),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(location),val));
});
gamma.compiler.common.assoc_in_parent = (function gamma$compiler$common$assoc_in_parent(db,location,value){
var p = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(location);
var pid = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p);
return cljs.core.assoc.call(null,db,pid,cljs.core.assoc_in.call(null,db.call(null,pid),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p),value));
});
gamma.compiler.common.location_conj = (function gamma$compiler$common$location_conj(db,location,key){
var base_location = cljs.core.update_in.call(null,location,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168)], null),cljs.core.conj,key);
var elt = gamma.compiler.common.get_element.call(null,db,base_location);
if(cljs.core.truth_(gamma.ast.id_QMARK_.call(null,elt))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),elt,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"parent","parent",-878878779),base_location], null);
} else {
return base_location;
}
});
gamma.compiler.common.merge_elements = (function gamma$compiler$common$merge_elements(){
var G__5183 = arguments.length;
switch (G__5183) {
case 2:
return gamma.compiler.common.merge_elements.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return gamma.compiler.common.merge_elements.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

gamma.compiler.common.merge_elements.cljs$core$IFn$_invoke$arity$2 = (function (db,elements){
return cljs.core.reduce.call(null,(function (p1__5180_SHARP_,p2__5181_SHARP_){
return cljs.core.update_in.call(null,p1__5180_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__5181_SHARP_)], null),cljs.core.fnil.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY),p2__5181_SHARP_);
}),db,elements);
});

gamma.compiler.common.merge_elements.cljs$core$IFn$_invoke$arity$3 = (function (db,location,elements){
return gamma.compiler.common.assoc_in_location.call(null,gamma.compiler.common.merge_elements.call(null,db,elements),location,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),elements));
});

gamma.compiler.common.merge_elements.cljs$lang$maxFixedArity = 3;
gamma.compiler.common.assoc_elements = (function gamma$compiler$common$assoc_elements(){
var G__5188 = arguments.length;
switch (G__5188) {
case 2:
return gamma.compiler.common.assoc_elements.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return gamma.compiler.common.assoc_elements.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

gamma.compiler.common.assoc_elements.cljs$core$IFn$_invoke$arity$2 = (function (db,elements){
return cljs.core.reduce.call(null,(function (p1__5185_SHARP_,p2__5186_SHARP_){
return cljs.core.assoc.call(null,p1__5185_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__5186_SHARP_),p2__5186_SHARP_);
}),db,elements);
});

gamma.compiler.common.assoc_elements.cljs$core$IFn$_invoke$arity$3 = (function (db,location,elements){
return gamma.compiler.common.assoc_in_location.call(null,gamma.compiler.common.assoc_elements.call(null,db,elements),location,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),elements));
});

gamma.compiler.common.assoc_elements.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=common.js.map