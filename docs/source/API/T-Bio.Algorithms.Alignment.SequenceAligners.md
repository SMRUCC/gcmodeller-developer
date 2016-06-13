---
title: SequenceAligners
---

# SequenceAligners
_namespace: [Bio.Algorithms.Alignment](N-Bio.Algorithms.Alignment.html)_

SequenceAligners class is an abstraction class which provides instances
 and lists of all Aligners currently supported by Bio.

### Methods

#### #cctor
```csharp
Bio.Algorithms.Alignment.SequenceAligners.#cctor
```
Initializes static members of the SequenceAligners class.
 Static constructor

#### GetAligners
```csharp
Bio.Algorithms.Alignment.SequenceAligners.GetAligners
```
Gets all registered aligners in core folder and addins (optional) folders
_returns: List of registered aligners_



### Properties

#### All
Gets the list of all aligners which is supported by the framework.
#### MUMmer
Gets an instance of MUMmer3 class which implements
 the MUMmer algorithm for partial alignment
#### NeedlemanWunsch
Gets an instance of NeedlemanWunschAligner class which implements
 the NeedlemanWunsch algorithm for global alignment.
#### NUCmer
Gets an instance of NUCmer3 class which implements
 the NUCmer algorithm for alignment
#### SmithWaterman
Gets an instance of SmithWatermanAligner class which implements
 the SmithWaterman algorithm for partial alignment

