---
title: Utilities
---

# Utilities
_namespace: [OpenTK.Platform](N-OpenTK.Platform.html)_

Provides cross-platform utilities to help interact with the underlying platform.

### Methods

#### CreateDummyWindowInfo
```csharp
OpenTK.Platform.Utilities.CreateDummyWindowInfo
```
Creates an IWindowInfo instance for the dummy platform.
_returns: A new IWindowInfo instance._

#### CreateGraphicsContext
```csharp
OpenTK.Platform.Utilities.CreateGraphicsContext(OpenTK.Graphics.GraphicsMode,OpenTK.Platform.IWindowInfo,System.Int32,System.Int32,OpenTK.Graphics.GraphicsContextFlags)
```
Creates an IGraphicsContext instance for the specified window.

|Parameter Name|Remarks|
|--------------|-------|
|mode|The GraphicsMode for the GraphicsContext.|
|window|An IWindowInfo instance describing the parent window for this IGraphicsContext.|
|major|The major OpenGL version number for this IGraphicsContext.|
|minor|The minor OpenGL version number for this IGraphicsContext.|
|flags|A bitwise collection of GraphicsContextFlags with specific options for this IGraphicsContext.|

_returns: A new IGraphicsContext instance._

#### CreateMacOSCarbonWindowInfo
```csharp
OpenTK.Platform.Utilities.CreateMacOSCarbonWindowInfo(System.IntPtr,System.Boolean,System.Boolean,OpenTK.Platform.MacOS.GetInt,OpenTK.Platform.MacOS.GetInt)
```
Creates an IWindowInfo instance for the Mac OS X platform with an X and Y offset for the GL viewport location.

|Parameter Name|Remarks|
|--------------|-------|
|windowHandle|The handle of the window.|
|ownHandle|Ignored. This is reserved for future use.|
|isControl|Set to true if windowHandle corresponds to a System.Windows.Forms control.|
|xOffset|The X offset for the GL viewport|
|yOffset|The Y offset for the GL viewport|

_returns: A new IWindowInfo instance._

#### CreateMacOSWindowInfo
```csharp
OpenTK.Platform.Utilities.CreateMacOSWindowInfo(System.IntPtr,System.IntPtr)
```
Creates an IWindowInfo instance for the Mac OS X platform.

|Parameter Name|Remarks|
|--------------|-------|
|windowHandle|The handle of the NSWindow.|
|viewHandle|The handle of the NSView.|

_returns: A new IWindowInfo instance._
> Assumes that the NSWindow's contentView is the NSView we want to attach to our context.

#### CreateSdl2WindowInfo
```csharp
OpenTK.Platform.Utilities.CreateSdl2WindowInfo(System.IntPtr)
```
Creates an IWindowInfo instance for the windows platform.

|Parameter Name|Remarks|
|--------------|-------|
|windowHandle|The handle of the window.|

_returns: A new IWindowInfo instance._

#### CreateWindowsWindowInfo
```csharp
OpenTK.Platform.Utilities.CreateWindowsWindowInfo(System.IntPtr)
```
Creates an IWindowInfo instance for the windows platform.

|Parameter Name|Remarks|
|--------------|-------|
|windowHandle|The handle of the window.|

_returns: A new IWindowInfo instance._

#### CreateX11WindowInfo
```csharp
OpenTK.Platform.Utilities.CreateX11WindowInfo(System.IntPtr,System.Int32,System.IntPtr,System.IntPtr,System.IntPtr)
```
Constructs a new IWindowInfo instance for the X11 platform.

|Parameter Name|Remarks|
|--------------|-------|
|display|The display connection.|
|screen|The screen.|
|windowHandle|The handle for the window.|
|rootWindow|The root window for screen.|
|visualInfo|A pointer to a XVisualInfo structure obtained through XGetVisualInfo.|

_returns: A new IWindowInfo instance._

#### LoadExtensions
```csharp
OpenTK.Platform.Utilities.LoadExtensions(System.Type)
```
Loads all extensions for the specified class. This function is intended
 for OpenGL, Wgl, Glx, OpenAL etc.

|Parameter Name|Remarks|
|--------------|-------|
|type|The class to load extensions for.|

> The Type must contain a nested class called "Delegates".
>             The Type must also implement a static function called LoadDelegate with the
>             following signature:
>             'static Delegate LoadDelegate(string name, Type signature)'
>             This function allocates memory.

#### RelaxGraphicsMode
```csharp
OpenTK.Platform.Utilities.RelaxGraphicsMode(OpenTK.Graphics.ColorFormat@,System.Int32@,System.Int32@,System.Int32@,OpenTK.Graphics.ColorFormat@,System.Int32@,System.Boolean@)
```
Relaxes graphics mode parameters. Use this function to increase compatibility
 on systems that do not directly support a requested GraphicsMode. For example:
 - user requested stereoscopic rendering, but GPU does not support stereo
 - user requseted 16x antialiasing, but GPU only supports 4x

|Parameter Name|Remarks|
|--------------|-------|
|color|Color bits.|
|depth|Depth bits.|
|stencil|Stencil bits.|
|samples|Number of antialiasing samples.|
|accum|Accumulator buffer bits.|
|buffers|Number of rendering buffers (1 for single buffering, 2+ for double buffering, 0 for don't care).|
|stereo|Stereoscopic rendering enabled/disabled.|

_returns: true, if a graphics mode parameter was relaxed, false otherwise._

#### TryLoadExtension
```csharp
OpenTK.Platform.Utilities.TryLoadExtension(System.Type,System.String)
```
Loads the specified extension for the specified class. This function is intended
 for OpenGL, Wgl, Glx, OpenAL etc.

|Parameter Name|Remarks|
|--------------|-------|
|type|The class to load extensions for.|
|extension|The extension to load.|

> The Type must contain a nested class called "Delegates".
>             The Type must also implement a static function called LoadDelegate with the
>             following signature:
>             'static Delegate LoadDelegate(string name, Type signature)'
>             This function allocates memory.




