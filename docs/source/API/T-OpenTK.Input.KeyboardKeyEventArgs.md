---
title: KeyboardKeyEventArgs
---

# KeyboardKeyEventArgs
_namespace: [OpenTK.Input](N-OpenTK.Input.html)_

Defines the event data for @"T:OpenTK.Input.KeyboardDevice" events.

### Methods

#### #ctor
```csharp
OpenTK.Input.KeyboardKeyEventArgs.#ctor(OpenTK.Input.KeyboardKeyEventArgs)
```
Constructs a new KeyboardEventArgs instance.

|Parameter Name|Remarks|
|--------------|-------|
|args|An existing KeyboardEventArgs instance to clone.|




### Properties

#### Alt
Gets a value indicating whether @"F:OpenTK.Input.KeyModifiers.Alt" is pressed.
#### Control
Gets a value indicating whether @"F:OpenTK.Input.KeyModifiers.Control" is pressed.
#### IsRepeat
Gets a @"T:System.Boolean" indicating whether
 this key event is a repeat.
#### Key
Gets the @"P:OpenTK.Input.KeyboardKeyEventArgs.Key" that generated this event.
#### Keyboard
Gets the current @"T:OpenTK.Input.KeyboardState".
#### Modifiers
Gets a bitwise combination representing the @"T:OpenTK.Input.KeyModifiers"
 that are currently pressed.
#### ScanCode
Gets the scancode which generated this event.
#### Shift
Gets a value indicating whether @"F:OpenTK.Input.KeyModifiers.Shift" is pressed.

