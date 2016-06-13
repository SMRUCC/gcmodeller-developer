---
title: SparseSequence
---

# SparseSequence
_namespace: [Bio](N-Bio.html)_

SparseSequence can hold discontinuous sequence. Use this class for storing the sequence items 
 with their known position from a long continuous sequence. This class uses SortedDictionary to store 
 the sequence items with their position. Position is zero based indexes at which a sequence items 
 are present in the original continues sequence.
 For example: 
 To store sequence items at position 10, 101, 200, 1501 this class can be used as shown in the below code.
 
 // Create a SparseSequence by specifying the Alphabet.
 SparseSequence mySparseSequence= new SparseSequence(Alphabets.DNA);
 
 // By default count will be set to zero. To insert a sequence item at a position greater than zero,
 // Count has to be set to a value greater than the maximum position value. 
 // If try to insert a sequence item at a position greater than the count an exception will occur.
 // You can limit the SparseSequence length by setting the count to desired value. In this example it 
 will be 1502 as the maximum index is 1501.
 mySparseSequence.Count = 1502;
 
 // To access the value in a SparseSequence use Indexer or an Enumerator like below.
 
 // Accessing SparsesSequence using Indexer.
 byte seqItem1 = mySparseSequence [10] ; // this will return sequence item A.
 byte seqItem2 = mySparseSequence [1501] ; // this will return sequence item G.
 byte seqItem3 = mySparseSequence [102] ; // this will return null as there is no sequence item at this position.
 
 // Accessing SparsesSequence using Enumerator.
 foreach(byte seqItem in mySparseSequence) {…}

### Methods

#### #ctor
```csharp
Bio.SparseSequence.#ctor(Bio.ISequence)
```
Creates a sparse sequence based on the new passed sequence.

|Parameter Name|Remarks|
|--------------|-------|
|newSequence|The New sequence for which the copy has to be made|


#### CopyTo
```csharp
Bio.SparseSequence.CopyTo(System.Byte[],System.Int64,System.Int64)
```
Copies all items from the sequence to a pre allocated array.

|Parameter Name|Remarks|
|--------------|-------|
|byteArray|Array to fill the items to.|
|start|Index at which the filling starts.|
|count|Total numbers of elements to be copied.|


#### GetComplementedSequence
```csharp
Bio.SparseSequence.GetComplementedSequence
```
Return a sequence representing the complement of this sequence.
_returns: The complemented sequence._

#### GetEnumerator
```csharp
Bio.SparseSequence.GetEnumerator
```
Gets an enumerator to the bytes present in this sequence.
_returns: An IEnumerator of bytes._

#### GetKnownSequenceItems
```csharp
Bio.SparseSequence.GetKnownSequenceItems
```
Returns known sequence items with their position as ReadOnlyCollection of IndexedSequenceItem.
_returns: Sequence items with their position as ReadOnlyCollection of IndexedSequenceItem._

#### GetReverseComplementedSequence
```csharp
Bio.SparseSequence.GetReverseComplementedSequence
```
Return a sequence representing the reverse complement of this sequence.
_returns: The reverse complemented sequence._

#### GetReversedSequence
```csharp
Bio.SparseSequence.GetReversedSequence
```
Return a sequence representing this sequence with the orientation reversed.
_returns: The reversed sequence._

#### GetSubSequence
```csharp
Bio.SparseSequence.GetSubSequence(System.Int64,System.Int64)
```
Return a new sequence representing a range (subsequence) of this sequence.

|Parameter Name|Remarks|
|--------------|-------|
|start|The index of the first symbol in the range.|
|length|The number of symbols in the range.|

_returns: The sub-sequence._

#### IndexOfNonGap
```csharp
Bio.SparseSequence.IndexOfNonGap(System.Int64)
```
Returns the position of the first item from startPos that does not 
 have a Gap character.

|Parameter Name|Remarks|
|--------------|-------|
|startPos|Index value above which to search for non-Gap character.|

_returns: If found returns an zero based index of the first non gap character, otherwise returns -1._

#### LastIndexOfNonGap
```csharp
Bio.SparseSequence.LastIndexOfNonGap(System.Int64)
```
Gets the index of last non gap character within the specified end position.

|Parameter Name|Remarks|
|--------------|-------|
|endPos|Index value below which to search for non-Gap character.|

_returns: If found returns an zero based index of the last non gap character, otherwise returns -1._

#### Replace
```csharp
Bio.SparseSequence.Replace(System.Int64,System.Byte)
```
Replaces the sequence item present in the specified position in this sequence with the specified sequence item.

|Parameter Name|Remarks|
|--------------|-------|
|position|Position at which the sequence item has to be replaced.|
|item|Sequence item to be placed at the specified position.|


#### System#Collections#IEnumerable#GetEnumerator
```csharp
Bio.SparseSequence.System#Collections#IEnumerable#GetEnumerator
```
Gets an enumerator to the bytes present in this sequence.
_returns: An IEnumerator of bytes._



### Properties

#### Alphabet
The alphabet to which string representations of the sequence should
 conform.
#### count
The number of sequence items contained in the Sequence.
#### ID
An identification provided to distinguish the sequence to others
 being worked with.
#### Item
Allows the sequence to function like an array, gets
 the sequence item at the specified index. Note that the
 index value starts its count at 0.
#### metadata
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
#### sparseSeqItems
Holds sequence items with their position.
#### Statistics
Keeps track of the number of occurrences of each symbol within a sequence.

