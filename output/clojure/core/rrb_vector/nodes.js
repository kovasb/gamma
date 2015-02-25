// Compiled by ClojureScript 0.0-2913 {:target :nodejs}
goog.provide('clojure.core.rrb_vector.nodes');
goog.require('cljs.core');
clojure.core.rrb_vector.nodes.empty_node = cljs.core.PersistentVector.EMPTY_NODE;
clojure.core.rrb_vector.nodes.clone = (function clone(shift,node){
return (new cljs.core.VectorNode(node.edit,cljs.core.aclone.call(null,node.arr)));
});
clojure.core.rrb_vector.nodes.regular_QMARK_ = (function regular_QMARK_(node){
return !((node.arr.length === (33)));
});
clojure.core.rrb_vector.nodes.ranges = (function ranges(node){
return (node.arr[(32)]);
});
clojure.core.rrb_vector.nodes.last_range = (function last_range(node){
var rngs = clojure.core.rrb_vector.nodes.ranges.call(null,node);
var i = ((rngs[(32)]) - (1));
return (rngs[i]);
});
clojure.core.rrb_vector.nodes.regular_ranges = (function regular_ranges(shift,cnt){
var step = ((1) << shift);
var rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var i = (0);
var r = step;
while(true){
if((r < cnt)){
(rngs[i] = r);

var G__13499 = (i + (1));
var G__13500 = (r + step);
i = G__13499;
r = G__13500;
continue;
} else {
(rngs[i] = cnt);

(rngs[(32)] = (i + (1)));

return rngs;
}
break;
}
});
clojure.core.rrb_vector.nodes.overflow_QMARK_ = (function overflow_QMARK_(root,shift,cnt){
while(true){
if(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,root)){
return ((cnt >> (5)) > ((1) << shift));
} else {
var rngs = clojure.core.rrb_vector.nodes.ranges.call(null,root);
var slc = (rngs[(32)]);
var and__5210__auto__ = (slc === (32));
if(and__5210__auto__){
var or__5222__auto__ = (shift === (5));
if(or__5222__auto__){
return or__5222__auto__;
} else {
var G__13501 = (root.arr[(slc - (1))]);
var G__13502 = (shift - (5));
var G__13503 = (((rngs[(31)]) - (rngs[(30)])) + (32));
root = G__13501;
shift = G__13502;
cnt = G__13503;
continue;
}
} else {
return and__5210__auto__;
}
}
break;
}
});
clojure.core.rrb_vector.nodes.index_of_0 = (function index_of_0(arr){
var l = (0);
var h = (31);
while(true){
if((l >= (h - (1)))){
if((((arr[l]) | (0)) === (0))){
return l;
} else {
if((((arr[h]) | (0)) === (0))){
return h;
} else {
return (32);
}
}
} else {
var mid = (l + ((h - l) >> (1)));
if((((arr[mid]) | (0)) === (0))){
var G__13504 = l;
var G__13505 = mid;
l = G__13504;
h = G__13505;
continue;
} else {
var G__13506 = (mid + (1));
var G__13507 = h;
l = G__13506;
h = G__13507;
continue;
}
}
break;
}
});
clojure.core.rrb_vector.nodes.index_of_nil = (function index_of_nil(arr){
var l = (0);
var h = (31);
while(true){
if((l >= (h - (1)))){
if(((arr[l]) == null)){
return l;
} else {
if(((arr[h]) == null)){
return h;
} else {
return (32);
}
}
} else {
var mid = (l + ((h - l) >> (1)));
if(((arr[mid]) == null)){
var G__13508 = l;
var G__13509 = mid;
l = G__13508;
h = G__13509;
continue;
} else {
var G__13510 = (mid + (1));
var G__13511 = h;
l = G__13510;
h = G__13511;
continue;
}
}
break;
}
});
clojure.core.rrb_vector.nodes.first_child = (function first_child(node){
return (node.arr[(0)]);
});
clojure.core.rrb_vector.nodes.last_child = (function last_child(node){
var arr = node.arr;
if(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,node)){
return (arr[(clojure.core.rrb_vector.nodes.index_of_nil.call(null,arr) - (1))]);
} else {
return (arr[((clojure.core.rrb_vector.nodes.ranges.call(null,node)[(32)]) - (1))]);
}
});
clojure.core.rrb_vector.nodes.remove_leftmost_child = (function remove_leftmost_child(shift,parent){
var arr = parent.arr;
if(((arr[(1)]) == null)){
return null;
} else {
var r_QMARK_ = clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,parent);
var new_arr = (new Array(((r_QMARK_)?(32):(33))));
cljs.core.array_copy.call(null,arr,(1),new_arr,(0),(31));

if(!(r_QMARK_)){
var rngs_13512 = clojure.core.rrb_vector.nodes.ranges.call(null,parent);
var rng0_13513 = (rngs_13512[(0)]);
var new_rngs_13514 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var lim_13515 = (rngs_13512[(32)]);
cljs.core.array_copy.call(null,rngs_13512,(1),new_rngs_13514,(0),(lim_13515 - (1)));

var i_13516 = (0);
while(true){
if((i_13516 < lim_13515)){
(new_rngs_13514[i_13516] = ((new_rngs_13514[i_13516]) - rng0_13513));

var G__13517 = (i_13516 + (1));
i_13516 = G__13517;
continue;
} else {
}
break;
}

(new_rngs_13514[(32)] = ((rngs_13512[(32)]) - (1)));

(new_rngs_13514[((rngs_13512[(32)]) - (1))] = (0));

(new_arr[(32)] = new_rngs_13514);
} else {
}

return cljs.core.__GT_VectorNode.call(null,parent.edit,new_arr);
}
});
clojure.core.rrb_vector.nodes.replace_leftmost_child = (function replace_leftmost_child(shift,parent,pcnt,child,d){
if(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,parent)){
var step = ((1) << shift);
var rng0 = (step - d);
var ncnt = (pcnt - d);
var li = ((shift >> (pcnt - (1))) & (31));
var arr = parent.arr;
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(new_arr[(0)] = child);

cljs.core.array_copy.call(null,arr,(1),new_arr,(1),li);

(new_arr[(32)] = new_rngs);

(new_rngs[(0)] = rng0);

(new_rngs[li] = ncnt);

(new_rngs[(32)] = (li + (1)));

var i_13518 = (1);
while(true){
if((i_13518 <= li)){
(new_rngs[i_13518] = ((new_rngs[(i_13518 - (1))]) + step));

var G__13519 = (i_13518 + (1));
i_13518 = G__13519;
continue;
} else {
}
break;
}

return cljs.core.__GT_VectorNode.call(null,null,new_arr);
} else {
var new_arr = cljs.core.aclone.call(null,parent.arr);
var rngs = clojure.core.rrb_vector.nodes.ranges.call(null,parent);
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var li = ((rngs[(32)]) - (1));
(new_rngs[(32)] = (rngs[(32)]));

(new_arr[(32)] = new_rngs);

(new_arr[(0)] = child);

var i_13520 = (0);
while(true){
if((i_13520 <= li)){
(new_rngs[i_13520] = ((rngs[i_13520]) - d));

var G__13521 = (i_13520 + (1));
i_13520 = G__13521;
continue;
} else {
}
break;
}

return cljs.core.__GT_VectorNode.call(null,null,new_arr);
}
});
clojure.core.rrb_vector.nodes.replace_rightmost_child = (function replace_rightmost_child(shift,parent,child,d){
if(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,parent)){
var arr = parent.arr;
var i = (clojure.core.rrb_vector.nodes.index_of_nil.call(null,arr) - (1));
if(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,child)){
var new_arr = cljs.core.aclone.call(null,arr);
(new_arr[i] = child);

return cljs.core.__GT_VectorNode.call(null,null,new_arr);
} else {
var arr__$1 = parent.arr;
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var step = ((1) << shift);
var rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(rngs[(32)] = (i + (1)));

(new_arr[(32)] = rngs);

cljs.core.array_copy.call(null,arr__$1,(0),new_arr,(0),i);

(new_arr[i] = child);

var j_13522 = (0);
var r_13523 = step;
while(true){
if((j_13522 <= i)){
(rngs[j_13522] = r_13523);

var G__13524 = (j_13522 + (1));
var G__13525 = (r_13523 + step);
j_13522 = G__13524;
r_13523 = G__13525;
continue;
} else {
}
break;
}

(rngs[i] = clojure.core.rrb_vector.nodes.last_range.call(null,child));

return cljs.core.__GT_VectorNode.call(null,null,arr__$1);
}
} else {
var rngs = clojure.core.rrb_vector.nodes.ranges.call(null,parent);
var new_rngs = cljs.core.aclone.call(null,rngs);
var i = ((rngs[(32)]) - (1));
var new_arr = cljs.core.aclone.call(null,parent.arr);
(new_arr[i] = child);

(new_arr[(32)] = new_rngs);

(new_rngs[i] = ((rngs[i]) + d));

return cljs.core.__GT_VectorNode.call(null,null,new_arr);
}
});
clojure.core.rrb_vector.nodes.new_path_STAR_ = (function new_path_STAR_(shift,node){
var reg_QMARK_ = ((32) === node.arr.length);
var len = ((reg_QMARK_)?(32):(33));
var arr = (new Array(len));
var rngs = ((!(reg_QMARK_))?(function (){var G__13527 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(G__13527[(0)] = node.arr.length);

(G__13527[(32)] = (1));

return G__13527;
})():null);
var ret = cljs.core.__GT_VectorNode.call(null,null,arr);
var arr_13528__$1 = arr;
var shift_13529__$1 = shift;
while(true){
if((shift_13529__$1 === (5))){
if(!(reg_QMARK_)){
(arr_13528__$1[(32)] = rngs);
} else {
}

(arr_13528__$1[(0)] = node);
} else {
var a_13530 = (new Array(len));
var e_13531 = cljs.core.__GT_VectorNode.call(null,null,a_13530);
(arr_13528__$1[(0)] = e_13531);

if(!(reg_QMARK_)){
(arr_13528__$1[(32)] = rngs);
} else {
}

var G__13532 = a_13530;
var G__13533 = (shift_13529__$1 - (5));
arr_13528__$1 = G__13532;
shift_13529__$1 = G__13533;
continue;
}
break;
}

return ret;
});
clojure.core.rrb_vector.nodes.fold_tail = (function fold_tail(node,shift,cnt,tail){
var tlen = tail.length;
var reg_QMARK_ = (clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,node)) && ((tlen === (32)));
var arr = node.arr;
var li = clojure.core.rrb_vector.nodes.index_of_nil.call(null,arr);
var new_arr = (new Array(((reg_QMARK_)?(32):(33))));
var rngs = ((!(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,node)))?clojure.core.rrb_vector.nodes.ranges.call(null,node):null);
var cret = (((shift === (5)))?cljs.core.__GT_VectorNode.call(null,null,tail):fold_tail.call(null,(arr[(li - (1))]),(shift - (5)),((clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,node))?cljs.core.mod.call(null,cnt,((1) << shift)):(function (){var li__$1 = ((rngs[(32)]) - (1));
if((li__$1 > (0))){
return ((rngs[li__$1]) - (rngs[(li__$1 - (1))]));
} else {
return (rngs[(0)]);
}
})()),tail));
var new_rngs = ((!(reg_QMARK_))?(cljs.core.truth_(rngs)?cljs.core.aclone.call(null,rngs):clojure.core.rrb_vector.nodes.regular_ranges.call(null,shift,cnt)):null);
if((((cret == null)) || ((shift === (5)))) && ((li === (32)))){
return null;
} else {
cljs.core.array_copy.call(null,arr,(0),new_arr,(0),li);

if(reg_QMARK_){
} else {
if(((cret == null)) || ((shift === (5)))){
(new_rngs[li] = ((((li > (0)))?(new_rngs[(li - (1))]):((0) | (0))) + tlen));

(new_rngs[(32)] = (li + (1)));
} else {
if((li > (0))){
(new_rngs[(li - (1))] = ((new_rngs[(li - (1))]) + tlen));
} else {
}

(new_rngs[(32)] = li);
}
}

if(!(reg_QMARK_)){
(new_arr[(32)] = new_rngs);
} else {
}

if((cret == null)){
(new_arr[li] = clojure.core.rrb_vector.nodes.new_path_STAR_.call(null,(shift - (5)),cljs.core.__GT_VectorNode.call(null,null,tail)));
} else {
(new_arr[(((shift === (5)))?li:(li - (1)))] = cret);
}

return cljs.core.__GT_VectorNode.call(null,null,new_arr);
}
});
