---
title: LinuxDisplayDriver
---

# LinuxDisplayDriver
_namespace: [OpenTK.Platform.Linux](N-OpenTK.Platform.Linux.html)_



### Methods

#### QueryDisplays
```csharp
OpenTK.Platform.Linux.LinuxDisplayDriver.QueryDisplays(System.Int32,System.Collections.Generic.List{OpenTK.Platform.Linux.LinuxDisplay})
```
Queries the specified GPU for connected displays and, optionally,
 returns the list of displays.

|Parameter Name|Remarks|
|--------------|-------|
|fd|The fd for the GPU to query, obtained through open("/dev/dri/card0").|
|displays|
            If not null, this will contain a list @"T:OpenTK.Platform.Linux.LinuxDisplay" instances,
            one for each connected display.
            |

_returns: true, if at least one display is connected, false otherwise._




