---
title: WordMatch
---

# WordMatch
_namespace: [Bio](N-Bio.html)_

WordMatch stores the region of similarity between two sequences.

### Methods

#### #ctor
```csharp
Bio.WordMatch.#ctor(System.Int32,System.Int32,System.Int32)
```
Initializes a new instance of the WordMatch class.

|Parameter Name|Remarks|
|--------------|-------|
|length|Length of the match|
|sequence1Start|Start index of the first sequence.|
|sequence2Start| Start index of the second sequence.|


#### BuildMatchTable
```csharp
Bio.WordMatch.BuildMatchTable(Bio.Algorithms.Kmer.KmersOfSequence,Bio.ISequence,System.Int32)
```
Create a list of all the matches and order them by the
 second sequence.

|Parameter Name|Remarks|
|--------------|-------|
|kmerList|List of kmer's.|
|seq2|Second sequence.|
|wordLength|Wordlength entered by the user|

_returns: List of all the matches._

#### CompareTo
```csharp
Bio.WordMatch.CompareTo(Bio.WordMatch)
```
Compares two sequence matches so the result can be used in sorting.
 The comparison is done by size and if the size is equal, by seq1
 start position. If the sequence1 start positions are equal they are
 sorted by sequence2 start position.

|Parameter Name|Remarks|
|--------------|-------|
|other|WordMatch object|

_returns: 
                Returns zero if the objects have the same length, sequence1start and sequence2Start
                If lengths are equal, then the objects are ordered by sequence1start
                If lengths are equal and sequence1Start are equal, then the objects are ordered by sequence2start
            _

#### Equals
```csharp
Bio.WordMatch.Equals(Bio.WordMatch)
```
Checks if another WordMatch object is equal to the current
 object.

|Parameter Name|Remarks|
|--------------|-------|
|other|WordMatch object to be compared.|

_returns: 
                true: if the objects are equal else false.
            _

#### FindCorrespondingMatch
```csharp
Bio.WordMatch.FindCorrespondingMatch(System.String,Bio.Algorithms.Kmer.KmersOfSequence)
```
Finds the sequence in the list of IKmer and returns the list of position
 of the Kmers.

|Parameter Name|Remarks|
|--------------|-------|
|sequence|Sequence which has to be matched in the list of IKmer.|
|kmerList|List of IKmer.|

_returns: Returns the list of position of IKmer._

#### GetHashCode
```csharp
Bio.WordMatch.GetHashCode
```
Overrides hash function for a particular type.
_returns: hash code_

#### GetMinimalList
```csharp
Bio.WordMatch.GetMinimalList(System.Collections.Generic.List{Bio.WordMatch},System.Int32)
```
Given a list of matches, reduce it to the minimal set of best
 non-overlapping matches.

|Parameter Name|Remarks|
|--------------|-------|
|completeList|List of matches to reduce to non-overlapping set.|
|wordLength|Wordlength entered by the user.|

_returns: Minimal set of best non-overlapping matches._

#### op_Equality
```csharp
Bio.WordMatch.op_Equality(Bio.WordMatch,Bio.WordMatch)
```
Override equal operator

|Parameter Name|Remarks|
|--------------|-------|
|leftHandSideObject|LHS object|
|rightHandSideObject|RHS object|

_returns: Is LHS == RHS_

#### op_GreaterThan
```csharp
Bio.WordMatch.op_GreaterThan(Bio.WordMatch,Bio.WordMatch)
```
Override greater than operator

|Parameter Name|Remarks|
|--------------|-------|
|leftHandSideObject|LHS object|
|rightHandSideObject|RHS object|

_returns: Is LHS == RHS_

#### op_Inequality
```csharp
Bio.WordMatch.op_Inequality(Bio.WordMatch,Bio.WordMatch)
```
Override not equal operator

|Parameter Name|Remarks|
|--------------|-------|
|leftHandSideObject|LHS object|
|rightHandSideObject|RHS object|

_returns: Is LHS == RHS_

#### op_LessThan
```csharp
Bio.WordMatch.op_LessThan(Bio.WordMatch,Bio.WordMatch)
```
Override less than operator

|Parameter Name|Remarks|
|--------------|-------|
|leftHandSideObject|LHS object|
|rightHandSideObject|RHS object|

_returns: Is LHS == RHS_

#### WordDeadZone
```csharp
Bio.WordMatch.WordDeadZone(Bio.WordMatch,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32)
```
Determines if a match is within the region which is not overlapped by the
 match starting at position (deadx1, deady1) or ending at position
 (deadx2, deady2). If it is in this region
 (the 'live zone') then true is returned, else false is returned.

|Parameter Name|Remarks|
|--------------|-------|
|wordMatch|Word Match object which holds the similarity of the two sequences.|
|deadx1|starting x-position of the region for which overlapped has to be checked.|
|deady1|starting y-position of the region for which overlapped has to be checked.|
|deadx2|ending x-position of the region for which overlapped has to be checked.|
|deady2|ending y-position of the region for which overlapped has to be checked.|
|wordLength|Wordlength entered by the user|

_returns: 
                true: if the wordMatch is in the overlapped region, else false.
            _



### Properties

#### Deleted
Gets or sets a value indicating whether this word match should be considered or not.
#### Length
Gets or sets the length of the match
#### Sequence1Start
Gets or sets the start index of the first sequence.
#### Sequence2Start
Gets or sets the start index of the second sequence.

