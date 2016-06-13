---
title: NeedlemanWunschAligner
---

# NeedlemanWunschAligner
_namespace: [Bio.Algorithms.Alignment](N-Bio.Algorithms.Alignment.html)_

Implements the NeedlemanWunsch algorithm for global alignment.
 See Chapter 2 in Biological Sequence Analysis; Durbin, Eddy, Krogh and Mitchison; 
 Cambridge Press; 1998.

### Methods

#### CreateAffineTracebackTable
```csharp
Bio.Algorithms.Alignment.NeedlemanWunschAligner.CreateAffineTracebackTable
```
This is step (2) in the dynamic programming model - to fill in the scoring matrix
 and calculate the traceback entries. This version is used when the open/extension
 gap costs are different (affine gap model).

#### CreateTracebackTable
```csharp
Bio.Algorithms.Alignment.NeedlemanWunschAligner.CreateTracebackTable
```
This is step (2) in the dynamic programming model - to fill in the scoring matrix
 and calculate the traceback entries.



### Properties

#### Description
Gets the description of the NeedlemanWunsch algorithm used.
 This is a overridden property from the abstract parent.
 This property returns a simple description of what 
 NeedlemanWunschAligner class implements.
#### Name
Gets the name of the current Alignment algorithm used.
 This is a overridden property from the abstract parent.
 This property returns the Name of our algorithm i.e 
 Needleman-Wunsch algorithm.

