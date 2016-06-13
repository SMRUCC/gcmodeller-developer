---
title: ApplicationLog
---

# ApplicationLog
_namespace: [Bio.Util.Logging](N-Bio.Util.Logging.html)_

log is a class that implements straightforward logging to a text file, 
 and tries to minimize clutter of the code that uses it.

### Methods

#### Exception
```csharp
Bio.Util.Logging.ApplicationLog.Exception(System.Exception)
```
Write an exception's message, its inner exception's message, and the
 stack trace to the log.

|Parameter Name|Remarks|
|--------------|-------|
|exception|the Exception|

_returns: the formatted string that was written_

#### Write
```csharp
Bio.Util.Logging.ApplicationLog.Write(System.String,System.Object[])
```
Write a formatted string to the output.
 Same syntax as Stream.Write().

|Parameter Name|Remarks|
|--------------|-------|
|fmt|the format string|
|args|additional arguments|

_returns: the formatted string that was written_

#### WriteLine
```csharp
Bio.Util.Logging.ApplicationLog.WriteLine(System.String,System.Object[])
```
Write a formatted string to the output, then a newline.
 Same syntax as Stream.WriteLine().

|Parameter Name|Remarks|
|--------------|-------|
|fmt|the format string|
|args|additional arguments|

_returns: the formatted string that was written_

#### WriteTime
```csharp
Bio.Util.Logging.ApplicationLog.WriteTime(System.String,System.Object[])
```
Write a formatted string to output, with the current date/time
 prepended, and a newline appended.

|Parameter Name|Remarks|
|--------------|-------|
|fmt|the format string|
|args|additional arguments|

_returns: the formatted string (including date/time) that was written_




