---
title: Context
---

# Context
_namespace: [LANS.SystemsBiology.ContextModel](N-LANS.SystemsBiology.ContextModel.html)_

Context model of a specific genomics feature site.



### Methods

#### __relUnstrand
```csharp
LANS.SystemsBiology.ContextModel.Context.__relUnstrand(LANS.SystemsBiology.ComponentModel.Loci.NucleotideLocation)
```
Get @"T:LANS.SystemsBiology.ComponentModel.Loci.SegmentRelationships" ignored of nucleotide @"T:LANS.SystemsBiology.ComponentModel.Loci.Strands".

|Parameter Name|Remarks|
|--------------|-------|
|loci|-|


#### GetRelation
```csharp
LANS.SystemsBiology.ContextModel.Context.GetRelation(LANS.SystemsBiology.ComponentModel.Loci.NucleotideLocation,System.Boolean)
```
Get relationship between target @"T:LANS.SystemsBiology.ComponentModel.Loci.NucleotideLocation" with current feature site.

|Parameter Name|Remarks|
|--------------|-------|
|loci|-|
|stranded|Get @"T:LANS.SystemsBiology.ComponentModel.Loci.SegmentRelationships" ignored of nucleotide @"T:LANS.SystemsBiology.ComponentModel.Loci.Strands"?|


#### ToString
```csharp
LANS.SystemsBiology.ContextModel.Context.ToString
```
Get tags data


### Properties

#### Downstream
@"F:LANS.SystemsBiology.ContextModel.Context.Feature" its downstream region with a specific length
#### Feature
Current feature site
#### Tag
The user custom tag data for this feature site.
#### Upstream
@"F:LANS.SystemsBiology.ContextModel.Context.Feature" its upstream region with a specific length
