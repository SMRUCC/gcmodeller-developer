---
title: AlphabetExtensions
---

# AlphabetExtensions
_namespace: [Bio.Extensions](N-Bio.Extensions.html)_

Alphabet extensions used to supplement the IAlphabet interface without
 requiring an implementation by the class.

### Methods

#### CheckIsAmbiguous
```csharp
Bio.Extensions.AlphabetExtensions.CheckIsAmbiguous(Bio.IAlphabet,System.Char)
```
Checks if the provided item is an ambiguous character or not

|Parameter Name|Remarks|
|--------------|-------|
|alphabet|Alphabet to test against.|
|item|Item to be checked|

_returns: True if the specified item is a ambiguous_

#### CheckIsGap
```csharp
Bio.Extensions.AlphabetExtensions.CheckIsGap(Bio.IAlphabet,System.Char)
```
Checks if the provided item is a gap character or not

|Parameter Name|Remarks|
|--------------|-------|
|alphabet|Alphabet to test against.|
|item|Item to be checked|

_returns: True if the specified item is a gap_

#### CheckIsTermination
```csharp
Bio.Extensions.AlphabetExtensions.CheckIsTermination(Bio.IAlphabet,System.Char)
```
This returns true/false if the given symbol value is considered a termination
 value in the alphabet.

|Parameter Name|Remarks|
|--------------|-------|
|alphabet|Alphabet to test|
|value|Value to check|

_returns: True if value is a termination symbol, false if terminations are not supported or value is not._

#### GetFriendlyName
```csharp
Bio.Extensions.AlphabetExtensions.GetFriendlyName(Bio.IAlphabet,System.Char)
```
Gets the friendly name of a given symbol.

|Parameter Name|Remarks|
|--------------|-------|
|alphabet|-|
|item|Symbol to find friendly name.|

_returns: Friendly name of the given symbol._




