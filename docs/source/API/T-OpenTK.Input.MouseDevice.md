---
title: MouseDevice
---

# MouseDevice
_namespace: [OpenTK.Input](N-OpenTK.Input.html)_

Represents a mouse device and provides methods to query its status.

### Methods

#### GetHashCode
```csharp
OpenTK.Input.MouseDevice.GetHashCode
```
Calculates the hash code for this instance.

#### ToString
```csharp
OpenTK.Input.MouseDevice.ToString
```
Returns a @"T:System.String" that describes this instance.
_returns: A @"T:System.String" that describes this instance._



### Properties

#### Description
Gets a string describing this MouseDevice.
#### DeviceID
Gets an IntPtr representing a device dependent ID.
#### DeviceType
Gets a value indicating the InputDeviceType of this InputDevice.
#### Item
Gets a System.Boolean indicating the state of the specified MouseButton.
#### NumberOfButtons
Gets an integer representing the number of buttons on this MouseDevice.
#### NumberOfWheels
Gets an integer representing the number of wheels on this MouseDevice.
#### Wheel
Gets the absolute wheel position in integer units.
 To support high-precision mice, it is recommended to use @"P:OpenTK.Input.MouseDevice.WheelPrecise" instead.
#### WheelDelta
Gets an integer representing the relative wheel movement.
#### WheelPrecise
Gets the absolute wheel position in floating-point units.
#### X
Gets an integer representing the absolute x position of the pointer, in window pixel coordinates.
#### XDelta
Gets an integer representing the relative x movement of the pointer, in pixel coordinates.
#### Y
Gets an integer representing the absolute y position of the pointer, in window pixel coordinates.
#### YDelta
Gets an integer representing the relative y movement of the pointer, in pixel coordinates.

