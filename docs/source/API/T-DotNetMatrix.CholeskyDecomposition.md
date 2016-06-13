---
title: CholeskyDecomposition
---

# CholeskyDecomposition
_namespace: [DotNetMatrix](N-DotNetMatrix.html)_

Cholesky Decomposition.
 For a symmetric, positive definite matrix A, the Cholesky decomposition
 is an lower triangular matrix L so that A = L*L'.
 If the matrix is not symmetric or positive definite, the constructor
 returns a partial decomposition and sets an internal flag that may
 be queried by the isSPD() method.

### Methods

#### #ctor
```csharp
DotNetMatrix.CholeskyDecomposition.#ctor(DotNetMatrix.GeneralMatrix)
```
Cholesky algorithm for symmetric and positive definite matrix.

|Parameter Name|Remarks|
|--------------|-------|
|Arg|  Square, symmetric matrix.
            |

_returns:      Structure to access L and isspd flag.
            _

#### GetL
```csharp
DotNetMatrix.CholeskyDecomposition.GetL
```
Return triangular factor.
_returns:      L
            _

#### Solve
```csharp
DotNetMatrix.CholeskyDecomposition.Solve(DotNetMatrix.GeneralMatrix)
```
Solve A*X = B

|Parameter Name|Remarks|
|--------------|-------|
|B|  A Matrix with as many rows as A and any number of columns.
            |

_returns:      X so that L*L'*X = B
            _



### Properties

#### isspd
Symmetric and positive definite flag.
 @serial is symmetric and positive definite flag.
#### L
Array for internal storage of decomposition.
 @serial internal array storage.
#### n
Row and column dimension (square matrix).
 @serial matrix dimension.
#### SPD
Is the matrix symmetric and positive definite?

