---
title: SAMFlags
---

# SAMFlags
_namespace: [Bio.IO.SAM](N-Bio.IO.SAM.html)_

SAM Flags.
 This enum represents the bitwise flags of the SAM format.



### Properties

#### Duplicate
0x0400 The read is either a PCR duplicate or an optical duplicate.
#### FirstReadInPair
0x0040 The read is the first read in a pair.
#### MappedInProperPair
0x0002 The read is mapped in a proper pair (depends on the protocol, normally inferred during alignment).
#### MateOnReverseStrand
0x0020 Strand of the mate.
#### NonPrimeAlignment
0x0100 The alignment is not primary (a read having split hits may have multiple primary alignment records).
#### PairedRead
0x0001 The read is paired in sequencing, no matter whether it is mapped in a pair.
#### QualityCheckFailure
0x0200 The read fails platform/vendor quality checks.
#### QueryOnReverseStrand
0x0010 Strand of the query (0 for forward; 1 for reverse strand).
#### SecondReadInPair
0x0080 The read is the second read in a pair.
#### UnmappedMate
0x0008 The mate is unmapped.
#### UnmappedQuery
0x0004 The query sequence itself is unmapped.

