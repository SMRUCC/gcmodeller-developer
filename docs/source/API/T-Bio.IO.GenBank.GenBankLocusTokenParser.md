---
title: GenBankLocusTokenParser
---

# GenBankLocusTokenParser
_namespace: [Bio.IO.GenBank](N-Bio.IO.GenBank.html)_

Not all 3rd party programs respect the GenBank locus format. Due to this we cannot expect each item to lie in exact
 indices with respect to the locus. In order to parse this information based off of tokens we do have to make certain
 assumptions about the locus data, however this is well documented and for all but the ID field we know what the data type
 will be and what values it may contain.

### Methods

#### GetLocusTokenParsers
```csharp
Bio.IO.GenBank.GenBankLocusTokenParser.GetLocusTokenParsers(Bio.IO.GenBank.GenBankLocusInfo)
```
The LOCUS format has defined positions for each individual value in the LOCUS but through experimentation
 and some reading this format is not followed. Instead we have to parse each token and interpret which value
 each token belongs too. Luckily there is a standard set of values for all but the DATE and LOCUS ID, which we can 
 infer based on the string.

|Parameter Name|Remarks|
|--------------|-------|
|locus|-|


#### Parse
```csharp
Bio.IO.GenBank.GenBankLocusTokenParser.Parse(System.String)
```
Parses a locus string into a @"T:Bio.IO.GenBank.GenBankLocusInfo".

|Parameter Name|Remarks|
|--------------|-------|
|locusText|Locus text.|

_returns: 
            Locus containing the info in the passed in string.
            _




