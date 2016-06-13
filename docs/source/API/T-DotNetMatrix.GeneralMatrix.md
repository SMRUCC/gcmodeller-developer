---
title: GeneralMatrix
---

# GeneralMatrix
_namespace: [DotNetMatrix](N-DotNetMatrix.html)_

.NET GeneralMatrix class.
 
 The .NET GeneralMatrix Class provides the fundamental operations of numerical
 linear algebra. Various constructors create Matrices from two dimensional
 arrays of double precision floating point numbers. Various "gets" and
 "sets" provide access to submatrices and matrix elements. Several methods 
 implement basic matrix arithmetic, including matrix addition and
 multiplication, matrix norms, and element-by-element array operations.
 Methods for reading and printing matrices are also included. All the
 operations in this version of the GeneralMatrix Class involve real matrices.
 Complex matrices may be handled in a future version.
 
 Five fundamental matrix decompositions, which consist of pairs or triples
 of matrices, permutation vectors, and the like, produce results in five
 decomposition classes. These decompositions are accessed by the GeneralMatrix
 class to compute solutions of simultaneous linear equations, determinants,
 inverses and other matrix functions. The five decompositions are:
 <P><UL>
 <LI>Cholesky Decomposition of symmetric, positive definite matrices.
 <LI>LU Decomposition of rectangular matrices.
 <LI>QR Decomposition of rectangular matrices.
 <LI>Singular Value Decomposition of rectangular matrices.
 <LI>Eigenvalue Decomposition of both symmetric and nonsymmetric square matrices.
 <DL>
 <DT><B>Example of use:</B></DT></DL></LI></LI></LI></LI></LI></UL></P>
 <P>
 <DD>Solve a linear system A x = b and compute the residual norm, ||b - A x||.
 <P><PRE>
 double[][] vals = {{1.,2.,3},{4.,5.,6.},{7.,8.,10.}};
 GeneralMatrix A = new GeneralMatrix(vals);
 GeneralMatrix b = GeneralMatrix.Random(3,1);
 GeneralMatrix x = A.Solve(b);
 GeneralMatrix r = A.Multiply(x).Subtract(b);
 double rnorm = r.NormInf();
 </PRE></DD>
 </DL></P></DD></P>

### Methods

#### #ctor
```csharp
DotNetMatrix.GeneralMatrix.#ctor(System.Double[],System.Int32)
```
Construct a matrix from a one-dimensional packed array

|Parameter Name|Remarks|
|--------------|-------|
|vals|One-dimensional array of doubles, packed by columns (ala Fortran).
            |
|m|   Number of rows.
            |


#### Add
```csharp
DotNetMatrix.GeneralMatrix.Add(DotNetMatrix.GeneralMatrix)
```
C = A + B

|Parameter Name|Remarks|
|--------------|-------|
|B|   another matrix
            |

_returns:      A + B
            _

#### AddEquals
```csharp
DotNetMatrix.GeneralMatrix.AddEquals(DotNetMatrix.GeneralMatrix)
```
A = A + B

|Parameter Name|Remarks|
|--------------|-------|
|B|   another matrix
            |

_returns:      A + B
            _

#### ArrayLeftDivide
```csharp
DotNetMatrix.GeneralMatrix.ArrayLeftDivide(DotNetMatrix.GeneralMatrix)
```
Element-by-element left division, C = A.\B

|Parameter Name|Remarks|
|--------------|-------|
|B|   another matrix
            |

_returns:      A.\B
            _

#### ArrayLeftDivideEquals
```csharp
DotNetMatrix.GeneralMatrix.ArrayLeftDivideEquals(DotNetMatrix.GeneralMatrix)
```
Element-by-element left division in place, A = A.\B

|Parameter Name|Remarks|
|--------------|-------|
|B|   another matrix
            |

_returns:      A.\B
            _

#### ArrayMultiply
```csharp
DotNetMatrix.GeneralMatrix.ArrayMultiply(DotNetMatrix.GeneralMatrix)
```
Element-by-element multiplication, C = A.*B

|Parameter Name|Remarks|
|--------------|-------|
|B|   another matrix
            |

_returns:      A.*B
            _

#### ArrayMultiplyEquals
```csharp
DotNetMatrix.GeneralMatrix.ArrayMultiplyEquals(DotNetMatrix.GeneralMatrix)
```
Element-by-element multiplication in place, A = A.*B

|Parameter Name|Remarks|
|--------------|-------|
|B|   another matrix
            |

_returns:      A.*B
            _

#### ArrayRightDivide
```csharp
DotNetMatrix.GeneralMatrix.ArrayRightDivide(DotNetMatrix.GeneralMatrix)
```
Element-by-element right division, C = A./B

|Parameter Name|Remarks|
|--------------|-------|
|B|   another matrix
            |

_returns:      A./B
            _

#### ArrayRightDivideEquals
```csharp
DotNetMatrix.GeneralMatrix.ArrayRightDivideEquals(DotNetMatrix.GeneralMatrix)
```
Element-by-element right division in place, A = A./B

|Parameter Name|Remarks|
|--------------|-------|
|B|   another matrix
            |

_returns:      A./B
            _

#### CheckMatrixDimensions
```csharp
DotNetMatrix.GeneralMatrix.CheckMatrixDimensions(DotNetMatrix.GeneralMatrix)
```
Check if size(A) == size(B) *

#### chol
```csharp
DotNetMatrix.GeneralMatrix.chol
```
Cholesky Decomposition
_returns:      CholeskyDecomposition
            _

#### Clone
```csharp
DotNetMatrix.GeneralMatrix.Clone
```
Clone the GeneralMatrix object.

#### Condition
```csharp
DotNetMatrix.GeneralMatrix.Condition
```
Matrix condition (2 norm)
_returns:      ratio of largest to smallest singular value.
            _

#### Copy
```csharp
DotNetMatrix.GeneralMatrix.Copy
```
Make a deep copy of a matrix

#### Create
```csharp
DotNetMatrix.GeneralMatrix.Create(System.Double[][])
```
Construct a matrix from a copy of a 2-D array.

|Parameter Name|Remarks|
|--------------|-------|
|A|   Two-dimensional array of doubles.
            |


#### Determinant
```csharp
DotNetMatrix.GeneralMatrix.Determinant
```
GeneralMatrix determinant
_returns:      determinant
            _

#### Dispose
```csharp
DotNetMatrix.GeneralMatrix.Dispose(System.Boolean)
```
Dispose(bool disposing) executes in two distinct scenarios.
 If disposing equals true, the method has been called directly
 or indirectly by a user's code. Managed and unmanaged resources
 can be disposed.
 If disposing equals false, the method has been called by the 
 runtime from inside the finalizer and you should not reference 
 other objects. Only unmanaged resources can be disposed.

|Parameter Name|Remarks|
|--------------|-------|
|disposing|-|


#### Eigen
```csharp
DotNetMatrix.GeneralMatrix.Eigen
```
Eigenvalue Decomposition
_returns:      EigenvalueDecomposition
            _

#### Finalize
```csharp
DotNetMatrix.GeneralMatrix.Finalize
```
This destructor will run only if the Dispose method 
 does not get called.
 It gives your base class the opportunity to finalize.
 Do not provide destructors in types derived from this class.

#### GetElement
```csharp
DotNetMatrix.GeneralMatrix.GetElement(System.Int32,System.Int32)
```
Get a single element.

|Parameter Name|Remarks|
|--------------|-------|
|i|   Row index.
            |
|j|   Column index.
            |

_returns:      A(i,j)
            _

#### GetMatrix
```csharp
DotNetMatrix.GeneralMatrix.GetMatrix(System.Int32[],System.Int32,System.Int32)
```
Get a submatrix.

|Parameter Name|Remarks|
|--------------|-------|
|r|   Array of row indices.
            |
|j0|  Initial column index
            |
|j1|  Final column index
            |

_returns:      A(r(:),j0:j1)
            _

#### Identity
```csharp
DotNetMatrix.GeneralMatrix.Identity(System.Int32,System.Int32)
```
Generate identity matrix

|Parameter Name|Remarks|
|--------------|-------|
|m|   Number of rows.
            |
|n|   Number of colums.
            |

_returns:      An m-by-n matrix with ones on the diagonal and zeros elsewhere.
            _

#### Inverse
```csharp
DotNetMatrix.GeneralMatrix.Inverse
```
Matrix inverse or pseudoinverse
_returns:      inverse(A) if A is square, pseudoinverse otherwise.
            _

#### LUD
```csharp
DotNetMatrix.GeneralMatrix.LUD
```
LU Decomposition
_returns:      LUDecomposition
            _

#### Multiply
```csharp
DotNetMatrix.GeneralMatrix.Multiply(DotNetMatrix.GeneralMatrix)
```
Linear algebraic matrix multiplication, A * B

|Parameter Name|Remarks|
|--------------|-------|
|B|   another matrix
            |

_returns:      Matrix product, A * B
            _

#### MultiplyEquals
```csharp
DotNetMatrix.GeneralMatrix.MultiplyEquals(System.Double)
```
Multiply a matrix by a scalar in place, A = s*A

|Parameter Name|Remarks|
|--------------|-------|
|s|   scalar
            |

_returns:      replace A by s*A
            _

#### Norm1
```csharp
DotNetMatrix.GeneralMatrix.Norm1
```
One norm
_returns:     maximum column sum.
            _

#### Norm2
```csharp
DotNetMatrix.GeneralMatrix.Norm2
```
Two norm
_returns:     maximum singular value.
            _

#### NormF
```csharp
DotNetMatrix.GeneralMatrix.NormF
```
Frobenius norm
_returns:     sqrt of sum of squares of all elements.
            _

#### NormInf
```csharp
DotNetMatrix.GeneralMatrix.NormInf
```
Infinity norm
_returns:     maximum row sum.
            _

#### op_Addition
```csharp
DotNetMatrix.GeneralMatrix.op_Addition(DotNetMatrix.GeneralMatrix,DotNetMatrix.GeneralMatrix)
```
Addition of matrices

|Parameter Name|Remarks|
|--------------|-------|
|m1|-|
|m2|-|


#### op_Multiply
```csharp
DotNetMatrix.GeneralMatrix.op_Multiply(DotNetMatrix.GeneralMatrix,DotNetMatrix.GeneralMatrix)
```
Multiplication of matrices

|Parameter Name|Remarks|
|--------------|-------|
|m1|-|
|m2|-|


#### op_Subtraction
```csharp
DotNetMatrix.GeneralMatrix.op_Subtraction(DotNetMatrix.GeneralMatrix,DotNetMatrix.GeneralMatrix)
```
Subtraction of matrices

|Parameter Name|Remarks|
|--------------|-------|
|m1|-|
|m2|-|


#### QRD
```csharp
DotNetMatrix.GeneralMatrix.QRD
```
QR Decomposition
_returns:      QRDecomposition
            _

#### Random
```csharp
DotNetMatrix.GeneralMatrix.Random(System.Int32,System.Int32)
```
Generate matrix with random elements

|Parameter Name|Remarks|
|--------------|-------|
|m|   Number of rows.
            |
|n|   Number of colums.
            |

_returns:      An m-by-n matrix with uniformly distributed random elements.
            _

#### Rank
```csharp
DotNetMatrix.GeneralMatrix.Rank
```
GeneralMatrix rank
_returns:      effective numerical rank, obtained from SVD.
            _

#### SetElement
```csharp
DotNetMatrix.GeneralMatrix.SetElement(System.Int32,System.Int32,System.Double)
```
Set a single element.

|Parameter Name|Remarks|
|--------------|-------|
|i|   Row index.
            |
|j|   Column index.
            |
|s|   A(i,j).
            |


#### SetMatrix
```csharp
DotNetMatrix.GeneralMatrix.SetMatrix(System.Int32,System.Int32,System.Int32[],DotNetMatrix.GeneralMatrix)
```
Set a submatrix.

|Parameter Name|Remarks|
|--------------|-------|
|i0|  Initial row index
            |
|i1|  Final row index
            |
|c|   Array of column indices.
            |
|X|   A(i0:i1,c(:))
            |


#### Solve
```csharp
DotNetMatrix.GeneralMatrix.Solve(DotNetMatrix.GeneralMatrix)
```
Solve A*X = B

|Parameter Name|Remarks|
|--------------|-------|
|B|   right hand side
            |

_returns:      solution if A is square, least squares solution otherwise
            _

#### SolveTranspose
```csharp
DotNetMatrix.GeneralMatrix.SolveTranspose(DotNetMatrix.GeneralMatrix)
```
Solve X*A = B, which is also A'*X' = B'

|Parameter Name|Remarks|
|--------------|-------|
|B|   right hand side
            |

_returns:      solution if A is square, least squares solution otherwise.
            _

#### Subtract
```csharp
DotNetMatrix.GeneralMatrix.Subtract(DotNetMatrix.GeneralMatrix)
```
C = A - B

|Parameter Name|Remarks|
|--------------|-------|
|B|   another matrix
            |

_returns:      A - B
            _

#### SubtractEquals
```csharp
DotNetMatrix.GeneralMatrix.SubtractEquals(DotNetMatrix.GeneralMatrix)
```
A = A - B

|Parameter Name|Remarks|
|--------------|-------|
|B|   another matrix
            |

_returns:      A - B
            _

#### SVD
```csharp
DotNetMatrix.GeneralMatrix.SVD
```
Singular Value Decomposition
_returns:      SingularValueDecomposition
            _

#### System#Runtime#Serialization#ISerializable#GetObjectData
```csharp
DotNetMatrix.GeneralMatrix.System#Runtime#Serialization#ISerializable#GetObjectData(System.Runtime.Serialization.SerializationInfo,System.Runtime.Serialization.StreamingContext)
```
A method called when serializing this class

|Parameter Name|Remarks|
|--------------|-------|
|info|-|
|context|-|


#### Trace
```csharp
DotNetMatrix.GeneralMatrix.Trace
```
Matrix trace.
_returns:      sum of the diagonal elements.
            _

#### Transpose
```csharp
DotNetMatrix.GeneralMatrix.Transpose
```
Matrix transpose.
_returns:     A'
            _

#### UnaryMinus
```csharp
DotNetMatrix.GeneralMatrix.UnaryMinus
```
Unary minus
_returns:     -A
            _



### Properties

#### A
Array for internal storage of elements.
 @serial internal array storage.
#### Array
Access the internal two-dimensional array.
#### ArrayCopy
Copy the internal two-dimensional array.
#### ColumnDimension
Get column dimension.
#### ColumnPackedCopy
Make a one-dimensional column packed copy of the internal array.
#### m
Row and column dimensions.
 @serial row dimension.
 @serial column dimension.
#### n
Row and column dimensions.
 @serial row dimension.
 @serial column dimension.
#### RowDimension
Get row dimension.
#### RowPackedCopy
Make a one-dimensional row packed copy of the internal array.

