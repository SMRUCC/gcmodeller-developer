---
title: DerivedSequence
---

# DerivedSequence
_namespace: [Bio](N-Bio.html)_

This is a temporary implementation of DerivedSequence to support reversing and complementing a sequence.

### Methods

#### #ctor
```csharp
Bio.DerivedSequence.#ctor(Bio.ISequence,System.Boolean,System.Boolean)
```
Initializes a new instance of the DerivedSequence class.

|Parameter Name|Remarks|
|--------------|-------|
|sequence|Base sequence to use.|
|reverseSequence|Flag to indicate if the derived sequence should be reversed.|
|complementSequence|Flag to indicate if the derived sequence should be complemented.|


#### ConvertToString
```csharp
Bio.DerivedSequence.ConvertToString(System.Int64,System.Int64)
```
Converts part of the sequence to a string.

|Parameter Name|Remarks|
|--------------|-------|
|startIndex|Start position of the sequence.|
|length|Number of symbols to return.|

_returns: Part of the sequence in string format._

#### CopyTo
```csharp
Bio.DerivedSequence.CopyTo(System.Byte[],System.Int64,System.Int64)
```
Copies all items from the sequence to a pre allocated array.

|Parameter Name|Remarks|
|--------------|-------|
|byteArray|Array to fill the items to.|
|start|Index at which the filling starts.|
|count|Total numbers of elements to be copied.|


#### GetComplementedSequence
```csharp
Bio.DerivedSequence.GetComplementedSequence
```
Return a new sequence representing the complement of this sequence.

#### GetEnumerator
```csharp
Bio.DerivedSequence.GetEnumerator
```
Gets an enumerator to the bytes present in this sequence.
_returns: An IEnumerator of bytes._

#### GetReverseComplementedSequence
```csharp
Bio.DerivedSequence.GetReverseComplementedSequence
```
Return a new sequence representing the reverse complement of this sequence.

#### GetReversedSequence
```csharp
Bio.DerivedSequence.GetReversedSequence
```
Return a new sequence representing this sequence with the orientation reversed.

#### GetSubSequence
```csharp
Bio.DerivedSequence.GetSubSequence(System.Int64,System.Int64)
```
Return a new sequence representing a range (subsequence) of this sequence.

|Parameter Name|Remarks|
|--------------|-------|
|start|The index of the first symbol in the range.|
|length|The number of symbols in the range.|

_returns: The sub-sequence._

#### IndexOfNonGap
```csharp
Bio.DerivedSequence.IndexOfNonGap(System.Int64)
```
Returns the position of the first symbol beyond startPos that does not 
 have a Gap symbol.

|Parameter Name|Remarks|
|--------------|-------|
|startPos|Index value beyond which the non-gap symbol is searched for.|

_returns: If found returns a zero based index of the first non-gap symbol, otherwise returns -1._

#### LastIndexOfNonGap
```csharp
Bio.DerivedSequence.LastIndexOfNonGap(System.Int64)
```
Returns the index of last non-gap symbol before the specified end position.

|Parameter Name|Remarks|
|--------------|-------|
|endPos|Index value up to which the non-Gap symbol is searched for.|

_returns: If found returns a zero based index of the last non-gap symbol, otherwise returns -1._

#### System#Collections#IEnumerable#GetEnumerator
```csharp
Bio.DerivedSequence.System#Collections#IEnumerable#GetEnumerator
```
Gets an enumerator to the bytes present in this sequence.
_returns: An IEnumerator of bytes._

#### ToString
```csharp
Bio.DerivedSequence.ToString
```
Returns a string representation of the sequence data. This representation
 will come from the symbols in the alphabet defined for the sequence.
 
 Thus a Sequence whose Alphabet is Alphabets.DNA may return a value like
 'GATTCCA'



### Properties

#### Alphabet
Gets the alphabet to which symbols in this sequence belongs to.
#### Count
Gets the number of bytes contained in the Sequence.
#### ID
Gets or sets an identifier for this instance of sequence class.
#### Item
Returns the byte found at the specified index if within bounds. Note 
 that the index value starts at 0.
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

