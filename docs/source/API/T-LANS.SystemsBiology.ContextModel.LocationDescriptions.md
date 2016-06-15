---
title: LocationDescriptions
---

# LocationDescriptions
_namespace: [LANS.SystemsBiology.ContextModel](N-LANS.SystemsBiology.ContextModel.html)_



### Methods

#### ATGDistance``1
```csharp
LANS.SystemsBiology.ContextModel.LocationDescriptions.ATGDistance``1(``0,LANS.SystemsBiology.ComponentModel.Loci.NucleotideLocation)
```
Calculate the ATG distance between the target gene and the specific feature loci.

|Parameter Name|Remarks|
|--------------|-------|
|gene|-|
|nucl|-|


#### GetATGDistance
```csharp
LANS.SystemsBiology.ContextModel.LocationDescriptions.GetATGDistance(LANS.SystemsBiology.ComponentModel.Loci.Location,LANS.SystemsBiology.ComponentModel.IGeneBrief)
```
Calculates the ATG distance between the target gene and a loci segment on.(计算位点相对于某一个基因的ATG距离)

|Parameter Name|Remarks|
|--------------|-------|
|loci|-|
|gene|-|

_returns: 总是计算最大的距离_

#### GetLociRelations``1
```csharp
LANS.SystemsBiology.ContextModel.LocationDescriptions.GetLociRelations``1(``0,LANS.SystemsBiology.ComponentModel.Loci.NucleotideLocation)
```
Get the loci relationship between the target gene and the specific feature loci.

|Parameter Name|Remarks|
|--------------|-------|
|gene|-|
|nucl|-|


#### IsBlankSegment
```csharp
LANS.SystemsBiology.ContextModel.LocationDescriptions.IsBlankSegment(LANS.SystemsBiology.ComponentModel.IGeneBrief)
```
判断本对象是否是由@"M:LANS.SystemsBiology.ContextModel.LocationDescriptions.BlankSegment``1(LANS.SystemsBiology.ComponentModel.Loci.NucleotideLocation)"方法所生成的空白片段

#### LocationDescription``1
```csharp
LANS.SystemsBiology.ContextModel.LocationDescriptions.LocationDescription``1(LANS.SystemsBiology.ComponentModel.Loci.SegmentRelationships,``0)
```
Gets the loci location description data.

|Parameter Name|Remarks|
|--------------|-------|
|posi|-|
|data|-|





