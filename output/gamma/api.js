// Compiled by ClojureScript 0.0-2913 {:target :nodejs}
goog.provide('gamma.api');
goog.require('cljs.core');
goog.require('gamma.ast');
gamma.api.vector_type = (function vector_type(l){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"member-type","member-type",645139088),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"length","length",588987862),l], null);
});
gamma.api.array_type = (function array_type(type,length){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"array","array",-2080713842),new cljs.core.Keyword(null,"member-type","member-type",645139088),type,new cljs.core.Keyword(null,"length","length",588987862),length], null);
});
gamma.api.gl_position = (function gl_position(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"name","name",1843675177),"gl_Position",new cljs.core.Keyword(null,"type","type",1174270348),gamma.api.vector_type.call(null,(4))], null);
});
gamma.api.gl_point_size = (function gl_point_size(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"name","name",1843675177),"gl_PointSize",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"float","float",-1732389368)], null);
});
gamma.api.attribute = (function attribute(name,type){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"storage","storage",1867247511),new cljs.core.Keyword(null,"attribute","attribute",-2074029119)], null);
});
gamma.api.uniform = (function uniform(name,type){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"storage","storage",1867247511),new cljs.core.Keyword(null,"uniform","uniform",496503348)], null);
});
gamma.api.variable = (function() {
var variable = null;
var variable__1 = (function (x){
return variable.call(null,x,null);
});
var variable__2 = (function (x,t){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"name","name",1843675177),x,new cljs.core.Keyword(null,"type","type",1174270348),t], null);
});
variable = function(x,t){
switch(arguments.length){
case 1:
return variable__1.call(this,x);
case 2:
return variable__2.call(this,x,t);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
variable.cljs$core$IFn$_invoke$arity$1 = variable__1;
variable.cljs$core$IFn$_invoke$arity$2 = variable__2;
return variable;
})()
;
gamma.api.if$ = (function if$(c,a,b){
var at = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(a);
var bt = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core._EQ_.call(null,at,bt)){
return cljs.core.assoc.call(null,gamma.ast.term.call(null,new cljs.core.Keyword(null,"if","if",-458814265),c,gamma.ast.term.call(null,new cljs.core.Keyword(null,"block","block",664686210),a),gamma.ast.term.call(null,new cljs.core.Keyword(null,"block","block",664686210),b)),new cljs.core.Keyword(null,"type","type",1174270348),at);
} else {
throw (new Error([cljs.core.str("Branches of if term are not of same type: "),cljs.core.str(at),cljs.core.str(", "),cljs.core.str(bt)].join('')));
}
});
gamma.api.infer_parameterized_type = (function infer_parameterized_type(rule,args){
var prule = new cljs.core.Keyword(null,"parameter","parameter",1978789597).cljs$core$IFn$_invoke$arity$1(rule);
var input_types = new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(rule);
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,input_types),cljs.core.count.call(null,args))){
return new cljs.core.Keyword(null,"fail","fail",1706214930);
} else {
var input = args;
var expected = input_types;
var parameter = null;
while(true){
if((cljs.core.empty_QMARK_.call(null,expected)) || (cljs.core.empty_QMARK_.call(null,input))){
if((cljs.core.empty_QMARK_.call(null,expected)) && (cljs.core.empty_QMARK_.call(null,input))){
if(cljs.core.truth_(prule.call(null,new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(rule)))){
return parameter;
} else {
return new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(rule);
}
} else {
return new cljs.core.Keyword(null,"fail","fail",1706214930);
}
} else {
var i = cljs.core.first.call(null,input);
var e = cljs.core.first.call(null,expected);
var p = prule.call(null,e);
if(cljs.core.truth_(p)){
if(cljs.core.truth_(parameter)){
if(cljs.core._EQ_.call(null,parameter,i)){
var G__7505 = cljs.core.next.call(null,input);
var G__7506 = cljs.core.next.call(null,expected);
var G__7507 = parameter;
input = G__7505;
expected = G__7506;
parameter = G__7507;
continue;
} else {
return new cljs.core.Keyword(null,"fail","fail",1706214930);
}
} else {
if(cljs.core.truth_(p.call(null,i))){
var G__7508 = cljs.core.next.call(null,input);
var G__7509 = cljs.core.next.call(null,expected);
var G__7510 = p.call(null,i);
input = G__7508;
expected = G__7509;
parameter = G__7510;
continue;
} else {
return new cljs.core.Keyword(null,"fail","fail",1706214930);
}
}
} else {
if(cljs.core._EQ_.call(null,i,e)){
var G__7511 = cljs.core.next.call(null,input);
var G__7512 = cljs.core.next.call(null,expected);
var G__7513 = parameter;
input = G__7511;
expected = G__7512;
parameter = G__7513;
continue;
} else {
return new cljs.core.Keyword(null,"fail","fail",1706214930);
}
}
}
break;
}
}
});
gamma.api.build_standard_function_term = (function build_standard_function_term(name,specs,args){
var t = cljs.core.apply.call(null,gamma.ast.term,name,args);
var temp__4124__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (t){
return (function (p1__7514_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930),p1__7514_SHARP_);
});})(t))
,cljs.core.map.call(null,((function (t){
return (function (p1__7515_SHARP_){
return gamma.api.infer_parameterized_type.call(null,p1__7515_SHARP_,cljs.core.map.call(null,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(t)));
});})(t))
,specs)));
if(cljs.core.truth_(temp__4124__auto__)){
var result = temp__4124__auto__;
return cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"type","type",1174270348),result);
} else {
throw (new Error(cljs.core.apply.call(null,cljs.core.str,"Wrong argument types for term ",cljs.core.name.call(null,name),": ",cljs.core.interpose.call(null," ,",cljs.core.map.call(null,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(t))))));
}
});
/**
* @param {...*} var_args
*/
gamma.api.ceil = (function() { 
var ceil__delegate = function (body__7270__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"ceil","ceil",-1824929952),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"ceil","ceil",-1824929952),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__7270__auto__);
};
var ceil = function (var_args){
var body__7270__auto__ = null;
if (arguments.length > 0) {
var G__7516__i = 0, G__7516__a = new Array(arguments.length -  0);
while (G__7516__i < G__7516__a.length) {G__7516__a[G__7516__i] = arguments[G__7516__i + 0]; ++G__7516__i;}
  body__7270__auto__ = new cljs.core.IndexedSeq(G__7516__a,0);
} 
return ceil__delegate.call(this,body__7270__auto__);};
ceil.cljs$lang$maxFixedArity = 0;
ceil.cljs$lang$applyTo = (function (arglist__7517){
var body__7270__auto__ = cljs.core.seq(arglist__7517);
return ceil__delegate(body__7270__auto__);
});
ceil.cljs$core$IFn$_invoke$arity$variadic = ceil__delegate;
return ceil;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.atan = (function() { 
var atan__delegate = function (body__7270__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"atan","atan",1627885634),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"atan","atan",1627885634),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"atan","atan",1627885634),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__7270__auto__);
};
var atan = function (var_args){
var body__7270__auto__ = null;
if (arguments.length > 0) {
var G__7518__i = 0, G__7518__a = new Array(arguments.length -  0);
while (G__7518__i < G__7518__a.length) {G__7518__a[G__7518__i] = arguments[G__7518__i + 0]; ++G__7518__i;}
  body__7270__auto__ = new cljs.core.IndexedSeq(G__7518__a,0);
} 
return atan__delegate.call(this,body__7270__auto__);};
atan.cljs$lang$maxFixedArity = 0;
atan.cljs$lang$applyTo = (function (arglist__7519){
var body__7270__auto__ = cljs.core.seq(arglist__7519);
return atan__delegate(body__7270__auto__);
});
atan.cljs$core$IFn$_invoke$arity$variadic = atan__delegate;
return atan;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.sign = (function() { 
var sign__delegate = function (body__7270__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"sign","sign",1261721667),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"sign","sign",1261721667),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__7270__auto__);
};
var sign = function (var_args){
var body__7270__auto__ = null;
if (arguments.length > 0) {
var G__7520__i = 0, G__7520__a = new Array(arguments.length -  0);
while (G__7520__i < G__7520__a.length) {G__7520__a[G__7520__i] = arguments[G__7520__i + 0]; ++G__7520__i;}
  body__7270__auto__ = new cljs.core.IndexedSeq(G__7520__a,0);
} 
return sign__delegate.call(this,body__7270__auto__);};
sign.cljs$lang$maxFixedArity = 0;
sign.cljs$lang$applyTo = (function (arglist__7521){
var body__7270__auto__ = cljs.core.seq(arglist__7521);
return sign__delegate(body__7270__auto__);
});
sign.cljs$core$IFn$_invoke$arity$variadic = sign__delegate;
return sign;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.cos = (function() { 
var cos__delegate = function (body__7270__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"cos","cos",1201758276),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"cos","cos",1201758276),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__7270__auto__);
};
var cos = function (var_args){
var body__7270__auto__ = null;
if (arguments.length > 0) {
var G__7522__i = 0, G__7522__a = new Array(arguments.length -  0);
while (G__7522__i < G__7522__a.length) {G__7522__a[G__7522__i] = arguments[G__7522__i + 0]; ++G__7522__i;}
  body__7270__auto__ = new cljs.core.IndexedSeq(G__7522__a,0);
} 
return cos__delegate.call(this,body__7270__auto__);};
cos.cljs$lang$maxFixedArity = 0;
cos.cljs$lang$applyTo = (function (arglist__7523){
var body__7270__auto__ = cljs.core.seq(arglist__7523);
return cos__delegate(body__7270__auto__);
});
cos.cljs$core$IFn$_invoke$arity$variadic = cos__delegate;
return cos;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.textureCubeLod = (function() { 
var textureCubeLod__delegate = function (body__7270__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"textureCubeLod","textureCubeLod",149096100),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"textureCubeLod","textureCubeLod",149096100),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sampler2D","sampler2D",-2107312644),new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__7270__auto__);
};
var textureCubeLod = function (var_args){
var body__7270__auto__ = null;
if (arguments.length > 0) {
var G__7524__i = 0, G__7524__a = new Array(arguments.length -  0);
while (G__7524__i < G__7524__a.length) {G__7524__a[G__7524__i] = arguments[G__7524__i + 0]; ++G__7524__i;}
  body__7270__auto__ = new cljs.core.IndexedSeq(G__7524__a,0);
} 
return textureCubeLod__delegate.call(this,body__7270__auto__);};
textureCubeLod.cljs$lang$maxFixedArity = 0;
textureCubeLod.cljs$lang$applyTo = (function (arglist__7525){
var body__7270__auto__ = cljs.core.seq(arglist__7525);
return textureCubeLod__delegate(body__7270__auto__);
});
textureCubeLod.cljs$core$IFn$_invoke$arity$variadic = textureCubeLod__delegate;
return textureCubeLod;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.tan = (function() { 
var tan__delegate = function (body__7270__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"tan","tan",1273609893),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tan","tan",1273609893),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__7270__auto__);
};
var tan = function (var_args){
var body__7270__auto__ = null;
if (arguments.length > 0) {
var G__7526__i = 0, G__7526__a = new Array(arguments.length -  0);
while (G__7526__i < G__7526__a.length) {G__7526__a[G__7526__i] = arguments[G__7526__i + 0]; ++G__7526__i;}
  body__7270__auto__ = new cljs.core.IndexedSeq(G__7526__a,0);
} 
return tan__delegate.call(this,body__7270__auto__);};
tan.cljs$lang$maxFixedArity = 0;
tan.cljs$lang$applyTo = (function (arglist__7527){
var body__7270__auto__ = cljs.core.seq(arglist__7527);
return tan__delegate(body__7270__auto__);
});
tan.cljs$core$IFn$_invoke$arity$variadic = tan__delegate;
return tan;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.sqrt = (function() { 
var sqrt__delegate = function (body__7270__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"sqrt","sqrt",-1270051929),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"sqrt","sqrt",-1270051929),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__7270__auto__);
};
var sqrt = function (var_args){
var body__7270__auto__ = null;
if (arguments.length > 0) {
var G__7528__i = 0, G__7528__a = new Array(arguments.length -  0);
while (G__7528__i < G__7528__a.length) {G__7528__a[G__7528__i] = arguments[G__7528__i + 0]; ++G__7528__i;}
  body__7270__auto__ = new cljs.core.IndexedSeq(G__7528__a,0);
} 
return sqrt__delegate.call(this,body__7270__auto__);};
sqrt.cljs$lang$maxFixedArity = 0;
sqrt.cljs$lang$applyTo = (function (arglist__7529){
var body__7270__auto__ = cljs.core.seq(arglist__7529);
return sqrt__delegate(body__7270__auto__);
});
sqrt.cljs$core$IFn$_invoke$arity$variadic = sqrt__delegate;
return sqrt;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.mod = (function() { 
var mod__delegate = function (body__7270__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"mod","mod",-130487320),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"mod","mod",-130487320),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__7270__auto__);
};
var mod = function (var_args){
var body__7270__auto__ = null;
if (arguments.length > 0) {
var G__7530__i = 0, G__7530__a = new Array(arguments.length -  0);
while (G__7530__i < G__7530__a.length) {G__7530__a[G__7530__i] = arguments[G__7530__i + 0]; ++G__7530__i;}
  body__7270__auto__ = new cljs.core.IndexedSeq(G__7530__a,0);
} 
return mod__delegate.call(this,body__7270__auto__);};
mod.cljs$lang$maxFixedArity = 0;
mod.cljs$lang$applyTo = (function (arglist__7531){
var body__7270__auto__ = cljs.core.seq(arglist__7531);
return mod__delegate(body__7270__auto__);
});
mod.cljs$core$IFn$_invoke$arity$variadic = mod__delegate;
return mod;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.exp = (function() { 
var exp__delegate = function (body__7270__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"exp","exp",-261706262),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"exp","exp",-261706262),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__7270__auto__);
};
var exp = function (var_args){
var body__7270__auto__ = null;
if (arguments.length > 0) {
var G__7532__i = 0, G__7532__a = new Array(arguments.length -  0);
while (G__7532__i < G__7532__a.length) {G__7532__a[G__7532__i] = arguments[G__7532__i + 0]; ++G__7532__i;}
  body__7270__auto__ = new cljs.core.IndexedSeq(G__7532__a,0);
} 
return exp__delegate.call(this,body__7270__auto__);};
exp.cljs$lang$maxFixedArity = 0;
exp.cljs$lang$applyTo = (function (arglist__7533){
var body__7270__auto__ = cljs.core.seq(arglist__7533);
return exp__delegate(body__7270__auto__);
});
exp.cljs$core$IFn$_invoke$arity$variadic = exp__delegate;
return exp;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.texture2DProjLod = (function() { 
var texture2DProjLod__delegate = function (body__7270__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"texture2DProjLod","texture2DProjLod",-1483280499),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"texture2DProjLod","texture2DProjLod",-1483280499),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sampler2D","sampler2D",-2107312644),new cljs.core.Keyword(null,"vec3","vec3",1116680488),new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"texture2DProjLod","texture2DProjLod",-1483280499),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sampler2D","sampler2D",-2107312644),new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__7270__auto__);
};
var texture2DProjLod = function (var_args){
var body__7270__auto__ = null;
if (arguments.length > 0) {
var G__7534__i = 0, G__7534__a = new Array(arguments.length -  0);
while (G__7534__i < G__7534__a.length) {G__7534__a[G__7534__i] = arguments[G__7534__i + 0]; ++G__7534__i;}
  body__7270__auto__ = new cljs.core.IndexedSeq(G__7534__a,0);
} 
return texture2DProjLod__delegate.call(this,body__7270__auto__);};
texture2DProjLod.cljs$lang$maxFixedArity = 0;
texture2DProjLod.cljs$lang$applyTo = (function (arglist__7535){
var body__7270__auto__ = cljs.core.seq(arglist__7535);
return texture2DProjLod__delegate(body__7270__auto__);
});
texture2DProjLod.cljs$core$IFn$_invoke$arity$variadic = texture2DProjLod__delegate;
return texture2DProjLod;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.log2 = (function() { 
var log2__delegate = function (body__7270__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"log2","log2",803778830),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"log2","log2",803778830),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__7270__auto__);
};
var log2 = function (var_args){
var body__7270__auto__ = null;
if (arguments.length > 0) {
var G__7536__i = 0, G__7536__a = new Array(arguments.length -  0);
while (G__7536__i < G__7536__a.length) {G__7536__a[G__7536__i] = arguments[G__7536__i + 0]; ++G__7536__i;}
  body__7270__auto__ = new cljs.core.IndexedSeq(G__7536__a,0);
} 
return log2__delegate.call(this,body__7270__auto__);};
log2.cljs$lang$maxFixedArity = 0;
log2.cljs$lang$applyTo = (function (arglist__7537){
var body__7270__auto__ = cljs.core.seq(arglist__7537);
return log2__delegate(body__7270__auto__);
});
log2.cljs$core$IFn$_invoke$arity$variadic = log2__delegate;
return log2;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.texture2D = (function() { 
var texture2D__delegate = function (body__7270__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"texture2D","texture2D",-252500594),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"texture2D","texture2D",-252500594),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sampler2D","sampler2D",-2107312644),new cljs.core.Keyword(null,"vec2","vec2",-762258640),new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"texture2D","texture2D",-252500594),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sampler2D","sampler2D",-2107312644),new cljs.core.Keyword(null,"vec2","vec2",-762258640)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__7270__auto__);
};
var texture2D = function (var_args){
var body__7270__auto__ = null;
if (arguments.length > 0) {
var G__7538__i = 0, G__7538__a = new Array(arguments.length -  0);
while (G__7538__i < G__7538__a.length) {G__7538__a[G__7538__i] = arguments[G__7538__i + 0]; ++G__7538__i;}
  body__7270__auto__ = new cljs.core.IndexedSeq(G__7538__a,0);
} 
return texture2D__delegate.call(this,body__7270__auto__);};
texture2D.cljs$lang$maxFixedArity = 0;
texture2D.cljs$lang$applyTo = (function (arglist__7539){
var body__7270__auto__ = cljs.core.seq(arglist__7539);
return texture2D__delegate(body__7270__auto__);
});
texture2D.cljs$core$IFn$_invoke$arity$variadic = texture2D__delegate;
return texture2D;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.asin = (function() { 
var asin__delegate = function (body__7270__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"asin","asin",1750305199),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"asin","asin",1750305199),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__7270__auto__);
};
var asin = function (var_args){
var body__7270__auto__ = null;
if (arguments.length > 0) {
var G__7540__i = 0, G__7540__a = new Array(arguments.length -  0);
while (G__7540__i < G__7540__a.length) {G__7540__a[G__7540__i] = arguments[G__7540__i + 0]; ++G__7540__i;}
  body__7270__auto__ = new cljs.core.IndexedSeq(G__7540__a,0);
} 
return asin__delegate.call(this,body__7270__auto__);};
asin.cljs$lang$maxFixedArity = 0;
asin.cljs$lang$applyTo = (function (arglist__7541){
var body__7270__auto__ = cljs.core.seq(arglist__7541);
return asin__delegate(body__7270__auto__);
});
asin.cljs$core$IFn$_invoke$arity$variadic = asin__delegate;
return asin;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.textureCube = (function() { 
var textureCube__delegate = function (body__7270__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"textureCube","textureCube",-82179345),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"textureCube","textureCube",-82179345),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samplerCube","samplerCube",-734605291),new cljs.core.Keyword(null,"vec3","vec3",1116680488),new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"textureCube","textureCube",-82179345),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samplerCube","samplerCube",-734605291),new cljs.core.Keyword(null,"vec3","vec3",1116680488)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__7270__auto__);
};
var textureCube = function (var_args){
var body__7270__auto__ = null;
if (arguments.length > 0) {
var G__7542__i = 0, G__7542__a = new Array(arguments.length -  0);
while (G__7542__i < G__7542__a.length) {G__7542__a[G__7542__i] = arguments[G__7542__i + 0]; ++G__7542__i;}
  body__7270__auto__ = new cljs.core.IndexedSeq(G__7542__a,0);
} 
return textureCube__delegate.call(this,body__7270__auto__);};
textureCube.cljs$lang$maxFixedArity = 0;
textureCube.cljs$lang$applyTo = (function (arglist__7543){
var body__7270__auto__ = cljs.core.seq(arglist__7543);
return textureCube__delegate(body__7270__auto__);
});
textureCube.cljs$core$IFn$_invoke$arity$variadic = textureCube__delegate;
return textureCube;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.power = (function() { 
var power__delegate = function (body__7270__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__7270__auto__);
};
var power = function (var_args){
var body__7270__auto__ = null;
if (arguments.length > 0) {
var G__7544__i = 0, G__7544__a = new Array(arguments.length -  0);
while (G__7544__i < G__7544__a.length) {G__7544__a[G__7544__i] = arguments[G__7544__i + 0]; ++G__7544__i;}
  body__7270__auto__ = new cljs.core.IndexedSeq(G__7544__a,0);
} 
return power__delegate.call(this,body__7270__auto__);};
power.cljs$lang$maxFixedArity = 0;
power.cljs$lang$applyTo = (function (arglist__7545){
var body__7270__auto__ = cljs.core.seq(arglist__7545);
return power__delegate(body__7270__auto__);
});
power.cljs$core$IFn$_invoke$arity$variadic = power__delegate;
return power;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.refract = (function() { 
var refract__delegate = function (body__7270__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"refract","refract",-1502353966),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"refract","refract",-1502353966),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__7270__auto__);
};
var refract = function (var_args){
var body__7270__auto__ = null;
if (arguments.length > 0) {
var G__7546__i = 0, G__7546__a = new Array(arguments.length -  0);
while (G__7546__i < G__7546__a.length) {G__7546__a[G__7546__i] = arguments[G__7546__i + 0]; ++G__7546__i;}
  body__7270__auto__ = new cljs.core.IndexedSeq(G__7546__a,0);
} 
return refract__delegate.call(this,body__7270__auto__);};
refract.cljs$lang$maxFixedArity = 0;
refract.cljs$lang$applyTo = (function (arglist__7547){
var body__7270__auto__ = cljs.core.seq(arglist__7547);
return refract__delegate(body__7270__auto__);
});
refract.cljs$core$IFn$_invoke$arity$variadic = refract__delegate;
return refract;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.texture2DLod = (function() { 
var texture2DLod__delegate = function (body__7270__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"texture2DLod","texture2DLod",-1274741294),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"texture2DLod","texture2DLod",-1274741294),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sampler2D","sampler2D",-2107312644),new cljs.core.Keyword(null,"vec2","vec2",-762258640),new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__7270__auto__);
};
var texture2DLod = function (var_args){
var body__7270__auto__ = null;
if (arguments.length > 0) {
var G__7548__i = 0, G__7548__a = new Array(arguments.length -  0);
while (G__7548__i < G__7548__a.length) {G__7548__a[G__7548__i] = arguments[G__7548__i + 0]; ++G__7548__i;}
  body__7270__auto__ = new cljs.core.IndexedSeq(G__7548__a,0);
} 
return texture2DLod__delegate.call(this,body__7270__auto__);};
texture2DLod.cljs$lang$maxFixedArity = 0;
texture2DLod.cljs$lang$applyTo = (function (arglist__7549){
var body__7270__auto__ = cljs.core.seq(arglist__7549);
return texture2DLod__delegate(body__7270__auto__);
});
texture2DLod.cljs$core$IFn$_invoke$arity$variadic = texture2DLod__delegate;
return texture2DLod;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.exp2 = (function() { 
var exp2__delegate = function (body__7270__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"exp2","exp2",-1037021901),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"exp2","exp2",-1037021901),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__7270__auto__);
};
var exp2 = function (var_args){
var body__7270__auto__ = null;
if (arguments.length > 0) {
var G__7550__i = 0, G__7550__a = new Array(arguments.length -  0);
while (G__7550__i < G__7550__a.length) {G__7550__a[G__7550__i] = arguments[G__7550__i + 0]; ++G__7550__i;}
  body__7270__auto__ = new cljs.core.IndexedSeq(G__7550__a,0);
} 
return exp2__delegate.call(this,body__7270__auto__);};
exp2.cljs$lang$maxFixedArity = 0;
exp2.cljs$lang$applyTo = (function (arglist__7551){
var body__7270__auto__ = cljs.core.seq(arglist__7551);
return exp2__delegate(body__7270__auto__);
});
exp2.cljs$core$IFn$_invoke$arity$variadic = exp2__delegate;
return exp2;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.smoothstep = (function() { 
var smoothstep__delegate = function (body__7270__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"smoothstep","smoothstep",968032787),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"smoothstep","smoothstep",968032787),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"smoothstep","smoothstep",968032787),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__7270__auto__);
};
var smoothstep = function (var_args){
var body__7270__auto__ = null;
if (arguments.length > 0) {
var G__7552__i = 0, G__7552__a = new Array(arguments.length -  0);
while (G__7552__i < G__7552__a.length) {G__7552__a[G__7552__i] = arguments[G__7552__i + 0]; ++G__7552__i;}
  body__7270__auto__ = new cljs.core.IndexedSeq(G__7552__a,0);
} 
return smoothstep__delegate.call(this,body__7270__auto__);};
smoothstep.cljs$lang$maxFixedArity = 0;
smoothstep.cljs$lang$applyTo = (function (arglist__7553){
var body__7270__auto__ = cljs.core.seq(arglist__7553);
return smoothstep__delegate(body__7270__auto__);
});
smoothstep.cljs$core$IFn$_invoke$arity$variadic = smoothstep__delegate;
return smoothstep;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.abs = (function() { 
var abs__delegate = function (body__7270__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"abs","abs",-246026477),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"abs","abs",-246026477),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__7270__auto__);
};
var abs = function (var_args){
var body__7270__auto__ = null;
if (arguments.length > 0) {
var G__7554__i = 0, G__7554__a = new Array(arguments.length -  0);
while (G__7554__i < G__7554__a.length) {G__7554__a[G__7554__i] = arguments[G__7554__i + 0]; ++G__7554__i;}
  body__7270__auto__ = new cljs.core.IndexedSeq(G__7554__a,0);
} 
return abs__delegate.call(this,body__7270__auto__);};
abs.cljs$lang$maxFixedArity = 0;
abs.cljs$lang$applyTo = (function (arglist__7555){
var body__7270__auto__ = cljs.core.seq(arglist__7555);
return abs__delegate(body__7270__auto__);
});
abs.cljs$core$IFn$_invoke$arity$variadic = abs__delegate;
return abs;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.max = (function() { 
var max__delegate = function (body__7270__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__7270__auto__);
};
var max = function (var_args){
var body__7270__auto__ = null;
if (arguments.length > 0) {
var G__7556__i = 0, G__7556__a = new Array(arguments.length -  0);
while (G__7556__i < G__7556__a.length) {G__7556__a[G__7556__i] = arguments[G__7556__i + 0]; ++G__7556__i;}
  body__7270__auto__ = new cljs.core.IndexedSeq(G__7556__a,0);
} 
return max__delegate.call(this,body__7270__auto__);};
max.cljs$lang$maxFixedArity = 0;
max.cljs$lang$applyTo = (function (arglist__7557){
var body__7270__auto__ = cljs.core.seq(arglist__7557);
return max__delegate(body__7270__auto__);
});
max.cljs$core$IFn$_invoke$arity$variadic = max__delegate;
return max;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.inversesqrt = (function() { 
var inversesqrt__delegate = function (body__7270__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"inversesqrt","inversesqrt",-1232448652),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"inversesqrt","inversesqrt",-1232448652),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__7270__auto__);
};
var inversesqrt = function (var_args){
var body__7270__auto__ = null;
if (arguments.length > 0) {
var G__7558__i = 0, G__7558__a = new Array(arguments.length -  0);
while (G__7558__i < G__7558__a.length) {G__7558__a[G__7558__i] = arguments[G__7558__i + 0]; ++G__7558__i;}
  body__7270__auto__ = new cljs.core.IndexedSeq(G__7558__a,0);
} 
return inversesqrt__delegate.call(this,body__7270__auto__);};
inversesqrt.cljs$lang$maxFixedArity = 0;
inversesqrt.cljs$lang$applyTo = (function (arglist__7559){
var body__7270__auto__ = cljs.core.seq(arglist__7559);
return inversesqrt__delegate(body__7270__auto__);
});
inversesqrt.cljs$core$IFn$_invoke$arity$variadic = inversesqrt__delegate;
return inversesqrt;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.length = (function() { 
var length__delegate = function (body__7270__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"length","length",588987862),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"length","length",588987862),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__7270__auto__);
};
var length = function (var_args){
var body__7270__auto__ = null;
if (arguments.length > 0) {
var G__7560__i = 0, G__7560__a = new Array(arguments.length -  0);
while (G__7560__i < G__7560__a.length) {G__7560__a[G__7560__i] = arguments[G__7560__i + 0]; ++G__7560__i;}
  body__7270__auto__ = new cljs.core.IndexedSeq(G__7560__a,0);
} 
return length__delegate.call(this,body__7270__auto__);};
length.cljs$lang$maxFixedArity = 0;
length.cljs$lang$applyTo = (function (arglist__7561){
var body__7270__auto__ = cljs.core.seq(arglist__7561);
return length__delegate(body__7270__auto__);
});
length.cljs$core$IFn$_invoke$arity$variadic = length__delegate;
return length;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.sin = (function() { 
var sin__delegate = function (body__7270__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"sin","sin",80907862),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"sin","sin",80907862),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__7270__auto__);
};
var sin = function (var_args){
var body__7270__auto__ = null;
if (arguments.length > 0) {
var G__7562__i = 0, G__7562__a = new Array(arguments.length -  0);
while (G__7562__i < G__7562__a.length) {G__7562__a[G__7562__i] = arguments[G__7562__i + 0]; ++G__7562__i;}
  body__7270__auto__ = new cljs.core.IndexedSeq(G__7562__a,0);
} 
return sin__delegate.call(this,body__7270__auto__);};
sin.cljs$lang$maxFixedArity = 0;
sin.cljs$lang$applyTo = (function (arglist__7563){
var body__7270__auto__ = cljs.core.seq(arglist__7563);
return sin__delegate(body__7270__auto__);
});
sin.cljs$core$IFn$_invoke$arity$variadic = sin__delegate;
return sin;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.texture2DProj = (function() { 
var texture2DProj__delegate = function (body__7270__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"texture2DProj","texture2DProj",1965198007),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"texture2DProj","texture2DProj",1965198007),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sampler2D","sampler2D",-2107312644),new cljs.core.Keyword(null,"vec3","vec3",1116680488),new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"texture2DProj","texture2DProj",1965198007),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sampler2D","sampler2D",-2107312644),new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"texture2DProj","texture2DProj",1965198007),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sampler2D","sampler2D",-2107312644),new cljs.core.Keyword(null,"vec3","vec3",1116680488)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"texture2DProj","texture2DProj",1965198007),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sampler2D","sampler2D",-2107312644),new cljs.core.Keyword(null,"coord","coord",-1453656639)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__7270__auto__);
};
var texture2DProj = function (var_args){
var body__7270__auto__ = null;
if (arguments.length > 0) {
var G__7564__i = 0, G__7564__a = new Array(arguments.length -  0);
while (G__7564__i < G__7564__a.length) {G__7564__a[G__7564__i] = arguments[G__7564__i + 0]; ++G__7564__i;}
  body__7270__auto__ = new cljs.core.IndexedSeq(G__7564__a,0);
} 
return texture2DProj__delegate.call(this,body__7270__auto__);};
texture2DProj.cljs$lang$maxFixedArity = 0;
texture2DProj.cljs$lang$applyTo = (function (arglist__7565){
var body__7270__auto__ = cljs.core.seq(arglist__7565);
return texture2DProj__delegate(body__7270__auto__);
});
texture2DProj.cljs$core$IFn$_invoke$arity$variadic = texture2DProj__delegate;
return texture2DProj;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.faceforward = (function() { 
var faceforward__delegate = function (body__7270__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"faceforward","faceforward",840660504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"faceforward","faceforward",840660504),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__7270__auto__);
};
var faceforward = function (var_args){
var body__7270__auto__ = null;
if (arguments.length > 0) {
var G__7566__i = 0, G__7566__a = new Array(arguments.length -  0);
while (G__7566__i < G__7566__a.length) {G__7566__a[G__7566__i] = arguments[G__7566__i + 0]; ++G__7566__i;}
  body__7270__auto__ = new cljs.core.IndexedSeq(G__7566__a,0);
} 
return faceforward__delegate.call(this,body__7270__auto__);};
faceforward.cljs$lang$maxFixedArity = 0;
faceforward.cljs$lang$applyTo = (function (arglist__7567){
var body__7270__auto__ = cljs.core.seq(arglist__7567);
return faceforward__delegate(body__7270__auto__);
});
faceforward.cljs$core$IFn$_invoke$arity$variadic = faceforward__delegate;
return faceforward;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.dot = (function() { 
var dot__delegate = function (body__7270__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"dot","dot",1442709401),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"dot","dot",1442709401),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__7270__auto__);
};
var dot = function (var_args){
var body__7270__auto__ = null;
if (arguments.length > 0) {
var G__7568__i = 0, G__7568__a = new Array(arguments.length -  0);
while (G__7568__i < G__7568__a.length) {G__7568__a[G__7568__i] = arguments[G__7568__i + 0]; ++G__7568__i;}
  body__7270__auto__ = new cljs.core.IndexedSeq(G__7568__a,0);
} 
return dot__delegate.call(this,body__7270__auto__);};
dot.cljs$lang$maxFixedArity = 0;
dot.cljs$lang$applyTo = (function (arglist__7569){
var body__7270__auto__ = cljs.core.seq(arglist__7569);
return dot__delegate(body__7270__auto__);
});
dot.cljs$core$IFn$_invoke$arity$variadic = dot__delegate;
return dot;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.distance = (function() { 
var distance__delegate = function (body__7270__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"distance","distance",-1671893894),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"distance","distance",-1671893894),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__7270__auto__);
};
var distance = function (var_args){
var body__7270__auto__ = null;
if (arguments.length > 0) {
var G__7570__i = 0, G__7570__a = new Array(arguments.length -  0);
while (G__7570__i < G__7570__a.length) {G__7570__a[G__7570__i] = arguments[G__7570__i + 0]; ++G__7570__i;}
  body__7270__auto__ = new cljs.core.IndexedSeq(G__7570__a,0);
} 
return distance__delegate.call(this,body__7270__auto__);};
distance.cljs$lang$maxFixedArity = 0;
distance.cljs$lang$applyTo = (function (arglist__7571){
var body__7270__auto__ = cljs.core.seq(arglist__7571);
return distance__delegate(body__7270__auto__);
});
distance.cljs$core$IFn$_invoke$arity$variadic = distance__delegate;
return distance;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.fract = (function() { 
var fract__delegate = function (body__7270__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"fract","fract",-2061728070),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"fract","fract",-2061728070),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__7270__auto__);
};
var fract = function (var_args){
var body__7270__auto__ = null;
if (arguments.length > 0) {
var G__7572__i = 0, G__7572__a = new Array(arguments.length -  0);
while (G__7572__i < G__7572__a.length) {G__7572__a[G__7572__i] = arguments[G__7572__i + 0]; ++G__7572__i;}
  body__7270__auto__ = new cljs.core.IndexedSeq(G__7572__a,0);
} 
return fract__delegate.call(this,body__7270__auto__);};
fract.cljs$lang$maxFixedArity = 0;
fract.cljs$lang$applyTo = (function (arglist__7573){
var body__7270__auto__ = cljs.core.seq(arglist__7573);
return fract__delegate(body__7270__auto__);
});
fract.cljs$core$IFn$_invoke$arity$variadic = fract__delegate;
return fract;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.clamp = (function() { 
var clamp__delegate = function (body__7270__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"clamp","clamp",1803814940),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"clamp","clamp",1803814940),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"clamp","clamp",1803814940),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__7270__auto__);
};
var clamp = function (var_args){
var body__7270__auto__ = null;
if (arguments.length > 0) {
var G__7574__i = 0, G__7574__a = new Array(arguments.length -  0);
while (G__7574__i < G__7574__a.length) {G__7574__a[G__7574__i] = arguments[G__7574__i + 0]; ++G__7574__i;}
  body__7270__auto__ = new cljs.core.IndexedSeq(G__7574__a,0);
} 
return clamp__delegate.call(this,body__7270__auto__);};
clamp.cljs$lang$maxFixedArity = 0;
clamp.cljs$lang$applyTo = (function (arglist__7575){
var body__7270__auto__ = cljs.core.seq(arglist__7575);
return clamp__delegate(body__7270__auto__);
});
clamp.cljs$core$IFn$_invoke$arity$variadic = clamp__delegate;
return clamp;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.radians = (function() { 
var radians__delegate = function (body__7270__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"radians","radians",1835725084),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"radians","radians",1835725084),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__7270__auto__);
};
var radians = function (var_args){
var body__7270__auto__ = null;
if (arguments.length > 0) {
var G__7576__i = 0, G__7576__a = new Array(arguments.length -  0);
while (G__7576__i < G__7576__a.length) {G__7576__a[G__7576__i] = arguments[G__7576__i + 0]; ++G__7576__i;}
  body__7270__auto__ = new cljs.core.IndexedSeq(G__7576__a,0);
} 
return radians__delegate.call(this,body__7270__auto__);};
radians.cljs$lang$maxFixedArity = 0;
radians.cljs$lang$applyTo = (function (arglist__7577){
var body__7270__auto__ = cljs.core.seq(arglist__7577);
return radians__delegate(body__7270__auto__);
});
radians.cljs$core$IFn$_invoke$arity$variadic = radians__delegate;
return radians;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.degrees = (function() { 
var degrees__delegate = function (body__7270__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"degrees","degrees",2015169884),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"degrees","degrees",2015169884),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__7270__auto__);
};
var degrees = function (var_args){
var body__7270__auto__ = null;
if (arguments.length > 0) {
var G__7578__i = 0, G__7578__a = new Array(arguments.length -  0);
while (G__7578__i < G__7578__a.length) {G__7578__a[G__7578__i] = arguments[G__7578__i + 0]; ++G__7578__i;}
  body__7270__auto__ = new cljs.core.IndexedSeq(G__7578__a,0);
} 
return degrees__delegate.call(this,body__7270__auto__);};
degrees.cljs$lang$maxFixedArity = 0;
degrees.cljs$lang$applyTo = (function (arglist__7579){
var body__7270__auto__ = cljs.core.seq(arglist__7579);
return degrees__delegate(body__7270__auto__);
});
degrees.cljs$core$IFn$_invoke$arity$variadic = degrees__delegate;
return degrees;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.acos = (function() { 
var acos__delegate = function (body__7270__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"acos","acos",-1286789764),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"acos","acos",-1286789764),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__7270__auto__);
};
var acos = function (var_args){
var body__7270__auto__ = null;
if (arguments.length > 0) {
var G__7580__i = 0, G__7580__a = new Array(arguments.length -  0);
while (G__7580__i < G__7580__a.length) {G__7580__a[G__7580__i] = arguments[G__7580__i + 0]; ++G__7580__i;}
  body__7270__auto__ = new cljs.core.IndexedSeq(G__7580__a,0);
} 
return acos__delegate.call(this,body__7270__auto__);};
acos.cljs$lang$maxFixedArity = 0;
acos.cljs$lang$applyTo = (function (arglist__7581){
var body__7270__auto__ = cljs.core.seq(arglist__7581);
return acos__delegate(body__7270__auto__);
});
acos.cljs$core$IFn$_invoke$arity$variadic = acos__delegate;
return acos;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.step = (function() { 
var step__delegate = function (body__7270__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__7270__auto__);
};
var step = function (var_args){
var body__7270__auto__ = null;
if (arguments.length > 0) {
var G__7582__i = 0, G__7582__a = new Array(arguments.length -  0);
while (G__7582__i < G__7582__a.length) {G__7582__a[G__7582__i] = arguments[G__7582__i + 0]; ++G__7582__i;}
  body__7270__auto__ = new cljs.core.IndexedSeq(G__7582__a,0);
} 
return step__delegate.call(this,body__7270__auto__);};
step.cljs$lang$maxFixedArity = 0;
step.cljs$lang$applyTo = (function (arglist__7583){
var body__7270__auto__ = cljs.core.seq(arglist__7583);
return step__delegate(body__7270__auto__);
});
step.cljs$core$IFn$_invoke$arity$variadic = step__delegate;
return step;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.log = (function() { 
var log__delegate = function (body__7270__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__7270__auto__);
};
var log = function (var_args){
var body__7270__auto__ = null;
if (arguments.length > 0) {
var G__7584__i = 0, G__7584__a = new Array(arguments.length -  0);
while (G__7584__i < G__7584__a.length) {G__7584__a[G__7584__i] = arguments[G__7584__i + 0]; ++G__7584__i;}
  body__7270__auto__ = new cljs.core.IndexedSeq(G__7584__a,0);
} 
return log__delegate.call(this,body__7270__auto__);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__7585){
var body__7270__auto__ = cljs.core.seq(arglist__7585);
return log__delegate(body__7270__auto__);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.normalize = (function() { 
var normalize__delegate = function (body__7270__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"normalize","normalize",-1904390051),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"normalize","normalize",-1904390051),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__7270__auto__);
};
var normalize = function (var_args){
var body__7270__auto__ = null;
if (arguments.length > 0) {
var G__7586__i = 0, G__7586__a = new Array(arguments.length -  0);
while (G__7586__i < G__7586__a.length) {G__7586__a[G__7586__i] = arguments[G__7586__i + 0]; ++G__7586__i;}
  body__7270__auto__ = new cljs.core.IndexedSeq(G__7586__a,0);
} 
return normalize__delegate.call(this,body__7270__auto__);};
normalize.cljs$lang$maxFixedArity = 0;
normalize.cljs$lang$applyTo = (function (arglist__7587){
var body__7270__auto__ = cljs.core.seq(arglist__7587);
return normalize__delegate(body__7270__auto__);
});
normalize.cljs$core$IFn$_invoke$arity$variadic = normalize__delegate;
return normalize;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.floor = (function() { 
var floor__delegate = function (body__7270__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__7270__auto__);
};
var floor = function (var_args){
var body__7270__auto__ = null;
if (arguments.length > 0) {
var G__7588__i = 0, G__7588__a = new Array(arguments.length -  0);
while (G__7588__i < G__7588__a.length) {G__7588__a[G__7588__i] = arguments[G__7588__i + 0]; ++G__7588__i;}
  body__7270__auto__ = new cljs.core.IndexedSeq(G__7588__a,0);
} 
return floor__delegate.call(this,body__7270__auto__);};
floor.cljs$lang$maxFixedArity = 0;
floor.cljs$lang$applyTo = (function (arglist__7589){
var body__7270__auto__ = cljs.core.seq(arglist__7589);
return floor__delegate(body__7270__auto__);
});
floor.cljs$core$IFn$_invoke$arity$variadic = floor__delegate;
return floor;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.cross = (function() { 
var cross__delegate = function (body__7270__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"cross","cross",194557789),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"cross","cross",194557789),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),new cljs.core.Keyword(null,"vec3","vec3",1116680488)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"vec3","vec3",1116680488),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__7270__auto__);
};
var cross = function (var_args){
var body__7270__auto__ = null;
if (arguments.length > 0) {
var G__7590__i = 0, G__7590__a = new Array(arguments.length -  0);
while (G__7590__i < G__7590__a.length) {G__7590__a[G__7590__i] = arguments[G__7590__i + 0]; ++G__7590__i;}
  body__7270__auto__ = new cljs.core.IndexedSeq(G__7590__a,0);
} 
return cross__delegate.call(this,body__7270__auto__);};
cross.cljs$lang$maxFixedArity = 0;
cross.cljs$lang$applyTo = (function (arglist__7591){
var body__7270__auto__ = cljs.core.seq(arglist__7591);
return cross__delegate(body__7270__auto__);
});
cross.cljs$core$IFn$_invoke$arity$variadic = cross__delegate;
return cross;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.reflect = (function() { 
var reflect__delegate = function (body__7270__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"reflect","reflect",-2113821122),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"reflect","reflect",-2113821122),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__7270__auto__);
};
var reflect = function (var_args){
var body__7270__auto__ = null;
if (arguments.length > 0) {
var G__7592__i = 0, G__7592__a = new Array(arguments.length -  0);
while (G__7592__i < G__7592__a.length) {G__7592__a[G__7592__i] = arguments[G__7592__i + 0]; ++G__7592__i;}
  body__7270__auto__ = new cljs.core.IndexedSeq(G__7592__a,0);
} 
return reflect__delegate.call(this,body__7270__auto__);};
reflect.cljs$lang$maxFixedArity = 0;
reflect.cljs$lang$applyTo = (function (arglist__7593){
var body__7270__auto__ = cljs.core.seq(arglist__7593);
return reflect__delegate(body__7270__auto__);
});
reflect.cljs$core$IFn$_invoke$arity$variadic = reflect__delegate;
return reflect;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.selector = (function() { 
var selector__delegate = function (body__7268__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"selector","selector",762528866),body__7268__auto__);
};
var selector = function (var_args){
var body__7268__auto__ = null;
if (arguments.length > 0) {
var G__7594__i = 0, G__7594__a = new Array(arguments.length -  0);
while (G__7594__i < G__7594__a.length) {G__7594__a[G__7594__i] = arguments[G__7594__i + 0]; ++G__7594__i;}
  body__7268__auto__ = new cljs.core.IndexedSeq(G__7594__a,0);
} 
return selector__delegate.call(this,body__7268__auto__);};
selector.cljs$lang$maxFixedArity = 0;
selector.cljs$lang$applyTo = (function (arglist__7595){
var body__7268__auto__ = cljs.core.seq(arglist__7595);
return selector__delegate(body__7268__auto__);
});
selector.cljs$core$IFn$_invoke$arity$variadic = selector__delegate;
return selector;
})()
;

/**
* @param {...*} var_args
*/
gamma.api._LT__EQ_ = (function() { 
var _LT__EQ___delegate = function (body__7268__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"<=","<=",-395636158),body__7268__auto__);
};
var _LT__EQ_ = function (var_args){
var body__7268__auto__ = null;
if (arguments.length > 0) {
var G__7596__i = 0, G__7596__a = new Array(arguments.length -  0);
while (G__7596__i < G__7596__a.length) {G__7596__a[G__7596__i] = arguments[G__7596__i + 0]; ++G__7596__i;}
  body__7268__auto__ = new cljs.core.IndexedSeq(G__7596__a,0);
} 
return _LT__EQ___delegate.call(this,body__7268__auto__);};
_LT__EQ_.cljs$lang$maxFixedArity = 0;
_LT__EQ_.cljs$lang$applyTo = (function (arglist__7597){
var body__7268__auto__ = cljs.core.seq(arglist__7597);
return _LT__EQ___delegate(body__7268__auto__);
});
_LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = _LT__EQ___delegate;
return _LT__EQ_;
})()
;

/**
* @param {...*} var_args
*/
gamma.api._STAR_ = (function() { 
var _STAR___delegate = function (body__7268__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"*","*",-1294732318),body__7268__auto__);
};
var _STAR_ = function (var_args){
var body__7268__auto__ = null;
if (arguments.length > 0) {
var G__7598__i = 0, G__7598__a = new Array(arguments.length -  0);
while (G__7598__i < G__7598__a.length) {G__7598__a[G__7598__i] = arguments[G__7598__i + 0]; ++G__7598__i;}
  body__7268__auto__ = new cljs.core.IndexedSeq(G__7598__a,0);
} 
return _STAR___delegate.call(this,body__7268__auto__);};
_STAR_.cljs$lang$maxFixedArity = 0;
_STAR_.cljs$lang$applyTo = (function (arglist__7599){
var body__7268__auto__ = cljs.core.seq(arglist__7599);
return _STAR___delegate(body__7268__auto__);
});
_STAR_.cljs$core$IFn$_invoke$arity$variadic = _STAR___delegate;
return _STAR_;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.increment = (function() { 
var increment__delegate = function (body__7268__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"increment","increment",-1558831484),body__7268__auto__);
};
var increment = function (var_args){
var body__7268__auto__ = null;
if (arguments.length > 0) {
var G__7600__i = 0, G__7600__a = new Array(arguments.length -  0);
while (G__7600__i < G__7600__a.length) {G__7600__a[G__7600__i] = arguments[G__7600__i + 0]; ++G__7600__i;}
  body__7268__auto__ = new cljs.core.IndexedSeq(G__7600__a,0);
} 
return increment__delegate.call(this,body__7268__auto__);};
increment.cljs$lang$maxFixedArity = 0;
increment.cljs$lang$applyTo = (function (arglist__7601){
var body__7268__auto__ = cljs.core.seq(arglist__7601);
return increment__delegate(body__7268__auto__);
});
increment.cljs$core$IFn$_invoke$arity$variadic = increment__delegate;
return increment;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.pre_decrement = (function() { 
var pre_decrement__delegate = function (body__7268__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"pre-decrement","pre-decrement",1269674757),body__7268__auto__);
};
var pre_decrement = function (var_args){
var body__7268__auto__ = null;
if (arguments.length > 0) {
var G__7602__i = 0, G__7602__a = new Array(arguments.length -  0);
while (G__7602__i < G__7602__a.length) {G__7602__a[G__7602__i] = arguments[G__7602__i + 0]; ++G__7602__i;}
  body__7268__auto__ = new cljs.core.IndexedSeq(G__7602__a,0);
} 
return pre_decrement__delegate.call(this,body__7268__auto__);};
pre_decrement.cljs$lang$maxFixedArity = 0;
pre_decrement.cljs$lang$applyTo = (function (arglist__7603){
var body__7268__auto__ = cljs.core.seq(arglist__7603);
return pre_decrement__delegate(body__7268__auto__);
});
pre_decrement.cljs$core$IFn$_invoke$arity$variadic = pre_decrement__delegate;
return pre_decrement;
})()
;

/**
* @param {...*} var_args
*/
gamma.api._GT_ = (function() { 
var _GT___delegate = function (body__7268__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,">",">",-555517146),body__7268__auto__);
};
var _GT_ = function (var_args){
var body__7268__auto__ = null;
if (arguments.length > 0) {
var G__7604__i = 0, G__7604__a = new Array(arguments.length -  0);
while (G__7604__i < G__7604__a.length) {G__7604__a[G__7604__i] = arguments[G__7604__i + 0]; ++G__7604__i;}
  body__7268__auto__ = new cljs.core.IndexedSeq(G__7604__a,0);
} 
return _GT___delegate.call(this,body__7268__auto__);};
_GT_.cljs$lang$maxFixedArity = 0;
_GT_.cljs$lang$applyTo = (function (arglist__7605){
var body__7268__auto__ = cljs.core.seq(arglist__7605);
return _GT___delegate(body__7268__auto__);
});
_GT_.cljs$core$IFn$_invoke$arity$variadic = _GT___delegate;
return _GT_;
})()
;

/**
* @param {...*} var_args
*/
gamma.api._ = (function() { 
var ___delegate = function (body__7268__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"-","-",-2112348439),body__7268__auto__);
};
var _ = function (var_args){
var body__7268__auto__ = null;
if (arguments.length > 0) {
var G__7606__i = 0, G__7606__a = new Array(arguments.length -  0);
while (G__7606__i < G__7606__a.length) {G__7606__a[G__7606__i] = arguments[G__7606__i + 0]; ++G__7606__i;}
  body__7268__auto__ = new cljs.core.IndexedSeq(G__7606__a,0);
} 
return ___delegate.call(this,body__7268__auto__);};
_.cljs$lang$maxFixedArity = 0;
_.cljs$lang$applyTo = (function (arglist__7607){
var body__7268__auto__ = cljs.core.seq(arglist__7607);
return ___delegate(body__7268__auto__);
});
_.cljs$core$IFn$_invoke$arity$variadic = ___delegate;
return _;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.or = (function() { 
var or__delegate = function (body__7268__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"or","or",235744169),body__7268__auto__);
};
var or = function (var_args){
var body__7268__auto__ = null;
if (arguments.length > 0) {
var G__7608__i = 0, G__7608__a = new Array(arguments.length -  0);
while (G__7608__i < G__7608__a.length) {G__7608__a[G__7608__i] = arguments[G__7608__i + 0]; ++G__7608__i;}
  body__7268__auto__ = new cljs.core.IndexedSeq(G__7608__a,0);
} 
return or__delegate.call(this,body__7268__auto__);};
or.cljs$lang$maxFixedArity = 0;
or.cljs$lang$applyTo = (function (arglist__7609){
var body__7268__auto__ = cljs.core.seq(arglist__7609);
return or__delegate(body__7268__auto__);
});
or.cljs$core$IFn$_invoke$arity$variadic = or__delegate;
return or;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.set_div = (function() { 
var set_div__delegate = function (body__7268__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"set-div","set-div",991399498),body__7268__auto__);
};
var set_div = function (var_args){
var body__7268__auto__ = null;
if (arguments.length > 0) {
var G__7610__i = 0, G__7610__a = new Array(arguments.length -  0);
while (G__7610__i < G__7610__a.length) {G__7610__a[G__7610__i] = arguments[G__7610__i + 0]; ++G__7610__i;}
  body__7268__auto__ = new cljs.core.IndexedSeq(G__7610__a,0);
} 
return set_div__delegate.call(this,body__7268__auto__);};
set_div.cljs$lang$maxFixedArity = 0;
set_div.cljs$lang$applyTo = (function (arglist__7611){
var body__7268__auto__ = cljs.core.seq(arglist__7611);
return set_div__delegate(body__7268__auto__);
});
set_div.cljs$core$IFn$_invoke$arity$variadic = set_div__delegate;
return set_div;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.pre_increment = (function() { 
var pre_increment__delegate = function (body__7268__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"pre-increment","pre-increment",-1566257876),body__7268__auto__);
};
var pre_increment = function (var_args){
var body__7268__auto__ = null;
if (arguments.length > 0) {
var G__7612__i = 0, G__7612__a = new Array(arguments.length -  0);
while (G__7612__i < G__7612__a.length) {G__7612__a[G__7612__i] = arguments[G__7612__i + 0]; ++G__7612__i;}
  body__7268__auto__ = new cljs.core.IndexedSeq(G__7612__a,0);
} 
return pre_increment__delegate.call(this,body__7268__auto__);};
pre_increment.cljs$lang$maxFixedArity = 0;
pre_increment.cljs$lang$applyTo = (function (arglist__7613){
var body__7268__auto__ = cljs.core.seq(arglist__7613);
return pre_increment__delegate(body__7268__auto__);
});
pre_increment.cljs$core$IFn$_invoke$arity$variadic = pre_increment__delegate;
return pre_increment;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.not = (function() { 
var not__delegate = function (body__7268__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"not","not",-595976884),body__7268__auto__);
};
var not = function (var_args){
var body__7268__auto__ = null;
if (arguments.length > 0) {
var G__7614__i = 0, G__7614__a = new Array(arguments.length -  0);
while (G__7614__i < G__7614__a.length) {G__7614__a[G__7614__i] = arguments[G__7614__i + 0]; ++G__7614__i;}
  body__7268__auto__ = new cljs.core.IndexedSeq(G__7614__a,0);
} 
return not__delegate.call(this,body__7268__auto__);};
not.cljs$lang$maxFixedArity = 0;
not.cljs$lang$applyTo = (function (arglist__7615){
var body__7268__auto__ = cljs.core.seq(arglist__7615);
return not__delegate(body__7268__auto__);
});
not.cljs$core$IFn$_invoke$arity$variadic = not__delegate;
return not;
})()
;

/**
* @param {...*} var_args
*/
gamma.api._GT__EQ_ = (function() { 
var _GT__EQ___delegate = function (body__7268__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,">=",">=",-623615505),body__7268__auto__);
};
var _GT__EQ_ = function (var_args){
var body__7268__auto__ = null;
if (arguments.length > 0) {
var G__7616__i = 0, G__7616__a = new Array(arguments.length -  0);
while (G__7616__i < G__7616__a.length) {G__7616__a[G__7616__i] = arguments[G__7616__i + 0]; ++G__7616__i;}
  body__7268__auto__ = new cljs.core.IndexedSeq(G__7616__a,0);
} 
return _GT__EQ___delegate.call(this,body__7268__auto__);};
_GT__EQ_.cljs$lang$maxFixedArity = 0;
_GT__EQ_.cljs$lang$applyTo = (function (arglist__7617){
var body__7268__auto__ = cljs.core.seq(arglist__7617);
return _GT__EQ___delegate(body__7268__auto__);
});
_GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = _GT__EQ___delegate;
return _GT__EQ_;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.div = (function() { 
var div__delegate = function (body__7268__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"div","div",1057191632),body__7268__auto__);
};
var div = function (var_args){
var body__7268__auto__ = null;
if (arguments.length > 0) {
var G__7618__i = 0, G__7618__a = new Array(arguments.length -  0);
while (G__7618__i < G__7618__a.length) {G__7618__a[G__7618__i] = arguments[G__7618__i + 0]; ++G__7618__i;}
  body__7268__auto__ = new cljs.core.IndexedSeq(G__7618__a,0);
} 
return div__delegate.call(this,body__7268__auto__);};
div.cljs$lang$maxFixedArity = 0;
div.cljs$lang$applyTo = (function (arglist__7619){
var body__7268__auto__ = cljs.core.seq(arglist__7619);
return div__delegate(body__7268__auto__);
});
div.cljs$core$IFn$_invoke$arity$variadic = div__delegate;
return div;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.conditional_choice = (function() { 
var conditional_choice__delegate = function (body__7268__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"conditional-choice","conditional-choice",1872771601),body__7268__auto__);
};
var conditional_choice = function (var_args){
var body__7268__auto__ = null;
if (arguments.length > 0) {
var G__7620__i = 0, G__7620__a = new Array(arguments.length -  0);
while (G__7620__i < G__7620__a.length) {G__7620__a[G__7620__i] = arguments[G__7620__i + 0]; ++G__7620__i;}
  body__7268__auto__ = new cljs.core.IndexedSeq(G__7620__a,0);
} 
return conditional_choice__delegate.call(this,body__7268__auto__);};
conditional_choice.cljs$lang$maxFixedArity = 0;
conditional_choice.cljs$lang$applyTo = (function (arglist__7621){
var body__7268__auto__ = cljs.core.seq(arglist__7621);
return conditional_choice__delegate(body__7268__auto__);
});
conditional_choice.cljs$core$IFn$_invoke$arity$variadic = conditional_choice__delegate;
return conditional_choice;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.set_PLUS_ = (function() { 
var set_PLUS___delegate = function (body__7268__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"set+","set+",1784778737),body__7268__auto__);
};
var set_PLUS_ = function (var_args){
var body__7268__auto__ = null;
if (arguments.length > 0) {
var G__7622__i = 0, G__7622__a = new Array(arguments.length -  0);
while (G__7622__i < G__7622__a.length) {G__7622__a[G__7622__i] = arguments[G__7622__i + 0]; ++G__7622__i;}
  body__7268__auto__ = new cljs.core.IndexedSeq(G__7622__a,0);
} 
return set_PLUS___delegate.call(this,body__7268__auto__);};
set_PLUS_.cljs$lang$maxFixedArity = 0;
set_PLUS_.cljs$lang$applyTo = (function (arglist__7623){
var body__7268__auto__ = cljs.core.seq(arglist__7623);
return set_PLUS___delegate(body__7268__auto__);
});
set_PLUS_.cljs$core$IFn$_invoke$arity$variadic = set_PLUS___delegate;
return set_PLUS_;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.set_ = (function() { 
var set___delegate = function (body__7268__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"set-","set-",-1958952622),body__7268__auto__);
};
var set_ = function (var_args){
var body__7268__auto__ = null;
if (arguments.length > 0) {
var G__7624__i = 0, G__7624__a = new Array(arguments.length -  0);
while (G__7624__i < G__7624__a.length) {G__7624__a[G__7624__i] = arguments[G__7624__i + 0]; ++G__7624__i;}
  body__7268__auto__ = new cljs.core.IndexedSeq(G__7624__a,0);
} 
return set___delegate.call(this,body__7268__auto__);};
set_.cljs$lang$maxFixedArity = 0;
set_.cljs$lang$applyTo = (function (arglist__7625){
var body__7268__auto__ = cljs.core.seq(arglist__7625);
return set___delegate(body__7268__auto__);
});
set_.cljs$core$IFn$_invoke$arity$variadic = set___delegate;
return set_;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.xor = (function() { 
var xor__delegate = function (body__7268__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"xor","xor",-1119942254),body__7268__auto__);
};
var xor = function (var_args){
var body__7268__auto__ = null;
if (arguments.length > 0) {
var G__7626__i = 0, G__7626__a = new Array(arguments.length -  0);
while (G__7626__i < G__7626__a.length) {G__7626__a[G__7626__i] = arguments[G__7626__i + 0]; ++G__7626__i;}
  body__7268__auto__ = new cljs.core.IndexedSeq(G__7626__a,0);
} 
return xor__delegate.call(this,body__7268__auto__);};
xor.cljs$lang$maxFixedArity = 0;
xor.cljs$lang$applyTo = (function (arglist__7627){
var body__7268__auto__ = cljs.core.seq(arglist__7627);
return xor__delegate(body__7268__auto__);
});
xor.cljs$core$IFn$_invoke$arity$variadic = xor__delegate;
return xor;
})()
;

/**
* @param {...*} var_args
*/
gamma.api._PLUS_ = (function() { 
var _PLUS___delegate = function (body__7268__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"+","+",1913524883),body__7268__auto__);
};
var _PLUS_ = function (var_args){
var body__7268__auto__ = null;
if (arguments.length > 0) {
var G__7628__i = 0, G__7628__a = new Array(arguments.length -  0);
while (G__7628__i < G__7628__a.length) {G__7628__a[G__7628__i] = arguments[G__7628__i + 0]; ++G__7628__i;}
  body__7268__auto__ = new cljs.core.IndexedSeq(G__7628__a,0);
} 
return _PLUS___delegate.call(this,body__7268__auto__);};
_PLUS_.cljs$lang$maxFixedArity = 0;
_PLUS_.cljs$lang$applyTo = (function (arglist__7629){
var body__7268__auto__ = cljs.core.seq(arglist__7629);
return _PLUS___delegate(body__7268__auto__);
});
_PLUS_.cljs$core$IFn$_invoke$arity$variadic = _PLUS___delegate;
return _PLUS_;
})()
;

/**
* @param {...*} var_args
*/
gamma.api._BANG__EQ_ = (function() { 
var _BANG__EQ___delegate = function (body__7268__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"!=","!=",-1841737356),body__7268__auto__);
};
var _BANG__EQ_ = function (var_args){
var body__7268__auto__ = null;
if (arguments.length > 0) {
var G__7630__i = 0, G__7630__a = new Array(arguments.length -  0);
while (G__7630__i < G__7630__a.length) {G__7630__a[G__7630__i] = arguments[G__7630__i + 0]; ++G__7630__i;}
  body__7268__auto__ = new cljs.core.IndexedSeq(G__7630__a,0);
} 
return _BANG__EQ___delegate.call(this,body__7268__auto__);};
_BANG__EQ_.cljs$lang$maxFixedArity = 0;
_BANG__EQ_.cljs$lang$applyTo = (function (arglist__7631){
var body__7268__auto__ = cljs.core.seq(arglist__7631);
return _BANG__EQ___delegate(body__7268__auto__);
});
_BANG__EQ_.cljs$core$IFn$_invoke$arity$variadic = _BANG__EQ___delegate;
return _BANG__EQ_;
})()
;

/**
* @param {...*} var_args
*/
gamma.api._EQ__EQ_ = (function() { 
var _EQ__EQ___delegate = function (body__7268__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"==","==",-1874649676),body__7268__auto__);
};
var _EQ__EQ_ = function (var_args){
var body__7268__auto__ = null;
if (arguments.length > 0) {
var G__7632__i = 0, G__7632__a = new Array(arguments.length -  0);
while (G__7632__i < G__7632__a.length) {G__7632__a[G__7632__i] = arguments[G__7632__i + 0]; ++G__7632__i;}
  body__7268__auto__ = new cljs.core.IndexedSeq(G__7632__a,0);
} 
return _EQ__EQ___delegate.call(this,body__7268__auto__);};
_EQ__EQ_.cljs$lang$maxFixedArity = 0;
_EQ__EQ_.cljs$lang$applyTo = (function (arglist__7633){
var body__7268__auto__ = cljs.core.seq(arglist__7633);
return _EQ__EQ___delegate(body__7268__auto__);
});
_EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = _EQ__EQ___delegate;
return _EQ__EQ_;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.constructor = (function() { 
var constructor__delegate = function (body__7268__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"constructor","constructor",-1953928811),body__7268__auto__);
};
var constructor = function (var_args){
var body__7268__auto__ = null;
if (arguments.length > 0) {
var G__7634__i = 0, G__7634__a = new Array(arguments.length -  0);
while (G__7634__i < G__7634__a.length) {G__7634__a[G__7634__i] = arguments[G__7634__i + 0]; ++G__7634__i;}
  body__7268__auto__ = new cljs.core.IndexedSeq(G__7634__a,0);
} 
return constructor__delegate.call(this,body__7268__auto__);};
constructor.cljs$lang$maxFixedArity = 0;
constructor.cljs$lang$applyTo = (function (arglist__7635){
var body__7268__auto__ = cljs.core.seq(arglist__7635);
return constructor__delegate(body__7268__auto__);
});
constructor.cljs$core$IFn$_invoke$arity$variadic = constructor__delegate;
return constructor;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.and = (function() { 
var and__delegate = function (body__7268__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"and","and",-971899817),body__7268__auto__);
};
var and = function (var_args){
var body__7268__auto__ = null;
if (arguments.length > 0) {
var G__7636__i = 0, G__7636__a = new Array(arguments.length -  0);
while (G__7636__i < G__7636__a.length) {G__7636__a[G__7636__i] = arguments[G__7636__i + 0]; ++G__7636__i;}
  body__7268__auto__ = new cljs.core.IndexedSeq(G__7636__a,0);
} 
return and__delegate.call(this,body__7268__auto__);};
and.cljs$lang$maxFixedArity = 0;
and.cljs$lang$applyTo = (function (arglist__7637){
var body__7268__auto__ = cljs.core.seq(arglist__7637);
return and__delegate(body__7268__auto__);
});
and.cljs$core$IFn$_invoke$arity$variadic = and__delegate;
return and;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.decrement = (function() { 
var decrement__delegate = function (body__7268__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"decrement","decrement",-725286119),body__7268__auto__);
};
var decrement = function (var_args){
var body__7268__auto__ = null;
if (arguments.length > 0) {
var G__7638__i = 0, G__7638__a = new Array(arguments.length -  0);
while (G__7638__i < G__7638__a.length) {G__7638__a[G__7638__i] = arguments[G__7638__i + 0]; ++G__7638__i;}
  body__7268__auto__ = new cljs.core.IndexedSeq(G__7638__a,0);
} 
return decrement__delegate.call(this,body__7268__auto__);};
decrement.cljs$lang$maxFixedArity = 0;
decrement.cljs$lang$applyTo = (function (arglist__7639){
var body__7268__auto__ = cljs.core.seq(arglist__7639);
return decrement__delegate(body__7268__auto__);
});
decrement.cljs$core$IFn$_invoke$arity$variadic = decrement__delegate;
return decrement;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.set = (function() { 
var set__delegate = function (body__7268__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"set","set",304602554),body__7268__auto__);
};
var set = function (var_args){
var body__7268__auto__ = null;
if (arguments.length > 0) {
var G__7640__i = 0, G__7640__a = new Array(arguments.length -  0);
while (G__7640__i < G__7640__a.length) {G__7640__a[G__7640__i] = arguments[G__7640__i + 0]; ++G__7640__i;}
  body__7268__auto__ = new cljs.core.IndexedSeq(G__7640__a,0);
} 
return set__delegate.call(this,body__7268__auto__);};
set.cljs$lang$maxFixedArity = 0;
set.cljs$lang$applyTo = (function (arglist__7641){
var body__7268__auto__ = cljs.core.seq(arglist__7641);
return set__delegate(body__7268__auto__);
});
set.cljs$core$IFn$_invoke$arity$variadic = set__delegate;
return set;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.set_STAR_ = (function() { 
var set_STAR___delegate = function (body__7268__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"set*","set*",-966220230),body__7268__auto__);
};
var set_STAR_ = function (var_args){
var body__7268__auto__ = null;
if (arguments.length > 0) {
var G__7642__i = 0, G__7642__a = new Array(arguments.length -  0);
while (G__7642__i < G__7642__a.length) {G__7642__a[G__7642__i] = arguments[G__7642__i + 0]; ++G__7642__i;}
  body__7268__auto__ = new cljs.core.IndexedSeq(G__7642__a,0);
} 
return set_STAR___delegate.call(this,body__7268__auto__);};
set_STAR_.cljs$lang$maxFixedArity = 0;
set_STAR_.cljs$lang$applyTo = (function (arglist__7643){
var body__7268__auto__ = cljs.core.seq(arglist__7643);
return set_STAR___delegate(body__7268__auto__);
});
set_STAR_.cljs$core$IFn$_invoke$arity$variadic = set_STAR___delegate;
return set_STAR_;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.aget = (function() { 
var aget__delegate = function (body__7268__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"aget","aget",-149474981),body__7268__auto__);
};
var aget = function (var_args){
var body__7268__auto__ = null;
if (arguments.length > 0) {
var G__7644__i = 0, G__7644__a = new Array(arguments.length -  0);
while (G__7644__i < G__7644__a.length) {G__7644__a[G__7644__i] = arguments[G__7644__i + 0]; ++G__7644__i;}
  body__7268__auto__ = new cljs.core.IndexedSeq(G__7644__a,0);
} 
return aget__delegate.call(this,body__7268__auto__);};
aget.cljs$lang$maxFixedArity = 0;
aget.cljs$lang$applyTo = (function (arglist__7645){
var body__7268__auto__ = cljs.core.seq(arglist__7645);
return aget__delegate(body__7268__auto__);
});
aget.cljs$core$IFn$_invoke$arity$variadic = aget__delegate;
return aget;
})()
;

/**
* @param {...*} var_args
*/
gamma.api._PLUS__ = (function() { 
var _PLUS____delegate = function (body__7268__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"+-","+-",1426840219),body__7268__auto__);
};
var _PLUS__ = function (var_args){
var body__7268__auto__ = null;
if (arguments.length > 0) {
var G__7646__i = 0, G__7646__a = new Array(arguments.length -  0);
while (G__7646__i < G__7646__a.length) {G__7646__a[G__7646__i] = arguments[G__7646__i + 0]; ++G__7646__i;}
  body__7268__auto__ = new cljs.core.IndexedSeq(G__7646__a,0);
} 
return _PLUS____delegate.call(this,body__7268__auto__);};
_PLUS__.cljs$lang$maxFixedArity = 0;
_PLUS__.cljs$lang$applyTo = (function (arglist__7647){
var body__7268__auto__ = cljs.core.seq(arglist__7647);
return _PLUS____delegate(body__7268__auto__);
});
_PLUS__.cljs$core$IFn$_invoke$arity$variadic = _PLUS____delegate;
return _PLUS__;
})()
;

/**
* @param {...*} var_args
*/
gamma.api._LT_ = (function() { 
var _LT___delegate = function (body__7268__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"<","<",-646864291),body__7268__auto__);
};
var _LT_ = function (var_args){
var body__7268__auto__ = null;
if (arguments.length > 0) {
var G__7648__i = 0, G__7648__a = new Array(arguments.length -  0);
while (G__7648__i < G__7648__a.length) {G__7648__a[G__7648__i] = arguments[G__7648__i + 0]; ++G__7648__i;}
  body__7268__auto__ = new cljs.core.IndexedSeq(G__7648__a,0);
} 
return _LT___delegate.call(this,body__7268__auto__);};
_LT_.cljs$lang$maxFixedArity = 0;
_LT_.cljs$lang$applyTo = (function (arglist__7649){
var body__7268__auto__ = cljs.core.seq(arglist__7649);
return _LT___delegate(body__7268__auto__);
});
_LT_.cljs$core$IFn$_invoke$arity$variadic = _LT___delegate;
return _LT_;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.for$ = (function() { 
var for$__delegate = function (body__7268__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"for","for",-1323786319),body__7268__auto__);
};
var for$ = function (var_args){
var body__7268__auto__ = null;
if (arguments.length > 0) {
var G__7650__i = 0, G__7650__a = new Array(arguments.length -  0);
while (G__7650__i < G__7650__a.length) {G__7650__a[G__7650__i] = arguments[G__7650__i + 0]; ++G__7650__i;}
  body__7268__auto__ = new cljs.core.IndexedSeq(G__7650__a,0);
} 
return for$__delegate.call(this,body__7268__auto__);};
for$.cljs$lang$maxFixedArity = 0;
for$.cljs$lang$applyTo = (function (arglist__7651){
var body__7268__auto__ = cljs.core.seq(arglist__7651);
return for$__delegate(body__7268__auto__);
});
for$.cljs$core$IFn$_invoke$arity$variadic = for$__delegate;
return for$;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.block = (function() { 
var block__delegate = function (body__7268__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"block","block",664686210),body__7268__auto__);
};
var block = function (var_args){
var body__7268__auto__ = null;
if (arguments.length > 0) {
var G__7652__i = 0, G__7652__a = new Array(arguments.length -  0);
while (G__7652__i < G__7652__a.length) {G__7652__a[G__7652__i] = arguments[G__7652__i + 0]; ++G__7652__i;}
  body__7268__auto__ = new cljs.core.IndexedSeq(G__7652__a,0);
} 
return block__delegate.call(this,body__7268__auto__);};
block.cljs$lang$maxFixedArity = 0;
block.cljs$lang$applyTo = (function (arglist__7653){
var body__7268__auto__ = cljs.core.seq(arglist__7653);
return block__delegate(body__7268__auto__);
});
block.cljs$core$IFn$_invoke$arity$variadic = block__delegate;
return block;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.continue$ = (function() { 
var continue$__delegate = function (body__7268__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"continue","continue",-207346553),body__7268__auto__);
};
var continue$ = function (var_args){
var body__7268__auto__ = null;
if (arguments.length > 0) {
var G__7654__i = 0, G__7654__a = new Array(arguments.length -  0);
while (G__7654__i < G__7654__a.length) {G__7654__a[G__7654__i] = arguments[G__7654__i + 0]; ++G__7654__i;}
  body__7268__auto__ = new cljs.core.IndexedSeq(G__7654__a,0);
} 
return continue$__delegate.call(this,body__7268__auto__);};
continue$.cljs$lang$maxFixedArity = 0;
continue$.cljs$lang$applyTo = (function (arglist__7655){
var body__7268__auto__ = cljs.core.seq(arglist__7655);
return continue$__delegate(body__7268__auto__);
});
continue$.cljs$core$IFn$_invoke$arity$variadic = continue$__delegate;
return continue$;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.break$ = (function() { 
var break$__delegate = function (body__7268__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"break","break",126570225),body__7268__auto__);
};
var break$ = function (var_args){
var body__7268__auto__ = null;
if (arguments.length > 0) {
var G__7656__i = 0, G__7656__a = new Array(arguments.length -  0);
while (G__7656__i < G__7656__a.length) {G__7656__a[G__7656__i] = arguments[G__7656__i + 0]; ++G__7656__i;}
  body__7268__auto__ = new cljs.core.IndexedSeq(G__7656__a,0);
} 
return break$__delegate.call(this,body__7268__auto__);};
break$.cljs$lang$maxFixedArity = 0;
break$.cljs$lang$applyTo = (function (arglist__7657){
var body__7268__auto__ = cljs.core.seq(arglist__7657);
return break$__delegate(body__7268__auto__);
});
break$.cljs$core$IFn$_invoke$arity$variadic = break$__delegate;
return break$;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.discard = (function() { 
var discard__delegate = function (body__7268__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"discard","discard",-1939593545),body__7268__auto__);
};
var discard = function (var_args){
var body__7268__auto__ = null;
if (arguments.length > 0) {
var G__7658__i = 0, G__7658__a = new Array(arguments.length -  0);
while (G__7658__i < G__7658__a.length) {G__7658__a[G__7658__i] = arguments[G__7658__i + 0]; ++G__7658__i;}
  body__7268__auto__ = new cljs.core.IndexedSeq(G__7658__a,0);
} 
return discard__delegate.call(this,body__7268__auto__);};
discard.cljs$lang$maxFixedArity = 0;
discard.cljs$lang$applyTo = (function (arglist__7659){
var body__7268__auto__ = cljs.core.seq(arglist__7659);
return discard__delegate(body__7268__auto__);
});
discard.cljs$core$IFn$_invoke$arity$variadic = discard__delegate;
return discard;
})()
;
