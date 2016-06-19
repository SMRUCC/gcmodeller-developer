---
title: IGenomicsContextProvider`1
---

# IGenomicsContextProvider`1
_namespace: [LANS.SystemsBiology.ContextModel](N-LANS.SystemsBiology.ContextModel.html)_





### Methods

#### GetRelatedGenes
```csharp
LANS.SystemsBiology.ContextModel.IGenomicsContextProvider`1.GetRelatedGenes(LANS.SystemsBiology.ComponentModel.Loci.NucleotideLocation,System.Boolean,System.Int32)
```
获取某一个位点在位置上有相关联系的基因

|Parameter Name|Remarks|
|--------------|-------|
|loci|-|
|unstrand|-|
|ATGDist|-|


#### GetStrandFeatures
```csharp
LANS.SystemsBiology.ContextModel.IGenomicsContextProvider`1.GetStrandFeatures(LANS.SystemsBiology.ComponentModel.Loci.Strands)
```
Gets all of the feature sites on the specific @"T:LANS.SystemsBiology.ComponentModel.Loci.Strands" nucleotide sequence

|Parameter Name|Remarks|
|--------------|-------|
|strand|-|



### Properties

#### AllFeatures
Listing all of the features loci sites on the genome.
