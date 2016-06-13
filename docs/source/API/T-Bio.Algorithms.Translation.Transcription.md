---
title: Transcription
---

# Transcription
_namespace: [Bio.Algorithms.Translation](N-Bio.Algorithms.Translation.html)_

Provides basic nucleotide transcription across DNA and RNA sequences.
 Static methods in the class provide lookup for single nucleotide
 complements as well as creating RNA (transcription) or DNA (reverse
 transcription) from a DNA or RNA sequence, respectively.

### Methods

#### #cctor
```csharp
Bio.Algorithms.Translation.Transcription.#cctor
```
Initializes the transcription dictionary.

#### GetDnaComplement
```csharp
Bio.Algorithms.Translation.Transcription.GetDnaComplement(System.Byte)
```
Returns the complement nucleotide from RNA to DNA. This also
 respects ambiguous characters in the DNA and RNA alphabet.

|Parameter Name|Remarks|
|--------------|-------|
|rnaSource|The RNA source.|

_returns: The complement DNA character._

#### GetRnaComplement
```csharp
Bio.Algorithms.Translation.Transcription.GetRnaComplement(System.Byte)
```
Returns the complement nucleotide from DNA to RNA. This also
 respects ambiguous characters in the DNA and RNA alphabet.

|Parameter Name|Remarks|
|--------------|-------|
|dnaSource|The DNA source.|

_returns: The complement RNA character._

#### ReverseTranscribe
```csharp
Bio.Algorithms.Translation.Transcription.ReverseTranscribe(Bio.ISequence)
```
Does reverse transcription from an RNA sequence into an DNA sequence.
 The length of the resulting sequence will equal the length of the source
 sequence. Gap and ambiguous characters will also be transcribed.
 For example:
 Sequence rna = new Sequence(Alphabets.RNA, "UACCGC");
 Sequence dna = Transcription.ReverseTranscribe(rna);
 dna.ToString() would produce "ATGGCG"

|Parameter Name|Remarks|
|--------------|-------|
|rnaSource|The RNA source sequence to be reverse transcribed.|

_returns: The reverse transcribed DNA sequence._

#### Transcribe
```csharp
Bio.Algorithms.Translation.Transcription.Transcribe(Bio.ISequence)
```
Transcribes a DNA sequence into an RNA sequence. The length
 of the resulting sequence will equal the length of the source
 sequence. Gap and ambiguous characters will also be transcribed.
 For example:
 Sequence dna = new Sequence(Alphabets.DNA, "TACCGC");
 Sequence rna = Transcription.Transcribe(dna);
 rna.ToString() would produce "AUGGCG"

|Parameter Name|Remarks|
|--------------|-------|
|dnaSource|The dna source sequence to be transcribed.|

_returns: The transcribed RNA sequence._



### Properties

#### dnaToRna
The DNA to RNA mapping dictionary.
#### rnaToDna
The RNA to DNA mapping dictionary.

