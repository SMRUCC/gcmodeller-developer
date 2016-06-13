---
title: SequenceRangeParsers
---

# SequenceRangeParsers
_namespace: [Bio.IO](N-Bio.IO.html)_

SequenceRangeParsers class is an abstraction class which provides instances
 and lists of all Range-Parsers currently supported by .NET Bio.

### Methods

#### #cctor
```csharp
Bio.IO.SequenceRangeParsers.#cctor
```
Initializes static members of the SequenceRangeParsers class.

#### GetSequenceRangeParsers
```csharp
Bio.IO.SequenceRangeParsers.GetSequenceRangeParsers
```
Gets all the registered ISequenceRangeParser types.



### Properties

#### All
Gets the list of all Range-parsers which is supported by the framework.
#### bed
Gets an instance of BedParser class which is capable of
 parsing BED format files.
#### KnownParsers
List of all supported Range-Parsers.

