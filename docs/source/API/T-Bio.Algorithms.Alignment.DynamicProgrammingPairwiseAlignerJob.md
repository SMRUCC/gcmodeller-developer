---
title: DynamicProgrammingPairwiseAlignerJob
---

# DynamicProgrammingPairwiseAlignerJob
_namespace: [Bio.Algorithms.Alignment](N-Bio.Algorithms.Alignment.html)_

Base class for all aligner algorithms.
 Provides storage and read/write operations for the grid.

### Methods

#### #ctor
```csharp
Bio.Algorithms.Alignment.DynamicProgrammingPairwiseAlignerJob.#ctor(Bio.SimilarityMatrices.SimilarityMatrix,System.Int32,System.Int32,Bio.ISequence,Bio.ISequence)
```


|Parameter Name|Remarks|
|--------------|-------|
|similarityMatrix|-|
|gapOpenCost|-|
|gapExtensionCost|-|
|aInput|-|
|bInput|-|


#### Align
```csharp
Bio.Algorithms.Alignment.DynamicProgrammingPairwiseAlignerJob.Align
```
Launches the alignment algorithm

#### ComputeBlock
```csharp
Bio.Algorithms.Alignment.DynamicProgrammingPairwiseAlignerJob.ComputeBlock(Bio.Algorithms.Alignment.DynamicProgrammingPairwiseAlignerJob.WeightFunction,System.Int32,System.Int32,System.Int32,System.Int32)
```
Forward pass for the block.
 Assumes the blocks to the top and right have already been processed.

|Parameter Name|Remarks|
|--------------|-------|
|weightFunction|-|
|blockRow|First index of the block within the grid|
|blockCol|Second index of the block within the grid|
|lastRow|Last valid row index within the block; rows beyond this index stay uninitialized|
|lastCol|Last valid column index within the block; columns beyond this index stay uninitialized|


#### ComputeBlockAffine
```csharp
Bio.Algorithms.Alignment.DynamicProgrammingPairwiseAlignerJob.ComputeBlockAffine(Bio.Algorithms.Alignment.DynamicProgrammingPairwiseAlignerJob.WeightFunction,System.Int32,System.Int32,System.Int32,System.Int32)
```
Implementation of the linear programming model for the block using the affine gap cost model

|Parameter Name|Remarks|
|--------------|-------|
|weightFunction|Algorith-specific weight function|
|blockRow|First index of the block within the grid|
|blockCol|Second index of the block within the grid|
|lastRow|Last valid row index within the block; rows beyond this index stay uninitialized|
|lastCol|Last valid column index within the block; columns beyond this index stay uninitialized|


#### ComputeBlockSimple
```csharp
Bio.Algorithms.Alignment.DynamicProgrammingPairwiseAlignerJob.ComputeBlockSimple(Bio.Algorithms.Alignment.DynamicProgrammingPairwiseAlignerJob.WeightFunction,System.Int32,System.Int32,System.Int32,System.Int32)
```
Implementation of the linear programming model for the block using the simple gap cost model

|Parameter Name|Remarks|
|--------------|-------|
|weightFunction|Algorith-specific weight function|
|blockRow|First index of the block within the grid|
|blockCol|Second index of the block within the grid|
|lastRow|Last valid row index within the block; rows beyond this index stay uninitialized|
|lastCol|Last valid column index within the block; columns beyond this index stay uninitialized|


#### ComputeCornerBlock
```csharp
Bio.Algorithms.Alignment.DynamicProgrammingPairwiseAlignerJob.ComputeCornerBlock(System.Int32,System.Int32,System.Int32,System.Int32,System.SByte[][])
```
Computes the lower-right corner block of the grid.
 Combines the forward and traceback passes for performance.
 This is the only block computation that takes place for smaller-than-block alignments

|Parameter Name|Remarks|
|--------------|-------|
|blockRow|First index of the block within the grid|
|blockCol|Second index of the block within the grid|
|lastRow|Last valid row index within the block; rows beyond this index stay uninitialized|
|lastCol|Last valid column index within the block; columns beyond this index stay uninitialized|
|trace|Array of traceback pointers|


#### ComputeIntermediateBlock
```csharp
Bio.Algorithms.Alignment.DynamicProgrammingPairwiseAlignerJob.ComputeIntermediateBlock(System.Int32,System.Int32,System.Int32,System.Int32)
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
Bio.Algorithms.Alignment.DynamicProgrammingPairwiseAlignerJob.ComputeTraceBlock(System.Int32,System.Int32,System.Int32,System.Int32,System.SByte[][])
```
Computes the traceback pointers for the block.
 Assumes the grid cache has been already filled during the forward pass

|Parameter Name|Remarks|
|--------------|-------|
|blockRow|First index of the block within the grid|
|blockCol|Second index of the block within the grid|
|lastRow|Last valid row index within the block; rows beyond this index stay uninitialized|
|lastCol|Last valid column index within the block; columns beyond this index stay uninitialized|
|trace|Array of traceback pointers|


#### InitializeCache
```csharp
Bio.Algorithms.Alignment.DynamicProgrammingPairwiseAlignerJob.InitializeCache
```
Initializes grid cache for the algorithm.

#### InitializeCacheAffine
```csharp
Bio.Algorithms.Alignment.DynamicProgrammingPairwiseAlignerJob.InitializeCacheAffine
```
Initializes grid cache for the affine alignment.

#### InitializeCacheAffineZero
```csharp
Bio.Algorithms.Alignment.DynamicProgrammingPairwiseAlignerJob.InitializeCacheAffineZero
```
Initializes grid cache for the affine alignment.
 Sets the boundary weights to zero.

#### InitializeCacheSimple
```csharp
Bio.Algorithms.Alignment.DynamicProgrammingPairwiseAlignerJob.InitializeCacheSimple
```
Initializes grid cache for the simple alignment.

#### InitializeCacheSimpleZero
```csharp
Bio.Algorithms.Alignment.DynamicProgrammingPairwiseAlignerJob.InitializeCacheSimpleZero
```
Initializes grid cache for the simple alignment.
 Sets the boundary weights to zero.

#### PopulateFold
```csharp
Bio.Algorithms.Alignment.DynamicProgrammingPairwiseAlignerJob.PopulateFold(System.Int32[][],System.Int32[][],System.Int32[],System.Int32,System.Int32,System.Int32,System.Int32)
```
Fills the fold data structure for the block from the grid cache

|Parameter Name|Remarks|
|--------------|-------|
|cachedRows|Cache for the grid rows|
|cachedCols|Cache for the grid columns|
|fold|Fold data structure|
|blockRow|First index of the block within the grid|
|blockCol|Second index of the block within the grid|
|lastRow|Last valid row index within the block; rows beyond this index stay uninitialized|
|lastCol|Last valid column index within the block; columns beyond this index stay uninitialized|


#### SetBoundaryCondition
```csharp
Bio.Algorithms.Alignment.DynamicProgrammingPairwiseAlignerJob.SetBoundaryCondition(System.SByte[][],System.Int32,System.Int32,System.Int32,System.Int32)
```
Sets the boundary values tor traceback

|Parameter Name|Remarks|
|--------------|-------|
|trace|Array of traceback pointers|
|blockRow|First index of the block within the grid|
|blockCol|Second index of the block within the grid|
|lastRow|Last valid row index within the block; rows beyond this index stay uninitialized|
|lastCol|Last valid column index within the block; columns beyond this index stay uninitialized|


#### WritebackFold
```csharp
Bio.Algorithms.Alignment.DynamicProgrammingPairwiseAlignerJob.WritebackFold(System.Int32[][],System.Int32[][],System.Int32[],System.Int32,System.Int32,System.Int32,System.Int32)
```
Writes the fold data structure for the block back to the grid cache

|Parameter Name|Remarks|
|--------------|-------|
|cachedRows|Cache for the grid rows|
|cachedCols|Cache for the grid columns|
|fold|Fold data structure|
|blockRow|First index of the block within the grid|
|blockCol|Second index of the block within the grid|
|lastRow|Last valid row index within the block; rows beyond this index stay uninitialized|
|lastCol|Last valid column index within the block; columns beyond this index stay uninitialized|




### Properties

#### cachedColsC
Match cache columns
#### cachedColsD
Deletion cost cache columns
#### cachedColsI
Insertion cost cache columns
#### cachedRowsC
Match cache rows
#### cachedRowsD
Deletion cost cache rows
#### cachedRowsI
Insertion cost cache rows
#### colHeight

#### gapCode
Signifies gap in aligned sequence (stored as int[]) during trace back.
#### gapExtensionCost

#### gapOpenCost

#### gridCols

#### gridRows

#### gridStride
Base class for alignment implementation.
 Provides building blocks for alignments using either simple or affine gap models.
#### optScore

#### optScoreCells
Stores details of all cells with best score.
#### rowWidth

#### sequenceI

#### sequenceJ

#### similarityMatrix


