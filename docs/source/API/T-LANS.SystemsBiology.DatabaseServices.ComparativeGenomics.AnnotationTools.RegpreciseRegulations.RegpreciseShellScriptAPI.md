---
title: RegpreciseShellScriptAPI
---

# RegpreciseShellScriptAPI
_namespace: [LANS.SystemsBiology.DatabaseServices.ComparativeGenomics.AnnotationTools.RegpreciseRegulations](N-LANS.SystemsBiology.DatabaseServices.ComparativeGenomics.AnnotationTools.RegpreciseRegulations.html)_





### Methods

#### BuildPWM
```csharp
LANS.SystemsBiology.DatabaseServices.ComparativeGenomics.AnnotationTools.RegpreciseRegulations.RegpreciseShellScriptAPI.BuildPWM(System.Boolean)
```
Build the pwm matrix model for the regulations sites in the regprecise database.
 (构建meme的pwm模型并且保存于GCModeller的数据库之中)

|Parameter Name|Remarks|
|--------------|-------|
|rebuildMatrix|-|


#### OrthologousFromOverview
```csharp
LANS.SystemsBiology.DatabaseServices.ComparativeGenomics.AnnotationTools.RegpreciseRegulations.RegpreciseShellScriptAPI.OrthologousFromOverview(System.String,System.String)
```
从blastp日志数据之中导出regprecise数据库的注释结果

|Parameter Name|Remarks|
|--------------|-------|
|qvsPath|@"M:LANS.SystemsBiology.NCBI.Extensions.LocalBLAST.BLASTOutput.Views.Overview.LoadExcel(System.String)" 物种_vs_regprecise|
|svqPath|regprecise_vs_物种|



