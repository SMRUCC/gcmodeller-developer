---
title: BatteryState
---

# BatteryState
_namespace: [Microsoft.Windows.ApplicationServices](N-Microsoft.Windows.ApplicationServices.html)_

A snapshot of the state of the battery.

### Methods

#### ToString
```csharp
Microsoft.Windows.ApplicationServices.BatteryState.ToString
```
Generates a string that represents this BatteryState object.
_returns: A @"T:System.String" representation of this object's current state._



### Properties

#### ACOnline
Gets a value that indicates whether the battery charger is 
 operating on external power.
#### ChargeRate
Gets the rate of discharge for the battery (in mW).
#### CurrentCharge
Gets the current charge of the battery (in mW).
#### EstimatedTimeRemaining
Gets the estimated time remaining until the battery is empty.
#### MaxCharge
Gets the maximum charge of the battery (in mW).
#### SuggestedBatteryWarningCharge
Gets the manufacturer's suggested battery charge level
 that should cause a warning to be sent to the user.
#### SuggestedCriticalBatteryCharge
Gets the manufacturer's suggested battery charge level 
 that should cause a critical alert to be sent to the user.

