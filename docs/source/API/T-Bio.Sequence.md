---
title: Sequence
---

# Sequence
_namespace: [Bio](N-Bio.html)_

This is the standard implementation of the ISequence interface. It contains
 the raw data that defines the contents of a sequence. Since Sequence uses 
 enumerable of bytes that can be accessed as follows:
 Sequence mySequence = new Sequence(Alphabets.DNA, "GATTC");
 foreach (Nucleotide nucleotide in mySequence) { ... }
 The results will be based on the Alphabet associated with the
 sequence. Common alphabets include those for DNA, RNA, and Amino Acids.
 For users who wish to get at the underlying data directly, Sequence provides
 a means to do this as well. This may be useful for those writing algorithms
 against the sequence where performance is especially important. For these
 advanced users access is provided to the encoding classes associated with the
 sequence.

### Methods

#### #ctor
```csharp
Bio.Sequence.#ctor(Bio.ISequence)
```
Initializes a new instance of the Sequence class with passed new Sequence. Creates a copy of the sequence.

|Parameter Name|Remarks|
|--------------|-------|
|newSequence|The New sequence for which the copy has to be made.|


#### ConvertToString
```csharp
Bio.Sequence.ConvertToString(System.Int64,System.Int64)
```
Converts part of the sequence to a string.

|Parameter Name|Remarks|
|--------------|-------|
|startIndex|Start position of the sequence.|
|length|Number of symbols to return.|

_returns: Part of the sequence in string format._

#### CopyTo
```csharp
Bio.Sequence.CopyTo(System.Byte[],System.Int64,System.Int64)
```
Copies all items from the sequence to a pre allocated array.

|Parameter Name|Remarks|
|--------------|-------|
|byteArray|Array to fill the items to.|
|start|Index at which the filling starts.|
|count|Total numbers of elements to be copied.|


#### GetComplementedSequence
```csharp
Bio.Sequence.GetComplementedSequence
```
Return a new sequence representing the complement of this sequence.

#### GetEnumerator
```csharp
Bio.Sequence.GetEnumerator
```
Gets an enumerator to the bytes present in this sequence.
_returns: An IEnumerator of bytes._

#### GetInternalArray
```csharp
Bio.Sequence.GetInternalArray
```
This is used by some of the built-in algorithms which access the data in a read-only fashion
 to quickly grab a sequence of data without copying it. It cannot be used outside Bio.dll
 For outside users, use the CopyTo method.

#### GetReverseComplementedSequence
```csharp
Bio.Sequence.GetReverseComplementedSequence
```
Return a new sequence representing the reverse complement of this sequence.

#### GetReversedSequence
```csharp
Bio.Sequence.GetReversedSequence
```
Return a new sequence representing this sequence with the orientation reversed.

#### GetSubSequence
```csharp
Bio.Sequence.GetSubSequence(System.Int64,System.Int64)
```
Return a new sequence representing a range (subsequence) of this sequence.

|Parameter Name|Remarks|
|--------------|-------|
|start|The index of the first symbol in the range.|
|length|The number of symbols in the range.|

_returns: The sub-sequence._

#### IndexOfNonGap
```csharp
Bio.Sequence.IndexOfNonGap(System.Int64)
```
Returns the position of the first symbol beyond startPos that does not 
 have a Gap symbol.

|Parameter Name|Remarks|
|--------------|-------|
|startPos|Index value beyond which the non-gap symbol is searched for.|

_returns: If found returns a zero based index of the first non-gap symbol, otherwise returns -1._

#### LastIndexOfNonGap
```csharp
Bio.Sequence.LastIndexOfNonGap(System.Int64)
```
Returns the index of last non-gap symbol before the specified end position.

|Parameter Name|Remarks|
|--------------|-------|
|endPos|Index value up to which the non-Gap symbol is searched for.|

_returns: If found returns a zero based index of the last non-gap symbol, otherwise returns -1._

#### System#Collections#IEnumerable#GetEnumerator
```csharp
Bio.Sequence.System#Collections#IEnumerable#GetEnumerator
```
Gets an enumerator to the bytes present in this sequence.
_returns: An IEnumerator of bytes._

#### ToString
```csharp
Bio.Sequence.ToString
```
Returns a string representation of the sequence data. This representation
 will come from the symbols in the alphabet defined for the sequence.
 
 Thus a Sequence whose Alphabet is Alphabets.DNA may return a value like
 'GATTCCA'



### Properties

#### _metadata
Metadata is features or references or related things of a sequence.
#### _sequenceData
Holds the sequence data.
#### Alphabet
Gets or sets the alphabet to which symbols in this sequence belongs to.
#### Count
Gets the number of bytes contained in the Sequence.
#### ID
Gets or sets an identifier for this instance of sequence class.
#### Item
Returns the byte found at the specified index if within bounds. Note 
 that the index value starts at 0.
#### Metadata
Gets or sets the Metadata of this instance.
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
 mySequence.MetaData["GenBank"] = genBankData;.

