---
title: Power
---

# Power
_namespace: [Microsoft.Windows.ApplicationServices](N-Microsoft.Windows.ApplicationServices.html)_



### Methods

#### RegisterPowerSettingNotification
```csharp
Microsoft.Windows.ApplicationServices.Power.RegisterPowerSettingNotification(System.IntPtr,System.Guid)
```
Registers the application to receive power setting notifications 
 for the specific power setting event.

|Parameter Name|Remarks|
|--------------|-------|
|handle|Handle indicating where the power setting 
 notifications are to be sent.|
|powerSetting|The GUID of the power setting for 
 which notifications are to be sent.|

_returns: Returns a notification handle for unregistering 
 power notifications._




