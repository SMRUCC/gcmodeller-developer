---
title: Search
tags: [maunal, tools]
date: 6/13/2016 12:26:42 AM
---
# FindKeyWord [version 1.0.0.0]
**Module AssemblyName**: file:///F:/GCModeller/GCModeller-x64/Search.exe
**Root namespace**: FindKeyWord.CLI


All of the command that available in this program has been list below:

|Function API|Info|
|------------|----|
|/Find.Email||
|/Find.URL||
|/Tails||
|Find|Find target file by search text content in the files.|
|Peeks||
|--search||

## Commands
--------------------------
##### Help for command '/Find.Email':

**Prototype**: FindKeyWord.CLI::Int32 FoundEMails(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\Search.exe /Find.Email /in <inFile/inText> [/out <out.txt>]
  Example:      Search /Find.Email 
```

##### Help for command '/Find.URL':

**Prototype**: FindKeyWord.CLI::Int32 FoundURLs(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\Search.exe /Find.URL /in <inFile/inText> [/out <out.txt>]
  Example:      Search /Find.URL 
```

##### Help for command '/Tails':

**Prototype**: FindKeyWord.CLI::Int32 Tails(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\Search.exe /Tails /in <in.txt> [/len 1024 /out <out.txt>]
  Example:      Search /Tails 
```

##### Help for command 'Find':

**Prototype**: FindKeyWord.CLI::Int32 Found(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  Find target file by search text content in the files.
  Usage:        F:\GCModeller\GCModeller-x64\Search.exe Find /regex /filtering --key <expression> [--dir <dir> --ext <ext_list>]
  Example:      Search Find 
```



  Parameters information:
```
    --key
    Description:  The keyword or regular expression that using for the text search.

    Example:      --key ""

   [--ext]
    Description:  No format limitations.

    Example:      --ext ""

   [--dir]
    Description:  The directory which the files searches for, if this parameter is not presented, then the current work directory will be used.

    Example:      --dir ""


```

##### Help for command 'Peeks':

**Prototype**: FindKeyWord.CLI::Int32 Peeks(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\Search.exe Peeks /in <input.txt> [/length 1024 /out <out.txt>]
  Example:      Search Peeks 
```

##### Help for command '--search':

**Prototype**: FindKeyWord.CLI::Int32 Search(Microsoft.VisualBasic.CommandLine.CommandLine)

```
  Information:  
  Usage:        F:\GCModeller\GCModeller-x64\Search.exe --search /in <in.txt/text> /text <content.txt/text> /out <out.txt> [/min <3> /max <20> /cutoff <0.6>]
  Example:      Search --search 
```

