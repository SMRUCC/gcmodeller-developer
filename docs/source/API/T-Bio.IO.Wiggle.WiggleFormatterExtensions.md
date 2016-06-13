---
title: WiggleFormatterExtensions
---

# WiggleFormatterExtensions
_namespace: [Bio.IO.Wiggle](N-Bio.IO.Wiggle.html)_

Extension methods for sequence formatters

### Methods

#### Close
```csharp
Bio.IO.Wiggle.WiggleFormatterExtensions.Close(Bio.IO.Wiggle.WiggleFormatter)
```
Closes the formatter.

|Parameter Name|Remarks|
|--------------|-------|
|formatter|Formatter.|


#### Format
```csharp
Bio.IO.Wiggle.WiggleFormatterExtensions.Format(Bio.IO.Wiggle.WiggleFormatter,Bio.IO.Wiggle.WiggleAnnotation,System.String)
```
Writes a single sequence to the formatter.

|Parameter Name|Remarks|
|--------------|-------|
|formatter|Formatter|
|annotation|Wiggle Annotation|
|filename|Filename|


#### Open
```csharp
Bio.IO.Wiggle.WiggleFormatterExtensions.Open(Bio.IO.Wiggle.WiggleFormatter,System.String)
```
Open a file and parse it with the sequence formatter.

|Parameter Name|Remarks|
|--------------|-------|
|formatter|Formatter|
|filename|Filename|

_returns: IDisposable to close stream._




