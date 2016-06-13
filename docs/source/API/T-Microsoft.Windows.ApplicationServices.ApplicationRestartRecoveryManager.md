---
title: ApplicationRestartRecoveryManager
---

# ApplicationRestartRecoveryManager
_namespace: [Microsoft.Windows.ApplicationServices](N-Microsoft.Windows.ApplicationServices.html)_

Provides access to the Application Restart and Recovery
 features available in Windows Vista or higher. Application Restart and Recovery lets an
 application do some recovery work to save data before the process exits.

### Methods

#### ApplicationRecoveryFinished
```csharp
Microsoft.Windows.ApplicationServices.ApplicationRestartRecoveryManager.ApplicationRecoveryFinished(System.Boolean)
```
Called by an application's @"T:Microsoft.Windows.ApplicationServices.RecoveryCallback" method to 
 indicate that the recovery work is complete.

|Parameter Name|Remarks|
|--------------|-------|
|success|true to indicate the the program was able to complete its recovery
 work before terminating; otherwise false.|

> 
>  This should
>  be the last call made by the @"T:Microsoft.Windows.ApplicationServices.RecoveryCallback" method because
>  Windows Error Reporting will terminate the application
>  after this method is invoked.
>  

#### ApplicationRecoveryInProgress
```csharp
Microsoft.Windows.ApplicationServices.ApplicationRestartRecoveryManager.ApplicationRecoveryInProgress
```
Called by an application's @"T:Microsoft.Windows.ApplicationServices.RecoveryCallback" method 
 to indicate that it is still performing recovery work.
_returns: A @"T:System.Boolean" value indicating whether the user
 canceled the recovery._

#### RegisterForApplicationRecovery
```csharp
Microsoft.Windows.ApplicationServices.ApplicationRestartRecoveryManager.RegisterForApplicationRecovery(Microsoft.Windows.ApplicationServices.RecoverySettings)
```
Registers an application for recovery by Application Restart and Recovery.

|Parameter Name|Remarks|
|--------------|-------|
|settings|An object that specifies
 the callback method, an optional parameter to pass to the callback
 method and a time interval.|

> The time interval is the period of time within 
>  which the recovery callback method 
>  calls the @"M:Microsoft.Windows.ApplicationServices.ApplicationRestartRecoveryManager.ApplicationRecoveryInProgress" method to indicate
>  that it is still performing recovery work.

#### RegisterForApplicationRestart
```csharp
Microsoft.Windows.ApplicationServices.ApplicationRestartRecoveryManager.RegisterForApplicationRestart(Microsoft.Windows.ApplicationServices.RestartSettings)
```
Registers an application for automatic restart if 
 the application 
 is terminated by Windows Error Reporting.

|Parameter Name|Remarks|
|--------------|-------|
|settings|An object that specifies
 the command line arguments used to restart the 
 application, and 
 the conditions under which the application should not be 
 restarted.|

> A registered application will not be restarted if it executed for less than 60 seconds before terminating.

#### UnregisterApplicationRecovery
```csharp
Microsoft.Windows.ApplicationServices.ApplicationRestartRecoveryManager.UnregisterApplicationRecovery
```
Removes an application's recovery registration.

#### UnregisterApplicationRestart
```csharp
Microsoft.Windows.ApplicationServices.ApplicationRestartRecoveryManager.UnregisterApplicationRestart
```
Removes an application's restart registration.




