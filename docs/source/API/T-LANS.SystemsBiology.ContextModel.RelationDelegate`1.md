---
title: RelationDelegate`1
---

# RelationDelegate`1
_namespace: [LANS.SystemsBiology.ContextModel](N-LANS.SystemsBiology.ContextModel.html)_

The working core of the genomics context provider.



### Methods

#### GetATGRelation
```csharp
LANS.SystemsBiology.ContextModel.RelationDelegate`1.GetATGRelation(LANS.SystemsBiology.ComponentModel.Loci.SegmentRelationships,System.Int32)
```


|Parameter Name|Remarks|
|--------------|-------|
|relType|-|
|ATGdist|-|


#### GetRelation
```csharp
LANS.SystemsBiology.ContextModel.RelationDelegate`1.GetRelation(LANS.SystemsBiology.ComponentModel.Loci.SegmentRelationships,System.Int32)
```
为了提高上下文的搜索效率，只在附近的位置搜索
 对于正向，是从小到大排序的

|Parameter Name|Remarks|
|--------------|-------|
|relType|-|
|dist|-|



