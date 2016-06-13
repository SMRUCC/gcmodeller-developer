---
title: RepeatResolver
---

# RepeatResolver
_namespace: [Bio.Algorithms.Assembly.Comparative](N-Bio.Algorithms.Assembly.Comparative.html)_

Reads ambiguously placed due to genomic reads.
 This step requires mate pair information to resolve the ambiguity about placements of repeated sequences.

### Methods

#### ResolveAmbiguity
```csharp
Bio.Algorithms.Assembly.Comparative.RepeatResolver.ResolveAmbiguity(Bio.Util.DeltaAlignmentCollection)
```
Reads ambiguously placed due to genomic reads.
 This step requires mate pair information to resolve the ambiguity about placements of repeated sequences.

|Parameter Name|Remarks|
|--------------|-------|
|alignmentBetweenReferenceAndReads|Alignment between reference genome and reads.|

_returns: List of DeltaAlignments after resolving repeating reads._

#### ResolveRepeatUsingMatePair
```csharp
Bio.Algorithms.Assembly.Comparative.RepeatResolver.ResolveRepeatUsingMatePair(System.Collections.Generic.List{Bio.Algorithms.Alignment.DeltaAlignment},System.Collections.Generic.List{Bio.Algorithms.Alignment.DeltaAlignment},System.String)
```
Resolve repeats between two sets of deltas coming from paired reads

|Parameter Name|Remarks|
|--------------|-------|
|curReadDeltas|Deltas from a read|
|mateDeltas|Deltas from mate pair|
|libraryName|Clone Library name to use|

_returns: Selected delta out of all given deltas_




