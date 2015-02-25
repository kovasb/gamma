// Compiled by ClojureScript 0.0-2913 {:target :nodejs}
goog.provide('gamma.emit.emit');
goog.require('cljs.core');
goog.require('gamma.ast');
gamma.emit.emit.function_QMARK_ = (function function_QMARK_(x){
return gamma.ast.functions.call(null,gamma.ast.head.call(null,x));
});
gamma.emit.emit.operator_class = (function operator_class(x){
var temp__4124__auto__ = gamma.ast.operators.call(null,gamma.ast.head.call(null,x));
if(cljs.core.truth_(temp__4124__auto__)){
var o = temp__4124__auto__;
return new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(o);
} else {
return null;
}
});
gamma.emit.emit.primitive_QMARK_ = (function primitive_QMARK_(x){
var or__5222__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [true,null,false,null], null), null).call(null,x);
if(cljs.core.truth_(or__5222__auto__)){
return or__5222__auto__;
} else {
return (cljs.core.integer_QMARK_.call(null,x)) || (typeof x === 'number');
}
});
gamma.emit.emit.emit_dispatch = (function emit_dispatch(db,x){
if(cljs.core.truth_(gamma.emit.emit.primitive_QMARK_.call(null,x))){
return new cljs.core.Keyword(null,"primitive","primitive",1884541424);
} else {
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"int","int",-1741416922),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"bool","bool",1444635321),null], null), null).call(null,x))){
return new cljs.core.Keyword(null,"primitive-type","primitive-type",-130245537);
} else {
if(cljs.core.truth_(gamma.emit.emit.function_QMARK_.call(null,x))){
return new cljs.core.Keyword(null,"function","function",-2127255473);
} else {
var temp__4124__auto__ = gamma.emit.emit.operator_class.call(null,x);
if(cljs.core.truth_(temp__4124__auto__)){
var c = temp__4124__auto__;
return c;
} else {
var temp__4124__auto____$1 = gamma.ast.head.call(null,x);
if(cljs.core.truth_(temp__4124__auto____$1)){
var h = temp__4124__auto____$1;
return h;
} else {
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(x);
}
}
}
}
}
});
gamma.emit.emit.emit = (function (){var method_table__6119__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__6120__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__6121__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__6122__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__6123__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"gamma.emit.emit","emit"),gamma.emit.emit.emit_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__6123__auto__,method_table__6119__auto__,prefer_table__6120__auto__,method_cache__6121__auto__,cached_hierarchy__6122__auto__));
})();
cljs.core._add_method.call(null,gamma.emit.emit.emit,new cljs.core.Keyword(null,"primitive","primitive",1884541424),(function (db,x){
return [cljs.core.str(x)].join('');
}));
cljs.core._add_method.call(null,gamma.emit.emit.emit,new cljs.core.Keyword(null,"primitive-type","primitive-type",-130245537),(function (db,x){
return cljs.core.name.call(null,x);
}));
cljs.core._add_method.call(null,gamma.emit.emit.emit,new cljs.core.Keyword(null,"literal","literal",1664775605),(function (db,x){
return gamma.emit.emit.emit.call(null,db,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(x));
}));
cljs.core._add_method.call(null,gamma.emit.emit.emit,null,(function (db,x){
return cljs.core.println.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),x], null));
}));
