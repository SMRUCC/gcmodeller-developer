---
title: RnaAlphabet
---

# RnaAlphabet
_namespace: [Bio](N-Bio.html)_

The basic alphabet that describes symbols used in RNA sequences.
 This alphabet allows not only for the four base nucleotide symbols,
 but also for various ambiguities, termination, and gap symbols.
 
 The symbol representations come from the NCBI4na standard and
 are used in many sequence file formats. The NCBI4na standard is the
 same as the IUPACna standard with only the addition of the gap
 symbol.
 
 The entries in this dictionary are:
 Symbol - Name
 A - Adenine
 C - Cytosine
 M - A or C
 G - Guanine
 R - G or A
 S - G or C
 V - G or V or A
 U - Uracil
 W - A or U
 Y - U or C
 H - A or C or U
 K - G or U
 D - G or A or U
 B - G or U or C
 - - Gap
 N - A or G or U or C.

### Methods

#### #cctor
```csharp
Bio.RnaAlphabet.#cctor
```
Initializes static members of the RnaAlphabet class.

#### #ctor
```csharp
Bio.RnaAlphabet.#ctor
```
Initializes a new instance of the RnaAlphabet class.

#### AddNucleotide
```csharp
Bio.RnaAlphabet.AddNucleotide(System.Byte,System.String,System.Byte[])
```
Verify whether the nucleotide value or other possible values already exist or not.

|Parameter Name|Remarks|
|--------------|-------|
|nucleotideValue|The nucleotideValue.|
|friendlyName|User friendly name of the symbol.|
|otherPossibleValues|The otherPosibleValues.|


#### CheckIsAmbiguous
```csharp
Bio.RnaAlphabet.CheckIsAmbiguous(System.Byte)
```
Checks if the provided item is an ambiguous character or not

|Parameter Name|Remarks|
|--------------|-------|
|item|Item to be checked|

_returns: True if the specified item is a ambiguous_

#### CheckIsGap
```csharp
Bio.RnaAlphabet.CheckIsGap(System.Byte)
```
Checks if the provided item is a gap character or not

|Parameter Name|Remarks|
|--------------|-------|
|item|Item to be checked|

_returns: True if the specified item is a gap_

#### CompareSymbols
```csharp
Bio.RnaAlphabet.CompareSymbols(System.Byte,System.Byte)
```
Compares two symbols.

|Parameter Name|Remarks|
|--------------|-------|
|x|The first symbol to compare.|
|y|The second symbol to compare.|

_returns: Returns true if x equals y else false._

#### GetAmbiguousSymbols
```csharp
Bio.RnaAlphabet.GetAmbiguousSymbols
```
Gets the ambiguous symbols present in alphabet.

#### GetConsensusSymbol
```csharp
Bio.RnaAlphabet.GetConsensusSymbol(System.Collections.Generic.HashSet{System.Byte})
```
Find the consensus nucleotide for a set of nucleotides.

|Parameter Name|Remarks|
|--------------|-------|
|symbols|Set of sequence items.|

_returns: Consensus nucleotide._

#### GetEnumerator
```csharp
Bio.RnaAlphabet.GetEnumerator
```
Byte array of nucleotides.
_returns: Returns the Enumerator for nucleotides list._

#### GetFriendlyName
```csharp
Bio.RnaAlphabet.GetFriendlyName(System.Byte)
```
Gets the friendly name of a given symbol.

|Parameter Name|Remarks|
|--------------|-------|
|item|Symbol to find friendly name.|

_returns: Friendly name of the given symbol._

#### GetSymbolValueMap
```csharp
Bio.RnaAlphabet.GetSymbolValueMap
```
Maps A to A and a to A
 that is key will contain unique values.
 This will be used in the IsValidSymbol method to address Scenarios like a == A, G == g etc.

#### GetValidSymbols
```csharp
Bio.RnaAlphabet.GetValidSymbols
```
Get the valid symbols in the alphabet.
_returns: True if gets else false._

#### MapAmbiguousNucleotide
```csharp
Bio.RnaAlphabet.MapAmbiguousNucleotide(System.Byte,System.Byte[])
```
Maps the ambiguous nucleotide to the nucleotides it represents. 
 For example ambiguous nucleotide M represents the basic nucleotides A or C.

|Parameter Name|Remarks|
|--------------|-------|
|ambiguousNucleotide|Ambiguous nucleotide.|
|nucleotidesToMap|Nucleotide represented by ambiguous nucleotide.|


#### MapComplementNucleotide
```csharp
Bio.RnaAlphabet.MapComplementNucleotide(System.Byte,System.Byte)
```
Verify whether the nucleotides exist or not.

|Parameter Name|Remarks|
|--------------|-------|
|nucleotide|The Nucleotide.|
|complementNucleotide|Complement Nucleotide.|


#### System#Collections#IEnumerable#GetEnumerator
```csharp
Bio.RnaAlphabet.System#Collections#IEnumerable#GetEnumerator
```
Creates an IEnumerator of the nucleotides.

#### ToString
```csharp
Bio.RnaAlphabet.ToString
```
Converts the RNA Alphabets.
_returns: RNA alphabets._

#### TryGetAmbiguousSymbol
```csharp
Bio.RnaAlphabet.TryGetAmbiguousSymbol(System.Collections.Generic.HashSet{System.Byte},System.Byte@)
```
Get the ambiguous symbols if present in the alphabet.

|Parameter Name|Remarks|
|--------------|-------|
|symbols|The symbols.|
|ambiguousSymbol|Ambiguous Symbol. |

_returns: True if gets else false._

#### TryGetBasicSymbols
```csharp
Bio.RnaAlphabet.TryGetBasicSymbols(System.Byte,System.Collections.Generic.HashSet{System.Byte}@)
```
Get the basic symbols if present in the alphabet.

|Parameter Name|Remarks|
|--------------|-------|
|ambiguousSymbol|The ambiguousSymbol.|
|basicSymbols|The basicSymbols.|

_returns: True if gets else false._

#### TryGetComplementSymbol
```csharp
Bio.RnaAlphabet.TryGetComplementSymbol(System.Byte[],System.Byte[]@)
```
This method tries to get the complements for specified symbols.

|Parameter Name|Remarks|
|--------------|-------|
|symbols|Symbols to look up.|
|complementSymbols|Complement  symbols (output).|

_returns: Returns true if found else false._

#### TryGetDefaultGapSymbol
```csharp
Bio.RnaAlphabet.TryGetDefaultGapSymbol(System.Byte@)
```
Try to get the default gap symbol.

|Parameter Name|Remarks|
|--------------|-------|
|defaultGapSymbol|Default gap symbol (output).|

_returns: True if gets else false._

#### TryGetDefaultTerminationSymbol
```csharp
Bio.RnaAlphabet.TryGetDefaultTerminationSymbol(System.Byte@)
```
Get the termination symbols if present in the alphabet.

|Parameter Name|Remarks|
|--------------|-------|
|defaultTerminationSymbol|The default Termination Symbol.|

_returns: True if gets else false._

#### TryGetGapSymbols
```csharp
Bio.RnaAlphabet.TryGetGapSymbols(System.Collections.Generic.HashSet{System.Byte}@)
```
Get the gap symbols if present in the alphabet.

|Parameter Name|Remarks|
|--------------|-------|
|gapSymbols|Hashset of gap Symbols.|

_returns: If Gaps found returns true. _

#### TryGetTerminationSymbols
```csharp
Bio.RnaAlphabet.TryGetTerminationSymbols(System.Collections.Generic.HashSet{System.Byte}@)
```
Get the termination symbols if present in the alphabet.

|Parameter Name|Remarks|
|--------------|-------|
|terminationSymbols|Termination Symbols.|

_returns: True if gets else false._

#### ValidateSequence
```csharp
Bio.RnaAlphabet.ValidateSequence(System.Byte[],System.Int64,System.Int64)
```
Validates if all symbols provided are RNA symbols or not.

|Parameter Name|Remarks|
|--------------|-------|
|symbols|Symbols to be validated.|
|offset|Offset from where validation should start.|
|length|Number of symbols to validate from the specified offset.|

_returns: True if the validation succeeds, else false._



### Properties

#### A
Gets A - Adenine.
#### ambiguousSyToBasicSymbolsMap
Mapping from ambiguous symbol to set of basic symbols they represent.
#### basicSymbols
Contains only basic symbols including Gap
#### basicSymbolsToAmbiguousSymbolMap
Mapping from set of symbols to corresponding ambiguous symbol.
#### C
Gets C - Cytosine.
#### Count
Gets count of nucleotides.
#### friendlyNameMap
Symbol to Friendly name mapping.
#### G
Gets G - Guanine.
#### Gap
Gets Default Gap symbol.
#### HasAmbiguity
Gets or sets a value indicating whether this alphabet has ambiguous symbols.
 This alphabet does have ambiguous symbols.
#### HasGaps
Gets or sets a value indicating whether this alphabet has a gap symbol.
 This alphabet does have a gap symbol.
#### HasTerminations
Gets or sets a value indicating whether this alphabet has termination symbols.
 This alphabet does not have termination symbols.
#### Instance
Static instance of this class.
#### IsComplementSupported
Gets or sets a value indicating whether this Complement is supported on this Alphabet.
 This alphabet has support for complement.
#### Item
Gets the byte value of item at the given index.
#### Name
Gets or sets Friendly name for Alphabet type.
#### nucleotides
Holds the nucleotides present in this DnaAlphabet.
#### nucleotideValueMap
Nucleotide map - Maps A to A and a to A
 that is key will contain unique values.
 This will be used in the IsValidSymbol method to address Scenarios like a == A, G == g etc.
#### symbolToComplementSymbolMap
Holds complements.
#### U
Gets U - Uracil.

