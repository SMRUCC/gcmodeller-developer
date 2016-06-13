---
title: Configuration
---

# Configuration
_namespace: [OpenTK](N-OpenTK.html)_

Provides information about the underlying OS and runtime.
 You must call Toolkit.Init before accessing members
 of this class.

### Methods

#### DetectUnixKernel
```csharp
OpenTK.Configuration.DetectUnixKernel
```
Detects the unix kernel by p/invoking uname (libc).



### Properties

#### RunningOnAndroid
Gets a System.Boolean indicating whether
 OpenTK is running on an Android device.
#### RunningOnLinux
Gets a System.Boolean indicating whether OpenTK is running on the Linux kernel.
#### RunningOnMacOS
Gets a System.Boolean indicating whether OpenTK is running on a MacOS platform.
#### RunningOnMono
Gets a System.Boolean indicating whether OpenTK is running on the Mono runtime.
#### RunningOnSdl2
Gets a System.Boolean indicating whether OpenTK is running on the SDL2 backend.
#### RunningOnUnix
Gets a @"T:System.Boolean" indicating whether OpenTK is running on a Unix platform.
#### RunningOnWindows
Gets a System.Boolean indicating whether OpenTK is running on a Windows platform.
#### RunningOnX11
Gets a System.Boolean indicating whether OpenTK is running on an X11 platform.

