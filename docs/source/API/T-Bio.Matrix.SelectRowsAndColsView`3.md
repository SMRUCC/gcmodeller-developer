---
title: SelectRowsAndColsView`3
---

# SelectRowsAndColsView`3
_namespace: [Bio.Matrix](N-Bio.Matrix.html)_

A wrapper around a parent matrix that can select a subset of rows and cols. It can also change the order
 of the row keys and col keys.
 Because it is a view, any changes made to the values of this matrix or the parent matrix are reflected in both.



### Properties

#### IndexOfParentColKey
A read-only list that maps a col index for this matrix into a col index of the parent matrix
#### IndexOfParentRowKey
A read-only list that maps a row index for this matrix into a row index of the parent matrix
#### ParentMatrix
The matrix that this view wraps.

