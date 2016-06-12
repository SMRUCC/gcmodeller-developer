---
title: RegPrecise
tags: [maunal, tools]
date: 6/13/2016 12:26:41 AM
---
# GCModeller [version 1.0.0.0]
**Module AssemblyName**: file:///F:/GCModeller/GCModeller-x64/RegPrecise.exe
**Root namespace**: RegPrecise.CLI


All of the command that available in this program has been list below:

|Function API|Info|
|------------|----|
|/Build.Operons||
|/Build.Regulons.Batch||
|/CORN|Join two vertices by edge if the correspondent operons: 
               i) are orthologous; 
               ii) have cantiodate transcription factor binding sites. 
               Collect all linked components. Two operons from two different genomes are called orthologous if they share at least one orthologous gene.|
|/CORN.Batch||
|/CORN.thread||
|/DOOR.Merge||
|/Download.Motifs||
|/Download.Regprecise|Download Regprecise database from Web API|
|/Effector.FillNames||
|/Export.Regulators|Exports all of the fasta sequence of the TF regulator from the download RegPrecsie FASTA database.|
|/Family.Hits||
|/Fasta.Downloads|Download protein fasta sequence from KEGG database.|
|/Fetches||
|/Fetches.Thread||
|/Gets.Sites.Genes||
|/heap.Supports||
|/install.motifs||
|/Maps.Effector||
|/Merge.CORN||
|/Merge.RegPrecise.Fasta||
|/Prot_Motifs.EXPORT.pfamString||
|/Prot_Motifs.PfamString||
|/ProtMotifs.Downloads|Download protein domain motifs structures from KEGG ssdb.|
|/Repository.Fetch||
|/Rfam.Regulates||
|/Select.TF.BBH||
|/Select.TF.Pfam-String||
|/siRNA.Maps||

## Commands
--------------------------
##### Help for command '/Build.Operons':

**Prototype**: RegPrecise.CLI::Int32 OperonBuilder(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\RegPrecise.exe /Build.Operons /bbh <bbh.csv> /PTT <genome.PTT> /TF-bbh <bbh.csv> [/tfHit_hash /out <out.csv> /regprecise <regprecise.Xml>]
  Example:      RegPrecise /Build.Operons 
```



  Parameters information:
```
       [/bbh]
    Description:  The bbh result between the annotated genome And RegPrecise database. 
                   This result was used for generates the operons, and query should be the genes in 
                   the RegPrecise database and the hits is the genes in your annotated genome.

    Example:      /bbh ""


```

##### Help for command '/Build.Regulons.Batch':

**Prototype**: RegPrecise.CLI::Int32 RegulonBatchBuilder(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\RegPrecise.exe /Build.Regulons.Batch /bbh <bbh.DIR> /PTT <PTT.DIR> /tf-bbh <tf-bbh.DIR> /regprecise <regprecise.Xml> [/num_threads <-1> /hits_hash /out <outDIR>]
  Example:      RegPrecise /Build.Regulons.Batch 
```

##### Help for command '/CORN':

**Prototype**: RegPrecise.CLI::Int32 CORN(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  Join two vertices by edge if the correspondent operons: 
               i) are orthologous; 
               ii) have cantiodate transcription factor binding sites. 
               Collect all linked components. Two operons from two different genomes are called orthologous if they share at least one orthologous gene.
  Usage:        F:\GCModeller\GCModeller-x64\RegPrecise.exe /CORN /in <regulons.DIR> /motif-sites <motiflogs.csv.DIR> /sites <motiflogs.csv> /ref <regulons.Csv> [/out <out.csv>]
  Example:      RegPrecise /CORN 
```

##### Help for command '/CORN.Batch':

**Prototype**: RegPrecise.CLI::Int32 CORNBatch(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\RegPrecise.exe /CORN.Batch /sites <motiflogs.gff.sites.Csv.DIR> /regulons <regprecise.regulons.csv.DIR> [/name <name> /out <outDIR> /num_threads <-1>]
  Example:      RegPrecise /CORN.Batch 
```



  Parameters information:
```
       [/name]
    Description:  

    Example:      /name ""


```

##### Help for command '/CORN.thread':

**Prototype**: RegPrecise.CLI::Int32 CORNSingleThread(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\RegPrecise.exe /CORN.thread /hit <regulons.Csv> /hit-sites <motiflogs.csv> /sites <query.motiflogs.csv> /ref <query.regulons.Csv> [/out <out.csv>]
  Example:      RegPrecise /CORN.thread 
```

##### Help for command '/DOOR.Merge':

**Prototype**: RegPrecise.CLI::Int32 MergeDOOR(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\RegPrecise.exe /DOOR.Merge /in <operon.csv> /DOOR <genome.opr> [/out <out.opr>]
  Example:      RegPrecise /DOOR.Merge 
```

##### Help for command '/Download.Motifs':

**Prototype**: RegPrecise.CLI::Int32 DownloadMotifSites(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\RegPrecise.exe /Download.Motifs /imports <RegPrecise.DIR> [/export <EXPORT_DIR>]
  Example:      RegPrecise /Download.Motifs 
```

##### Help for command '/Download.Regprecise':

**Prototype**: RegPrecise.CLI::Int32 DownloadRegprecise2(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  Download Regprecise database from Web API
  Usage:        F:\GCModeller\GCModeller-x64\RegPrecise.exe Download.Regprecise [/work ./ /save <saveXml>]
  Example:      RegPrecise /Download.Regprecise 
```

##### Help for command '/Effector.FillNames':

**Prototype**: RegPrecise.CLI::Int32 EffectorFillNames(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\RegPrecise.exe /Effector.FillNames /in <effectors.csv> /compounds <metacyc.compounds> [/out <out.csv>]
  Example:      RegPrecise /Effector.FillNames 
```

##### Help for command '/Export.Regulators':

**Prototype**: RegPrecise.CLI::Int32 ExportRegulators(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  Exports all of the fasta sequence of the TF regulator from the download RegPrecsie FASTA database.
  Usage:        F:\GCModeller\GCModeller-x64\RegPrecise.exe /Export.Regulators /imports <regprecise.downloads.DIR> /Fasta <regprecise.fasta> [/locus-out /out <out.fasta>]
  Example:      RegPrecise /Export.Regulators 
```



  Parameters information:
```
       [/locus-out]
    Description:  Does the program saves a copy of the TF locus_tag list at the mean time of the TF fasta sequence export.

    Example:      /locus-out ""


```

##### Help for command '/Family.Hits':

**Prototype**: RegPrecise.CLI::Int32 FamilyHits(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\RegPrecise.exe /Family.Hits /bbh <bbh.csv> [/regprecise <RegPrecise.Xml> /pfamKey <query.pfam-string> /out <out.DIR>]
  Example:      RegPrecise /Family.Hits 
```

##### Help for command '/Fasta.Downloads':

**Prototype**: RegPrecise.CLI::Int32 DownloadFasta(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  Download protein fasta sequence from KEGG database.
  Usage:        F:\GCModeller\GCModeller-x64\RegPrecise.exe Fasta.Downloads /source <sourceDIR> [/out <outDIR> /keggTools <kegg.exe>]
  Example:      RegPrecise /Fasta.Downloads 
```

##### Help for command '/Fetches':

**Prototype**: RegPrecise.CLI::Int32 Fetch(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\RegPrecise.exe /Fetches /ncbi <all_gbk.DIR> /imports <inDIR> /out <outDIR>
  Example:      RegPrecise /Fetches 
```

##### Help for command '/Fetches.Thread':

**Prototype**: RegPrecise.CLI::Int32 FetchThread(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\RegPrecise.exe /Fetches.Thread /gbk <gbkDIR> /query <query.txt> /out <outDIR>
  Example:      RegPrecise /Fetches.Thread 
```

##### Help for command '/Gets.Sites.Genes':

**Prototype**: RegPrecise.CLI::Int32 GetSites(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\RegPrecise.exe /Gets.Sites.Genes /in <tf.bbh.csv> /sites <motiflogs.csv> [/out <out.csv>]
  Example:      RegPrecise /Gets.Sites.Genes 
```

##### Help for command '/heap.Supports':

**Prototype**: RegPrecise.CLI::Int32 Supports(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\RegPrecise.exe /heap.supports /in <inDIR> [/out <out.Csv> /T /l]
  Example:      RegPrecise /heap.Supports 
```

##### Help for command '/install.motifs':

**Prototype**: RegPrecise.CLI::Int32 InstallRegPreciseMotifs(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\RegPrecise.exe /install.motifs /imports <motifs.DIR>
  Example:      RegPrecise /install.motifs 
```

##### Help for command '/Maps.Effector':

**Prototype**: RegPrecise.CLI::Int32 Effectors(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\RegPrecise.exe /Maps.Effector /imports <RegPrecise.DIR> [/out <out.csv>]
  Example:      RegPrecise /Maps.Effector 
```

##### Help for command '/Merge.CORN':

**Prototype**: RegPrecise.CLI::Int32 MergeCORN(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\RegPrecise.exe /Merge.CORN /in <inDIR> [/out <outDIR>]
  Example:      RegPrecise /Merge.CORN 
```

##### Help for command '/Merge.RegPrecise.Fasta':

**Prototype**: RegPrecise.CLI::Int32 MergeDownload(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\RegPrecise.exe /Merge.RegPrecise.Fasta [/in <inDIR> /out outDIR /offline]
  Example:      RegPrecise /Merge.RegPrecise.Fasta 
```

##### Help for command '/Prot_Motifs.EXPORT.pfamString':

**Prototype**: RegPrecise.CLI::Int32 ProteinMotifsEXPORT(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\RegPrecise.exe /Prot_Motifs.EXPORT.pfamString /in <motifs.json> /PTT <genome.ptt> [/out <pfam-string.csv>]
  Example:      RegPrecise /Prot_Motifs.EXPORT.pfamString 
```

##### Help for command '/Prot_Motifs.PfamString':

**Prototype**: RegPrecise.CLI::Int32 ProtMotifToPfamString(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\RegPrecise.exe /Prot_Motifs.PfamString /in <RegPrecise.Download_DIR> [/fasta <RegPrecise.fasta> /out <pfam-string.csv>]
  Example:      RegPrecise /Prot_Motifs.PfamString 
```

##### Help for command '/ProtMotifs.Downloads':

**Prototype**: RegPrecise.CLI::Int32 DownloadProteinMotifs(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  Download protein domain motifs structures from KEGG ssdb.
  Usage:        F:\GCModeller\GCModeller-x64\RegPrecise.exe /ProtMotifs.Downloads /source <source.DIR> [/kegg.Tools <./kegg.exe>]
  Example:      RegPrecise /ProtMotifs.Downloads 
```

##### Help for command '/Repository.Fetch':

**Prototype**: RegPrecise.CLI::Int32 FetchRepostiory(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\RegPrecise.exe /Repository.Fetch /imports <RegPrecise.Xml> /genbank <NCBI_Genbank_DIR> [/full /out <outDIR>]
  Example:      RegPrecise /Repository.Fetch 
```

##### Help for command '/Rfam.Regulates':

**Prototype**: RegPrecise.CLI::Int32 RfamRegulates(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\RegPrecise.exe /Rfam.Regulates /in <RegPrecise.regulons.csv> /rfam <rfam_search.csv> [/out <out.csv>]
  Example:      RegPrecise /Rfam.Regulates 
```

##### Help for command '/Select.TF.BBH':

**Prototype**: RegPrecise.CLI::Int32 SelectTFBBH(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\RegPrecise.exe /Select.TF.BBH /bbh <bbh.csv> /imports <RegPrecise.downloads.DIR> [/out <out.bbh.csv>]
  Example:      RegPrecise /Select.TF.BBH 
```

##### Help for command '/Select.TF.Pfam-String':

**Prototype**: RegPrecise.CLI::Int32 SelectTFPfams(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\RegPrecise.exe /Select.TF.Pfam-String /pfam-string <RegPrecise.pfam-string.csv> /imports <regprecise.downloads.DIR> [/out <TF.pfam-string.csv>]
  Example:      RegPrecise /Select.TF.Pfam-String 
```

##### Help for command '/siRNA.Maps':

**Prototype**: RegPrecise.CLI::Int32 siRNAMaps(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\RegPrecise.exe /siRNA.Maps /in <siRNA.csv> /hits <blastn.csv> [/out <out.csv>]
  Example:      RegPrecise /siRNA.Maps 
```

