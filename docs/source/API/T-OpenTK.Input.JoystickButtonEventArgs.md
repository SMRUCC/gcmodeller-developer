---
title: JoystickButtonEventArgs
---

# JoystickButtonEventArgs
_namespace: [OpenTK.Input](N-OpenTK.Input.html)_

Provides data for the @"F:OpenTK.Input.JoystickDevice.ButtonDown" and @"F:OpenTK.Input.JoystickDevice.ButtonUp" events.
 This class is cached for performance reasons - avoid storing references outside the scope of the event.

### Methods

#### #ctor
```csharp
OpenTK.Input.JoystickButtonEventArgs.#ctor(OpenTK.Input.JoystickButton,System.Boolean)
```
Initializes a new instance of the @"T:OpenTK.Input.JoystickButtonEventArgs" class.

|Parameter Name|Remarks|
|--------------|-------|
|button|The index of the joystick button for the event.|
|pressed|The current state of the button.|




### Properties

#### Button
The index of the joystick button for the event.
#### Pressed
Gets a System.Boolean representing the state of the button for the event.

