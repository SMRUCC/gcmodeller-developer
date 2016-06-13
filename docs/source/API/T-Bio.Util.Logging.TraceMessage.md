---
title: TraceMessage
---

# TraceMessage
_namespace: [Bio.Util.Logging](N-Bio.Util.Logging.html)_

A TraceMessage is a simple message holding class.

### Methods

#### #ctor
```csharp
Bio.Util.Logging.TraceMessage.#ctor(System.String,System.String,System.String)
```
Initializes a new instance of the TraceMessage class to construct a message, using the current date/time.

|Parameter Name|Remarks|
|--------------|-------|
|c|The context parameter.|
|m|The message parameter.|
|d|The data parameter.|


#### Format
```csharp
Bio.Util.Logging.TraceMessage.Format
```
Convert a Trace.Message into a user-friendly string.
_returns: the string._



### Properties

#### context
The context where the event occurred, such as a method name, or
 a particular point in a complex operation.
#### data
Data associated with the event, such as argument values.
#### message
A description of the event.
#### when
When the event occurred.

