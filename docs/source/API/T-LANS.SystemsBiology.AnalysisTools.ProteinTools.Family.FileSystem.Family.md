﻿---
title: Family
---

# Family
_namespace: [LANS.SystemsBiology.AnalysisTools.ProteinTools.Family.FileSystem](N-LANS.SystemsBiology.AnalysisTools.ProteinTools.Family.FileSystem.html)_





### Methods

#### __matchTraceDef
```csharp
LANS.SystemsBiology.AnalysisTools.ProteinTools.Family.FileSystem.Family.__matchTraceDef(LANS.SystemsBiology.AnalysisTools.ProteinTools.Sanger.Pfam.PfamString.PfamString)
```
只要是有该结构域的就算是该家族的蛋白质？？

|Parameter Name|Remarks|
|--------------|-------|
|query|-|

> 
>  虽然在MPAlignment比对操作的时候也会知道有至少一个结构域被比对上，但是并不确定那个结构域是否为家族特有的结构域所以在MP比对之中无法进行判断，所以需要在这里进行判断
>  

#### IsThisFamily
```csharp
LANS.SystemsBiology.AnalysisTools.ProteinTools.Family.FileSystem.Family.IsThisFamily(LANS.SystemsBiology.AnalysisTools.ProteinTools.Sanger.Pfam.PfamString.PfamString,System.Double,System.Double,System.Int32,System.Boolean)
```
分类注释的核心函数

|Parameter Name|Remarks|
|--------------|-------|
|query|-|
|threshold|-|
|highlyThreshold|-|



### Properties

#### Trace
与@"P:LANS.SystemsBiology.AnalysisTools.ProteinTools.Family.FileSystem.Family.Domains"不同的是，这个超过60的蛋白质拥有这个结构域其就会被记录在这里