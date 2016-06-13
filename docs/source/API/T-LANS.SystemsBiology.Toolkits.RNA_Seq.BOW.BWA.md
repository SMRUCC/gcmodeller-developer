---
title: BWA
---

# BWA
_namespace: [LANS.SystemsBiology.Toolkits.RNA_Seq.BOW](N-LANS.SystemsBiology.Toolkits.RNA_Seq.BOW.html)_

Program: bwa (alignment via Burrows-Wheeler transformation)
 Contact: Heng Li <lh3@sanger.ac.uk>

### Methods

#### Bwasw
```csharp
LANS.SystemsBiology.Toolkits.RNA_Seq.BOW.BWA.Bwasw
```
BWA-SW for long queries

#### Bwt2sa
```csharp
LANS.SystemsBiology.Toolkits.RNA_Seq.BOW.BWA.Bwt2sa
```
generate SA from BWT and Occ

#### Bwtupdate
```csharp
LANS.SystemsBiology.Toolkits.RNA_Seq.BOW.BWA.Bwtupdate
```
update .bwt to the new format

#### Fa2pac
```csharp
LANS.SystemsBiology.Toolkits.RNA_Seq.BOW.BWA.Fa2pac
```
convert FASTA to PAC format

#### Fastmap
```csharp
LANS.SystemsBiology.Toolkits.RNA_Seq.BOW.BWA.Fastmap
```
identify super-maximal exact matches

#### Index
```csharp
LANS.SystemsBiology.Toolkits.RNA_Seq.BOW.BWA.Index(System.String,System.String)
```
index sequences in the FASTA format

#### Pac2bwt
```csharp
LANS.SystemsBiology.Toolkits.RNA_Seq.BOW.BWA.Pac2bwt
```
generate BWT from PAC

#### Pac2bwtgen
```csharp
LANS.SystemsBiology.Toolkits.RNA_Seq.BOW.BWA.Pac2bwtgen
```
alternative algorithm for generating BWT

#### Pac2cspac
```csharp
LANS.SystemsBiology.Toolkits.RNA_Seq.BOW.BWA.Pac2cspac
```
convert PAC to color-space PAC

#### PaireEndMapping
```csharp
LANS.SystemsBiology.Toolkits.RNA_Seq.BOW.BWA.PaireEndMapping(System.String,System.String,System.String,System.String)
```
双向测序的数据

|Parameter Name|Remarks|
|--------------|-------|
|Left|left fastq|
|Right|right fastq|
|Reference|参考基因组的fasta序列的文件路径|


#### Sampe
```csharp
LANS.SystemsBiology.Toolkits.RNA_Seq.BOW.BWA.Sampe(System.String,System.String,System.String,System.String,System.String,System.String)
```
generate alignment (paired ended)

#### Samse
```csharp
LANS.SystemsBiology.Toolkits.RNA_Seq.BOW.BWA.Samse(System.String,System.String,System.String,System.String)
```
Generate alignment (single ended)

#### SingleEndMapping
```csharp
LANS.SystemsBiology.Toolkits.RNA_Seq.BOW.BWA.SingleEndMapping(System.String,System.String,System.String)
```
Mapping单项测序的数据

#### Stdsw
```csharp
LANS.SystemsBiology.Toolkits.RNA_Seq.BOW.BWA.Stdsw
```
standard SW/NW alignment



### Properties

#### ALN_SA_COORDINATES
bwa aln -c -t 3 -f {leftreads.sai} {reference.fa} {leftreads.fastq}

