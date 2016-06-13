---
title: BBHMetaAPI
---

# BBHMetaAPI
_namespace: [LANS.SystemsBiology.NCBI.Extensions.NCBIBlastResult](N-LANS.SystemsBiology.NCBI.Extensions.NCBIBlastResult.html)_

@"T:LANS.SystemsBiology.NCBI.Extensions.Analysis.BestHit" -> @"T:LANS.SystemsBiology.NCBI.Extensions.NCBIBlastResult.AlignmentTable"

### Methods

#### DataParser
```csharp
LANS.SystemsBiology.NCBI.Extensions.NCBIBlastResult.BBHMetaAPI.DataParser(LANS.SystemsBiology.NCBI.Extensions.Analysis.BestHit,LANS.SystemsBiology.Assembly.NCBI.GenBank.TabularFormat.PTT,System.Boolean,System.Func{LANS.SystemsBiology.NCBI.Extensions.Analysis.Hit,System.Double})
```


|Parameter Name|Remarks|
|--------------|-------|
|bbh|-|
|PTT|因为这个是blastp BBH的结果，所以没有基因组的位置信息，在这里使用PTT文档来生成绘图时所需要的位点信息|
|visualGroup|
 由于在进行blast绘图的时候，程序是按照基因组来分组绘制的，而绘制的对象不需要显示详细的信息，所以在这里为True的话，会直接使用基因组tag来替换名称进而用于blast作图
 |





