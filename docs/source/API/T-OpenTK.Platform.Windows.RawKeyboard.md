---
title: RawKeyboard
---

# RawKeyboard
_namespace: [OpenTK.Platform.Windows](N-OpenTK.Platform.Windows.html)_

Contains information about the state of the keyboard.



### Properties

#### ExtraInformation
Device-specific additional information for the event.
#### Flags
Flags for scan code information. It can be one or more of the following.
 RI_KEY_MAKE
 RI_KEY_BREAK
 RI_KEY_E0
 RI_KEY_E1
 RI_KEY_TERMSRV_SET_LED
 RI_KEY_TERMSRV_SHADOW
#### MakeCode
Scan code from the key depression. The scan code for keyboard overrun is KEYBOARD_OVERRUN_MAKE_CODE.
#### Message
Corresponding window message, for example WM_KEYDOWN, WM_SYSKEYDOWN, and so forth.
#### Reserved
Reserved; must be zero.
#### VKey
Microsoft Windows message compatible virtual-key code. For more information, see Virtual-Key Codes.

