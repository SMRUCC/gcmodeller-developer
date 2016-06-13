---
title: IGraphScaffoldBuilder
---

# IGraphScaffoldBuilder
_namespace: [Bio.Algorithms.Assembly.Padena.Scaffold](N-Bio.Algorithms.Assembly.Padena.Scaffold.html)_

Generates Scaffolds using Graph.

### Methods

#### BuildScaffold
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.IGraphScaffoldBuilder.BuildScaffold(System.Collections.Generic.IEnumerable{Bio.ISequence},System.Collections.Generic.IList{Bio.ISequence},System.Int32,System.Int32,System.Int32)
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




