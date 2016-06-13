---
title: IPatternFinder
---

# IPatternFinder
_namespace: [Bio.Algorithms.StringSearch](N-Bio.Algorithms.StringSearch.html)_

Interface to be implemented by the class that implement string search algorithm.

### Methods

#### FindMatch
```csharp
Bio.Algorithms.StringSearch.IPatternFinder.FindMatch(Bio.ISequence,System.String)
```
Find the matches for given searchString in sequence and returns
 the matched strings with indices found at.

|Parameter Name|Remarks|
|--------------|-------|
|sequence|Input sequence.|
|searchPattern|Strings to be searched.|

_returns: Matches found in sequence._



### Properties

#### IgnoreCase
Gets or sets the value indicating whether the match is case sensitive
 
 Note that symbols in Sequence are always Upper case.
#### StartIndex
Gets or sets the Minimum start index of the match

