---
title: SimilarityMatrix
---

# SimilarityMatrix
_namespace: [Bio.SimilarityMatrices](N-Bio.SimilarityMatrices.html)_

Representation of a matrix that contains similarity scores for every 
 pair of symbols in an alphabet. BLOSUM and PAM are well-known examples.

### Methods

#### #ctor
```csharp
Bio.SimilarityMatrices.SimilarityMatrix.#ctor
```
Initializes a new instance of the SimilarityMatrix class.
> 
>             File or stream format:
>             There are two slightly different formats.
>             
>             For custom similarity matrices:
>             First line is descriptive name, will be stored as a string.
>             Second line define the molecule type.  Must be "DNA", "RNA", or "Protein".
>             Third line is alphabet (symbol map). It contains n characters and optional white space.
>             Following lines are values for each row of matrix
>             Must be n numbers per line, n lines
>             
>             In some cases the molecule type is implicit in the matrix.  This is true for the
>             supported standard matrices (BLOSUM and PAM series at this point), and for the standard
>             encodings IUPACna, NCBIA2na, NCBI2na, NCBI4na, and NCBIeaa.
>             For these cases:
>             First line is descriptive name, will be stored as a string.
>             Second line is the encoding name for the standard encodings (IUPACna, NCBIA2na, NCBI2na, NCBI4na, or NCBIeaa)
>                 or the alphabet (symbol map) for the standard matrices.
>             Following lines are values for each row of matrix
>             Must be n numbers per line, n lines; or in the case of the supported encoding, sufficient
>             entries to handle all possible indices (0 through max index value).
>             

#### LoadFromStream
```csharp
Bio.SimilarityMatrices.SimilarityMatrix.LoadFromStream(System.IO.TextReader,Bio.IAlphabet)
```
Reads similarity matrix from a stream. File (or stream) format defined
 above with constructors to create SimilarityMatrix from stream or file.

|Parameter Name|Remarks|
|--------------|-------|
|reader|Text reader associated with the input sequence stream.|
|moleculeType|Molecule type supported by SimilarityMatrix.|


#### ValidateSequence
```csharp
Bio.SimilarityMatrices.SimilarityMatrix.ValidateSequence(Bio.ISequence)
```
Confirms that there is a symbol in the similarity matrix for every
 symbol in the sequence.

|Parameter Name|Remarks|
|--------------|-------|
|sequence|Sequence to validate.|

_returns: true if sequence is valid._



### Properties

#### Item
Returns value of matrix at [row, col].
#### Matrix
Gets or sets similarity matrix values in a 2-D integer array.
#### Name
Gets or sets descriptive name of the particular SimilarityMatrix being used.
#### similarityMatrix
Array containing the scores for each pair of symbols.
 The indices of the array are byte values of alphabet symbols.
#### supportedAlphabets


