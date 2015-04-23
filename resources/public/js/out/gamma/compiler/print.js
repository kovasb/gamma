// Compiled by ClojureScript 0.0-3208 {}
goog.provide('gamma.compiler.print');
goog.require('cljs.core');
goog.require('fipp.printer');
goog.require('gamma.ast');
gamma.compiler.print.pretty_nil = (function gamma$compiler$print$pretty_nil(trans,x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),"nil"], null);
});
gamma.compiler.print.pretty_object = (function gamma$compiler$print$pretty_object(trans,x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.pr_str.call(null,x)], null);
});
gamma.compiler.print.pretty_vector = (function gamma$compiler$print$pretty_vector(trans,v){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"[",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,trans,v))], null),"]"], null);
});
gamma.compiler.print.pretty_seq = (function gamma$compiler$print$pretty_seq(trans,s){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"(",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,trans,s))], null),")"], null);
});
gamma.compiler.print.pretty_map = (function gamma$compiler$print$pretty_map(trans,m){
var kvps = (function (){var iter__4705__auto__ = (function gamma$compiler$print$pretty_map_$_iter__5522(s__5523){
return (new cljs.core.LazySeq(null,(function (){
var s__5523__$1 = s__5523;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5523__$1);
if(temp__4126__auto__){
var s__5523__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5523__$2)){
var c__4703__auto__ = cljs.core.chunk_first.call(null,s__5523__$2);
var size__4704__auto__ = cljs.core.count.call(null,c__4703__auto__);
var b__5525 = cljs.core.chunk_buffer.call(null,size__4704__auto__);
if((function (){var i__5524 = (0);
while(true){
if((i__5524 < size__4704__auto__)){
var vec__5528 = cljs.core._nth.call(null,c__4703__auto__,i__5524);
var k = cljs.core.nth.call(null,vec__5528,(0),null);
var v = cljs.core.nth.call(null,vec__5528,(1),null);
cljs.core.chunk_append.call(null,b__5525,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),trans.call(null,k)," ",trans.call(null,v)], null));

var G__5531 = (i__5524 + (1));
i__5524 = G__5531;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5525),gamma$compiler$print$pretty_map_$_iter__5522.call(null,cljs.core.chunk_rest.call(null,s__5523__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5525),null);
}
} else {
var vec__5529 = cljs.core.first.call(null,s__5523__$2);
var k = cljs.core.nth.call(null,vec__5529,(0),null);
var v = cljs.core.nth.call(null,vec__5529,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),trans.call(null,k)," ",trans.call(null,v)], null),gamma$compiler$print$pretty_map_$_iter__5522.call(null,cljs.core.rest.call(null,s__5523__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4705__auto__.call(null,m);
})();
var doc = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"{",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),",",new cljs.core.Keyword(null,"line","line",212345235)], null),kvps)], null),"}"], null);
if((function (){var G__5530 = m;
if(G__5530){
var bit__4618__auto__ = (G__5530.cljs$lang$protocol_mask$partition0$ & (67108864));
if((bit__4618__auto__) || (G__5530.cljs$core$IRecord$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"#",[cljs.core.str(cljs.core.type.call(null,m))].join(''),doc], null);
} else {
return doc;
}
});
gamma.compiler.print.pretty_set = (function gamma$compiler$print$pretty_set(trans,s){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"#{",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,trans,s))], null),"}"], null);
});
gamma.compiler.print.pretty_term = (function gamma$compiler$print$pretty_term(trans,x){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),[cljs.core.str(new cljs.core.Keyword(null,"head","head",-771383919).cljs$core$IFn$_invoke$arity$1(x))].join(''),"(",[cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(x)))].join(''),")",gamma.compiler.print.pretty_map.call(null,trans,cljs.core.dissoc.call(null,x,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"tag","tag",-1290361223)))], null);
});

/**
* @constructor
*/
gamma.compiler.print.Dispatcher = (function (dispatch_fn){
this.dispatch_fn = dispatch_fn;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1;
})
gamma.compiler.print.Dispatcher.prototype.call = (function (self__,x){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return self__.dispatch_fn.call(null,x).call(null,this$,x);
});

gamma.compiler.print.Dispatcher.prototype.apply = (function (self__,args5532){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args5532)));
});

gamma.compiler.print.Dispatcher.prototype.cljs$core$IFn$_invoke$arity$1 = (function (x){
var self__ = this;
var this$ = this;
return self__.dispatch_fn.call(null,x).call(null,this$,x);
});

gamma.compiler.print.Dispatcher.cljs$lang$type = true;

gamma.compiler.print.Dispatcher.cljs$lang$ctorStr = "gamma.compiler.print/Dispatcher";

gamma.compiler.print.Dispatcher.cljs$lang$ctorPrWriter = (function (this__4530__auto__,writer__4531__auto__,opt__4532__auto__){
return cljs.core._write.call(null,writer__4531__auto__,"gamma.compiler.print/Dispatcher");
});

gamma.compiler.print.__GT_Dispatcher = (function gamma$compiler$print$__GT_Dispatcher(dispatch_fn){
return (new gamma.compiler.print.Dispatcher(dispatch_fn));
});

gamma.compiler.print.printer = (function gamma$compiler$print$printer(){
return (new gamma.compiler.print.Dispatcher((function (x){
if((cljs.core.map_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(x)))){
return gamma.compiler.print.pretty_term;
} else {
if(cljs.core.map_QMARK_.call(null,x)){
return gamma.compiler.print.pretty_map;
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return gamma.compiler.print.pretty_vector;
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return gamma.compiler.print.pretty_seq;
} else {
if(cljs.core.set_QMARK_.call(null,x)){
return gamma.compiler.print.pretty_set;
} else {
if((x == null)){
return gamma.compiler.print.pretty_nil;
} else {
return gamma.compiler.print.pretty_object;

}
}
}
}
}
}
})));
});
gamma.compiler.print.ast_doc = (function gamma$compiler$print$ast_doc(db,node_id,f){
var x = (cljs.core.truth_((function (){var or__3951__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"root","root",-448657453),node_id);
if(or__3951__auto__){
return or__3951__auto__;
} else {
return gamma.ast.id_QMARK_.call(null,node_id);
}
})())?db.call(null,node_id):node_id);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"head","head",-771383919).cljs$core$IFn$_invoke$arity$1(x)),(cljs.core.truth_(f)?(function (){var temp__4124__auto__ = f.call(null,x,db);
if(cljs.core.truth_(temp__4124__auto__)){
var y = temp__4124__auto__;
return y;
} else {
return "";
}
})():null),"[",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),""], null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"literal","literal",1664775605),new cljs.core.Keyword(null,"head","head",-771383919).cljs$core$IFn$_invoke$arity$1(x)))?cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(x)):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nest","nest",-314993663),(2),cljs.core.interpose.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),",",new cljs.core.Keyword(null,"line","line",212345235)], null),cljs.core.map.call(null,((function (x){
return (function (p1__5533_SHARP_){
return gamma$compiler$print$ast_doc.call(null,db,p1__5533_SHARP_,f);
});})(x))
,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(x)))], null)),"]"], null);
});
gamma.compiler.print.print_ast = (function gamma$compiler$print$print_ast(x,f,w){
return fipp.printer.pprint_document.call(null,gamma.compiler.print.ast_doc.call(null,x,new cljs.core.Keyword(null,"root","root",-448657453),f),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),w], null));
});
gamma.compiler.print.helper = (function gamma$compiler$print$helper(db,paths,list){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nest","nest",-314993663),(2),cljs.core.interpose.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),",",new cljs.core.Keyword(null,"line","line",212345235)], null),cljs.core.map.call(null,(function (p1__5534_SHARP_){
return gamma.compiler.print.ast_doc2.call(null,db,p1__5534_SHARP_,paths);
}),list))], null);
});
gamma.compiler.print.ast_doc2 = (function gamma$compiler$print$ast_doc2(db,node_id,paths){
var x = (cljs.core.truth_((function (){var or__3951__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"root","root",-448657453),node_id);
if(or__3951__auto__){
return or__3951__auto__;
} else {
return gamma.ast.id_QMARK_.call(null,node_id);
}
})())?db.call(null,node_id):node_id);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"head","head",-771383919).cljs$core$IFn$_invoke$arity$1(x)),"(",(function (){var i = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"root","root",-448657453),i)){
return ":root";
} else {
return [cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(i))].join('');
}
})(),")",((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"literal","literal",1664775605),new cljs.core.Keyword(null,"head","head",-771383919).cljs$core$IFn$_invoke$arity$1(x)))?cljs.core.pr_str.call(null,cljs.core.select_keys.call(null,x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null))):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"{",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nest","nest",-314993663),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),""], null),(function (){var temp__4124__auto__ = new cljs.core.Keyword(null,"assignments","assignments",-1114514911).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(temp__4124__auto__)){
var y = temp__4124__auto__;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),":assignments ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),""], null),gamma.compiler.print.helper.call(null,db,paths,y),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),""], null);
}
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),":body ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),""], null),gamma.compiler.print.helper.call(null,db,paths,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(x))], null)], null),"}"], null))], null);
});
gamma.compiler.print.helper2 = (function gamma$compiler$print$helper2(db,paths,list){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nest","nest",-314993663),(2),cljs.core.interpose.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),",",new cljs.core.Keyword(null,"line","line",212345235)], null),cljs.core.map.call(null,(function (p1__5535_SHARP_){
return gamma.compiler.print.ast_doc3.call(null,db,p1__5535_SHARP_,paths);
}),list))], null);
});
gamma.compiler.print.ast_doc3 = (function gamma$compiler$print$ast_doc3(db,node_id,paths){
var x = (cljs.core.truth_((function (){var or__3951__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"root","root",-448657453),node_id);
if(or__3951__auto__){
return or__3951__auto__;
} else {
return gamma.ast.id_QMARK_.call(null,node_id);
}
})())?db.call(null,node_id):node_id);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"head","head",-771383919).cljs$core$IFn$_invoke$arity$1(x)),"(",(function (){var i = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"root","root",-448657453),i)){
return ":root";
} else {
return [cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(i))].join('');
}
})(),")",((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"literal","literal",1664775605),new cljs.core.Keyword(null,"head","head",-771383919).cljs$core$IFn$_invoke$arity$1(x)))?cljs.core.pr_str.call(null,cljs.core.select_keys.call(null,x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null))):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"{",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nest","nest",-314993663),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),""], null),(function (){var temp__4124__auto__ = cljs.core.vec.call(null,new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(x));
if(cljs.core.truth_(temp__4124__auto__)){
var y = temp__4124__auto__;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),":shared ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),""], null),gamma.compiler.print.helper2.call(null,db,paths,y),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),""], null);
}
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),":body ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),""], null),gamma.compiler.print.helper2.call(null,db,paths,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(x))], null)], null),"}"], null))], null);
});
gamma.compiler.print.print_ast2 = (function gamma$compiler$print$print_ast2(x,w){
return fipp.printer.pprint_document.call(null,gamma.compiler.print.ast_doc2.call(null,x,new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),w], null));
});

//# sourceMappingURL=print.js.map