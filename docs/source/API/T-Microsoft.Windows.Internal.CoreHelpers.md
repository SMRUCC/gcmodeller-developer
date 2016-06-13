---
title: CoreHelpers
---

# CoreHelpers
_namespace: [Microsoft.Windows.Internal](N-Microsoft.Windows.Internal.html)_

Common Helper methods

### Methods

#### GetStringResource
```csharp
Microsoft.Windows.Internal.CoreHelpers.GetStringResource(System.String)
```
Get a string resource given a resource Id

|Parameter Name|Remarks|
|--------------|-------|
|resourceId|The resource Id|

_returns: The string resource corresponding to the given resource Id. Returns null if the resource id
 is invalid or the string cannot be retrieved for any other reason._

#### ThrowIfNotVista
```csharp
Microsoft.Windows.Internal.CoreHelpers.ThrowIfNotVista
```
Throws PlatformNotSupportedException if the application is not running on Windows Vista

#### ThrowIfNotWin7
```csharp
Microsoft.Windows.Internal.CoreHelpers.ThrowIfNotWin7
```
Throws PlatformNotSupportedException if the application is not running on Windows 7

#### ThrowIfNotXP
```csharp
Microsoft.Windows.Internal.CoreHelpers.ThrowIfNotXP
```
Throws PlatformNotSupportedException if the application is not running on Windows XP



### Properties

#### RunningOnVista
Determines if the application is running on Vista
#### RunningOnWin7
Determines if the application is running on Windows 7
#### RunningOnXP
Determines if the application is running on XP

