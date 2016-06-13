---
title: X11GLNative
---

# X11GLNative
_namespace: [OpenTK.Platform.X11](N-OpenTK.Platform.X11.html)_

Drives GameWindow on X11.
 This class supports OpenTK, and is not intended for use by OpenTK programs.

### Methods

#### #ctor
```csharp
OpenTK.Platform.X11.X11GLNative.#ctor
```
Constructs and initializes a new X11GLNative window.
 Call CreateWindow to create the actual render window.

#### RegisterAtoms
```csharp
OpenTK.Platform.X11.X11GLNative.RegisterAtoms(OpenTK.Platform.X11.X11WindowInfo)
```
Not used yet.
 Registers the necessary atoms for GameWindow.



### Properties

#### Exists
Returns true if a render window/context exists.
#### Handle
Gets the current window handle.
#### Title
TODO: Use atoms for this property.
 Gets or sets the GameWindow title.

