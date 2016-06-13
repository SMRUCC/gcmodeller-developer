---
title: KmerData32
---

# KmerData32
_namespace: [Bio.Algorithms.Kmer](N-Bio.Algorithms.Kmer.html)_

Holds the KmerData.

### Methods

#### CompareTo
```csharp
Bio.Algorithms.Kmer.KmerData32.CompareTo(System.Object)
```
Compares this instance to a specified instance of object and returns an indication of their relative values.

|Parameter Name|Remarks|
|--------------|-------|
|value|Instance of the object to compare.|

_returns: 
             A signed number indicating the relative values of this instance. Zero This
             instance is equal to value. Greater than zero This instance is greater than
             value.
            _

#### ConvertLongToSequence
```csharp
Bio.Algorithms.Kmer.KmerData32.ConvertLongToSequence(System.UInt64,System.Int32)
```
Decompress kmer as long to sequence.

|Parameter Name|Remarks|
|--------------|-------|
|compressedKmer|Compressed kmer.|
|kmerLength|Kmer Length.|

_returns: Kmer sequence._

#### ConvertSequenceToLong
```csharp
Bio.Algorithms.Kmer.KmerData32.ConvertSequenceToLong(System.Collections.Generic.IEnumerable{System.Byte})
```
Converts sequence to long.
 If kmer length is less than or equal to 32, we can fit into a usigned 64 bit long.

|Parameter Name|Remarks|
|--------------|-------|
|sequence|Kmer sequence.|

_returns: Compressed kmer._

#### GetFirstSymbol
```csharp
Bio.Algorithms.Kmer.KmerData32.GetFirstSymbol(System.Int32,System.Boolean)
```
Returns the first symbol of the sequence.
_returns: Returns the first symbol from the decompressed kmer value._

#### GetKmerData
```csharp
Bio.Algorithms.Kmer.KmerData32.GetKmerData(System.Int32)
```
Returns the decompressed value of the kmer.

|Parameter Name|Remarks|
|--------------|-------|
|kmerLength|Length of the kmer.|

_returns: Decompressed value of the kmer._

#### GetKmers
```csharp
Bio.Algorithms.Kmer.KmerData32.GetKmers(Bio.ISequence,System.Int32)
```
Iterates through a sequence producing all possible kmers in it.

|Parameter Name|Remarks|
|--------------|-------|
|sequence|-|
|kmerLength|-|


#### GetLastSymbol
```csharp
Bio.Algorithms.Kmer.KmerData32.GetLastSymbol(System.Int32,System.Boolean)
```
Returns the last symbol of the sequence.
_returns: Returns the last symbol from the decompressed kmer value._

#### GetOriginalSymbols
```csharp
Bio.Algorithms.Kmer.KmerData32.GetOriginalSymbols(System.Int32)
```
Returns the decompressed value of the kmer from the De-Bruijn node.
 Note: use this method to get the original sequence symbols.

|Parameter Name|Remarks|
|--------------|-------|
|kmerLength|Length of the kmer.|

_returns: Decompressed value of the kmer._

#### GetReverseComplement
```csharp
Bio.Algorithms.Kmer.KmerData32.GetReverseComplement(System.UInt64,System.Int32)
```
Generates reverse complement for long compressed kmer.

|Parameter Name|Remarks|
|--------------|-------|
|kmer|Compressed kmer.|
|kmerLength|Kmer length.|

_returns: Long representation of reverse complement kmer._

#### GetReverseComplementOfKmerData
```csharp
Bio.Algorithms.Kmer.KmerData32.GetReverseComplementOfKmerData(System.Int32)
```
Returns the reverse complement of the kmer value.

|Parameter Name|Remarks|
|--------------|-------|
|kmerLength|Length of the kmer.|

_returns: Returns the reverse complement of the kmer._

#### GetReverseComplementOfOriginalSymbols
```csharp
Bio.Algorithms.Kmer.KmerData32.GetReverseComplementOfOriginalSymbols(System.Int32)
```
Note: use this method to get the original sequence symbols.

|Parameter Name|Remarks|
|--------------|-------|
|kmerLength|Length of the kmer.|

_returns: Returns the reverse complement of the decompressed kmer._

#### IsPalindrome
```csharp
Bio.Algorithms.Kmer.KmerData32.IsPalindrome(System.Int32)
```
Checks whether the kmer value is palindrome or not.
_returns: True if the kmer value is palindrome else false._

#### SetKmerData
```csharp
Bio.Algorithms.Kmer.KmerData32.SetKmerData(System.Byte[],System.Int32)
```
Sets the kmer value from the specific sequence.
 Note: Used in generating the links.
 Do not use this method to add kmerData to the tree.

|Parameter Name|Remarks|
|--------------|-------|
|sequence|Sequence who value is to be compressed.|
|kmerLength|Length of the kmer.|




### Properties

#### DNA_A_VALUE
Value to encode an A with as 2 bits
#### DNA_C_VALUE
Value to encode a C with as 2 bits
#### DNA_G_VALUE
Value to encode a G with as 2 bits
#### DNA_T_VALUE
Value to encode a T with as 2 bits
#### KmerData
Compressed value of the kmer that will be stored in the De-Bruijn Node.
#### MAX_KMER_LENGTH
Maximum allowed value for a kmer
#### MIN_KMER_LENGTH
Minimum allowed value for a kmer

