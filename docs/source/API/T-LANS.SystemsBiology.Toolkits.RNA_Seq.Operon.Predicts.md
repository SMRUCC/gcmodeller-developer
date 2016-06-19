---
title: Predicts
---

# Predicts
_namespace: [LANS.SystemsBiology.Toolkits.RNA_Seq.Operon](N-LANS.SystemsBiology.Toolkits.RNA_Seq.Operon.html)_

由于在这里operon里面的基因都是共转录的，而非调控关系，所以必须选择PCC矩阵，并且pcc的值不能够为负数



### Methods

#### Predicts
```csharp
LANS.SystemsBiology.Toolkits.RNA_Seq.Operon.Predicts.Predicts(LANS.SystemsBiology.Assembly.NCBI.GenBank.TabularFormat.PTT,LANS.SystemsBiology.Toolkits.RNA_Seq.PccMatrix,System.String,System.Double,System.Int32)
```


|Parameter Name|Remarks|
|--------------|-------|
|PccCutoff|-|
|Distance|上一个基因与当前的基因的位置之差的值大于这个阈值的时候，认为二者不在同一个操纵子之中|

_returns: 首先假设Door数据库之中的操纵子之中的基因之间的距离是合理的正确的_


