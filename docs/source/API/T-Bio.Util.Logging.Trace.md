---
title: Trace
---

# Trace
_namespace: [Bio.Util.Logging](N-Bio.Util.Logging.html)_

The Trace class implements a mechanism for logging messages, both to a Log object,
 and to a simple message queue that can be used for GUI display or other purposes.

### Methods

#### Clear
```csharp
Bio.Util.Logging.Trace.Clear(System.UInt64)
```
Clear a flag, expressed as a set bit in a ulong.

|Parameter Name|Remarks|
|--------------|-------|
|traceSettings|The bit to clear.|


#### GetMessage
```csharp
Bio.Util.Logging.Trace.GetMessage(System.Int32)
```
return the ith message in the queue (0 = newest).

|Parameter Name|Remarks|
|--------------|-------|
|i|the index.|

_returns: the TraceMessage._

#### LatestMessage
```csharp
Bio.Util.Logging.Trace.LatestMessage
```
Return the newest message in the queue (or null, if none).
_returns: a TraceMessage._

#### Report
```csharp
Bio.Util.Logging.Trace.Report(System.String)
```
Overload to report from a plain string.

|Parameter Name|Remarks|
|--------------|-------|
|message|the message.|


#### Set
```csharp
Bio.Util.Logging.Trace.Set(System.UInt64)
```
Turn on a flag, expressed as a set bit in a ulong.

|Parameter Name|Remarks|
|--------------|-------|
|traceSettings|The bit to set.|


#### TrimToSize
```csharp
Bio.Util.Logging.Trace.TrimToSize
```
TrimToSize method

#### Want
```csharp
Bio.Util.Logging.Trace.Want(System.UInt64)
```
Test to see if a flag is in the set of flags currently turned on.

|Parameter Name|Remarks|
|--------------|-------|
|traceSettings|a flag, encoded as a single bit in a ulong.|

_returns: true if the flag is set._



### Properties

#### AssemblyDetails
Flag to report details of sequence assembly into the log.
#### DefaultMaxMessages
Default maxiumum messages
#### flags
flags variable
#### maxMessages
maximum messages
#### Messages
list of trace messages
#### SeqWarnings
Flag to report non-fatal sequence parsing/formatting errors.

