---
title: ConsensusGeneration
---

# ConsensusGeneration
_namespace: [Bio.Algorithms.Assembly.Comparative](N-Bio.Algorithms.Assembly.Comparative.html)_

Generates consensus of alignment (contigs) from alignment layout.

### Methods

#### GenerateConsensus
```csharp
Bio.Algorithms.Assembly.Comparative.ConsensusGeneration.GenerateConsensus(Bio.Util.DeltaAlignmentCollection)
```
Generates consensus sequences from alignment layout.

|Parameter Name|Remarks|
|--------------|-------|
|alignmentBetweenReferenceAndReads|Input list of reads.|

_returns: List of contigs._

#### GetSequenceFromDelta
```csharp
Bio.Algorithms.Assembly.Comparative.ConsensusGeneration.GetSequenceFromDelta(Bio.Algorithms.Alignment.DeltaAlignment)
```
Gets the error removed sequence from the delta.

|Parameter Name|Remarks|
|--------------|-------|
|deltaAlignment|DeltaAlignment instance.|





