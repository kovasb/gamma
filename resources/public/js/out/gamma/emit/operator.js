// Compiled by ClojureScript 0.0-3208 {}
goog.provide('gamma.emit.operator');
goog.require('cljs.core');
goog.require('gamma.ast');
goog.require('gamma.emit.emit');
cljs.core._add_method.call(null,gamma.emit.emit.emit,new cljs.core.Keyword(null,"infix","infix",1991018113),(function (db,x){
var literal = new cljs.core.Keyword(null,"literal","literal",1664775605).cljs$core$IFn$_invoke$arity$1(gamma.ast.operators.call(null,gamma.ast.head.call(null,x)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),cljs.core.interpose.call(null,[cljs.core.str(" "),cljs.core.str(literal),cljs.core.str(" ")].join(''),cljs.core.map.call(null,((function (literal){
return (function (p1__5174_SHARP_){
return gamma.emit.emit.emit.call(null,db,db.call(null,p1__5174_SHARP_));
});})(literal))
,gamma.ast.body.call(null,x)))], null);
}));
cljs.core._add_method.call(null,gamma.emit.emit.emit,new cljs.core.Keyword(null,"prefix","prefix",-265908465),(function (db,x){
var literal = new cljs.core.Keyword(null,"literal","literal",1664775605).cljs$core$IFn$_invoke$arity$1(gamma.ast.operators.call(null,gamma.ast.head.call(null,x)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),[cljs.core.str(" "),cljs.core.str(literal)].join(''),gamma.emit.emit.emit.call(null,db,db.call(null,cljs.core.first.call(null,gamma.ast.body.call(null,x))))], null);
}));
cljs.core._add_method.call(null,gamma.emit.emit.emit,new cljs.core.Keyword(null,"postfix","postfix",-571724593),(function (db,x){
var literal = new cljs.core.Keyword(null,"literal","literal",1664775605).cljs$core$IFn$_invoke$arity$1(gamma.ast.operators.call(null,gamma.ast.head.call(null,x)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),gamma.emit.emit.emit.call(null,db,db.call(null,cljs.core.first.call(null,gamma.ast.body.call(null,x)))),[cljs.core.str(literal),cljs.core.str(" ")].join('')], null);
}));
cljs.core._add_method.call(null,gamma.emit.emit.emit,new cljs.core.Keyword(null,"constructor","constructor",-1953928811),(function (db,x){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),gamma.emit.emit.emit.call(null,db,db.call(null,cljs.core.first.call(null,gamma.ast.body.call(null,x)))),"(",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),""], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nest","nest",-314993663),(2),cljs.core.interpose.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),",",new cljs.core.Keyword(null,"line","line",212345235)], null),cljs.core.map.call(null,(function (p1__5175_SHARP_){
return gamma.emit.emit.emit.call(null,db,db.call(null,p1__5175_SHARP_));
}),cljs.core.rest.call(null,gamma.ast.body.call(null,x))))], null),")"], null);
}));
cljs.core._add_method.call(null,gamma.emit.emit.emit,new cljs.core.Keyword(null,"conditional-choice","conditional-choice",1872771601),(function (db,x){
return null;
}));
cljs.core._add_method.call(null,gamma.emit.emit.emit,new cljs.core.Keyword(null,"aget","aget",-149474981),(function (db,x){
return [cljs.core.str(gamma.emit.emit.emit.call(null,cljs.core.first.call(null,gamma.ast.body.call(null,x)))),cljs.core.str("["),cljs.core.str(gamma.emit.emit.emit.call(null,cljs.core.second.call(null,gamma.ast.body.call(null,x)))),cljs.core.str("]")].join('');
}));
cljs.core._add_method.call(null,gamma.emit.emit.emit,new cljs.core.Keyword(null,"selector","selector",762528866),(function (db,x){
return [cljs.core.str(gamma.emit.emit.emit.call(null,cljs.core.first.call(null,gamma.ast.body.call(null,x)))),cljs.core.str("."),cljs.core.str(cljs.core.name.call(null,cljs.core.second.call(null,gamma.ast.body.call(null,x))))].join('');
}));

//# sourceMappingURL=operator.js.map