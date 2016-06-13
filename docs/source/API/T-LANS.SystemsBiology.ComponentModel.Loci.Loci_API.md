---
title: Loci_API
---

# Loci_API
_namespace: [LANS.SystemsBiology.ComponentModel.Loci](N-LANS.SystemsBiology.ComponentModel.Loci.html)_

The extension method for the location object operations.

### Methods

#### FragmentAssembly
```csharp
LANS.SystemsBiology.ComponentModel.Loci.Loci_API.FragmentAssembly(System.Collections.Generic.IEnumerable{LANS.SystemsBiology.ComponentModel.Loci.Location},System.Int32)
```
这个方法在Pfam蛋白质结构域分析的时候非常有用

|Parameter Name|Remarks|
|--------------|-------|
|source|必须是已经按照@"P:LANS.SystemsBiology.ComponentModel.Loci.Location.Left"进行从小到大排序操作的数据|


#### Group``1
```csharp
LANS.SystemsBiology.ComponentModel.Loci.Loci_API.Group``1(System.Collections.Generic.IEnumerable{``0},System.Int32)
```
非并行版本，为上一级是并行的LINQ查询所准备的

|Parameter Name|Remarks|
|--------------|-------|
|lc|-|
|LenOffset|-|


#### Merge``1
```csharp
LANS.SystemsBiology.ComponentModel.Loci.Loci_API.Merge``1(``0,``0)
```
将**b**合并至**a**之中并返回位点**a**，合并失败则只会返回a，其不会被做任何修改

|Parameter Name|Remarks|
|--------------|-------|
|a|-|
|b|-|





