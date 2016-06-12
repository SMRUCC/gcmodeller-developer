---
title: Assembler
tags: [maunal, tools]
date: 6/13/2016 12:26:14 AM
---
# Assembler [version 3.0.34.0]
**Module AssemblyName**: file:///F:/GCModeller/GCModeller-x64/Assembler.exe
**Root namespace**: LANS.SystemsBiology.Toolkits.RNA_Seq.Assembler.CLI


All of the command that available in this program has been list below:

|Function API|Info|
|------------|----|
|/Export|Exports the result of fq reads aligned to the target genome using blastn.|
|/Trim.Mappings|Removes the not-unique reads and not perfect aligned reads from the mapping result.|
|-assemble||
|-assemble.Task||
|--Data.Views|Display the brief summary information about your blastn mapping data.|
|--Genemark||
|-Merge||
|--parse.GeneMark||
|-Split|Split the transcript loci data into different files base on the location relationship between the loci and their associated genes.|
|-Trim||

## Commands
--------------------------
##### Help for command '/Export':

**Prototype**: LANS.SystemsBiology.Toolkits.RNA_Seq.Assembler.CLI::Int32 ExportBlastnMapping(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  Exports the result of fq reads aligned to the target genome using blastn.
  Usage:        F:\GCModeller\GCModeller-x64\Assembler.exe /Export -blastn <blastn_log> [-out <saved_csv>]
  Example:      Assembler /Export 
```

##### Help for command '/Trim.Mappings':

**Prototype**: LANS.SystemsBiology.Toolkits.RNA_Seq.Assembler.CLI::Int32 TrimMappingResult(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  Removes the not-unique reads and not perfect aligned reads from the mapping result.
  Usage:        F:\GCModeller\GCModeller-x64\Assembler.exe /Trim.Mappings /in <blastn_mappings.csv> [/out <out.csv>]
  Example:      Assembler /Trim.Mappings 
```



  Parameters information:
```
    /in
    Description:  Mappings result on the reference genome.

    Example:      /in ""

   [/out]
    Description:  The excel sheet file location for saving the result.

    Example:      /out ""


```

##### Help for command '-assemble':

**Prototype**: LANS.SystemsBiology.Toolkits.RNA_Seq.Assembler.CLI::Int32 Assembler(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\Assembler.exe -assemble /parser <blastnMapping/sam> /reads <readsFile/source> [/Merge.Source -out <out_csv> /ptt <ptt> /trim -delta 35 -TSSs.threshold 30 /ATG.Dist 500]
  Example:      Assembler -assemble 
```



  Parameters information:
```
    /reads
    Description:  The parameter can be both reads file or a directory which contains some reads file base on the 
switch parameter /Merge.Source is exists or not. When /Merge.Source is represented then this parameter value is indicates 
a directory source, and all of the reads file in that directory will be merged into a big source.

    Example:      /reads ""


```

##### Help for command '-assemble.Task':

**Prototype**: LANS.SystemsBiology.Toolkits.RNA_Seq.Assembler.CLI::Int32 AssemblerTask(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\Assembler.exe /parser <blastnMapping/sam> /source <dir> [-out <out_dir> /ptt <ptt> /trim -delta 40 -TSSs.threshold 30]
  Example:      Assembler -assemble.Task 
```

##### Help for command '--Data.Views':

**Prototype**: LANS.SystemsBiology.Toolkits.RNA_Seq.Assembler.CLI::Int32 DataView(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  Display the brief summary information about your blastn mapping data.
  Usage:        F:\GCModeller\GCModeller-x64\Assembler.exe --Data.Views -in &lt;blastnMapping.csv>
  Example:      Assembler --Data.Views 
```

##### Help for command '--Genemark':

**Prototype**: LANS.SystemsBiology.Toolkits.RNA_Seq.Assembler.CLI::Int32 GeneMark(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\Assembler.exe --Genemark /in <anno.fasta> [/not-bacterial /liner]
  Example:      Assembler --Genemark 
```

##### Help for command '-Merge':

**Prototype**: LANS.SystemsBiology.Toolkits.RNA_Seq.Assembler.CLI::Int32 Merge(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\Assembler.exe -Merge /source <dir> [/support.Trim 30 -out <out_Csv> /delta 3]
  Example:      Assembler -Merge 
```

##### Help for command '--parse.GeneMark':

**Prototype**: LANS.SystemsBiology.Toolkits.RNA_Seq.Assembler.CLI::Int32 ParseGeneMark(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\Assembler.exe --parse.GeneMark /doc <geneMark.txt> [/nt <nt.fasta> /out <out.dir>]
  Example:      Assembler --parse.GeneMark 
```

##### Help for command '-Split':

**Prototype**: LANS.SystemsBiology.Toolkits.RNA_Seq.Assembler.CLI::Int32 Split(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  Split the transcript loci data into different files base on the location relationship between the loci and their associated genes.
  Usage:        F:\GCModeller\GCModeller-x64\Assembler.exe -Split -input <TranscriptInputs> [-out <ExportDir>]
  Example:      Assembler -Split 
```

##### Help for command '-Trim':

**Prototype**: LANS.SystemsBiology.Toolkits.RNA_Seq.Assembler.CLI::Int32 Trim(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\Assembler.exe -Trim -in <Transcripts.csv> [-SharedReads 30]
  Example:      Assembler -Trim 
```

