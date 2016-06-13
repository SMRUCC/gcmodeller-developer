---
title: AssignGene
---

# AssignGene
_namespace: [LANS.SystemsBiology.AnalysisTools.DataVisualization.Interaction.Cytoscape](N-LANS.SystemsBiology.AnalysisTools.DataVisualization.Interaction.Cytoscape.html)_

将基因与相应的反应过程映射起来

### Methods

#### AssignGenes
```csharp
LANS.SystemsBiology.AnalysisTools.DataVisualization.Interaction.Cytoscape.AssignGene.AssignGenes(LANS.SystemsBiology.Assembly.MetaCyc.File.DataFiles.Slots.Enzrxn)
```
获取某一个酶促反应中所涉及到的所有基因

|Parameter Name|Remarks|
|--------------|-------|
|Enzrxn|-|


#### GetGenes
```csharp
LANS.SystemsBiology.AnalysisTools.DataVisualization.Interaction.Cytoscape.AssignGene.GetGenes(LANS.SystemsBiology.Assembly.MetaCyc.File.DataFiles.Slots.Protein,LANS.SystemsBiology.Assembly.MetaCyc.File.DataFiles.Proteins)
```
递归的查找某一个蛋白质复合物的基因

|Parameter Name|Remarks|
|--------------|-------|
|Protein|-|
|ProteinList|-|


#### Performance
```csharp
LANS.SystemsBiology.AnalysisTools.DataVisualization.Interaction.Cytoscape.AssignGene.Performance
```
String() => {Reaction, Associated-Genes}
_returns: {Reaction, Associated-Genes}_




