---
title: pitr
tags: [maunal, tools]
date: 6/13/2016 12:26:40 AM
---
# ProteinInteraction [version 1.0.0.0]
**Module AssemblyName**: file:///F:/GCModeller/GCModeller-x64/pitr.exe
**Root namespace**: LANS.SystemsBiology.AnalysisTools.ProteinTools.Interactions.CLI


All of the command that available in this program has been list below:

|Function API|Info|
|------------|----|
|--align.LDM||
|--Contacts||
|--CrossTalks.Probability||
|--Db.From.Exists||
|--domain.Interactions||
|--interact.TCS||
|--Merge.Pfam||
|--predicts.TCS||
|--Profiles.Create||
|--ProtFasta.Downloads||
|--ProtFasta.Downloads.Batch||
|--signature||
|--SwissTCS.Downloads||

## Commands
--------------------------
##### Help for command '--align.LDM':

**Prototype**: LANS.SystemsBiology.AnalysisTools.ProteinTools.Interactions.CLI::Int32 GenerateModel(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\pitr.exe --align.LDM /in <source.fasta>
  Example:      pitr --align.LDM 
```

##### Help for command '--Contacts':

**Prototype**: LANS.SystemsBiology.AnalysisTools.ProteinTools.Interactions.CLI::Int32 Contacts(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\pitr.exe --Contacts /in <in.DIR>
  Example:      pitr --Contacts 
```

##### Help for command '--CrossTalks.Probability':

**Prototype**: LANS.SystemsBiology.AnalysisTools.ProteinTools.Interactions.CLI::Int32 CrossTalksCal(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\pitr.exe --CrossTalks.Probability /query <pfam-string.csv> /swiss <swissTCS_pfam-string.csv> [/out <out.CrossTalks.csv> /test <queryName>]
  Example:      pitr --CrossTalks.Probability 
```

##### Help for command '--Db.From.Exists':

**Prototype**: LANS.SystemsBiology.AnalysisTools.ProteinTools.Interactions.CLI::Int32 DbMergeFromExists(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\pitr.exe --Db.From.Exists /aln <clustal-aln.DIR> /pfam <pfam-string.csv>
  Example:      pitr --Db.From.Exists 
```

##### Help for command '--domain.Interactions':

**Prototype**: LANS.SystemsBiology.AnalysisTools.ProteinTools.Interactions.CLI::Int32 DomainInteractions(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\pitr.exe --domain.Interactions /pfam <pfam-string.csv> /swissTCS <swissTCS.DIR>
  Example:      pitr --domain.Interactions 
```

##### Help for command '--interact.TCS':

**Prototype**: LANS.SystemsBiology.AnalysisTools.ProteinTools.Interactions.CLI::Int32 TCSParser(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\pitr.exe --interact.TCS /door <door.opr> /MiST2 <mist2.xml> /swiss <tcs.csv.DIR> /out <out.DIR>
  Example:      pitr --interact.TCS 
```

##### Help for command '--Merge.Pfam':

**Prototype**: LANS.SystemsBiology.AnalysisTools.ProteinTools.Interactions.CLI::Int32 MergePfam(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\pitr.exe --Merge.Pfam /in <in.DIR>
  Example:      pitr --Merge.Pfam 
```

##### Help for command '--predicts.TCS':

**Prototype**: LANS.SystemsBiology.AnalysisTools.ProteinTools.Interactions.CLI::Int32 Predicts(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\pitr.exe --predicts.TCS /pfam <pfam-string.csv> /prot <prot.fasta> /Db <interaction.xml>
  Example:      pitr --predicts.TCS 
```

##### Help for command '--Profiles.Create':

**Prototype**: LANS.SystemsBiology.AnalysisTools.ProteinTools.Interactions.CLI::Int32 CreateProfiles(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\pitr.exe --Profiles.Create /MiST2 <MiST2.xml> /pfam <pfam-string.csv> [/out <out.csv>]
  Example:      pitr --Profiles.Create 
```

##### Help for command '--ProtFasta.Downloads':

**Prototype**: LANS.SystemsBiology.AnalysisTools.ProteinTools.Interactions.CLI::Int32 ProtFastaDownloads(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\pitr.exe --ProtFasta.Downloads /in <sp.DIR>
  Example:      pitr --ProtFasta.Downloads 
```

##### Help for command '--ProtFasta.Downloads.Batch':

**Prototype**: LANS.SystemsBiology.AnalysisTools.ProteinTools.Interactions.CLI::Int32 ProtFastaDownloadsBatch(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\pitr.exe --ProtFasta.Downloads.Batch /in <sp.DIR.Source>
  Example:      pitr --ProtFasta.Downloads.Batch 
```

##### Help for command '--signature':

**Prototype**: LANS.SystemsBiology.AnalysisTools.ProteinTools.Interactions.CLI::Int32 SignatureGenerates(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\pitr.exe --signature /in <aln.fasta> [/p-cut <0.95>]
  Example:      pitr --signature 
```

##### Help for command '--SwissTCS.Downloads':

**Prototype**: LANS.SystemsBiology.AnalysisTools.ProteinTools.Interactions.CLI::Int32 DownloadEntireDb(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\pitr.exe --SwissTCS.Downloads /out <out.DIR>
  Example:      pitr --SwissTCS.Downloads 
```

