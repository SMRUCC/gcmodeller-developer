---
title: EventHandlerExtensionMethods
---

# EventHandlerExtensionMethods
_namespace: [Microsoft.Windows.Shell](N-Microsoft.Windows.Shell.html)_

Provides extension methods for raising events safely.

### Methods

#### SafeRaise
```csharp
Microsoft.Windows.Shell.EventHandlerExtensionMethods.SafeRaise(System.EventHandler{System.EventArgs},System.Object)
```
Safely raises an event using EventArgs.Empty

|Parameter Name|Remarks|
|--------------|-------|
|eventHandler|EventHandler<EventArgs> to raise|
|sender|Event sender|


#### SafeRaise``1
```csharp
Microsoft.Windows.Shell.EventHandlerExtensionMethods.SafeRaise``1(System.EventHandler{``0},System.Object,``0)
```
Safely raises an event.

|Parameter Name|Remarks|
|--------------|-------|
|eventHandler|EventHandler<T> to raise|
|sender|Event sender|
|args|Event args|





