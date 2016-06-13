---
title: JoystickCapabilities
---

# JoystickCapabilities
_namespace: [OpenTK.Input](N-OpenTK.Input.html)_

Describes the JoystickCapabilities of a @"T:OpenTK.Input.JoystickDevice".

### Methods

#### Equals
```csharp
OpenTK.Input.JoystickCapabilities.Equals(OpenTK.Input.JoystickCapabilities)
```
Determines whether the specified @"T:OpenTK.Input.JoystickCapabilities" is equal to the current @"T:OpenTK.Input.JoystickCapabilities".

|Parameter Name|Remarks|
|--------------|-------|
|other|The @"T:OpenTK.Input.JoystickCapabilities" to compare with the current @"T:OpenTK.Input.JoystickCapabilities".|

_returns: true if the specified @"T:OpenTK.Input.JoystickCapabilities" is equal to the current
            @"T:OpenTK.Input.JoystickCapabilities"; otherwise, false._

#### GetHashCode
```csharp
OpenTK.Input.JoystickCapabilities.GetHashCode
```
Serves as a hash function for a @"T:OpenTK.Input.JoystickCapabilities" object.
_returns: A hash code for this instance that is suitable for use in hashing algorithms and data structures such as a
            hash table._

#### ToString
```csharp
OpenTK.Input.JoystickCapabilities.ToString
```
Returns a @"T:System.String" that represents the current @"T:OpenTK.Input.JoystickCapabilities".
_returns: A @"T:System.String" that represents the current @"T:OpenTK.Input.JoystickCapabilities"._



### Properties

#### AxisCount
Gets the number of axes supported by this @"T:OpenTK.Input.JoystickDevice".
#### ButtonCount
Gets the number of buttons supported by this @"T:OpenTK.Input.JoystickDevice".
#### HatCount
Gets the number of hats supported by this @"T:OpenTK.Input.JoystickDevice".
#### IsConnected
Gets a value indicating whether this @"T:OpenTK.Input.JoystickDevice" is connected.

