---
title: FastaqIdentifier
---

# FastaqIdentifier
_namespace: [LANS.SystemsBiology.Toolkits.RNA_Seq.BOW.DocumentFormat.Fastaq](N-LANS.SystemsBiology.Toolkits.RNA_Seq.BOW.DocumentFormat.Fastaq.html)_

Illumina sequence identifiers



### Methods

#### IDParser
```csharp
LANS.SystemsBiology.Toolkits.RNA_Seq.BOW.DocumentFormat.Fastaq.FastaqIdentifier.IDParser(System.String)
```
@HWUSI-EAS100R:6:73:941:1973#0/1

|Parameter Name|Remarks|
|--------------|-------|
|str|-|



### Properties

#### FlowCellLane
Flowcell lane
#### Identifier
The unique instrument name
#### MsIndex
Index number for a multiplexed sample (0 for no indexing)
#### PairMember
The member of a pair, /1 or /2 (paired-end or mate-pair reads only)
#### Tiles
Tile number within the flowcell lane
#### X
'x'-coordinate of the cluster within the tile
#### Y
'y'-coordinate of the cluster within the tile
