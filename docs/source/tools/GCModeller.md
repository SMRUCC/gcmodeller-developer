---
title: GCModeller
tags: [maunal, tools]
date: 6/13/2016 12:26:37 AM
---
# GCModeller [version 1.0.2.3]
**Module AssemblyName**: file:///F:/GCModeller/GCModeller-x64/GCModeller.exe
**Root namespace**: LANS.SystemsBiology.GCModeller.CLI


All of the command that available in this program has been list below:

|Function API|Info|
|------------|----|
|/Draw.Comparative||
|/init.manuals||
|/Install.genbank||
|/Located.AppData||
|/Visual.BBH||
|--Drawing.ChromosomeMap|Drawing the chromosomes map from the PTT object as the basically genome information source.|
|--Drawing.ClustalW||
|export|Export the calculation data from a specific data table in the mysql database server.|
|--Gendist.From.Self.Overviews||
|--Gendist.From.SelfMPAlignment||
|--Get.Subset.lstID||
|help|Show help information about this program.|
|-imports||
|--install.MYSQL||
|--install-CDD||
|--install-COGs|Install the COGs database into the GCModeller database.|
|--Interpro.Build||
|--ls|Listing all of the available GCModeller CLI tools commands.|
|--user.create||

## Commands
--------------------------
##### Help for command '/Draw.Comparative':

**Prototype**: LANS.SystemsBiology.GCModeller.CLI::Int32 DrawMultipleAlignments(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\GCModeller.exe /Draw.Comparative /in <meta.Xml> /PTT <PTT_DIR> [/out <outDIR>]
  Example:      GCModeller /Draw.Comparative 
```

##### Help for command '/init.manuals':

**Prototype**: LANS.SystemsBiology.GCModeller.CLI::Int32 InitManuals(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\GCModeller.exe /init.manuals
  Example:      GCModeller /init.manuals 
```

##### Help for command '/Install.genbank':

**Prototype**: LANS.SystemsBiology.GCModeller.CLI::Int32 InstallGenbank(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\GCModeller.exe /Install.genbank /imports <all_genbanks.DIR> [/refresh]
  Example:      GCModeller /Install.genbank 
```

##### Help for command '/Located.AppData':

**Prototype**: LANS.SystemsBiology.GCModeller.CLI::Int32 LocatedAppData(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\GCModeller.exe 
  Example:      GCModeller /Located.AppData 
```

##### Help for command '/Visual.BBH':

**Prototype**: LANS.SystemsBiology.GCModeller.CLI::Int32 BBHVisual(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\GCModeller.exe /Visual.BBH /in <bbh.Xml> /PTT <genome.PTT> /density <genomes.density.DIR> [/limits <sp-list.txt> /out <image.png>]
  Example:      GCModeller /Visual.BBH 
```



  Parameters information:
```
    /PTT
    Description:  A directory which contains all of the information data files for the reference genome, 
                   this directory would includes *.gb, *.ptt, *.gff, *.fna, *.faa, etc.

    Example:      /PTT ""


```

##### Help for command '--Drawing.ChromosomeMap':

**Prototype**: LANS.SystemsBiology.GCModeller.CLI::Int32 DrawingChrMap(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  Drawing the chromosomes map from the PTT object as the basically genome information source.
  Usage:        F:\GCModeller\GCModeller-x64\GCModeller.exe --Drawing.ChromosomeMap /ptt <genome.ptt> [/conf <config.inf> /out <dir.export> /COG <cog.csv>]
  Example:      GCModeller --Drawing.ChromosomeMap 
```

##### Help for command '--Drawing.ClustalW':

**Prototype**: LANS.SystemsBiology.GCModeller.CLI::Int32 DrawClustalW(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\GCModeller.exe --Drawing.ClustalW /in <align.fasta> [/out <out.png> /dot.Size 10]
  Example:      GCModeller --Drawing.ClustalW 
```

##### Help for command 'export':

**Prototype**: LANS.SystemsBiology.GCModeller.CLI::Int32 ExportData(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  Export the calculation data from a specific data table in the mysql database server.
  Usage:        F:\GCModeller\GCModeller-x64\GCModeller.exe export -mysql <mysql_connection_string> [-o <output_save_file/dir> -t <table_name>]
  Example:      GCModeller export export -t all -o ~/Desktop/ -mysql "http://localhost:8080/client?user=username%password=password%database=database"
```



  Parameters information:
```
    -mysql
    Description:  The mysql connection string for gc program connect to a specific mysql database server.

    Example:      -mysql "http://localhost:8080/client?user=username%password=password%database=database"

   [-t]
    Description:  Optional, The target table name for export the data set, there is a option value for this switch: all.
 <name> - export the data in the specific name of the table;
 all - Default, export all of the table in the database, and at the mean time the -o switch value will be stand for the output directory of the exported csv files.

    Example:      -t "all"

   [-o]
    Description:  Optional, The path of the export csv file save, it can be a directory or a file path, depend on the value of the -t switch value.
Default is desktop directory and table name combination

    Example:      -o "~/Desktop/"


```

##### Help for command '--Gendist.From.Self.Overviews':

**Prototype**: LANS.SystemsBiology.GCModeller.CLI::Int32 SelfOverviewAsMAT(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\GCModeller.exe --Gendist.From.Self.Overviews /blast_out <blast_out.txt>
  Example:      GCModeller --Gendist.From.Self.Overviews 
```

##### Help for command '--Gendist.From.SelfMPAlignment':

**Prototype**: LANS.SystemsBiology.GCModeller.CLI::Int32 SelfMPAlignmentAsMAT(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\GCModeller.exe --Gendist.From.SelfMPAlignment /aln <mpalignment.csv>
  Example:      GCModeller --Gendist.From.SelfMPAlignment 
```

##### Help for command '--Get.Subset.lstID':

**Prototype**: LANS.SystemsBiology.GCModeller.CLI::Int32 GetSubsetID(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\GCModeller.exe --Get.Subset.lstID /subset <lstID.txt> /lstID <lstID.csv>
  Example:      GCModeller --Get.Subset.lstID 
```

##### Help for command 'help':

**Prototype**: LANS.SystemsBiology.GCModeller.CLI::Int32 About()

```
  Information:  Show help information about this program.
  Usage:        F:\GCModeller\GCModeller-x64\GCModeller.exe gc help
  Example:      GCModeller help gc help
```

##### Help for command '-imports':

**Prototype**: LANS.SystemsBiology.GCModeller.CLI::Int32 Imports(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\GCModeller.exe -imports <genbank_file/genbank_directory>
  Example:      GCModeller -imports 
```

##### Help for command '--install.MYSQL':

**Prototype**: LANS.SystemsBiology.GCModeller.CLI::Int32 InstallMySQL(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\GCModeller.exe --install.MYSQL /user <userName> /pass <password> /repository <host_ipAddress> [/port 3306 /database <GCModeller>]
  Example:      GCModeller --install.MYSQL 
```

##### Help for command '--install-CDD':

**Prototype**: LANS.SystemsBiology.GCModeller.CLI::Int32 InstallCDD(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\GCModeller.exe --install-CDD /cdd <cdd.DIR>
  Example:      GCModeller --install-CDD 
```

##### Help for command '--install-COGs':

**Prototype**: LANS.SystemsBiology.GCModeller.CLI::Int32 InstallCOGs(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  Install the COGs database into the GCModeller database.
  Usage:        F:\GCModeller\GCModeller-x64\GCModeller.exe --install-COGs /COGs <Dir.COGs>
  Example:      GCModeller --install-COGs 
```

##### Help for command '--Interpro.Build':

**Prototype**: LANS.SystemsBiology.GCModeller.CLI::Int32 BuildFamilies(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\GCModeller.exe --Interpro.Build /xml <interpro.xml>
  Example:      GCModeller --Interpro.Build 
```

##### Help for command '--ls':

**Prototype**: LANS.SystemsBiology.GCModeller.CLI::Int32 List(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  Listing all of the available GCModeller CLI tools commands.
  Usage:        F:\GCModeller\GCModeller-x64\GCModeller.exe 
  Example:      GCModeller --ls 
```

##### Help for command '--user.create':

**Prototype**: LANS.SystemsBiology.GCModeller.CLI::Int32 Register(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\GCModeller.exe 
  Example:      GCModeller --user.create 
```

