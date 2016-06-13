---
title: NUCmer
---

# NUCmer
_namespace: [Bio.Algorithms.Alignment](N-Bio.Algorithms.Alignment.html)_

NUCmer is a system for rapidly aligning entire genomes or very large DNA
 sequences. It allows alignment of multiple reference sequences to multiple query sequences.
 This is commonly used to identify the position and orientation of set of sequence
 contigs in relation to finished sequence.

### Methods

#### #ctor
```csharp
Bio.Algorithms.Alignment.NUCmer.#ctor(Bio.ISequence)
```
Initializes a new instance of the NUCmer class.

#### ExtendClusters
```csharp
Bio.Algorithms.Alignment.NUCmer.ExtendClusters(Bio.Algorithms.Alignment.Synteny)
```
Extend the cluster in synteny

|Parameter Name|Remarks|
|--------------|-------|
|synteny|Synteny in which cluster needs to be extened.|

_returns: List of delta alignments_

#### ExtendToNextSequence
```csharp
Bio.Algorithms.Alignment.NUCmer.ExtendToNextSequence(Bio.ISequence,Bio.ISequence,Bio.Algorithms.Alignment.DeltaAlignment,System.Int64,System.Int64,System.Int32)
```
Extend the cluster forward

|Parameter Name|Remarks|
|--------------|-------|
|referenceSequence|Reference sequence|
|querySequence|Query sequence|
|currentAlignment|current alignment object|
|targetReference|target position in reference sequence|
|targetQuery|target position in query sequence|
|methodName|Name of the method to be implemented|

_returns: Was cluster extended forward_

#### ExtendToPreviousSequence
```csharp
Bio.Algorithms.Alignment.NUCmer.ExtendToPreviousSequence(Bio.ISequence,Bio.ISequence,System.Collections.Generic.IList{Bio.Algorithms.Alignment.DeltaAlignment},Bio.Algorithms.Alignment.DeltaAlignment,Bio.Algorithms.Alignment.DeltaAlignment)
```
Extend the cluster backward

|Parameter Name|Remarks|
|--------------|-------|
|referenceSequence|Reference sequence|
|querySequence|Query sequence|
|alignments|List of alignments|
|currentAlignment|current alignment object|
|targetAlignment|target alignment object|

_returns: Was clusted extended backward_

#### GetClusters
```csharp
Bio.Algorithms.Alignment.NUCmer.GetClusters(System.Collections.Generic.List{Bio.Algorithms.SuffixTree.MatchExtension},System.Boolean)
```
get the clusters

|Parameter Name|Remarks|
|--------------|-------|
|matchExtensionList|List of Matches of a read.|
|sortedMatches|Flag to indicate that the matches are sorted or not.|

_returns: List of clusters_

#### GetDeltaAlignments
```csharp
Bio.Algorithms.Alignment.NUCmer.GetDeltaAlignments(Bio.ISequence,System.Boolean,System.Boolean)
```
Generates Delta Alignments.

|Parameter Name|Remarks|
|--------------|-------|
|querySequence|Query Sequence|
|isUniqueInReference|Whether MUMs are unique in query or not.|
|isReversed|True if the query sequence is a reverse-complement|

_returns: List of enumerable of delta alignments._

#### GetMumList
```csharp
Bio.Algorithms.Alignment.NUCmer.GetMumList(Bio.ISequence,System.Boolean)
```
Returns the matches for a query sequence against our reference sequence.

|Parameter Name|Remarks|
|--------------|-------|
|querySequence|Query sequence.|
|isUniqueInReference|flag to indicate that the matches should be unique in reference.|

_returns: Matches_

#### GetNextCluster
```csharp
Bio.Algorithms.Alignment.NUCmer.GetNextCluster(System.Collections.Generic.IList{Bio.Algorithms.Alignment.Cluster},Bio.Algorithms.Alignment.Cluster,System.Int64@,System.Int64@)
```
Find the next eligible sequence for alignment/extension

|Parameter Name|Remarks|
|--------------|-------|
|clusters|List of clusters|
|currentCluster|Current cluster|
|targetReference|target position in reference sequence|
|targetQuery|target position in query sequence|

_returns: Forward cluster in the list_

#### GetPreviousAlignment
```csharp
Bio.Algorithms.Alignment.NUCmer.GetPreviousAlignment(System.Collections.Generic.IEnumerable{Bio.Algorithms.Alignment.DeltaAlignment},Bio.Algorithms.Alignment.DeltaAlignment)
```
Find the previous eligible sequence for alignment/extension

|Parameter Name|Remarks|
|--------------|-------|
|alignments|List of alignment|
|currentAlignment|Current alignment|

_returns: Reverse alignment_

#### IsClusterShadowed
```csharp
Bio.Algorithms.Alignment.NUCmer.IsClusterShadowed(System.Collections.Generic.List{Bio.Algorithms.Alignment.DeltaAlignment},Bio.Algorithms.Alignment.Cluster,Bio.Algorithms.Alignment.DeltaAlignment)
```
Check if the cluster is shadowed (contained in alignment)

|Parameter Name|Remarks|
|--------------|-------|
|alignments|List of alignment|
|currentCluster|current cluster|
|currentDeltaAlignment|Current delta alignment|

_returns: Is cluster contained in alignment_

#### ProcessCluster
```csharp
Bio.Algorithms.Alignment.NUCmer.ProcessCluster(System.Collections.Generic.IList{Bio.Algorithms.Alignment.Cluster})
```
Process the cluster
 1. Re-map the reference sequence index to original index
 2. Create synteny
 3. Process synteny

|Parameter Name|Remarks|
|--------------|-------|
|clusters|List of clusters of a read.|

_returns: List of delta alignments_

#### ProcessSynteny
```csharp
Bio.Algorithms.Alignment.NUCmer.ProcessSynteny(System.Collections.Generic.List{Bio.Algorithms.Alignment.Synteny})
```
Extend each cluster in every synteny

|Parameter Name|Remarks|
|--------------|-------|
|syntenies|List of synteny|

_returns: List of delta alignments_

#### SetDefaults
```csharp
Bio.Algorithms.Alignment.NUCmer.SetDefaults
```
User will typically choose their own parameters, these defaults are reasonable for many cases.

#### SortCluster
```csharp
Bio.Algorithms.Alignment.NUCmer.SortCluster(System.Collections.Generic.IEnumerable{Bio.Algorithms.Alignment.Cluster},System.String)
```
Sort the clusters by given field

|Parameter Name|Remarks|
|--------------|-------|
|clusters|List of clusters to be sorted|
|sortBy|Field to be sorted by|

_returns: List of sorted clusters_

#### ValidateSequenceList
```csharp
Bio.Algorithms.Alignment.NUCmer.ValidateSequenceList(Bio.ISequence,Bio.IAlphabet,System.String)
```
Validate the list of sequences

|Parameter Name|Remarks|
|--------------|-------|
|sequence|List of sequence|
|alphabetSet|Alphabet set|
|sequenceType|Type of sequence|




### Properties

#### _internalMummer
Holds the suffix tree.
#### _internalReferenceSequence
Holds the reference sequence.
#### _nucmerAligner
Alignment engine
#### BreakLength
Gets or sets number of bases to be extended before stopping alignment
#### ConsensusResolver
Gets or sets the object that will be used to compute the alignment's consensus.
#### DefaultGapExtensionCost
Default gap extension penalty for use in alignment algorithms
#### DefaultGapOpenCost
Default gap open penalty for use in alignment algorithms
#### DefaultLengthOfMUM
Default minimum length of Matches to be searched in streaming process
#### FirstSequenceStart
Property referring to Second sequence start in MUM
#### FixedSeparation
Gets or sets maximum fixed diagonal difference
#### GapExtensionCost
Gets or sets gap extension penalty for use in alignment algorithms. 
 Not used for alignments using a linear gap penalty.
 For alignments using an affine gap, this is the penalty to
 extend an existing gap.
 This is a negative number, for example GapExtensionCost = -2, not +2.
#### GapOpenCost
Gets or sets gap open penalty for use in alignment algorithms. 
 For alignments using a linear gap penalty, this is the gap penalty.
 For alignments using an affine gap, this is the penalty to open a new gap.
 This is a negative number, for example GapOpenCost = -8, not +8.
#### LengthOfMUM
Gets or sets minimum length of Match that can be considered as MUM.
#### MaximumSeparation
Gets or sets maximum separation between the adjacent matches in clusters
#### MinimumScore
Gets or sets minimum output score
#### ReferenceSequence
Represents reference sequences
#### ScoreMethod
Gets or sets the method to use while calculating score of a cluster.
 Default is MatchLength.
#### SeparationFactor
Gets or sets separation factor. Fraction equal to 
 (diagonal difference / match separation) where higher values
 increase the insertion or deletion (indel) tolerance
#### SimilarityMatrix
Gets or sets similarity matrix for use in alignment algorithms.

