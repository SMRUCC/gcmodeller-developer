---
title: IAlphabet
---

# IAlphabet
_namespace: [Bio](N-Bio.html)_

An alphabet defines a set of symbols common to a particular representation
 of a biological sequence. The symbols in these alphabets are those you would find
 as the individual sequence items in an ISequence variable.
 
 The symbols in an alphabet may represent a particular biological structure
 or they may represent information helpful in understanding a sequence. For instance
 gap symbol, termination symbol, and symbols representing items whose
 definition remains ambiguous are all allowed.

### Methods

#### CheckIsAmbiguous
```csharp
Bio.IAlphabet.CheckIsAmbiguous(System.Byte)
```
Checks if the provided item is an ambiguous character or not

|Parameter Name|Remarks|
|--------------|-------|
|item|Item to be checked|

_returns: True if the specified item is a ambiguous_

#### CheckIsGap
```csharp
Bio.IAlphabet.CheckIsGap(System.Byte)
```
Checks if the provided item is a gap character or not

|Parameter Name|Remarks|
|--------------|-------|
|item|Item to be checked|

_returns: True if the specified item is a gap_

#### CompareSymbols
```csharp
Bio.IAlphabet.CompareSymbols(System.Byte,System.Byte)
```
Compares two items and specifies whether they are same or not.
 If the any of the bytes (Nucleotides) passed not belongs to
 this alphabet then this method throws an exception.
 TO Address scenarios like, N!=N, M != A etc.
 For the Scenarios like A == a, g == G use IsValidSymbol method.

|Parameter Name|Remarks|
|--------------|-------|
|x|First symbol to compare.|
|y|Second symbol to compare.|

_returns: Returns true if x equals y._

#### GetAmbiguousSymbols
```csharp
Bio.IAlphabet.GetAmbiguousSymbols
```
Gets the ambiguous symbols present in alphabet.

#### GetConsensusSymbol
```csharp
Bio.IAlphabet.GetConsensusSymbol(System.Collections.Generic.HashSet{System.Byte})
```
Find the consensus symbol for a set of symbols.

|Parameter Name|Remarks|
|--------------|-------|
|symbols|Set of sequence items.|

_returns: Consensus symbol._

#### GetFriendlyName
```csharp
Bio.IAlphabet.GetFriendlyName(System.Byte)
```
Gets the friendly name of a given symbol.

|Parameter Name|Remarks|
|--------------|-------|
|item|Symbol to find friendly name.|

_returns: Friendly name of the given symbol._

#### GetSymbolValueMap
```csharp
Bio.IAlphabet.GetSymbolValueMap
```
Maps A to A and a to A
 that is key will contain unique values.
 This will be used in the IsValidSymbol method to address Scenarios like a == A, G == g etc.

#### GetValidSymbols
```csharp
Bio.IAlphabet.GetValidSymbols
```
Gets the symbols that are valid for this alphabet.
 This Method can be used for better performance where lot of 
 validation happens like in case of Parsers.

#### TryGetAmbiguousSymbol
```csharp
Bio.IAlphabet.TryGetAmbiguousSymbol(System.Collections.Generic.HashSet{System.Byte},System.Byte@)
```
Gets the ambiguous symbol for the specified set of symbols.

|Parameter Name|Remarks|
|--------------|-------|
|symbols|Set of symbols for which the ambiguous symbol is required.|
|ambiguousSymbol|Ambiguous symbol.|

_returns: Returns true if the ambiguous symbol found and returned in ambiguousSymbol parameter, else returns false._

#### TryGetBasicSymbols
```csharp
Bio.IAlphabet.TryGetBasicSymbols(System.Byte,System.Collections.Generic.HashSet{System.Byte}@)
```
Gets the set of basic symbols for the specified ambiguous symbol.

|Parameter Name|Remarks|
|--------------|-------|
|ambiguousSymbol|Ambiguous symbol for which the basic symbols is required.|
|basicSymbols|Set of basic symbols belongs to the specified ambiguous symbol.|

_returns: Returns true if the basic symbols are found and returned in basicSymbols parameter, else returns false._

#### TryGetComplementSymbol
```csharp
Bio.IAlphabet.TryGetComplementSymbol(System.Byte[],System.Byte[]@)
```
Gets the complements for the specified symbols.
 This is to address the scenarios like in case of DNA complement of A is T etc.
 Note: If the complement is not supported then this method returns false.
 To know whether this alphabet supports complement or not, Use IsComplementSupported property.

|Parameter Name|Remarks|
|--------------|-------|
|symbols|Symbol for which the complement symbol is needed.|
|complementSymbols|Complement symbol.|

_returns: Returns true if complement symbol is found and returned, else returns false._

#### TryGetDefaultGapSymbol
```csharp
Bio.IAlphabet.TryGetDefaultGapSymbol(System.Byte@)
```
Gets the default gap symbol if present in the alphabet.

|Parameter Name|Remarks|
|--------------|-------|
|defaultGapSymbol|Default gap symbol if the alphabet has one.|

_returns: Returns true if the default gap symbol is returned in defaultGapSymbol parameter,
            else returns false._

#### TryGetDefaultTerminationSymbol
```csharp
Bio.IAlphabet.TryGetDefaultTerminationSymbol(System.Byte@)
```
Gets the default termination symbol if present in the alphabet.

|Parameter Name|Remarks|
|--------------|-------|
|defaultTerminationSymbol|Default termination symbol if the alphabet has one.|

_returns: Returns true if the default termination symbol is returned in defaultTerminationSymbol 
            parameter, else returns false._

#### TryGetGapSymbols
```csharp
Bio.IAlphabet.TryGetGapSymbols(System.Collections.Generic.HashSet{System.Byte}@)
```
Gets the gap symbols if present in the alphabet.

|Parameter Name|Remarks|
|--------------|-------|
|gapSymbols|Gap symbols as hashset if the alphabet has one or more gap symbols.|

_returns: Returns true if the gap symbols are returned in gapSymbols parameter, else returns false._

#### TryGetTerminationSymbols
```csharp
Bio.IAlphabet.TryGetTerminationSymbols(System.Collections.Generic.HashSet{System.Byte}@)
```
Gets the termination symbols if present in the alphabet.

|Parameter Name|Remarks|
|--------------|-------|
|terminationSymbols|Termination symbols as hashset if the alphabet has one or more termination symbols.|

_returns: Returns true if the termination symbols are returned in trminationSymbols parameter, else returns false._

#### ValidateSequence
```csharp
Bio.IAlphabet.ValidateSequence(System.Byte[],System.Int64,System.Int64)
```
Validates if all symbols match with the specified alphabet type.

|Parameter Name|Remarks|
|--------------|-------|
|symbols|Symbols to be validated.|
|offset|Offset from where validation should start.|
|length|Number of symbols to validate from the specified offset.|

_returns: True if the validation succeeds, else false._



### Properties

#### Count
Gets the count of symbols present in this alphabet.
 This includes basic symbols, gaps, terminations and ambiguous symbols present in this alphabet.
#### HasAmbiguity
Gets a value indicating whether the alphabet has one or more symbols 
 that represent an ambiguous item (i.e. and item for which it is not 
 precisely known what it represents).
#### HasGaps
Gets a value indicating whether the alphabet has one or more symbols 
 that represent a gap.
#### HasTerminations
Gets a value indicating whether the alphabet has one or more symbols 
 that represent terminal items.
#### IsComplementSupported
Gets a value indicating whether this alphabet supports complement or not.
#### Item
Provides array like access to the symbols in this alphabet.
#### Name
Gets a human readable name for the alphabet. 
 For example "DNA", "RNA", or "Amino Acid".

