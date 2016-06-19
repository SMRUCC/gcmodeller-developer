﻿---
title: DBI
---

# DBI
_namespace: [LANS.SystemsBiology.AnalysisTools.ProteinTools.Sanger.PfamHMMScan](N-LANS.SystemsBiology.AnalysisTools.ProteinTools.Sanger.PfamHMMScan.html)_

Retrieve hidden Markov model (HMM) profile from PFAM database



### Methods

#### GetHMMprof
```csharp
LANS.SystemsBiology.AnalysisTools.ProteinTools.Sanger.PfamHMMScan.DBI.GetHMMprof(System.Int32)
```
HMMStruct = gethmmprof(PFAMNumber) determines a protein family accession number from PFAMNumber (an integer), 
 searches the PFAM database for the associated record, retrieves the HMM profile information, 
 and stores it in HMMStruct, a MATLAB structure.

|Parameter Name|Remarks|
|--------------|-------|
|PFAMNumber|
 Integer specifying a protein family number of an HMM profile record in the PFAM database. For example, 2 is the protein family number for the protein family 'PF00002'.
 |


