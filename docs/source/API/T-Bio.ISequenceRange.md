---
title: ISequenceRange
---

# ISequenceRange
_namespace: [Bio](N-Bio.html)_

A SequenceRange holds the data necessary to represent a region within
 a sequence defined by its start and end index without necessarily holding
 any of the sequence item data. At a minimum and ID, start index, and end
 index are required. Additional metadata can be stored as well using a
 generic key value pair.



### Properties

#### End
The end index of the range. This index must be non-negative and
 it will be enforced to always be greater than or equal to the Start index.
#### ID
A string identifier of the sequence range.
#### Metadata
Optional additional data to store along with the ID and indices of
 the range. Metadata must be stored with a string key name.
#### ParentSeqRanges
Gets the sequence ranges from which this sequence range is obtained.
 This property will be filled by the operations like Merge, Intersect etc.
#### Start
The beginning index of the range. This index must be non-negative and
 it will be enforced to always be less than or equal to the End index.

