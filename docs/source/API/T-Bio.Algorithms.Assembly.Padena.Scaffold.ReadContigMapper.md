---
title: ReadContigMapper
---

# ReadContigMapper
_namespace: [Bio.Algorithms.Assembly.Padena.Scaffold](N-Bio.Algorithms.Assembly.Padena.Scaffold.html)_

Maps reads to contigs.
 Class map reads to contigs using kmer method of alignment.
 Each Sequence is broken in kmers. And these kmer are aligned with 
 kmer of other sequences to generate un-gapped alignments.

### Methods

#### FindContinuous
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.ReadContigMapper.FindContinuous(Bio.Algorithms.Kmer.KmerIndexer,System.Collections.Generic.IList{Bio.Algorithms.Assembly.Padena.Scaffold.ReadMap},System.Int64,System.Int32,System.Int64)
```
Merge continuous positions of a read in kmer indexes.

|Parameter Name|Remarks|
|--------------|-------|
|kmer|Position of contig kmer.|
|readMaps|Alignment between read and contig.|
|position|Position of kmer in read.|
|kmerLength|Length of kmer.|
|readLength|Length of the read.|


#### IsContinousLeft
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.ReadContigMapper.IsContinousLeft(Bio.Algorithms.Assembly.Padena.Scaffold.ReadMap,System.Int64,System.Int64,System.Int32)
```
Find if positions occur simultaneously of read in contig, 
 if contig is traced from left direction.

|Parameter Name|Remarks|
|--------------|-------|
|map|Map from previous position of read.|
|readPosition|Position of read.|
|contigPosition|Position of contig.|
|length|Length of kmer.|

_returns: True if continuous position of reads in contig._

#### IsContinousRight
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.ReadContigMapper.IsContinousRight(Bio.Algorithms.Assembly.Padena.Scaffold.ReadMap,System.Int64,System.Int64,System.Int32)
```
Find if positions occur simultaneously of read in contig, 
 if contig is traced from right direction.

|Parameter Name|Remarks|
|--------------|-------|
|map|Map from previous position of read.|
|readPosition|Position of read.|
|contigPosition|Position of contig.|
|length|Length of kmer.|

_returns: True if continuous position of reads in contig._

#### Map
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.ReadContigMapper.Map(System.Collections.Generic.IList{Bio.ISequence},System.Collections.Generic.IEnumerable{Bio.ISequence},System.Int32)
```
Public method mapping Reads to Contigs.

|Parameter Name|Remarks|
|--------------|-------|
|contigs|List of sequences of contigs.|
|reads|List of input reads.|
|kmerLength|Length of kmer.|

_returns: Contig Read Map._

#### MapRead
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.ReadContigMapper.MapRead(System.Int64,System.Collections.Generic.IList{System.Collections.Generic.IList{Bio.Algorithms.Kmer.KmerIndexer}},System.Int64,System.Int64,System.Int32)
```
Traverse through list of contig-read match indexes for given read.

|Parameter Name|Remarks|
|--------------|-------|
|position|Position from where list of 
             indexes should be traversed.|
|contigReadMatch|List for contig-read match indexes.|
|contigIndex|Index of contig sequence.|
|readLength|Length of read.|
|kmerLength|Length of kmer.|

_returns: List of read maps._

#### SetReadContigOverlap
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.ReadContigMapper.SetReadContigOverlap(System.Int64,Bio.Algorithms.Assembly.Padena.Scaffold.ReadMap)
```
Determines whether read is full or partial overlap between read and contig.
 Overlap of read and contig
 FullOverlap
 ------------- Contig
 ------ Read
 PartialOverlap
 ------------- Contig
 ------ Read.

|Parameter Name|Remarks|
|--------------|-------|
|length|Length of read.|
|read|Map of read to contig.|





