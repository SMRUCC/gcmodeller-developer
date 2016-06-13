---
title: PowerManager
---

# PowerManager
_namespace: [Microsoft.Windows.ApplicationServices](N-Microsoft.Windows.ApplicationServices.html)_

Enables registration for 
 power-related event notifications and provides access to power settings.

### Methods

#### GetCurrentBatteryState
```csharp
Microsoft.Windows.ApplicationServices.PowerManager.GetCurrentBatteryState
```
Gets a snapshot of the current battery state.
_returns: A @"T:Microsoft.Windows.ApplicationServices.BatteryState" instance that represents 
 the state of the battery at the time this method was called._

#### SetThreadExecutionState
```csharp
Microsoft.Windows.ApplicationServices.PowerManager.SetThreadExecutionState(Microsoft.Windows.ApplicationServices.ExecutionStates)
```
Allows an application to inform the system that it 
 is in use, thereby preventing the system from entering 
 the sleeping power state or turning off the display 
 while the application is running.

|Parameter Name|Remarks|
|--------------|-------|
|executionStateOptions|The thread's execution requirements.|




### Properties

#### BatteryLifePercent
Gets a value that indicates the remaining battery life 
 (as a percentage of the full battery charge). 
 This value is in the range 0-100, 
 where 0 is not charged and 100 is fully charged.
#### IsBatteryPresent
Gets a value that indicates whether a battery is present. 
 The battery can be a short term battery.
#### IsBatteryShortTerm
Gets a value that indicates whether the battery is a short term battery.
#### IsMonitorOn
Gets a value that indictates whether the monitor is on.
#### IsUpsPresent
Gets a value that indicates a UPS is present to prevent 
 sudden loss of power.
#### MonitorRequired
Gets or sets a value that indicates whether the monitor is 
 set to remain active.
#### PowerPersonality
Gets a value that indicates the current power scheme.
#### PowerSource
Gets the current power source.
#### RequestBlockSleep
Gets or sets a value that indicates whether the system 
 is required to be in the working state.

