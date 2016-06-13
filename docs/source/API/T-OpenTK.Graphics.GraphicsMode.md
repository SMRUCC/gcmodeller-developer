---
title: GraphicsMode
---

# GraphicsMode
_namespace: [OpenTK.Graphics](N-OpenTK.Graphics.html)_

Defines the format for graphics operations.

### Methods

#### #ctor
```csharp
OpenTK.Graphics.GraphicsMode.#ctor(OpenTK.Graphics.ColorFormat,System.Int32,System.Int32,System.Int32,OpenTK.Graphics.ColorFormat,System.Int32,System.Boolean)
```
Constructs a new GraphicsMode with the specified parameters.

|Parameter Name|Remarks|
|--------------|-------|
|color|The ColorFormat of the color buffer.|
|depth|The number of bits in the depth buffer.|
|stencil|The number of bits in the stencil buffer.|
|samples|The number of samples for FSAA.|
|accum|The ColorFormat of the accumilliary buffer.|
|stereo|Set to true for a GraphicsMode with stereographic capabilities.|
|buffers|The number of render buffers. Typical values include one (single-), two (double-) or three (triple-buffering).|


#### Equals
```csharp
OpenTK.Graphics.GraphicsMode.Equals(OpenTK.Graphics.GraphicsMode)
```
Indicates whether other represents the same mode as this instance.

|Parameter Name|Remarks|
|--------------|-------|
|other|The GraphicsMode to compare to.|

_returns: True, if other is equal to this instance; false otherwise._

#### GetHashCode
```csharp
OpenTK.Graphics.GraphicsMode.GetHashCode
```
Returns the hashcode for this instance.
_returns: A @"T:System.Int32" hashcode for this instance._

#### ToString
```csharp
OpenTK.Graphics.GraphicsMode.ToString
```
Returns a System.String describing the current GraphicsFormat.
_returns: ! System.String describing the current GraphicsFormat._



### Properties

#### AccumulatorFormat
Gets an OpenTK.Graphics.ColorFormat that describes the accumulator format for this GraphicsFormat.
#### Buffers
Gets a System.Int32 containing the number of buffers associated with this
 DisplayMode.
#### ColorFormat
Gets an OpenTK.Graphics.ColorFormat that describes the color format for this GraphicsFormat.
#### Default
Returns an OpenTK.GraphicsFormat compatible with the underlying platform.
#### Depth
Gets a System.Int32 that contains the bits per pixel for the depth buffer
 for this GraphicsFormat.
#### Index
Gets a nullable @"T:System.IntPtr" value, indicating the platform-specific index for this GraphicsMode.
#### Samples
Gets a System.Int32 that contains the number of FSAA samples per pixel for this GraphicsFormat.
#### Stencil
Gets a System.Int32 that contains the bits per pixel for the stencil buffer
 of this GraphicsFormat.
#### Stereo
Gets a System.Boolean indicating whether this DisplayMode is stereoscopic.

