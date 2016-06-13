---
title: IMultipleSequenceAligner
---

# IMultipleSequenceAligner
_namespace: [Bio.Algorithms.Alignment](N-Bio.Algorithms.Alignment.html)_

Multiple sequences alignment interface.
 Multiple sequence alignment (MSA) is used to align three or 
 more sequences in preparation for further analysis. 
 More info on MSA can be found at 
 http://en.wikipedia.org/wiki/Multiple_sequence_alignment)



### Properties

#### AlignedSequences
Gets aligned sequences with equal length by inserting gaps '-' at
 appropriate positions so that the alignment score is optimized.
#### AlignmentScore
Gets the alignment score of the multiple sequence alignment.
 A typical score is the summation of pairwise alignment scores.

