---
title: ISequence
---

# ISequence
_namespace: [Bio](N-Bio.html)_

Implementations of ISequence make up the one of the core sets
 of data structures in Bio. It is these sequences that store
 data relevant to DNA, RNA, and Amino Acid structures. Several
 algorithms for alignment, assembly, and analysis take these items
 as their basic data inputs and outputs.

### Methods

#### GetComplementedSequence
```csharp
Bio.ISequence.GetComplementedSequence
```
Return a sequence representing the complement of this sequence.

#### GetReverseComplementedSequence
```csharp
Bio.ISequence.GetReverseComplementedSequence
```
Return a sequence representing the reverse complement of this sequence.

#### GetReversedSequence
```csharp
Bio.ISequence.GetReversedSequence
```
Return a sequence representing this sequence with the orientation reversed.

#### GetSubSequence
```csharp
Bio.ISequence.GetSubSequence(System.Int64,System.Int64)
```
Return a sequence representing a range (subsequence) of this sequence.

|Parameter Name|Remarks|
|--------------|-------|
|start|The index of the first symbol in the range.|
|length|The number of symbols in the range.|

_returns: The virtual sequence._

#### IndexOfNonGap
```csharp
Bio.ISequence.IndexOfNonGap(System.Int64)
```
Returns the position of the first item beyond startPos that does not 
 have a Gap symbol.

|Parameter Name|Remarks|
|--------------|-------|
|startPos|Index value above which to search for non-Gap symbol.|

_returns: If found returns an zero based index of the first non gap symbol, otherwise returns -1._

#### LastIndexOfNonGap
```csharp
Bio.ISequence.LastIndexOfNonGap(System.Int64)
```
Gets the index of last non gap symbol before the specified end position.

|Parameter Name|Remarks|
|--------------|-------|
|endPos|Index value below which to search for non-Gap symbol.|

_returns: If found returns an zero based index of the last non gap symbol, otherwise returns -1._



### Properties

#### Alphabet
Gets alphabet to which this sequence should conform.
#### Count
Gets the number of sequence items contained in the Sequence.
#### ID
Gets or sets an identification provided to distinguish the sequence to others
 being worked with.
#### Item
Allows the sequence to function like an array, getting and setting
 the sequence item at the particular index specified. Note that the
 index value starts its count at 0.
#### Metadata
Many sequence representations when saved to file also contain
 information about that sequence. Unfortunately there is no standard
 around what that data may be from format to format. This property
 allows a place to put structured metadata that can be accessed by
 a particular key.
 
 For example, if species information is stored in a particular Species
 class, you could add it to the dictionary by:
 
 mySequence.Metadata["SpeciesInfo"] = mySpeciesInfo;
 
 To fetch the data you would use:
 
 Species mySpeciesInfo = mySequence.Metadata["SpeciesInfo"];
 
 Particular formats may create their own data model class for information
 unique to their format as well. Such as:
 
 GenBankMetadata genBankData = new GenBankMetadata();
 // ... add population code
 mySequence.MetaData["GenBank"] = genBankData;

