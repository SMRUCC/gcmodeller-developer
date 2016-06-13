---
title: SequenceStatistics
---

# SequenceStatistics
_namespace: [Bio](N-Bio.html)_

SequenceStatistics is used to keep track of the number of occurrences of each symbol within
 a sequence.

### Methods

#### #ctor
```csharp
Bio.SequenceStatistics.#ctor(Bio.ISequence)
```
Constructs sequence statistics by iterating through a sequence.

|Parameter Name|Remarks|
|--------------|-------|
|sequence|The sequence to construct statistics for.|


#### Add
```csharp
Bio.SequenceStatistics.Add(System.Char)
```
Increments the count of the given symbol.

|Parameter Name|Remarks|
|--------------|-------|
|symbol|The symbol to add.|


#### GetCount
```csharp
Bio.SequenceStatistics.GetCount(System.Byte)
```
Gets the number of occurrences of the specific sequence char. This method does not perform
 any calculations to group counts of ambiguous symbols with corresponding unambiguous
 symbols. So the minimum G-C content of a DNA sequence would be calculated as
 
 GetCount('G') + GetCount('C') + GetCount('S')

|Parameter Name|Remarks|
|--------------|-------|
|item|A byte of sequence.|

_returns: The number of occurrences of the given a byte of sequence._

#### GetFraction
```csharp
Bio.SequenceStatistics.GetFraction(System.Byte)
```
Gets the fraction of occurrences of a specific sequence char. This method does not perform
 any calculations to group counts of ambiguous symbols with corresponding unambiguous
 symbols. So the minimum G-C content of a DNA sequence would be calculated as
 
 GetFraction('G') + GetFraction('C') + GetFraction('S')

|Parameter Name|Remarks|
|--------------|-------|
|item|A sequence char.|

_returns: The fraction of occurrences of the given sequence char._

#### LoadFromLongArray
```csharp
Bio.SequenceStatistics.LoadFromLongArray(System.Int64[])
```
This method takes an array of symbol counts and loads our dictionary.
 It collapses upper/lower case differences.

|Parameter Name|Remarks|
|--------------|-------|
|symbolCounts|-|


#### Remove
```csharp
Bio.SequenceStatistics.Remove(System.Char)
```
Decrements the count of the given char.

|Parameter Name|Remarks|
|--------------|-------|
|symbol|The char to remove.|


#### ToString
```csharp
Bio.SequenceStatistics.ToString
```
Converts the sequence chars with its count to string.
_returns: Sequence chars with its count._



### Properties

#### Alphabet
The alphabet used for the values in this statistics set
#### SymbolCounts
The set of values counted (so it can be enumerated easily)
#### TotalCount
The total number of elements counted in this statistics set

