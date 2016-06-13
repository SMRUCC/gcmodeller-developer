---
title: PowerRegWindow
---

# PowerRegWindow
_namespace: [Microsoft.Windows.ApplicationServices.MessageManager](N-Microsoft.Windows.ApplicationServices.MessageManager.html)_

Catch Windows messages and generates events for power specific
 messages.

### Methods

#### ExecuteEvents
```csharp
Microsoft.Windows.ApplicationServices.MessageManager.PowerRegWindow.ExecuteEvents(System.Collections.ArrayList)
```
Executes any registered event handlers.

|Parameter Name|Remarks|
|--------------|-------|
|eventHandlerList|ArrayList of event handlers.|


#### RegisterPowerEvent
```csharp
Microsoft.Windows.ApplicationServices.MessageManager.PowerRegWindow.RegisterPowerEvent(System.Guid,System.EventHandler)
```
Adds an event handler to call when Windows sends 
 a message for an event.

|Parameter Name|Remarks|
|--------------|-------|
|eventId|Guid for the event.|
|eventToRegister|Event handler for the event.|


#### UnregisterPowerEvent
```csharp
Microsoft.Windows.ApplicationServices.MessageManager.PowerRegWindow.UnregisterPowerEvent(System.Guid,System.EventHandler)
```
Removes an event handler.

|Parameter Name|Remarks|
|--------------|-------|
|eventId|Guid for the event.|
|eventToUnregister|Event handler to remove.|


#### WndProc
```csharp
Microsoft.Windows.ApplicationServices.MessageManager.PowerRegWindow.WndProc(System.Windows.Forms.Message@)
```
This method is called when a Windows message 
 is sent to this window.
 The method calls the registered event handlers.




