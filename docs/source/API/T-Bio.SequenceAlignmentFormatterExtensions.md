---
title: SequenceAlignmentFormatterExtensions
---

# SequenceAlignmentFormatterExtensions
_namespace: [Bio](N-Bio.html)_

Extension methods for sequence formatters

### Methods

#### Close
```csharp
Bio.SequenceAlignmentFormatterExtensions.Close(Bio.IO.ISequenceAlignmentFormatter)
```
Closes the formatter.

|Parameter Name|Remarks|
|--------------|-------|
|formatter|Formatter.|


#### Format
```csharp
Bio.SequenceAlignmentFormatterExtensions.Format(Bio.IO.ISequenceAlignmentFormatter,Bio.Algorithms.Alignment.ISequenceAlignment,System.String)
```
Writes a sequence to the formatter.

|Parameter Name|Remarks|
|--------------|-------|
|formatter|Formatter|
|sequence|Sequence to write.|
|fileName|Filename to write to|


#### Open
```csharp
Bio.SequenceAlignmentFormatterExtensions.Open(Bio.IO.ISequenceAlignmentFormatter,System.String)
```
Open a file and parse it with the sequence formatter.

|Parameter Name|Remarks|
|--------------|-------|
|formatter|Formatter|
|filename|Filename|

_returns: IDisposable to close stream._




