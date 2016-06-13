---
title: OverlapDeNovoAssembler
---

# OverlapDeNovoAssembler
_namespace: [Bio.Algorithms.Assembly](N-Bio.Algorithms.Assembly.html)_

Implements a simple greedy assembly algorithm for DNA.

### Methods

#### #ctor
```csharp
Bio.Algorithms.Assembly.OverlapDeNovoAssembler.#ctor
```
Initializes a new instance of the OverlapDeNovoAssembler class.
 Sets default threshold values, pairwise aligner, consensusResolver.
 Users will typically reset these using parameters 
 specific to their particular sequences and needs.

#### AlignAndUpdateBestScore
```csharp
Bio.Algorithms.Assembly.OverlapDeNovoAssembler.AlignAndUpdateBestScore(Bio.ISequence,Bio.ISequence,System.Boolean,System.Boolean,Bio.Algorithms.Assembly.OverlapDeNovoAssembler.ItemScore,System.Int32,System.Int32,System.String)
```
Aligns the two input sequence
 Updates best score, if necessary

|Parameter Name|Remarks|
|--------------|-------|
|sequence1|First Sequence to be aligned|
|sequence2|Second Sequence to be aligned|
|reversed|Is first sequence reversed?|
|complement|Is first sequence complemented?|
|bestScore|Structure to track best score|
|sequence1PoolIndex|Index of first sequence in pool.
            Used in printing for debug purpose.|
|sequence2PoolIndex|Index of second sequence in pool.
            Used in printing for debug purpose.|
|message|Message to be printed for debug purpose|

_returns: Updated best score_

#### AlignSequence
```csharp
Bio.Algorithms.Assembly.OverlapDeNovoAssembler.AlignSequence(Bio.ISequence,Bio.ISequence,System.Int32,System.Int32)
```
Aligns the two input sequences, their reverseComplement, complement and reverse
 Keeps track of best score for these combinations.

|Parameter Name|Remarks|
|--------------|-------|
|lowerIndexedSequence|Lower-indexed sequence to be aligned|
|higherIndexedSequence|Higher-indexed sequence to be aligned|
|lowerIndex|Index of first sequence in pool|
|higherIndex|Index of second sequence in pool|

_returns: ItemScore containing score, consensus, offset of best alignment_

#### Assemble
```csharp
Bio.Algorithms.Assembly.OverlapDeNovoAssembler.Assemble(System.Collections.Generic.IEnumerable{Bio.ISequence})
```
Assemble the input sequences into the largest possible contigs.

|Parameter Name|Remarks|
|--------------|-------|
|inputSequences|The sequences to assemble.|

_returns: Returns the OverlapDeNovoAssembly instance which contains list of 
            contigs and list of unmerged sequences which are result of this assembly._
> 
>             The algorithm is:
>             1.  initialize list of contigs to empty list. List of seqs is passed as argument.
>             2.  compute pairwise overlap scores for each pair of input seqs (with reversal and
>                 complementation as appropriate).
>             3.  choose best overlap score. the “merge items” (can be seqs or contigs) are the 
>                 items with that score. If best score is less than threshold, assembly is finished.
>             4.  merge the merge items into a single contig and remove them from their list(s)
>             5.  compute the overlap between new item and all existing items
>             6.  go to step 3
>             

#### Dump
```csharp
Bio.Algorithms.Assembly.OverlapDeNovoAssembler.Dump(Bio.Algorithms.Assembly.Contig)
```
Write contig to application log

|Parameter Name|Remarks|
|--------------|-------|
|contig|contig to be dumped|


#### MakeConsensus
```csharp
Bio.Algorithms.Assembly.OverlapDeNovoAssembler.MakeConsensus(Bio.Algorithms.Assembly.Contig)
```
Analyze the passed contig and store a consensus into its Consensus property.

|Parameter Name|Remarks|
|--------------|-------|
|contig|Contig for which consensus is to be constructed|


#### MergeHigherIndexedContig
```csharp
Bio.Algorithms.Assembly.OverlapDeNovoAssembler.MergeHigherIndexedContig(Bio.Algorithms.Assembly.Contig,Bio.Algorithms.Assembly.OverlapDeNovoAssembler.ItemScore,Bio.Algorithms.Assembly.Contig)
```
Method to merge higher-indexed item with new constructed contig.
 Merges consumed contig with new contig. For each sequence in consumed contig, 
 compute sequence and offset to be added to new contig.

|Parameter Name|Remarks|
|--------------|-------|
|newContig|New contig for merging|
|globalBest|Best Score, consensus, their offsets|
|consumedContig|Consumed Contig to be merged|


#### MergeHigherIndexedSequence
```csharp
Bio.Algorithms.Assembly.OverlapDeNovoAssembler.MergeHigherIndexedSequence(Bio.Algorithms.Assembly.Contig,Bio.Algorithms.Assembly.OverlapDeNovoAssembler.ItemScore,Bio.ISequence)
```
Method to merge higher-indexed item with new constructed contig.
 Merges consumed sequence with new contig. For the consumed sequence,
 compute new sequence and offset to be added to new contig.

|Parameter Name|Remarks|
|--------------|-------|
|newContig|New contig for merging|
|globalBest|Best Score, consensus, their offsets|
|consumedSequence|Consumed Sequence to be merged|


#### MergeLowerIndexedContig
```csharp
Bio.Algorithms.Assembly.OverlapDeNovoAssembler.MergeLowerIndexedContig(Bio.Algorithms.Assembly.Contig,Bio.Algorithms.Assembly.OverlapDeNovoAssembler.ItemScore,Bio.Algorithms.Assembly.Contig)
```
Method to merge lower-indexed item with new constructed contig.
 Merges consumed contig with new contig. For each sequence in consumed contig, 
 compute sequence and offset to be added to new contig.

|Parameter Name|Remarks|
|--------------|-------|
|newContig|New contig for merging|
|globalBest|Best Score along with offsets information|
|consumedContig|Contig to be merged|


#### MergeLowerIndexedSequence
```csharp
Bio.Algorithms.Assembly.OverlapDeNovoAssembler.MergeLowerIndexedSequence(Bio.Algorithms.Assembly.Contig,Bio.Algorithms.Assembly.OverlapDeNovoAssembler.ItemScore,Bio.ISequence)
```
Method to merge lower-indexed item with new constructed contig
 Merges consumed sequence with new contig. For the consumed sequence,
 compute new sequence and offset to be added to new contig.

|Parameter Name|Remarks|
|--------------|-------|
|newContig|New contig for merging|
|globalBest|Best Score, consensus, their offsets|
|consumedSequence|Consumed Sequence to be merged|


#### RunAlignSimple
```csharp
Bio.Algorithms.Assembly.OverlapDeNovoAssembler.RunAlignSimple(Bio.ISequence,Bio.ISequence)
```
Execute Simple Align and return Sequence alignment

|Parameter Name|Remarks|
|--------------|-------|
|sequence1|First sequence item|
|sequence2|Second sequence item|

_returns: List of Sequence alignment_

#### SequenceWithoutTerminalGaps
```csharp
Bio.Algorithms.Assembly.OverlapDeNovoAssembler.SequenceWithoutTerminalGaps(Bio.ISequence)
```
Removes gaps that are inserted by overlap algorithm at beginning or end of sequence.

|Parameter Name|Remarks|
|--------------|-------|
|inputSequence|input sequence|

_returns: Sequence without gaps_



### Properties

#### _sequenceAlphabet
The alphabet type of sequences to be assembled
#### AssumeStandardOrientation
Gets or sets a value indicating whether standard orientation is assumed.
 if true, assume that the input sequences are in 5'-to-3' orientation.
 This means that only normal and reverse-complement overlaps need to be tested.
 if false, need to try both orientations for overlaps.
#### ConsensusResolver
Gets or sets the method that will be used to compute a contig's consensus during assembly.
#### Description
Gets the description of the current assembly algorithm used.
 This property returns a simple description of what 
 SimpleSequenceAssembler class implements.
#### MergeThreshold
Gets or sets Threshold determines how much overlap is needed 
 for two sequences to be merged. The score from the overlap algorithm 
 must at least equal Threshold for a merge to occur.
#### Name
Gets the name of the current assembly algorithm used.
 This property returns the Name of our assembly algorithm i.e 
 Simple-sequence algorithm.
#### OverlapAlgorithm
Gets or sets the pairwise sequence aligner that will be used to compute overlap during assembly.

