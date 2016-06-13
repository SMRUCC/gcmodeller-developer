---
title: ComparativeGenomeAssembler
---

# ComparativeGenomeAssembler
_namespace: [Bio.Algorithms.Assembly.Comparative](N-Bio.Algorithms.Assembly.Comparative.html)_

Implements a comparative genome assembly for
 assembly of DNA sequences.

### Methods

#### #ctor
```csharp
Bio.Algorithms.Assembly.Comparative.ComparativeGenomeAssembler.#ctor
```
Initializes a new instance of the ComparativeGenomeAssembler class.

#### Assemble
```csharp
Bio.Algorithms.Assembly.Comparative.ComparativeGenomeAssembler.Assemble(System.Collections.Generic.IEnumerable{Bio.ISequence},Bio.Util.FastASequencePositionParser)
```
Assemble the input sequences into the largest possible contigs.

|Parameter Name|Remarks|
|--------------|-------|
|referenceSequence|The sequence used as backbone for assembly.|
|queryParser|The parser to load the sequences to assemble.|

_returns: IComparativeAssembly instance which contains list of assembled sequences._

#### ConsensusGenerator
```csharp
Bio.Algorithms.Assembly.Comparative.ComparativeGenomeAssembler.ConsensusGenerator(Bio.Util.DeltaAlignmentCollection)
```
Generates a consensus sequence for the genomic region covered by reads.

|Parameter Name|Remarks|
|--------------|-------|
|deltaAlignmentCollection|Alignment between reference genome and reads.|

_returns: List of contigs._

#### LayoutRefinment
```csharp
Bio.Algorithms.Assembly.Comparative.ComparativeGenomeAssembler.LayoutRefinment(Bio.Util.DeltaAlignmentCollection)
```
Refines layout of alignment between reads and reference genome by taking care of indels and rearrangements.

|Parameter Name|Remarks|
|--------------|-------|
|deltaAlignmentCollection|Ordered Repeat Resolved Deltas.|


#### RaiseStatusEvent
```csharp
Bio.Algorithms.Assembly.Comparative.ComparativeGenomeAssembler.RaiseStatusEvent(System.String)
```
Raises status event.

#### ReadAlignment
```csharp
Bio.Algorithms.Assembly.Comparative.ComparativeGenomeAssembler.ReadAlignment(System.Collections.Generic.IEnumerable{Bio.ISequence},System.Collections.Generic.IEnumerable{Bio.ISequence})
```
Aligns reads to reference genome using NUCmer.

|Parameter Name|Remarks|
|--------------|-------|
|referenceSequence|Sequence of reference genome.|
|reads|List of sequence reads.|

_returns: Delta alignments after read alignment._

#### RepeatResolution
```csharp
Bio.Algorithms.Assembly.Comparative.ComparativeGenomeAssembler.RepeatResolution(Bio.Util.DeltaAlignmentCollection)
```
Reads ambiguously placed due to genomic reads.
 This step requires mate pair information to resolve the ambiguity about placements of repeated sequences.

|Parameter Name|Remarks|
|--------------|-------|
|deltaAlignmentCollection|Alignment between reference genome and reads.|

_returns: List of DeltaAlignments after resolving repeating reads._

#### ScaffoldsGenerator
```csharp
Bio.Algorithms.Assembly.Comparative.ComparativeGenomeAssembler.ScaffoldsGenerator(System.Collections.Generic.IEnumerable{Bio.ISequence},System.Collections.Generic.IEnumerable{Bio.ISequence})
```
Build scaffolds from contigs and paired reads (uses Padena Step 6 for assembly).

|Parameter Name|Remarks|
|--------------|-------|
|contigs|List of contigs.|
|reads|List of paired reads.|

_returns: List of scaffold sequences._

#### StatusEventEnd
```csharp
Bio.Algorithms.Assembly.Comparative.ComparativeGenomeAssembler.StatusEventEnd(System.String)
```
Raises status changed event with Step ended status message.

#### StatusEventStart
```csharp
Bio.Algorithms.Assembly.Comparative.ComparativeGenomeAssembler.StatusEventStart(System.String)
```
Raises status changed event with Step started status message.

#### WriteDelta
```csharp
Bio.Algorithms.Assembly.Comparative.ComparativeGenomeAssembler.WriteDelta(System.Collections.Generic.IEnumerable{Bio.Algorithms.Alignment.DeltaAlignment},System.IO.Stream)
```
Writes delta for query sequences.

|Parameter Name|Remarks|
|--------------|-------|
|deltaAlignments|Delta alignments to write.|
|outputStream|Temp stream to write to.|


#### WriteSortedDelta
```csharp
Bio.Algorithms.Assembly.Comparative.ComparativeGenomeAssembler.WriteSortedDelta(Bio.Util.DeltaAlignmentSorter,System.IO.Stream,Bio.Util.FastASequencePositionParser,System.IO.Stream)
```
Writes delta for query sequences.

|Parameter Name|Remarks|
|--------------|-------|
|sorter|Sorter instance.|
|unsortedDeltaStream|Unsorted Delta Filename.|
|queryParser|Query/read sequences parser.|
|outputStream|Output file name.|


#### WriteUnsortedDelta
```csharp
Bio.Algorithms.Assembly.Comparative.ComparativeGenomeAssembler.WriteUnsortedDelta(System.Collections.Generic.IEnumerable{Bio.Algorithms.Alignment.DeltaAlignment},Bio.Util.DeltaAlignmentSorter,System.IO.Stream)
```
Writes delta for query sequences.

|Parameter Name|Remarks|
|--------------|-------|
|delta|The Deltas.|
|sorter|Sorter instance.|
|outputStream|Output file name.|




### Properties

#### AllowKmerLengthEstimation
Gets or sets a value indicating whether to estimate kmer length.
#### BreakLength
Gets or sets number of bases to be extended before stopping alignment.
#### Depth
Gets or sets the Depth for graph traversal in scaffold builder step.
#### Description
Gets the description of the sequence assembly algorithm being
 implemented. This is intended to give the
 developer some information of the current sequence assembly algorithm.
#### FixedSeparation
Gets or sets maximum fixed diagonal difference.
#### kmerLength
Gets or sets the kmer length.
#### LengthOfMum
Gets or sets the length of MUM for using with NUCmer.
#### MaximumSeparation
Gets or sets maximum separation between the adjacent matches in clusters.
#### MinimumScore
Gets or sets minimum output score.
#### Name
Gets the name of the sequence assembly algorithm being
 implemented. This is intended to give the
 developer some information of the current sequence assembly algorithm.
#### ScaffoldingEnabled
Gets or sets a value indicating whether to run scaffolding step or not.
#### ScaffoldRedundancy
Gets or sets value of redundancy for building scaffolds.
#### SeparationFactor
Gets or sets separation factor. Fraction equal to 
 (diagonal difference / match separation) where higher values
 increase the insertion or deletion (indel) tolerance

