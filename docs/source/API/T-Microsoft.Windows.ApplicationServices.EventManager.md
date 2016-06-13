---
title: EventManager
---

# EventManager
_namespace: [Microsoft.Windows.ApplicationServices](N-Microsoft.Windows.ApplicationServices.html)_

This class keeps track of the current state of each type of event. 
 The MessageManager class tracks event handlers. 
 This class only deals with each event type (i.e.
 BatteryLifePercentChanged) as a whole.

### Methods

#### IsMessageCaught
```csharp
Microsoft.Windows.ApplicationServices.EventManager.IsMessageCaught(System.Guid)
```
Determines if a message should be caught, preventing
 the event handler from executing. 
 This is needed when an event is initially registered.

|Parameter Name|Remarks|
|--------------|-------|
|eventGuid|The event to check.|

_returns: A boolean value. Returns true if the 
 message should be caught._




