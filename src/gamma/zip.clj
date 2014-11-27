;   Copyright (c) Rich Hickey. All rights reserved.
;   The use and distribution terms for this software are covered by the
;   Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
;   which can be found in the file epl-v10.html at the root of this distribution.
;   By using this software in any fashion, you are agreeing to be bound by
;   the terms of this license.
;   You must not remove this notice, or any other, from this software.

;functional hierarchical zipper, with navigation, editing and enumeration
;see Huet

(ns
  gamma.zip
  (:refer-clojure :exclude (replace remove next))
  (:use clj-tuple)
  (:use gamma.ast)
  (:import gamma.ast.Term)

  )

(defrecord ZipperPath [l r ppath pnodes changed?])

(defrecord ZipperLocation [node path])

(defn zipper [root]  (ZipperLocation. root nil))

(defn build [base content]
  (assoc base :children content))


(defn node
  "Returns the node at loc"
  [^ZipperLocation loc]
  (.node loc))

(defn branch?
  "Returns true if the node at loc is a branch"
  [^ZipperLocation loc]
  (instance? gamma.ast.Term (.node loc)))

(defn children
  "Returns a seq of the children of node at loc, which must be a branch"
  [^ZipperLocation loc]
  (body (.node loc)))

(defn path
  "Returns a seq of nodes leading to this loc"
  [^ZipperLocation loc]
  (.pnodes ^ZipperPath (.path loc)))

(defn down
  "Returns the loc of the leftmost child of the node at this loc,
  or nil if no children"
  [^ZipperLocation loc]
  (when (branch? loc)
    (when-let [cs (children loc)]
      (let [node (.node loc), path ^ZipperPath (.path loc)]
        (ZipperLocation.

          (first cs)
          (ZipperPath. (tuple)
                       (clojure.core/next cs)
                       path
                       (if path
                         (conj (.pnodes path) node)
                         [node])
                       nil))))))


(defn up
  "Returns the loc of the parent of the node at this loc, or nil if at the top"
  [^ZipperLocation loc]
  (let [node (.node loc), path ^ZipperPath (.path loc)]
    (when-let [pnodes (and path (.pnodes path))]
      (let [pnode (peek pnodes)]
        (if (.changed? path)
          (ZipperLocation.
            (build pnode (concat (.l path) (cons node (.r path))))
            (if-let [ppath ^ZipperPath (.ppath path)]
              (ZipperPath.
                (.l ppath)
                (.r ppath)
                (.ppath ppath)
                (.pnodes ppath)
                true)))
          (ZipperLocation.
            pnode
            (.ppath path)))))))

(defn root
  "zips all the way up and returns the root node, reflecting any changes."
  [^ZipperLocation loc]
  (if (identical? :end (.path loc))
    (.node loc)
    (let [p (up loc)]
      (if p
        (recur p)
        (.node loc)))))

(defn right
  "Returns the loc of the right sibling of the node at this loc, or nil"
  [^ZipperLocation loc]
  (let [path ^ZipperPath (.path loc)]
    (when-let [r (and path (.r path))]
      (ZipperLocation.

        (first r)
        ; (defrecord ZipperPath [l r ppath pnodes changed?])

        (ZipperPath.  (conj (.l path) (.node loc))
                      (clojure.core/next r)
                      (.ppath path)
                      (.pnodes path)
                      (.changed? path)
                      )
        ;(assoc path :l (conj (.l path) (.node loc)) :r (clojure.core/next r))
        ))))


(defn left
  "Returns the loc of the left sibling of the node at this loc, or nil"
  [^ZipperLocation loc]
  (let [path ^ZipperPath (.path loc)]
    (when (and path (seq (.l path)))
      (ZipperLocation.
        (peek (.l path))
        (assoc path :l (pop (.l path)) :r (cons (.node loc) (.r path)))))))


(defn replace
  "Replaces the node at this loc, without moving"
  [^ZipperLocation loc node]
  (ZipperLocation.

    node
    (if-let [path ^ZipperPath (.path loc)]
      (ZipperPath.
        (.l path)
        (.r path)
        (.ppath path)
        (.pnodes path)
        true))))


(defn next
  "Moves to the next loc in the hierarchy, depth-first. When reaching
  the end, returns a distinguished loc detectable via end?. If already
  at the end, stays there."
  [^ZipperLocation loc]
  (let [path (.path loc)]
    (if (identical? :end path)
      loc
      (or
        (and (branch? loc) (down loc))
        (right loc)
        (loop [p loc]
          (if-let [u (up p)]
            (or (right u) (recur u))
            (ZipperLocation. (.node p) :end)))))))

(defn next-nondescending
  "moves to the next location the the right or above node"
  [^ZipperLocation loc]
  (let [path (.path loc)]
    (if (identical? :end path)
      loc
      (or
        (right loc)
        (loop [p loc]
          (if-let [u (up p)]
            (or (right u) (recur u))
            (ZipperLocation. (.node p) :end)))))))


(defn end?
  "Returns true if loc represents the end of a depth-first walk"
  [^ZipperLocation loc]
  (identical? :end (.path loc)))


(comment






  )

(comment
  (def t
    (let [x (term :x)
          y (term :y x x)]
      (term :z y y)))
  t

  (take 10 (iterate next (zipper t)))

  (path (next (zipper t)))

  (loop [z (zipper t)]
    (if (end? z)
      z
      (do
        (println (path z))
        (recur (next z)))))

  (defn term? [x] (instance? gamma.ast.Term x))

  (defn walk-indexed! [f t index]
    (if (term? t)
      (reduce
        (fn [i x]
          (let [index2 (conj index i)]
            (if (f index2 x)
              (walk-indexed! f x index2))
            (inc i)))
        0
        (body t))))


  (def db (atom {:root {}}))

  (defn gather-expressions [t index data]
    (if (term? t)
      (reduce
        (fn [i x]
          (let [index2 (conj index i)]

            (let [skip-children (get-in @(:db data) [:root t])]
              (add-expr t data)
              (if (not skip-children)


                )


              )

            (if (f index2 x)
              (walk-indexed! f x index2)

              )
            (inc i)))
        0
        (body t))))

  ;; in walk-indexed, return value of f should specificy
  ;; whether to continue the recursion.

  (comment
    a(1,2)
    a[1,2]
    A[1,2]
    (If x)
    (Plus  )
    If{:foo true} [1,2]
    if{:foo true}[1,2]
    If[1,2]
    If(1,2)
    <a 1,2>
    A{:foo true}(1,2)
    ^{:foo true} a[1 2]
    a<:foo true>[1,2]

    terms just need some fipp action.
    formatter can return a map for each term to be displayed b4 body.
    standard map is everything except for the head & body
    if map is empty, dont bother printing

    can have a lot of fun writing custom pprinters for terms.



    not clear if its worth having a convention for constructor naming.
    first off: what is a constructor? any fn of ast->ast? or something more particular?


    (Min (+g 1 2) (-g 3 c)
         (g- 1 2)
         (?- 1 2)
         (?* ))


    )

  (walk-indexed! (fn [x y] (println x) true) t [])

  (let [e (atom #{})]
    (walk-indexed! (fn [x y]
                    (if (@e y)
                      false
                      (swap! e conj y)))
                  t
                  [])
    (count @e))

  t




  (if (println 1) 2 3)





  ;; as we go back up the tree, we bring with us the unique expressions.

  ;; going back down the tree, we keep track of new exprs delared, and don't redeclare them if we've seen them already


  )