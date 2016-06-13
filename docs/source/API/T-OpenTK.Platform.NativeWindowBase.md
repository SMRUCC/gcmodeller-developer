---
title: NativeWindowBase
---

# NativeWindowBase
_namespace: [OpenTK.Platform](N-OpenTK.Platform.html)_



### Methods

#### UpdateModifierFlags
```csharp
OpenTK.Platform.NativeWindowBase.UpdateModifierFlags(OpenTK.Input.KeyModifiers)
```
Call this method to simulate KeyDown/KeyUp events
 on platforms that do not generate key events for
 modifier flags (e.g. Mac/Cocoa).
 Note: this method does not distinguish between the
 left and right variants of modifier keys.

|Parameter Name|Remarks|
|--------------|-------|
|mods|Mods.|





