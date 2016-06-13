---
title: RecoveryData
---

# RecoveryData
_namespace: [Microsoft.Windows.ApplicationServices](N-Microsoft.Windows.ApplicationServices.html)_

Defines a class that contains a callback delegate and properties of the application
 as defined by the user.

### Methods

#### #ctor
```csharp
Microsoft.Windows.ApplicationServices.RecoveryData.#ctor(Microsoft.Windows.ApplicationServices.RecoveryCallback,System.Object)
```
Initializes a recovery data wrapper with a callback method and the current
 state of the application.

|Parameter Name|Remarks|
|--------------|-------|
|callback__1|The callback delegate.|
|state__2|The current state of the application.|


#### Invoke
```csharp
Microsoft.Windows.ApplicationServices.RecoveryData.Invoke
```
Invokes the recovery callback function.



### Properties

#### Callback
Gets or sets a value that determines the recovery callback function.
#### State
Gets or sets a value that determines the application state.

