---
title: MouseWheelEventArgs
---

# MouseWheelEventArgs
_namespace: [OpenTK.Input](N-OpenTK.Input.html)_

Defines the event data for @"E:OpenTK.Input.MouseDevice.WheelChanged" events.

### Methods

#### #ctor
```csharp
OpenTK.Input.MouseWheelEventArgs.#ctor(OpenTK.Input.MouseWheelEventArgs)
```
Constructs a new @"T:OpenTK.Input.MouseWheelEventArgs" instance.

|Parameter Name|Remarks|
|--------------|-------|
|args|The @"T:OpenTK.Input.MouseWheelEventArgs" instance to clone.|




### Properties

#### Delta
Gets the change in value of the wheel for this event in integer units.
 To support high-precision mice, it is recommended to use @"P:OpenTK.Input.MouseWheelEventArgs.DeltaPrecise" instead.
#### DeltaPrecise
Gets the precise change in value of the wheel for this event in floating-point units.
#### Value
Gets the value of the wheel in integer units.
 To support high-precision mice, it is recommended to use @"P:OpenTK.Input.MouseWheelEventArgs.ValuePrecise" instead.
#### ValuePrecise
Gets the precise value of the wheel in floating-point units.

