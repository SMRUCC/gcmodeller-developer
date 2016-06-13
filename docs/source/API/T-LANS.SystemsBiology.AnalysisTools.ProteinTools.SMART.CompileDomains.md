---
title: CompileDomains
---

# CompileDomains
_namespace: [LANS.SystemsBiology.AnalysisTools.ProteinTools.SMART](N-LANS.SystemsBiology.AnalysisTools.ProteinTools.SMART.html)_



### Methods

#### Compile
```csharp
LANS.SystemsBiology.AnalysisTools.ProteinTools.SMART.CompileDomains.Compile(LANS.SystemsBiology.NCBI.Extensions.LocalBLAST.BLASTOutput.XmlFile.BlastOutput,System.String,LANS.SystemsBiology.SequenceModel.FASTA.FastaFile,LANS.SystemsBiology.Assembly.NCBI.CDD.DbFile)
```


|Parameter Name|Remarks|
|--------------|-------|
|BlastLogOutput|-|
|GrepScript|-|
|SubjectDb|Cdd数据库中导出来的序列数据|
|CddDb|与SubjectDb一致的Cdd数据库中的一个子库|


#### Performance
```csharp
LANS.SystemsBiology.AnalysisTools.ProteinTools.SMART.CompileDomains.Performance(System.String,System.String,System.String,System.String)
```
函数会返回缓存的目标蛋白质序列数据库中的蛋白质对象的结构域列表数据文件

|Parameter Name|Remarks|
|--------------|-------|
|QueryInput|将要进行编译的目标蛋白质数据库|





