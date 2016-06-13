---
title: BezierCurveQuadric
---

# BezierCurveQuadric
_namespace: [OpenTK](N-OpenTK.html)_

Represents a quadric bezier curve with two anchor and one control point.

### Methods

#### #ctor
```csharp
OpenTK.BezierCurveQuadric.#ctor(System.Single,OpenTK.Vector2,OpenTK.Vector2,OpenTK.Vector2)
```
Constructs a new @"T:OpenTK.BezierCurveQuadric".

|Parameter Name|Remarks|
|--------------|-------|
|parallel|The parallel value.|
|startAnchor|The start anchor.|
|endAnchor|The end anchor.|
|controlPoint|The control point.|


#### CalculateLength
```csharp
OpenTK.BezierCurveQuadric.CalculateLength(System.Single)
```
Calculates the length of this bezier curve.

|Parameter Name|Remarks|
|--------------|-------|
|precision|The precision.|

_returns: Length of curve._
> The precision gets better when the **precision**
>             value gets smaller.

#### CalculatePoint
```csharp
OpenTK.BezierCurveQuadric.CalculatePoint(System.Single)
```
Calculates the point with the specified t.

|Parameter Name|Remarks|
|--------------|-------|
|t|The t value, between 0.0f and 1.0f.|

_returns: Resulting point._

#### CalculatePointOfDerivative
```csharp
OpenTK.BezierCurveQuadric.CalculatePointOfDerivative(System.Single)
```
Calculates the point with the specified t of the derivative of this function.

|Parameter Name|Remarks|
|--------------|-------|
|t|The t, value between 0.0f and 1.0f.|

_returns: Resulting point._



### Properties

#### ControlPoint
Control point, controls the direction of both endings of the curve.
#### EndAnchor
End anchor point.
#### Parallel
The parallel value.
#### StartAnchor
Start anchor point.

