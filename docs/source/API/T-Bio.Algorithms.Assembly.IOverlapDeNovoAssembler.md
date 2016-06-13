---
title: IOverlapDeNovoAssembler
---

# IOverlapDeNovoAssembler
_namespace: [Bio.Algorithms.Assembly](N-Bio.Algorithms.Assembly.html)_

Representation of any sequence assembly algorithm.
 This interface defines contract for classes implementing 
 overlap based De Novo Sequence assembler.



### Properties

#### AssumeStandardOrientation
Gets or sets a value indicating whether standard orientation is assumed.
 if true, assume that the input sequences are in 5'-to-3' orientation.
 This means that only normal and reverse-complement overlaps need to be tested.
 if false, need to try both orientations for overlaps.
#### ConsensusResolver
Gets or sets the method that will be used to compute a contig's consensus during assembly.
#### MergeThreshold
Gets or sets Threshold that determines how much overlap is needed 
 for two sequences to be merged. The score from the overlap algorithm 
 must at least equal Threshold for a merge to occur.
#### OverlapAlgorithm
Gets or sets the pairwise sequence aligner that will be used to compute overlap during assembly.

