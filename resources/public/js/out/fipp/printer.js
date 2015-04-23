// Compiled by ClojureScript 0.0-3208 {}
goog.provide('fipp.printer');
goog.require('cljs.core');
goog.require('transduce.reducers');
goog.require('clojure.core.rrb_vector');
goog.require('clojure.core.reducers');
goog.require('clojure.string');
fipp.printer.empty_deque = cljs.core.PersistentVector.EMPTY;
fipp.printer.conjl = (function fipp$printer$conjl(deque,x){
return clojure.core.rrb_vector.catvec.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),(function (){var or__3951__auto__ = deque;
if(cljs.core.truth_(or__3951__auto__)){
return or__3951__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
});
fipp.printer.conjr = cljs.core.fnil.call(null,cljs.core.conj,fipp.printer.empty_deque);
fipp.printer.conjlr = (function fipp$printer$conjlr(l,deque,r){
return cljs.core.conj.call(null,fipp.printer.conjl.call(null,deque,l),r);
});
if(typeof fipp.printer.serialize_node !== 'undefined'){
} else {
fipp.printer.serialize_node = (function (){var method_table__4846__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4847__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4848__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4849__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4850__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"fipp.printer","serialize-node"),cljs.core.first,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4850__auto__,method_table__4846__auto__,prefer_table__4847__auto__,method_cache__4848__auto__,cached_hierarchy__4849__auto__));
})();
}
fipp.printer.serialize = (function fipp$printer$serialize(doc){
if((doc == null)){
return null;
} else {
if(cljs.core.seq_QMARK_.call(null,doc)){
return cljs.core.mapcat.call(null,fipp$printer$serialize,doc);
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
cljs.core._add_method.call(null,fipp.printer.serialize_node,new cljs.core.Keyword(null,"text","text",-1790561697),(function (p__6921){
var vec__6922 = p__6921;
var _ = cljs.core.nth.call(null,vec__6922,(0),null);
var text = cljs.core.nthnext.call(null,vec__6922,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.apply.call(null,cljs.core.str,text)], null)], null);
}));
cljs.core._add_method.call(null,fipp.printer.serialize_node,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (p__6923){
var vec__6924 = p__6923;
var _ = cljs.core.nth.call(null,vec__6924,(0),null);
var text = cljs.core.nthnext.call(null,vec__6924,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.apply.call(null,cljs.core.str,text)], null)], null);
}));
cljs.core._add_method.call(null,fipp.printer.serialize_node,new cljs.core.Keyword(null,"escaped","escaped",-1007929769),(function (p__6925){
var vec__6926 = p__6925;
var _ = cljs.core.nth.call(null,vec__6926,(0),null);
var text = cljs.core.nth.call(null,vec__6926,(1),null);
if(typeof text === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"text","text",-150030170,null))))].join('')));
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"escaped","escaped",-1007929769),new cljs.core.Keyword(null,"text","text",-1790561697),text], null)], null);
}));
cljs.core._add_method.call(null,fipp.printer.serialize_node,new cljs.core.Keyword(null,"span","span",1394872991),(function (p__6927){
var vec__6928 = p__6927;
var _ = cljs.core.nth.call(null,vec__6928,(0),null);
var children = cljs.core.nthnext.call(null,vec__6928,(1));
return fipp.printer.serialize.call(null,children);
}));
cljs.core._add_method.call(null,fipp.printer.serialize_node,new cljs.core.Keyword(null,"line","line",212345235),(function (p__6929){
var vec__6930 = p__6929;
var _ = cljs.core.nth.call(null,vec__6930,(0),null);
var inline = cljs.core.nth.call(null,vec__6930,(1),null);
var inline__$1 = (function (){var or__3951__auto__ = inline;
if(cljs.core.truth_(or__3951__auto__)){
return or__3951__auto__;
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
var G__6931__delegate = function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"break","break",126570225)], null)], null);
};
var G__6931 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__6932__i = 0, G__6932__a = new Array(arguments.length -  0);
while (G__6932__i < G__6932__a.length) {G__6932__a[G__6932__i] = arguments[G__6932__i + 0]; ++G__6932__i;}
  _ = new cljs.core.IndexedSeq(G__6932__a,0);
} 
return G__6931__delegate.call(this,_);};
G__6931.cljs$lang$maxFixedArity = 0;
G__6931.cljs$lang$applyTo = (function (arglist__6933){
var _ = cljs.core.seq(arglist__6933);
return G__6931__delegate(_);
});
G__6931.cljs$core$IFn$_invoke$arity$variadic = G__6931__delegate;
return G__6931;
})()
);
cljs.core._add_method.call(null,fipp.printer.serialize_node,new cljs.core.Keyword(null,"group","group",582596132),(function (p__6934){
var vec__6935 = p__6934;
var _ = cljs.core.nth.call(null,vec__6935,(0),null);
var children = cljs.core.nthnext.call(null,vec__6935,(1));
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"begin","begin",-319034319)], null)], null),fipp.printer.serialize.call(null,children),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"end","end",-268185958)], null)], null));
}));
cljs.core._add_method.call(null,fipp.printer.serialize_node,new cljs.core.Keyword(null,"nest","nest",-314993663),(function (p__6936){
var vec__6937 = p__6936;
var _ = cljs.core.nth.call(null,vec__6937,(0),null);
var offset = cljs.core.nth.call(null,vec__6937,(1),null);
var children = cljs.core.nthnext.call(null,vec__6937,(2));
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"nest","nest",-314993663),new cljs.core.Keyword(null,"offset","offset",296498311),offset], null)], null),fipp.printer.serialize.call(null,children),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"outdent","outdent",467209411)], null)], null));
}));
cljs.core._add_method.call(null,fipp.printer.serialize_node,new cljs.core.Keyword(null,"align","align",1964212802),(function (p__6938){
var vec__6939 = p__6938;
var _ = cljs.core.nth.call(null,vec__6939,(0),null);
var args = cljs.core.nthnext.call(null,vec__6939,(1));
var vec__6940 = ((typeof cljs.core.first.call(null,args) === 'number')?args:cljs.core.cons.call(null,(0),args));
var offset = cljs.core.nth.call(null,vec__6940,(0),null);
var children = cljs.core.nthnext.call(null,vec__6940,(1));
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"offset","offset",296498311),offset], null)], null),fipp.printer.serialize.call(null,children),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"outdent","outdent",467209411)], null)], null));
}));
fipp.printer.throw_op = (function fipp$printer$throw_op(node){
throw (new Error([cljs.core.str("Unexpected op on node: "),cljs.core.str(node)].join('')));
});
fipp.printer.annotate_rights = transduce.reducers.map_state.call(null,(function (position,node){
var G__6941 = (((new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(node) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(node).fqn:null);
switch (G__6941) {
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
fipp.printer.update_right = (function fipp$printer$update_right(){
var argseq__4991__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return fipp.printer.update_right.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4991__auto__);
});

fipp.printer.update_right.cljs$core$IFn$_invoke$arity$variadic = (function (deque,f,args){
return fipp.printer.conjr.call(null,cljs.core.pop.call(null,deque),cljs.core.apply.call(null,f,cljs.core.peek.call(null,deque),args));
});

fipp.printer.update_right.cljs$lang$maxFixedArity = (2);

fipp.printer.update_right.cljs$lang$applyTo = (function (seq6943){
var G__6944 = cljs.core.first.call(null,seq6943);
var seq6943__$1 = cljs.core.next.call(null,seq6943);
var G__6945 = cljs.core.first.call(null,seq6943__$1);
var seq6943__$2 = cljs.core.next.call(null,seq6943__$1);
return fipp.printer.update_right.cljs$core$IFn$_invoke$arity$variadic(G__6944,G__6945,seq6943__$2);
});
fipp.printer.annotate_begins = transduce.reducers.mapcat_state.call(null,(function (p__6946,p__6947){
var map__6948 = p__6946;
var map__6948__$1 = ((cljs.core.seq_QMARK_.call(null,map__6948))?cljs.core.apply.call(null,cljs.core.hash_map,map__6948):map__6948);
var state = map__6948__$1;
var buffers = cljs.core.get.call(null,map__6948__$1,new cljs.core.Keyword(null,"buffers","buffers",471409492));
var position = cljs.core.get.call(null,map__6948__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var map__6949 = p__6947;
var map__6949__$1 = ((cljs.core.seq_QMARK_.call(null,map__6949))?cljs.core.apply.call(null,cljs.core.hash_map,map__6949):map__6949);
var node = map__6949__$1;
var right = cljs.core.get.call(null,map__6949__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var op = cljs.core.get.call(null,map__6949__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
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
var G__6950 = position_STAR__STAR_;
var G__6951 = buffers_STAR__STAR_;
var G__6952 = emit_STAR_;
position_STAR_ = G__6950;
buffers_STAR_ = G__6951;
emit = G__6952;
continue;
}
}
break;
}
}
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),(0),new cljs.core.Keyword(null,"buffers","buffers",471409492),fipp.printer.empty_deque], null));
fipp.printer.format_nodes = (function fipp$printer$format_nodes(coll){
return transduce.reducers.mapcat_state.call(null,(function (p__6958,p__6959){
var map__6960 = p__6958;
var map__6960__$1 = ((cljs.core.seq_QMARK_.call(null,map__6960))?cljs.core.apply.call(null,cljs.core.hash_map,map__6960):map__6960);
var state = map__6960__$1;
var column = cljs.core.get.call(null,map__6960__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var tab_stops = cljs.core.get.call(null,map__6960__$1,new cljs.core.Keyword(null,"tab-stops","tab-stops",84206435));
var length = cljs.core.get.call(null,map__6960__$1,new cljs.core.Keyword(null,"length","length",588987862));
var fits = cljs.core.get.call(null,map__6960__$1,new cljs.core.Keyword(null,"fits","fits",2008565808));
var map__6961 = p__6959;
var map__6961__$1 = ((cljs.core.seq_QMARK_.call(null,map__6961))?cljs.core.apply.call(null,cljs.core.hash_map,map__6961):map__6961);
var node = map__6961__$1;
var right = cljs.core.get.call(null,map__6961__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var op = cljs.core.get.call(null,map__6961__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var indent = cljs.core.peek.call(null,tab_stops);
var width = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(fipp.printer._STAR_options_STAR_);
var G__6962 = (((op instanceof cljs.core.Keyword))?op.fqn:null);
switch (G__6962) {
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
var fits_STAR_ = (function (){var x__4263__auto__ = (0);
var y__4264__auto__ = (fits - (1));
return ((x__4263__auto__ > y__4264__auto__) ? x__4263__auto__ : y__4264__auto__);
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
fipp.printer.pprint_document = (function fipp$printer$pprint_document(document,options){
var _STAR_options_STAR_6965_6966 = fipp.printer._STAR_options_STAR_;
fipp.printer._STAR_options_STAR_ = cljs.core.merge.call(null,fipp.printer._STAR_options_STAR_,options);

try{transduce.reducers.each.call(null,cljs.core.print,fipp.printer.format_nodes.call(null,fipp.printer.annotate_begins.call(null,fipp.printer.annotate_rights.call(null,fipp.printer.serialize.call(null,document)))));
}finally {fipp.printer._STAR_options_STAR_ = _STAR_options_STAR_6965_6966;
}
return cljs.core.println.call(null);
});

//# sourceMappingURL=printer.js.map