---
title: GenomeContextProvider`1
---

# GenomeContextProvider`1
_namespace: [LANS.SystemsBiology.ContextModel](N-LANS.SystemsBiology.ContextModel.html)_



### Methods

#### GetAroundRelated
```csharp
LANS.SystemsBiology.ContextModel.GenomeContextProvider`1.GetAroundRelated(LANS.SystemsBiology.ComponentModel.Loci.NucleotideLocation,System.Boolean,System.Int32)
```
Gets the related genes on a specific loci site location.(函数获取某一个给定的位点附近的所有的有关联的基因对象。
 请注意，这个函数仅仅是依靠于两个位点之间的相互位置关系来判断的，
 假若这个参数为真，假若需要判断链的方向)

|Parameter Name|Remarks|
|--------------|-------|
|lociDist|-|

_returns: 请注意，函数所返回的列表之中包含有不同的关系！_

#### GetInnerAntisense
```csharp
LANS.SystemsBiology.ContextModel.GenomeContextProvider`1.GetInnerAntisense(System.Collections.Generic.IEnumerable{`0},System.Int32,System.Int32,LANS.SystemsBiology.ComponentModel.Loci.Strands)
```
获取某一个指定的位点在基因组之中的内部反向的基因的集合

|Parameter Name|Remarks|
|--------------|-------|
|source|-|
|LociStart|-|
|LociEnds|-|
|Strand|-|


#### GetRelatedGenes
```csharp
LANS.SystemsBiology.ContextModel.GenomeContextProvider`1.GetRelatedGenes(System.Collections.Generic.IEnumerable{`0},System.Int32,System.Int32,System.Int32,System.Boolean)
```
Gets the related genes on a specific loci site location.(函数获取某一个给定的位点附近的所有的有关联的基因对象。
 请注意，这个函数仅仅是依靠于两个位点之间的相互位置关系来判断的，
 并没有判断链的方向，假若需要判断链的方向，请在调用本函数之前就将参数**source**按照链的方向筛选出来)

|Parameter Name|Remarks|
|--------------|-------|
|source|-|
|start|-|
|ends|-|
|ATGDist|-|

_returns: 请注意，函数所返回的列表之中包含有不同的关系！_

#### GetRelatedUpstream
```csharp
LANS.SystemsBiology.ContextModel.GenomeContextProvider`1.GetRelatedUpstream(System.Collections.Generic.IEnumerable{`0},LANS.SystemsBiology.ComponentModel.Loci.NucleotideLocation,System.Int32)
```
@"F:LANS.SystemsBiology.ComponentModel.Loci.SegmentRelationships.UpStreamOverlap" and 
 @"F:LANS.SystemsBiology.ComponentModel.Loci.SegmentRelationships.UpStream"

|Parameter Name|Remarks|
|--------------|-------|
|source|-|
|Loci|-|
|ATGDistance|-|





