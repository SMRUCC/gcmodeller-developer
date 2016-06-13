---
title: Contig
---

# Contig
_namespace: [LANS.SystemsBiology.Toolkits.RNA_Seq.BOW](N-LANS.SystemsBiology.Toolkits.RNA_Seq.BOW.html)_



### Methods

#### AssemblingForward
```csharp
LANS.SystemsBiology.Toolkits.RNA_Seq.BOW.Contig.AssemblingForward(Microsoft.VisualBasic.List{LANS.SystemsBiology.Toolkits.RNA_Seq.BOW.DocumentFormat.SAM.DocumentElements.AlignmentReads},System.Boolean)
```
所装配出来的位置和方向有关

|Parameter Name|Remarks|
|--------------|-------|
|Reads|-|
|Reversed|实际的方向|


#### AssemblingReversed
```csharp
LANS.SystemsBiology.Toolkits.RNA_Seq.BOW.Contig.AssemblingReversed(Microsoft.VisualBasic.List{LANS.SystemsBiology.Toolkits.RNA_Seq.BOW.DocumentFormat.SAM.DocumentElements.AlignmentReads},System.Boolean)
```
不明白在bitwiseFLAG里面已经标注了Reverse方向了，为什么还是有些Reads会是正向的
 bwa标注出来的位置和ncbi上面的blast的位置好像不一致？？？

|Parameter Name|Remarks|
|--------------|-------|
|Reads|位置从大到小的|





