---
title: MathHelper
---

# MathHelper
_namespace: [OpenTK](N-OpenTK.html)_

Contains common mathematical functions and constants.

### Methods

#### BinomialCoefficient
```csharp
OpenTK.MathHelper.BinomialCoefficient(System.Int32,System.Int32)
```
Calculates the binomial coefficient **n** above **k**.

|Parameter Name|Remarks|
|--------------|-------|
|n|The n.|
|k|The k.|

_returns: n! / (k! * (n - k)!)_

#### Clamp
```csharp
OpenTK.MathHelper.Clamp(System.Double,System.Double,System.Double)
```
Clamps a number between a minimum and a maximum.

|Parameter Name|Remarks|
|--------------|-------|
|n|The number to clamp.|
|min|The minimum allowed value.|
|max|The maximum allowed value.|

_returns: min, if n is lower than min; max, if n is higher than max; n otherwise._

#### DegreesToRadians
```csharp
OpenTK.MathHelper.DegreesToRadians(System.Double)
```
Convert degrees to radians

|Parameter Name|Remarks|
|--------------|-------|
|degrees|An angle in degrees|

_returns: The angle expressed in radians_

#### Factorial
```csharp
OpenTK.MathHelper.Factorial(System.Int32)
```
Calculates the factorial of a given natural number.

|Parameter Name|Remarks|
|--------------|-------|
|n|The number.|

_returns: n!_

#### InverseSqrtFast
```csharp
OpenTK.MathHelper.InverseSqrtFast(System.Double)
```
Returns an approximation of the inverse square root of left number.

|Parameter Name|Remarks|
|--------------|-------|
|x|A number.|

_returns: An approximation of the inverse square root of the specified number, with an upper error bound of 0.001_
> 
>             This is an improved implementation of the the method known as Carmack's inverse square root
>             which is found in the Quake III source code. This implementation comes from
>             http://www.codemaestro.com/reviews/review00000105.html. For the history of this method, see
>             http://www.beyond3d.com/content/articles/8/
>             

#### NextPowerOfTwo
```csharp
OpenTK.MathHelper.NextPowerOfTwo(System.Double)
```
Returns the next power of two that is larger than the specified number.

|Parameter Name|Remarks|
|--------------|-------|
|n|The specified number.|

_returns: The next power of two._

#### RadiansToDegrees
```csharp
OpenTK.MathHelper.RadiansToDegrees(System.Double)
```
Convert radians to degrees

|Parameter Name|Remarks|
|--------------|-------|
|radians|An angle in radians|

_returns: The angle expressed in degrees_

#### Swap
```csharp
OpenTK.MathHelper.Swap(System.Single@,System.Single@)
```
Swaps two float values.

|Parameter Name|Remarks|
|--------------|-------|
|a|The first value.|
|b|The second value.|




### Properties

#### E
Defines the value of E as a @"T:System.Single".
#### Log10E
Defines the base-10 logarithm of E.
#### Log2E
Defines the base-2 logarithm of E.
#### Pi
Defines the value of Pi as a @"T:System.Single".
#### PiOver2
Defines the value of Pi divided by two as a @"T:System.Single".
#### PiOver3
Defines the value of Pi divided by three as a @"T:System.Single".
#### PiOver4
Definesthe value of Pi divided by four as a @"T:System.Single".
#### PiOver6
Defines the value of Pi divided by six as a @"T:System.Single".
#### ThreePiOver2
Defines the value of Pi multiplied by 3 and divided by two as a @"T:System.Single".
#### TwoPi
Defines the value of Pi multiplied by two as a @"T:System.Single".

