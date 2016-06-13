---
title: KeyPressEventArgs
---

# KeyPressEventArgs
_namespace: [OpenTK](N-OpenTK.html)_

Defines the event arguments for KeyPress events. Instances of this class are cached:
 KeyPressEventArgs should only be used inside the relevant event, unless manually cloned.

### Methods

#### #ctor
```csharp
OpenTK.KeyPressEventArgs.#ctor(System.Char)
```
Constructs a new instance.

|Parameter Name|Remarks|
|--------------|-------|
|keyChar|The ASCII character that was typed.|




### Properties

#### KeyChar
Gets a @"T:System.Char" that defines the ASCII character that was typed.

