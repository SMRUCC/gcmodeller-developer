---
title: SmithWatermanAligner
---

# SmithWatermanAligner
_namespace: [Bio.Algorithms.Alignment](N-Bio.Algorithms.Alignment.html)_

Implements the SmithWaterman algorithm for partial alignment.
 See Chapter 2 in Biological Sequence Analysis; Durbin, Eddy, Krogh and Mitchison; 
 Cambridge Press; 1998.

### Methods

#### CreateAffineTracebackTable
```csharp
Bio.Algorithms.Alignment.SmithWatermanAligner.CreateAffineTracebackTable
```
This method is used to create the traceback/scoring table when an affine gap model 
 is being used - this is where the open cost is different than the extension cost for a gap
 and generally will produce a better alignment.

#### CreateTracebackTable
```csharp
Bio.Algorithms.Alignment.SmithWatermanAligner.CreateTracebackTable
```
This is step (2) in the dynamic programming model - to fill in the scoring matrix
 and calculate the traceback entries. In the Smith-Waterman algorithm, we track the
 highest scoring cell during the algorithm - this is often NOT the bottom/right cell as
 it would be in a global alignment.



### Properties

#### Description
Gets the Description of the current Alignment algorithm used.
 This is a overridden property from the abstract parent.
 This property returns a simple description of what 
 SmithWatermanAligner class implements.
#### Name
Gets the name of the current Alignment algorithm used.
 This is a overridden property from the abstract parent.
 This property returns the Name of our algorithm i.e 
 Smith-Waterman algorithm.

