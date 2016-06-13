---
title: SDL
---

# SDL
_namespace: [OpenTK.Platform.SDL2](N-OpenTK.Platform.SDL2.html)_



### Methods

#### GameControllerGetBindForAxis
```csharp
OpenTK.Platform.SDL2.SDL.GameControllerGetBindForAxis(System.IntPtr,OpenTK.Platform.SDL2.GameControllerAxis)
```
Gets the SDL joystick layer binding for the specified game controller axis

|Parameter Name|Remarks|
|--------------|-------|
|gamecontroller|Pointer to a game controller instance returned by GameControllerOpen.|
|axis|A value from the GameControllerAxis enumeration|

_returns: A GameControllerButtonBind instance describing the specified binding_

#### GameControllerGetBindForButton
```csharp
OpenTK.Platform.SDL2.SDL.GameControllerGetBindForButton(System.IntPtr,OpenTK.Platform.SDL2.GameControllerButton)
```
Gets the SDL joystick layer binding for the specified game controller button

|Parameter Name|Remarks|
|--------------|-------|
|gamecontroller|Pointer to a game controller instance returned by GameControllerOpen.|
|button|A value from the GameControllerButton enumeration|

_returns: A GameControllerButtonBind instance describing the specified binding_

#### GameControllerGetButton
```csharp
OpenTK.Platform.SDL2.SDL.GameControllerGetButton(System.IntPtr,OpenTK.Platform.SDL2.GameControllerButton)
```
Gets the current state of a button on a game controller.

|Parameter Name|Remarks|
|--------------|-------|
|gamecontroller|A game controller handle previously opened with GameControllerOpen.|
|button|A zero-based GameControllerButton value.|

_returns: true if the specified button is pressed; false otherwise._

#### GameControllerGetJoystick
```csharp
OpenTK.Platform.SDL2.SDL.GameControllerGetJoystick(System.IntPtr)
```
Retrieve the joystick handle that corresponds to the specified game controller.

|Parameter Name|Remarks|
|--------------|-------|
|gamecontroller|A game controller handle previously opened with GameControllerOpen.|

_returns: A handle to a joystick, or IntPtr.Zero in case of error. The pointer is owned by the callee. Use SDL.GetError to retrieve error information_

#### GameControllerName
```csharp
OpenTK.Platform.SDL2.SDL.GameControllerName(System.IntPtr)
```
Return the name for an openend game controller instance.

|Parameter Name|Remarks|
|--------------|-------|
|gamecontroller|Pointer to a game controller instance returned by GameControllerOpen.|

_returns: The name of the game controller name._

#### GameControllerOpen
```csharp
OpenTK.Platform.SDL2.SDL.GameControllerOpen(System.Int32)
```
Opens a game controller for use.

|Parameter Name|Remarks|
|--------------|-------|
|joystick_index|
            A zero-based index for the game controller.
            This index is the value which will identify this controller in future controller events.
            |

_returns: A handle to the game controller instance, or IntPtr.Zero in case of error._

#### GetWindowWMInfo
```csharp
OpenTK.Platform.SDL2.SDL.GetWindowWMInfo(System.IntPtr,OpenTK.Platform.SDL2.SysWMInfo@)
```
Retrieves driver-dependent window information.

|Parameter Name|Remarks|
|--------------|-------|
|window|
            The window about which information is being requested.
            |
|info|
            Returns driver-dependent information about the specified window.
            |

_returns: 
            True, if the function is implemented and the version number of the info struct is valid;
            false, otherwise.
            _

#### IsGameController
```csharp
OpenTK.Platform.SDL2.SDL.IsGameController(System.Int32)
```
Determines if the specified joystick is supported by the GameController API.

|Parameter Name|Remarks|
|--------------|-------|
|joystick_index|The index of the joystick to check.|

_returns: true if joystick_index is supported by the GameController API; false otherwise._




