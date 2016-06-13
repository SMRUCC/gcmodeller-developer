---
title: Matrix`3
---

# Matrix`3
_namespace: [Bio.Matrix](N-Bio.Matrix.html)_

A 2-D collection of values, accessable via a pair of indexes or a pair of keys.

### Methods

#### ColView
```csharp
Bio.Matrix.Matrix`3.ColView(System.Int32)
```
Gets a col in the form of an IDictionary.

|Parameter Name|Remarks|
|--------------|-------|
|colIndex|The index for the col of interest|

_returns: An IDictionary that maps row keys to (nonmissing) values. Values in the dictionary may be read, set, or added.
            Values changes are reflected in the Matrix. Any values added to the dictionary must have a key that already
            exists in the RowKeys (and, thus, IndexOfRowKeys) of the Matrix.
            The ColView method is at least O(log n) and typically O(1).
            Access in the dictionary is at least O(log n) and typically O(1).
            _

#### ContainsColKey
```csharp
Bio.Matrix.Matrix`3.ContainsColKey(`1)
```
Determines whether the Matrix contains the specified col key.
 The method is at least O(log n) and typically O(1).

|Parameter Name|Remarks|
|--------------|-------|
|colKey|A row key of interest. It need not exist in ColKeys (and thus, IndexOfColKeys)|

_returns: true if ColKeys contrains colKey; otherwise, false._

#### ContainsRowAndColKeys
```csharp
Bio.Matrix.Matrix`3.ContainsRowAndColKeys(`0,`1)
```
Determines whether the Matrix contains the specified keys.
 The method is at least O(log n) and typically O(1).

|Parameter Name|Remarks|
|--------------|-------|
|rowKey|A row key of interest. It need not exist in RowKeys (and thus, IndexOfRowKeys)|
|colKey|A col key of interest. It need not exist in ColKeys (and thus, IndexOfColKeys)|

_returns: true if RowKeys contrains rowKey and ColKeys contains colKey; otherwise, false._

#### ContainsRowKey
```csharp
Bio.Matrix.Matrix`3.ContainsRowKey(`0)
```
Determines whether the Matrix contains the specified row key.
 The method is at least O(log n) and typically O(1).

|Parameter Name|Remarks|
|--------------|-------|
|rowKey|A row key of interest. It need not exist in RowKeys (and thus, IndexOfRowKeys)|

_returns: true if RowKeys contrains rowKey; otherwise, false._

#### GetValueOrMissing
```csharp
Bio.Matrix.Matrix`3.GetValueOrMissing(System.Int32,System.Int32)
```
Gets the value associated with the specified indexes or the special Missing value.

|Parameter Name|Remarks|
|--------------|-------|
|rowIndex|The index for the row of interest|
|colIndex|The index for the col of interest|

_returns: a value if the matrix contains an element with the specified indexes; otherwise, the special Missing value._

#### IsMissing
```csharp
Bio.Matrix.Matrix`3.IsMissing(System.Int32,System.Int32)
```
Determines if the Matrix is missing a value.

|Parameter Name|Remarks|
|--------------|-------|
|rowIndex|The index for the row of interest|
|colIndex|The index for the col of interest|

_returns: true if the matrix contains an element with the specified indexes; otherwise, false._

#### IsMissingAll
```csharp
Bio.Matrix.Matrix`3.IsMissingAll
```
Determines of the Matrix is completely empty.
 May be as slow as O(rowCount * colCount)
_returns: true if the matrix contains all missing values; otherwise, false._

#### IsMissingAllInCol
```csharp
Bio.Matrix.Matrix`3.IsMissingAllInCol(System.Int32)
```
Determines if a column is missing all its values.
 May be as slow as O(rowCount * log(colCount))

|Parameter Name|Remarks|
|--------------|-------|
|colIndex|The index for the col of interest|

_returns: true is the col specified is missing all its values; otherwise false._

#### IsMissingAllInRow
```csharp
Bio.Matrix.Matrix`3.IsMissingAllInRow(System.Int32)
```
Determines if a row is missing all its values.
 May be as slow as O(log(rowCount) * colCount)

|Parameter Name|Remarks|
|--------------|-------|
|rowIndex|The index for the row of interest|

_returns: true is the row specified is missing all its values; otherwise false._

#### IsMissingAllInSomeCol
```csharp
Bio.Matrix.Matrix`3.IsMissingAllInSomeCol
```
Determines if the Matrix contains a column missing all values.
 May be as slow as O(rowCount * colCount)
_returns: true if the matrix contains a column missing all values; otherwise, false._

#### IsMissingAllInSomeRow
```csharp
Bio.Matrix.Matrix`3.IsMissingAllInSomeRow
```
Determines if the Matrix contains a row missing all values.
 May be as slow as O(rowCount * colCount)
_returns: true if the matrix contains a row missing all values; otherwise, false._

#### IsMissingSome
```csharp
Bio.Matrix.Matrix`3.IsMissingSome
```
Determines of the Matrix contains any missing values.
 May be as slow as O(rowCount * colCount)
_returns: true if the matrix contains any missing values; otherwise, false._

#### MatrixEquals
```csharp
Bio.Matrix.Matrix`3.MatrixEquals(Bio.Matrix.Matrix{`0,`1,`2})
```
Determines whether two Matrix<TRowKey,TColKey,TValue> are equal. They are equal if they
 0. The 2nd one is not null
 3. Have the same missing values
 1. have the same rowKeys, in the same order
 2. have the same colKeys, in the same order
 4. Have the same nonmissing values
 May be as slow as O(rowCount * colCount)

|Parameter Name|Remarks|
|--------------|-------|
|otherMatrix|The matrix to compare to|

_returns: true, if they are equal in terms of rowKeys, colKeys, missing and nonMissing values. Otherwise, false._

#### Remove
```csharp
Bio.Matrix.Matrix`3.Remove(System.Int32,System.Int32)
```
Removes the value with the specified indexes from the Matrix.

|Parameter Name|Remarks|
|--------------|-------|
|rowIndex|The index for the row of interest|
|colIndex|The index for the col of interest|

_returns: true if the element is successfully found and removed; otherwise, false.
            This method returns false if the value is already missing from the Matrix._

#### RowView
```csharp
Bio.Matrix.Matrix`3.RowView(System.Int32)
```
Gets a row in the form of an IDictionary.

|Parameter Name|Remarks|
|--------------|-------|
|rowIndex|The index for the row of interest|

_returns: An IDictionary that maps col keys to (nonmissing) values. Values in the dictionary may be read, set, or added.
            Values changes are reflected in the Matrix. Any values added to the dictionary must have a key that already
            exists in the ColKeys (and, thus, IndexOfColKeys) of the Matrix.
            The RowView method is at least O(log n) and typically O(1).
            Access in the dictionary is at least O(log n) and typically O(1).
            _

#### SetValueOrMissing
```csharp
Bio.Matrix.Matrix`3.SetValueOrMissing(System.Int32,System.Int32,`2)
```
Set a value in the matrix or, by using the special Missing value, mark an element as missing.

|Parameter Name|Remarks|
|--------------|-------|
|rowIndex|The index for the row of interest|
|colIndex|The index for the col of interest|
|value|The value to set or the special Missing value.|


#### ToString2D
```csharp
Bio.Matrix.Matrix`3.ToString2D
```
Returns a String that represents the Matrix as a series of lines.
_returns: A string, containing newlines characters, representing the matrix._

#### TryGetValue
```csharp
Bio.Matrix.Matrix`3.TryGetValue(System.Int32,System.Int32,`2@)
```
Gets the value associated with the specified integer indexes, if a value is not missing.

|Parameter Name|Remarks|
|--------------|-------|
|rowIndex|The index for the row of interest|
|colIndex|The index for the col of interest|
|value|When this method returns, contains the value associated with the specified indexes, if the value is not missing;
            otherwise, the missing value is returned. This parameter is passed uninitialized.|

_returns: true if the matrix contains an element with the specified indexes; otherwise, false._

#### WriteDense
```csharp
Bio.Matrix.Matrix`3.WriteDense(System.IO.TextWriter)
```
Writes the matrix to a TextWriter in dense format. The first line is "var" TAB and then the tab-delimited col keys.
 Next is one line per row key. Each line is the row key TAB and then the tab-limited values.
 Values may include the special Missing value.

|Parameter Name|Remarks|
|--------------|-------|
|textWriter|The TextWriter to write to.|




### Properties

#### ColCount
Gets the number of keys in ColKeys. Because ColKeys never changes, this value never changes.
 The property is O(1).
#### ColKeys
The collection of col keys. As with any collection this is a mapping from
 an index to a value. The collection is read-only and never changes. To get the
 effect of changing this list, a new matrix can be created on top of the current matrix.
 Access is at least O(log n) and typically O(1).
#### IndexOfColKey
A dictionary that maps a col index (an integer) to a col key. The
 dictionary is read-only and never changes. To get the
 effect of changing this list, a new matrix can be created on top of the current matrix.
 Access is at least O(log n) and typically O(1).
#### IndexOfRowKey
A dictionary that maps a row index (an integer) to a row key. The
 dictionary is read-only and never changes. To get the
 effect of changing this list, a new matrix can be created on top of the current matrix.
 Access is at least O(log n) and typically O(1).
#### Item
Gets or sets the value associated with the specified keys.
#### MissingValue
The special Missing value.
 This property is O(1).
#### RowCount
Gets the number of keys in RowKeys. Because RowKeys never changes, this value never changes.
 The property is O(1).
#### RowKeyColKeyValues
Returns an enumerator that iterates through the Matrix, skipping any missing values.
#### RowKeys
The collection of row keys. As with any collection this is a mapping from
 an index to a value. The collection is read-only and never changes. To get the
 effect of changing this list, a new matrix can be created on top of the current matrix.
 Access is at least O(log n) and typically O(1).
#### Values
Gets a sequence containing the nonmissing values in the Matrix.

