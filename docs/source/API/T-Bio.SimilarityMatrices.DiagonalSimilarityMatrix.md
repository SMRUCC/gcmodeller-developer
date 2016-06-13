---
title: DiagonalSimilarityMatrix
---

# DiagonalSimilarityMatrix
_namespace: [Bio.SimilarityMatrices](N-Bio.SimilarityMatrices.html)_

Diagonal similarity matrix is a special case and needs its own class.
 It does not have an actual matrix, instead using a test "if (col == row)" and
 returning the diagonal value if true, and the off diagonal value if false.

### Methods

#### #ctor
```csharp
Bio.SimilarityMatrices.DiagonalSimilarityMatrix.#ctor(System.Int32,System.Int32)
```
Initializes a new instance of the DiagonalSimilarityMatrix class.
 Creates a SimilarityMatrix with one value for match and one for mis-match.

|Parameter Name|Remarks|
|--------------|-------|
|matchValue|Diagonal score for (col == row).|
|mismatchValue|Off-diagonal score for (col != row).|




### Properties

#### diagonalValue
Gets or sets the diagonal value (match value) for the diagonal similarity matrix.
#### Item
Returns value of diagonal similarity matrix at [row,col].
#### offDiagonalValue
Gets or sets the off diagonal value (mis-match value for the diagonal similarity matrix.

