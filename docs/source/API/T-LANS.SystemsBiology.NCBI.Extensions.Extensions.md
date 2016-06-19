---
title: Extensions
---

# Extensions
_namespace: [LANS.SystemsBiology.NCBI.Extensions](N-LANS.SystemsBiology.NCBI.Extensions.html)_





### Methods

#### BlastpSearch
```csharp
LANS.SystemsBiology.NCBI.Extensions.Extensions.BlastpSearch(LANS.SystemsBiology.SequenceModel.FASTA.FastaToken,System.String,System.String,LANS.SystemsBiology.NCBI.Extensions.LocalBLAST.InteropService.InteropService@)
```
Invoke the blastp search for the target protein fasta sequence.(对目标蛋白质序列进行Blastp搜索)

|Parameter Name|Remarks|
|--------------|-------|
|Query|-|
|Subject|-|
|evalue|-|
|Blastbin|If the services handler is nothing then the function will construct a new handle automatically.|


#### IsAvailable
```csharp
LANS.SystemsBiology.NCBI.Extensions.Extensions.IsAvailable(System.String)
```
Determine that is this blast result file is completed and integrated based on the ends of the result text file.
 (根据文件末尾的结束标示来判断这个blast操作是否是已经完成了的)

|Parameter Name|Remarks|
|--------------|-------|
|path|The file path of the blast output result text file.|


#### IsNullOrEmpty
```csharp
LANS.SystemsBiology.NCBI.Extensions.Extensions.IsNullOrEmpty(System.Collections.Generic.IEnumerable{LANS.SystemsBiology.NCBI.Extensions.LocalBLAST.Application.BBH.BestHit})
```
Is this collection of the besthit data is empty or nothing?

|Parameter Name|Remarks|
|--------------|-------|
|data|-|



