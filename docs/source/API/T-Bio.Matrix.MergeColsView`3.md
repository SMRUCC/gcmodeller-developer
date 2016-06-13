---
title: MergeColsView`3
---

# MergeColsView`3
_namespace: [Bio.Matrix](N-Bio.Matrix.html)_

A wrapper around one or more parent matrices that created a merged view of their columns.
 Because it is a view, any changes made to the values of this matrix or the parents are reflected in all.

### Methods

#### #ctor
```csharp
Bio.Matrix.MergeColsView`3.#ctor(System.Boolean,Bio.Matrix.Matrix{`0,`1,`2}[])
```
Creates a new view in which the cols of the matrices are merged. The cols will be in the order
 of the input matrices. If two matrices contain a rows with the same colKey, an exception is thrown. All matricies must have the same
 MissingValue.
 This is a 'view' in the sense that changes to the values in either matrix will be reflected in both.

|Parameter Name|Remarks|
|--------------|-------|
|rowsMustMatch|true, to require all matrices to have the same rowKeys in the same order; false, use an intersection of the
            rowKeys in the order of RowKeys of the first matrix.|
|matrices|One or more matricies with which to concatinate cols.|





