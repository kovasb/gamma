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
var G__13690 = cljs.core.next.call(null,input);
var G__13691 = cljs.core.next.call(null,expected);
var G__13692 = parameter;
input = G__13690;
expected = G__13691;
parameter = G__13692;
continue;
} else {
return new cljs.core.Keyword(null,"fail","fail",1706214930);
}
} else {
if(cljs.core.truth_(p.call(null,i))){
var G__13693 = cljs.core.next.call(null,input);
var G__13694 = cljs.core.next.call(null,expected);
var G__13695 = p.call(null,i);
input = G__13693;
expected = G__13694;
parameter = G__13695;
continue;
} else {
return new cljs.core.Keyword(null,"fail","fail",1706214930);
}
}
} else {
if(cljs.core._EQ_.call(null,i,e)){
var G__13696 = cljs.core.next.call(null,input);
var G__13697 = cljs.core.next.call(null,expected);
var G__13698 = parameter;
input = G__13696;
expected = G__13697;
parameter = G__13698;
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
return (function (p1__13699_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930),p1__13699_SHARP_);
});})(t))
,cljs.core.map.call(null,((function (t){
return (function (p1__13700_SHARP_){
return gamma.api.infer_parameterized_type.call(null,p1__13700_SHARP_,cljs.core.map.call(null,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(t)));
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
var ceil__delegate = function (body__12955__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"ceil","ceil",-1824929952),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"ceil","ceil",-1824929952),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__12955__auto__);
};
var ceil = function (var_args){
var body__12955__auto__ = null;
if (arguments.length > 0) {
var G__13701__i = 0, G__13701__a = new Array(arguments.length -  0);
while (G__13701__i < G__13701__a.length) {G__13701__a[G__13701__i] = arguments[G__13701__i + 0]; ++G__13701__i;}
  body__12955__auto__ = new cljs.core.IndexedSeq(G__13701__a,0);
} 
return ceil__delegate.call(this,body__12955__auto__);};
ceil.cljs$lang$maxFixedArity = 0;
ceil.cljs$lang$applyTo = (function (arglist__13702){
var body__12955__auto__ = cljs.core.seq(arglist__13702);
return ceil__delegate(body__12955__auto__);
});
ceil.cljs$core$IFn$_invoke$arity$variadic = ceil__delegate;
return ceil;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.atan = (function() { 
var atan__delegate = function (body__12955__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"atan","atan",1627885634),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"atan","atan",1627885634),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"atan","atan",1627885634),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__12955__auto__);
};
var atan = function (var_args){
var body__12955__auto__ = null;
if (arguments.length > 0) {
var G__13703__i = 0, G__13703__a = new Array(arguments.length -  0);
while (G__13703__i < G__13703__a.length) {G__13703__a[G__13703__i] = arguments[G__13703__i + 0]; ++G__13703__i;}
  body__12955__auto__ = new cljs.core.IndexedSeq(G__13703__a,0);
} 
return atan__delegate.call(this,body__12955__auto__);};
atan.cljs$lang$maxFixedArity = 0;
atan.cljs$lang$applyTo = (function (arglist__13704){
var body__12955__auto__ = cljs.core.seq(arglist__13704);
return atan__delegate(body__12955__auto__);
});
atan.cljs$core$IFn$_invoke$arity$variadic = atan__delegate;
return atan;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.sign = (function() { 
var sign__delegate = function (body__12955__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"sign","sign",1261721667),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"sign","sign",1261721667),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__12955__auto__);
};
var sign = function (var_args){
var body__12955__auto__ = null;
if (arguments.length > 0) {
var G__13705__i = 0, G__13705__a = new Array(arguments.length -  0);
while (G__13705__i < G__13705__a.length) {G__13705__a[G__13705__i] = arguments[G__13705__i + 0]; ++G__13705__i;}
  body__12955__auto__ = new cljs.core.IndexedSeq(G__13705__a,0);
} 
return sign__delegate.call(this,body__12955__auto__);};
sign.cljs$lang$maxFixedArity = 0;
sign.cljs$lang$applyTo = (function (arglist__13706){
var body__12955__auto__ = cljs.core.seq(arglist__13706);
return sign__delegate(body__12955__auto__);
});
sign.cljs$core$IFn$_invoke$arity$variadic = sign__delegate;
return sign;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.cos = (function() { 
var cos__delegate = function (body__12955__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"cos","cos",1201758276),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"cos","cos",1201758276),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__12955__auto__);
};
var cos = function (var_args){
var body__12955__auto__ = null;
if (arguments.length > 0) {
var G__13707__i = 0, G__13707__a = new Array(arguments.length -  0);
while (G__13707__i < G__13707__a.length) {G__13707__a[G__13707__i] = arguments[G__13707__i + 0]; ++G__13707__i;}
  body__12955__auto__ = new cljs.core.IndexedSeq(G__13707__a,0);
} 
return cos__delegate.call(this,body__12955__auto__);};
cos.cljs$lang$maxFixedArity = 0;
cos.cljs$lang$applyTo = (function (arglist__13708){
var body__12955__auto__ = cljs.core.seq(arglist__13708);
return cos__delegate(body__12955__auto__);
});
cos.cljs$core$IFn$_invoke$arity$variadic = cos__delegate;
return cos;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.textureCubeLod = (function() { 
var textureCubeLod__delegate = function (body__12955__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"textureCubeLod","textureCubeLod",149096100),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"textureCubeLod","textureCubeLod",149096100),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sampler2D","sampler2D",-2107312644),new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__12955__auto__);
};
var textureCubeLod = function (var_args){
var body__12955__auto__ = null;
if (arguments.length > 0) {
var G__13709__i = 0, G__13709__a = new Array(arguments.length -  0);
while (G__13709__i < G__13709__a.length) {G__13709__a[G__13709__i] = arguments[G__13709__i + 0]; ++G__13709__i;}
  body__12955__auto__ = new cljs.core.IndexedSeq(G__13709__a,0);
} 
return textureCubeLod__delegate.call(this,body__12955__auto__);};
textureCubeLod.cljs$lang$maxFixedArity = 0;
textureCubeLod.cljs$lang$applyTo = (function (arglist__13710){
var body__12955__auto__ = cljs.core.seq(arglist__13710);
return textureCubeLod__delegate(body__12955__auto__);
});
textureCubeLod.cljs$core$IFn$_invoke$arity$variadic = textureCubeLod__delegate;
return textureCubeLod;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.tan = (function() { 
var tan__delegate = function (body__12955__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"tan","tan",1273609893),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tan","tan",1273609893),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__12955__auto__);
};
var tan = function (var_args){
var body__12955__auto__ = null;
if (arguments.length > 0) {
var G__13711__i = 0, G__13711__a = new Array(arguments.length -  0);
while (G__13711__i < G__13711__a.length) {G__13711__a[G__13711__i] = arguments[G__13711__i + 0]; ++G__13711__i;}
  body__12955__auto__ = new cljs.core.IndexedSeq(G__13711__a,0);
} 
return tan__delegate.call(this,body__12955__auto__);};
tan.cljs$lang$maxFixedArity = 0;
tan.cljs$lang$applyTo = (function (arglist__13712){
var body__12955__auto__ = cljs.core.seq(arglist__13712);
return tan__delegate(body__12955__auto__);
});
tan.cljs$core$IFn$_invoke$arity$variadic = tan__delegate;
return tan;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.sqrt = (function() { 
var sqrt__delegate = function (body__12955__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"sqrt","sqrt",-1270051929),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"sqrt","sqrt",-1270051929),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__12955__auto__);
};
var sqrt = function (var_args){
var body__12955__auto__ = null;
if (arguments.length > 0) {
var G__13713__i = 0, G__13713__a = new Array(arguments.length -  0);
while (G__13713__i < G__13713__a.length) {G__13713__a[G__13713__i] = arguments[G__13713__i + 0]; ++G__13713__i;}
  body__12955__auto__ = new cljs.core.IndexedSeq(G__13713__a,0);
} 
return sqrt__delegate.call(this,body__12955__auto__);};
sqrt.cljs$lang$maxFixedArity = 0;
sqrt.cljs$lang$applyTo = (function (arglist__13714){
var body__12955__auto__ = cljs.core.seq(arglist__13714);
return sqrt__delegate(body__12955__auto__);
});
sqrt.cljs$core$IFn$_invoke$arity$variadic = sqrt__delegate;
return sqrt;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.mod = (function() { 
var mod__delegate = function (body__12955__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"mod","mod",-130487320),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"mod","mod",-130487320),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__12955__auto__);
};
var mod = function (var_args){
var body__12955__auto__ = null;
if (arguments.length > 0) {
var G__13715__i = 0, G__13715__a = new Array(arguments.length -  0);
while (G__13715__i < G__13715__a.length) {G__13715__a[G__13715__i] = arguments[G__13715__i + 0]; ++G__13715__i;}
  body__12955__auto__ = new cljs.core.IndexedSeq(G__13715__a,0);
} 
return mod__delegate.call(this,body__12955__auto__);};
mod.cljs$lang$maxFixedArity = 0;
mod.cljs$lang$applyTo = (function (arglist__13716){
var body__12955__auto__ = cljs.core.seq(arglist__13716);
return mod__delegate(body__12955__auto__);
});
mod.cljs$core$IFn$_invoke$arity$variadic = mod__delegate;
return mod;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.exp = (function() { 
var exp__delegate = function (body__12955__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"exp","exp",-261706262),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"exp","exp",-261706262),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__12955__auto__);
};
var exp = function (var_args){
var body__12955__auto__ = null;
if (arguments.length > 0) {
var G__13717__i = 0, G__13717__a = new Array(arguments.length -  0);
while (G__13717__i < G__13717__a.length) {G__13717__a[G__13717__i] = arguments[G__13717__i + 0]; ++G__13717__i;}
  body__12955__auto__ = new cljs.core.IndexedSeq(G__13717__a,0);
} 
return exp__delegate.call(this,body__12955__auto__);};
exp.cljs$lang$maxFixedArity = 0;
exp.cljs$lang$applyTo = (function (arglist__13718){
var body__12955__auto__ = cljs.core.seq(arglist__13718);
return exp__delegate(body__12955__auto__);
});
exp.cljs$core$IFn$_invoke$arity$variadic = exp__delegate;
return exp;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.texture2DProjLod = (function() { 
var texture2DProjLod__delegate = function (body__12955__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"texture2DProjLod","texture2DProjLod",-1483280499),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"texture2DProjLod","texture2DProjLod",-1483280499),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sampler2D","sampler2D",-2107312644),new cljs.core.Keyword(null,"vec3","vec3",1116680488),new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"texture2DProjLod","texture2DProjLod",-1483280499),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sampler2D","sampler2D",-2107312644),new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__12955__auto__);
};
var texture2DProjLod = function (var_args){
var body__12955__auto__ = null;
if (arguments.length > 0) {
var G__13719__i = 0, G__13719__a = new Array(arguments.length -  0);
while (G__13719__i < G__13719__a.length) {G__13719__a[G__13719__i] = arguments[G__13719__i + 0]; ++G__13719__i;}
  body__12955__auto__ = new cljs.core.IndexedSeq(G__13719__a,0);
} 
return texture2DProjLod__delegate.call(this,body__12955__auto__);};
texture2DProjLod.cljs$lang$maxFixedArity = 0;
texture2DProjLod.cljs$lang$applyTo = (function (arglist__13720){
var body__12955__auto__ = cljs.core.seq(arglist__13720);
return texture2DProjLod__delegate(body__12955__auto__);
});
texture2DProjLod.cljs$core$IFn$_invoke$arity$variadic = texture2DProjLod__delegate;
return texture2DProjLod;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.log2 = (function() { 
var log2__delegate = function (body__12955__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"log2","log2",803778830),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"log2","log2",803778830),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__12955__auto__);
};
var log2 = function (var_args){
var body__12955__auto__ = null;
if (arguments.length > 0) {
var G__13721__i = 0, G__13721__a = new Array(arguments.length -  0);
while (G__13721__i < G__13721__a.length) {G__13721__a[G__13721__i] = arguments[G__13721__i + 0]; ++G__13721__i;}
  body__12955__auto__ = new cljs.core.IndexedSeq(G__13721__a,0);
} 
return log2__delegate.call(this,body__12955__auto__);};
log2.cljs$lang$maxFixedArity = 0;
log2.cljs$lang$applyTo = (function (arglist__13722){
var body__12955__auto__ = cljs.core.seq(arglist__13722);
return log2__delegate(body__12955__auto__);
});
log2.cljs$core$IFn$_invoke$arity$variadic = log2__delegate;
return log2;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.texture2D = (function() { 
var texture2D__delegate = function (body__12955__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"texture2D","texture2D",-252500594),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"texture2D","texture2D",-252500594),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sampler2D","sampler2D",-2107312644),new cljs.core.Keyword(null,"vec2","vec2",-762258640),new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"texture2D","texture2D",-252500594),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sampler2D","sampler2D",-2107312644),new cljs.core.Keyword(null,"vec2","vec2",-762258640)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__12955__auto__);
};
var texture2D = function (var_args){
var body__12955__auto__ = null;
if (arguments.length > 0) {
var G__13723__i = 0, G__13723__a = new Array(arguments.length -  0);
while (G__13723__i < G__13723__a.length) {G__13723__a[G__13723__i] = arguments[G__13723__i + 0]; ++G__13723__i;}
  body__12955__auto__ = new cljs.core.IndexedSeq(G__13723__a,0);
} 
return texture2D__delegate.call(this,body__12955__auto__);};
texture2D.cljs$lang$maxFixedArity = 0;
texture2D.cljs$lang$applyTo = (function (arglist__13724){
var body__12955__auto__ = cljs.core.seq(arglist__13724);
return texture2D__delegate(body__12955__auto__);
});
texture2D.cljs$core$IFn$_invoke$arity$variadic = texture2D__delegate;
return texture2D;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.asin = (function() { 
var asin__delegate = function (body__12955__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"asin","asin",1750305199),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"asin","asin",1750305199),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__12955__auto__);
};
var asin = function (var_args){
var body__12955__auto__ = null;
if (arguments.length > 0) {
var G__13725__i = 0, G__13725__a = new Array(arguments.length -  0);
while (G__13725__i < G__13725__a.length) {G__13725__a[G__13725__i] = arguments[G__13725__i + 0]; ++G__13725__i;}
  body__12955__auto__ = new cljs.core.IndexedSeq(G__13725__a,0);
} 
return asin__delegate.call(this,body__12955__auto__);};
asin.cljs$lang$maxFixedArity = 0;
asin.cljs$lang$applyTo = (function (arglist__13726){
var body__12955__auto__ = cljs.core.seq(arglist__13726);
return asin__delegate(body__12955__auto__);
});
asin.cljs$core$IFn$_invoke$arity$variadic = asin__delegate;
return asin;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.textureCube = (function() { 
var textureCube__delegate = function (body__12955__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"textureCube","textureCube",-82179345),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"textureCube","textureCube",-82179345),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samplerCube","samplerCube",-734605291),new cljs.core.Keyword(null,"vec3","vec3",1116680488),new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"textureCube","textureCube",-82179345),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samplerCube","samplerCube",-734605291),new cljs.core.Keyword(null,"vec3","vec3",1116680488)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__12955__auto__);
};
var textureCube = function (var_args){
var body__12955__auto__ = null;
if (arguments.length > 0) {
var G__13727__i = 0, G__13727__a = new Array(arguments.length -  0);
while (G__13727__i < G__13727__a.length) {G__13727__a[G__13727__i] = arguments[G__13727__i + 0]; ++G__13727__i;}
  body__12955__auto__ = new cljs.core.IndexedSeq(G__13727__a,0);
} 
return textureCube__delegate.call(this,body__12955__auto__);};
textureCube.cljs$lang$maxFixedArity = 0;
textureCube.cljs$lang$applyTo = (function (arglist__13728){
var body__12955__auto__ = cljs.core.seq(arglist__13728);
return textureCube__delegate(body__12955__auto__);
});
textureCube.cljs$core$IFn$_invoke$arity$variadic = textureCube__delegate;
return textureCube;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.power = (function() { 
var power__delegate = function (body__12955__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__12955__auto__);
};
var power = function (var_args){
var body__12955__auto__ = null;
if (arguments.length > 0) {
var G__13729__i = 0, G__13729__a = new Array(arguments.length -  0);
while (G__13729__i < G__13729__a.length) {G__13729__a[G__13729__i] = arguments[G__13729__i + 0]; ++G__13729__i;}
  body__12955__auto__ = new cljs.core.IndexedSeq(G__13729__a,0);
} 
return power__delegate.call(this,body__12955__auto__);};
power.cljs$lang$maxFixedArity = 0;
power.cljs$lang$applyTo = (function (arglist__13730){
var body__12955__auto__ = cljs.core.seq(arglist__13730);
return power__delegate(body__12955__auto__);
});
power.cljs$core$IFn$_invoke$arity$variadic = power__delegate;
return power;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.refract = (function() { 
var refract__delegate = function (body__12955__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"refract","refract",-1502353966),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"refract","refract",-1502353966),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__12955__auto__);
};
var refract = function (var_args){
var body__12955__auto__ = null;
if (arguments.length > 0) {
var G__13731__i = 0, G__13731__a = new Array(arguments.length -  0);
while (G__13731__i < G__13731__a.length) {G__13731__a[G__13731__i] = arguments[G__13731__i + 0]; ++G__13731__i;}
  body__12955__auto__ = new cljs.core.IndexedSeq(G__13731__a,0);
} 
return refract__delegate.call(this,body__12955__auto__);};
refract.cljs$lang$maxFixedArity = 0;
refract.cljs$lang$applyTo = (function (arglist__13732){
var body__12955__auto__ = cljs.core.seq(arglist__13732);
return refract__delegate(body__12955__auto__);
});
refract.cljs$core$IFn$_invoke$arity$variadic = refract__delegate;
return refract;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.texture2DLod = (function() { 
var texture2DLod__delegate = function (body__12955__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"texture2DLod","texture2DLod",-1274741294),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"texture2DLod","texture2DLod",-1274741294),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sampler2D","sampler2D",-2107312644),new cljs.core.Keyword(null,"vec2","vec2",-762258640),new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__12955__auto__);
};
var texture2DLod = function (var_args){
var body__12955__auto__ = null;
if (arguments.length > 0) {
var G__13733__i = 0, G__13733__a = new Array(arguments.length -  0);
while (G__13733__i < G__13733__a.length) {G__13733__a[G__13733__i] = arguments[G__13733__i + 0]; ++G__13733__i;}
  body__12955__auto__ = new cljs.core.IndexedSeq(G__13733__a,0);
} 
return texture2DLod__delegate.call(this,body__12955__auto__);};
texture2DLod.cljs$lang$maxFixedArity = 0;
texture2DLod.cljs$lang$applyTo = (function (arglist__13734){
var body__12955__auto__ = cljs.core.seq(arglist__13734);
return texture2DLod__delegate(body__12955__auto__);
});
texture2DLod.cljs$core$IFn$_invoke$arity$variadic = texture2DLod__delegate;
return texture2DLod;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.exp2 = (function() { 
var exp2__delegate = function (body__12955__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"exp2","exp2",-1037021901),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"exp2","exp2",-1037021901),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__12955__auto__);
};
var exp2 = function (var_args){
var body__12955__auto__ = null;
if (arguments.length > 0) {
var G__13735__i = 0, G__13735__a = new Array(arguments.length -  0);
while (G__13735__i < G__13735__a.length) {G__13735__a[G__13735__i] = arguments[G__13735__i + 0]; ++G__13735__i;}
  body__12955__auto__ = new cljs.core.IndexedSeq(G__13735__a,0);
} 
return exp2__delegate.call(this,body__12955__auto__);};
exp2.cljs$lang$maxFixedArity = 0;
exp2.cljs$lang$applyTo = (function (arglist__13736){
var body__12955__auto__ = cljs.core.seq(arglist__13736);
return exp2__delegate(body__12955__auto__);
});
exp2.cljs$core$IFn$_invoke$arity$variadic = exp2__delegate;
return exp2;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.smoothstep = (function() { 
var smoothstep__delegate = function (body__12955__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"smoothstep","smoothstep",968032787),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"smoothstep","smoothstep",968032787),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"smoothstep","smoothstep",968032787),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__12955__auto__);
};
var smoothstep = function (var_args){
var body__12955__auto__ = null;
if (arguments.length > 0) {
var G__13737__i = 0, G__13737__a = new Array(arguments.length -  0);
while (G__13737__i < G__13737__a.length) {G__13737__a[G__13737__i] = arguments[G__13737__i + 0]; ++G__13737__i;}
  body__12955__auto__ = new cljs.core.IndexedSeq(G__13737__a,0);
} 
return smoothstep__delegate.call(this,body__12955__auto__);};
smoothstep.cljs$lang$maxFixedArity = 0;
smoothstep.cljs$lang$applyTo = (function (arglist__13738){
var body__12955__auto__ = cljs.core.seq(arglist__13738);
return smoothstep__delegate(body__12955__auto__);
});
smoothstep.cljs$core$IFn$_invoke$arity$variadic = smoothstep__delegate;
return smoothstep;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.abs = (function() { 
var abs__delegate = function (body__12955__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"abs","abs",-246026477),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"abs","abs",-246026477),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__12955__auto__);
};
var abs = function (var_args){
var body__12955__auto__ = null;
if (arguments.length > 0) {
var G__13739__i = 0, G__13739__a = new Array(arguments.length -  0);
while (G__13739__i < G__13739__a.length) {G__13739__a[G__13739__i] = arguments[G__13739__i + 0]; ++G__13739__i;}
  body__12955__auto__ = new cljs.core.IndexedSeq(G__13739__a,0);
} 
return abs__delegate.call(this,body__12955__auto__);};
abs.cljs$lang$maxFixedArity = 0;
abs.cljs$lang$applyTo = (function (arglist__13740){
var body__12955__auto__ = cljs.core.seq(arglist__13740);
return abs__delegate(body__12955__auto__);
});
abs.cljs$core$IFn$_invoke$arity$variadic = abs__delegate;
return abs;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.max = (function() { 
var max__delegate = function (body__12955__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__12955__auto__);
};
var max = function (var_args){
var body__12955__auto__ = null;
if (arguments.length > 0) {
var G__13741__i = 0, G__13741__a = new Array(arguments.length -  0);
while (G__13741__i < G__13741__a.length) {G__13741__a[G__13741__i] = arguments[G__13741__i + 0]; ++G__13741__i;}
  body__12955__auto__ = new cljs.core.IndexedSeq(G__13741__a,0);
} 
return max__delegate.call(this,body__12955__auto__);};
max.cljs$lang$maxFixedArity = 0;
max.cljs$lang$applyTo = (function (arglist__13742){
var body__12955__auto__ = cljs.core.seq(arglist__13742);
return max__delegate(body__12955__auto__);
});
max.cljs$core$IFn$_invoke$arity$variadic = max__delegate;
return max;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.inversesqrt = (function() { 
var inversesqrt__delegate = function (body__12955__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"inversesqrt","inversesqrt",-1232448652),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"inversesqrt","inversesqrt",-1232448652),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__12955__auto__);
};
var inversesqrt = function (var_args){
var body__12955__auto__ = null;
if (arguments.length > 0) {
var G__13743__i = 0, G__13743__a = new Array(arguments.length -  0);
while (G__13743__i < G__13743__a.length) {G__13743__a[G__13743__i] = arguments[G__13743__i + 0]; ++G__13743__i;}
  body__12955__auto__ = new cljs.core.IndexedSeq(G__13743__a,0);
} 
return inversesqrt__delegate.call(this,body__12955__auto__);};
inversesqrt.cljs$lang$maxFixedArity = 0;
inversesqrt.cljs$lang$applyTo = (function (arglist__13744){
var body__12955__auto__ = cljs.core.seq(arglist__13744);
return inversesqrt__delegate(body__12955__auto__);
});
inversesqrt.cljs$core$IFn$_invoke$arity$variadic = inversesqrt__delegate;
return inversesqrt;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.length = (function() { 
var length__delegate = function (body__12955__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"length","length",588987862),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"length","length",588987862),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__12955__auto__);
};
var length = function (var_args){
var body__12955__auto__ = null;
if (arguments.length > 0) {
var G__13745__i = 0, G__13745__a = new Array(arguments.length -  0);
while (G__13745__i < G__13745__a.length) {G__13745__a[G__13745__i] = arguments[G__13745__i + 0]; ++G__13745__i;}
  body__12955__auto__ = new cljs.core.IndexedSeq(G__13745__a,0);
} 
return length__delegate.call(this,body__12955__auto__);};
length.cljs$lang$maxFixedArity = 0;
length.cljs$lang$applyTo = (function (arglist__13746){
var body__12955__auto__ = cljs.core.seq(arglist__13746);
return length__delegate(body__12955__auto__);
});
length.cljs$core$IFn$_invoke$arity$variadic = length__delegate;
return length;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.sin = (function() { 
var sin__delegate = function (body__12955__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"sin","sin",80907862),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"sin","sin",80907862),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__12955__auto__);
};
var sin = function (var_args){
var body__12955__auto__ = null;
if (arguments.length > 0) {
var G__13747__i = 0, G__13747__a = new Array(arguments.length -  0);
while (G__13747__i < G__13747__a.length) {G__13747__a[G__13747__i] = arguments[G__13747__i + 0]; ++G__13747__i;}
  body__12955__auto__ = new cljs.core.IndexedSeq(G__13747__a,0);
} 
return sin__delegate.call(this,body__12955__auto__);};
sin.cljs$lang$maxFixedArity = 0;
sin.cljs$lang$applyTo = (function (arglist__13748){
var body__12955__auto__ = cljs.core.seq(arglist__13748);
return sin__delegate(body__12955__auto__);
});
sin.cljs$core$IFn$_invoke$arity$variadic = sin__delegate;
return sin;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.texture2DProj = (function() { 
var texture2DProj__delegate = function (body__12955__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"texture2DProj","texture2DProj",1965198007),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"texture2DProj","texture2DProj",1965198007),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sampler2D","sampler2D",-2107312644),new cljs.core.Keyword(null,"vec3","vec3",1116680488),new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"texture2DProj","texture2DProj",1965198007),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sampler2D","sampler2D",-2107312644),new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"texture2DProj","texture2DProj",1965198007),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sampler2D","sampler2D",-2107312644),new cljs.core.Keyword(null,"vec3","vec3",1116680488)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"texture2DProj","texture2DProj",1965198007),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sampler2D","sampler2D",-2107312644),new cljs.core.Keyword(null,"coord","coord",-1453656639)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__12955__auto__);
};
var texture2DProj = function (var_args){
var body__12955__auto__ = null;
if (arguments.length > 0) {
var G__13749__i = 0, G__13749__a = new Array(arguments.length -  0);
while (G__13749__i < G__13749__a.length) {G__13749__a[G__13749__i] = arguments[G__13749__i + 0]; ++G__13749__i;}
  body__12955__auto__ = new cljs.core.IndexedSeq(G__13749__a,0);
} 
return texture2DProj__delegate.call(this,body__12955__auto__);};
texture2DProj.cljs$lang$maxFixedArity = 0;
texture2DProj.cljs$lang$applyTo = (function (arglist__13750){
var body__12955__auto__ = cljs.core.seq(arglist__13750);
return texture2DProj__delegate(body__12955__auto__);
});
texture2DProj.cljs$core$IFn$_invoke$arity$variadic = texture2DProj__delegate;
return texture2DProj;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.faceforward = (function() { 
var faceforward__delegate = function (body__12955__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"faceforward","faceforward",840660504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"faceforward","faceforward",840660504),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__12955__auto__);
};
var faceforward = function (var_args){
var body__12955__auto__ = null;
if (arguments.length > 0) {
var G__13751__i = 0, G__13751__a = new Array(arguments.length -  0);
while (G__13751__i < G__13751__a.length) {G__13751__a[G__13751__i] = arguments[G__13751__i + 0]; ++G__13751__i;}
  body__12955__auto__ = new cljs.core.IndexedSeq(G__13751__a,0);
} 
return faceforward__delegate.call(this,body__12955__auto__);};
faceforward.cljs$lang$maxFixedArity = 0;
faceforward.cljs$lang$applyTo = (function (arglist__13752){
var body__12955__auto__ = cljs.core.seq(arglist__13752);
return faceforward__delegate(body__12955__auto__);
});
faceforward.cljs$core$IFn$_invoke$arity$variadic = faceforward__delegate;
return faceforward;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.dot = (function() { 
var dot__delegate = function (body__12955__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"dot","dot",1442709401),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"dot","dot",1442709401),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__12955__auto__);
};
var dot = function (var_args){
var body__12955__auto__ = null;
if (arguments.length > 0) {
var G__13753__i = 0, G__13753__a = new Array(arguments.length -  0);
while (G__13753__i < G__13753__a.length) {G__13753__a[G__13753__i] = arguments[G__13753__i + 0]; ++G__13753__i;}
  body__12955__auto__ = new cljs.core.IndexedSeq(G__13753__a,0);
} 
return dot__delegate.call(this,body__12955__auto__);};
dot.cljs$lang$maxFixedArity = 0;
dot.cljs$lang$applyTo = (function (arglist__13754){
var body__12955__auto__ = cljs.core.seq(arglist__13754);
return dot__delegate(body__12955__auto__);
});
dot.cljs$core$IFn$_invoke$arity$variadic = dot__delegate;
return dot;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.distance = (function() { 
var distance__delegate = function (body__12955__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"distance","distance",-1671893894),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"distance","distance",-1671893894),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__12955__auto__);
};
var distance = function (var_args){
var body__12955__auto__ = null;
if (arguments.length > 0) {
var G__13755__i = 0, G__13755__a = new Array(arguments.length -  0);
while (G__13755__i < G__13755__a.length) {G__13755__a[G__13755__i] = arguments[G__13755__i + 0]; ++G__13755__i;}
  body__12955__auto__ = new cljs.core.IndexedSeq(G__13755__a,0);
} 
return distance__delegate.call(this,body__12955__auto__);};
distance.cljs$lang$maxFixedArity = 0;
distance.cljs$lang$applyTo = (function (arglist__13756){
var body__12955__auto__ = cljs.core.seq(arglist__13756);
return distance__delegate(body__12955__auto__);
});
distance.cljs$core$IFn$_invoke$arity$variadic = distance__delegate;
return distance;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.fract = (function() { 
var fract__delegate = function (body__12955__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"fract","fract",-2061728070),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"fract","fract",-2061728070),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__12955__auto__);
};
var fract = function (var_args){
var body__12955__auto__ = null;
if (arguments.length > 0) {
var G__13757__i = 0, G__13757__a = new Array(arguments.length -  0);
while (G__13757__i < G__13757__a.length) {G__13757__a[G__13757__i] = arguments[G__13757__i + 0]; ++G__13757__i;}
  body__12955__auto__ = new cljs.core.IndexedSeq(G__13757__a,0);
} 
return fract__delegate.call(this,body__12955__auto__);};
fract.cljs$lang$maxFixedArity = 0;
fract.cljs$lang$applyTo = (function (arglist__13758){
var body__12955__auto__ = cljs.core.seq(arglist__13758);
return fract__delegate(body__12955__auto__);
});
fract.cljs$core$IFn$_invoke$arity$variadic = fract__delegate;
return fract;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.clamp = (function() { 
var clamp__delegate = function (body__12955__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"clamp","clamp",1803814940),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"clamp","clamp",1803814940),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"clamp","clamp",1803814940),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__12955__auto__);
};
var clamp = function (var_args){
var body__12955__auto__ = null;
if (arguments.length > 0) {
var G__13759__i = 0, G__13759__a = new Array(arguments.length -  0);
while (G__13759__i < G__13759__a.length) {G__13759__a[G__13759__i] = arguments[G__13759__i + 0]; ++G__13759__i;}
  body__12955__auto__ = new cljs.core.IndexedSeq(G__13759__a,0);
} 
return clamp__delegate.call(this,body__12955__auto__);};
clamp.cljs$lang$maxFixedArity = 0;
clamp.cljs$lang$applyTo = (function (arglist__13760){
var body__12955__auto__ = cljs.core.seq(arglist__13760);
return clamp__delegate(body__12955__auto__);
});
clamp.cljs$core$IFn$_invoke$arity$variadic = clamp__delegate;
return clamp;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.radians = (function() { 
var radians__delegate = function (body__12955__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"radians","radians",1835725084),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"radians","radians",1835725084),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__12955__auto__);
};
var radians = function (var_args){
var body__12955__auto__ = null;
if (arguments.length > 0) {
var G__13761__i = 0, G__13761__a = new Array(arguments.length -  0);
while (G__13761__i < G__13761__a.length) {G__13761__a[G__13761__i] = arguments[G__13761__i + 0]; ++G__13761__i;}
  body__12955__auto__ = new cljs.core.IndexedSeq(G__13761__a,0);
} 
return radians__delegate.call(this,body__12955__auto__);};
radians.cljs$lang$maxFixedArity = 0;
radians.cljs$lang$applyTo = (function (arglist__13762){
var body__12955__auto__ = cljs.core.seq(arglist__13762);
return radians__delegate(body__12955__auto__);
});
radians.cljs$core$IFn$_invoke$arity$variadic = radians__delegate;
return radians;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.degrees = (function() { 
var degrees__delegate = function (body__12955__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"degrees","degrees",2015169884),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"degrees","degrees",2015169884),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__12955__auto__);
};
var degrees = function (var_args){
var body__12955__auto__ = null;
if (arguments.length > 0) {
var G__13763__i = 0, G__13763__a = new Array(arguments.length -  0);
while (G__13763__i < G__13763__a.length) {G__13763__a[G__13763__i] = arguments[G__13763__i + 0]; ++G__13763__i;}
  body__12955__auto__ = new cljs.core.IndexedSeq(G__13763__a,0);
} 
return degrees__delegate.call(this,body__12955__auto__);};
degrees.cljs$lang$maxFixedArity = 0;
degrees.cljs$lang$applyTo = (function (arglist__13764){
var body__12955__auto__ = cljs.core.seq(arglist__13764);
return degrees__delegate(body__12955__auto__);
});
degrees.cljs$core$IFn$_invoke$arity$variadic = degrees__delegate;
return degrees;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.acos = (function() { 
var acos__delegate = function (body__12955__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"acos","acos",-1286789764),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"acos","acos",-1286789764),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__12955__auto__);
};
var acos = function (var_args){
var body__12955__auto__ = null;
if (arguments.length > 0) {
var G__13765__i = 0, G__13765__a = new Array(arguments.length -  0);
while (G__13765__i < G__13765__a.length) {G__13765__a[G__13765__i] = arguments[G__13765__i + 0]; ++G__13765__i;}
  body__12955__auto__ = new cljs.core.IndexedSeq(G__13765__a,0);
} 
return acos__delegate.call(this,body__12955__auto__);};
acos.cljs$lang$maxFixedArity = 0;
acos.cljs$lang$applyTo = (function (arglist__13766){
var body__12955__auto__ = cljs.core.seq(arglist__13766);
return acos__delegate(body__12955__auto__);
});
acos.cljs$core$IFn$_invoke$arity$variadic = acos__delegate;
return acos;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.step = (function() { 
var step__delegate = function (body__12955__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__12955__auto__);
};
var step = function (var_args){
var body__12955__auto__ = null;
if (arguments.length > 0) {
var G__13767__i = 0, G__13767__a = new Array(arguments.length -  0);
while (G__13767__i < G__13767__a.length) {G__13767__a[G__13767__i] = arguments[G__13767__i + 0]; ++G__13767__i;}
  body__12955__auto__ = new cljs.core.IndexedSeq(G__13767__a,0);
} 
return step__delegate.call(this,body__12955__auto__);};
step.cljs$lang$maxFixedArity = 0;
step.cljs$lang$applyTo = (function (arglist__13768){
var body__12955__auto__ = cljs.core.seq(arglist__13768);
return step__delegate(body__12955__auto__);
});
step.cljs$core$IFn$_invoke$arity$variadic = step__delegate;
return step;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.log = (function() { 
var log__delegate = function (body__12955__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__12955__auto__);
};
var log = function (var_args){
var body__12955__auto__ = null;
if (arguments.length > 0) {
var G__13769__i = 0, G__13769__a = new Array(arguments.length -  0);
while (G__13769__i < G__13769__a.length) {G__13769__a[G__13769__i] = arguments[G__13769__i + 0]; ++G__13769__i;}
  body__12955__auto__ = new cljs.core.IndexedSeq(G__13769__a,0);
} 
return log__delegate.call(this,body__12955__auto__);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__13770){
var body__12955__auto__ = cljs.core.seq(arglist__13770);
return log__delegate(body__12955__auto__);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.normalize = (function() { 
var normalize__delegate = function (body__12955__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"normalize","normalize",-1904390051),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"normalize","normalize",-1904390051),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__12955__auto__);
};
var normalize = function (var_args){
var body__12955__auto__ = null;
if (arguments.length > 0) {
var G__13771__i = 0, G__13771__a = new Array(arguments.length -  0);
while (G__13771__i < G__13771__a.length) {G__13771__a[G__13771__i] = arguments[G__13771__i + 0]; ++G__13771__i;}
  body__12955__auto__ = new cljs.core.IndexedSeq(G__13771__a,0);
} 
return normalize__delegate.call(this,body__12955__auto__);};
normalize.cljs$lang$maxFixedArity = 0;
normalize.cljs$lang$applyTo = (function (arglist__13772){
var body__12955__auto__ = cljs.core.seq(arglist__13772);
return normalize__delegate(body__12955__auto__);
});
normalize.cljs$core$IFn$_invoke$arity$variadic = normalize__delegate;
return normalize;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.floor = (function() { 
var floor__delegate = function (body__12955__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__12955__auto__);
};
var floor = function (var_args){
var body__12955__auto__ = null;
if (arguments.length > 0) {
var G__13773__i = 0, G__13773__a = new Array(arguments.length -  0);
while (G__13773__i < G__13773__a.length) {G__13773__a[G__13773__i] = arguments[G__13773__i + 0]; ++G__13773__i;}
  body__12955__auto__ = new cljs.core.IndexedSeq(G__13773__a,0);
} 
return floor__delegate.call(this,body__12955__auto__);};
floor.cljs$lang$maxFixedArity = 0;
floor.cljs$lang$applyTo = (function (arglist__13774){
var body__12955__auto__ = cljs.core.seq(arglist__13774);
return floor__delegate(body__12955__auto__);
});
floor.cljs$core$IFn$_invoke$arity$variadic = floor__delegate;
return floor;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.cross = (function() { 
var cross__delegate = function (body__12955__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"cross","cross",194557789),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"cross","cross",194557789),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),new cljs.core.Keyword(null,"vec3","vec3",1116680488)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"vec3","vec3",1116680488),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__12955__auto__);
};
var cross = function (var_args){
var body__12955__auto__ = null;
if (arguments.length > 0) {
var G__13775__i = 0, G__13775__a = new Array(arguments.length -  0);
while (G__13775__i < G__13775__a.length) {G__13775__a[G__13775__i] = arguments[G__13775__i + 0]; ++G__13775__i;}
  body__12955__auto__ = new cljs.core.IndexedSeq(G__13775__a,0);
} 
return cross__delegate.call(this,body__12955__auto__);};
cross.cljs$lang$maxFixedArity = 0;
cross.cljs$lang$applyTo = (function (arglist__13776){
var body__12955__auto__ = cljs.core.seq(arglist__13776);
return cross__delegate(body__12955__auto__);
});
cross.cljs$core$IFn$_invoke$arity$variadic = cross__delegate;
return cross;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.reflect = (function() { 
var reflect__delegate = function (body__12955__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"reflect","reflect",-2113821122),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"reflect","reflect",-2113821122),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__12955__auto__);
};
var reflect = function (var_args){
var body__12955__auto__ = null;
if (arguments.length > 0) {
var G__13777__i = 0, G__13777__a = new Array(arguments.length -  0);
while (G__13777__i < G__13777__a.length) {G__13777__a[G__13777__i] = arguments[G__13777__i + 0]; ++G__13777__i;}
  body__12955__auto__ = new cljs.core.IndexedSeq(G__13777__a,0);
} 
return reflect__delegate.call(this,body__12955__auto__);};
reflect.cljs$lang$maxFixedArity = 0;
reflect.cljs$lang$applyTo = (function (arglist__13778){
var body__12955__auto__ = cljs.core.seq(arglist__13778);
return reflect__delegate(body__12955__auto__);
});
reflect.cljs$core$IFn$_invoke$arity$variadic = reflect__delegate;
return reflect;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.selector = (function() { 
var selector__delegate = function (body__12953__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"selector","selector",762528866),body__12953__auto__);
};
var selector = function (var_args){
var body__12953__auto__ = null;
if (arguments.length > 0) {
var G__13779__i = 0, G__13779__a = new Array(arguments.length -  0);
while (G__13779__i < G__13779__a.length) {G__13779__a[G__13779__i] = arguments[G__13779__i + 0]; ++G__13779__i;}
  body__12953__auto__ = new cljs.core.IndexedSeq(G__13779__a,0);
} 
return selector__delegate.call(this,body__12953__auto__);};
selector.cljs$lang$maxFixedArity = 0;
selector.cljs$lang$applyTo = (function (arglist__13780){
var body__12953__auto__ = cljs.core.seq(arglist__13780);
return selector__delegate(body__12953__auto__);
});
selector.cljs$core$IFn$_invoke$arity$variadic = selector__delegate;
return selector;
})()
;

/**
* @param {...*} var_args
*/
gamma.api._LT__EQ_ = (function() { 
var _LT__EQ___delegate = function (body__12953__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"<=","<=",-395636158),body__12953__auto__);
};
var _LT__EQ_ = function (var_args){
var body__12953__auto__ = null;
if (arguments.length > 0) {
var G__13781__i = 0, G__13781__a = new Array(arguments.length -  0);
while (G__13781__i < G__13781__a.length) {G__13781__a[G__13781__i] = arguments[G__13781__i + 0]; ++G__13781__i;}
  body__12953__auto__ = new cljs.core.IndexedSeq(G__13781__a,0);
} 
return _LT__EQ___delegate.call(this,body__12953__auto__);};
_LT__EQ_.cljs$lang$maxFixedArity = 0;
_LT__EQ_.cljs$lang$applyTo = (function (arglist__13782){
var body__12953__auto__ = cljs.core.seq(arglist__13782);
return _LT__EQ___delegate(body__12953__auto__);
});
_LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = _LT__EQ___delegate;
return _LT__EQ_;
})()
;

/**
* @param {...*} var_args
*/
gamma.api._STAR_ = (function() { 
var _STAR___delegate = function (body__12953__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"*","*",-1294732318),body__12953__auto__);
};
var _STAR_ = function (var_args){
var body__12953__auto__ = null;
if (arguments.length > 0) {
var G__13783__i = 0, G__13783__a = new Array(arguments.length -  0);
while (G__13783__i < G__13783__a.length) {G__13783__a[G__13783__i] = arguments[G__13783__i + 0]; ++G__13783__i;}
  body__12953__auto__ = new cljs.core.IndexedSeq(G__13783__a,0);
} 
return _STAR___delegate.call(this,body__12953__auto__);};
_STAR_.cljs$lang$maxFixedArity = 0;
_STAR_.cljs$lang$applyTo = (function (arglist__13784){
var body__12953__auto__ = cljs.core.seq(arglist__13784);
return _STAR___delegate(body__12953__auto__);
});
_STAR_.cljs$core$IFn$_invoke$arity$variadic = _STAR___delegate;
return _STAR_;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.increment = (function() { 
var increment__delegate = function (body__12953__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"increment","increment",-1558831484),body__12953__auto__);
};
var increment = function (var_args){
var body__12953__auto__ = null;
if (arguments.length > 0) {
var G__13785__i = 0, G__13785__a = new Array(arguments.length -  0);
while (G__13785__i < G__13785__a.length) {G__13785__a[G__13785__i] = arguments[G__13785__i + 0]; ++G__13785__i;}
  body__12953__auto__ = new cljs.core.IndexedSeq(G__13785__a,0);
} 
return increment__delegate.call(this,body__12953__auto__);};
increment.cljs$lang$maxFixedArity = 0;
increment.cljs$lang$applyTo = (function (arglist__13786){
var body__12953__auto__ = cljs.core.seq(arglist__13786);
return increment__delegate(body__12953__auto__);
});
increment.cljs$core$IFn$_invoke$arity$variadic = increment__delegate;
return increment;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.pre_decrement = (function() { 
var pre_decrement__delegate = function (body__12953__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"pre-decrement","pre-decrement",1269674757),body__12953__auto__);
};
var pre_decrement = function (var_args){
var body__12953__auto__ = null;
if (arguments.length > 0) {
var G__13787__i = 0, G__13787__a = new Array(arguments.length -  0);
while (G__13787__i < G__13787__a.length) {G__13787__a[G__13787__i] = arguments[G__13787__i + 0]; ++G__13787__i;}
  body__12953__auto__ = new cljs.core.IndexedSeq(G__13787__a,0);
} 
return pre_decrement__delegate.call(this,body__12953__auto__);};
pre_decrement.cljs$lang$maxFixedArity = 0;
pre_decrement.cljs$lang$applyTo = (function (arglist__13788){
var body__12953__auto__ = cljs.core.seq(arglist__13788);
return pre_decrement__delegate(body__12953__auto__);
});
pre_decrement.cljs$core$IFn$_invoke$arity$variadic = pre_decrement__delegate;
return pre_decrement;
})()
;

/**
* @param {...*} var_args
*/
gamma.api._GT_ = (function() { 
var _GT___delegate = function (body__12953__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,">",">",-555517146),body__12953__auto__);
};
var _GT_ = function (var_args){
var body__12953__auto__ = null;
if (arguments.length > 0) {
var G__13789__i = 0, G__13789__a = new Array(arguments.length -  0);
while (G__13789__i < G__13789__a.length) {G__13789__a[G__13789__i] = arguments[G__13789__i + 0]; ++G__13789__i;}
  body__12953__auto__ = new cljs.core.IndexedSeq(G__13789__a,0);
} 
return _GT___delegate.call(this,body__12953__auto__);};
_GT_.cljs$lang$maxFixedArity = 0;
_GT_.cljs$lang$applyTo = (function (arglist__13790){
var body__12953__auto__ = cljs.core.seq(arglist__13790);
return _GT___delegate(body__12953__auto__);
});
_GT_.cljs$core$IFn$_invoke$arity$variadic = _GT___delegate;
return _GT_;
})()
;

/**
* @param {...*} var_args
*/
gamma.api._ = (function() { 
var ___delegate = function (body__12953__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"-","-",-2112348439),body__12953__auto__);
};
var _ = function (var_args){
var body__12953__auto__ = null;
if (arguments.length > 0) {
var G__13791__i = 0, G__13791__a = new Array(arguments.length -  0);
while (G__13791__i < G__13791__a.length) {G__13791__a[G__13791__i] = arguments[G__13791__i + 0]; ++G__13791__i;}
  body__12953__auto__ = new cljs.core.IndexedSeq(G__13791__a,0);
} 
return ___delegate.call(this,body__12953__auto__);};
_.cljs$lang$maxFixedArity = 0;
_.cljs$lang$applyTo = (function (arglist__13792){
var body__12953__auto__ = cljs.core.seq(arglist__13792);
return ___delegate(body__12953__auto__);
});
_.cljs$core$IFn$_invoke$arity$variadic = ___delegate;
return _;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.or = (function() { 
var or__delegate = function (body__12953__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"or","or",235744169),body__12953__auto__);
};
var or = function (var_args){
var body__12953__auto__ = null;
if (arguments.length > 0) {
var G__13793__i = 0, G__13793__a = new Array(arguments.length -  0);
while (G__13793__i < G__13793__a.length) {G__13793__a[G__13793__i] = arguments[G__13793__i + 0]; ++G__13793__i;}
  body__12953__auto__ = new cljs.core.IndexedSeq(G__13793__a,0);
} 
return or__delegate.call(this,body__12953__auto__);};
or.cljs$lang$maxFixedArity = 0;
or.cljs$lang$applyTo = (function (arglist__13794){
var body__12953__auto__ = cljs.core.seq(arglist__13794);
return or__delegate(body__12953__auto__);
});
or.cljs$core$IFn$_invoke$arity$variadic = or__delegate;
return or;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.set_div = (function() { 
var set_div__delegate = function (body__12953__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"set-div","set-div",991399498),body__12953__auto__);
};
var set_div = function (var_args){
var body__12953__auto__ = null;
if (arguments.length > 0) {
var G__13795__i = 0, G__13795__a = new Array(arguments.length -  0);
while (G__13795__i < G__13795__a.length) {G__13795__a[G__13795__i] = arguments[G__13795__i + 0]; ++G__13795__i;}
  body__12953__auto__ = new cljs.core.IndexedSeq(G__13795__a,0);
} 
return set_div__delegate.call(this,body__12953__auto__);};
set_div.cljs$lang$maxFixedArity = 0;
set_div.cljs$lang$applyTo = (function (arglist__13796){
var body__12953__auto__ = cljs.core.seq(arglist__13796);
return set_div__delegate(body__12953__auto__);
});
set_div.cljs$core$IFn$_invoke$arity$variadic = set_div__delegate;
return set_div;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.pre_increment = (function() { 
var pre_increment__delegate = function (body__12953__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"pre-increment","pre-increment",-1566257876),body__12953__auto__);
};
var pre_increment = function (var_args){
var body__12953__auto__ = null;
if (arguments.length > 0) {
var G__13797__i = 0, G__13797__a = new Array(arguments.length -  0);
while (G__13797__i < G__13797__a.length) {G__13797__a[G__13797__i] = arguments[G__13797__i + 0]; ++G__13797__i;}
  body__12953__auto__ = new cljs.core.IndexedSeq(G__13797__a,0);
} 
return pre_increment__delegate.call(this,body__12953__auto__);};
pre_increment.cljs$lang$maxFixedArity = 0;
pre_increment.cljs$lang$applyTo = (function (arglist__13798){
var body__12953__auto__ = cljs.core.seq(arglist__13798);
return pre_increment__delegate(body__12953__auto__);
});
pre_increment.cljs$core$IFn$_invoke$arity$variadic = pre_increment__delegate;
return pre_increment;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.not = (function() { 
var not__delegate = function (body__12953__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"not","not",-595976884),body__12953__auto__);
};
var not = function (var_args){
var body__12953__auto__ = null;
if (arguments.length > 0) {
var G__13799__i = 0, G__13799__a = new Array(arguments.length -  0);
while (G__13799__i < G__13799__a.length) {G__13799__a[G__13799__i] = arguments[G__13799__i + 0]; ++G__13799__i;}
  body__12953__auto__ = new cljs.core.IndexedSeq(G__13799__a,0);
} 
return not__delegate.call(this,body__12953__auto__);};
not.cljs$lang$maxFixedArity = 0;
not.cljs$lang$applyTo = (function (arglist__13800){
var body__12953__auto__ = cljs.core.seq(arglist__13800);
return not__delegate(body__12953__auto__);
});
not.cljs$core$IFn$_invoke$arity$variadic = not__delegate;
return not;
})()
;

/**
* @param {...*} var_args
*/
gamma.api._GT__EQ_ = (function() { 
var _GT__EQ___delegate = function (body__12953__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,">=",">=",-623615505),body__12953__auto__);
};
var _GT__EQ_ = function (var_args){
var body__12953__auto__ = null;
if (arguments.length > 0) {
var G__13801__i = 0, G__13801__a = new Array(arguments.length -  0);
while (G__13801__i < G__13801__a.length) {G__13801__a[G__13801__i] = arguments[G__13801__i + 0]; ++G__13801__i;}
  body__12953__auto__ = new cljs.core.IndexedSeq(G__13801__a,0);
} 
return _GT__EQ___delegate.call(this,body__12953__auto__);};
_GT__EQ_.cljs$lang$maxFixedArity = 0;
_GT__EQ_.cljs$lang$applyTo = (function (arglist__13802){
var body__12953__auto__ = cljs.core.seq(arglist__13802);
return _GT__EQ___delegate(body__12953__auto__);
});
_GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = _GT__EQ___delegate;
return _GT__EQ_;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.div = (function() { 
var div__delegate = function (body__12953__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"div","div",1057191632),body__12953__auto__);
};
var div = function (var_args){
var body__12953__auto__ = null;
if (arguments.length > 0) {
var G__13803__i = 0, G__13803__a = new Array(arguments.length -  0);
while (G__13803__i < G__13803__a.length) {G__13803__a[G__13803__i] = arguments[G__13803__i + 0]; ++G__13803__i;}
  body__12953__auto__ = new cljs.core.IndexedSeq(G__13803__a,0);
} 
return div__delegate.call(this,body__12953__auto__);};
div.cljs$lang$maxFixedArity = 0;
div.cljs$lang$applyTo = (function (arglist__13804){
var body__12953__auto__ = cljs.core.seq(arglist__13804);
return div__delegate(body__12953__auto__);
});
div.cljs$core$IFn$_invoke$arity$variadic = div__delegate;
return div;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.conditional_choice = (function() { 
var conditional_choice__delegate = function (body__12953__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"conditional-choice","conditional-choice",1872771601),body__12953__auto__);
};
var conditional_choice = function (var_args){
var body__12953__auto__ = null;
if (arguments.length > 0) {
var G__13805__i = 0, G__13805__a = new Array(arguments.length -  0);
while (G__13805__i < G__13805__a.length) {G__13805__a[G__13805__i] = arguments[G__13805__i + 0]; ++G__13805__i;}
  body__12953__auto__ = new cljs.core.IndexedSeq(G__13805__a,0);
} 
return conditional_choice__delegate.call(this,body__12953__auto__);};
conditional_choice.cljs$lang$maxFixedArity = 0;
conditional_choice.cljs$lang$applyTo = (function (arglist__13806){
var body__12953__auto__ = cljs.core.seq(arglist__13806);
return conditional_choice__delegate(body__12953__auto__);
});
conditional_choice.cljs$core$IFn$_invoke$arity$variadic = conditional_choice__delegate;
return conditional_choice;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.set_PLUS_ = (function() { 
var set_PLUS___delegate = function (body__12953__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"set+","set+",1784778737),body__12953__auto__);
};
var set_PLUS_ = function (var_args){
var body__12953__auto__ = null;
if (arguments.length > 0) {
var G__13807__i = 0, G__13807__a = new Array(arguments.length -  0);
while (G__13807__i < G__13807__a.length) {G__13807__a[G__13807__i] = arguments[G__13807__i + 0]; ++G__13807__i;}
  body__12953__auto__ = new cljs.core.IndexedSeq(G__13807__a,0);
} 
return set_PLUS___delegate.call(this,body__12953__auto__);};
set_PLUS_.cljs$lang$maxFixedArity = 0;
set_PLUS_.cljs$lang$applyTo = (function (arglist__13808){
var body__12953__auto__ = cljs.core.seq(arglist__13808);
return set_PLUS___delegate(body__12953__auto__);
});
set_PLUS_.cljs$core$IFn$_invoke$arity$variadic = set_PLUS___delegate;
return set_PLUS_;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.set_ = (function() { 
var set___delegate = function (body__12953__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"set-","set-",-1958952622),body__12953__auto__);
};
var set_ = function (var_args){
var body__12953__auto__ = null;
if (arguments.length > 0) {
var G__13809__i = 0, G__13809__a = new Array(arguments.length -  0);
while (G__13809__i < G__13809__a.length) {G__13809__a[G__13809__i] = arguments[G__13809__i + 0]; ++G__13809__i;}
  body__12953__auto__ = new cljs.core.IndexedSeq(G__13809__a,0);
} 
return set___delegate.call(this,body__12953__auto__);};
set_.cljs$lang$maxFixedArity = 0;
set_.cljs$lang$applyTo = (function (arglist__13810){
var body__12953__auto__ = cljs.core.seq(arglist__13810);
return set___delegate(body__12953__auto__);
});
set_.cljs$core$IFn$_invoke$arity$variadic = set___delegate;
return set_;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.xor = (function() { 
var xor__delegate = function (body__12953__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"xor","xor",-1119942254),body__12953__auto__);
};
var xor = function (var_args){
var body__12953__auto__ = null;
if (arguments.length > 0) {
var G__13811__i = 0, G__13811__a = new Array(arguments.length -  0);
while (G__13811__i < G__13811__a.length) {G__13811__a[G__13811__i] = arguments[G__13811__i + 0]; ++G__13811__i;}
  body__12953__auto__ = new cljs.core.IndexedSeq(G__13811__a,0);
} 
return xor__delegate.call(this,body__12953__auto__);};
xor.cljs$lang$maxFixedArity = 0;
xor.cljs$lang$applyTo = (function (arglist__13812){
var body__12953__auto__ = cljs.core.seq(arglist__13812);
return xor__delegate(body__12953__auto__);
});
xor.cljs$core$IFn$_invoke$arity$variadic = xor__delegate;
return xor;
})()
;

/**
* @param {...*} var_args
*/
gamma.api._PLUS_ = (function() { 
var _PLUS___delegate = function (body__12953__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"+","+",1913524883),body__12953__auto__);
};
var _PLUS_ = function (var_args){
var body__12953__auto__ = null;
if (arguments.length > 0) {
var G__13813__i = 0, G__13813__a = new Array(arguments.length -  0);
while (G__13813__i < G__13813__a.length) {G__13813__a[G__13813__i] = arguments[G__13813__i + 0]; ++G__13813__i;}
  body__12953__auto__ = new cljs.core.IndexedSeq(G__13813__a,0);
} 
return _PLUS___delegate.call(this,body__12953__auto__);};
_PLUS_.cljs$lang$maxFixedArity = 0;
_PLUS_.cljs$lang$applyTo = (function (arglist__13814){
var body__12953__auto__ = cljs.core.seq(arglist__13814);
return _PLUS___delegate(body__12953__auto__);
});
_PLUS_.cljs$core$IFn$_invoke$arity$variadic = _PLUS___delegate;
return _PLUS_;
})()
;

/**
* @param {...*} var_args
*/
gamma.api._BANG__EQ_ = (function() { 
var _BANG__EQ___delegate = function (body__12953__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"!=","!=",-1841737356),body__12953__auto__);
};
var _BANG__EQ_ = function (var_args){
var body__12953__auto__ = null;
if (arguments.length > 0) {
var G__13815__i = 0, G__13815__a = new Array(arguments.length -  0);
while (G__13815__i < G__13815__a.length) {G__13815__a[G__13815__i] = arguments[G__13815__i + 0]; ++G__13815__i;}
  body__12953__auto__ = new cljs.core.IndexedSeq(G__13815__a,0);
} 
return _BANG__EQ___delegate.call(this,body__12953__auto__);};
_BANG__EQ_.cljs$lang$maxFixedArity = 0;
_BANG__EQ_.cljs$lang$applyTo = (function (arglist__13816){
var body__12953__auto__ = cljs.core.seq(arglist__13816);
return _BANG__EQ___delegate(body__12953__auto__);
});
_BANG__EQ_.cljs$core$IFn$_invoke$arity$variadic = _BANG__EQ___delegate;
return _BANG__EQ_;
})()
;

/**
* @param {...*} var_args
*/
gamma.api._EQ__EQ_ = (function() { 
var _EQ__EQ___delegate = function (body__12953__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"==","==",-1874649676),body__12953__auto__);
};
var _EQ__EQ_ = function (var_args){
var body__12953__auto__ = null;
if (arguments.length > 0) {
var G__13817__i = 0, G__13817__a = new Array(arguments.length -  0);
while (G__13817__i < G__13817__a.length) {G__13817__a[G__13817__i] = arguments[G__13817__i + 0]; ++G__13817__i;}
  body__12953__auto__ = new cljs.core.IndexedSeq(G__13817__a,0);
} 
return _EQ__EQ___delegate.call(this,body__12953__auto__);};
_EQ__EQ_.cljs$lang$maxFixedArity = 0;
_EQ__EQ_.cljs$lang$applyTo = (function (arglist__13818){
var body__12953__auto__ = cljs.core.seq(arglist__13818);
return _EQ__EQ___delegate(body__12953__auto__);
});
_EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = _EQ__EQ___delegate;
return _EQ__EQ_;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.constructor = (function() { 
var constructor__delegate = function (body__12953__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"constructor","constructor",-1953928811),body__12953__auto__);
};
var constructor = function (var_args){
var body__12953__auto__ = null;
if (arguments.length > 0) {
var G__13819__i = 0, G__13819__a = new Array(arguments.length -  0);
while (G__13819__i < G__13819__a.length) {G__13819__a[G__13819__i] = arguments[G__13819__i + 0]; ++G__13819__i;}
  body__12953__auto__ = new cljs.core.IndexedSeq(G__13819__a,0);
} 
return constructor__delegate.call(this,body__12953__auto__);};
constructor.cljs$lang$maxFixedArity = 0;
constructor.cljs$lang$applyTo = (function (arglist__13820){
var body__12953__auto__ = cljs.core.seq(arglist__13820);
return constructor__delegate(body__12953__auto__);
});
constructor.cljs$core$IFn$_invoke$arity$variadic = constructor__delegate;
return constructor;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.and = (function() { 
var and__delegate = function (body__12953__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"and","and",-971899817),body__12953__auto__);
};
var and = function (var_args){
var body__12953__auto__ = null;
if (arguments.length > 0) {
var G__13821__i = 0, G__13821__a = new Array(arguments.length -  0);
while (G__13821__i < G__13821__a.length) {G__13821__a[G__13821__i] = arguments[G__13821__i + 0]; ++G__13821__i;}
  body__12953__auto__ = new cljs.core.IndexedSeq(G__13821__a,0);
} 
return and__delegate.call(this,body__12953__auto__);};
and.cljs$lang$maxFixedArity = 0;
and.cljs$lang$applyTo = (function (arglist__13822){
var body__12953__auto__ = cljs.core.seq(arglist__13822);
return and__delegate(body__12953__auto__);
});
and.cljs$core$IFn$_invoke$arity$variadic = and__delegate;
return and;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.decrement = (function() { 
var decrement__delegate = function (body__12953__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"decrement","decrement",-725286119),body__12953__auto__);
};
var decrement = function (var_args){
var body__12953__auto__ = null;
if (arguments.length > 0) {
var G__13823__i = 0, G__13823__a = new Array(arguments.length -  0);
while (G__13823__i < G__13823__a.length) {G__13823__a[G__13823__i] = arguments[G__13823__i + 0]; ++G__13823__i;}
  body__12953__auto__ = new cljs.core.IndexedSeq(G__13823__a,0);
} 
return decrement__delegate.call(this,body__12953__auto__);};
decrement.cljs$lang$maxFixedArity = 0;
decrement.cljs$lang$applyTo = (function (arglist__13824){
var body__12953__auto__ = cljs.core.seq(arglist__13824);
return decrement__delegate(body__12953__auto__);
});
decrement.cljs$core$IFn$_invoke$arity$variadic = decrement__delegate;
return decrement;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.set = (function() { 
var set__delegate = function (body__12953__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"set","set",304602554),body__12953__auto__);
};
var set = function (var_args){
var body__12953__auto__ = null;
if (arguments.length > 0) {
var G__13825__i = 0, G__13825__a = new Array(arguments.length -  0);
while (G__13825__i < G__13825__a.length) {G__13825__a[G__13825__i] = arguments[G__13825__i + 0]; ++G__13825__i;}
  body__12953__auto__ = new cljs.core.IndexedSeq(G__13825__a,0);
} 
return set__delegate.call(this,body__12953__auto__);};
set.cljs$lang$maxFixedArity = 0;
set.cljs$lang$applyTo = (function (arglist__13826){
var body__12953__auto__ = cljs.core.seq(arglist__13826);
return set__delegate(body__12953__auto__);
});
set.cljs$core$IFn$_invoke$arity$variadic = set__delegate;
return set;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.set_STAR_ = (function() { 
var set_STAR___delegate = function (body__12953__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"set*","set*",-966220230),body__12953__auto__);
};
var set_STAR_ = function (var_args){
var body__12953__auto__ = null;
if (arguments.length > 0) {
var G__13827__i = 0, G__13827__a = new Array(arguments.length -  0);
while (G__13827__i < G__13827__a.length) {G__13827__a[G__13827__i] = arguments[G__13827__i + 0]; ++G__13827__i;}
  body__12953__auto__ = new cljs.core.IndexedSeq(G__13827__a,0);
} 
return set_STAR___delegate.call(this,body__12953__auto__);};
set_STAR_.cljs$lang$maxFixedArity = 0;
set_STAR_.cljs$lang$applyTo = (function (arglist__13828){
var body__12953__auto__ = cljs.core.seq(arglist__13828);
return set_STAR___delegate(body__12953__auto__);
});
set_STAR_.cljs$core$IFn$_invoke$arity$variadic = set_STAR___delegate;
return set_STAR_;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.aget = (function() { 
var aget__delegate = function (body__12953__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"aget","aget",-149474981),body__12953__auto__);
};
var aget = function (var_args){
var body__12953__auto__ = null;
if (arguments.length > 0) {
var G__13829__i = 0, G__13829__a = new Array(arguments.length -  0);
while (G__13829__i < G__13829__a.length) {G__13829__a[G__13829__i] = arguments[G__13829__i + 0]; ++G__13829__i;}
  body__12953__auto__ = new cljs.core.IndexedSeq(G__13829__a,0);
} 
return aget__delegate.call(this,body__12953__auto__);};
aget.cljs$lang$maxFixedArity = 0;
aget.cljs$lang$applyTo = (function (arglist__13830){
var body__12953__auto__ = cljs.core.seq(arglist__13830);
return aget__delegate(body__12953__auto__);
});
aget.cljs$core$IFn$_invoke$arity$variadic = aget__delegate;
return aget;
})()
;

/**
* @param {...*} var_args
*/
gamma.api._PLUS__ = (function() { 
var _PLUS____delegate = function (body__12953__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"+-","+-",1426840219),body__12953__auto__);
};
var _PLUS__ = function (var_args){
var body__12953__auto__ = null;
if (arguments.length > 0) {
var G__13831__i = 0, G__13831__a = new Array(arguments.length -  0);
while (G__13831__i < G__13831__a.length) {G__13831__a[G__13831__i] = arguments[G__13831__i + 0]; ++G__13831__i;}
  body__12953__auto__ = new cljs.core.IndexedSeq(G__13831__a,0);
} 
return _PLUS____delegate.call(this,body__12953__auto__);};
_PLUS__.cljs$lang$maxFixedArity = 0;
_PLUS__.cljs$lang$applyTo = (function (arglist__13832){
var body__12953__auto__ = cljs.core.seq(arglist__13832);
return _PLUS____delegate(body__12953__auto__);
});
_PLUS__.cljs$core$IFn$_invoke$arity$variadic = _PLUS____delegate;
return _PLUS__;
})()
;

/**
* @param {...*} var_args
*/
gamma.api._LT_ = (function() { 
var _LT___delegate = function (body__12953__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"<","<",-646864291),body__12953__auto__);
};
var _LT_ = function (var_args){
var body__12953__auto__ = null;
if (arguments.length > 0) {
var G__13833__i = 0, G__13833__a = new Array(arguments.length -  0);
while (G__13833__i < G__13833__a.length) {G__13833__a[G__13833__i] = arguments[G__13833__i + 0]; ++G__13833__i;}
  body__12953__auto__ = new cljs.core.IndexedSeq(G__13833__a,0);
} 
return _LT___delegate.call(this,body__12953__auto__);};
_LT_.cljs$lang$maxFixedArity = 0;
_LT_.cljs$lang$applyTo = (function (arglist__13834){
var body__12953__auto__ = cljs.core.seq(arglist__13834);
return _LT___delegate(body__12953__auto__);
});
_LT_.cljs$core$IFn$_invoke$arity$variadic = _LT___delegate;
return _LT_;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.for$ = (function() { 
var for$__delegate = function (body__12953__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"for","for",-1323786319),body__12953__auto__);
};
var for$ = function (var_args){
var body__12953__auto__ = null;
if (arguments.length > 0) {
var G__13835__i = 0, G__13835__a = new Array(arguments.length -  0);
while (G__13835__i < G__13835__a.length) {G__13835__a[G__13835__i] = arguments[G__13835__i + 0]; ++G__13835__i;}
  body__12953__auto__ = new cljs.core.IndexedSeq(G__13835__a,0);
} 
return for$__delegate.call(this,body__12953__auto__);};
for$.cljs$lang$maxFixedArity = 0;
for$.cljs$lang$applyTo = (function (arglist__13836){
var body__12953__auto__ = cljs.core.seq(arglist__13836);
return for$__delegate(body__12953__auto__);
});
for$.cljs$core$IFn$_invoke$arity$variadic = for$__delegate;
return for$;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.block = (function() { 
var block__delegate = function (body__12953__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"block","block",664686210),body__12953__auto__);
};
var block = function (var_args){
var body__12953__auto__ = null;
if (arguments.length > 0) {
var G__13837__i = 0, G__13837__a = new Array(arguments.length -  0);
while (G__13837__i < G__13837__a.length) {G__13837__a[G__13837__i] = arguments[G__13837__i + 0]; ++G__13837__i;}
  body__12953__auto__ = new cljs.core.IndexedSeq(G__13837__a,0);
} 
return block__delegate.call(this,body__12953__auto__);};
block.cljs$lang$maxFixedArity = 0;
block.cljs$lang$applyTo = (function (arglist__13838){
var body__12953__auto__ = cljs.core.seq(arglist__13838);
return block__delegate(body__12953__auto__);
});
block.cljs$core$IFn$_invoke$arity$variadic = block__delegate;
return block;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.continue$ = (function() { 
var continue$__delegate = function (body__12953__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"continue","continue",-207346553),body__12953__auto__);
};
var continue$ = function (var_args){
var body__12953__auto__ = null;
if (arguments.length > 0) {
var G__13839__i = 0, G__13839__a = new Array(arguments.length -  0);
while (G__13839__i < G__13839__a.length) {G__13839__a[G__13839__i] = arguments[G__13839__i + 0]; ++G__13839__i;}
  body__12953__auto__ = new cljs.core.IndexedSeq(G__13839__a,0);
} 
return continue$__delegate.call(this,body__12953__auto__);};
continue$.cljs$lang$maxFixedArity = 0;
continue$.cljs$lang$applyTo = (function (arglist__13840){
var body__12953__auto__ = cljs.core.seq(arglist__13840);
return continue$__delegate(body__12953__auto__);
});
continue$.cljs$core$IFn$_invoke$arity$variadic = continue$__delegate;
return continue$;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.break$ = (function() { 
var break$__delegate = function (body__12953__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"break","break",126570225),body__12953__auto__);
};
var break$ = function (var_args){
var body__12953__auto__ = null;
if (arguments.length > 0) {
var G__13841__i = 0, G__13841__a = new Array(arguments.length -  0);
while (G__13841__i < G__13841__a.length) {G__13841__a[G__13841__i] = arguments[G__13841__i + 0]; ++G__13841__i;}
  body__12953__auto__ = new cljs.core.IndexedSeq(G__13841__a,0);
} 
return break$__delegate.call(this,body__12953__auto__);};
break$.cljs$lang$maxFixedArity = 0;
break$.cljs$lang$applyTo = (function (arglist__13842){
var body__12953__auto__ = cljs.core.seq(arglist__13842);
return break$__delegate(body__12953__auto__);
});
break$.cljs$core$IFn$_invoke$arity$variadic = break$__delegate;
return break$;
})()
;

/**
* @param {...*} var_args
*/
gamma.api.discard = (function() { 
var discard__delegate = function (body__12953__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"discard","discard",-1939593545),body__12953__auto__);
};
var discard = function (var_args){
var body__12953__auto__ = null;
if (arguments.length > 0) {
var G__13843__i = 0, G__13843__a = new Array(arguments.length -  0);
while (G__13843__i < G__13843__a.length) {G__13843__a[G__13843__i] = arguments[G__13843__i + 0]; ++G__13843__i;}
  body__12953__auto__ = new cljs.core.IndexedSeq(G__13843__a,0);
} 
return discard__delegate.call(this,body__12953__auto__);};
discard.cljs$lang$maxFixedArity = 0;
discard.cljs$lang$applyTo = (function (arglist__13844){
var body__12953__auto__ = cljs.core.seq(arglist__13844);
return discard__delegate(body__12953__auto__);
});
discard.cljs$core$IFn$_invoke$arity$variadic = discard__delegate;
return discard;
})()
;
