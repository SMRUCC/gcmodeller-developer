---
title: JoystickDevice
---

# JoystickDevice
_namespace: [OpenTK.Input](N-OpenTK.Input.html)_

Represents a joystick device and provides methods to query its status.



### Properties

#### Axis
Gets a JoystickAxisCollection containing the state of each axis on this instance. Values are normalized in the [-1, 1] range.
#### Button
Gets JoystickButtonCollection containing the state of each button on this instance. True indicates that the button is pressed.
#### ButtonDown
Occurs when a button of this JoystickDevice instance is pressed.
#### ButtonUp
Occurs when a button of this JoystickDevice is released.
#### Description
Gets a System.String containing a unique description for this instance.
#### DeviceType
Gets a value indicating the InputDeviceType of this InputDevice.
#### Move
Occurs when an axis of this JoystickDevice instance is moved.

