---
title: Tools
---

# Tools
_namespace: [LANS.SystemsBiology.DatabaseServices.ComparativeGenomics.AnnotationTools.CEG](N-LANS.SystemsBiology.DatabaseServices.ComparativeGenomics.AnnotationTools.CEG.html)_





### Methods

#### DeltaHomogeneity
```csharp
LANS.SystemsBiology.DatabaseServices.ComparativeGenomics.AnnotationTools.CEG.Tools.DeltaHomogeneity(System.Collections.Generic.IEnumerable{LANS.SystemsBiology.DatabaseServices.ComparativeGenomics.AnnotationTools.CEG.Tools.EssentialGeneCluster},System.Collections.Generic.IEnumerable{LANS.SystemsBiology.AnalysisTools.ComparativeGenomics.PartitioningData})
```
利用CEG看家基因簇数据进行批量的核酸序列同质性的检测

#### ExportClusterNt
```csharp
LANS.SystemsBiology.DatabaseServices.ComparativeGenomics.AnnotationTools.CEG.Tools.ExportClusterNt(LANS.SystemsBiology.SequenceModel.FASTA.FastaToken,LANS.SystemsBiology.Assembly.NCBI.GenBank.TabularFormat.PTT,LANS.SystemsBiology.DatabaseServices.ComparativeGenomics.AnnotationTools.CEG.CEGAssembly)
```
结合CEG数据库从Ptt数据库之中导出每一个基因Cluster的核酸Nt序列

#### ExportEssentialGeneCluster
```csharp
LANS.SystemsBiology.DatabaseServices.ComparativeGenomics.AnnotationTools.CEG.Tools.ExportEssentialGeneCluster(LANS.SystemsBiology.SequenceModel.FASTA.FastaToken,LANS.SystemsBiology.Assembly.NCBI.GenBank.TabularFormat.PTT,System.String,System.Int32)
```


|Parameter Name|Remarks|
|--------------|-------|
|Nt|-|
|Ptt|-|
|Annotation|-|
|AllowedGaps|所允许的基因簇之中的最大的基因空缺数目|


#### InternalEssentialGeneCluster
```csharp
LANS.SystemsBiology.DatabaseServices.ComparativeGenomics.AnnotationTools.CEG.Tools.InternalEssentialGeneCluster(LANS.SystemsBiology.SequenceModel.FASTA.FastaToken,LANS.SystemsBiology.Assembly.NCBI.GenBank.TabularFormat.PTT,System.Collections.Generic.IEnumerable{LANS.SystemsBiology.DatabaseServices.ComparativeGenomics.AnnotationTools.CEG.Annotation},System.Int32)
```


|Parameter Name|Remarks|
|--------------|-------|
|Nt|-|
|Ptt|-|
|Annotation|-|
|AllowedGaps|所允许的基因簇之中的最大的基因空缺数目|


#### InternalGetPttData
```csharp
LANS.SystemsBiology.DatabaseServices.ComparativeGenomics.AnnotationTools.CEG.Tools.InternalGetPttData(System.String)
```
{Ptt, Fna}

|Parameter Name|Remarks|
|--------------|-------|
|DIR|一个基因组的文件夹可能包含有染色体基因组和质粒基因组的数据|



