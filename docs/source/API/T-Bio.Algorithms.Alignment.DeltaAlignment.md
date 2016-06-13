---
title: DeltaAlignment
---

# DeltaAlignment
_namespace: [Bio.Algorithms.Alignment](N-Bio.Algorithms.Alignment.html)_

Represents a alignment object in terms of delta.
 Delta is an encoded representation of alignments between input sequences.
 It contains the start and end indices of alignment in reference and
 query sequence followed by error values and list of integer in 
 following lines. Each integer represent an insertion (+ve) in reference
 sequence and deletion (-ve) in reference sequence.
 This class represents such alignment with required properties and
 utility methods.

### Methods

#### #ctor
```csharp
Bio.Algorithms.Alignment.DeltaAlignment.#ctor(Bio.ISequence,Bio.ISequence)
```
Initializes a new instance of the DeltaAlignment class

|Parameter Name|Remarks|
|--------------|-------|
|referenceSequence|Reference Sequence|
|querySequence|Query Sequence|


#### ConvertDeltaToSequences
```csharp
Bio.Algorithms.Alignment.DeltaAlignment.ConvertDeltaToSequences
```
Convert the delta alignment object to its sequence representation
_returns: Reference sequence alignment at 0th index and
            Query sequence alignment at 1st index_

#### NewAlignment
```csharp
Bio.Algorithms.Alignment.DeltaAlignment.NewAlignment(Bio.ISequence,Bio.ISequence,Bio.Algorithms.Alignment.Cluster,Bio.Algorithms.SuffixTree.MatchExtension)
```
Create a new delta alignment

|Parameter Name|Remarks|
|--------------|-------|
|referenceSequence|Reference sequence|
|querySequence|Query sequence|
|cluster|Cluster object|
|match|Match object|

_returns: Newly created DeltaAlignment object_

#### ToString
```csharp
Bio.Algorithms.Alignment.DeltaAlignment.ToString
```
Converts Ref ID, Query Id, Ref start, Ref End, Query start, Query End to string.
_returns: Ref ID, Query Id, Ref start, Ref End, Query start, Query End._



### Properties

#### DeltaReferencePosition
Gets or sets the value of delta reference position
#### Deltas
Gets list of integers that pointing the insertion and 
 deletion indices
#### Errors
Gets or sets errors
#### FirstSequenceEnd
Gets or sets the end index of first sequence
#### FirstSequenceStart
Gets or sets the start index of first sequence
#### Id
Id for this Delta alignment.
 Note: As file position is used as ID in case of comparative assembly steps, this value may vary from step to step.
 For example: if 0 is the id for a delta alignment in 2nd step then the same delta alignment
 can have 500 as id in 3rd step.
 This change in id may happen due to the sorting of delta or ignoring some other delta alignments etc.
#### internalDeltas
List of integers that pointing the insertion and deletion indices
#### IsReverseQueryDirection
Returns TRUE if this is a REVERSE query sequence direction
#### NonAlphas
Gets or sets number of non alphabets encountered during alignment
#### queryDirection
Gets or sets the query sequence direction FORWARD or REVERSE
 When this is reverse, the second offsets will be reversed in output
#### QuerySequence
Gets query sequence id
#### ReferenceSequence
Gets reference sequence
#### SecondSequenceEnd
Gets or sets the end index of second sequence
#### SecondSequenceStart
Gets or sets the start index of second sequence
#### SimilarityErrors
Gets or sets similarity errors

