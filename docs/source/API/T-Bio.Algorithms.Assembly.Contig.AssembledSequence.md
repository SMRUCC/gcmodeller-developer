---
title: AssembledSequence
---

# AssembledSequence
_namespace: [Bio.Algorithms.Assembly.Contig](N-Bio.Algorithms.Assembly.Contig.html)_

A sequence, as it has been located into the contig. This includes
 possible reversal, complementation, or both.



### Properties

#### IsComplemented
Gets or sets a value indicating whether the sequence was complemented in order to find sufficient overlap.
#### IsReversed
Gets or sets a value indicating whether the orientation of the sequence was reversed in order to find
 sufficient overlap.
 
 If the assembly algorithm used AssumeStandardOrientation=true, then IsReversed
 and IsComplemented will both be true (reverse complement) or both be false.
#### Length
Gets or sets the length of alignment between read and contig.
#### Position
Gets or sets the offset from the start of the contig where this sequence begins.
#### ReadPosition
Gets or sets the position of the Read in alignment.
#### Sequence
Gets or sets the sequence, as possibly modified (via gap insertion) by
 the overlap algorithm.

