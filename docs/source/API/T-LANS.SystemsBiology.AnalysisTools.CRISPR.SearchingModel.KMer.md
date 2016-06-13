---
title: KMer
---

# KMer
_namespace: [LANS.SystemsBiology.AnalysisTools.CRISPR.SearchingModel](N-LANS.SystemsBiology.AnalysisTools.CRISPR.SearchingModel.html)_

An occurrence of a CRISPR. Repetitive sequences are detected by reading a small search window 
 and then scanning ahead for exact k-mer matches separated by a similar distance.
 
 (一个可能的CRISPR位点)

### Methods

#### __sequenceScan
```csharp
LANS.SystemsBiology.AnalysisTools.CRISPR.SearchingModel.KMer.__sequenceScan(LANS.SystemsBiology.SequenceModel.NucleotideModels.NucleicAcid,System.Int32,LANS.SystemsBiology.AnalysisTools.CRISPR.SearchingModel.CRISPR,System.Int32,System.Int32,System.Double)
```
scan to the right and left of the first and last repeat to see if there is a region
that is similar to the repeats. necessary in case we missed a repeat because of
inexact matches or a result of one of the filters

|Parameter Name|Remarks|
|--------------|-------|
|side|-|
|candidateCRISPR|-|
|minSpacerLength|-|
|scanRange|-|
|confidence|-|


#### GetActualRepeatLength
```csharp
LANS.SystemsBiology.AnalysisTools.CRISPR.SearchingModel.KMer.GetActualRepeatLength(LANS.SystemsBiology.SequenceModel.NucleotideModels.NucleicAcid,LANS.SystemsBiology.AnalysisTools.CRISPR.SearchingModel.CRISPR,LANS.SystemsBiology.AnalysisTools.CRISPR.SearchingModel.KmerProfile,System.Double)
```
identified repeats may represent only a subset of a larger repeat. this method extends these
 repeats as long as they continue to match within some range. assumes there are at least two repeats

|Parameter Name|Remarks|
|--------------|-------|
|nt|-|
|candidateCRISPR|-|


#### HasNonRepeatingSpacers
```csharp
LANS.SystemsBiology.AnalysisTools.CRISPR.SearchingModel.KMer.HasNonRepeatingSpacers(LANS.SystemsBiology.AnalysisTools.CRISPR.SearchingModel.CRISPR,System.Double)
```
Checks first five spacers

|Parameter Name|Remarks|
|--------------|-------|
|candidateCRISPR|-|
|maxSimilarity|-|





