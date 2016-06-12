---
title: VirtualFootprint
tags: [maunal, tools]
date: 6/13/2016 12:26:47 AM
---
# GCModeller [version 1.0.0.0]
**Module AssemblyName**: file:///F:/GCModeller/GCModeller-x64/VirtualFootprint.exe
**Root namespace**: LANS.SystemsBiology.InteractionModel.Network.VirtualFootprint.CLI


All of the command that available in this program has been list below:

|Function API|Info|
|------------|----|
|/Build.Footprints|Build regulations from motif log site.|
|/Density.Mappings||
|/Export.Footprints.Sites|Exports the motif sites from the virtual footprints sites.|
|/Filter.Promoter.Sites||
|/Filter.PromoterSites.Batch||
|/Intersect||
|/KEGG.Regulons||
|/Logs.Cast.Footprints||
|/MAST_Sites.Screen||
|/MAST_Sites.Screen2||
|/Merge.Footprints||
|/Merge.Regulons||
|/Motif.From.MAL||
|/restrict_enzyme.builds||
|/scan|Sanning genome sequence with a specific motif meme model.|
|/Test.Footprints||
|/Test.Footprints.2||
|/TF.Density||
|/TF.Density.Batch||
|/TF.Regulons||
|/TF.Sites||
|/Trim.Regulates||
|/Trim.Regulons||
|/Write.Network||

## Commands
--------------------------
##### Help for command '/Build.Footprints':

**Prototype**: LANS.SystemsBiology.InteractionModel.Network.VirtualFootprint.CLI::Int32 BuildFootprints(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  Build regulations from motif log site.
  Usage:        F:\GCModeller\GCModeller-x64\VirtualFootprint.exe /Build.Footprints /motifs <motifLogs.csv> /bbh <queryHits.csv> [/hitshash /sites <motifLogSites.Xml.DIR> /out <out.csv>]
  Example:      VirtualFootprint /Build.Footprints 
```



  Parameters information:
```
    /bbh
    Description:  The bbh hit result between the RegPrecise database and annotated genome proteins. query should be the RegPrecise TF and hits should be the annotated proteins.

    Example:      /bbh ""

   [/sites]
    Description:  If this parameter not presented, then using GCModeller repository data as default.

    Example:      /sites ""

   [/hitshash]
    Description:  Using hit name as the bbh hash index key? default is using query name.

    Example:      /hitshash ""


```

##### Help for command '/Density.Mappings':

**Prototype**: LANS.SystemsBiology.InteractionModel.Network.VirtualFootprint.CLI::Int32 ContextMappings(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\VirtualFootprint.exe /Density.Mappings /in <density.Csv> [/scale 100 /out <out.PTT>]
  Example:      VirtualFootprint /Density.Mappings 
```

##### Help for command '/Export.Footprints.Sites':

**Prototype**: LANS.SystemsBiology.InteractionModel.Network.VirtualFootprint.CLI::Int32 ExportFasta(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  Exports the motif sites from the virtual footprints sites.
  Usage:        F:\GCModeller\GCModeller-x64\VirtualFootprint.exe /Export.Footprints.Sites /in <virtualfootprints> [/TF <locus_tag> /offset <group-offset> /out <outDIR/fasta>]
  Example:      VirtualFootprint /Export.Footprints.Sites 
```

##### Help for command '/Filter.Promoter.Sites':

**Prototype**: LANS.SystemsBiology.InteractionModel.Network.VirtualFootprint.CLI::Int32 PromoterSites(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\VirtualFootprint.exe /Filter.Promoter.Sites /in <motifLog.Csv> [/out <out.csv>]
  Example:      VirtualFootprint /Filter.Promoter.Sites 
```

##### Help for command '/Filter.PromoterSites.Batch':

**Prototype**: LANS.SystemsBiology.InteractionModel.Network.VirtualFootprint.CLI::Int32 PromoterSitesBatch(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\VirtualFootprint.exe /Filter.PromoterSites.Batch /in <motifLogs.DIR> [/num_threads <-1> /out <out.DIR>]
  Example:      VirtualFootprint /Filter.PromoterSites.Batch 
```

##### Help for command '/Intersect':

**Prototype**: LANS.SystemsBiology.InteractionModel.Network.VirtualFootprint.CLI::Int32 Intersection(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\VirtualFootprint.exe /Intersect /s1 <footprints.csv> /s2 <footprints.csv> [/out <out.csv> /strict]
  Example:      VirtualFootprint /Intersect 
```

##### Help for command '/KEGG.Regulons':

**Prototype**: LANS.SystemsBiology.InteractionModel.Network.VirtualFootprint.CLI::Int32 KEGGRegulons(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\VirtualFootprint.exe /KEGG.Regulons /in <footprints.csv> /mods <KEGG.mods.DIR> [/pathway /out <out.csv>]
  Example:      VirtualFootprint /KEGG.Regulons 
```

##### Help for command '/Logs.Cast.Footprints':

**Prototype**: LANS.SystemsBiology.InteractionModel.Network.VirtualFootprint.CLI::Int32 CastLogAsFootprints(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\VirtualFootprint.exe /Logs.Cast.Footprints /in <motifLogs.Csv> [/out <out.csv>]
  Example:      VirtualFootprint /Logs.Cast.Footprints 
```

##### Help for command '/MAST_Sites.Screen':

**Prototype**: LANS.SystemsBiology.InteractionModel.Network.VirtualFootprint.CLI::Int32 SiteScreens(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\VirtualFootprint.exe /MAST_Sites.Screen /in <mast_sites.csv> /operons <regprecise.operons.csv> [/out <out.csv>]
  Example:      VirtualFootprint /MAST_Sites.Screen 
```

##### Help for command '/MAST_Sites.Screen2':

**Prototype**: LANS.SystemsBiology.InteractionModel.Network.VirtualFootprint.CLI::Int32 SiteScreens2(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\VirtualFootprint.exe /MAST_Sites.Screen2 /in <mast_sites.csv> [/n <2> /offset <30> /out <out.csv>]
  Example:      VirtualFootprint /MAST_Sites.Screen2 
```

##### Help for command '/Merge.Footprints':

**Prototype**: LANS.SystemsBiology.InteractionModel.Network.VirtualFootprint.CLI::Int32 MergeFootprints(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\VirtualFootprint.exe /Merge.Footprints /in <inDIR> [/out <out.csv> /trim]
  Example:      VirtualFootprint /Merge.Footprints 
```

##### Help for command '/Merge.Regulons':

**Prototype**: LANS.SystemsBiology.InteractionModel.Network.VirtualFootprint.CLI::Int32 MergeRegulonsExport(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\VirtualFootprint.exe /Merge.Regulons /in <regulons.bbh.inDIR> [/out <out.csv>]
  Example:      VirtualFootprint /Merge.Regulons 
```

##### Help for command '/Motif.From.MAL':

**Prototype**: LANS.SystemsBiology.InteractionModel.Network.VirtualFootprint.CLI::Int32 MotifFromMAL(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\VirtualFootprint.exe /Motif.From.MAL /in <clustal.fasta> /out <outDIR>
  Example:      VirtualFootprint /Motif.From.MAL 
```

##### Help for command '/restrict_enzyme.builds':

**Prototype**: LANS.SystemsBiology.InteractionModel.Network.VirtualFootprint.CLI::Int32 BuildEnzymeDb(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\VirtualFootprint.exe /restrict_enzyme.builds [/source <html_DIR> /out <out.json>]
  Example:      VirtualFootprint /restrict_enzyme.builds 
```



  Parameters information:
```
       [/source]
    Description:  Default using the data source from Wikipedia.

    Example:      /source ""

   [/out]
    Description:  Enzyme database was writing to the GCModeller repository by default.

    Example:      /out ""


```

##### Help for command '/scan':

**Prototype**: LANS.SystemsBiology.InteractionModel.Network.VirtualFootprint.CLI::Int32 Scanner(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  Sanning genome sequence with a specific motif meme model.
  Usage:        F:\GCModeller\GCModeller-x64\VirtualFootprint.exe /scan /motif <meme.txt> /nt <genome.fasta> [/PTT <genome.ptt> /atg-dist <250> /out <out.csv>]
  Example:      VirtualFootprint /scan 
```

##### Help for command '/Test.Footprints':

**Prototype**: LANS.SystemsBiology.InteractionModel.Network.VirtualFootprint.CLI::Int32 TestFootprints(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\VirtualFootprint.exe /Test.Footprints /in <virtualfootprints.csv> /opr <regulon-operons.csv> [/out <out.csv>]
  Example:      VirtualFootprint /Test.Footprints 
```

##### Help for command '/Test.Footprints.2':

**Prototype**: LANS.SystemsBiology.InteractionModel.Network.VirtualFootprint.CLI::Int32 TestFootprints2(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\VirtualFootprint.exe /Test.Footprints.2 /in <virtualfootprints.csv> [/out <out.csv> /n 2]
  Example:      VirtualFootprint /Test.Footprints.2 
```

##### Help for command '/TF.Density':

**Prototype**: LANS.SystemsBiology.InteractionModel.Network.VirtualFootprint.CLI::Int32 TFDensity(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\VirtualFootprint.exe /TF.Density /TF <TF-list.txt> /PTT <genome.PTT> [/ranges 5000 /out <out.csv> /cis /un-strand /batch]
  Example:      VirtualFootprint /TF.Density 
```



  Parameters information:
```
    /TF
    Description:  A plant text file with the TF locus_tag list.

    Example:      /TF ""

   [/batch]
    Description:  This function is works in batch mode.

    Example:      /batch ""


```

##### Help for command '/TF.Density.Batch':

**Prototype**: LANS.SystemsBiology.InteractionModel.Network.VirtualFootprint.CLI::Int32 TFDensityBatch(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\VirtualFootprint.exe /TF.Density.Batch /TF <TF-list.txt> /PTT <genome.PTT.DIR> [/ranges 5000 /out <out.DIR> /cis /un-strand]
  Example:      VirtualFootprint /TF.Density.Batch 
```

##### Help for command '/TF.Regulons':

**Prototype**: LANS.SystemsBiology.InteractionModel.Network.VirtualFootprint.CLI::Int32 TFRegulons(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\VirtualFootprint.exe /TF.Regulons /bbh <tf.bbh.csv> /footprints <regulations.csv> [/out <out.csv>]
  Example:      VirtualFootprint /TF.Regulons 
```

##### Help for command '/TF.Sites':

**Prototype**: LANS.SystemsBiology.InteractionModel.Network.VirtualFootprint.CLI::Int32 TFMotifSites(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\VirtualFootprint.exe /TF.Sites /bbh <bbh.Csv> /RegPrecise <RegPrecise.Xmls.DIR> [/hitHash /out <outDIR>]
  Example:      VirtualFootprint /TF.Sites 
```

##### Help for command '/Trim.Regulates':

**Prototype**: LANS.SystemsBiology.InteractionModel.Network.VirtualFootprint.CLI::Int32 TrimRegulates(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\VirtualFootprint.exe /Trim.Regulates /in <virtualfootprint.csv> [/out <out.csv> /cut 0.65]
  Example:      VirtualFootprint /Trim.Regulates 
```

##### Help for command '/Trim.Regulons':

**Prototype**: LANS.SystemsBiology.InteractionModel.Network.VirtualFootprint.CLI::Int32 TrimRegulon(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\VirtualFootprint.exe /Trim.Regulons /in <regulons.csv> /pcc <pccDIR/sp_code> [/out <out.csv> /cut 0.65]
  Example:      VirtualFootprint /Trim.Regulons 
```

##### Help for command '/Write.Network':

**Prototype**: LANS.SystemsBiology.InteractionModel.Network.VirtualFootprint.CLI::Int32 SaveNetwork(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\VirtualFootprint.exe /Write.Network /in <regulons.csv> [/out <netDIR>]
  Example:      VirtualFootprint /Write.Network 
```

