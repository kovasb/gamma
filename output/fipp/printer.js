// Compiled by ClojureScript 0.0-2913 {:target :nodejs}
goog.provide('fipp.printer');
goog.require('cljs.core');
goog.require('transduce.reducers');
goog.require('clojure.core.rrb_vector');
goog.require('clojure.core.reducers');
goog.require('clojure.string');
fipp.printer.empty_deque = cljs.core.PersistentVector.EMPTY;
fipp.printer.conjl = (function conjl(deque,x){
return clojure.core.rrb_vector.catvec.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),(function (){var or__5222__auto__ = deque;
if(cljs.core.truth_(or__5222__auto__)){
return or__5222__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
});
fipp.printer.conjr = cljs.core.fnil.call(null,cljs.core.conj,fipp.printer.empty_deque);
fipp.printer.conjlr = (function conjlr(l,deque,r){
return cljs.core.conj.call(null,fipp.printer.conjl.call(null,deque,l),r);
});
fipp.printer.serialize_node = (function (){var method_table__6119__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__6120__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__6121__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__6122__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__6123__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"fipp.printer","serialize-node"),cljs.core.first,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__6123__auto__,method_table__6119__auto__,prefer_table__6120__auto__,method_cache__6121__auto__,cached_hierarchy__6122__auto__));
})();
fipp.printer.serialize = (function serialize(doc){
if((doc == null)){
return null;
} else {
if(cljs.core.seq_QMARK_.call(null,doc)){
return cljs.core.mapcat.call(null,serialize,doc);
} else {
if(typeof doc === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"text","text",-1790561697),doc], null)], null);
} else {
if((doc instanceof cljs.core.Keyword)){
return fipp.printer.serialize_node.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null));
} else {
if(cljs.core.vector_QMARK_.call(null,doc)){
return fipp.printer.serialize_node.call(null,doc);
} else {
throw (new Error([cljs.core.str("Unexpected class for doc node: "),cljs.core.str(cljs.core.type.call(null,doc))].join('')));

}
}
}
}
}
});
cljs.core._add_method.call(null,fipp.printer.serialize_node,new cljs.core.Keyword(null,"text","text",-1790561697),(function (p__13209){
var vec__13210 = p__13209;
var _ = cljs.core.nth.call(null,vec__13210,(0),null);
var text = cljs.core.nthnext.call(null,vec__13210,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.apply.call(null,cljs.core.str,text)], null)], null);
}));
cljs.core._add_method.call(null,fipp.printer.serialize_node,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (p__13211){
var vec__13212 = p__13211;
var _ = cljs.core.nth.call(null,vec__13212,(0),null);
var text = cljs.core.nthnext.call(null,vec__13212,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.apply.call(null,cljs.core.str,text)], null)], null);
}));
cljs.core._add_method.call(null,fipp.printer.serialize_node,new cljs.core.Keyword(null,"escaped","escaped",-1007929769),(function (p__13213){
var vec__13214 = p__13213;
var _ = cljs.core.nth.call(null,vec__13214,(0),null);
var text = cljs.core.nth.call(null,vec__13214,(1),null);
if(typeof text === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"text","text",-150030170,null))))].join('')));
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"escaped","escaped",-1007929769),new cljs.core.Keyword(null,"text","text",-1790561697),text], null)], null);
}));
cljs.core._add_method.call(null,fipp.printer.serialize_node,new cljs.core.Keyword(null,"span","span",1394872991),(function (p__13215){
var vec__13216 = p__13215;
var _ = cljs.core.nth.call(null,vec__13216,(0),null);
var children = cljs.core.nthnext.call(null,vec__13216,(1));
return fipp.printer.serialize.call(null,children);
}));
cljs.core._add_method.call(null,fipp.printer.serialize_node,new cljs.core.Keyword(null,"line","line",212345235),(function (p__13217){
var vec__13218 = p__13217;
var _ = cljs.core.nth.call(null,vec__13218,(0),null);
var inline = cljs.core.nth.call(null,vec__13218,(1),null);
var inline__$1 = (function (){var or__5222__auto__ = inline;
if(cljs.core.truth_(or__5222__auto__)){
return or__5222__auto__;
} else {
return " ";
}
})();
if(typeof inline__$1 === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"inline","inline",-1254551547,null))))].join('')));
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"inline","inline",1399884222),inline__$1], null)], null);
}));
cljs.core._add_method.call(null,fipp.printer.serialize_node,new cljs.core.Keyword(null,"break","break",126570225),(function() { 
var G__13219__delegate = function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"break","break",126570225)], null)], null);
};
var G__13219 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__13220__i = 0, G__13220__a = new Array(arguments.length -  0);
while (G__13220__i < G__13220__a.length) {G__13220__a[G__13220__i] = arguments[G__13220__i + 0]; ++G__13220__i;}
  _ = new cljs.core.IndexedSeq(G__13220__a,0);
} 
return G__13219__delegate.call(this,_);};
G__13219.cljs$lang$maxFixedArity = 0;
G__13219.cljs$lang$applyTo = (function (arglist__13221){
var _ = cljs.core.seq(arglist__13221);
return G__13219__delegate(_);
});
G__13219.cljs$core$IFn$_invoke$arity$variadic = G__13219__delegate;
return G__13219;
})()
);
cljs.core._add_method.call(null,fipp.printer.serialize_node,new cljs.core.Keyword(null,"group","group",582596132),(function (p__13222){
var vec__13223 = p__13222;
var _ = cljs.core.nth.call(null,vec__13223,(0),null);
var children = cljs.core.nthnext.call(null,vec__13223,(1));
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"begin","begin",-319034319)], null)], null),fipp.printer.serialize.call(null,children),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"end","end",-268185958)], null)], null));
}));
cljs.core._add_method.call(null,fipp.printer.serialize_node,new cljs.core.Keyword(null,"nest","nest",-314993663),(function (p__13224){
var vec__13225 = p__13224;
var _ = cljs.core.nth.call(null,vec__13225,(0),null);
var offset = cljs.core.nth.call(null,vec__13225,(1),null);
var children = cljs.core.nthnext.call(null,vec__13225,(2));
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"nest","nest",-314993663),new cljs.core.Keyword(null,"offset","offset",296498311),offset], null)], null),fipp.printer.serialize.call(null,children),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"outdent","outdent",467209411)], null)], null));
}));
cljs.core._add_method.call(null,fipp.printer.serialize_node,new cljs.core.Keyword(null,"align","align",1964212802),(function (p__13226){
var vec__13227 = p__13226;
var _ = cljs.core.nth.call(null,vec__13227,(0),null);
var args = cljs.core.nthnext.call(null,vec__13227,(1));
var vec__13228 = ((typeof cljs.core.first.call(null,args) === 'number')?args:cljs.core.cons.call(null,(0),args));
var offset = cljs.core.nth.call(null,vec__13228,(0),null);
var children = cljs.core.nthnext.call(null,vec__13228,(1));
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"offset","offset",296498311),offset], null)], null),fipp.printer.serialize.call(null,children),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"outdent","outdent",467209411)], null)], null));
}));
fipp.printer.throw_op = (function throw_op(node){
throw (new Error([cljs.core.str("Unexpected op on node: "),cljs.core.str(node)].join('')));
});
fipp.printer.annotate_rights = transduce.reducers.map_state.call(null,(function (position,node){
var G__13229 = (((new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(node) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(node).fqn:null);
switch (G__13229) {
case "line":
var position_STAR_ = (position + cljs.core.count.call(null,new cljs.core.Keyword(null,"inline","inline",1399884222).cljs$core$IFn$_invoke$arity$1(node)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [position_STAR_,cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"right","right",-452581833),position_STAR_)], null);

break;
case "escaped":
var position_STAR_ = (position + (1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [position_STAR_,cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"right","right",-452581833),position_STAR_)], null);

break;
case "text":
var position_STAR_ = (position + cljs.core.count.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(node)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [position_STAR_,cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"right","right",-452581833),position_STAR_)], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [position,cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"right","right",-452581833),position)], null);

}
}),(0));
fipp.printer._STAR_options_STAR_ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(70)], null);
/**
* @param {...*} var_args
*/
fipp.printer.update_right = (function() { 
var update_right__delegate = function (deque,f,args){
return fipp.printer.conjr.call(null,cljs.core.pop.call(null,deque),cljs.core.apply.call(null,f,cljs.core.peek.call(null,deque),args));
};
var update_right = function (deque,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__13231__i = 0, G__13231__a = new Array(arguments.length -  2);
while (G__13231__i < G__13231__a.length) {G__13231__a[G__13231__i] = arguments[G__13231__i + 2]; ++G__13231__i;}
  args = new cljs.core.IndexedSeq(G__13231__a,0);
} 
return update_right__delegate.call(this,deque,f,args);};
update_right.cljs$lang$maxFixedArity = 2;
update_right.cljs$lang$applyTo = (function (arglist__13232){
var deque = cljs.core.first(arglist__13232);
arglist__13232 = cljs.core.next(arglist__13232);
var f = cljs.core.first(arglist__13232);
var args = cljs.core.rest(arglist__13232);
return update_right__delegate(deque,f,args);
});
update_right.cljs$core$IFn$_invoke$arity$variadic = update_right__delegate;
return update_right;
})()
;
fipp.printer.annotate_begins = transduce.reducers.mapcat_state.call(null,(function (p__13233,p__13234){
var map__13235 = p__13233;
var map__13235__$1 = ((cljs.core.seq_QMARK_.call(null,map__13235))?cljs.core.apply.call(null,cljs.core.hash_map,map__13235):map__13235);
var state = map__13235__$1;
var buffers = cljs.core.get.call(null,map__13235__$1,new cljs.core.Keyword(null,"buffers","buffers",471409492));
var position = cljs.core.get.call(null,map__13235__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var map__13236 = p__13234;
var map__13236__$1 = ((cljs.core.seq_QMARK_.call(null,map__13236))?cljs.core.apply.call(null,cljs.core.hash_map,map__13236):map__13236);
var node = map__13236__$1;
var right = cljs.core.get.call(null,map__13236__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var op = cljs.core.get.call(null,map__13236__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
if(cljs.core.empty_QMARK_.call(null,buffers)){
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"begin","begin",-319034319))){
var position_STAR_ = (right + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(fipp.printer._STAR_options_STAR_));
var buffer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),position_STAR_,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),fipp.printer.empty_deque], null);
var state_STAR_ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),position_STAR_,new cljs.core.Keyword(null,"buffers","buffers",471409492),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [buffer], null)], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state_STAR_,null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null)], null);
}
} else {
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"end","end",-268185958))){
var buffer = cljs.core.peek.call(null,buffers);
var buffers_STAR_ = cljs.core.pop.call(null,buffers);
var begin = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.Keyword(null,"right","right",-452581833),right], null);
var nodes = fipp.printer.conjlr.call(null,begin,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(buffer),node);
if(cljs.core.empty_QMARK_.call(null,buffers_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),(0),new cljs.core.Keyword(null,"buffers","buffers",471409492),fipp.printer.empty_deque], null),nodes], null);
} else {
var buffers_STAR__STAR_ = fipp.printer.update_right.call(null,buffers_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),clojure.core.rrb_vector.catvec,nodes);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"buffers","buffers",471409492),buffers_STAR__STAR_),null], null);
}
} else {
var width = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(fipp.printer._STAR_options_STAR_);
var position_STAR_ = position;
var buffers_STAR_ = ((cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"begin","begin",-319034319)))?fipp.printer.conjr.call(null,buffers,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),(right + width),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),fipp.printer.empty_deque], null)):fipp.printer.update_right.call(null,buffers,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),fipp.printer.conjr,node));
var emit = null;
while(true){
if(((right <= position_STAR_)) && ((cljs.core.count.call(null,buffers_STAR_) <= width))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),position_STAR_,new cljs.core.Keyword(null,"buffers","buffers",471409492),buffers_STAR_], null),emit], null);
} else {
var buffer = cljs.core.first.call(null,buffers_STAR_);
var buffers_STAR__STAR_ = clojure.core.rrb_vector.subvec.call(null,buffers_STAR_,(1));
var begin = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"too-far","too-far",85800617)], null);
var emit_STAR_ = cljs.core.concat.call(null,emit,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [begin], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(buffer));
if(cljs.core.empty_QMARK_.call(null,buffers_STAR__STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),(0),new cljs.core.Keyword(null,"buffers","buffers",471409492),fipp.printer.empty_deque], null),emit_STAR_], null);
} else {
var position_STAR__STAR_ = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,buffers_STAR__STAR_));
var G__13237 = position_STAR__STAR_;
var G__13238 = buffers_STAR__STAR_;
var G__13239 = emit_STAR_;
position_STAR_ = G__13237;
buffers_STAR_ = G__13238;
emit = G__13239;
continue;
}
}
break;
}
}
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),(0),new cljs.core.Keyword(null,"buffers","buffers",471409492),fipp.printer.empty_deque], null));
fipp.printer.format_nodes = (function format_nodes(coll){
return transduce.reducers.mapcat_state.call(null,(function (p__13245,p__13246){
var map__13247 = p__13245;
var map__13247__$1 = ((cljs.core.seq_QMARK_.call(null,map__13247))?cljs.core.apply.call(null,cljs.core.hash_map,map__13247):map__13247);
var state = map__13247__$1;
var column = cljs.core.get.call(null,map__13247__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var tab_stops = cljs.core.get.call(null,map__13247__$1,new cljs.core.Keyword(null,"tab-stops","tab-stops",84206435));
var length = cljs.core.get.call(null,map__13247__$1,new cljs.core.Keyword(null,"length","length",588987862));
var fits = cljs.core.get.call(null,map__13247__$1,new cljs.core.Keyword(null,"fits","fits",2008565808));
var map__13248 = p__13246;
var map__13248__$1 = ((cljs.core.seq_QMARK_.call(null,map__13248))?cljs.core.apply.call(null,cljs.core.hash_map,map__13248):map__13248);
var node = map__13248__$1;
var right = cljs.core.get.call(null,map__13248__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var op = cljs.core.get.call(null,map__13248__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var indent = cljs.core.peek.call(null,tab_stops);
var width = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(fipp.printer._STAR_options_STAR_);
var G__13249 = (((op instanceof cljs.core.Keyword))?op.fqn:null);
switch (G__13249) {
case "nest":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab-stops","tab-stops",84206435)], null),cljs.core.conj,(indent + new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(node))),null], null);

break;
case "align":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab-stops","tab-stops",84206435)], null),cljs.core.conj,(column + new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(node))),null], null);

break;
case "outdent":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab-stops","tab-stops",84206435)], null),cljs.core.pop),null], null);

break;
case "begin":
var fits_STAR_ = (((fits > (0)))?(fits + (1)):((cljs.core._EQ_.call(null,right,new cljs.core.Keyword(null,"too-far","too-far",85800617)))?(0):(((right <= length))?(1):(0)
)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"fits","fits",2008565808),fits_STAR_),null], null);

break;
case "break":
var state_STAR_ = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"length","length",588987862),((right + width) - indent),new cljs.core.Keyword(null,"column","column",2078222095),(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n"], null)], null);

break;
case "line":
if((fits === (0))){
var state_STAR_ = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"length","length",588987862),((right + width) - indent),new cljs.core.Keyword(null,"column","column",2078222095),(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n"], null)], null);
} else {
var inline = new cljs.core.Keyword(null,"inline","inline",1399884222).cljs$core$IFn$_invoke$arity$1(node);
var state_STAR_ = cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column","column",2078222095)], null),cljs.core._PLUS_,cljs.core.count.call(null,inline));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [inline], null)], null);
}

break;
case "escaped":
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(node);
if((column === (0))){
var emit = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,indent," ")),text], null);
var state_STAR_ = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"column","column",2078222095),(indent + (1)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state_STAR_,emit], null);
} else {
var state_STAR_ = cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column","column",2078222095)], null),cljs.core.inc);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [text], null)], null);
}

break;
case "pass":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(node)], null)], null);

break;
case "end":
var fits_STAR_ = (function (){var x__5539__auto__ = (0);
var y__5540__auto__ = (fits - (1));
return ((x__5539__auto__ > y__5540__auto__) ? x__5539__auto__ : y__5540__auto__);
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"fits","fits",2008565808),fits_STAR_),null], null);

break;
case "text":
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(node);
if((column === (0))){
var emit = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,indent," ")),text], null);
var state_STAR_ = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"column","column",2078222095),(indent + cljs.core.count.call(null,text)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state_STAR_,emit], null);
} else {
var state_STAR_ = cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column","column",2078222095)], null),cljs.core._PLUS_,cljs.core.count.call(null,text));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [text], null)], null);
}

break;
default:
return fipp.printer.throw_op.call(null,node);

}
}),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fits","fits",2008565808),(0),new cljs.core.Keyword(null,"length","length",588987862),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(fipp.printer._STAR_options_STAR_),new cljs.core.Keyword(null,"tab-stops","tab-stops",84206435),cljs.core.list((0)),new cljs.core.Keyword(null,"column","column",2078222095),(0)], null),coll);
});
fipp.printer.pprint_document = (function pprint_document(document,options){
var _STAR_options_STAR_13252_13253 = fipp.printer._STAR_options_STAR_;
fipp.printer._STAR_options_STAR_ = cljs.core.merge.call(null,fipp.printer._STAR_options_STAR_,options);

try{transduce.reducers.each.call(null,cljs.core.print,fipp.printer.format_nodes.call(null,fipp.printer.annotate_begins.call(null,fipp.printer.annotate_rights.call(null,fipp.printer.serialize.call(null,document)))));
}finally {fipp.printer._STAR_options_STAR_ = _STAR_options_STAR_13252_13253;
}
return cljs.core.println.call(null);
});
