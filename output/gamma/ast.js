// Compiled by ClojureScript 0.0-2913 {:target :nodejs}
goog.provide('gamma.ast');
goog.require('cljs.core');

/**
* @constructor
* @param {*} head
* @param {*} body
* @param {*} id
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
gamma.ast.Term = (function (head,body,id,__meta,__extmap,__hash){
this.head = head;
this.body = body;
this.id = id;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
gamma.ast.Term.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5825__auto__,k__5826__auto__){
var self__ = this;
var this__5825__auto____$1 = this;
return cljs.core._lookup.call(null,this__5825__auto____$1,k__5826__auto__,null);
});

gamma.ast.Term.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5827__auto__,k13876,else__5828__auto__){
var self__ = this;
var this__5827__auto____$1 = this;
var G__13878 = (((k13876 instanceof cljs.core.Keyword))?k13876.fqn:null);
switch (G__13878) {
case "id":
return self__.id;

break;
case "body":
return self__.body;

break;
case "head":
return self__.head;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k13876,else__5828__auto__);

}
});

gamma.ast.Term.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5839__auto__,writer__5840__auto__,opts__5841__auto__){
var self__ = this;
var this__5839__auto____$1 = this;
var pr_pair__5842__auto__ = ((function (this__5839__auto____$1){
return (function (keyval__5843__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5840__auto__,cljs.core.pr_writer,""," ","",opts__5841__auto__,keyval__5843__auto__);
});})(this__5839__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5840__auto__,pr_pair__5842__auto__,"#gamma.ast.Term{",", ","}",opts__5841__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"head","head",-771383919),self__.head],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"body","body",-2049205669),self__.body],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null))], null),self__.__extmap));
});

gamma.ast.Term.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5823__auto__){
var self__ = this;
var this__5823__auto____$1 = this;
return self__.__meta;
});

gamma.ast.Term.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5819__auto__){
var self__ = this;
var this__5819__auto____$1 = this;
return (new gamma.ast.Term(self__.head,self__.body,self__.id,self__.__meta,self__.__extmap,self__.__hash));
});

gamma.ast.Term.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5829__auto__){
var self__ = this;
var this__5829__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

gamma.ast.Term.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5820__auto__){
var self__ = this;
var this__5820__auto____$1 = this;
var h__5643__auto__ = self__.__hash;
if(!((h__5643__auto__ == null))){
return h__5643__auto__;
} else {
var h__5643__auto____$1 = cljs.core.hash_imap.call(null,this__5820__auto____$1);
self__.__hash = h__5643__auto____$1;

return h__5643__auto____$1;
}
});

gamma.ast.Term.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5821__auto__,other__5822__auto__){
var self__ = this;
var this__5821__auto____$1 = this;
if(cljs.core.truth_((function (){var and__5210__auto__ = other__5822__auto__;
if(cljs.core.truth_(and__5210__auto__)){
return ((this__5821__auto____$1.constructor === other__5822__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__5821__auto____$1,other__5822__auto__));
} else {
return and__5210__auto__;
}
})())){
return true;
} else {
return false;
}
});

gamma.ast.Term.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5834__auto__,k__5835__auto__){
var self__ = this;
var this__5834__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"head","head",-771383919),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"body","body",-2049205669),null], null), null),k__5835__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5834__auto____$1),self__.__meta),k__5835__auto__);
} else {
return (new gamma.ast.Term(self__.head,self__.body,self__.id,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5835__auto__)),null));
}
});

gamma.ast.Term.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5832__auto__,k__5833__auto__,G__13875){
var self__ = this;
var this__5832__auto____$1 = this;
var pred__13879 = cljs.core.keyword_identical_QMARK_;
var expr__13880 = k__5833__auto__;
if(cljs.core.truth_(pred__13879.call(null,new cljs.core.Keyword(null,"head","head",-771383919),expr__13880))){
return (new gamma.ast.Term(G__13875,self__.body,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13879.call(null,new cljs.core.Keyword(null,"body","body",-2049205669),expr__13880))){
return (new gamma.ast.Term(self__.head,G__13875,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13879.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__13880))){
return (new gamma.ast.Term(self__.head,self__.body,G__13875,self__.__meta,self__.__extmap,null));
} else {
return (new gamma.ast.Term(self__.head,self__.body,self__.id,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5833__auto__,G__13875),null));
}
}
}
});

gamma.ast.Term.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5837__auto__){
var self__ = this;
var this__5837__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"head","head",-771383919),self__.head],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"body","body",-2049205669),self__.body],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null))], null),self__.__extmap));
});

gamma.ast.Term.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5824__auto__,G__13875){
var self__ = this;
var this__5824__auto____$1 = this;
return (new gamma.ast.Term(self__.head,self__.body,self__.id,G__13875,self__.__extmap,self__.__hash));
});

gamma.ast.Term.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5830__auto__,entry__5831__auto__){
var self__ = this;
var this__5830__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5831__auto__)){
return cljs.core._assoc.call(null,this__5830__auto____$1,cljs.core._nth.call(null,entry__5831__auto__,(0)),cljs.core._nth.call(null,entry__5831__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5830__auto____$1,entry__5831__auto__);
}
});

gamma.ast.Term.cljs$lang$type = true;

gamma.ast.Term.cljs$lang$ctorPrSeq = (function (this__5859__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"gamma.ast/Term");
});

gamma.ast.Term.cljs$lang$ctorPrWriter = (function (this__5859__auto__,writer__5860__auto__){
return cljs.core._write.call(null,writer__5860__auto__,"gamma.ast/Term");
});

gamma.ast.__GT_Term = (function __GT_Term(head,body,id){
return (new gamma.ast.Term(head,body,id,null,null,null));
});

gamma.ast.map__GT_Term = (function map__GT_Term(G__13877){
return (new gamma.ast.Term(new cljs.core.Keyword(null,"head","head",-771383919).cljs$core$IFn$_invoke$arity$1(G__13877),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(G__13877),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__13877),null,cljs.core.dissoc.call(null,G__13877,new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"id","id",-1388402092)),null));
});

gamma.ast.head = (function head(x){
return new cljs.core.Keyword(null,"head","head",-771383919).cljs$core$IFn$_invoke$arity$1(x);
});
gamma.ast.body = (function body(x){
return new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(x);
});
gamma.ast.term_counter = cljs.core.atom.call(null,(0));

/**
* @constructor
* @param {*} id
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
gamma.ast.Id = (function (id,__meta,__extmap,__hash){
this.id = id;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
gamma.ast.Id.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5825__auto__,k__5826__auto__){
var self__ = this;
var this__5825__auto____$1 = this;
return cljs.core._lookup.call(null,this__5825__auto____$1,k__5826__auto__,null);
});

gamma.ast.Id.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5827__auto__,k13884,else__5828__auto__){
var self__ = this;
var this__5827__auto____$1 = this;
var G__13886 = (((k13884 instanceof cljs.core.Keyword))?k13884.fqn:null);
switch (G__13886) {
case "id":
return self__.id;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k13884,else__5828__auto__);

}
});

gamma.ast.Id.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5839__auto__,writer__5840__auto__,opts__5841__auto__){
var self__ = this;
var this__5839__auto____$1 = this;
var pr_pair__5842__auto__ = ((function (this__5839__auto____$1){
return (function (keyval__5843__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5840__auto__,cljs.core.pr_writer,""," ","",opts__5841__auto__,keyval__5843__auto__);
});})(this__5839__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5840__auto__,pr_pair__5842__auto__,"#gamma.ast.Id{",", ","}",opts__5841__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null))], null),self__.__extmap));
});

gamma.ast.Id.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5823__auto__){
var self__ = this;
var this__5823__auto____$1 = this;
return self__.__meta;
});

gamma.ast.Id.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5819__auto__){
var self__ = this;
var this__5819__auto____$1 = this;
return (new gamma.ast.Id(self__.id,self__.__meta,self__.__extmap,self__.__hash));
});

gamma.ast.Id.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5829__auto__){
var self__ = this;
var this__5829__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

gamma.ast.Id.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5820__auto__){
var self__ = this;
var this__5820__auto____$1 = this;
var h__5643__auto__ = self__.__hash;
if(!((h__5643__auto__ == null))){
return h__5643__auto__;
} else {
var h__5643__auto____$1 = cljs.core.hash_imap.call(null,this__5820__auto____$1);
self__.__hash = h__5643__auto____$1;

return h__5643__auto____$1;
}
});

gamma.ast.Id.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5821__auto__,other__5822__auto__){
var self__ = this;
var this__5821__auto____$1 = this;
if(cljs.core.truth_((function (){var and__5210__auto__ = other__5822__auto__;
if(cljs.core.truth_(and__5210__auto__)){
return ((this__5821__auto____$1.constructor === other__5822__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__5821__auto____$1,other__5822__auto__));
} else {
return and__5210__auto__;
}
})())){
return true;
} else {
return false;
}
});

gamma.ast.Id.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5834__auto__,k__5835__auto__){
var self__ = this;
var this__5834__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),null], null), null),k__5835__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5834__auto____$1),self__.__meta),k__5835__auto__);
} else {
return (new gamma.ast.Id(self__.id,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5835__auto__)),null));
}
});

gamma.ast.Id.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5832__auto__,k__5833__auto__,G__13883){
var self__ = this;
var this__5832__auto____$1 = this;
var pred__13887 = cljs.core.keyword_identical_QMARK_;
var expr__13888 = k__5833__auto__;
if(cljs.core.truth_(pred__13887.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__13888))){
return (new gamma.ast.Id(G__13883,self__.__meta,self__.__extmap,null));
} else {
return (new gamma.ast.Id(self__.id,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5833__auto__,G__13883),null));
}
});

gamma.ast.Id.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5837__auto__){
var self__ = this;
var this__5837__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null))], null),self__.__extmap));
});

gamma.ast.Id.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5824__auto__,G__13883){
var self__ = this;
var this__5824__auto____$1 = this;
return (new gamma.ast.Id(self__.id,G__13883,self__.__extmap,self__.__hash));
});

gamma.ast.Id.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5830__auto__,entry__5831__auto__){
var self__ = this;
var this__5830__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5831__auto__)){
return cljs.core._assoc.call(null,this__5830__auto____$1,cljs.core._nth.call(null,entry__5831__auto__,(0)),cljs.core._nth.call(null,entry__5831__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5830__auto____$1,entry__5831__auto__);
}
});

gamma.ast.Id.cljs$lang$type = true;

gamma.ast.Id.cljs$lang$ctorPrSeq = (function (this__5859__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"gamma.ast/Id");
});

gamma.ast.Id.cljs$lang$ctorPrWriter = (function (this__5859__auto__,writer__5860__auto__){
return cljs.core._write.call(null,writer__5860__auto__,"gamma.ast/Id");
});

gamma.ast.__GT_Id = (function __GT_Id(id){
return (new gamma.ast.Id(id,null,null,null));
});

gamma.ast.map__GT_Id = (function map__GT_Id(G__13885){
return (new gamma.ast.Id(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__13885),null,cljs.core.dissoc.call(null,G__13885,new cljs.core.Keyword(null,"id","id",-1388402092)),null));
});

gamma.ast.id_QMARK_ = (function id_QMARK_(x){
return (x instanceof gamma.ast.Id);
});
gamma.ast.gen_term_id = (function gen_term_id(){
var id = cljs.core.swap_BANG_.call(null,gamma.ast.term_counter,cljs.core.inc);
return (new gamma.ast.Id(id,null,null,null));
});
gamma.ast.term_QMARK_ = (function term_QMARK_(x){
return (x instanceof gamma.ast.Term);
});
gamma.ast.literal = (function literal(x){
var type = (((cljs.core._EQ_.call(null,true,x)) || (cljs.core._EQ_.call(null,false,x)))?new cljs.core.Keyword(null,"bool","bool",1444635321):((cljs.core.integer_QMARK_.call(null,x))?new cljs.core.Keyword(null,"int","int",-1741416922):((typeof x === 'number')?new cljs.core.Keyword(null,"float","float",-1732389368):((cljs.core.map_QMARK_.call(null,x))?new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(x):(function(){throw (new Error("Invalid literal"))})()
))));
return cljs.core.assoc.call(null,gamma.ast.__GT_Term.call(null,new cljs.core.Keyword(null,"literal","literal",1664775605),null,gamma.ast.gen_term_id.call(null)),new cljs.core.Keyword(null,"value","value",305978217),x,new cljs.core.Keyword(null,"type","type",1174270348),type);
});
/**
* @param {...*} var_args
*/
gamma.ast.term = (function() { 
var term__delegate = function (h,args){
return gamma.ast.__GT_Term.call(null,h,cljs.core.map.call(null,(function (p1__13891_SHARP_){
if(gamma.ast.term_QMARK_.call(null,p1__13891_SHARP_)){
return p1__13891_SHARP_;
} else {
return gamma.ast.literal.call(null,p1__13891_SHARP_);
}
}),args),gamma.ast.gen_term_id.call(null));
};
var term = function (h,var_args){
var args = null;
if (arguments.length > 1) {
var G__13892__i = 0, G__13892__a = new Array(arguments.length -  1);
while (G__13892__i < G__13892__a.length) {G__13892__a[G__13892__i] = arguments[G__13892__i + 1]; ++G__13892__i;}
  args = new cljs.core.IndexedSeq(G__13892__a,0);
} 
return term__delegate.call(this,h,args);};
term.cljs$lang$maxFixedArity = 1;
term.cljs$lang$applyTo = (function (arglist__13893){
var h = cljs.core.first(arglist__13893);
var args = cljs.core.rest(arglist__13893);
return term__delegate(h,args);
});
term.cljs$core$IFn$_invoke$arity$variadic = term__delegate;
return term;
})()
;
gamma.ast.primitive_types = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.Keyword(null,"float","float",-1732389368)], null);
gamma.ast.qualifiers = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"storage","storage",1867247511),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"const","const",1709929842),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword(null,"uniform","uniform",496503348),new cljs.core.Keyword(null,"varying","varying",685535123)], null),new cljs.core.Keyword(null,"precision","precision",-1175707478),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"highp","highp",1022399361),new cljs.core.Keyword(null,"mediump","mediump",-1401096909),new cljs.core.Keyword(null,"lowp","lowp",-1550357978)], null),new cljs.core.Keyword(null,"invariant","invariant",-1658446508),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"inout","inout",2140559998)], null)], null);
gamma.ast.statements = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"if","if",-458814265),new cljs.core.Keyword(null,"if-else","if-else",979367526),new cljs.core.Keyword(null,"continue","continue",-207346553),new cljs.core.Keyword(null,"break","break",126570225),new cljs.core.Keyword(null,"discard","discard",-1939593545)], null);
gamma.ast.vector_class = (function vector_class(primitive_type){
var iter__5978__auto__ = (function iter__13898(s__13899){
return (new cljs.core.LazySeq(null,(function (){
var s__13899__$1 = s__13899;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13899__$1);
if(temp__4126__auto__){
var s__13899__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13899__$2)){
var c__5976__auto__ = cljs.core.chunk_first.call(null,s__13899__$2);
var size__5977__auto__ = cljs.core.count.call(null,c__5976__auto__);
var b__13901 = cljs.core.chunk_buffer.call(null,size__5977__auto__);
if((function (){var i__13900 = (0);
while(true){
if((i__13900 < size__5977__auto__)){
var length = cljs.core._nth.call(null,c__5976__auto__,i__13900);
cljs.core.chunk_append.call(null,b__13901,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"member-type","member-type",645139088),primitive_type,new cljs.core.Keyword(null,"length","length",588987862),length], null));

var G__13902 = (i__13900 + (1));
i__13900 = G__13902;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13901),iter__13898.call(null,cljs.core.chunk_rest.call(null,s__13899__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13901),null);
}
} else {
var length = cljs.core.first.call(null,s__13899__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"member-type","member-type",645139088),primitive_type,new cljs.core.Keyword(null,"length","length",588987862),length], null),iter__13898.call(null,cljs.core.rest.call(null,s__13899__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5978__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3),(4)], null));
});
gamma.ast.vector_types = cljs.core.mapcat.call(null,gamma.ast.vector_class,gamma.ast.primitive_types);
gamma.ast.matrix_types = cljs.core.map.call(null,(function (dim){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"matrix","matrix",803137200),new cljs.core.Keyword(null,"member-type","member-type",645139088),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),dim], null);
}),(2),(3),(4));
gamma.ast.operators = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__13903_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"operator","operator",-1860875338).cljs$core$IFn$_invoke$arity$1(p1__13903_SHARP_),p1__13903_SHARP_],null));
}),new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"operator","operator",-1860875338),new cljs.core.Keyword(null,"aget","aget",-149474981)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"operator","operator",-1860875338),new cljs.core.Keyword(null,"selector","selector",762528866)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operator","operator",-1860875338),new cljs.core.Keyword(null,"increment","increment",-1558831484),new cljs.core.Keyword(null,"literal","literal",1664775605),"++",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"postfix","postfix",-571724593)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operator","operator",-1860875338),new cljs.core.Keyword(null,"decrement","decrement",-725286119),new cljs.core.Keyword(null,"literal","literal",1664775605),"--",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"postfix","postfix",-571724593)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operator","operator",-1860875338),new cljs.core.Keyword(null,"pre-increment","pre-increment",-1566257876),new cljs.core.Keyword(null,"literal","literal",1664775605),"++",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"prefix","prefix",-265908465)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operator","operator",-1860875338),new cljs.core.Keyword(null,"pre-decrement","pre-decrement",1269674757),new cljs.core.Keyword(null,"literal","literal",1664775605),"--",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"prefix","prefix",-265908465)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operator","operator",-1860875338),new cljs.core.Keyword(null,"not","not",-595976884),new cljs.core.Keyword(null,"literal","literal",1664775605),"!",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"prefix","prefix",-265908465)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operator","operator",-1860875338),new cljs.core.Keyword(null,"+-","+-",1426840219),new cljs.core.Keyword(null,"literal","literal",1664775605),"+-",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"infix","infix",1991018113)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operator","operator",-1860875338),new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.Keyword(null,"literal","literal",1664775605),"*",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"infix","infix",1991018113)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operator","operator",-1860875338),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"literal","literal",1664775605),"/",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"infix","infix",1991018113)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operator","operator",-1860875338),new cljs.core.Keyword(null,"+","+",1913524883),new cljs.core.Keyword(null,"literal","literal",1664775605),"+",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"infix","infix",1991018113)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operator","operator",-1860875338),new cljs.core.Keyword(null,"-","-",-2112348439),new cljs.core.Keyword(null,"literal","literal",1664775605),"-",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"infix","infix",1991018113)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operator","operator",-1860875338),new cljs.core.Keyword(null,"<","<",-646864291),new cljs.core.Keyword(null,"literal","literal",1664775605),"<",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"infix","infix",1991018113)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operator","operator",-1860875338),new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Keyword(null,"literal","literal",1664775605),">",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"infix","infix",1991018113)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operator","operator",-1860875338),new cljs.core.Keyword(null,"<=","<=",-395636158),new cljs.core.Keyword(null,"literal","literal",1664775605),"<=",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"infix","infix",1991018113)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operator","operator",-1860875338),new cljs.core.Keyword(null,">=",">=",-623615505),new cljs.core.Keyword(null,"literal","literal",1664775605),">=",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"infix","infix",1991018113)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operator","operator",-1860875338),new cljs.core.Keyword(null,"==","==",-1874649676),new cljs.core.Keyword(null,"literal","literal",1664775605),"==",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"infix","infix",1991018113)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operator","operator",-1860875338),new cljs.core.Keyword(null,"!=","!=",-1841737356),new cljs.core.Keyword(null,"literal","literal",1664775605),"!=",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"infix","infix",1991018113)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operator","operator",-1860875338),new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.Keyword(null,"literal","literal",1664775605),"&&",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"infix","infix",1991018113)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operator","operator",-1860875338),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"literal","literal",1664775605),"||",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"infix","infix",1991018113)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operator","operator",-1860875338),new cljs.core.Keyword(null,"xor","xor",-1119942254),new cljs.core.Keyword(null,"literal","literal",1664775605),"^^",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"infix","infix",1991018113)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"operator","operator",-1860875338),new cljs.core.Keyword(null,"conditional-choice","conditional-choice",1872771601)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operator","operator",-1860875338),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"literal","literal",1664775605),"=",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"infix","infix",1991018113)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operator","operator",-1860875338),new cljs.core.Keyword(null,"set+","set+",1784778737),new cljs.core.Keyword(null,"literal","literal",1664775605),"+=",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"infix","infix",1991018113)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operator","operator",-1860875338),new cljs.core.Keyword(null,"set-","set-",-1958952622),new cljs.core.Keyword(null,"literal","literal",1664775605),"-=",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"infix","infix",1991018113)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operator","operator",-1860875338),new cljs.core.Keyword(null,"set*","set*",-966220230),new cljs.core.Keyword(null,"literal","literal",1664775605),"*=",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"infix","infix",1991018113)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operator","operator",-1860875338),new cljs.core.Keyword(null,"set-div","set-div",991399498),new cljs.core.Keyword(null,"literal","literal",1664775605),"/=",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"infix","infix",1991018113)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"operator","operator",-1860875338),new cljs.core.Keyword(null,"constructor","constructor",-1953928811)], null)], null)));
gamma.ast.standard_functions = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),x.call(null,(1)),new cljs.core.Keyword(null,"input","input",556931961),cljs.core.vec.call(null,cljs.core.take_nth.call(null,(2),x.call(null,(2)))),new cljs.core.Keyword(null,"output","output",-1105869043),x.call(null,(0)),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null], null), null)], null)], null);
}),cljs.core.PersistentVector.fromArray([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"radians","radians",1835725084),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"degrees","degrees",2015169884)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"degrees","degrees",2015169884),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"radians","radians",1835725084)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"sin","sin",80907862),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"angle","angle",1622094254)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"cos","cos",1201758276),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"angle","angle",1622094254)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"tan","tan",1273609893),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"angle","angle",1622094254)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"asin","asin",1750305199),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"x","x",2099068185)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"acos","acos",-1286789764),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"x","x",2099068185)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"atan","atan",1627885634),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"x","x",2099068185)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"atan","atan",1627885634),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"y_over_x","y_over_x",-2020218726)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"y","y",-1757859776)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"exp","exp",-261706262),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"x","x",2099068185)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"x","x",2099068185)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"exp2","exp2",-1037021901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"x","x",2099068185)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"log2","log2",803778830),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"x","x",2099068185)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"sqrt","sqrt",-1270051929),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"x","x",2099068185)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"inversesqrt","inversesqrt",-1232448652),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"x","x",2099068185)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"abs","abs",-246026477),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"x","x",2099068185)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"sign","sign",1261721667),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"x","x",2099068185)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"x","x",2099068185)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"ceil","ceil",-1824929952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"x","x",2099068185)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"fract","fract",-2061728070),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"x","x",2099068185)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"mod","mod",-130487320),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"y","y",-1757859776)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"y","y",-1757859776)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"clamp","clamp",1803814940),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"minVal","minVal",-704736801),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"maxVal","maxVal",1477873248)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"clamp","clamp",1803814940),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"minVal","minVal",-704736801),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"maxVal","maxVal",1477873248)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"edge","edge",919909153),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"x","x",2099068185)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"edge","edge",919909153),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"x","x",2099068185)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"smoothstep","smoothstep",968032787),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"edge0","edge0",-346394871),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"edge1","edge1",-585354358),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"x","x",2099068185)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"smoothstep","smoothstep",968032787),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"edge0","edge0",-346394871),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"edge1","edge1",-585354358),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"x","x",2099068185)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"length","length",588987862),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"x","x",2099068185)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"distance","distance",-1671893894),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"p0","p0",1556537807),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"p1","p1",-936759954)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"dot","dot",1442709401),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"y","y",-1757859776)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),new cljs.core.Keyword(null,"cross","cross",194557789),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"vec3","vec3",1116680488),new cljs.core.Keyword(null,"y","y",-1757859776)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"normalize","normalize",-1904390051),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"x","x",2099068185)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"faceforward","faceforward",840660504),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"N","N",-640629860),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"I","I",1827140963),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"Nref","Nref",-834606669)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"reflect","reflect",-2113821122),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"I","I",1827140963),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"N","N",-640629860)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"refract","refract",-1502353966),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"I","I",1827140963),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"N","N",-640629860),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"eta","eta",2118756479)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"texture2DLod","texture2DLod",-1274741294),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sampler2D","sampler2D",-2107312644),new cljs.core.Keyword(null,"sampler","sampler",2068889864),new cljs.core.Keyword(null,"vec2","vec2",-762258640),new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"lod","lod",-71922055)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"texture2DProjLod","texture2DProjLod",-1483280499),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sampler2D","sampler2D",-2107312644),new cljs.core.Keyword(null,"sampler","sampler",2068889864),new cljs.core.Keyword(null,"vec3","vec3",1116680488),new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"lod","lod",-71922055)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"texture2DProjLod","texture2DProjLod",-1483280499),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sampler2D","sampler2D",-2107312644),new cljs.core.Keyword(null,"sampler","sampler",2068889864),new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"lod","lod",-71922055)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"textureCubeLod","textureCubeLod",149096100),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sampler2D","sampler2D",-2107312644),new cljs.core.Keyword(null,"sampler","sampler",2068889864),new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"lod","lod",-71922055)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"texture2D","texture2D",-252500594),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sampler2D","sampler2D",-2107312644),new cljs.core.Keyword(null,"sampler","sampler",2068889864),new cljs.core.Keyword(null,"vec2","vec2",-762258640),new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"bias","bias",-315297926)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"texture2DProj","texture2DProj",1965198007),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sampler2D","sampler2D",-2107312644),new cljs.core.Keyword(null,"sampler","sampler",2068889864),new cljs.core.Keyword(null,"vec3","vec3",1116680488),new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"bias","bias",-315297926)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"texture2DProj","texture2DProj",1965198007),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sampler2D","sampler2D",-2107312644),new cljs.core.Keyword(null,"sampler","sampler",2068889864),new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"bias","bias",-315297926)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"textureCube","textureCube",-82179345),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samplerCube","samplerCube",-734605291),new cljs.core.Keyword(null,"sampler","sampler",2068889864),new cljs.core.Keyword(null,"vec3","vec3",1116680488),new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"bias","bias",-315297926)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"texture2D","texture2D",-252500594),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sampler2D","sampler2D",-2107312644),new cljs.core.Keyword(null,"sampler","sampler",2068889864),new cljs.core.Keyword(null,"vec2","vec2",-762258640),new cljs.core.Keyword(null,"coord","coord",-1453656639)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"texture2DProj","texture2DProj",1965198007),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sampler2D","sampler2D",-2107312644),new cljs.core.Keyword(null,"sampler","sampler",2068889864),new cljs.core.Keyword(null,"vec3","vec3",1116680488),new cljs.core.Keyword(null,"coord","coord",-1453656639)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"texture2DProj","texture2DProj",1965198007),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sampler2D","sampler2D",-2107312644),new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"coord","coord",-1453656639)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"textureCube","textureCube",-82179345),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samplerCube","samplerCube",-734605291),new cljs.core.Keyword(null,"sampler","sampler",2068889864),new cljs.core.Keyword(null,"vec3","vec3",1116680488),new cljs.core.Keyword(null,"coord","coord",-1453656639)], null)], null)], true)));
gamma.ast.matrix_functions = cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),x.call(null,(1)),new cljs.core.Keyword(null,"input","input",556931961),x.call(null,(2)),new cljs.core.Keyword(null,"output","output",-1105869043),x.call(null,(0)),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mat","mat",-2101579175),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mat3","mat3",402087048),null,new cljs.core.Keyword(null,"mat2","mat2",238424363),null,new cljs.core.Keyword(null,"mat4","mat4",-237531594),null], null), null)], null)], null);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mat","mat",-2101579175),new cljs.core.Keyword(null,"matrixCompMult","matrixCompMult",-113763171),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mat","mat",-2101579175),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"mat","mat",-2101579175),new cljs.core.Keyword(null,"y","y",-1757859776)], null)], null)], null));
gamma.ast.vector_relational_functions = cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),x.call(null,(1)),new cljs.core.Keyword(null,"input","input",556931961),x.call(null,(2)),new cljs.core.Keyword(null,"output","output",-1105869043),x.call(null,(0)),new cljs.core.Keyword(null,"parameter","parameter",1978789597),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"vec3","vec3",1116680488),null,new cljs.core.Keyword(null,"ivec4","ivec4",-537108439),null,new cljs.core.Keyword(null,"ivec2","ivec2",148465998),null,new cljs.core.Keyword(null,"vec4","vec4",631182126),null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),null,new cljs.core.Keyword(null,"ivec3","ivec3",-104254851),null], null), null),new cljs.core.Keyword(null,"bvec","bvec",-1487966976),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bvec3","bvec3",-635324058),null,new cljs.core.Keyword(null,"bvec2","bvec2",-148389679),null,new cljs.core.Keyword(null,"bvec4","bvec4",1798744632),null], null), null)], null)], null);
}),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bvec","bvec",-1487966976),new cljs.core.Keyword(null,"lessThan","lessThan",271596927),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"y","y",-1757859776)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bvec","bvec",-1487966976),new cljs.core.Keyword(null,"lessThanEqual","lessThanEqual",-1424831639),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"y","y",-1757859776)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bvec","bvec",-1487966976),new cljs.core.Keyword(null,"greaterThan","greaterThan",-819396252),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"y","y",-1757859776)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bvec","bvec",-1487966976),new cljs.core.Keyword(null,"greaterThanEqual","greaterThanEqual",1721684728),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"y","y",-1757859776)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bvec","bvec",-1487966976),new cljs.core.Keyword(null,"equal","equal",-1921681350),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"y","y",-1757859776)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bvec","bvec",-1487966976),new cljs.core.Keyword(null,"equal","equal",-1921681350),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bvec","bvec",-1487966976),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"bvec","bvec",-1487966976),new cljs.core.Keyword(null,"y","y",-1757859776)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bvec","bvec",-1487966976),new cljs.core.Keyword(null,"notEqual","notEqual",-2139307542),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"T","T",175240877),new cljs.core.Keyword(null,"y","y",-1757859776)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bvec","bvec",-1487966976),new cljs.core.Keyword(null,"notEqual","notEqual",-2139307542),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bvec","bvec",-1487966976),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"bvec","bvec",-1487966976),new cljs.core.Keyword(null,"y","y",-1757859776)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.Keyword(null,"any","any",1705907423),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bvec","bvec",-1487966976),new cljs.core.Keyword(null,"x","x",2099068185)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bvec","bvec",-1487966976),new cljs.core.Keyword(null,"x","x",2099068185)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bvec","bvec",-1487966976),new cljs.core.Keyword(null,"not","not",-595976884),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bvec","bvec",-1487966976),new cljs.core.Keyword(null,"x","x",2099068185)], null)], null)], null));
gamma.ast.functions = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.concat.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1843675177),gamma.ast.vector_relational_functions),cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1843675177),gamma.ast.matrix_functions),cljs.core.map.call(null,cljs.core.first,gamma.ast.standard_functions)));
