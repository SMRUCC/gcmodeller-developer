---
title: MessageManager
---

# MessageManager
_namespace: [Microsoft.Windows.ApplicationServices](N-Microsoft.Windows.ApplicationServices.html)_

This class generates .NET events based on Windows messages. 
 The PowerRegWindow class processes the messages from Windows.

### Methods

#### EnsureInitialized
```csharp
Microsoft.Windows.ApplicationServices.MessageManager.EnsureInitialized
```
Ensures that the hidden window is initialized and 
 listening for messages.

#### RegisterPowerEvent
```csharp
Microsoft.Windows.ApplicationServices.MessageManager.RegisterPowerEvent(System.Guid,System.EventHandler)
```
Registers a callback for a power event.

|Parameter Name|Remarks|
|--------------|-------|
|eventId|Guid for the event.|
|eventToRegister|Event handler for the specified event.|


#### UnregisterPowerEvent
```csharp
Microsoft.Windows.ApplicationServices.MessageManager.UnregisterPowerEvent(System.Guid,System.EventHandler)
```
Unregisters an event handler for a power event.

|Parameter Name|Remarks|
|--------------|-------|
|eventId|Guid for the event.|
|eventToUnregister|Event handler to unregister.|





