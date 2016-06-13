---
title: MapVirtualKeyType
---

# MapVirtualKeyType
_namespace: [OpenTK.Platform.Windows](N-OpenTK.Platform.Windows.html)_





### Properties

#### ScanCodeToVirtualKey
uCode is a scan code and is translated into a virtual-key code that does not distinguish between left- and right-hand keys. If there is no translation, the function returns 0.
#### ScanCodeToVirtualKeyExtended
Windows NT/2000/XP: uCode is a scan code and is translated into a virtual-key code that distinguishes between left- and right-hand keys. If there is no translation, the function returns 0.
#### VirtualKeyToCharacter
uCode is a virtual-key code and is translated into an unshifted character value in the low-order word of the return value. Dead keys (diacritics) are indicated by setting the top bit of the return value. If there is no translation, the function returns 0.
#### VirtualKeyToScanCode
uCode is a virtual-key code and is translated into a scan code. If it is a virtual-key code that does not distinguish between left- and right-hand keys, the left-hand scan code is returned. If there is no translation, the function returns 0.

