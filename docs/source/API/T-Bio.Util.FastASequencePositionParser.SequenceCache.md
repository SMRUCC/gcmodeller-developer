---
title: SequenceCache
---

# SequenceCache
_namespace: [Bio.Util.FastASequencePositionParser](N-Bio.Util.FastASequencePositionParser.html)_

Class to hold sequences.

### Methods

#### Add
```csharp
Bio.Util.FastASequencePositionParser.SequenceCache.Add(System.Int64,Bio.ISequence)
```
Adds the specified sequence with position.

|Parameter Name|Remarks|
|--------------|-------|
|position|Position of the sequence in file.|
|sequence|Sequence to cache.|


#### GetAllSequences
```csharp
Bio.Util.FastASequencePositionParser.SequenceCache.GetAllSequences
```
Gets all sequences present in this instance.

#### GetSequenceAt
```csharp
Bio.Util.FastASequencePositionParser.SequenceCache.GetSequenceAt(System.Int64)
```
Gets the sequence for the specified position.

|Parameter Name|Remarks|
|--------------|-------|
|position|Position.|




### Properties

#### Count
Gets total sequences present in this instance.

