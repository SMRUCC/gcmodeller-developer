---
title: RenameColsView`3
---

# RenameColsView`3
_namespace: [Bio.Matrix](N-Bio.Matrix.html)_

A wrapper around a parent matrix that allows col keys to be renamed and/or expanded. If expanded, then multiple keys will
 point to the same underlying row, meaning change to a value in one row will be reflected in another row.
 Also, because it is a view, any changes made to the values of this matrix or the parent matrix are reflected in both.



### Properties

#### NewIndexToOldIndex
A read-only dictionary giving the mapping from the col index of this matrix to the col index of it's parent matrix
#### NewKeyToOldKey
A read-only dictionary giving the mapping from the col keys of this matrix to the col keys of its parent matrix.
#### ParentMatrix
The matrix that this view wraps.

