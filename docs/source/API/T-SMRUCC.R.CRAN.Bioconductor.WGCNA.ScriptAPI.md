---
title: ScriptAPI
---

# ScriptAPI
_namespace: [SMRUCC.R.CRAN.Bioconductor.WGCNA](N-SMRUCC.R.CRAN.Bioconductor.WGCNA.html)_



### Methods

#### allowWGCNAThreads
```csharp
SMRUCC.R.CRAN.Bioconductor.WGCNA.ScriptAPI.allowWGCNAThreads(System.String)
```
allowWGCNAThreads enables parallel calculation within the compiled code in WGCNA, principally for calculation of correlations in the presence of missing data. This function is now deprecated; use enableWGCNAThreads instead.

|Parameter Name|Remarks|
|--------------|-------|
|nThreads|
 Number of threads to allow. If not given, the number of processors online (as reported by system configuration) will be used. 
 There appear to be some cases where the automatically-determined number is wrong; please check the output to see that the number of threads makes sense. 
 Except for testing and/or torturing your system, the number of threads should be no more than the number of actual processors/cores.
 |

_returns: allowWGCNAThreads, enableWGCNAThreads, and disableWGCNAThreads return the maximum number of threads WGCNA calculations will be allowed to use._

#### disableWGCNAThreads
```csharp
SMRUCC.R.CRAN.Bioconductor.WGCNA.ScriptAPI.disableWGCNAThreads
```
disableWGCNAThreads disables parallel processing.
_returns: allowWGCNAThreads, enableWGCNAThreads, and disableWGCNAThreads return the maximum number of threads WGCNA calculations will be allowed to use._

#### enableWGCNAThreads
```csharp
SMRUCC.R.CRAN.Bioconductor.WGCNA.ScriptAPI.enableWGCNAThreads(System.String)
```
enableWGCNAThreads enables parallel calculations within user-level R functions as well as within the compiled code, and registers an appropriate parallel calculation back-end for the operating system/platform.

|Parameter Name|Remarks|
|--------------|-------|
|nThreads|
 Number of threads to allow. If not given, the number of processors online (as reported by system configuration) will be used. 
 There appear to be some cases where the automatically-determined number is wrong; please check the output to see that the number of threads makes sense. 
 Except for testing and/or torturing your system, the number of threads should be no more than the number of actual processors/cores.
 |

_returns: allowWGCNAThreads, enableWGCNAThreads, and disableWGCNAThreads return the maximum number of threads WGCNA calculations will be allowed to use._

#### WGCNAnThreads
```csharp
SMRUCC.R.CRAN.Bioconductor.WGCNA.ScriptAPI.WGCNAnThreads
```
WGCNAnThreads returns the number of threads (parallel processes) that WGCNA is currently configured to run with.
_returns: allowWGCNAThreads, enableWGCNAThreads, and disableWGCNAThreads return the maximum number of threads WGCNA calculations will be allowed to use._




