---
title: Utilities
---

# Utilities
_namespace: [LANS.SystemsBiology.AnalysisTools.SequenceTools](N-LANS.SystemsBiology.AnalysisTools.SequenceTools.html)_

Sequence Utilities

### Methods

#### __imperfectsPalindromeTask
```csharp
LANS.SystemsBiology.AnalysisTools.SequenceTools.Utilities.__imperfectsPalindromeTask(LANS.SystemsBiology.SequenceModel.FASTA.FastaToken,System.String,System.Int32,System.Int32,System.Double,System.Int32)
```
搜索可能的RNA发卡结构

|Parameter Name|Remarks|
|--------------|-------|
|fasta|-|
|EXPORT|-|
|min|-|
|max|-|
|cutoff|-|
|maxDist|-|


#### __lociFa
```csharp
LANS.SystemsBiology.AnalysisTools.SequenceTools.Utilities.__lociFa(LANS.SystemsBiology.AnalysisTools.SequenceTools.SequencePatterns.Topologically.PalindromeLoci)
```
Converts the mirror palindrome site into a fasta sequence

|Parameter Name|Remarks|
|--------------|-------|
|x|-|


#### __palindromeTask
```csharp
LANS.SystemsBiology.AnalysisTools.SequenceTools.Utilities.__palindromeTask(LANS.SystemsBiology.SequenceModel.FASTA.FastaToken,System.String,System.Int32,System.Int32)
```
搜索可能的酶切位点

|Parameter Name|Remarks|
|--------------|-------|
|fasta|-|
|EXPORT|-|
|min|-|
|max|-|


#### BatchSearchImperfectsPalindrome
```csharp
LANS.SystemsBiology.AnalysisTools.SequenceTools.Utilities.BatchSearchImperfectsPalindrome(Microsoft.VisualBasic.CommandLine.CommandLine)
```
主要是搜索可能的RNA发卡结构的形成位点

|Parameter Name|Remarks|
|--------------|-------|
|args|-|


#### BatchSearchPalindrome
```csharp
LANS.SystemsBiology.AnalysisTools.SequenceTools.Utilities.BatchSearchPalindrome(Microsoft.VisualBasic.CommandLine.CommandLine)
```
主要是搜索可能的酶切位点

|Parameter Name|Remarks|
|--------------|-------|
|args|-|


#### Complement
```csharp
LANS.SystemsBiology.AnalysisTools.SequenceTools.Utilities.Complement(Microsoft.VisualBasic.CommandLine.CommandLine)
```
进行核酸fasta序列的互补

|Parameter Name|Remarks|
|--------------|-------|
|args|-|


#### ConvertsAuto
```csharp
LANS.SystemsBiology.AnalysisTools.SequenceTools.Utilities.ConvertsAuto(Microsoft.VisualBasic.CommandLine.CommandLine)
```
自动根据文件的头部进行转换

|Parameter Name|Remarks|
|--------------|-------|
|args|-|


#### CutMlAlignment
```csharp
LANS.SystemsBiology.AnalysisTools.SequenceTools.Utilities.CutMlAlignment(Microsoft.VisualBasic.CommandLine.CommandLine)
```
剪裁多重比对的结果文件，将两旁的大部分的非保守区去除掉

|Parameter Name|Remarks|
|--------------|-------|
|args|-|


#### GetSegment
```csharp
LANS.SystemsBiology.AnalysisTools.SequenceTools.Utilities.GetSegment(Microsoft.VisualBasic.CommandLine.CommandLine)
```
取单个片段的方法

|Parameter Name|Remarks|
|--------------|-------|
|args|-|


#### HairpinksBatch
```csharp
LANS.SystemsBiology.AnalysisTools.SequenceTools.Utilities.HairpinksBatch(Microsoft.VisualBasic.CommandLine.CommandLine)
```
/num_threads <-1>: -1表示使用系统自动分配的参数值

|Parameter Name|Remarks|
|--------------|-------|
|args|-|


#### MirrorGroups
```csharp
LANS.SystemsBiology.AnalysisTools.SequenceTools.Utilities.MirrorGroups(Microsoft.VisualBasic.CommandLine.CommandLine)
```
对位点进行分组操作方便进行MEME分析

|Parameter Name|Remarks|
|--------------|-------|
|args|-|


#### PalindromeWorkflow
```csharp
LANS.SystemsBiology.AnalysisTools.SequenceTools.Utilities.PalindromeWorkflow(Microsoft.VisualBasic.CommandLine.CommandLine)
```
这个函数会同时保存Raw数据和经过了转换的@"T:LANS.SystemsBiology.SequenceModel.NucleotideModels.SimpleSegment"数据

|Parameter Name|Remarks|
|--------------|-------|
|args|-|


#### PatternSearchA
```csharp
LANS.SystemsBiology.AnalysisTools.SequenceTools.Utilities.PatternSearchA(Microsoft.VisualBasic.CommandLine.CommandLine)
```
Using the regular expression to search the motif pattern on a target nucleotide sequence.(使用正则表达式搜索目标序列)

|Parameter Name|Remarks|
|--------------|-------|
|argvs|-|


#### Reverse
```csharp
LANS.SystemsBiology.AnalysisTools.SequenceTools.Utilities.Reverse(Microsoft.VisualBasic.CommandLine.CommandLine)
```
对蛋白质序列或者核酸序列进行反向

|Parameter Name|Remarks|
|--------------|-------|
|args|-|


#### SearchMirrotFasta
```csharp
LANS.SystemsBiology.AnalysisTools.SequenceTools.Utilities.SearchMirrotFasta(Microsoft.VisualBasic.CommandLine.CommandLine)
```
同一条链上面的镜像回文

|Parameter Name|Remarks|
|--------------|-------|
|args|-|


#### SearchMirrotNT
```csharp
LANS.SystemsBiology.AnalysisTools.SequenceTools.Utilities.SearchMirrotNT(Microsoft.VisualBasic.CommandLine.CommandLine)
```
同一条链上面的镜像回文

|Parameter Name|Remarks|
|--------------|-------|
|args|-|


#### SequenceLogo
```csharp
LANS.SystemsBiology.AnalysisTools.SequenceTools.Utilities.SequenceLogo(Microsoft.VisualBasic.CommandLine.CommandLine)
```
Drawing the sequence logo from the clustal alignment result.

|Parameter Name|Remarks|
|--------------|-------|
|args|-|


#### Trim
```csharp
LANS.SystemsBiology.AnalysisTools.SequenceTools.Utilities.Trim(Microsoft.VisualBasic.CommandLine.CommandLine)
```
假若你的fasta序列里面既有大写字母又有小写字母，并且希望将序列放在一行显示，则可以使用这个方法来统一这些序列的格式
 这个函数还会删除零长度的序列

|Parameter Name|Remarks|
|--------------|-------|
|args|-|





