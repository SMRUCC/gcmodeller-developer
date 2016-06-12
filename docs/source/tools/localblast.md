---
title: localblast
tags: [maunal, tools]
date: 6/13/2016 12:26:38 AM
---
# GCModeller [version 1.0.0.0]
**Module AssemblyName**: file:///F:/GCModeller/GCModeller-x64/localblast.exe
**Root namespace**: LANS.SystemsBiology.NCBI.Extensions.CLI


All of the command that available in this program has been list below:

|Function API|Info|
|------------|----|
|/add.locus_tag|Add locus_tag qualifier into the feature slot.|
|/add.names||
|/Bash.Venn||
|/bbh.Export||
|/BBH.Merge||
|/BestHits.Filtering||
|/blastn.Query||
|/Blastp.BBH.Query||
|/COG.Statics||
|/Copy.PTT||
|/Copys||
|/Export.Blastn||
|/Export.blastnMaps||
|/Export.BlastX||
|/EXPORT.COGs.from.DOOR||
|/Export.gb|Export the *.fna, *.faa, *.ptt file from the gbk file.|
|/Export.gpff||
|/Export.gpffs||
|/Export.Locus||
|/export.prot||
|/Identities.Matrix||
|/locus.Selects||
|/MAT.evalue||
|/Merge.faa||
|/Paralog||
|/Print||
|/SBH.BBH.Batch||
|/SBH.Export.Large||
|/SBH.Trim||
|/sbh2bbh||
|/Select.Meta||
|/SSBH2BH_LDM||
|/SSDB.Export||
|/venn.BBH|2. Build venn table And bbh data from the blastp result out Or sbh data cache.|
|/venn.BlastAll|Completely paired combos blastp bbh operations for the venn diagram Or network builder.|
|/venn.cache|1. [SBH_Batch] Creates the sbh cache data for the downstream bbh analysis. 
               And this batch function is suitable with any scale of the blastp sbh data output.|
|/venn.sbh.thread||
|/Venn.Single||
|--bbh.export|Batch export bbh result data from a directory.|
|blast|In order to draw as venn diagram for a specific set of genome and study the diferrence and consists between these genomes, you should do the blast operation from the protein amino aciad sequence first. The blastp operation can be performenced by the blast+ program which you can download from the NCBI website, this command is a interop service for the NCBI blast program, you should install the blast+ program at first.|
|--blast.self||
|-copy||
|--Export.Fasta||
|--Export.Overviews||
|--Export.SBH||
|-export_besthit||
|grep|The gene id in the blast output log file are not well format for reading and program processing, so before you generate the venn diagram you should call this command to parse the gene id from the log file. You can also done this id parsing job using other tools.|
|logs_analysis|Parsing the xml format blast log into a csv data file that use for venn diagram drawing.|
|merge|This program can not use the blast parsing result for the venn diagram drawing operation, and this command is using for generate the drawing data for the venn diagram drawing command, this command merge the blast log parsing result and then using the parsing result for drawing a venn diagram.|
|-merge_besthit||
|--Xml2Excel||
|--Xml2Excel.Batch||

## Commands
--------------------------
##### Help for command '/add.locus_tag':

**Prototype**: LANS.SystemsBiology.NCBI.Extensions.CLI::Int32 AddLocusTag(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  Add locus_tag qualifier into the feature slot.
  Usage:        F:\GCModeller\GCModeller-x64\localblast.exe /add.locus_tag /gb <gb.gbk> /prefix <prefix> [/add.gene /out <out.gb>]
  Example:      localblast /add.locus_tag 
```



  Parameters information:
```
       [/add.gene]
    Description:  Add gene features?

    Example:      /add.gene ""


```

##### Help for command '/add.names':

**Prototype**: LANS.SystemsBiology.NCBI.Extensions.CLI::Int32 AddNames(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\localblast.exe /add.names /anno <anno.csv> /gb <genbank.gbk> [/out <out.gbk> /tag <overrides_name>]
  Example:      localblast /add.names 
```

##### Help for command '/Bash.Venn':

**Prototype**: LANS.SystemsBiology.NCBI.Extensions.CLI::Int32 BashShell(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\localblast.exe /Bash.Venn /blast <blastDIR> /inDIR <fasta.DIR> /inRef <inRefAs.DIR> [/out <outDIR> /evalue <evalue:10>]
  Example:      localblast /Bash.Venn 
```

##### Help for command '/bbh.Export':

**Prototype**: LANS.SystemsBiology.NCBI.Extensions.CLI::Int32 BBHExportFile(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\localblast.exe /bbh.Export /query <query.blastp_out> /subject <subject.blast_out> [/out <bbh.csv> /evalue 1e-3 /coverage 0.85 /identities 0.3]
  Example:      localblast /bbh.Export 
```

##### Help for command '/BBH.Merge':

**Prototype**: LANS.SystemsBiology.NCBI.Extensions.CLI::Int32 MergeBBH(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\localblast.exe /BBH.Merge /in <inDIR> [/out <out.csv>]
  Example:      localblast /BBH.Merge 
```

##### Help for command '/BestHits.Filtering':

**Prototype**: LANS.SystemsBiology.NCBI.Extensions.CLI::Int32 BestHitFiltering(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\localblast.exe /BestHits.Filtering /in <besthit.xml> /sp <table.txt> [/out <out.Xml>]
  Example:      localblast /BestHits.Filtering 
```

##### Help for command '/blastn.Query':

**Prototype**: LANS.SystemsBiology.NCBI.Extensions.CLI::Int32 BlastnQuery(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\localblast.exe /blastn.Query /query <query.fna> /db <db.DIR> [/evalue 1e-5 /out <out.DIR>]
  Example:      localblast /blastn.Query 
```

##### Help for command '/Blastp.BBH.Query':

**Prototype**: LANS.SystemsBiology.NCBI.Extensions.CLI::Int32 BlastpBBHQuery(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\localblast.exe /Blastp.BBH.Query /query <query.fasta> /hit <hit.source> [/out <outDIR> /overrides /num_threads <-1>]
  Example:      localblast /Blastp.BBH.Query 
```

##### Help for command '/COG.Statics':

**Prototype**: LANS.SystemsBiology.NCBI.Extensions.CLI::Int32 COGStatics(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\localblast.exe /COG.Statics /in <myva_cogs.csv> [/locus <locus.txt/csv> /locuMap <Gene> /out <out.csv>]
  Example:      localblast /COG.Statics 
```

##### Help for command '/Copy.PTT':

**Prototype**: LANS.SystemsBiology.NCBI.Extensions.CLI::Int32 CopyPTT(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\localblast.exe /Copy.PTT /in <inDIR> [/out <outDIR>]
  Example:      localblast /Copy.PTT 
```

##### Help for command '/Copys':

**Prototype**: LANS.SystemsBiology.NCBI.Extensions.CLI::Int32 Copys(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\localblast.exe /Copys /imports <DIR> [/out <outDIR>]
  Example:      localblast /Copys 
```

##### Help for command '/Export.Blastn':

**Prototype**: LANS.SystemsBiology.NCBI.Extensions.CLI::Int32 ExportBlastn(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\localblast.exe /Export.Blastn /in <in.txt> [/out <out.csv>]
  Example:      localblast /Export.Blastn 
```

##### Help for command '/Export.blastnMaps':

**Prototype**: LANS.SystemsBiology.NCBI.Extensions.CLI::Int32 ExportBlastnMaps(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\localblast.exe /Export.blastnMaps /in <blastn.txt> [/out <out.csv>]
  Example:      localblast /Export.blastnMaps 
```

##### Help for command '/Export.BlastX':

**Prototype**: LANS.SystemsBiology.NCBI.Extensions.CLI::Int32 ExportBlastX(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\localblast.exe /Export.BlastX /in <blastx.txt> [/out <out.csv>]
  Example:      localblast /Export.BlastX 
```

##### Help for command '/EXPORT.COGs.from.DOOR':

**Prototype**: LANS.SystemsBiology.NCBI.Extensions.CLI::Int32 ExportDOORCogs(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\localblast.exe /EXPORT.COGs.from.DOOR /in <DOOR.opr> [/out <out.csv>]
  Example:      localblast /EXPORT.COGs.from.DOOR 
```

##### Help for command '/Export.gb':

**Prototype**: LANS.SystemsBiology.NCBI.Extensions.CLI::Int32 ExportPTTDb(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  Export the *.fna, *.faa, *.ptt file from the gbk file.
  Usage:        F:\GCModeller\GCModeller-x64\localblast.exe /Export.gb /gb <genbank.gb> [/out <outDIR>]
  Example:      localblast /Export.gb 
```

##### Help for command '/Export.gpff':

**Prototype**: LANS.SystemsBiology.NCBI.Extensions.CLI::Int32 EXPORTgpff(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\localblast.exe /Export.gpff /in <genome.gpff> /gff <genome.gff> [/out <out.PTT>]
  Example:      localblast /Export.gpff 
```

##### Help for command '/Export.gpffs':

**Prototype**: LANS.SystemsBiology.NCBI.Extensions.CLI::Int32 EXPORTgpffs(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\localblast.exe /Export.gpffs [/in <inDIR>]
  Example:      localblast /Export.gpffs 
```

##### Help for command '/Export.Locus':

**Prototype**: LANS.SystemsBiology.NCBI.Extensions.CLI::Int32 ExportLocus(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\localblast.exe /Export.Locus /in <sbh/bbh_DIR> [/hit /out <out.txt>]
  Example:      localblast /Export.Locus 
```

##### Help for command '/export.prot':

**Prototype**: LANS.SystemsBiology.NCBI.Extensions.CLI::Int32 ExportProt(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\localblast.exe /export.prot /gb <genome.gbk> [/out <out.fasta>]
  Example:      localblast /export.prot 
```

##### Help for command '/Identities.Matrix':

**Prototype**: LANS.SystemsBiology.NCBI.Extensions.CLI::Int32 IdentitiesMAT(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\localblast.exe /Identities.Matrix /hit <sbh/bbh.csv> [/out <out.csv> /cut 0.65]
  Example:      localblast /Identities.Matrix 
```

##### Help for command '/locus.Selects':

**Prototype**: LANS.SystemsBiology.NCBI.Extensions.CLI::Int32 LocusSelects(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\localblast.exe /locus.Selects /locus <locus.txt> /bh <bbhindex.csv> [/out <out.csv>]
  Example:      localblast /locus.Selects 
```

##### Help for command '/MAT.evalue':

**Prototype**: LANS.SystemsBiology.NCBI.Extensions.CLI::Int32 EvalueMatrix(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\localblast.exe /MAT.evalue /in <sbh.csv> [/out <mat.csv> /flip]
  Example:      localblast /MAT.evalue 
```

##### Help for command '/Merge.faa':

**Prototype**: LANS.SystemsBiology.NCBI.Extensions.CLI::Int32 MergeFaa(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\localblast.exe /Merge.faa /in <DIR> /out <out.fasta>
  Example:      localblast /Merge.faa 
```

##### Help for command '/Paralog':

**Prototype**: LANS.SystemsBiology.NCBI.Extensions.CLI::Int32 ExportParalog(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\localblast.exe /Paralog /blastp <blastp.txt> [/coverage 0.5 /identities 0.3 /out <out.csv>]
  Example:      localblast /Paralog 
```

##### Help for command '/Print':

**Prototype**: LANS.SystemsBiology.NCBI.Extensions.CLI::Int32 Print(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\localblast.exe /Print /in <inDIR> [/ext <ext> /out <out.Csv>]
  Example:      localblast /Print 
```

##### Help for command '/SBH.BBH.Batch':

**Prototype**: LANS.SystemsBiology.NCBI.Extensions.CLI::Int32 SBH_BBH_Batch(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\localblast.exe /SBH.BBH.Batch /in <sbh.DIR> [/identities <-1> /coverage <-1> /all /out <bbh.DIR> /num_threads <-1>]
  Example:      localblast /SBH.BBH.Batch 
```

##### Help for command '/SBH.Export.Large':

**Prototype**: LANS.SystemsBiology.NCBI.Extensions.CLI::Int32 ExportBBHLarge(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\localblast.exe /SBH.Export.Large /in <blast_out.txt> [/trim-kegg /out <bbh.csv> /identities 0.15 /coverage 0.5]
  Example:      localblast /SBH.Export.Large 
```



  Parameters information:
```
       [/trim-KEGG]
    Description:  If the fasta sequence source is comes from the KEGG database, and you want to removes the kegg species brief code for the locus_tag, then enable this option.

    Example:      /trim-KEGG ""


```

##### Help for command '/SBH.Trim':

**Prototype**: LANS.SystemsBiology.NCBI.Extensions.CLI::Int32 SBHTrim(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\localblast.exe /SBH.Trim /in <sbh.csv> /evalue <evalue> [/identities 0.15 /coverage 0.5 /out <out.csv>]
  Example:      localblast /SBH.Trim 
```

##### Help for command '/sbh2bbh':

**Prototype**: LANS.SystemsBiology.NCBI.Extensions.CLI::Int32 BBHExport2(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\localblast.exe /sbh2bbh /qvs <qvs.sbh.csv> /svq <svq.sbh.csv> [/identities <-1> /coverage <-1> /all /out <bbh.csv>]
  Example:      localblast /sbh2bbh 
```



  Parameters information:
```
       [/identities]
    Description:  Makes a further filtering on the bbh by using this option, default value is -1, so that this means no filter.

    Example:      /identities ""

   [/coverage]
    Description:  Makes a further filtering on the bbh by using this option, default value is -1, so that this means no filter.

    Example:      /coverage ""


```

##### Help for command '/Select.Meta':

**Prototype**: LANS.SystemsBiology.NCBI.Extensions.CLI::Int32 SelectsMeta(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\localblast.exe /Select.Meta /in <meta.Xml> /bbh <bbh.csv> [/out <out.csv>]
  Example:      localblast /Select.Meta 
```

##### Help for command '/SSBH2BH_LDM':

**Prototype**: LANS.SystemsBiology.NCBI.Extensions.CLI::Int32 KEGGSSOrtholog2Bh(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\localblast.exe /SSBH2BH_LDM /in <ssbh.csv> [/xml /coverage 0.8 /identities 0.3 /out <out.xml>]
  Example:      localblast /SSBH2BH_LDM 
```

##### Help for command '/SSDB.Export':

**Prototype**: LANS.SystemsBiology.NCBI.Extensions.CLI::Int32 KEGGSSDBExport(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\localblast.exe /SSDB.Export /in <inDIR> [/coverage 0.8 /identities 0.3 /out <out.Xml>]
  Example:      localblast /SSDB.Export 
```

##### Help for command '/venn.BBH':

**Prototype**: LANS.SystemsBiology.NCBI.Extensions.CLI::Int32 VennBBH(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  2. Build venn table And bbh data from the blastp result out Or sbh data cache.
  Usage:        F:\GCModeller\GCModeller-x64\localblast.exe /venn.BBH /imports <blastp_out.DIR> [/skip-load /query <queryName> /all /coverage <0.6> /identities <0.3> /out <outDIR>]
  Example:      localblast /venn.BBH 
```



  Parameters information:
```
       [/skip-load]
    Description:  If the data source in the imports directory Is already the sbh data source, then using this parameter to skip the blastp file parsing.

    Example:      /skip-load ""


```

##### Help for command '/venn.BlastAll':

**Prototype**: LANS.SystemsBiology.NCBI.Extensions.CLI::Int32 vennBlastAll(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  Completely paired combos blastp bbh operations for the venn diagram Or network builder.
  Usage:        F:\GCModeller\GCModeller-x64\localblast.exe /venn.BlastAll /query <queryDIR> /out <outDIR> [/num_threads <-1> /evalue 10 /overrides /all /coverage <0.8> /identities <0.3>]
  Example:      localblast /venn.BlastAll 
```



  Parameters information:
```
    /query
    Description:  Recommended format of the fasta title Is that the fasta title only contains gene locus_tag.

    Example:      /query ""

   [/num_threads]
    Description:  The number of the parallel blast task in this command, default value Is -1 which means the number of the blast threads Is determined by system automatically.

    Example:      /num_threads ""

   [/all]
    Description:  If this parameter Is represent, then all of the paired best hit will be export, otherwise only the top best will be export.

    Example:      /all ""


```

##### Help for command '/venn.cache':

**Prototype**: LANS.SystemsBiology.NCBI.Extensions.CLI::Int32 VennCache(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  1. [SBH_Batch] Creates the sbh cache data for the downstream bbh analysis. 
               And this batch function is suitable with any scale of the blastp sbh data output.
  Usage:        F:\GCModeller\GCModeller-x64\localblast.exe /venn.cache /imports <blastp.DIR> [/out <sbh.out.DIR> /coverage <0.6> /identities <0.3> /num_threads <-1> /overrides]
  Example:      localblast /venn.cache 
```



  Parameters information:
```
       [/num_threads]
    Description:  The number of the sub process thread. -1 value is stands for auto config by the system.

    Example:      /num_threads ""


```

##### Help for command '/venn.sbh.thread':

**Prototype**: LANS.SystemsBiology.NCBI.Extensions.CLI::Int32 SBHThread(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\localblast.exe /venn.sbh.thread /in <blastp.txt> [/out <out.sbh.csv> /coverage <0.6> /identities <0.3> /overrides]
  Example:      localblast /venn.sbh.thread 
```

##### Help for command '/Venn.Single':

**Prototype**: LANS.SystemsBiology.NCBI.Extensions.CLI::Int32 VennSingle(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\localblast.exe /Venn.Single /in <besthits.Xml> [/out <out.csv>]
  Example:      localblast /Venn.Single 
```

##### Help for command '--bbh.export':

**Prototype**: LANS.SystemsBiology.NCBI.Extensions.CLI::Int32 ExportBBH(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  Batch export bbh result data from a directory.
  Usage:        F:\GCModeller\GCModeller-x64\localblast.exe --bbh.export /in <blast_out.DIR> [/all /out <out.DIR> /single-query <queryName> /coverage <0.5> /identities 0.15]
  Example:      localblast --bbh.export 
```



  Parameters information:
```
       [/all]
    Description:  If this all Boolean value is specific, then the program will export all hits for the bbh not the top 1 best.

    Example:      /all ""


```

##### Help for command 'blast':

**Prototype**: LANS.SystemsBiology.NCBI.Extensions.CLI::Int32 BLASTA(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  In order to draw as venn diagram for a specific set of genome and study the diferrence and consists between these genomes, you should do the blast operation from the protein amino aciad sequence first. The blastp operation can be performenced by the blast+ program which you can download from the NCBI website, this command is a interop service for the NCBI blast program, you should install the blast+ program at first.
  Usage:        F:\GCModeller\GCModeller-x64\localblast.exe blast -i <file_directory> -blast_bin <BLAST_program_directory> -program <program_type_name> [-ld <log_dir> -xld <xml_log_dir>]
  Example:      localblast blast blast -i /home/xieguigang/GCModeller/examples/blast_test/ -ld ~/Desktop/logs -xld ~/Desktop/xmls -blast_bin ~/BLAST/bin
```



  Parameters information:
```
    -i
    Description:  The input data directory which is contains the FASTA format protein amino acid sequence data file.

    Example:      -i "~/Desktop/8004"

-blast_bin
    Description:  The localtion for the blast+ program, you should specific this switch value or this program will throw an exception.

    Example:      -blast_bin "~/BLAST/bin"

-program
    Description:  The program type name for the NCBI local blast executable assembly.

    Example:      -program "blast+"

   [-xld]
    Description:  Optional, the parsed and well organized blast log file output directory, if this switch value is not specific by the user then the user desktop directoy will be used as default.

    Example:      -xld "~/Desktop/xml_logs"

   [-ld]
    Description:  Optional, the blastp log file output directory for the NCBI blast+ program. If this switch value is not specific by the user then the user desktop directory will be specific for the logs file output as default.

    Example:      -ld "~/Desktop/logs/"


```

##### Help for command '--blast.self':

**Prototype**: LANS.SystemsBiology.NCBI.Extensions.CLI::Int32 SelfBlast(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\localblast.exe --blast.self /query <query.fasta> [/blast <blast_HOME> /out <out.csv>]
  Example:      localblast --blast.self 
```

##### Help for command '-copy':

**Prototype**: LANS.SystemsBiology.NCBI.Extensions.CLI::Int32 Copy(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\localblast.exe -copy -i <index_file> -os <output_saved> [-osidx <id_column_index> -os_skip_first <T/F>]
  Example:      localblast -copy 
```

##### Help for command '--Export.Fasta':

**Prototype**: LANS.SystemsBiology.NCBI.Extensions.CLI::Int32 ExportFasta(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\localblast.exe --Export.Fasta /hits <query-hits.csv> /query <query.fasta> /subject <subject.fasta>
  Example:      localblast --Export.Fasta 
```

##### Help for command '--Export.Overviews':

**Prototype**: LANS.SystemsBiology.NCBI.Extensions.CLI::Int32 ExportOverviews(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\localblast.exe --Export.Overviews /blast <blastout.txt> [/out <overview.csv>]
  Example:      localblast --Export.Overviews 
```

##### Help for command '--Export.SBH':

**Prototype**: LANS.SystemsBiology.NCBI.Extensions.CLI::Int32 ExportSBH(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\localblast.exe --Export.SBH /in <in.DIR> /prefix <queryName> /out <out.csv> [/txt]
  Example:      localblast --Export.SBH 
```

##### Help for command '-export_besthit':

**Prototype**: LANS.SystemsBiology.NCBI.Extensions.CLI::Int32 ExportBestHit(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\localblast.exe -export_besthit -i <input_csv_file> -o <output_saved_csv>
  Example:      localblast -export_besthit 
```

##### Help for command 'grep':

**Prototype**: LANS.SystemsBiology.NCBI.Extensions.CLI::Int32 Grep(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  The gene id in the blast output log file are not well format for reading and program processing, so before you generate the venn diagram you should call this command to parse the gene id from the log file. You can also done this id parsing job using other tools.
  Usage:        F:\GCModeller\GCModeller-x64\localblast.exe grep -i <xml_log_file> -q <script_statements> -h <script_statements>
  Example:      localblast grep grep -i C:\Users\WORKGROUP\Desktop\blast_xml_logs\1__8004_ecoli_prot.log.xml -q "tokens | 4" -h "'tokens | 2';'tokens ' ' 0'"
```



  Parameters information:
```
    -q
    Description:  The parsing script for parsing the gene_id from the blast log file, this switch value is consist of sevral operation tokens, and each token is separate by the ';' character and the token unit in each script token should seperate by the ' character.
              There are two basic operation in this parsing script:
               tokens - Split the query or hit name string into sevral piece of string by the specific delimiter character and           get the specifc location unit in the return string array.
                 Usage:   tokens <delimiter> <position>
                 Example: tokens | 3 match - match a gene id using a specific pattern regular expression.
                 usage:   match <regular_expression>
                 Example: match .+[-]\d{5}

    Example:      -q "'tokens | 5';'match .+[-].+'"

-h
    Description:  The parsing script for parsing the gene_id from the blast log file, this switch value is consist of sevral operation tokens, and each token is separate by the ';' character and the token unit in each script token should seperate by the ' character.
              There are two basic operation in this parsing script:
               tokens - Split the query or hit name string into sevral piece of string by the specific delimiter character and           get the specifc location unit in the return string array.
                 Usage:   tokens <delimiter> <position>
                 Example: tokens | 3 match - match a gene id using a specific pattern regular expression.
                 usage:   match <regular_expression>
                 Example: match .+[-]\d{5}

    Example:      -h "'tokens | 5';'match .+[-].+'"


```

##### Help for command 'logs_analysis':

**Prototype**: LANS.SystemsBiology.NCBI.Extensions.CLI::Int32 Analysis(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  Parsing the xml format blast log into a csv data file that use for venn diagram drawing.
  Usage:        F:\GCModeller\GCModeller-x64\localblast.exe logs_analysis -d <xml_logs_directory> -export <export_csv_file>
  Example:      localblast logs_analysis logs_analysis -d ~/xml_logs -export ~/Desktop/result.csv
```



  Parameters information:
```
    -d
    Description:  The data directory which contains the xml format blast log file, those xml format log file were generated from the 'venn -> blast' command.

    Example:      -d "~/xml_logs"

-export
    Description:  The save file path for the venn diagram drawing data csv file.

    Example:      -export "~/Documents/8004_venn.csv"


```

##### Help for command 'merge':

**Prototype**: LANS.SystemsBiology.NCBI.Extensions.CLI::Int32 Merge(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  This program can not use the blast parsing result for the venn diagram drawing operation, and this command is using for generate the drawing data for the venn diagram drawing command, this command merge the blast log parsing result and then using the parsing result for drawing a venn diagram.
  Usage:        F:\GCModeller\GCModeller-x64\localblast.exe merge -d <directory> -o <output_file>
  Example:      localblast merge merge -d ~/blast_besthit/ -o ~/Desktop/compared.csv
```



  Parameters information:
```
    -d
    Description:  The directory that contains some blast log parsing csv data file.

    Example:      -d "~/Desktop/blast/result/"

-o
    Description:  The save file name for the output result, the program willl save the merge result in the csv format

    Example:      -o "~/Desktop/8004_venn.csv"


```

##### Help for command '-merge_besthit':

**Prototype**: LANS.SystemsBiology.NCBI.Extensions.CLI::Int32 MergeBestHits(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\localblast.exe -merge_besthit -i <input_file_list> -o <output_file> -os <original_idlist_sequence_file> [-osidx <id_column_index> -os_skip_first <T/F>]
  Example:      localblast -merge_besthit 
```



  Parameters information:
```
    -i
    Description:  Each file path in the filelist should be separated by a "|" character.

    Example:      -i ""


```

##### Help for command '--Xml2Excel':

**Prototype**: LANS.SystemsBiology.NCBI.Extensions.CLI::Int32 XmlToExcel(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\localblast.exe --Xml2Excel /in <in.xml> [/out <out.csv>]
  Example:      localblast --Xml2Excel 
```

##### Help for command '--Xml2Excel.Batch':

**Prototype**: LANS.SystemsBiology.NCBI.Extensions.CLI::Int32 XmlToExcelBatch(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\localblast.exe --Xml2Excel.Batch /in <inDIR> [/out <outDIR> /Merge]
  Example:      localblast --Xml2Excel.Batch 
```

