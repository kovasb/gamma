// Compiled by ClojureScript 0.0-2913 {:target :nodejs}
goog.provide('clojure.core.rrb_vector.transients');
goog.require('cljs.core');
goog.require('clojure.core.rrb_vector.trees');
goog.require('clojure.core.rrb_vector.nodes');
clojure.core.rrb_vector.transients.ensure_editable = (function ensure_editable(edit,node){
if((node.edit === edit)){
return node;
} else {
var new_arr = cljs.core.aclone.call(null,node.arr);
if(((33) === new_arr.length)){
(new_arr[(32)] = cljs.core.aclone.call(null,(new_arr[(32)])));
} else {
}

return (new cljs.core.VectorNode(edit,new_arr));
}
});
clojure.core.rrb_vector.transients.editable_root = (function editable_root(root){
return (new cljs.core.VectorNode((function (){var obj13539 = {};
return obj13539;
})(),cljs.core.aclone.call(null,root.arr)));
});
clojure.core.rrb_vector.transients.editable_tail = (function editable_tail(tail){
var ret = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
cljs.core.array_copy.call(null,tail,(0),ret,(0),tail.length);

return ret;
});
clojure.core.rrb_vector.transients.push_tail_BANG_ = (function push_tail_BANG_(shift,cnt,root_edit,current_node,tail_node){
var ret = clojure.core.rrb_vector.transients.ensure_editable.call(null,root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,ret)){
var n_13540 = ret;
var shift_13541__$1 = shift;
while(true){
var arr_13542 = n_13540.arr;
var subidx_13543 = (((cnt - (1)) >> shift_13541__$1) & (31));
if((shift_13541__$1 === (5))){
(arr_13542[subidx_13543] = tail_node);
} else {
var child_13544 = (arr_13542[subidx_13543]);
if((child_13544 == null)){
(arr_13542[subidx_13543] = clojure.core.rrb_vector.trees.new_path.call(null,tail_node.arr,root_edit,(shift_13541__$1 - (5)),tail_node));
} else {
var editable_child_13545 = clojure.core.rrb_vector.transients.ensure_editable.call(null,root_edit,child_13544);
(arr_13542[subidx_13543] = editable_child_13545);

var G__13546 = editable_child_13545;
var G__13547 = (shift_13541__$1 - (5));
n_13540 = G__13546;
shift_13541__$1 = G__13547;
continue;
}
}
break;
}

return ret;
} else {
var arr = ret.arr;
var rngs = clojure.core.rrb_vector.nodes.ranges.call(null,ret);
var li = ((rngs[(32)]) - (1));
var cret = (((shift === (5)))?null:(function (){var child = clojure.core.rrb_vector.transients.ensure_editable.call(null,root_edit,(arr[li]));
var ccnt = (((li > (0)))?((rngs[li]) - (rngs[(li - (1))])):(rngs[(0)]));
if(!((ccnt === ((1) << shift)))){
return push_tail_BANG_.call(null,(shift - (5)),(ccnt + (1)),root_edit,child,tail_node);
} else {
return null;
}
})());
if(cljs.core.truth_(cret)){
(arr[li] = cret);

(rngs[li] = ((rngs[li]) + (32)));

return ret;
} else {
(arr[(li + (1))] = clojure.core.rrb_vector.trees.new_path.call(null,tail_node.arr,root_edit,(shift - (5)),tail_node));

(rngs[(li + (1))] = ((rngs[li]) + (32)));

(rngs[(32)] = ((rngs[(32)]) + (1)));

return ret;
}
}
});
clojure.core.rrb_vector.transients.pop_tail_BANG_ = (function pop_tail_BANG_(shift,cnt,root_edit,current_node){
var ret = clojure.core.rrb_vector.transients.ensure_editable.call(null,root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,ret)){
var subidx = (((cnt - (1)) >> shift) & (31));
if((shift > (5))){
var child = pop_tail_BANG_.call(null,(shift - (5)),cnt,root_edit,(ret.arr[subidx]));
if(((child == null)) && ((subidx === (0)))){
return null;
} else {
var arr = ret.arr;
(arr[subidx] = child);

return ret;
}
} else {
if((subidx === (0))){
return null;
} else {
var arr = ret.arr;
(arr[subidx] = null);

return ret;

}
}
} else {
var subidx = (((cnt - (1)) >> shift) & (31));
var rngs = clojure.core.rrb_vector.nodes.ranges.call(null,ret);
var subidx__$1 = (function (){var subidx__$1 = subidx;
while(true){
if(((((rngs[(subidx__$1 + (1))]) | (0)) === (0))) || ((subidx__$1 === (31)))){
return subidx__$1;
} else {
var G__13548 = (subidx__$1 + (1));
subidx__$1 = G__13548;
continue;
}
break;
}
})();
if((shift > (5))){
var child = (ret.arr[subidx__$1]);
var child_cnt = (((subidx__$1 === (0)))?(rngs[(0)]):((rngs[subidx__$1]) - (rngs[(subidx__$1 - (1))])));
var new_child = pop_tail_BANG_.call(null,(shift - (5)),child_cnt,root_edit,child);
if(((new_child == null)) && ((subidx__$1 === (0)))){
return null;
} else {
if(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,child)){
var arr = ret.arr;
(rngs[subidx__$1] = ((rngs[subidx__$1]) - (32)));

(arr[subidx__$1] = new_child);

if((new_child == null)){
(rngs[(32)] = ((rngs[(32)]) - (1)));
} else {
}

return ret;
} else {
var rng = clojure.core.rrb_vector.nodes.last_range.call(null,child);
var diff = (rng - (cljs.core.truth_(new_child)?clojure.core.rrb_vector.nodes.last_range.call(null,new_child):(0)));
var arr = ret.arr;
(rngs[subidx__$1] = ((rngs[subidx__$1]) - diff));

(arr[subidx__$1] = new_child);

if((new_child == null)){
(rngs[(32)] = ((rngs[(32)]) - (1)));
} else {
}

return ret;

}
}
} else {
if((subidx__$1 === (0))){
return null;
} else {
var arr = ret.arr;
var child = (arr[subidx__$1]);
(arr[subidx__$1] = null);

(rngs[subidx__$1] = (0));

(rngs[(32)] = ((rngs[(32)]) - (1)));

return ret;

}
}
}
});
clojure.core.rrb_vector.transients.do_assoc_BANG_ = (function do_assoc_BANG_(shift,root_edit,current_node,i,val){
var ret = clojure.core.rrb_vector.transients.ensure_editable.call(null,root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,ret)){
var shift_13549__$1 = shift;
var node_13550 = ret;
while(true){
if((shift_13549__$1 === (0))){
var arr_13551 = node_13550.arr;
(arr_13551[(i & (31))] = val);
} else {
var arr_13552 = node_13550.arr;
var subidx_13553 = ((i >> shift_13549__$1) & (31));
var child_13554 = clojure.core.rrb_vector.transients.ensure_editable.call(null,root_edit,(arr_13552[subidx_13553]));
(arr_13552[subidx_13553] = child_13554);

var G__13555 = (shift_13549__$1 - (5));
var G__13556 = child_13554;
shift_13549__$1 = G__13555;
node_13550 = G__13556;
continue;
}
break;
}
} else {
var arr_13557 = ret.arr;
var rngs_13558 = clojure.core.rrb_vector.nodes.ranges.call(null,ret);
var subidx_13559 = ((i >> shift) & (31));
var subidx_13560__$1 = (function (){var subidx__$1 = subidx_13559;
while(true){
if((i < ((rngs_13558[subidx__$1]) | (0)))){
return subidx__$1;
} else {
var G__13562 = (subidx__$1 + (1));
subidx__$1 = G__13562;
continue;
}
break;
}
})();
var i_13561__$1 = (((subidx_13560__$1 === (0)))?i:(i - (rngs_13558[(subidx_13560__$1 - (1))])));
(arr_13557[subidx_13560__$1] = do_assoc_BANG_.call(null,(shift - (5)),root_edit,(arr_13557[subidx_13560__$1]),i_13561__$1,val));
}

return ret;
});
