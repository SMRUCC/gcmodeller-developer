---
title: OrthologAPI
---

# OrthologAPI
_namespace: [LANS.SystemsBiology.GCModeller.DataVisualization.SyntenyVisual](N-LANS.SystemsBiology.GCModeller.DataVisualization.SyntenyVisual.html)_

直系同源的绘图数据模型

### Methods

#### FromBBH
```csharp
LANS.SystemsBiology.GCModeller.DataVisualization.SyntenyVisual.OrthologAPI.FromBBH(System.Collections.Generic.IEnumerable{LANS.SystemsBiology.NCBI.Extensions.LocalBLAST.Application.BBH.BBHIndex},LANS.SystemsBiology.Assembly.NCBI.GenBank.TabularFormat.PTT,LANS.SystemsBiology.Assembly.NCBI.GenBank.TabularFormat.PTT,System.Func{LANS.SystemsBiology.Assembly.NCBI.GenBank.TabularFormat.ComponentModels.GeneBrief,LANS.SystemsBiology.Assembly.NCBI.GenBank.TabularFormat.ComponentModels.GeneBrief,System.Drawing.Color},System.Int32,System.Int32,System.Int32,System.Int32,LANS.SystemsBiology.GCModeller.DataVisualization.SyntenyVisual.LineStyles)
```
Creates the drawing model from the bbh result.

|Parameter Name|Remarks|
|--------------|-------|
|source|bbh ortholog analysis result|
|query|The genomics context of the query|
|hit|The genomics context of the hit|
|colors|Color profiles, this can be family, COGS, pathways or others|
|h1|-|
|h2|-|
|style|-|
|width|绘图区域的宽度|





