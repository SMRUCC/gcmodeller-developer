---
title: MatePairMapper
---

# MatePairMapper
_namespace: [Bio.Algorithms.Assembly](N-Bio.Algorithms.Assembly.html)_

Class maps reads to mate pairs using sequence ID of sequence in FASTA file.
 Supported mate pair formats
 >chrI0.X1:abc
 ATGC
 >chrI0.Y1:abc
 TACG
 >chrI0.F:abc
 ATGC
 >chrI0.R:abc
 TACG
 >chrI0.1:abc
 ATGC
 >chrI0.2:abc
 TACG
 Where X1,F,1 denotes forward reads and Y1,R,2 denotes reverse reads
 abc denotes library name 
 chrI0 is the sequence id.

### Methods

#### ContigMatePairMapper
```csharp
Bio.Algorithms.Assembly.MatePairMapper.ContigMatePairMapper(System.Collections.Generic.Dictionary{Bio.ISequence,System.Collections.Generic.IList{Bio.Algorithms.Assembly.Padena.Scaffold.ReadMap}},System.Collections.Generic.Dictionary{Bio.ISequence,System.Collections.Generic.IList{Bio.Algorithms.Assembly.Padena.Scaffold.ReadMap}},Bio.Algorithms.Assembly.MatePair,Bio.Algorithms.Assembly.Padena.Scaffold.ContigMatePairs)
```
Creates Paired Read Contig Map.

|Parameter Name|Remarks|
|--------------|-------|
|forwardContigs|Contigs aligning to forward read.|
|reverseContigs|Contigs aligning to reverse read.|
|pair|Mate Pair.|
|contigMatePairs|Contig mate pair.|


#### GenerateExpression
```csharp
Bio.Algorithms.Assembly.MatePairMapper.GenerateExpression(System.Text.RegularExpressions.Match)
```
Generates expression for other read using expression on read.

|Parameter Name|Remarks|
|--------------|-------|
|match|Pattern match on read whose partner has to be determined.|

_returns: Expression for other read._

#### Map
```csharp
Bio.Algorithms.Assembly.MatePairMapper.Map(System.Collections.Generic.IEnumerable{Bio.ISequence})
```
Map reads to mate pairs.

|Parameter Name|Remarks|
|--------------|-------|
|reads|List of Reads.|

_returns: List of mate pairs._

#### MapContigToMatePairs
```csharp
Bio.Algorithms.Assembly.MatePairMapper.MapContigToMatePairs(System.Collections.Generic.IEnumerable{Bio.ISequence},Bio.Algorithms.Assembly.Padena.Scaffold.ReadContigMap)
```
Finds contig pairs having valid mate pairs connection between them.

|Parameter Name|Remarks|
|--------------|-------|
|reads|Input list of reads.|
|alignment|Reads contig alignment.|

_returns: Contig Mate pair map._



### Properties

#### readExpression
Regular Expression matching reads in supported formats.

