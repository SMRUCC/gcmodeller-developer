---
title: XsvContigFormatter
---

# XsvContigFormatter
_namespace: [Bio.IO.Xsv](N-Bio.IO.Xsv.html)_

This class will write a contig as a list of sparse sequences using the 
 XsvSparseFormatter. The first sequence is the consensus, and the rest are
 the assembled sequences offset from the consensus. 
 E.g. formatting a Contig with 2 assembled sequences, using '#' as sequence prefix and ',' as character separator.
 # 0,100,Consensus
 12,A
 29,T
 39,G
 #3,10,Fragment1
 9,A
 #25,20,Fragment2
 4,T
 14,G

### Methods

#### #ctor
```csharp
Bio.IO.Xsv.XsvContigFormatter.#ctor(System.Char,System.Char)
```
Creates a formatter for contigs using the given separator and 
 sequence start line prefix character.

|Parameter Name|Remarks|
|--------------|-------|
|separator|The character to separate position of the sequence 
            item from its symbol, and separate the offset, count and sequence ID in the 
            sequence start line.|
|sequenceIDPrefix|The character to refix the sequence start line.|


#### Write
```csharp
Bio.IO.Xsv.XsvContigFormatter.Write(System.IO.Stream,Bio.Algorithms.Assembly.Contig)
```
Formats a (sparse) contig to a character-separated value file,
 writing the consensus first, followed by the sequence separator,
 and each assembled sequences followed by the sequence separator.
 The consensus has an offset of 0, while the assembled sequences have the
 offset as present in AssembledSequence.Position.

|Parameter Name|Remarks|
|--------------|-------|
|stream|Stream to write to, it is left open at the end.|
|contig|The contig to format as a set of sparse sequences.|





