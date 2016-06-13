---
title: SingularValueDecomposition
---

# SingularValueDecomposition
_namespace: [DotNetMatrix](N-DotNetMatrix.html)_

Singular Value Decomposition.
 
 For an m-by-n matrix A with m >= n, the singular value decomposition is
 an m-by-n orthogonal matrix U, an n-by-n diagonal matrix S, and
 an n-by-n orthogonal matrix V so that A = U*S*V'.
 The singular values, sigma[k] = S[k][k], are ordered so that
 sigma[0] >= sigma[1] >= ... >= sigma[n-1].
 The singular value decompostion always exists, so the constructor will
 never fail. The matrix condition number and the effective numerical
 rank can be computed from this decomposition.

### Methods

#### #ctor
```csharp
DotNetMatrix.SingularValueDecomposition.#ctor(DotNetMatrix.GeneralMatrix)
```
Construct the singular value decomposition

|Parameter Name|Remarks|
|--------------|-------|
|Arg|   Rectangular matrix
            |

_returns:      Structure to access U, S and V.
            _

#### Condition
```csharp
DotNetMatrix.SingularValueDecomposition.Condition
```
Two norm condition number
_returns:      max(S)/min(S)
            _

#### GetU
```csharp
DotNetMatrix.SingularValueDecomposition.GetU
```
Return the left singular vectors
_returns:      U
            _

#### GetV
```csharp
DotNetMatrix.SingularValueDecomposition.GetV
```
Return the right singular vectors
_returns:      V
            _

#### Norm2
```csharp
DotNetMatrix.SingularValueDecomposition.Norm2
```
Two norm
_returns:      max(S)
            _

#### Rank
```csharp
DotNetMatrix.SingularValueDecomposition.Rank
```
Effective numerical matrix rank
_returns:      Number of nonnegligible singular values.
            _



### Properties

#### m
Row and column dimensions.
 @serial row dimension.
 @serial column dimension.
#### n
Row and column dimensions.
 @serial row dimension.
 @serial column dimension.
#### s
Return the diagonal matrix of singular values
#### SingularValues
Return the one-dimensional array of singular values
#### U
Arrays for internal storage of U and V.
 @serial internal storage of U.
 @serial internal storage of V.
#### V
Arrays for internal storage of U and V.
 @serial internal storage of U.
 @serial internal storage of V.

