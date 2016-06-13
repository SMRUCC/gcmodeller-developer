---
title: AbstractMatrixView`3
---

# AbstractMatrixView`3
_namespace: [Bio.Matrix](N-Bio.Matrix.html)_

An abstract wrapper used to store common code by several of the other matrix views.

### Methods

#### GetMatrixAndIndex
```csharp
Bio.Matrix.AbstractMatrixView`3.GetMatrixAndIndex(System.Int32,System.Int32,Bio.Matrix.Matrix{`0,`1,`2}@,System.Int32@,System.Int32@)
```
Given an rowIndex and colIndex returns the appropriate parent matrix and its cooresponding rowIndex and colIndex.

|Parameter Name|Remarks|
|--------------|-------|
|rowIndex|a rowIndex into the current matrix|
|colIndex|a colIndex into the current matrix|
|m|the appropriate parment matrix|
|mappedRowIndex|the cooresponding rowIndex in the parent|
|mappedColIndex|the corresponding colIndex in the parent|


#### GetMatrixAndKey
```csharp
Bio.Matrix.AbstractMatrixView`3.GetMatrixAndKey(`0,`1,Bio.Matrix.Matrix{`0,`1,`2}@,`0@,`1@)
```
Given an rowKey and colKey returns the appropriate parent matrix and its cooresponding rowKey and colKey.

|Parameter Name|Remarks|
|--------------|-------|
|rowKey|a rowKey into the current matrix|
|colKey|a colKey into the current matrix|
|m|the appropriate parment matrix|
|mappedRowKey|the cooresponding rowKey in the parent|
|mappedColKey|the corresponding colKey in the parent|





