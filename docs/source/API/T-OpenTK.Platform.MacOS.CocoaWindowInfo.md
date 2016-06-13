---
title: CocoaWindowInfo
---

# CocoaWindowInfo
_namespace: [OpenTK.Platform.MacOS](N-OpenTK.Platform.MacOS.html)_

Describes a Cocoa window.

### Methods

#### #ctor
```csharp
OpenTK.Platform.MacOS.CocoaWindowInfo.#ctor(System.IntPtr,System.IntPtr)
```
Constructs a new instance with the specified parameters.

|Parameter Name|Remarks|
|--------------|-------|
|nsWindowRef|A valid NSWindow reference.|
|nsViewRef|A valid NSView reference.|

> This constructor assumes that the NSWindow's contentView is the NSView we want to attach to our context.

#### ToString
```csharp
OpenTK.Platform.MacOS.CocoaWindowInfo.ToString
```
Returns a System.String that represents the current window.
_returns: A System.String that represents the current window._



### Properties

#### Handle
Gets the window reference for this instance.
#### ViewHandle
Gets the view reference for this instance.

