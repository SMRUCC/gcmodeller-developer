---
title: SAMDnaAlphabet
---

# SAMDnaAlphabet
_namespace: [Bio.IO.SAM](N-Bio.IO.SAM.html)_

SAM Dna Alphabet, Supports "=ACMGRSVTWYHKDBN." symbols.

### Methods

#### #ctor
```csharp
Bio.IO.SAM.SAMDnaAlphabet.#ctor
```
Initializes a new instance of the SAMDnaAlphabet class.

#### CheckIsAmbiguous
```csharp
Bio.IO.SAM.SAMDnaAlphabet.CheckIsAmbiguous(System.Byte)
```
Checks if the provided item is an ambiguous character or not
 Note: for '=' and '.' symbols this method returns false.

|Parameter Name|Remarks|
|--------------|-------|
|item|Item to be checked|

_returns: True if the specified item is a ambiguous_



### Properties

#### Dot
Gets symbol "." (Space holder to represent Intron).
 As per the Specification Version 0.1.2-draft (20090820) and 1.4-r985
 In a split alignment "..." represents Intron.
#### Equal
Gets the SAM symbol "=" (Equal to reference symbol)
#### Instance
Singleton instance of SAMDnaAlphabet.

