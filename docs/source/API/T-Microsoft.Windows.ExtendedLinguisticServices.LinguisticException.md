---
title: LinguisticException
---

# LinguisticException
_namespace: [Microsoft.Windows.ExtendedLinguisticServices](N-Microsoft.Windows.ExtendedLinguisticServices.html)_

This exception is thrown by the managed wrappers of ELS when the underlying
 unmanaged implementation returns an HResult which is not S_OK (0).
 This exception is also thrown when the managed wrapper detects an exceptional
 condition which causes it to fail. Please note that other .NET exceptions are also
 possible to be thrown from the ELS managed wrappers.

### Methods

#### #ctor
```csharp
Microsoft.Windows.ExtendedLinguisticServices.LinguisticException.#ctor(System.String,System.Exception)
```
Initializes a new instance of the @"T:Microsoft.Windows.ExtendedLinguisticServices.LinguisticException"[LinguisticException] class
 with the specified detailed description and the specified exception.

|Parameter Name|Remarks|
|--------------|-------|
|message|A detailed description of the error.|
|innerException|A reference to the inner exception that is the cause of this exception.|




### Properties

#### ResultState
Gets the MappingResultState describing the error condition for this exception.

