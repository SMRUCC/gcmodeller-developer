---
title: SAM_TSSs
---

# SAM_TSSs
_namespace: [LANS.SystemsBiology.Toolkits.RNA_Seq.BOW](N-LANS.SystemsBiology.Toolkits.RNA_Seq.BOW.html)_



### Methods

#### SplitSaved
```csharp
LANS.SystemsBiology.Toolkits.RNA_Seq.BOW.SAM_TSSs.SplitSaved(LANS.SystemsBiology.Toolkits.RNA_Seq.BOW.DocumentFormat.SAM.SAM,System.Boolean,System.String)
```
将SAM文件里面的Reads数据按照正向和反向分别进行保存到两个文件之中

#### TrimForTSSs
```csharp
LANS.SystemsBiology.Toolkits.RNA_Seq.BOW.SAM_TSSs.TrimForTSSs(LANS.SystemsBiology.Toolkits.RNA_Seq.BOW.DocumentFormat.SAM.SAM)
```
将一些标签去除一应用于下游的TSS分析

|Parameter Name|Remarks|
|--------------|-------|
|doc|
 会将文档里面的@"F:LANS.SystemsBiology.Toolkits.RNA_Seq.BOW.DocumentFormat.SAM.DocumentElements.BitFLAGS.Bit0x200",
 @"F:LANS.SystemsBiology.Toolkits.RNA_Seq.BOW.DocumentFormat.SAM.DocumentElements.BitFLAGS.Bit0x4"的Reads进行剔除
 |





