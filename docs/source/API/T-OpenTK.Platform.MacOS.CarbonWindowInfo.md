---
title: CarbonWindowInfo
---

# CarbonWindowInfo
_namespace: [OpenTK.Platform.MacOS](N-OpenTK.Platform.MacOS.html)_

Describes a Carbon window.

### Methods

#### #ctor
```csharp
OpenTK.Platform.MacOS.CarbonWindowInfo.#ctor(System.IntPtr,System.Boolean,System.Boolean)
```
Constructs a new instance with the specified parameters.

|Parameter Name|Remarks|
|--------------|-------|
|windowRef|A valid Carbon window reference.|
|ownHandle|-|
|isControl|-|


#### ToString
```csharp
OpenTK.Platform.MacOS.CarbonWindowInfo.ToString
```
Returns a System.String that represents the current window.
_returns: A System.String that represents the current window._



### Properties

#### Handle
Gets the window reference for this instance.
#### IsControl
Gets a value indicating whether this instance refers to a System.Windows.Forms.Control.

