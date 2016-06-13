---
title: SubtractOutputType
---

# SubtractOutputType
_namespace: [Bio](N-Bio.html)_

This enum indicates type of output an subtract operation should return.



### Properties

#### IntervalsWithNoOverlap
IntervalsWithNoOverlap indicates that subtract operation should return 
 intervals from the reference intervals that do not overlap with the query intervals. 
 This option only filters out intervals that overlap with the query intervals.
#### NonOverlappingPiecesOfIntervals
NonOverlappingPiecesOfIntervals indicates that Subtract operation should return 
 intervals from the reference intervals that have the intervals from the query intervals removed. 
 Any overlapping base pairs are removed from the range of the interval.

