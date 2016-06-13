---
title: RecoverySettings
---

# RecoverySettings
_namespace: [Microsoft.Windows.ApplicationServices](N-Microsoft.Windows.ApplicationServices.html)_

Defines methods and properties for recovery settings, and specifies options for an application that attempts
 to perform final actions after a fatal event, such as an
 unhandled exception.

### Methods

#### #ctor
```csharp
Microsoft.Windows.ApplicationServices.RecoverySettings.#ctor(Microsoft.Windows.ApplicationServices.RecoveryData,System.UInt32)
```
Initializes a new instance of the RecoverySettings class.

|Parameter Name|Remarks|
|--------------|-------|
|data|A recovery data object that contains the callback method (invoked by the system
 before Windows Error Reporting terminates the application) and an optional state object.|
|interval|The time interval within which the 
 callback method must invoke @"M:Microsoft.Windows.ApplicationServices.ApplicationRestartRecoveryManager.ApplicationRecoveryInProgress" to 
 prevent WER from terminating the application.|


#### ToString
```csharp
Microsoft.Windows.ApplicationServices.RecoverySettings.ToString
```
Returns a string representation of the current state
 of this object.
_returns: A @"T:System.String" object._



### Properties

#### PingInterval
Gets the time interval for notifying Windows Error Reporting. 
 The @"T:Microsoft.Windows.ApplicationServices.RecoveryCallback" method must invoke @"M:Microsoft.Windows.ApplicationServices.ApplicationRestartRecoveryManager.ApplicationRecoveryInProgress" 
 within this interval to prevent WER from terminating the application.
#### RecoveryData
Gets the recovery data object that contains the callback method and an optional
 parameter (usually the state of the application) to be passed to the 
 callback method.

