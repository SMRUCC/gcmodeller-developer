---
title: MatrixViewExtensions
---

# MatrixViewExtensions
_namespace: [Bio.Matrix](N-Bio.Matrix.html)_

Provides a set of static methods for creating view on a Matrix. A view is a light-weight wrapper around a matrix such
 that value changes to either the matrix or its view(s) will be reflected in both.

### Methods

#### ConvertValueView``4
```csharp
Bio.Matrix.MatrixViewExtensions.ConvertValueView``4(Bio.Matrix.Matrix{``0,``1,``2},Bio.Util.ValueConverter{``2,``3},``3)
```
Creates a view of a parent matrix that converts values. For example, if the parent has values '0' ... '9'
 of type character and doubles are needed, this view can convert the characters to double when reading.
 When double values are assigned, they would be converted to characters and stored in the parent matrix.
 If a conversion is impossible,an exception is raised.
 This is a 'view' in the sense that changes to the values in either matrix will be reflected in both.

|Parameter Name|Remarks|
|--------------|-------|
|parentMatrix|The matrix to wrap.|
|converter|A conversion instance, for example, ValueConvertion{char,int}.CharToInt|
|missingValue|The special Missing value for the wrapping matrix.|

_returns: A matrix with values of the desired type_
> If two layers of ConvertValueView are applied to a parent matrix, such that they cancel each other out,
>             the parent matrix is returned.

#### HashableView``3
```csharp
Bio.Matrix.MatrixViewExtensions.HashableView``3(Bio.Matrix.Matrix{``0,``1,``2})
```
Creates a view of the parent matrix which is hashable. For example, it can be used as the key of a dictionary.
 This is a 'view' in the sense that no copying an every little extra memory is used.
 
 Two HashableView matricies are equal if their RowKeys and ColKeys (in order), MissingValue, and values are equal.
 They will have the same hashcode if they are equal.
 
 The hashcode is computed only once when the the HashableView is contructed, so a HashableView does not allow
 its values to be changed. Also, changing values of the parent will give unexpected results.
 
 When used by Dictionary or HashSet, a full call of MatrixEquals (which looks at every value) is needed to confirm
 that two matrices with the same hashcode are really equal.

|Parameter Name|Remarks|
|--------------|-------|
|parentMatrix|The matrix to wrap.|

_returns: A hashable matrix_

#### MergeColsView``3
```csharp
Bio.Matrix.MatrixViewExtensions.MergeColsView``3(Bio.Matrix.Matrix{``0,``1,``2},System.Boolean,Bio.Matrix.Matrix{``0,``1,``2}[])
```
Creates a new view in which the cols of the parent matrix is merged with the cols of the otherMatrices. The cols will be in the order
 of the input matrices. If two matrices contain a cols with the same colKey, an exception is thrown. All matricies must have the same
 MissingValue.
 This is a 'view' in the sense that changes to the values in either matrix will be reflected in both.

|Parameter Name|Remarks|
|--------------|-------|
|parentMatrix|The matrix to wrap.|
|rowsMustMatch|true, to require all matrices to have the same rowKeys in the same order; false, use an intersection of the
            rowKeys in the order of parentMatrix.RowKeys.|
|otherMatrices|zero or more other matricies with which to concatinate cols.|

_returns: A matrix containing the cols of parentMatrix and otherMatrices._
> If no other matrices are given, returns the parent matrix.

#### MergeRowsView``3
```csharp
Bio.Matrix.MatrixViewExtensions.MergeRowsView``3(Bio.Matrix.Matrix{``0,``1,``2},System.Boolean,Bio.Matrix.Matrix{``0,``1,``2}[])
```
Creates a new view in which the rows of the parent matrix is merged with the rows of the otherMatrices. The rows will be in the order
 of the input matrices. If two matrices contain a rows with the same rowKey, an exception is thrown. All matricies must have the same
 MissingValue.
 This is a 'view' in the sense that changes to the values in either matrix will be reflected in both.

|Parameter Name|Remarks|
|--------------|-------|
|parentMatrix|The matrix to wrap.|
|colsMustMatch|true, to require all matrices to have the same colKeys in the same order; false, use an intersection of the
            colKeys in the order of parentMatrix.ColKeys.|
|otherMatrices|zero or more other matricies with which to concatinate rows.|

_returns: A matrix containing the rows of parentMatrix and otherMatrices._
> If no other matrices are given, returns the parent matrix.

#### PermuteColValuesForEachRowView``3
```csharp
Bio.Matrix.MatrixViewExtensions.PermuteColValuesForEachRowView``3(Bio.Matrix.Matrix{``0,``1,``2},System.Random@)
```
Creates a new view in which the columns of the matrix (but not the column keys) are permuted.
 This is a 'view' in the sense that changes to the values in either matrix will be reflected in both.

|Parameter Name|Remarks|
|--------------|-------|
|parentMatrix|The matrix to wrap.|
|random|a Random object from which a permutation is drawn|

_returns: A new matrix with permuted columns._
> If the permutation puts every column back in the same place, the parent matrix is returned.

#### PermuteRowValuesForEachColView``3
```csharp
Bio.Matrix.MatrixViewExtensions.PermuteRowValuesForEachColView``3(Bio.Matrix.Matrix{``0,``1,``2},System.Random@)
```
Creates a new view in which the rows of the matrix (but not the row keys) are permuted.
 This is a 'view' in the sense that changes to the values in either matrix will be reflected in both.

|Parameter Name|Remarks|
|--------------|-------|
|parentMatrix|The matrix to wrap.|
|random|a Random object from which a permutation is drawn|

_returns: A new matrix with permuted rows._
> If the permutation puts every row back in the same place, the parent matrix is returned.

#### RenameColsView``3
```csharp
Bio.Matrix.MatrixViewExtensions.RenameColsView``3(Bio.Matrix.Matrix{``0,``1,``2},System.Collections.Generic.IEnumerable{System.Collections.Generic.KeyValuePair{``1,``1}})
```
Create a new view of the parent matrix in which the columns are renamed
 This is a 'view' in the sense that changes to the values in either matrix will be reflected in both.

|Parameter Name|Remarks|
|--------------|-------|
|parentMatrix|The matrix to wrap.|
|newKeyAndOldKeySequence|A sequence of pair mapping from new keys to the old keys, for example, a dictionary
            More than one new key can map to an old key.
            or a list of KeyValuePair's. Any parent column with a colKey that isn't mentioned will be inaccessable.
            The new cols will be in the order of given in the sequence.|

_returns: A matrix with renamed columns._
> If newKeyAndOldKeySequence maps every key to itself, in the same order, the parent matrix will be returned.

#### RenameRowsView``3
```csharp
Bio.Matrix.MatrixViewExtensions.RenameRowsView``3(Bio.Matrix.Matrix{``0,``1,``2},System.Collections.Generic.IEnumerable{System.Collections.Generic.KeyValuePair{``0,``0}})
```
Create a new view of the parent matrix in which the rows are renamed.
 This is a 'view' in the sense that changes to the values in either matrix will be reflected in both.

|Parameter Name|Remarks|
|--------------|-------|
|parentMatrix|The matrix to wrap.|
|newKeyAndOldKeySequence|A sequence of pair mapping from new keys to the old keys, for example, a dictionary
            More than one new key can map to an old key.
            or a list of KeyValuePair's. Any parent row with a rowKey that isn't mentioned will be inaccessable.
            The new rows will be in the order of given in the sequence.|

_returns: A matrix with renamed rows._
> If newKeyAndOldKeySequence maps every key to itself, in the same order, the parent matrix will be returned.

#### SelectColsView``3
```csharp
Bio.Matrix.MatrixViewExtensions.SelectColsView``3(Bio.Matrix.Matrix{``0,``1,``2},System.Int32[])
```
Create a view of a parent matrix with a subset of the cols (perhaps in a different order).
 If the subset happens to include all cols in the same order, the parent matrix is returned.
 This is a 'view' in the sense that changes to the values in either matrix will be reflected in both.

|Parameter Name|Remarks|
|--------------|-------|
|parentMatrix|The matrix to wrap.|
|colIndexParams|a col index(es) that specifies the subset of col(s) to include (and their desired order).|

_returns: A matrix with the desired col(s in their desired order)._

#### SelectRowsAndColsView``3
```csharp
Bio.Matrix.MatrixViewExtensions.SelectRowsAndColsView``3(Bio.Matrix.Matrix{``0,``1,``2},System.Collections.Generic.IEnumerable{System.Int32},System.Collections.Generic.IEnumerable{System.Int32})
```
Create a view of a parent matrix with a subset of the rows (perhaps in a different order) and
 a subset of the cols (perhaps in a different order). If the subsets happen to include all
 rows and cols in the same order, the parent matrix is returned.
 This is a 'view' in the sense that changes to the values in either matrix will be reflected in both.

|Parameter Name|Remarks|
|--------------|-------|
|parentMatrix|The matrix to wrap.|
|rowIndexEnumerable|A sequence of row indexes that specifies the subset of rows to include and their desired order.|
|colIndexSequence|A sequence of col indexes that specifies the subset of cols to include and their desired order.|

_returns: A matrix with the desired rows and cols in their desired order._

#### SelectRowsView``3
```csharp
Bio.Matrix.MatrixViewExtensions.SelectRowsView``3(Bio.Matrix.Matrix{``0,``1,``2},System.Int32[])
```
Create a view of a parent matrix with a subset of the rows (perhaps in a different order).
 If the subset happens to include all rows in the same order, the parent matrix is returned.
 This is a 'view' in the sense that changes to the values in either matrix will be reflected in both.

|Parameter Name|Remarks|
|--------------|-------|
|parentMatrix|The matrix to wrap.|
|rowIndexParams|a row index(es) that specifies the subset of row(s) to include (and their desired order).|

_returns: A matrix with the desired row(s in their desired order)._

#### TransposeView``3
```csharp
Bio.Matrix.MatrixViewExtensions.TransposeView``3(Bio.Matrix.Matrix{``0,``1,``2})
```
Create a view of the parent matrix in which rows become cols and cols become rows.
 This is a 'view' in the sense that changes to the values in either matrix will be reflected in both.

|Parameter Name|Remarks|
|--------------|-------|
|parentMatrix|The matrix to wrap.|

_returns: A transposed matrix_
> If two layers of TransposeView are applied to a parent matrix, the parent matrix is returned.




