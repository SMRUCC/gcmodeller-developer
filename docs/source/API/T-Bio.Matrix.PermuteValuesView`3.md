---
title: PermuteValuesView`3
---

# PermuteValuesView`3
_namespace: [Bio.Matrix](N-Bio.Matrix.html)_

A wrapper around a parent matrix that permutes the values by column.
 e.g. Before m1=
 cid0 cid1 cid2
 v0 a b c
 v1 d null f
 v2 null null i
 
 m1.PermuteValuesView(1, 2, 0) =
 cid0 cid1 cid2
 v0 b c a
 v1 null f d
 v2 null i null
 
 
 Because it is a view, any changes made to the values of this matrix or the parent matrix are reflected in both.



### Properties

#### IndexOfParentCol
Given a colIndex value tells the cooresponding colIndex in the parent matrix.
#### ParentMatrix
The matrix that this view wraps.

