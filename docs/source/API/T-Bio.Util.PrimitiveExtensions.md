---
title: PrimitiveExtensions
---

# PrimitiveExtensions
_namespace: [Bio.Util](N-Bio.Util.html)_

PrimitiveExtensions

### Methods

#### Enforce
```csharp
Bio.Util.PrimitiveExtensions.Enforce(System.Boolean,System.String,System.Object[])
```
Enforce

|Parameter Name|Remarks|
|--------------|-------|
|condition|condition|
|messageToFormat|messageToFormat|
|formatValues|formatValues|

_returns: bool_

#### Enforce``1
```csharp
Bio.Util.PrimitiveExtensions.Enforce``1(System.Boolean,System.String,System.Object[])
```
Confirms that a condition is true. Raise an exception if it is not.

|Parameter Name|Remarks|
|--------------|-------|
|condition|The condition to check|
|messageToFormat|A message for the exception|
|formatValues|Values for the exception's message.|

> 
>             Warning: The message with be evaluated even if the condition is true, so don't make it's calculation slow.
>                       Avoid this with the "messageFunction" version.
>             




