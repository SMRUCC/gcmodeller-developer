---
title: GraphScaffoldBuilder
---

# GraphScaffoldBuilder
_namespace: [Bio.Algorithms.Assembly.Padena.Scaffold](N-Bio.Algorithms.Assembly.Padena.Scaffold.html)_

Generates Scaffolds using Graph.
 Algorithm:
 Step1: Generate contig overlap graph. 
 Step2: Map Reads to contigs.
 Step3: Generate Contig Mate Pair Map.
 Step4: Filter Paired Reads.
 Step5: Distance Orientation.
 Step6: Trace Scaffold Paths.
 Step7: Assemble paths.
 Step8: Generate sequence of scaffolds.

### Methods

#### #ctor
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.GraphScaffoldBuilder.#ctor(Bio.Algorithms.Assembly.IMatePairMapper,Bio.Algorithms.Assembly.Padena.Scaffold.IReadContigMapper,Bio.Algorithms.Assembly.Padena.Scaffold.IOrientationBasedMatePairFilter,Bio.Algorithms.Assembly.Padena.Scaffold.IDistanceCalculator,Bio.Algorithms.Assembly.Padena.Scaffold.ITracePath,Bio.Algorithms.Assembly.Padena.Scaffold.IPathPurger)
```
Initializes a new instance of the GraphScaffoldBuilder class.

|Parameter Name|Remarks|
|--------------|-------|
|mapPairedReads|Mapping reads to mate pairs.|
|readContigMap| Mapping reads to contigs.|
|pairedReadFilter|Filtering of mate pairs.|
|distanceCalculator|Calculation of distance between 
            contigs using mate pairs.|
|tracePath|Traversal of contig overlap graph.|
|pathAssembler|Removal of containing paths and removal of overlapping paths.|


#### BuildScaffold
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.GraphScaffoldBuilder.BuildScaffold(System.Collections.Generic.IEnumerable{Bio.ISequence},System.Collections.Generic.IList{Bio.ISequence},System.Int32,System.Int32,System.Int32)
```
Builds scaffolds from list of reads and contigs.

|Parameter Name|Remarks|
|--------------|-------|
|reads|List of reads.|
|contigs|List of contigs.|
|lengthofKmer|Kmer Length.|
|depth|Depth for graph traversal.|
|redundancy|Number of mate pairs required to create a link between two contigs.
             Hierarchical Scaffolding With Bambus
             by: Mihai Pop, Daniel S. Kosack, Steven L. Salzberg
             Genome Research, Vol. 14, No. 1. (January 2004), pp. 149-159.|

_returns: List of scaffold sequences._

#### CalculateDistanceBetweenContigs
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.GraphScaffoldBuilder.CalculateDistanceBetweenContigs(Bio.Algorithms.Assembly.Padena.Scaffold.ContigMatePairs)
```
Calculate distance between contigs using paired reads.

|Parameter Name|Remarks|
|--------------|-------|
|contigMatePairs|Contig Mate Pair map.|

_returns: Number of contig-read pairs._

#### Dispose
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.GraphScaffoldBuilder.Dispose(System.Boolean)
```
Dispose field instances.

|Parameter Name|Remarks|
|--------------|-------|
|disposeManaged|If disposeManaged equals true, clean all resources.|


#### FilterReadsBasedOnOrientation
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.GraphScaffoldBuilder.FilterReadsBasedOnOrientation(Bio.Algorithms.Assembly.Padena.Scaffold.ContigMatePairs)
```
Filter reads based on orientation of contigs.

|Parameter Name|Remarks|
|--------------|-------|
|contigMatePairs|Contig Mate Pair map.|

_returns: Returns Contig Mate Pair map._

#### GenerateContigOverlapGraph
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.GraphScaffoldBuilder.GenerateContigOverlapGraph(System.Collections.Generic.IList{Bio.ISequence})
```
Generate contig overlap graph.

|Parameter Name|Remarks|
|--------------|-------|
|contigs|List of contig sequences.|

_returns: Contig Graph._

#### GenerateScaffold
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.GraphScaffoldBuilder.GenerateScaffold(Bio.Algorithms.Assembly.Padena.Scaffold.ContigOverlapGraph.ContigGraph,System.Collections.Generic.IList{Bio.Algorithms.Assembly.Padena.Scaffold.ScaffoldPath})
```
Generate sequences from list of contig nodes.

|Parameter Name|Remarks|
|--------------|-------|
|contigGraph|Contig Overlap Graph.|
|paths|Scaffold paths.|

_returns: List of sequences of scaffolds._

#### MapPairedReadsToContigs
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.GraphScaffoldBuilder.MapPairedReadsToContigs(Bio.Algorithms.Assembly.Padena.Scaffold.ReadContigMap,System.Collections.Generic.IEnumerable{Bio.ISequence})
```
Map paired reads to contigs using FASTA sequence header.

|Parameter Name|Remarks|
|--------------|-------|
|readContigMaps|Map between reads and contigs.|
|reads|Sequences of reads.|

_returns: Contig Mate Pair map._

#### PathPurger
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.GraphScaffoldBuilder.PathPurger(System.Collections.Generic.IList{Bio.Algorithms.Assembly.Padena.Scaffold.ScaffoldPath})
```
Remove containing and overlapping paths.

|Parameter Name|Remarks|
|--------------|-------|
|paths|List of Scaffold Paths.|

_returns: Number of final paths._

#### ReadContigMap
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.GraphScaffoldBuilder.ReadContigMap(System.Collections.Generic.IList{Bio.ISequence},System.Collections.Generic.IEnumerable{Bio.ISequence})
```
Map reads to contigs.

|Parameter Name|Remarks|
|--------------|-------|
|contigs|List of sequences of contigs.|
|reads|List of sequences of reads.|

_returns: Map of reads and contigs._

#### TracePath
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.GraphScaffoldBuilder.TracePath(Bio.Algorithms.Assembly.Padena.Scaffold.ContigOverlapGraph.ContigGraph,Bio.Algorithms.Assembly.Padena.Scaffold.ContigMatePairs)
```
Performs Breadth First Search in contig overlap graph.

|Parameter Name|Remarks|
|--------------|-------|
|contigGraph|Contig Graph.|
|contigMatePairs|Contig Mate Pair map.|

_returns: List of Scaffold Paths._

#### ValidateReads
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.GraphScaffoldBuilder.ValidateReads(System.Collections.Generic.IEnumerable{Bio.ISequence})
```
Validate input sequences

|Parameter Name|Remarks|
|--------------|-------|
|reads|The Reads|

_returns: Valid reads._



### Properties

#### depthField
Depth for graph traversal.
#### distanceCalculator
Calculation of distance between contigs using mate pairs.
#### kmerLength
Kmer length.
#### mapPairedReads
Mapping reads to mate pairs.
#### pairedReadFilter
Filtering of mate pairs based on orientation of contigs.
#### pathAssembler
Removal of containing paths and removal of overlapping paths.
#### readContigMap
Mapping reads to contigs.
#### redundancyField
Number of paired read required to connect two contigs.
#### tracePath
Traversal of contig overlap graph.

