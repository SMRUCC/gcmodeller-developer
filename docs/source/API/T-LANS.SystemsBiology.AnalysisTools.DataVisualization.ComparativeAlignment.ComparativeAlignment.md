---
title: ComparativeAlignment
---

# ComparativeAlignment
_namespace: [LANS.SystemsBiology.AnalysisTools.DataVisualization.ComparativeAlignment](N-LANS.SystemsBiology.AnalysisTools.DataVisualization.ComparativeAlignment.html)_





### Methods

#### BuildModel
```csharp
LANS.SystemsBiology.AnalysisTools.DataVisualization.ComparativeAlignment.ComparativeAlignment.BuildModel(Microsoft.VisualBasic.DocumentFormat.Csv.DocumentStream.DataFrame,System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{System.String},System.String,System.Boolean,System.Boolean)
```
数据框之中的每一行数据都表示同源基因，列表示为基因组

|Parameter Name|Remarks|
|--------------|-------|
|DF|生成GeneLink数据|
|ColumnList|假若本参数值为空，则默认取出所有的数据|
|PttSource|请注意，这个值的顺序是与数据框之中的列是一一对应的|


#### BuildMultipleAlignmentModel
```csharp
LANS.SystemsBiology.AnalysisTools.DataVisualization.ComparativeAlignment.ComparativeAlignment.BuildMultipleAlignmentModel(System.String,System.String,System.String,System.String,LANS.SystemsBiology.SequenceModel.FASTA.FastaToken,System.Collections.Generic.IEnumerable{LANS.SystemsBiology.Assembly.NCBI.GenBank.CsvExports.GeneDumpInfo})
```


|Parameter Name|Remarks|
|--------------|-------|
|source|bbh结果的文件夹|
|query|query的编号|
|PTT|存放多个物种的ptt文件的文件夹|


#### InvokeDrawing
```csharp
LANS.SystemsBiology.AnalysisTools.DataVisualization.ComparativeAlignment.ComparativeAlignment.InvokeDrawing(LANS.SystemsBiology.AnalysisTools.DataVisualization.ComparativeAlignment.DrawingModel,System.Drawing.Color,System.Boolean,System.Boolean,System.String)
```
绘制对比对图

|Parameter Name|Remarks|
|--------------|-------|
|model|-|
|defaultColor|-|
|type2Arrow|-|


#### TCSVisualization
```csharp
LANS.SystemsBiology.AnalysisTools.DataVisualization.ComparativeAlignment.ComparativeAlignment.TCSVisualization(LANS.SystemsBiology.AnalysisTools.DataVisualization.ComparativeAlignment.DrawingModel,System.Drawing.Color,System.Drawing.Color,System.Drawing.Color)
```
对双组分系统进行颜色赋值，其他的基因不变

|Parameter Name|Remarks|
|--------------|-------|
|model|-|



