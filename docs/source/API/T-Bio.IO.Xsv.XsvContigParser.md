---
title: XsvContigParser
---

# XsvContigParser
_namespace: [Bio.IO.Xsv](N-Bio.IO.Xsv.html)_

This creates a contig parser that uses an XSV sparse reader to parse
 a contig from a list of sparse sequences, where the first sequence is the
 consensus and the rest are sequences aligned to it.

### Methods

#### #ctor
```csharp
Bio.IO.Xsv.XsvContigParser.#ctor(Bio.IAlphabet,System.Char,System.Char)
```
Creates a contig parser that parses Contigs using the given encoding
 and alphabet, by creating an XsvSparseReader that uses the given separator 
 and sequenceIdPrefix characters.

|Parameter Name|Remarks|
|--------------|-------|
|alphabet|Alphabet to use for the consensus and assembled sequences that are parsed.|
|separatorChar|Character used to separate sequence item position and symbol in the Xsv file|
|sequenceIdPrefixChar|Character used at the beginning of the sequence start line.|


#### ParseAssembledSequence
```csharp
Bio.IO.Xsv.XsvContigParser.ParseAssembledSequence(Bio.IO.Xsv.XsvSparseReader)
```
Parses a list of assembled sparse sequences from the reader.

|Parameter Name|Remarks|
|--------------|-------|
|contigReader|The reader to read the assembled sparse sequences from
            Flag to indicate whether the resulting sequences should be in readonly mode or not.
            If this flag is set to true then the resulting sequences's isReadOnly property 
            will be set to true, otherwise it will be set to false.
            |

_returns: Returns contig assemble sequence._

#### ParseContig
```csharp
Bio.IO.Xsv.XsvContigParser.ParseContig(System.IO.Stream)
```
This converts a list of sparse sequences read from the passed stream into a contig.
 Assumes the first sequence is the consensus and the rest are assembled sequences.
 The positions of the assembed sequences are the offsets of the sparse sequences in
 the sequence start line. The positions of the sequence items are the same as their
 position field value in each character separated line 
 (i.e. they are not incremented by the offset)
_returns: The parsed contig with consensus and assembled sequences, all represented 
            as SparseSequences. 
            Null if no lines were present in the reader. Exception if valid sparse sequences
            were not present. 
            NOTE: This does not check if the assembled sequence positions are valid with respect to the consensus.
            _




