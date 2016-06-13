---
title: RawMouse
---

# RawMouse
_namespace: [OpenTK.Platform.Windows](N-OpenTK.Platform.Windows.html)_

Contains information about the state of the mouse.



### Properties

#### ButtonData
If usButtonFlags is RI_MOUSE_WHEEL, this member is a signed value that specifies the wheel delta.
#### ExtraInformation
Device-specific additional information for the event.
#### Flags
Mouse state. This member can be any reasonable combination of the following. 
 MOUSE_ATTRIBUTES_CHANGED
 Mouse attributes changed; application needs to query the mouse attributes.
 MOUSE_MOVE_RELATIVE
 Mouse movement data is relative to the last mouse position.
 MOUSE_MOVE_ABSOLUTE
 Mouse movement data is based on absolute position.
 MOUSE_VIRTUAL_DESKTOP
 Mouse coordinates are mapped to the virtual desktop (for a multiple monitor system).
#### LastX
Motion in the X direction. This is signed relative motion or absolute motion, depending on the value of usFlags.
#### LastY
Motion in the Y direction. This is signed relative motion or absolute motion, depending on the value of usFlags.
#### RawButtons
Raw state of the mouse buttons.

