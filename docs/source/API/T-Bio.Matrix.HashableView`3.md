---
title: HashableView`3
---

# HashableView`3
_namespace: [Bio.Matrix](N-Bio.Matrix.html)_

A wrapper around a parent matrix that allows a matrix to be hashed. This, for example, allows a matrix to be
 used as the key of a dictionary. Two matricies will hash together if they are MatrixEqual.
 
 Every time it needs to confirm that two matrices really are equal, it will call MatrixEqual which
 can require a scan of every value.
 
 The wrapper doesn't allow it's values to be changed. Any changes in the values of its parent matrix will *not* be
 reflected in its hashcode and so can give unexpected results.

### Methods

#### Equals
```csharp
Bio.Matrix.HashableView`3.Equals(System.Object)
```
Two HashableView matrices are equal if they are MatrixEquals, that is, they have the same
 RowKeys and ColKeys (in the same order), the same special MissingValue, and the same values.

|Parameter Name|Remarks|
|--------------|-------|
|obj|-|


#### GetHashCode
```csharp
Bio.Matrix.HashableView`3.GetHashCode
```
Returns the hashcode of the matrix. This values is computed only once from when the HashableView is constructed.
 Two matricies will hash together if they are MatrixEqual.
 
 Every time the class needs to confirm that two matrices really are equal, it will call Equals which calls MatrixEqual which
 can require a scan of every value.
_returns: a hashcode based on rowKeys, colKeys, special missing value, and values of the matrix._

#### Remove
```csharp
Bio.Matrix.HashableView`3.Remove(`0,`1)
```
The wrapper doesn't allow its values to be changed. This method throws an exception.

|Parameter Name|Remarks|
|--------------|-------|
|rowKey|The key for the row of interest. The key must exist in RowKeys (and, thus, IndexOfRowKey)|
|colKey|The key for the col of interest. The key must exist in ColKeys (and, thus, IndexOfColKey)|

_returns: This method throws an exception._

#### SetValueOrMissing
```csharp
Bio.Matrix.HashableView`3.SetValueOrMissing(`0,`1,`2)
```
The wrapper doesn't allow its values to be changed. This method throws an exception.

|Parameter Name|Remarks|
|--------------|-------|
|rowKey|The key for the row of interest. The key must exist in RowKeys (and, thus, IndexOfRowKey)|
|colKey|The key for the col of interest. The key must exist in ColKeys (and, thus, IndexOfColKey)|
|value|Value that will be set.|

_returns: This method throws an exception._



### Properties

#### ParentMatrix
The matrix that this view wraps.

