---
title: BezierCurveCubic
---

# BezierCurveCubic
_namespace: [OpenTK](N-OpenTK.html)_

Represents a cubic bezier curve with two anchor and two control points.

### Methods

#### #ctor
```csharp
OpenTK.BezierCurveCubic.#ctor(System.Single,OpenTK.Vector2,OpenTK.Vector2,OpenTK.Vector2,OpenTK.Vector2)
```
Constructs a new @"T:OpenTK.BezierCurveCubic".

|Parameter Name|Remarks|
|--------------|-------|
|parallel|The parallel value.|
|startAnchor|The start anchor point.|
|endAnchor|The end anchor point.|
|firstControlPoint|The first control point.|
|secondControlPoint|The second control point.|


#### CalculateLength
```csharp
OpenTK.BezierCurveCubic.CalculateLength(System.Single)
```
Calculates the length of this bezier curve.

|Parameter Name|Remarks|
|--------------|-------|
|precision|The precision.|

_returns: Length of the curve._
> The precision gets better when the **precision**
>             value gets smaller.

#### CalculatePoint
```csharp
OpenTK.BezierCurveCubic.CalculatePoint(System.Single)
```
Calculates the point with the specified t.

|Parameter Name|Remarks|
|--------------|-------|
|t|The t value, between 0.0f and 1.0f.|

_returns: Resulting point._

#### CalculatePointOfDerivative
```csharp
OpenTK.BezierCurveCubic.CalculatePointOfDerivative(System.Single)
```
Calculates the point with the specified t of the derivative of this function.

|Parameter Name|Remarks|
|--------------|-------|
|t|The t, value between 0.0f and 1.0f.|

_returns: Resulting point._



### Properties

#### EndAnchor
End anchor point.
#### FirstControlPoint
First control point, controls the direction of the curve start.
#### Parallel
Gets or sets the parallel value.
#### SecondControlPoint
Second control point, controls the direction of the curve end.
#### StartAnchor
Start anchor point.

