---
title: DistanceCalculator
---

# DistanceCalculator
_namespace: [Bio.Algorithms.Assembly.Padena.Scaffold](N-Bio.Algorithms.Assembly.Padena.Scaffold.html)_

Class calculates distance between contigs using mate pairs mapped to contigs.
 Reference: The Greedy Path-Merging Algorithm for contig Scaffolding: HUSON et al.

### Methods

#### #ctor
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.DistanceCalculator.#ctor(Bio.Algorithms.Assembly.Padena.Scaffold.ContigMatePairs)
```
Distance calculator.

|Parameter Name|Remarks|
|--------------|-------|
|contigPairedReads|Contig pair reads.|


#### CalculateDistance
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.DistanceCalculator.CalculateDistance(Bio.Algorithms.Assembly.Padena.Scaffold.ValidMatePair,System.Int64)
```
Calculates distance between contigs for each pair of Full Overlap.

|Parameter Name|Remarks|
|--------------|-------|
|validPairedRead|Valid mate pairs which have full Overlap 
            and support a particular orientation of contigs.|
|length|Length of forward contig.|

_returns: Contig pair reads. _

#### CalculateInterContigDistance
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.DistanceCalculator.CalculateInterContigDistance(System.Collections.Generic.KeyValuePair{Bio.ISequence,System.Collections.Generic.Dictionary{Bio.ISequence,System.Collections.Generic.IList{Bio.Algorithms.Assembly.Padena.Scaffold.ValidMatePair}}},System.Int64)
```
Calculate distance between single pair of contigs.

|Parameter Name|Remarks|
|--------------|-------|
|contigsPairedRead|Contig mate pairs map.|
|lengthOfContig|Length of forward contig.|


#### CalculateWeigthedEdge
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.DistanceCalculator.CalculateWeigthedEdge(System.Collections.Generic.IList{Bio.Algorithms.Assembly.Padena.Scaffold.ValidMatePair})
```
Further estimates distances using weighted mean. 
 and standard deviation by merging valid mate pairs.

|Parameter Name|Remarks|
|--------------|-------|
|distances|List of valid mate pairs.|


#### EdgeBundling
```csharp
Bio.Algorithms.Assembly.Padena.Scaffold.DistanceCalculator.EdgeBundling(System.Collections.Generic.IList{Bio.Algorithms.Assembly.Padena.Scaffold.ValidMatePair})
```
Bundles all valid mate pairs in single edge but considering ±3σ limit.

|Parameter Name|Remarks|
|--------------|-------|
|contigPairedRead|List of Valid Paired Reads.|




### Properties

#### contigPairedReads
Contigs and mate pairs mapping

