---
title: PlatformBackend
---

# PlatformBackend
_namespace: [OpenTK](N-OpenTK.html)_

Enumerates options regarding OpenTK.Platform
 implementations.



### Properties

#### Default
Select the optimal OpenTK.Platform implementation
 for the current operating system. This is the default
 option.
#### PreferNative
Prefer native OpenTK.Platform implementations. 
 Platform abstractions such as SDL will not be considered,
 even if available. Use this if you need support for multiple
 mice or keyboards.
#### PreferX11
Prefer an X11 OpenTK.Platform implementation,
 even if a different implementation is available. This option
 allows you to use X11 on Windows or Mac OS X when an
 X11 server is installed.

