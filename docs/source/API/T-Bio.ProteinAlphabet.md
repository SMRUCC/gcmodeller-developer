---
title: ProteinAlphabet
---

# ProteinAlphabet
_namespace: [Bio](N-Bio.html)_

The basic alphabet that describes symbols used in sequences of amino
 acids that come from codon encodings of RNA. This alphabet allows for
 the twenty amino acids as well as a termination and gap symbol.
 
 The character representations come from the NCBIstdaa standard and
 are used in many sequence file formats. The NCBIstdaa standard has all
 the same characters as NCBIeaa and IUPACaa, but adds Selenocysteine,
 termination, and gap symbols to the latter.
 
 The entries in this dictionary are:
 Symbol - Extended Symbol - Name
 A - Ala - Alanine
 C - Cys - Cysteine
 D - Asp - Aspartic Acid
 E - Glu - Glutamic Acid
 F - Phe - Phenylalanine
 G - Gly - Glycine
 H - His - Histidine
 I - Ile - Isoleucine
 K - Lys - Lysine
 L - Leu - Leucine
 M - Met - Methionine
 N - Asn - Asparagine
 O - Pyl - Pyrrolysine
 P - Pro - Proline
 Q - Gln - Glutamine
 R - Arg - Arginine
 S - Ser - Serine
 T - Thr - Threoine
 U - Sel - Selenocysteine
 V - Val - Valine
 W - Trp - Tryptophan
 Y - Tyr - Tyrosine
 * - Ter - Termination
 - - --- - Gap.

### Methods

#### #cctor
```csharp
Bio.ProteinAlphabet.#cctor
```
Initializes static members of the ProteinAlphabet class
 Set up the static instance.

#### #ctor
```csharp
Bio.ProteinAlphabet.#ctor
```
Initializes a new instance of the ProteinAlphabet class.

#### AddAminoAcid
```csharp
Bio.ProteinAlphabet.AddAminoAcid(System.Byte,System.String,System.Byte[])
```
Adds a Amino acid to the existing amino acids.

|Parameter Name|Remarks|
|--------------|-------|
|aminoAcidValue|Amino acid to be added.|
|friendlyName|User friendly name of the symbol.|
|otherPossibleValues|Maps Capital and small Letters.|


#### CheckIsAmbiguous
```csharp
Bio.ProteinAlphabet.CheckIsAmbiguous(System.Byte)
```
Checks if the provided item is an ambiguous character or not

|Parameter Name|Remarks|
|--------------|-------|
|item|Item to be checked|

_returns: True if the specified item is a ambiguous_

#### CheckIsGap
```csharp
Bio.ProteinAlphabet.CheckIsGap(System.Byte)
```
Checks if the provided item is a gap character or not

|Parameter Name|Remarks|
|--------------|-------|
|item|Item to be checked|

_returns: True if the specified item is a gap_

#### CompareSymbols
```csharp
Bio.ProteinAlphabet.CompareSymbols(System.Byte,System.Byte)
```
Compares two symbols.

|Parameter Name|Remarks|
|--------------|-------|
|x|The first symbol to compare.|
|y|The second symbol to compare.|

_returns: Returns true if x equals y else false._

#### GetAmbiguousSymbols
```csharp
Bio.ProteinAlphabet.GetAmbiguousSymbols
```
Gets the ambigious characters present in alphabet.

#### GetConsensusSymbol
```csharp
Bio.ProteinAlphabet.GetConsensusSymbol(System.Collections.Generic.HashSet{System.Byte})
```
Find the consensus nucleotide for a set of nucleotides.

|Parameter Name|Remarks|
|--------------|-------|
|symbols|Set of sequence items.|

_returns: Consensus nucleotide._

#### GetEnumerator
```csharp
Bio.ProteinAlphabet.GetEnumerator
```
Byte array of nucleotides.
_returns: Returns the Enumerator for nucleotides list._

#### GetFriendlyName
```csharp
Bio.ProteinAlphabet.GetFriendlyName(System.Byte)
```
Gets the friendly name of a given symbol.

|Parameter Name|Remarks|
|--------------|-------|
|item|Symbol to find friendly name.|

_returns: Friendly name of the given symbol._

#### GetSymbolValueMap
```csharp
Bio.ProteinAlphabet.GetSymbolValueMap
```
Maps A to A and a to A
 that is key will contain unique values.
 This will be used in the IsValidSymbol method to address Scenarios like a == A, G == g etc.

#### GetValidSymbols
```csharp
Bio.ProteinAlphabet.GetValidSymbols
```
Gets the valid symbol.
_returns: Returns HashSet of valid symbols._

#### MapAmbiguousAminoAcid
```csharp
Bio.ProteinAlphabet.MapAmbiguousAminoAcid(System.Byte,System.Byte[])
```
Maps the ambiguous amino acids to the amino acids it represents. 
 For example ambiguous amino acids M represents the basic nucleotides A or C.

|Parameter Name|Remarks|
|--------------|-------|
|ambiguousAminoAcid|Ambiguous amino acids.|
|aminoAcidsToMap|Nucleotide represented by ambiguous amino acids.|


#### System#Collections#IEnumerable#GetEnumerator
```csharp
Bio.ProteinAlphabet.System#Collections#IEnumerable#GetEnumerator
```
Creates an IEnumerator of the nucleotides.
_returns: Returns Enumerator over alphabet values._

#### ToString
```csharp
Bio.ProteinAlphabet.ToString
```
Converts the Protein Alphabets to string.
_returns: Protein alphabets._

#### TryGetAmbiguousSymbol
```csharp
Bio.ProteinAlphabet.TryGetAmbiguousSymbol(System.Collections.Generic.HashSet{System.Byte},System.Byte@)
```
Gets the Ambiguous symbol.

|Parameter Name|Remarks|
|--------------|-------|
|symbols|The symbol.|
|ambiguousSymbol|The Ambiguous symbol.|

_returns: Returns true if it gets the Ambiguous symbol._

#### TryGetBasicSymbols
```csharp
Bio.ProteinAlphabet.TryGetBasicSymbols(System.Byte,System.Collections.Generic.HashSet{System.Byte}@)
```
Gets the Basic symbol.

|Parameter Name|Remarks|
|--------------|-------|
|ambiguousSymbol|The Ambiguous symbol.|
|basicSymbols|The Basic symbol.|

_returns: Returns true if it gets the Basic symbol._

#### TryGetComplementSymbol
```csharp
Bio.ProteinAlphabet.TryGetComplementSymbol(System.Byte[],System.Byte[]@)
```
This method tries to get the complements for specified symbols.

|Parameter Name|Remarks|
|--------------|-------|
|symbols|Symbols to look up.|
|complementSymbols|Complement  symbols (output).|

_returns: Returns true if found else false._

#### TryGetDefaultGapSymbol
```csharp
Bio.ProteinAlphabet.TryGetDefaultGapSymbol(System.Byte@)
```
Gets the default Gap symbol.

|Parameter Name|Remarks|
|--------------|-------|
|defaultGapSymbol|The default symbol.|

_returns: Returns true if it gets the Default Gap Symbol._

#### TryGetDefaultTerminationSymbol
```csharp
Bio.ProteinAlphabet.TryGetDefaultTerminationSymbol(System.Byte@)
```
Gets the default Termination symbol.

|Parameter Name|Remarks|
|--------------|-------|
|defaultTerminationSymbol|The default Termination symbol.|

_returns: Returns true if it gets the  default Termination symbol._

#### TryGetGapSymbols
```csharp
Bio.ProteinAlphabet.TryGetGapSymbols(System.Collections.Generic.HashSet{System.Byte}@)
```
Gets the Gap symbol.

|Parameter Name|Remarks|
|--------------|-------|
|gapSymbols|The Gap Symbol.|

_returns: Returns true if it gets the  Gap symbol._

#### TryGetTerminationSymbols
```csharp
Bio.ProteinAlphabet.TryGetTerminationSymbols(System.Collections.Generic.HashSet{System.Byte}@)
```
Gets the Termination symbol.

|Parameter Name|Remarks|
|--------------|-------|
|terminationSymbols|The Termination symbol.|

_returns: Returns true if it gets the Termination symbol._

#### ValidateSequence
```csharp
Bio.ProteinAlphabet.ValidateSequence(System.Byte[],System.Int64,System.Int64)
```
Validates if all symbols provided are Protein symbols or not.

|Parameter Name|Remarks|
|--------------|-------|
|symbols|Symbols to be validated.|
|offset|Offset from where validation should start.|
|length|Number of symbols to validate from the specified offset.|

_returns: True if the validation succeeds, else false._



### Properties

#### A
Gets the Alanine Amino acid.
#### ambiguousSyToBasicSymbolsMap
Mapping from ambiguous symbol to set of basic symbols they represent.
#### aminoAcids
Holds the amino acids present in this RnaAlphabet.
#### aminoAcidValueMap
Amino acids map - Maps A to A and a to A
 that is key will contain unique values.
 This will be used in the IsValidSymbol method to address Scenarios like a == A, G == g etc.
#### basicSymbols
Contains only basic symbols including Gap
#### basicSymbolsToAmbiguousSymbolMap
Mapping from set of symbols to corresponding ambiguous symbol.
#### C
Gets the Cysteine Amino acid.
#### Count
Gets count of nucleotides.
#### D
Gets the Aspartic Acid.
#### E
Gets the Glutamic Acid.
#### F
Gets the Phenylalanine Amino acid.
#### friendlyNameMap
Symbol to Friendly name mapping.
#### G
Gets the Glycine Amino acid.
#### Gap
Gets the Gap character.
#### H
Gets the Histidine Amino acid.
#### HasAmbiguity
Gets or sets a value indicating whether this alphabet has ambiguous characters.
 This alphabet does have ambiguous characters.
#### HasGaps
Gets or sets a value indicating whether this alphabet has a gap character.
 This alphabet does have a gap character.
#### HasTerminations
Gets or sets a value indicating whether this alphabet has termination characters.
 This alphabet does have termination characters.
#### I
Gets the Isoleucine Amino acid.
#### Instance
Instance of this class.
#### IsComplementSupported
Gets or sets a value indicating whether complement is supported or not.
#### Item
Gets the byte value of item at the given index.
#### K
Gets the Lysine Amino acid.
#### L
Gets the Leucine Amino acid.
#### M
Gets the Methionine Amino acid.
#### N
Gets the Asparagine Amino acid.
#### Name
Gets or sets the name of this alphabet - this is always 'Protein'.
#### O
Gets the Pyrrolysine Amino acid.
#### P
Gets the Proline Amino acid.
#### Q
Gets the Glutamine Amino acid.
#### R
Gets the Arginine Amino acid.
#### S
Gets the Serine Amino acid.
#### T
Gets the Threoine Amino acid.
#### Ter
Gets the Termination character.
#### U
Gets the Selenocysteine Amino acid.
#### V
Gets the Valine Amino acid.
#### W
Gets the Tryptophan Amino acid.
#### Y
Gets the Tyrosine Amino acid.

