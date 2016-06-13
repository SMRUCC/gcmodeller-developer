---
title: DisplayResolution
---

# DisplayResolution
_namespace: [OpenTK](N-OpenTK.html)_

Contains information regarding a monitor's display resolution.

### Methods

#### Equals
```csharp
OpenTK.DisplayResolution.Equals(System.Object)
```
Determines whether the specified resolutions are equal.

|Parameter Name|Remarks|
|--------------|-------|
|obj|The System.Object to check against.|

_returns: True if the System.Object is an equal DisplayResolution; false otherwise._

#### GetHashCode
```csharp
OpenTK.DisplayResolution.GetHashCode
```
Returns a unique hash representing this resolution.
_returns: A System.Int32 that may serve as a hash code for this resolution._

#### op_Equality
```csharp
OpenTK.DisplayResolution.op_Equality(OpenTK.DisplayResolution,OpenTK.DisplayResolution)
```
Compares two instances for equality.

|Parameter Name|Remarks|
|--------------|-------|
|left|The first instance.|
|right|The second instance.|

_returns: True, if left equals right; false otherwise._

#### op_Inequality
```csharp
OpenTK.DisplayResolution.op_Inequality(OpenTK.DisplayResolution,OpenTK.DisplayResolution)
```
Compares two instances for inequality.

|Parameter Name|Remarks|
|--------------|-------|
|left|The first instance.|
|right|The second instance.|

_returns: True, if left does not equal right; false otherwise._

#### ToString
```csharp
OpenTK.DisplayResolution.ToString
```
Returns a System.String representing this DisplayResolution.
_returns: A System.String representing this DisplayResolution._



### Properties

#### BitsPerPixel
Gets a System.Int32 that contains number of bits per pixel of this display. Typical values include 8, 16, 24 and 32.
#### Bounds
Gets a System.Drawing.Rectangle that contains the bounds of this display device.
#### Height
Gets a System.Int32 that contains the height of this display in pixels.
#### RefreshRate
Gets a System.Single representing the vertical refresh rate of this display.
#### Width
Gets a System.Int32 that contains the width of this display in pixels.

