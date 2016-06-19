﻿---
title: __equals
---

# __equals
_namespace: [LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Analysis.Similarity.TOMQuery.TomTOm](N-LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Analysis.Similarity.TOMQuery.TomTOm.html)_

先对列比对，然后bits比对



### Methods

#### BitsEquals
```csharp
LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Analysis.Similarity.TOMQuery.TomTOm.__equals.BitsEquals(System.Collections.Generic.IEnumerable{LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Analysis.MotifScans.ResidueSite},System.Collections.Generic.IEnumerable{LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Analysis.MotifScans.ResidueSite})
```


|Parameter Name|Remarks|
|--------------|-------|
|a|-|
|b|-|

_returns: 
 Dim bits = (Math.Min(a.Bits, b.Bits) + 1) / (Math.Max(a.Bits, b.Bits) + 1) ' bits信息量的相似度
 _

