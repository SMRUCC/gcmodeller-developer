---
title: ISequenceAlignment
---

# ISequenceAlignment
_namespace: [Bio.Algorithms.Alignment](N-Bio.Algorithms.Alignment.html)_

An ISequenceAlignment is the result of running an alignment algorithm on a set 
 of two or more sequences. This could be a pairwise alignment, an MSA (multiple 
 sequence alignment), or an overlap alignment of the sort needed for sequence
 assembly.



### Properties

#### AlignedSequences
Gets list of the IAlignedSequences which contains aligned sequences with score, offset and consensus .
#### Documentation
Gets or sets Documentation object is intended for tracking the history, provenance,
 and experimental context of a sequence. The user can adopt any desired
 convention for use of this object.
#### Metadata
Gets any additional information about the Alignment.
#### Sequences
Gets list of sequences.

