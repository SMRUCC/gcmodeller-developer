---
title: IKeyboardDriver2
---

# IKeyboardDriver2
_namespace: [OpenTK.Input](N-OpenTK.Input.html)_



### Methods

#### GetDeviceName
```csharp
OpenTK.Input.IKeyboardDriver2.GetDeviceName(System.Int32)
```
Retrieves the device name for the keyboard device.

|Parameter Name|Remarks|
|--------------|-------|
|index|The index of the keyboard device.|

_returns: A @"T:System.String" with the name of the specified device or @"F:System.String.Empty"._
> If no device exists at the specified index, the return value is @"F:System.String.Empty".

#### GetState
```csharp
OpenTK.Input.IKeyboardDriver2.GetState(System.Int32)
```
Retrieves the @"T:OpenTK.Input.KeyboardState" for the specified keyboard device.

|Parameter Name|Remarks|
|--------------|-------|
|index|The index of the keyboard device.|

_returns: An @"T:OpenTK.Input.KeyboardState" structure containing the state of the keyboard device._




