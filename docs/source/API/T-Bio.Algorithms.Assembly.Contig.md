---
title: Contig
---

# Contig
_namespace: [Bio.Algorithms.Assembly](N-Bio.Algorithms.Assembly.html)_

Contig is a data storage object representing a set of sequences
 that have been assembled into a new, longer sequence.

### Methods

#### ToString
```csharp
Bio.Algorithms.Assembly.Contig.ToString
```
Converts Consensus Sequence data to string.
_returns: Consensus Sequence Data._



### Properties

#### Consensus
Gets or sets a sequence derived from the input sequences as assembled, representing the
 contents of the whole range of the contig.
 
 This is built by an IConsensusMethod.
#### Length
Gets the length of the contig equals the length of its consensus.
#### sequences
Gets or sets the set of sequences that have been assembled to form the contig.

