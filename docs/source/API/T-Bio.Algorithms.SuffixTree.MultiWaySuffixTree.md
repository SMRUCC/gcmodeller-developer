---
title: MultiWaySuffixTree
---

# MultiWaySuffixTree
_namespace: [Bio.Algorithms.SuffixTree](N-Bio.Algorithms.SuffixTree.html)_

Represents an in-memory suffix tree.
 This implementation of ISuffix tree only works with Sequence class.

### Methods

#### #ctor
```csharp
Bio.Algorithms.SuffixTree.MultiWaySuffixTree.#ctor(Bio.ISequence)
```
Initializes a new instance of the MultiWaySuffixTree class with the specified sequence.

|Parameter Name|Remarks|
|--------------|-------|
|sequence|Sequence to build the suffix tree.|


#### BuildSuffixTree
```csharp
Bio.Algorithms.SuffixTree.MultiWaySuffixTree.BuildSuffixTree
```
Builds the suffix tree.

#### DepthFirstIterativeTraversal
```csharp
Bio.Algorithms.SuffixTree.MultiWaySuffixTree.DepthFirstIterativeTraversal(Bio.Algorithms.SuffixTree.MultiWaySuffixEdge,System.Int64,System.Collections.Generic.List{System.Int64})
```
Traverse the suffix tree from the specified Edge and updates the startIndexes list.

|Parameter Name|Remarks|
|--------------|-------|
|current|Edge to start traversing from.|
|length|Length of the edge for which the startIndexes are needed.|
|startIndexes|List containing the start indexes.|


#### GetIntermediateEdges
```csharp
Bio.Algorithms.SuffixTree.MultiWaySuffixTree.GetIntermediateEdges(Bio.Algorithms.SuffixTree.MultiWaySuffixEdge,Bio.Algorithms.SuffixTree.MultiWaySuffixEdge,System.Int64,System.Int64,System.Int64,Bio.ISequence,System.Int64)
```
Gets the intermediate edges present in the path of the match between specified edges for the next query index to
 match.

|Parameter Name|Remarks|
|--------------|-------|
|fromEdge|Edge from the which to search from.|
|toedge|Edge where to stop the search.|
|matchLengthOfFromEdge|Matching symbols count of the fromEdge.|
|lengthToSearch|Length to search.|
|nextQueryIndex|Next query index.|
|convertedSearchSeq|Converted search sequence.|
|minLengthOfMatch|Minimum length of match required.|

_returns: Returns the intermediate edges found between the fromEdge to toEdge._

#### ProcessQuerySequence
```csharp
Bio.Algorithms.SuffixTree.MultiWaySuffixTree.ProcessQuerySequence(Bio.ISequence,System.Boolean)
```
Converts any alias symbols in specified query sequence to its base representation to improve the searching time.
 For example, 'a' to 'A' in case of DNASequence.
 If noambiguity is set then all ambiguous symbols in the sequence are converted to '0'.

|Parameter Name|Remarks|
|--------------|-------|
|searchSequence|Query sequence to process.|
|noambiguity|Flag to specify whether to consider ambiguous symbols or not.|

_returns: Returns the processed sequence._

#### SearchMatches
```csharp
Bio.Algorithms.SuffixTree.MultiWaySuffixTree.SearchMatches(Bio.ISequence)
```
Gets the matches where length is greater than or equal to the MinLengthOfMatch.

|Parameter Name|Remarks|
|--------------|-------|
|searchSequence|Query sequence to search.|

_returns: Returns IEnumerable of matches._

#### SearchMatchesUniqueInReference
```csharp
Bio.Algorithms.SuffixTree.MultiWaySuffixTree.SearchMatchesUniqueInReference(Bio.ISequence)
```
Gets the matches unique in reference sequence where length is greater than or equal to the MinLengthOfMatch.

|Parameter Name|Remarks|
|--------------|-------|
|searchSequence|Sequence to search.|

_returns: Returns IEnumerable of matches._

#### UpdateSuffixLinkForChildOfRoot
```csharp
Bio.Algorithms.SuffixTree.MultiWaySuffixTree.UpdateSuffixLinkForChildOfRoot(System.Int32)
```
Updates the suffix links for the children of the root.

|Parameter Name|Remarks|
|--------------|-------|
|childIndex|Child index of the root to update.|


#### UpdateSuffixLinkForEdge
```csharp
Bio.Algorithms.SuffixTree.MultiWaySuffixTree.UpdateSuffixLinkForEdge(Bio.Algorithms.SuffixTree.MultiWaySuffixEdge,System.Int32)
```
Updates the suffix link of a child edge of specified edge.

|Parameter Name|Remarks|
|--------------|-------|
|parenetEdge|Parent edge.|
|childIndex|Index of the child to update.|


#### UpdateSuffixLinks
```csharp
Bio.Algorithms.SuffixTree.MultiWaySuffixTree.UpdateSuffixLinks
```
Updates the suffix links for the suffix tree.

#### ValidateMatch
```csharp
Bio.Algorithms.SuffixTree.MultiWaySuffixTree.ValidateMatch(System.Int64,System.Int64,System.Int64,Bio.Util.SortedList{System.Int64,System.Collections.Generic.Dictionary{System.Int64,Bio.Util.SortedList{System.Int64,System.Collections.Generic.SortedSet{System.Int64}}}},Bio.Algorithms.SuffixTree.Match@)
```
Validates whether new match is an exact sub match with any of the previous matches if not then returns the match in
 out param.

|Parameter Name|Remarks|
|--------------|-------|
|queryIndex|Query index|
|referenceIndex|Reference index|
|matchLength|Match length|
|previousMatches|Previous matches|
|match|New match|

_returns: Returns true if the new match is not an exact sub match with any of the previous matches, else returns false_



### Properties

#### edgesCount
Gets total number of edges in this suffix tree.
#### MinLengthOfMatch
Gets or sets Minimum length of match required.
#### Name
Gets Name of the suffix tree.
#### NoAmbiguity
Gets or sets a value indicating whether it Matches basic symbols only.
#### referenceSequence
Holds the reference sequence.
 This will be converted using SymbolValueMap of the alphabet for the performance.
#### rootEdge
Gets or sets the root node (edge) in suffix tree.
#### Sequence
Gets Sequence used to build the suffix tree.
#### supportedBaseAlphabet
Base alphabet supported by this instance of suffix tree.
 This property depends on the reference sequence.
 For example: if the reference sequence's alphabet is
 AmbiguousDna then Dna and its all derivatives classes are supported.
#### symbolsCount
Holds number of symbols in reference sequence.
#### TerminatingSymbol
Character ($) used as terminating symbol for Suffix Tree.
#### uniqueSymbolsInReference
Holds the unique symbols present in the reference sequence with their start index.
#### uniqueSymbolsStartIndexes
Holds the start index of the symbols in uniqueSymbolsInReference set.

