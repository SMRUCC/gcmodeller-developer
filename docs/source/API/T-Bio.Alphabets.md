---
title: Alphabets
---

# Alphabets
_namespace: [Bio](N-Bio.html)_

The currently supported and built-in alphabets for sequence items.

### Methods

#### #cctor
```csharp
Bio.Alphabets.#cctor
```
Initializes static members of the Alphabets class.

#### AutoDetectAlphabet
```csharp
Bio.Alphabets.AutoDetectAlphabet(System.Byte[],System.Int64,System.Int64,Bio.IAlphabet)
```
This methods loops through supported alphabet types and tries to identify
 the best alphabet type for the given symbols.

|Parameter Name|Remarks|
|--------------|-------|
|symbols|Symbols on which auto detection should be performed.|
|offset|Offset from which the auto detection should start.|
|length|Number of symbols to process from the offset position.|
|identifiedAlphabetType|In case the symbols passed are a sub set of a bigger sequence, 
            provide the already identified alphabet type of the sequence.|

_returns: Returns the detected alphabet type or null if detection fails._

#### CheckIsFromSameBase
```csharp
Bio.Alphabets.CheckIsFromSameBase(Bio.IAlphabet,Bio.IAlphabet)
```
Verifies if two given alphabets comes from the same base alphabet.

|Parameter Name|Remarks|
|--------------|-------|
|alphabetA|First alphabet to compare.|
|alphabetB|Second alphabet to compare.|

_returns: True if both alphabets comes from the same base class._

#### GetAlphabets
```csharp
Bio.Alphabets.GetAlphabets
```
Gets all registered alphabets in core folder and addins (optional) folders.
_returns: List of registered alphabets._

#### GetAmbiguousAlphabet
```csharp
Bio.Alphabets.GetAmbiguousAlphabet(Bio.IAlphabet)
```
Gets the ambiguous alphabet

|Parameter Name|Remarks|
|--------------|-------|
|currentAlphabet|Alphabet to validate|


#### MapAlphabetToAmbiguousAlphabet
```csharp
Bio.Alphabets.MapAlphabetToAmbiguousAlphabet(Bio.IAlphabet,Bio.IAlphabet)
```
Maps the alphabet to its ambiguous alphabet.
 For example: DnaAlphabet to AmbiguousDnaAlphabet.

|Parameter Name|Remarks|
|--------------|-------|
|alphabet|Alphabet to map.|
|ambiguousAlphabet|Ambiguous alphabet to map.|


#### MapAlphabetToBaseAlphabet
```csharp
Bio.Alphabets.MapAlphabetToBaseAlphabet(Bio.IAlphabet,Bio.IAlphabet)
```
Maps the alphabet to its base alphabet.
 For example: AmbiguousDnaAlphabet to DnaAlphabet

|Parameter Name|Remarks|
|--------------|-------|
|alphabet|Alphabet to map.|
|baseAlphabet|Base alphabet to map.|




### Properties

#### All
Gets the list of all Alphabets which are supported by the framework.
#### AlphabetPriorityList
List of alphabet instances according to their priority in auto detection
 Auto detection starts from top of the list.
#### AlphabetToBaseAlphabetMap
Mapping between an alphabet type and its corresponding base alphabet type.
#### AmbiguousAlphabetMap
Mapping between an alphabet type and its corresponding ambiguous alphabet type.
#### AmbiguousDNA
The Ambiguous DNA alphabet.
#### AmbiguousProtein
The Ambiguous protein alphabet consisting of amino acids.
#### AmbiguousRNA
The Ambiguous RNA alphabet.
#### DNA
The DNA alphabet.
#### KnownAlphabets
List of all supported Alphabets.
#### Protein
The protein alphabet consisting of amino acids.
#### RNA
The RNA alphabet.

