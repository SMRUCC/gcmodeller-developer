---
title: RestartSettings
---

# RestartSettings
_namespace: [Microsoft.Windows.ApplicationServices](N-Microsoft.Windows.ApplicationServices.html)_

Specifies the options for an application to be automatically
 restarted by Windows Error Reporting.

### Methods

#### #ctor
```csharp
Microsoft.Windows.ApplicationServices.RestartSettings.#ctor(System.String,Microsoft.Windows.ApplicationServices.RestartRestrictions)
```
Creates a new instance of the RestartSettings class.

|Parameter Name|Remarks|
|--------------|-------|
|command|The command line arguments 
 used to restart the application.|
|restrictions|A bitwise combination of the RestartRestrictions 
 values that specify  
 when the application should not be restarted.
 |


#### ToString
```csharp
Microsoft.Windows.ApplicationServices.RestartSettings.ToString
```
Returns a string representation of the current state
 of this object.
_returns: A @"T:System.String" that displays 
 the command line arguments 
 and restrictions for restarting the application._



### Properties

#### Command
Gets the command line arguments used to restart the application.
#### Restrictions
Gets the set of conditions when the application 
 should not be restarted.

