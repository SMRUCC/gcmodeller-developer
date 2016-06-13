---
title: PairwiseOverlapSimpleAlignmentJob
---

# PairwiseOverlapSimpleAlignmentJob
_namespace: [Bio.Algorithms.Alignment](N-Bio.Algorithms.Alignment.html)_

Pairwise Overlap alignment implementation using simple gap model.

### Methods

#### #ctor
```csharp
Bio.Algorithms.Alignment.PairwiseOverlapSimpleAlignmentJob.#ctor(Bio.SimilarityMatrices.SimilarityMatrix,System.Int32,System.Int32,Bio.ISequence,Bio.ISequence)
```
Inializes a new alignment job

|Parameter Name|Remarks|
|--------------|-------|
|similarityMatrix|-|
|gapOpenCost|-|
|gapExtensionCost|-|
|aInput|-|
|bInput|-|


#### ComputeBlock
```csharp
Bio.Algorithms.Alignment.PairwiseOverlapSimpleAlignmentJob.ComputeBlock(Bio.Algorithms.Alignment.DynamicProgrammingPairwiseAlignerJob.WeightFunction,System.Int32,System.Int32,System.Int32,System.Int32)
```
Forward pass for the block.

|Parameter Name|Remarks|
|--------------|-------|
|weightFunction|-|
|blockRow|-|
|blockCol|-|
|lastRow|-|
|lastCol|-|


#### ComputeCornerBlock
```csharp
Bio.Algorithms.Alignment.PairwiseOverlapSimpleAlignmentJob.ComputeCornerBlock(System.Int32,System.Int32,System.Int32,System.Int32,System.SByte[][])
```
Computes the lower-right corner block of the grid.
 Combines the forward and traceback passes for performance.
 This is the only block computation that takes place for smaller-than-block alignments

|Parameter Name|Remarks|
|--------------|-------|
|trace|Array of traceback pointers|
|blockRow|First index of the block within the grid|
|blockCol|Second index of the block within the grid|
|lastRow|Last valid row index within the block; rows beyond this index stay uninitialized|
|lastCol|Last valid column index within the block; columns beyond this index stay uninitialized|


#### ComputeIntermediateBlock
```csharp
Bio.Algorithms.Alignment.PairwiseOverlapSimpleAlignmentJob.ComputeIntermediateBlock(System.Int32,System.Int32,System.Int32,System.Int32)
```
Computes weights for all blocks of the grid except the lower-right corner one.
 Assumes the grid cache to the left and top of the block has already been filled.
 Weights on the bottom and right edge of the block are written back to the grid.

|Parameter Name|Remarks|
|--------------|-------|
|blockRow|First index of the block within the grid|
|blockCol|Second index of the block within the grid|
|lastRow|Last valid row index within the block; rows beyond this index stay uninitialized|
|lastCol|Last valid column index within the block; columns beyond this index stay uninitialized|


#### ComputeTraceBlock
```csharp
Bio.Algorithms.Alignment.PairwiseOverlapSimpleAlignmentJob.ComputeTraceBlock(System.Int32,System.Int32,System.Int32,System.Int32,System.SByte[][])
```
Computes the traceback pointers for the block.
 Assumes the grid cache has been already filled during the forward pass

|Parameter Name|Remarks|
|--------------|-------|
|trace|Array of traceback pointers|
|blockRow|First index of the block within the grid|
|blockCol|Second index of the block within the grid|
|lastRow|Last valid row index within the block; rows beyond this index stay uninitialized|
|lastCol|Last valid column index within the block; columns beyond this index stay uninitialized|


#### InitializeCache
```csharp
Bio.Algorithms.Alignment.PairwiseOverlapSimpleAlignmentJob.InitializeCache
```
Initializes grid cache for the algorithm.

#### SetBoundaryCondition
```csharp
Bio.Algorithms.Alignment.PairwiseOverlapSimpleAlignmentJob.SetBoundaryCondition(System.SByte[][],System.Int32,System.Int32,System.Int32,System.Int32)
```
Sets the boundary values tor traceback

|Parameter Name|Remarks|
|--------------|-------|
|trace|Array of traceback pointers|
|blockRow|First index of the block within the grid|
|blockCol|Second index of the block within the grid|
|lastRow|Last valid row index within the block; rows beyond this index stay uninitialized|
|lastCol|Last valid column index within the block; columns beyond this index stay uninitialized|





