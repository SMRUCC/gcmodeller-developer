---
title: CounterWithMessages
---

# CounterWithMessages
_namespace: [Bio.Util](N-Bio.Util.html)_

Writes messages to the console every so many increments.

### Methods

#### #ctor
```csharp
Bio.Util.CounterWithMessages.#ctor(System.String,System.Int32,System.Nullable{System.Int32},System.Boolean)
```
Create a counter that will output messages to the console every so many increments. Incrementing is thread-safe.

|Parameter Name|Remarks|
|--------------|-------|
|formatStringWithOneOrTwoPlaceholders|A format string with containing at least {0} and, optionally, {1}.|
|messageInterval|How often messages should be output, in increments.|
|totalCountOrNull|The total number of increments, or null if not known.|
|quiet|if true, doesn't output to the console.|

_returns: A counter_

#### Increment
```csharp
Bio.Util.CounterWithMessages.Increment
```
Increment the counter by one. Incrementing is thread-safe.



### Properties

#### Index
The number of increments so far.
#### Quiet
If true, doesn't send any messages to the console; just counts.

