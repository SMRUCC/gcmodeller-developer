---
title: DisplayDevice
---

# DisplayDevice
_namespace: [OpenTK](N-OpenTK.html)_

Defines a display device on the underlying system, and provides
 methods to query and change its display parameters.

### Methods

#### ChangeResolution
```csharp
OpenTK.DisplayDevice.ChangeResolution(System.Int32,System.Int32,System.Int32,System.Single)
```
Changes the resolution of the DisplayDevice.

|Parameter Name|Remarks|
|--------------|-------|
|width|The new width of the DisplayDevice.|
|height|The new height of the DisplayDevice.|
|bitsPerPixel|The new bits per pixel of the DisplayDevice.|
|refreshRate|The new refresh rate of the DisplayDevice.|

> If the specified resolution is null, this function will restore the original DisplayResolution.

#### GetDisplay
```csharp
OpenTK.DisplayDevice.GetDisplay(OpenTK.DisplayIndex)
```
Gets the @"T:OpenTK.DisplayDevice" for the specified @"T:OpenTK.DisplayIndex".

|Parameter Name|Remarks|
|--------------|-------|
|index|The @"T:OpenTK.DisplayIndex" that defines the desired display.|

_returns: A @"T:OpenTK.DisplayDevice" or null, if no device corresponds to the specified index._

#### RestoreResolution
```csharp
OpenTK.DisplayDevice.RestoreResolution
```
Restores the original resolution of the DisplayDevice.

#### SelectResolution
```csharp
OpenTK.DisplayDevice.SelectResolution(System.Int32,System.Int32,System.Int32,System.Single)
```
Selects an available resolution that matches the specified parameters.

|Parameter Name|Remarks|
|--------------|-------|
|width|The width of the requested resolution in pixels.|
|height|The height of the requested resolution in pixels.|
|bitsPerPixel|The bits per pixel of the requested resolution.|
|refreshRate|The refresh rate of the requested resolution in hertz.|

_returns: The requested DisplayResolution or null if the parameters cannot be met._
> If a matching resolution is not found, this function will retry ignoring the specified refresh rate,
>             bits per pixel and resolution, in this order. If a matching resolution still doesn't exist, this function will
>             return the current resolution.A parameter set to 0 or negative numbers will not be used in the search (e.g. if refreshRate is 0,
>             any refresh rate will be considered valid).This function allocates memory.

#### ToString
```csharp
OpenTK.DisplayDevice.ToString
```
Returns a System.String representing this DisplayDevice.
_returns: A System.String representing this DisplayDevice._



### Properties

#### AvailableDisplays
Gets the list of available @"T:OpenTK.DisplayDevice" objects.
 This function allocates memory.
#### AvailableResolutions
Gets the list of @"T:OpenTK.DisplayResolution" objects available on this device.
#### BitsPerPixel
Gets a System.Int32 that contains number of bits per pixel of this display. Typical values include 8, 16, 24 and 32.
#### Bounds
Gets the bounds of this instance in pixel coordinates..
#### Default
Gets the default (primary) display of this system.
#### Height
Gets a System.Int32 that contains the height of this display in pixels.
#### IsPrimary
Gets a System.Boolean that indicates whether this Display is the primary Display in systems with multiple Displays.
#### OriginalResolution
Gets the original resolution of this instance.
#### RefreshRate
Gets a System.Single representing the vertical refresh rate of this display.
#### Width
Gets a System.Int32 that contains the width of this display in pixels.

