---
title: OverlapDeNovoAssembly
---

# OverlapDeNovoAssembly
_namespace: [Bio.Algorithms.Assembly](N-Bio.Algorithms.Assembly.html)_

OverlapDeNovoAssembly is a implementation of IOverlapDeNovoAssembly that stores the 
 assembly result.
 This class contains list of contigs and list of unmerged sequences.
 To maintain the information like history or context, use Documentation property of this class.

### Methods

#### #ctor
```csharp
Bio.Algorithms.Assembly.OverlapDeNovoAssembly.#ctor
```
Initializes a new instance of the OverlapDeNovoAssembly class.
 Default constructor.

#### ToString
```csharp
Bio.Algorithms.Assembly.OverlapDeNovoAssembly.ToString
```
Converts the list of contigs to string.
_returns: contigs data_



### Properties

#### AssembledSequences
Gets the list of assembled sequences.
#### contigs
Gets list of contigs created after Assembly.
#### Documentation
Gets or sets the Documentation object is intended for tracking the history, provenance,
 and experimental context of a OverlapDeNovoAssembly. The user can adopt any desired
 convention for use of this object.
#### unmergedSequences
Gets list of sequences that could not be merged into any contig.

