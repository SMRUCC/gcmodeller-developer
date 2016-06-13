---
title: MouseCursor
---

# MouseCursor
_namespace: [OpenTK](N-OpenTK.html)_

Represents a predefined or custom mouse cursor.

### Methods

#### #ctor
```csharp
OpenTK.MouseCursor.#ctor(System.Int32,System.Int32,System.Int32,System.Int32,System.IntPtr)
```
Initializes a new @"T:OpenTK.MouseCursor" instance from a
 contiguous array of BGRA pixels.
 Each pixel is composed of 4 bytes, representing B, G, R and A values,
 respectively. For correct antialiasing of translucent cursors,
 the B, G and R components should be premultiplied with the A component:
 '
 B = (byte)((B * A) / 255)
 G = (byte)((G * A) / 255)
 R = (byte)((R * A) / 255)
 '

|Parameter Name|Remarks|
|--------------|-------|
|hotx|The x-coordinate of the cursor hotspot, in the range [0, width]|
|hoty|The y-coordinate of the cursor hotspot, in the range [0, height]|
|width|The width of the cursor data, in pixels.|
|height|The height of the cursor data, in pixels.|
|data|
            A pointer to the cursor image, laid out as a contiguous array of BGRA pixels.
            |




### Properties

#### Default
Gets the default mouse cursor for this platform.
#### Empty
Gets an empty (invisible) mouse cursor.

