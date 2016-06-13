---
title: BezierCurve
---

# BezierCurve
_namespace: [OpenTK](N-OpenTK.html)_

Represents a bezier curve with as many points as you want.

### Methods

#### #ctor
```csharp
OpenTK.BezierCurve.#ctor(System.Single,System.Collections.Generic.IEnumerable{OpenTK.Vector2})
```
Constructs a new @"T:OpenTK.BezierCurve".

|Parameter Name|Remarks|
|--------------|-------|
|parallel|The parallel value.|
|points|The points.|


#### CalculateLength
```csharp
OpenTK.BezierCurve.CalculateLength(System.Collections.Generic.IList{OpenTK.Vector2},System.Single,System.Single)
```
Calculates the length of the specified bezier curve.

|Parameter Name|Remarks|
|--------------|-------|
|points|The points.|
|precision|The precision value.|
|parallel|The parallel value.|

_returns: Length of curve._
> The precision gets better as the **precision**
>             value gets smaller.The **parallel** parameter defines whether the curve should be calculated as a
>             parallel curve to the original bezier curve. A value of 0.0f represents
>             the original curve, 5.0f represents a curve that has always a distance
>             of 5.0f to the orignal curve.

#### CalculatePoint
```csharp
OpenTK.BezierCurve.CalculatePoint(System.Collections.Generic.IList{OpenTK.Vector2},System.Single,System.Single)
```
Calculates the point on the given bezier curve with the specified t parameter.

|Parameter Name|Remarks|
|--------------|-------|
|points|The points.|
|t|The t parameter, a value between 0.0f and 1.0f.|
|parallel|The parallel value.|

_returns: Resulting point._
> The **parallel** parameter defines whether the curve should be calculated as a
>             parallel curve to the original bezier curve. A value of 0.0f represents
>             the original curve, 5.0f represents a curve that has always a distance
>             of 5.0f to the orignal curve.

#### CalculatePointOfDerivative
```csharp
OpenTK.BezierCurve.CalculatePointOfDerivative(System.Collections.Generic.IList{OpenTK.Vector2},System.Single)
```
Calculates the point with the specified t of the derivative of the given bezier function.

|Parameter Name|Remarks|
|--------------|-------|
|points|The points.|
|t|The t parameter, value between 0.0f and 1.0f.|

_returns: Resulting point._



### Properties

#### Parallel
The parallel value.
#### Points
Gets the points of this curve.

