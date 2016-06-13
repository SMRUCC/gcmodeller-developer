---
title: CLI
---

# CLI
_namespace: [LANS.SystemsBiology.Toolkits.RNA_Seq.Assembler](N-LANS.SystemsBiology.Toolkits.RNA_Seq.Assembler.html)_

Assembler @"T:Microsoft.VisualBasic.CommandLine.CommandLine" @"T:Microsoft.VisualBasic.CommandLine.Interpreter" API

### Methods

#### DataView
```csharp
LANS.SystemsBiology.Toolkits.RNA_Seq.Assembler.CLI.DataView(Microsoft.VisualBasic.CommandLine.CommandLine)
```
Display the brief summary information about your blastn mapping data.

|Parameter Name|Remarks|
|--------------|-------|
|args|-|


#### ExportBlastnMapping
```csharp
LANS.SystemsBiology.Toolkits.RNA_Seq.Assembler.CLI.ExportBlastnMapping(Microsoft.VisualBasic.CommandLine.CommandLine)
```
从这里导出blastn mapping的结果

|Parameter Name|Remarks|
|--------------|-------|
|args|-|


#### Merge
```csharp
LANS.SystemsBiology.Toolkits.RNA_Seq.Assembler.CLI.Merge(LANS.SystemsBiology.Toolkits.RNA_Seq.Assembler.DocumentFormat.Transcript[])
```
左端一样，基因号一样，位置描述一样，在调用之前请确保都处于同一条链

|Parameter Name|Remarks|
|--------------|-------|
|Transcript|来自于不同的条件之下，假若只有一个，则没有重复，直接添加第一个，假若有多个，则合并@"P:LANS.SystemsBiology.Toolkits.RNA_Seq.Assembler.DocumentFormat.Transcript.TSSsShared"重复计数这个属性|


#### MergeJason
```csharp
LANS.SystemsBiology.Toolkits.RNA_Seq.Assembler.CLI.MergeJason(Microsoft.VisualBasic.List{LANS.SystemsBiology.Toolkits.RNA_Seq.Assembler.DocumentFormat.Transcript},System.Int32)
```
3bp以内的也合并

|Parameter Name|Remarks|
|--------------|-------|
|Transcript|-|
|delta|文献中的为3个bp的偏差|





