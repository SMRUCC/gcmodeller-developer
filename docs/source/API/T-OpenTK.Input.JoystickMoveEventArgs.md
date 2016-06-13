---
title: JoystickMoveEventArgs
---

# JoystickMoveEventArgs
_namespace: [OpenTK.Input](N-OpenTK.Input.html)_

Provides data for the @"F:OpenTK.Input.JoystickDevice.Move" event.
 This class is cached for performance reasons - avoid storing references outside the scope of the event.

### Methods

#### #ctor
```csharp
OpenTK.Input.JoystickMoveEventArgs.#ctor(OpenTK.Input.JoystickAxis,System.Single,System.Single)
```
Initializes a new instance of the @"T:OpenTK.Input.JoystickMoveEventArgs" class.

|Parameter Name|Remarks|
|--------------|-------|
|axis|The index of the joystick axis that was moved.|
|value|The absolute value of the joystick axis.|
|delta|The relative change in value of the joystick axis.|




### Properties

#### Axis
Gets a System.Int32 representing the index of the axis that was moved.
#### Delta
Gets a System.Single representing the relative change in the position of the axis.
#### Value
Gets a System.Single representing the absolute position of the axis.

