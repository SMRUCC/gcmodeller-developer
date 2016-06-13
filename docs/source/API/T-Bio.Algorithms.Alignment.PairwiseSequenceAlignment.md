---
title: PairwiseSequenceAlignment
---

# PairwiseSequenceAlignment
_namespace: [Bio.Algorithms.Alignment](N-Bio.Algorithms.Alignment.html)_

A simple implementation of IPairwiseSequenceAlignment that stores the 
 results as list of Aligned Sequences.

### Methods

#### #ctor
```csharp
Bio.Algorithms.Alignment.PairwiseSequenceAlignment.#ctor
```
Initializes a new instance of the PairwiseSequenceAlignment class
 Constructs an empty PairwiseSequenceAlignment.

#### Add
```csharp
Bio.Algorithms.Alignment.PairwiseSequenceAlignment.Add(Bio.Algorithms.Alignment.PairwiseAlignedSequence)
```
Adds an aligned sequence to the list of aligned sequences in the PairwiseSequenceAlignment.
 Throws exception if sequence alignment is read only.

|Parameter Name|Remarks|
|--------------|-------|
|item|PairwiseAlignedSequence to add.|


#### AddSequence
```csharp
Bio.Algorithms.Alignment.PairwiseSequenceAlignment.AddSequence(Bio.Algorithms.Alignment.PairwiseAlignedSequence)
```
Add a new Aligned Sequence Object to the end of the list.

|Parameter Name|Remarks|
|--------------|-------|
|pairwiseAlignedSequence|The sequence to add.|


#### Clear
```csharp
Bio.Algorithms.Alignment.PairwiseSequenceAlignment.Clear
```
Clears the PairwiseSequenceAlignment
 Throws exception if PairwiseSequenceAlignment is read only.

#### Contains
```csharp
Bio.Algorithms.Alignment.PairwiseSequenceAlignment.Contains(Bio.Algorithms.Alignment.PairwiseAlignedSequence)
```
Returns true if the PairwiseSequenceAlignment contains the aligned sequence in the
 list of aligned sequences.

|Parameter Name|Remarks|
|--------------|-------|
|item|PairwiseAlignedSequence object.|

_returns: True if contains item, otherwise returns false._

#### CopyTo
```csharp
Bio.Algorithms.Alignment.PairwiseSequenceAlignment.CopyTo(Bio.Algorithms.Alignment.PairwiseAlignedSequence[],System.Int32)
```
Copies the aligned sequences from the PairwiseSequenceAlignment into an existing aligned sequence array.

|Parameter Name|Remarks|
|--------------|-------|
|array|Array into which to copy the sequences.|
|arrayIndex|Starting index in array at which to begin the copy.|


#### GetEnumerator
```csharp
Bio.Algorithms.Alignment.PairwiseSequenceAlignment.GetEnumerator
```
Returns an enumerator for the aligned sequences in the PairwiseSequenceAlignment.
_returns: Returns the enumerator for PairwiseAlignedSequence._

#### Remove
```csharp
Bio.Algorithms.Alignment.PairwiseSequenceAlignment.Remove(Bio.Algorithms.Alignment.PairwiseAlignedSequence)
```
Removes item from the list of aligned sequences in the PairwiseSequenceAlignment.
 Throws exception if PairwiseSequenceAlignment is read only.

|Parameter Name|Remarks|
|--------------|-------|
|item|Aligned sequence object.|

_returns: True if item was removed, false if item was not found._

#### System#Collections#IEnumerable#GetEnumerator
```csharp
Bio.Algorithms.Alignment.PairwiseSequenceAlignment.System#Collections#IEnumerable#GetEnumerator
```
Returns an enumerator for the aligned sequences in the PairwiseSequenceAlignment.
_returns: Returns the enumerator for PairwiseAlignedSequence._

#### ToString
```csharp
Bio.Algorithms.Alignment.PairwiseSequenceAlignment.ToString
```
Converts the Aligned Sequences to string.
_returns: Aligned Sequence Data._



### Properties

#### alignedSequences
Gets list of the (output) aligned sequences.
#### Count
Gets number of aligned sequence objects in the PairwiseSequenceAlignment.
#### Documentation
Gets or sets Documentation object is intended for tracking the history, provenance,
 and experimental context of a PairwiseSequenceAlignment. The user can adopt any desired
 convention for use of this object.
#### FirstSequence
Gets accessor for the first sequence.
#### IsReadOnly
Gets or sets a value indicating whether PairwiseSequenceAlignment is read-only or not.
#### Item
Returns the nth aligned sequence in the alignment.
#### Metadata
Gets any additional information about the Alignment.
#### PairwiseAlignedSequences
Gets the list of alignments.
#### SecondSequence
Gets accessor for the second sequence.
#### seqAlignment
Sequence alignment instance.
#### Sequences
Gets list of sequences involved in this alignment.

