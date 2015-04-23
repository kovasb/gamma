// Compiled by ClojureScript 0.0-3208 {}
goog.provide('gamma.api');
goog.require('cljs.core');
goog.require('gamma.ast');
gamma.api.vector_type = (function gamma$api$vector_type(l){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"member-type","member-type",645139088),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"length","length",588987862),l], null);
});
gamma.api.array_type = (function gamma$api$array_type(type,length){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"array","array",-2080713842),new cljs.core.Keyword(null,"member-type","member-type",645139088),type,new cljs.core.Keyword(null,"length","length",588987862),length], null);
});
gamma.api.gl_position = (function gamma$api$gl_position(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"name","name",1843675177),"gl_Position",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"vec4","vec4",631182126)], null);
});
gamma.api.gl_frag_color = (function gamma$api$gl_frag_color(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"name","name",1843675177),"gl_FragColor",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"vec4","vec4",631182126)], null);
});
gamma.api.gl_frag_coord = (function gamma$api$gl_frag_coord(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"name","name",1843675177),"gl_FragCoord",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"vec4","vec4",631182126)], null);
});
gamma.api.gl_point_size = (function gamma$api$gl_point_size(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"name","name",1843675177),"gl_PointSize",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"float","float",-1732389368)], null);
});
gamma.api.attribute = (function gamma$api$attribute(name,type){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"storage","storage",1867247511),new cljs.core.Keyword(null,"attribute","attribute",-2074029119)], null);
});
gamma.api.uniform = (function gamma$api$uniform(name,type){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"storage","storage",1867247511),new cljs.core.Keyword(null,"uniform","uniform",496503348)], null);
});
gamma.api.varying = (function gamma$api$varying(name,type){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"storage","storage",1867247511),new cljs.core.Keyword(null,"varying","varying",685535123)], null);
});
gamma.api.variable = (function gamma$api$variable(){
var G__5086 = arguments.length;
switch (G__5086) {
case 1:
return gamma.api.variable.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return gamma.api.variable.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

gamma.api.variable.cljs$core$IFn$_invoke$arity$1 = (function (x){
return gamma.api.variable.call(null,x,null);
});

gamma.api.variable.cljs$core$IFn$_invoke$arity$2 = (function (x,t){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"name","name",1843675177),x,new cljs.core.Keyword(null,"type","type",1174270348),t], null);
});

gamma.api.variable.cljs$lang$maxFixedArity = 2;
gamma.api.ensure_term = (function gamma$api$ensure_term(x){
if(cljs.core.truth_(gamma.ast.term_QMARK_.call(null,x))){
return x;
} else {
return gamma.ast.literal.call(null,x);
}
});
gamma.api.if$ = (function gamma$api$if(c,a,b){
var a__$1 = gamma.api.ensure_term.call(null,a);
var b__$1 = gamma.api.ensure_term.call(null,b);
var at = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(a__$1);
var bt = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(b__$1);
if(cljs.core._EQ_.call(null,at,bt)){
return cljs.core.assoc.call(null,gamma.ast.term.call(null,new cljs.core.Keyword(null,"if","if",-458814265),c,gamma.ast.term.call(null,new cljs.core.Keyword(null,"block","block",664686210),a__$1),gamma.ast.term.call(null,new cljs.core.Keyword(null,"block","block",664686210),b__$1)),new cljs.core.Keyword(null,"type","type",1174270348),at);
} else {
throw (new Error([cljs.core.str("Branches of if term are not of same type: "),cljs.core.str(at),cljs.core.str(", "),cljs.core.str(bt)].join('')));
}
});
gamma.api.infer_parameterized_type = (function gamma$api$infer_parameterized_type(rule,args){
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
var G__5088 = cljs.core.next.call(null,input);
var G__5089 = cljs.core.next.call(null,expected);
var G__5090 = parameter;
input = G__5088;
expected = G__5089;
parameter = G__5090;
continue;
} else {
return new cljs.core.Keyword(null,"fail","fail",1706214930);
}
} else {
if(cljs.core.truth_(p.call(null,i))){
var G__5091 = cljs.core.next.call(null,input);
var G__5092 = cljs.core.next.call(null,expected);
var G__5093 = p.call(null,i);
input = G__5091;
expected = G__5092;
parameter = G__5093;
continue;
} else {
return new cljs.core.Keyword(null,"fail","fail",1706214930);
}
}
} else {
if(cljs.core._EQ_.call(null,i,e)){
var G__5094 = cljs.core.next.call(null,input);
var G__5095 = cljs.core.next.call(null,expected);
var G__5096 = parameter;
input = G__5094;
expected = G__5095;
parameter = G__5096;
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
gamma.api.build_standard_function_term = (function gamma$api$build_standard_function_term(name,specs,args){
var t = cljs.core.apply.call(null,gamma.ast.term,name,args);
var temp__4124__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (t){
return (function (p1__5097_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930),p1__5097_SHARP_);
});})(t))
,cljs.core.map.call(null,((function (t){
return (function (p1__5098_SHARP_){
return gamma.api.infer_parameterized_type.call(null,p1__5098_SHARP_,cljs.core.map.call(null,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(t)));
});})(t))
,specs)));
if(cljs.core.truth_(temp__4124__auto__)){
var result = temp__4124__auto__;
return cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"type","type",1174270348),result);
} else {
throw (new Error(cljs.core.apply.call(null,cljs.core.str,"Wrong argument types for term ",cljs.core.name.call(null,name),": ",cljs.core.interpose.call(null," ,",cljs.core.map.call(null,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(t))))));
}
});
gamma.api.ceil = (function gamma$api$ceil(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.ceil.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.ceil.cljs$core$IFn$_invoke$arity$variadic = (function (body__5074__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"ceil","ceil",-1824929952),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"ceil","ceil",-1824929952),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__5074__auto__);
});

gamma.api.ceil.cljs$lang$maxFixedArity = (0);

gamma.api.ceil.cljs$lang$applyTo = (function (seq5099){
return gamma.api.ceil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5099));
});

gamma.api.atan = (function gamma$api$atan(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.atan.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.atan.cljs$core$IFn$_invoke$arity$variadic = (function (body__5074__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"atan","atan",1627885634),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"atan","atan",1627885634),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"atan","atan",1627885634),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__5074__auto__);
});

gamma.api.atan.cljs$lang$maxFixedArity = (0);

gamma.api.atan.cljs$lang$applyTo = (function (seq5100){
return gamma.api.atan.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5100));
});

gamma.api.sign = (function gamma$api$sign(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.sign.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.sign.cljs$core$IFn$_invoke$arity$variadic = (function (body__5074__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"sign","sign",1261721667),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"sign","sign",1261721667),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__5074__auto__);
});

gamma.api.sign.cljs$lang$maxFixedArity = (0);

gamma.api.sign.cljs$lang$applyTo = (function (seq5101){
return gamma.api.sign.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5101));
});

gamma.api.cos = (function gamma$api$cos(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.cos.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.cos.cljs$core$IFn$_invoke$arity$variadic = (function (body__5074__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"cos","cos",1201758276),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"cos","cos",1201758276),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__5074__auto__);
});

gamma.api.cos.cljs$lang$maxFixedArity = (0);

gamma.api.cos.cljs$lang$applyTo = (function (seq5102){
return gamma.api.cos.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5102));
});

gamma.api.textureCubeLod = (function gamma$api$textureCubeLod(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.textureCubeLod.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.textureCubeLod.cljs$core$IFn$_invoke$arity$variadic = (function (body__5074__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"textureCubeLod","textureCubeLod",149096100),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"textureCubeLod","textureCubeLod",149096100),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sampler2D","sampler2D",-2107312644),new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__5074__auto__);
});

gamma.api.textureCubeLod.cljs$lang$maxFixedArity = (0);

gamma.api.textureCubeLod.cljs$lang$applyTo = (function (seq5103){
return gamma.api.textureCubeLod.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5103));
});

gamma.api.tan = (function gamma$api$tan(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.tan.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.tan.cljs$core$IFn$_invoke$arity$variadic = (function (body__5074__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"tan","tan",1273609893),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tan","tan",1273609893),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__5074__auto__);
});

gamma.api.tan.cljs$lang$maxFixedArity = (0);

gamma.api.tan.cljs$lang$applyTo = (function (seq5104){
return gamma.api.tan.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5104));
});

gamma.api.sqrt = (function gamma$api$sqrt(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.sqrt.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.sqrt.cljs$core$IFn$_invoke$arity$variadic = (function (body__5074__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"sqrt","sqrt",-1270051929),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"sqrt","sqrt",-1270051929),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__5074__auto__);
});

gamma.api.sqrt.cljs$lang$maxFixedArity = (0);

gamma.api.sqrt.cljs$lang$applyTo = (function (seq5105){
return gamma.api.sqrt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5105));
});

gamma.api.mod = (function gamma$api$mod(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.mod.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.mod.cljs$core$IFn$_invoke$arity$variadic = (function (body__5074__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"mod","mod",-130487320),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"mod","mod",-130487320),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__5074__auto__);
});

gamma.api.mod.cljs$lang$maxFixedArity = (0);

gamma.api.mod.cljs$lang$applyTo = (function (seq5106){
return gamma.api.mod.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5106));
});

gamma.api.exp = (function gamma$api$exp(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.exp.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.exp.cljs$core$IFn$_invoke$arity$variadic = (function (body__5074__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"exp","exp",-261706262),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"exp","exp",-261706262),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__5074__auto__);
});

gamma.api.exp.cljs$lang$maxFixedArity = (0);

gamma.api.exp.cljs$lang$applyTo = (function (seq5107){
return gamma.api.exp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5107));
});

gamma.api.texture2DProjLod = (function gamma$api$texture2DProjLod(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.texture2DProjLod.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.texture2DProjLod.cljs$core$IFn$_invoke$arity$variadic = (function (body__5074__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"texture2DProjLod","texture2DProjLod",-1483280499),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"texture2DProjLod","texture2DProjLod",-1483280499),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sampler2D","sampler2D",-2107312644),new cljs.core.Keyword(null,"vec3","vec3",1116680488),new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"texture2DProjLod","texture2DProjLod",-1483280499),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sampler2D","sampler2D",-2107312644),new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__5074__auto__);
});

gamma.api.texture2DProjLod.cljs$lang$maxFixedArity = (0);

gamma.api.texture2DProjLod.cljs$lang$applyTo = (function (seq5108){
return gamma.api.texture2DProjLod.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5108));
});

gamma.api.log2 = (function gamma$api$log2(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.log2.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.log2.cljs$core$IFn$_invoke$arity$variadic = (function (body__5074__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"log2","log2",803778830),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"log2","log2",803778830),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__5074__auto__);
});

gamma.api.log2.cljs$lang$maxFixedArity = (0);

gamma.api.log2.cljs$lang$applyTo = (function (seq5109){
return gamma.api.log2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5109));
});

gamma.api.texture2D = (function gamma$api$texture2D(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.texture2D.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.texture2D.cljs$core$IFn$_invoke$arity$variadic = (function (body__5074__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"texture2D","texture2D",-252500594),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"texture2D","texture2D",-252500594),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sampler2D","sampler2D",-2107312644),new cljs.core.Keyword(null,"vec2","vec2",-762258640),new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"texture2D","texture2D",-252500594),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sampler2D","sampler2D",-2107312644),new cljs.core.Keyword(null,"vec2","vec2",-762258640)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__5074__auto__);
});

gamma.api.texture2D.cljs$lang$maxFixedArity = (0);

gamma.api.texture2D.cljs$lang$applyTo = (function (seq5110){
return gamma.api.texture2D.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5110));
});

gamma.api.asin = (function gamma$api$asin(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.asin.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.asin.cljs$core$IFn$_invoke$arity$variadic = (function (body__5074__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"asin","asin",1750305199),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"asin","asin",1750305199),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__5074__auto__);
});

gamma.api.asin.cljs$lang$maxFixedArity = (0);

gamma.api.asin.cljs$lang$applyTo = (function (seq5111){
return gamma.api.asin.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5111));
});

gamma.api.textureCube = (function gamma$api$textureCube(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.textureCube.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.textureCube.cljs$core$IFn$_invoke$arity$variadic = (function (body__5074__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"textureCube","textureCube",-82179345),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"textureCube","textureCube",-82179345),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samplerCube","samplerCube",-734605291),new cljs.core.Keyword(null,"vec3","vec3",1116680488),new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"textureCube","textureCube",-82179345),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samplerCube","samplerCube",-734605291),new cljs.core.Keyword(null,"vec3","vec3",1116680488)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__5074__auto__);
});

gamma.api.textureCube.cljs$lang$maxFixedArity = (0);

gamma.api.textureCube.cljs$lang$applyTo = (function (seq5112){
return gamma.api.textureCube.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5112));
});

gamma.api.power = (function gamma$api$power(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.power.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.power.cljs$core$IFn$_invoke$arity$variadic = (function (body__5074__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__5074__auto__);
});

gamma.api.power.cljs$lang$maxFixedArity = (0);

gamma.api.power.cljs$lang$applyTo = (function (seq5113){
return gamma.api.power.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5113));
});

gamma.api.refract = (function gamma$api$refract(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.refract.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.refract.cljs$core$IFn$_invoke$arity$variadic = (function (body__5074__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"refract","refract",-1502353966),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"refract","refract",-1502353966),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__5074__auto__);
});

gamma.api.refract.cljs$lang$maxFixedArity = (0);

gamma.api.refract.cljs$lang$applyTo = (function (seq5114){
return gamma.api.refract.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5114));
});

gamma.api.texture2DLod = (function gamma$api$texture2DLod(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.texture2DLod.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.texture2DLod.cljs$core$IFn$_invoke$arity$variadic = (function (body__5074__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"texture2DLod","texture2DLod",-1274741294),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"texture2DLod","texture2DLod",-1274741294),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sampler2D","sampler2D",-2107312644),new cljs.core.Keyword(null,"vec2","vec2",-762258640),new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__5074__auto__);
});

gamma.api.texture2DLod.cljs$lang$maxFixedArity = (0);

gamma.api.texture2DLod.cljs$lang$applyTo = (function (seq5115){
return gamma.api.texture2DLod.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5115));
});

gamma.api.exp2 = (function gamma$api$exp2(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.exp2.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.exp2.cljs$core$IFn$_invoke$arity$variadic = (function (body__5074__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"exp2","exp2",-1037021901),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"exp2","exp2",-1037021901),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__5074__auto__);
});

gamma.api.exp2.cljs$lang$maxFixedArity = (0);

gamma.api.exp2.cljs$lang$applyTo = (function (seq5116){
return gamma.api.exp2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5116));
});

gamma.api.smoothstep = (function gamma$api$smoothstep(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.smoothstep.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.smoothstep.cljs$core$IFn$_invoke$arity$variadic = (function (body__5074__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"smoothstep","smoothstep",968032787),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"smoothstep","smoothstep",968032787),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"smoothstep","smoothstep",968032787),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__5074__auto__);
});

gamma.api.smoothstep.cljs$lang$maxFixedArity = (0);

gamma.api.smoothstep.cljs$lang$applyTo = (function (seq5117){
return gamma.api.smoothstep.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5117));
});

gamma.api.abs = (function gamma$api$abs(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.abs.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.abs.cljs$core$IFn$_invoke$arity$variadic = (function (body__5074__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"abs","abs",-246026477),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"abs","abs",-246026477),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__5074__auto__);
});

gamma.api.abs.cljs$lang$maxFixedArity = (0);

gamma.api.abs.cljs$lang$applyTo = (function (seq5118){
return gamma.api.abs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5118));
});

gamma.api.max = (function gamma$api$max(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.max.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.max.cljs$core$IFn$_invoke$arity$variadic = (function (body__5074__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__5074__auto__);
});

gamma.api.max.cljs$lang$maxFixedArity = (0);

gamma.api.max.cljs$lang$applyTo = (function (seq5119){
return gamma.api.max.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5119));
});

gamma.api.inversesqrt = (function gamma$api$inversesqrt(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.inversesqrt.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.inversesqrt.cljs$core$IFn$_invoke$arity$variadic = (function (body__5074__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"inversesqrt","inversesqrt",-1232448652),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"inversesqrt","inversesqrt",-1232448652),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__5074__auto__);
});

gamma.api.inversesqrt.cljs$lang$maxFixedArity = (0);

gamma.api.inversesqrt.cljs$lang$applyTo = (function (seq5120){
return gamma.api.inversesqrt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5120));
});

gamma.api.length = (function gamma$api$length(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.length.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.length.cljs$core$IFn$_invoke$arity$variadic = (function (body__5074__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"length","length",588987862),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"length","length",588987862),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__5074__auto__);
});

gamma.api.length.cljs$lang$maxFixedArity = (0);

gamma.api.length.cljs$lang$applyTo = (function (seq5121){
return gamma.api.length.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5121));
});

gamma.api.sin = (function gamma$api$sin(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.sin.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.sin.cljs$core$IFn$_invoke$arity$variadic = (function (body__5074__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"sin","sin",80907862),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"sin","sin",80907862),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__5074__auto__);
});

gamma.api.sin.cljs$lang$maxFixedArity = (0);

gamma.api.sin.cljs$lang$applyTo = (function (seq5122){
return gamma.api.sin.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5122));
});

gamma.api.texture2DProj = (function gamma$api$texture2DProj(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.texture2DProj.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.texture2DProj.cljs$core$IFn$_invoke$arity$variadic = (function (body__5074__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"texture2DProj","texture2DProj",1965198007),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"texture2DProj","texture2DProj",1965198007),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sampler2D","sampler2D",-2107312644),new cljs.core.Keyword(null,"vec3","vec3",1116680488),new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"texture2DProj","texture2DProj",1965198007),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sampler2D","sampler2D",-2107312644),new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"texture2DProj","texture2DProj",1965198007),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sampler2D","sampler2D",-2107312644),new cljs.core.Keyword(null,"vec3","vec3",1116680488)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"texture2DProj","texture2DProj",1965198007),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sampler2D","sampler2D",-2107312644),new cljs.core.Keyword(null,"coord","coord",-1453656639)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__5074__auto__);
});

gamma.api.texture2DProj.cljs$lang$maxFixedArity = (0);

gamma.api.texture2DProj.cljs$lang$applyTo = (function (seq5123){
return gamma.api.texture2DProj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5123));
});

gamma.api.faceforward = (function gamma$api$faceforward(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.faceforward.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.faceforward.cljs$core$IFn$_invoke$arity$variadic = (function (body__5074__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"faceforward","faceforward",840660504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"faceforward","faceforward",840660504),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__5074__auto__);
});

gamma.api.faceforward.cljs$lang$maxFixedArity = (0);

gamma.api.faceforward.cljs$lang$applyTo = (function (seq5124){
return gamma.api.faceforward.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5124));
});

gamma.api.dot = (function gamma$api$dot(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.dot.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.dot.cljs$core$IFn$_invoke$arity$variadic = (function (body__5074__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"dot","dot",1442709401),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"dot","dot",1442709401),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__5074__auto__);
});

gamma.api.dot.cljs$lang$maxFixedArity = (0);

gamma.api.dot.cljs$lang$applyTo = (function (seq5125){
return gamma.api.dot.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5125));
});

gamma.api.distance = (function gamma$api$distance(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.distance.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.distance.cljs$core$IFn$_invoke$arity$variadic = (function (body__5074__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"distance","distance",-1671893894),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"distance","distance",-1671893894),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__5074__auto__);
});

gamma.api.distance.cljs$lang$maxFixedArity = (0);

gamma.api.distance.cljs$lang$applyTo = (function (seq5126){
return gamma.api.distance.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5126));
});

gamma.api.fract = (function gamma$api$fract(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.fract.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.fract.cljs$core$IFn$_invoke$arity$variadic = (function (body__5074__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"fract","fract",-2061728070),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"fract","fract",-2061728070),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__5074__auto__);
});

gamma.api.fract.cljs$lang$maxFixedArity = (0);

gamma.api.fract.cljs$lang$applyTo = (function (seq5127){
return gamma.api.fract.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5127));
});

gamma.api.clamp = (function gamma$api$clamp(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.clamp.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.clamp.cljs$core$IFn$_invoke$arity$variadic = (function (body__5074__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"clamp","clamp",1803814940),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"clamp","clamp",1803814940),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"clamp","clamp",1803814940),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__5074__auto__);
});

gamma.api.clamp.cljs$lang$maxFixedArity = (0);

gamma.api.clamp.cljs$lang$applyTo = (function (seq5128){
return gamma.api.clamp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5128));
});

gamma.api.radians = (function gamma$api$radians(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.radians.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.radians.cljs$core$IFn$_invoke$arity$variadic = (function (body__5074__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"radians","radians",1835725084),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"radians","radians",1835725084),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__5074__auto__);
});

gamma.api.radians.cljs$lang$maxFixedArity = (0);

gamma.api.radians.cljs$lang$applyTo = (function (seq5129){
return gamma.api.radians.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5129));
});

gamma.api.degrees = (function gamma$api$degrees(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.degrees.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.degrees.cljs$core$IFn$_invoke$arity$variadic = (function (body__5074__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"degrees","degrees",2015169884),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"degrees","degrees",2015169884),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__5074__auto__);
});

gamma.api.degrees.cljs$lang$maxFixedArity = (0);

gamma.api.degrees.cljs$lang$applyTo = (function (seq5130){
return gamma.api.degrees.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5130));
});

gamma.api.acos = (function gamma$api$acos(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.acos.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.acos.cljs$core$IFn$_invoke$arity$variadic = (function (body__5074__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"acos","acos",-1286789764),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"acos","acos",-1286789764),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__5074__auto__);
});

gamma.api.acos.cljs$lang$maxFixedArity = (0);

gamma.api.acos.cljs$lang$applyTo = (function (seq5132){
return gamma.api.acos.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5132));
});

gamma.api.step = (function gamma$api$step(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.step.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.step.cljs$core$IFn$_invoke$arity$variadic = (function (body__5074__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__5074__auto__);
});

gamma.api.step.cljs$lang$maxFixedArity = (0);

gamma.api.step.cljs$lang$applyTo = (function (seq5133){
return gamma.api.step.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5133));
});

gamma.api.log = (function gamma$api$log(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.log.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.log.cljs$core$IFn$_invoke$arity$variadic = (function (body__5074__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__5074__auto__);
});

gamma.api.log.cljs$lang$maxFixedArity = (0);

gamma.api.log.cljs$lang$applyTo = (function (seq5134){
return gamma.api.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5134));
});

gamma.api.normalize = (function gamma$api$normalize(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.normalize.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.normalize.cljs$core$IFn$_invoke$arity$variadic = (function (body__5074__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"normalize","normalize",-1904390051),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"normalize","normalize",-1904390051),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__5074__auto__);
});

gamma.api.normalize.cljs$lang$maxFixedArity = (0);

gamma.api.normalize.cljs$lang$applyTo = (function (seq5135){
return gamma.api.normalize.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5135));
});

gamma.api.floor = (function gamma$api$floor(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.floor.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.floor.cljs$core$IFn$_invoke$arity$variadic = (function (body__5074__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__5074__auto__);
});

gamma.api.floor.cljs$lang$maxFixedArity = (0);

gamma.api.floor.cljs$lang$applyTo = (function (seq5136){
return gamma.api.floor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5136));
});

gamma.api.cross = (function gamma$api$cross(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.cross.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.cross.cljs$core$IFn$_invoke$arity$variadic = (function (body__5074__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"cross","cross",194557789),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"cross","cross",194557789),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),new cljs.core.Keyword(null,"vec3","vec3",1116680488)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"vec3","vec3",1116680488),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__5074__auto__);
});

gamma.api.cross.cljs$lang$maxFixedArity = (0);

gamma.api.cross.cljs$lang$applyTo = (function (seq5137){
return gamma.api.cross.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5137));
});

gamma.api.reflect = (function gamma$api$reflect(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.reflect.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.reflect.cljs$core$IFn$_invoke$arity$variadic = (function (body__5074__auto__){
return gamma.api.build_standard_function_term.call(null,new cljs.core.Keyword(null,"reflect","reflect",-2113821122),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"reflect","reflect",-2113821122),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"T","T",175240877)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null)], null),body__5074__auto__);
});

gamma.api.reflect.cljs$lang$maxFixedArity = (0);

gamma.api.reflect.cljs$lang$applyTo = (function (seq5138){
return gamma.api.reflect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5138));
});

gamma.api.selector = (function gamma$api$selector(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.selector.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.selector.cljs$core$IFn$_invoke$arity$variadic = (function (body__5072__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"selector","selector",762528866),body__5072__auto__);
});

gamma.api.selector.cljs$lang$maxFixedArity = (0);

gamma.api.selector.cljs$lang$applyTo = (function (seq5139){
return gamma.api.selector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5139));
});

gamma.api._LT__EQ_ = (function gamma$api$_LT__EQ_(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (body__5072__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"<=","<=",-395636158),body__5072__auto__);
});

gamma.api._LT__EQ_.cljs$lang$maxFixedArity = (0);

gamma.api._LT__EQ_.cljs$lang$applyTo = (function (seq5140){
return gamma.api._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5140));
});

gamma.api._STAR_ = (function gamma$api$_STAR_(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api._STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (body__5072__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"*","*",-1294732318),body__5072__auto__);
});

gamma.api._STAR_.cljs$lang$maxFixedArity = (0);

gamma.api._STAR_.cljs$lang$applyTo = (function (seq5141){
return gamma.api._STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5141));
});

gamma.api.increment = (function gamma$api$increment(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.increment.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.increment.cljs$core$IFn$_invoke$arity$variadic = (function (body__5072__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"increment","increment",-1558831484),body__5072__auto__);
});

gamma.api.increment.cljs$lang$maxFixedArity = (0);

gamma.api.increment.cljs$lang$applyTo = (function (seq5142){
return gamma.api.increment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5142));
});

gamma.api.pre_decrement = (function gamma$api$pre_decrement(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.pre_decrement.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.pre_decrement.cljs$core$IFn$_invoke$arity$variadic = (function (body__5072__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"pre-decrement","pre-decrement",1269674757),body__5072__auto__);
});

gamma.api.pre_decrement.cljs$lang$maxFixedArity = (0);

gamma.api.pre_decrement.cljs$lang$applyTo = (function (seq5143){
return gamma.api.pre_decrement.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5143));
});

gamma.api._GT_ = (function gamma$api$_GT_(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api._GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (body__5072__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,">",">",-555517146),body__5072__auto__);
});

gamma.api._GT_.cljs$lang$maxFixedArity = (0);

gamma.api._GT_.cljs$lang$applyTo = (function (seq5144){
return gamma.api._GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5144));
});

gamma.api._ = (function gamma$api$_(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api._.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api._.cljs$core$IFn$_invoke$arity$variadic = (function (body__5072__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"-","-",-2112348439),body__5072__auto__);
});

gamma.api._.cljs$lang$maxFixedArity = (0);

gamma.api._.cljs$lang$applyTo = (function (seq5145){
return gamma.api._.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5145));
});

gamma.api.or = (function gamma$api$or(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.or.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.or.cljs$core$IFn$_invoke$arity$variadic = (function (body__5072__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"or","or",235744169),body__5072__auto__);
});

gamma.api.or.cljs$lang$maxFixedArity = (0);

gamma.api.or.cljs$lang$applyTo = (function (seq5146){
return gamma.api.or.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5146));
});

gamma.api.set_div = (function gamma$api$set_div(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.set_div.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.set_div.cljs$core$IFn$_invoke$arity$variadic = (function (body__5072__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"set-div","set-div",991399498),body__5072__auto__);
});

gamma.api.set_div.cljs$lang$maxFixedArity = (0);

gamma.api.set_div.cljs$lang$applyTo = (function (seq5147){
return gamma.api.set_div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5147));
});

gamma.api.pre_increment = (function gamma$api$pre_increment(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.pre_increment.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.pre_increment.cljs$core$IFn$_invoke$arity$variadic = (function (body__5072__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"pre-increment","pre-increment",-1566257876),body__5072__auto__);
});

gamma.api.pre_increment.cljs$lang$maxFixedArity = (0);

gamma.api.pre_increment.cljs$lang$applyTo = (function (seq5148){
return gamma.api.pre_increment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5148));
});

gamma.api.not = (function gamma$api$not(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.not.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.not.cljs$core$IFn$_invoke$arity$variadic = (function (body__5072__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"not","not",-595976884),body__5072__auto__);
});

gamma.api.not.cljs$lang$maxFixedArity = (0);

gamma.api.not.cljs$lang$applyTo = (function (seq5149){
return gamma.api.not.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5149));
});

gamma.api._GT__EQ_ = (function gamma$api$_GT__EQ_(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (body__5072__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,">=",">=",-623615505),body__5072__auto__);
});

gamma.api._GT__EQ_.cljs$lang$maxFixedArity = (0);

gamma.api._GT__EQ_.cljs$lang$applyTo = (function (seq5150){
return gamma.api._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5150));
});

gamma.api.div = (function gamma$api$div(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.div.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.div.cljs$core$IFn$_invoke$arity$variadic = (function (body__5072__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"div","div",1057191632),body__5072__auto__);
});

gamma.api.div.cljs$lang$maxFixedArity = (0);

gamma.api.div.cljs$lang$applyTo = (function (seq5151){
return gamma.api.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5151));
});

gamma.api.conditional_choice = (function gamma$api$conditional_choice(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.conditional_choice.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.conditional_choice.cljs$core$IFn$_invoke$arity$variadic = (function (body__5072__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"conditional-choice","conditional-choice",1872771601),body__5072__auto__);
});

gamma.api.conditional_choice.cljs$lang$maxFixedArity = (0);

gamma.api.conditional_choice.cljs$lang$applyTo = (function (seq5152){
return gamma.api.conditional_choice.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5152));
});

gamma.api.set_PLUS_ = (function gamma$api$set_PLUS_(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.set_PLUS_.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.set_PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (body__5072__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"set+","set+",1784778737),body__5072__auto__);
});

gamma.api.set_PLUS_.cljs$lang$maxFixedArity = (0);

gamma.api.set_PLUS_.cljs$lang$applyTo = (function (seq5153){
return gamma.api.set_PLUS_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5153));
});

gamma.api.set_ = (function gamma$api$set_(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.set_.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.set_.cljs$core$IFn$_invoke$arity$variadic = (function (body__5072__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"set-","set-",-1958952622),body__5072__auto__);
});

gamma.api.set_.cljs$lang$maxFixedArity = (0);

gamma.api.set_.cljs$lang$applyTo = (function (seq5154){
return gamma.api.set_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5154));
});

gamma.api.xor = (function gamma$api$xor(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.xor.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.xor.cljs$core$IFn$_invoke$arity$variadic = (function (body__5072__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"xor","xor",-1119942254),body__5072__auto__);
});

gamma.api.xor.cljs$lang$maxFixedArity = (0);

gamma.api.xor.cljs$lang$applyTo = (function (seq5155){
return gamma.api.xor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5155));
});

gamma.api._PLUS_ = (function gamma$api$_PLUS_(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api._PLUS_.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (body__5072__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"+","+",1913524883),body__5072__auto__);
});

gamma.api._PLUS_.cljs$lang$maxFixedArity = (0);

gamma.api._PLUS_.cljs$lang$applyTo = (function (seq5156){
return gamma.api._PLUS_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5156));
});

gamma.api._BANG__EQ_ = (function gamma$api$_BANG__EQ_(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api._BANG__EQ_.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api._BANG__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (body__5072__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"!=","!=",-1841737356),body__5072__auto__);
});

gamma.api._BANG__EQ_.cljs$lang$maxFixedArity = (0);

gamma.api._BANG__EQ_.cljs$lang$applyTo = (function (seq5157){
return gamma.api._BANG__EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5157));
});

gamma.api._EQ__EQ_ = (function gamma$api$_EQ__EQ_(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (body__5072__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"==","==",-1874649676),body__5072__auto__);
});

gamma.api._EQ__EQ_.cljs$lang$maxFixedArity = (0);

gamma.api._EQ__EQ_.cljs$lang$applyTo = (function (seq5158){
return gamma.api._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5158));
});

gamma.api.constructor = (function gamma$api$constructor(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.constructor.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.constructor.cljs$core$IFn$_invoke$arity$variadic = (function (body__5072__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"constructor","constructor",-1953928811),body__5072__auto__);
});

gamma.api.constructor.cljs$lang$maxFixedArity = (0);

gamma.api.constructor.cljs$lang$applyTo = (function (seq5159){
return gamma.api.constructor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5159));
});

gamma.api.and = (function gamma$api$and(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.and.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.and.cljs$core$IFn$_invoke$arity$variadic = (function (body__5072__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"and","and",-971899817),body__5072__auto__);
});

gamma.api.and.cljs$lang$maxFixedArity = (0);

gamma.api.and.cljs$lang$applyTo = (function (seq5160){
return gamma.api.and.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5160));
});

gamma.api.decrement = (function gamma$api$decrement(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.decrement.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.decrement.cljs$core$IFn$_invoke$arity$variadic = (function (body__5072__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"decrement","decrement",-725286119),body__5072__auto__);
});

gamma.api.decrement.cljs$lang$maxFixedArity = (0);

gamma.api.decrement.cljs$lang$applyTo = (function (seq5161){
return gamma.api.decrement.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5161));
});

gamma.api.set = (function gamma$api$set(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.set.cljs$core$IFn$_invoke$arity$variadic = (function (body__5072__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"set","set",304602554),body__5072__auto__);
});

gamma.api.set.cljs$lang$maxFixedArity = (0);

gamma.api.set.cljs$lang$applyTo = (function (seq5162){
return gamma.api.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5162));
});

gamma.api.set_STAR_ = (function gamma$api$set_STAR_(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.set_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.set_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (body__5072__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"set*","set*",-966220230),body__5072__auto__);
});

gamma.api.set_STAR_.cljs$lang$maxFixedArity = (0);

gamma.api.set_STAR_.cljs$lang$applyTo = (function (seq5163){
return gamma.api.set_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5163));
});

gamma.api.aget = (function gamma$api$aget(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.aget.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.aget.cljs$core$IFn$_invoke$arity$variadic = (function (body__5072__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"aget","aget",-149474981),body__5072__auto__);
});

gamma.api.aget.cljs$lang$maxFixedArity = (0);

gamma.api.aget.cljs$lang$applyTo = (function (seq5164){
return gamma.api.aget.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5164));
});

gamma.api._PLUS__ = (function gamma$api$_PLUS__(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api._PLUS__.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api._PLUS__.cljs$core$IFn$_invoke$arity$variadic = (function (body__5072__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"+-","+-",1426840219),body__5072__auto__);
});

gamma.api._PLUS__.cljs$lang$maxFixedArity = (0);

gamma.api._PLUS__.cljs$lang$applyTo = (function (seq5165){
return gamma.api._PLUS__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5165));
});

gamma.api._LT_ = (function gamma$api$_LT_(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api._LT_.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (body__5072__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"<","<",-646864291),body__5072__auto__);
});

gamma.api._LT_.cljs$lang$maxFixedArity = (0);

gamma.api._LT_.cljs$lang$applyTo = (function (seq5166){
return gamma.api._LT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5166));
});

gamma.api.for$ = (function gamma$api$for(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.for$.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.for$.cljs$core$IFn$_invoke$arity$variadic = (function (body__5072__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"for","for",-1323786319),body__5072__auto__);
});

gamma.api.for$.cljs$lang$maxFixedArity = (0);

gamma.api.for$.cljs$lang$applyTo = (function (seq5167){
return gamma.api.for$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5167));
});

gamma.api.block = (function gamma$api$block(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.block.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.block.cljs$core$IFn$_invoke$arity$variadic = (function (body__5072__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"block","block",664686210),body__5072__auto__);
});

gamma.api.block.cljs$lang$maxFixedArity = (0);

gamma.api.block.cljs$lang$applyTo = (function (seq5168){
return gamma.api.block.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5168));
});

gamma.api.continue$ = (function gamma$api$continue(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.continue$.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.continue$.cljs$core$IFn$_invoke$arity$variadic = (function (body__5072__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"continue","continue",-207346553),body__5072__auto__);
});

gamma.api.continue$.cljs$lang$maxFixedArity = (0);

gamma.api.continue$.cljs$lang$applyTo = (function (seq5169){
return gamma.api.continue$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5169));
});

gamma.api.break$ = (function gamma$api$break(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.break$.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.break$.cljs$core$IFn$_invoke$arity$variadic = (function (body__5072__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"break","break",126570225),body__5072__auto__);
});

gamma.api.break$.cljs$lang$maxFixedArity = (0);

gamma.api.break$.cljs$lang$applyTo = (function (seq5170){
return gamma.api.break$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5170));
});

gamma.api.discard = (function gamma$api$discard(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.discard.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.discard.cljs$core$IFn$_invoke$arity$variadic = (function (body__5072__auto__){
return cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"discard","discard",-1939593545),body__5072__auto__);
});

gamma.api.discard.cljs$lang$maxFixedArity = (0);

gamma.api.discard.cljs$lang$applyTo = (function (seq5131){
return gamma.api.discard.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5131));
});
gamma.api.vec4 = (function gamma$api$vec4(){
var argseq__4991__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return gamma.api.vec4.cljs$core$IFn$_invoke$arity$variadic(argseq__4991__auto__);
});

gamma.api.vec4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.assoc.call(null,cljs.core.apply.call(null,gamma.ast.term,new cljs.core.Keyword(null,"vec4","vec4",631182126),args),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"vec4","vec4",631182126));
});

gamma.api.vec4.cljs$lang$maxFixedArity = (0);

gamma.api.vec4.cljs$lang$applyTo = (function (seq5171){
return gamma.api.vec4.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5171));
});
gamma.api._STAR_ = (function gamma$api$_STAR_(a,b){
var t = gamma.ast.term.call(null,new cljs.core.Keyword(null,"*","*",-1294732318),a,b);
return cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(t))));
});
gamma.api._ = (function gamma$api$_(a,b){
var t = gamma.ast.term.call(null,new cljs.core.Keyword(null,"-","-",-2112348439),a,b);
return cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(t))));
});
gamma.api._PLUS_ = (function gamma$api$_PLUS_(a,b){
var t = gamma.ast.term.call(null,new cljs.core.Keyword(null,"+","+",1913524883),a,b);
return cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(t))));
});
gamma.api.swizzle_type = (function gamma$api$swizzle_type(x,c){
var l = cljs.core.count.call(null,cljs.core.name.call(null,c));
return new cljs.core.PersistentArrayMap(null, 4, [(1),new cljs.core.Keyword(null,"float","float",-1732389368),(2),new cljs.core.Keyword(null,"vec2","vec2",-762258640),(3),new cljs.core.Keyword(null,"vec3","vec3",1116680488),(4),new cljs.core.Keyword(null,"vec4","vec4",631182126)], null).call(null,l);
});
gamma.api.swizzle = (function gamma$api$swizzle(x,c){
return cljs.core.assoc.call(null,gamma.ast.term.call(null,new cljs.core.Keyword(null,"swizzle","swizzle",-956643048),x),new cljs.core.Keyword(null,"swizzle","swizzle",-956643048),c,new cljs.core.Keyword(null,"type","type",1174270348),gamma.api.swizzle_type.call(null,x,c));
});

//# sourceMappingURL=api.js.map