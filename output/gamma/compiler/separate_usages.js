// Compiled by ClojureScript 0.0-2913 {:target :nodejs}
goog.provide('gamma.compiler.separate_usages');
goog.require('cljs.core');
goog.require('gamma.compiler.common');
goog.require('gamma.ast');
goog.require('clojure.set');
/**
* Returns set s with x removed.
*/
gamma.compiler.separate_usages.without = (function without(s,x){
return clojure.set.difference.call(null,s,cljs.core.PersistentHashSet.fromArray([x], true));
});
/**
* Returns the pair [element, s'] where s' is set s with element removed.
*/
gamma.compiler.separate_usages.take_1 = (function take_1(s){
if(!(cljs.core.empty_QMARK_.call(null,s))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),new cljs.core.Symbol(null,"s","s",-948495851,null)))))].join('')));
}

var item = cljs.core.first.call(null,s);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,gamma.compiler.separate_usages.without.call(null,s,item)], null);
});
/**
* Returns the set of nodes in graph g for which there are no incoming
* edges, where g is a map of nodes to sets of nodes.
*/
gamma.compiler.separate_usages.no_incoming = (function no_incoming(g){
var nodes = cljs.core.set.call(null,cljs.core.keys.call(null,g));
var have_incoming = cljs.core.apply.call(null,clojure.set.union,cljs.core.vals.call(null,g));
return clojure.set.difference.call(null,nodes,have_incoming);
});
/**
* Returns g with empty outgoing edges added for nodes with incoming
* edges only.  Example: {:a #{:b}} => {:a #{:b}, :b #{}}
*/
gamma.compiler.separate_usages.normalize = (function normalize(g){
var have_incoming = cljs.core.apply.call(null,clojure.set.union,cljs.core.vals.call(null,g));
return cljs.core.reduce.call(null,((function (have_incoming){
return (function (p1__13614_SHARP_,p2__13615_SHARP_){
if(cljs.core.truth_(cljs.core.get.call(null,p1__13614_SHARP_,p2__13615_SHARP_))){
return p1__13614_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__13614_SHARP_,p2__13615_SHARP_,cljs.core.PersistentHashSet.EMPTY);
}
});})(have_incoming))
,g,have_incoming);
});
/**
* Proposes a topological sort for directed graph g using Kahn's
* algorithm, where g is a map of nodes to sets of nodes. If g is
* cyclic, returns nil.
*/
gamma.compiler.separate_usages.kahn_sort = (function() {
var kahn_sort = null;
var kahn_sort__1 = (function (g){
return kahn_sort.call(null,gamma.compiler.separate_usages.normalize.call(null,g),cljs.core.PersistentVector.EMPTY,gamma.compiler.separate_usages.no_incoming.call(null,g));
});
var kahn_sort__3 = (function (g,l,s){
while(true){
if(cljs.core.empty_QMARK_.call(null,s)){
if(cljs.core.every_QMARK_.call(null,cljs.core.empty_QMARK_,cljs.core.vals.call(null,g))){
return l;
} else {
return null;
}
} else {
var vec__13619 = gamma.compiler.separate_usages.take_1.call(null,s);
var n = cljs.core.nth.call(null,vec__13619,(0),null);
var s_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__13619,(1),null);
var m = g.call(null,n);
var g_SINGLEQUOTE_ = cljs.core.reduce.call(null,((function (g,l,s,vec__13619,n,s_SINGLEQUOTE_,m){
return (function (p1__13616_SHARP_,p2__13617_SHARP_){
return cljs.core.update_in.call(null,p1__13616_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null),gamma.compiler.separate_usages.without,p2__13617_SHARP_);
});})(g,l,s,vec__13619,n,s_SINGLEQUOTE_,m))
,g,m);
var G__13620 = g_SINGLEQUOTE_;
var G__13621 = cljs.core.conj.call(null,l,n);
var G__13622 = clojure.set.union.call(null,s_SINGLEQUOTE_,clojure.set.intersection.call(null,gamma.compiler.separate_usages.no_incoming.call(null,g_SINGLEQUOTE_),m));
g = G__13620;
l = G__13621;
s = G__13622;
continue;
}
break;
}
});
kahn_sort = function(g,l,s){
switch(arguments.length){
case 1:
return kahn_sort__1.call(this,g);
case 3:
return kahn_sort__3.call(this,g,l,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kahn_sort.cljs$core$IFn$_invoke$arity$1 = kahn_sort__1;
kahn_sort.cljs$core$IFn$_invoke$arity$3 = kahn_sort__3;
return kahn_sort;
})()
;
gamma.compiler.separate_usages.get_shared = (function get_shared(x){
return cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,(function (p1__13623_SHARP_){
var u = new cljs.core.Keyword(null,"unconditional","unconditional",1829191128).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,p1__13623_SHARP_));
var c = new cljs.core.Keyword(null,"conditional","conditional",1441892799).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,p1__13623_SHARP_));
if(cljs.core.truth_(u)){
return ((2) <= (u + (cljs.core.truth_(c)?(1):(0))));
} else {
return null;
}
}),x));
});
gamma.compiler.separate_usages.topological_sort = (function topological_sort(ids,db){
var graph = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$2(db.call(null,id),cljs.core.PersistentArrayMap.EMPTY),ids))], null);
}),ids));
if(cljs.core._EQ_.call(null,cljs.core.PersistentArrayMap.EMPTY,graph)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.reverse.call(null,gamma.compiler.separate_usages.kahn_sort.call(null,graph));
}
});
gamma.compiler.separate_usages.shared_elements = (function shared_elements(id_mappings,source_element,source_db){
var shared = gamma.compiler.separate_usages.topological_sort.call(null,cljs.core.filter.call(null,(function (p1__13624_SHARP_){
return cljs.core.not.call(null,id_mappings.call(null,p1__13624_SHARP_));
}),gamma.compiler.separate_usages.get_shared.call(null,new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(source_element))),source_db);
return new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,((function (shared){
return (function (result,source_id){
var new_id = gamma.ast.gen_term_id.call(null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"elements","elements",657646735),cljs.core.conj.call(null,new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"source-id","source-id",-585995304),source_id,new cljs.core.Keyword(null,"id","id",-1388402092),new_id,new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.Keyword(null,"id-mapping","id-mapping",1986105282),new cljs.core.Keyword(null,"id-mapping","id-mapping",1986105282).cljs$core$IFn$_invoke$arity$1(result)], null)),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.conj.call(null,new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(result),new_id),new cljs.core.Keyword(null,"id-mapping","id-mapping",1986105282),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"id-mapping","id-mapping",1986105282).cljs$core$IFn$_invoke$arity$1(result),source_id,new_id)], null);
});})(shared))
,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"elements","elements",657646735),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"id-mapping","id-mapping",1986105282),cljs.core.PersistentArrayMap.EMPTY], null),shared));
});
gamma.compiler.separate_usages.body_elements = (function body_elements(source_element,id_mappings){
return cljs.core.mapv.call(null,(function (y){
var temp__4124__auto__ = id_mappings.call(null,y);
if(cljs.core.truth_(temp__4124__auto__)){
var id = temp__4124__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source-id","source-id",-585995304),y,new cljs.core.Keyword(null,"id","id",-1388402092),id], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source-id","source-id",-585995304),y,new cljs.core.Keyword(null,"id","id",-1388402092),gamma.ast.gen_term_id.call(null)], null);
}
}),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(source_element));
});
gamma.compiler.separate_usages.assoc_attributes = (function assoc_attributes(db,location,source_element,bound_ids){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(location)], null),(function (p1__13625_SHARP_,p2__13626_SHARP_){
return cljs.core.assoc.call(null,cljs.core.merge.call(null,cljs.core.dissoc.call(null,p1__13625_SHARP_,new cljs.core.Keyword(null,"source-id","source-id",-585995304)),p2__13626_SHARP_),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.into.call(null,new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(p1__13625_SHARP_),bound_ids));
}),cljs.core.dissoc.call(null,source_element,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"shared","shared",-384145993)));
});
gamma.compiler.separate_usages.separate_usages = (function separate_usages(source_db,id_mapping,bound_ids){
return (function (db,location){
var elt = gamma.compiler.common.get_element.call(null,db,location);
var bound_ids__$1 = cljs.core.into.call(null,bound_ids,new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(elt));
var id_mapping__$1 = cljs.core.merge.call(null,id_mapping,new cljs.core.Keyword(null,"id-mapping","id-mapping",1986105282).cljs$core$IFn$_invoke$arity$1(elt));
if(cljs.core.truth_(bound_ids__$1.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(location)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,null], null);
} else {
var source_element = source_db.call(null,new cljs.core.Keyword(null,"source-id","source-id",-585995304).cljs$core$IFn$_invoke$arity$1(elt));
var shared = gamma.compiler.separate_usages.shared_elements.call(null,id_mapping__$1,source_element,source_db);
var new_id_mapping = cljs.core.into.call(null,id_mapping__$1,cljs.core.map.call(null,((function (source_element,shared,elt,bound_ids__$1,id_mapping__$1){
return (function (p1__13627_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-id","source-id",-585995304).cljs$core$IFn$_invoke$arity$1(p1__13627_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__13627_SHARP_)],null));
});})(source_element,shared,elt,bound_ids__$1,id_mapping__$1))
,shared));
var new_bound_ids = cljs.core.into.call(null,bound_ids__$1,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),shared));
var body = gamma.compiler.separate_usages.body_elements.call(null,source_element,new_id_mapping);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gamma.compiler.common.merge_elements.call(null,gamma.compiler.common.merge_elements.call(null,gamma.compiler.separate_usages.assoc_attributes.call(null,db,location,source_element,new_bound_ids),gamma.compiler.common.location_conj.call(null,db,location,new cljs.core.Keyword(null,"shared","shared",-384145993)),shared),gamma.compiler.common.location_conj.call(null,db,location,new cljs.core.Keyword(null,"body","body",-2049205669)),body),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993),gamma.compiler.common.map_path.call(null,separate_usages.call(null,source_db,id_mapping__$1,bound_ids__$1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),gamma.compiler.common.map_path.call(null,separate_usages.call(null,source_db,new_id_mapping,new_bound_ids))], null)], null)], null);
}
});
});
