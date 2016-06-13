---
title: SequenceExtensions
---

# SequenceExtensions
_namespace: [Bio.Extensions](N-Bio.Extensions.html)_

Additional methods added to ISequence interface

### Methods

#### ConvertToString
```csharp
Bio.Extensions.SequenceExtensions.ConvertToString(Bio.ISequence,System.Int64,System.Int64)
```
Converts the sequence to a string.

|Parameter Name|Remarks|
|--------------|-------|
|sequence|-|
|startIndex|Start position of the sequence.|
|length|Number of symbols to return.|

_returns: Part of the sequence in string format._

#### IsMarkedAsReverseComplement
```csharp
Bio.Extensions.SequenceExtensions.IsMarkedAsReverseComplement(Bio.ISequence)
```
This checks for a sequence marker to determine if the given ISequence was generated from
 a reverse complement.

|Parameter Name|Remarks|
|--------------|-------|
|sequence|-|


#### MarkAsReverseComplement
```csharp
Bio.Extensions.SequenceExtensions.MarkAsReverseComplement(Bio.ISequence)
```
This adds a key to the Metadata to indicate this is a reversed sequence

|Parameter Name|Remarks|
|--------------|-------|
|sequence|-|




### Properties

#### ReversedSequenceMetadataKey
Tag for a reversed sequence (metadata)
#### ReverseIdSuffix
Suffix added to indicate a reversed sequence

