---
title: SequenceRangeFormatters
---

# SequenceRangeFormatters
_namespace: [Bio.IO](N-Bio.IO.html)_

SequenceRangeFormatter class is an abstraction class which provides instances
 and lists of all Range-Formatter currently supported by .NET Bio.

### Methods

#### #cctor
```csharp
Bio.IO.SequenceRangeFormatters.#cctor
```
Initializes static members of the SequenceRangeFormatters class.

#### GetSequenceRangeFormatters
```csharp
Bio.IO.SequenceRangeFormatters.GetSequenceRangeFormatters
```
Gets all registered formatters in core folder and addins (optional) folders.
_returns: List of registered parsers._



### Properties

#### All
Gets the list of all range-formatters supported by the framework.
#### bed
Gets an instance of BedFormatter class which is capable of
 saving a ISequenceRange according to the BED file format.
#### KnownFormatters
List of all supported Range-Formatters.

