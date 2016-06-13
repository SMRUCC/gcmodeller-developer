---
title: WinWindowInfo
---

# WinWindowInfo
_namespace: [OpenTK.Platform.Windows](N-OpenTK.Platform.Windows.html)_

Describes a win32 window.

### Methods

#### #ctor
```csharp
OpenTK.Platform.Windows.WinWindowInfo.#ctor(System.IntPtr,OpenTK.Platform.Windows.WinWindowInfo)
```
Constructs a new instance with the specified window handle and paren.t

|Parameter Name|Remarks|
|--------------|-------|
|handle|The window handle for this instance.|
|parent|The parent window of this instance (may be null).|


#### Dispose
```csharp
OpenTK.Platform.Windows.WinWindowInfo.Dispose
```
Releases the unmanaged resources consumed by this instance.

#### Equals
```csharp
OpenTK.Platform.Windows.WinWindowInfo.Equals(System.Object)
```
Checks if this and obj reference the same win32 window.

|Parameter Name|Remarks|
|--------------|-------|
|obj|The object to check against.|

_returns: True if this and obj reference the same win32 window; false otherwise._

#### GetHashCode
```csharp
OpenTK.Platform.Windows.WinWindowInfo.GetHashCode
```
Returns the hash code for this instance.
_returns: A hash code for the current WinWindowInfo._

#### ToString
```csharp
OpenTK.Platform.Windows.WinWindowInfo.ToString
```
Returns a System.String that represents the current window.
_returns: A System.String that represents the current window._



### Properties

#### DeviceContext
Gets the device context for this window instance.
#### Handle
Gets or sets the handle of the window.
#### Parent
Gets or sets the Parent of the window (may be null).

