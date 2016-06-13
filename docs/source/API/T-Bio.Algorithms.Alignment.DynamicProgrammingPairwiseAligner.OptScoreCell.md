---
title: OptScoreCell
---

# OptScoreCell
_namespace: [Bio.Algorithms.Alignment.DynamicProgrammingPairwiseAligner](N-Bio.Algorithms.Alignment.DynamicProgrammingPairwiseAligner.html)_

Position details of cell with best score.

### Methods

#### #ctor
```csharp
Bio.Algorithms.Alignment.DynamicProgrammingPairwiseAligner.OptScoreCell.#ctor(System.Int64,System.Int64,System.Int64)
```
Initializes a new instance of the OptScoreCell struct.
 Creates best score cell with the input position values.

|Parameter Name|Remarks|
|--------------|-------|
|row|Row Number.|
|column|Column Number.|
|cell|Cell Number.|


#### Equals
```csharp
Bio.Algorithms.Alignment.DynamicProgrammingPairwiseAligner.OptScoreCell.Equals(System.Object)
```
Override Equals method.

|Parameter Name|Remarks|
|--------------|-------|
|obj|Object for comparison.|

_returns: Result of comparison._

#### GetHashCode
```csharp
Bio.Algorithms.Alignment.DynamicProgrammingPairwiseAligner.OptScoreCell.GetHashCode
```
Returns the Hash code.
_returns: Hash code of OptScoreCell._

#### op_Equality
```csharp
Bio.Algorithms.Alignment.DynamicProgrammingPairwiseAligner.OptScoreCell.op_Equality(Bio.Algorithms.Alignment.DynamicProgrammingPairwiseAligner.OptScoreCell,Bio.Algorithms.Alignment.DynamicProgrammingPairwiseAligner.OptScoreCell)
```
Overrides == Operator.

|Parameter Name|Remarks|
|--------------|-------|
|cell1|First cell.|
|cell2|Second cell.|

_returns: Result of comparison._

#### op_Inequality
```csharp
Bio.Algorithms.Alignment.DynamicProgrammingPairwiseAligner.OptScoreCell.op_Inequality(Bio.Algorithms.Alignment.DynamicProgrammingPairwiseAligner.OptScoreCell,Bio.Algorithms.Alignment.DynamicProgrammingPairwiseAligner.OptScoreCell)
```
Overrides != Operator.

|Parameter Name|Remarks|
|--------------|-------|
|cell1|First cell.|
|cell2|Second cell.|

_returns: Result of comparison._



### Properties

#### Cell
Cell number of cell with optimal score.
#### Column
Column number of cell with optimal score.
#### Row
Row number of cell with optimal score.

