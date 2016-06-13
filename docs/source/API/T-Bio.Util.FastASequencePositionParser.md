---
title: FastASequencePositionParser
---

# FastASequencePositionParser
_namespace: [Bio.Util](N-Bio.Util.html)_

This class is similar to FastAParser except that this class appends the
 position of the sequence parsed to its id.

### Methods

#### #ctor
```csharp
Bio.Util.FastASequencePositionParser.#ctor(System.IO.Stream,System.Boolean)
```
Initializes a new instance of the FastASequencePositionParser class by 
 loading the specified stream.

|Parameter Name|Remarks|
|--------------|-------|
|stream|Stream to load|
|reverseReversePairedRead|Flag to indicate to get the forward strand sequence of a reverse paired read.|


#### CacheSequencesForRandomAccess
```csharp
Bio.Util.FastASequencePositionParser.CacheSequencesForRandomAccess
```
Loads sequences to cache.
 This method will ignore the call if sequences are already cached.

#### Dispose
```csharp
Bio.Util.FastASequencePositionParser.Dispose(System.Boolean)
```
Disposes the underlying stream.

|Parameter Name|Remarks|
|--------------|-------|
|disposing|Flag to indicate whether disposing or not.|


#### GetNextSequenceStartPosition
```csharp
Bio.Util.FastASequencePositionParser.GetNextSequenceStartPosition(System.IO.Stream)
```
Gets the next sequence start position in the file.

|Parameter Name|Remarks|
|--------------|-------|
|stream|FastA file stream.|

_returns: Position of the next sequence in the stream._

#### GetSequenceAt
```csharp
Bio.Util.FastASequencePositionParser.GetSequenceAt(System.Int64)
```
Gets the sequence at specified position.

|Parameter Name|Remarks|
|--------------|-------|
|position|Start position of the sequence required in the file.|

_returns: Sequence present at the specified position._

#### Parse
```csharp
Bio.Util.FastASequencePositionParser.Parse
```
Returns an IEnumerable of sequences in the file being parsed.
_returns: Returns ISequence arrays._

#### ParseFromFile
```csharp
Bio.Util.FastASequencePositionParser.ParseFromFile
```
Parses sequences from the file.



### Properties

#### Alphabet
Gets or sets the alphabet to use for parsed ISequence objects. If this is not set, the alphabet will
 be determined based on the file being parsed.
#### fastaParser
An instance of FastAParser.
#### reverseReversePairedRead
Flag to indicate to get the forward strand sequence of a reverse paired read.
#### sequenceCache
Sequence cache to hold sequences.
#### SequencesCached
Gets a value indicating whether the sequences are cached or not.
#### stream
Stream for this parser.

