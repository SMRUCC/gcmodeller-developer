---
title: SimpleConsensusResolver
---

# SimpleConsensusResolver
_namespace: [Bio](N-Bio.html)_

Calculate the consensus for a list of symbols using simple frequency fraction method.
 Normal (non-gap) symbols are given a weight of 100. 
 The confidence of a symbol is the sum of weights for that symbol, 
 divided by the total number of symbols occurring at that position. 
 If symbols have confidence >= threshold, symbol corresponding 
 to set of these high confidence symbols is used.
 If no symbol meets the threshold, symbol corresponding 
 to set of all the symbols at that position is used.
 
 For ambiguous symbols, the corresponding set of base symbols are retrieved.
 And for frequency calculation, each base symbol is given a weight of 
 (100 / number of base symbols).

### Methods

#### #ctor
```csharp
Bio.SimpleConsensusResolver.#ctor(Bio.IAlphabet)
```
Initializes a new instance of the SimpleConsensusResolver class.
 Sets default value for threshold.

|Parameter Name|Remarks|
|--------------|-------|
|seqAlphabet|Sequence Alphabet.|


#### GetConsensus
```csharp
Bio.SimpleConsensusResolver.GetConsensus(System.Byte[])
```
Gets consensus symbols for the input list, 
 using frequency fraction method.
 Refer class summary for more details.

|Parameter Name|Remarks|
|--------------|-------|
|items|List of input symbols.|

_returns: Consensus Symbol._



### Properties

#### alphabetType
Holds the current alphabet type
#### SequenceAlphabet
Gets or sets sequence alphabet
#### Threshold
Gets or sets threshold value - used when generating consensus symbol
 The confidence level for a position must equal or exceed Threshold for
 a non-gap symbol to appear in the consensus at that position.

