﻿---
title: CLI
---

# CLI
_namespace: [Cytoscape](N-Cytoscape.html)_





### Methods

#### __classNetwork
```csharp
Cytoscape.CLI.__classNetwork(LANS.SystemsBiology.Assembly.KEGG.Archives.Xml.XmlModel,System.Collections.Generic.Dictionary{System.String,Microsoft.VisualBasic.DataVisualization.Network.FileStream.Network{Microsoft.VisualBasic.DataVisualization.Network.FileStream.Node,Microsoft.VisualBasic.DataVisualization.Network.FileStream.NetworkEdge}})
```
基因表达调控网络按照细胞表型小分类聚合

|Parameter Name|Remarks|
|--------------|-------|
|model|KEGG细胞表型分类|
|networks|-|


#### __getMaxMods
```csharp
Cytoscape.CLI.__getMaxMods(System.Collections.Generic.IEnumerable{Microsoft.VisualBasic.DataMining.Framework.KMeans.EntityLDM},System.String,System.Collections.Generic.Dictionary{System.String,System.Collections.Generic.Dictionary{System.String,System.Int32}}@)
```
{调控因子, ModsId}

|Parameter Name|Remarks|
|--------------|-------|
|source|-|
|modDIR|-|


#### __getMaxRelates
```csharp
Cytoscape.CLI.__getMaxRelates(System.Collections.Generic.IEnumerable{Microsoft.VisualBasic.DataMining.Framework.KMeans.EntityLDM},System.Double,System.Collections.Generic.Dictionary{System.String,System.String})
```


|Parameter Name|Remarks|
|--------------|-------|
|source|实体的属性是代谢反应对象|
|cut|-|
|maps|-|


#### __getMods
```csharp
Cytoscape.CLI.__getMods(System.String[],LANS.SystemsBiology.Assembly.KEGG.DBGET.bGetObject.Module[],System.Collections.Generic.Dictionary{System.String,LANS.SystemsBiology.Assembly.KEGG.DBGET.BriteHEntry.Module},System.Collections.Generic.Dictionary{System.String,System.Int32}@)
```
经过数量降序排序了的

|Parameter Name|Remarks|
|--------------|-------|
|keys|-|
|mods|-|


#### __pathwayNetwork
```csharp
Cytoscape.CLI.__pathwayNetwork(LANS.SystemsBiology.Assembly.KEGG.Archives.Xml.XmlModel,System.Collections.Generic.Dictionary{System.String,Microsoft.VisualBasic.DataVisualization.Network.FileStream.Network{Microsoft.VisualBasic.DataVisualization.Network.FileStream.Node,Microsoft.VisualBasic.DataVisualization.Network.FileStream.NetworkEdge}})
```
将Module视图转换为Pathway视图

|Parameter Name|Remarks|
|--------------|-------|
|model|-|
|networks|-|


#### __typeNetwork
```csharp
Cytoscape.CLI.__typeNetwork(LANS.SystemsBiology.Assembly.KEGG.Archives.Xml.XmlModel,System.Collections.Generic.Dictionary{System.String,Microsoft.VisualBasic.DataVisualization.Network.FileStream.Network{Microsoft.VisualBasic.DataVisualization.Network.FileStream.Node,Microsoft.VisualBasic.DataVisualization.Network.FileStream.NetworkEdge}})
```
基因表达调控网络细胞表型大分类

|Parameter Name|Remarks|
|--------------|-------|
|model|-|
|networks|-|


#### BuildTreeNetTF
```csharp
Cytoscape.CLI.BuildTreeNetTF(Microsoft.VisualBasic.CommandLine.CommandLine)
```
根据调控因子对代谢反应过程的相关性的聚类结果得到构建调控因子和Pathway的相关性

|Parameter Name|Remarks|
|--------------|-------|
|args|-|


#### ClusterMatrix
```csharp
Cytoscape.CLI.ClusterMatrix(Microsoft.VisualBasic.CommandLine.CommandLine)
```
居于全局比对来创建矩阵

|Parameter Name|Remarks|
|--------------|-------|
|args|-|


#### FastCluster
```csharp
Cytoscape.CLI.FastCluster(Microsoft.VisualBasic.CommandLine.CommandLine)
```
基于局部比对的快速矩阵创建

|Parameter Name|Remarks|
|--------------|-------|
|args|假若在最开始还没有赋值基因号，而是使用位置来代替的话，可以使用/map参数来讲基因从位置重新映射回基因编号|


#### ModsNET
```csharp
Cytoscape.CLI.ModsNET(Microsoft.VisualBasic.CommandLine.CommandLine)
```
基因和模块之间的从属关系，附加调控信息

|Parameter Name|Remarks|
|--------------|-------|
|args|-|


#### SimpleModesNET
```csharp
Cytoscape.CLI.SimpleModesNET(Microsoft.VisualBasic.CommandLine.CommandLine)
```
模块和模块之间的最简单的互做示意图

|Parameter Name|Remarks|
|--------------|-------|
|args|-|


#### TFNet
```csharp
Cytoscape.CLI.TFNet(Microsoft.VisualBasic.CommandLine.CommandLine)
```
调控因子之间的调控网络

|Parameter Name|Remarks|
|--------------|-------|
|args|-|


