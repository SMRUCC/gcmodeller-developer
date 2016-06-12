---
title: PhenoTree
tags: [maunal, tools]
date: 6/13/2016 12:26:40 AM
---
# GCModeller [version 1.0.0.0]
**Module AssemblyName**: file:///F:/GCModeller/GCModeller-x64/PhenoTree.exe
**Root namespace**: PhenoTree.CLI


All of the command that available in this program has been list below:

|Function API|Info|
|------------|----|
|/Cluster.Genes.Phenotype||
|/Parts.COGs||
|/venn.Matrix||

## Commands
--------------------------
##### Help for command '/Cluster.Genes.Phenotype':

**Prototype**: PhenoTree.CLI::Int32 GenePhenoClusters(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\PhenoTree.exe /Cluster.Genes.Phenotype /sites <motifSites.csv> [/out <out.tree_cluster.csv> /parallel]
  Example:      PhenoTree /Cluster.Genes.Phenotype 
```

##### Help for command '/Parts.COGs':

**Prototype**: PhenoTree.CLI::Int32 PartitioningCOGs(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\PhenoTree.exe /Parts.COGs /cluster <btree.clusters.csv> /myva <COGs.csv> [/depth <-1> /out <EXPORT_DIR>]
  Example:      PhenoTree /Parts.COGs 
```

##### Help for command '/venn.Matrix':

**Prototype**: PhenoTree.CLI::Int32 VennMatrix(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\PhenoTree.exe /venn.Matrix /besthits <besthits.xml.DIR> [/query <sp.name> /limits -1 /out <out.txt>]
  Example:      PhenoTree /venn.Matrix 
```

