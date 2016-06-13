---
title: MergeRowsView`3
---

# MergeRowsView`3
_namespace: [Bio.Matrix](N-Bio.Matrix.html)_

A wrapper around one or more parent matrices that created a merged view of their rows.
 Because it is a view, any changes made to the values of this matrix or the parents are reflected in all.

### Methods

#### #ctor
```csharp
Bio.Matrix.MergeRowsView`3.#ctor(System.Boolean,Bio.Matrix.Matrix{`0,`1,`2}[])
```
Creates a new view in which the rows of the matrices are merged. The rows will be in the order
 of the input matrices. If two matrices contain a rows with the same rowKey, an exception is thrown. All matricies must have the same
 MissingValue.
 This is a 'view' in the sense that changes to the values in either matrix will be reflected in both.

|Parameter Name|Remarks|
|--------------|-------|
|colsMustMatch|true, to require all matrices to have the same colKeys in the same order; false, use an intersection of the
            colKeys in the order of ColKeys of the first matrix.|
|matrices|One or more matricies with which to concatinate rows.|





