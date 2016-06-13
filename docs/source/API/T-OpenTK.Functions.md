---
title: Functions
---

# Functions
_namespace: [OpenTK](N-OpenTK.html)_

Contains mathematical functions for the OpenTK.Math toolkit.

### Methods

#### BinomialCoefficient
```csharp
OpenTK.Functions.BinomialCoefficient(System.Int32,System.Int32)
```
Calculates the binomial coefficient **n** above **k**.

|Parameter Name|Remarks|
|--------------|-------|
|n|The n.|
|k|The k.|

_returns: n! / (k! * (n - k)!)_

#### DegreesToRadians
```csharp
OpenTK.Functions.DegreesToRadians(System.Single)
```
Convert degrees to radians

|Parameter Name|Remarks|
|--------------|-------|
|degrees|An angle in degrees|

_returns: The angle expressed in radians_

#### Factorial
```csharp
OpenTK.Functions.Factorial(System.Int32)
```
Calculates the factorial of a given natural number.

|Parameter Name|Remarks|
|--------------|-------|
|n|The number.|

_returns: n!_

#### InverseSqrtFast
```csharp
OpenTK.Functions.InverseSqrtFast(System.Double)
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
OpenTK.Functions.NextPowerOfTwo(System.Double)
```
Returns the next power of two that is larger than the specified number.

|Parameter Name|Remarks|
|--------------|-------|
|n|The specified number.|

_returns: The next power of two._

#### RadiansToDegrees
```csharp
OpenTK.Functions.RadiansToDegrees(System.Single)
```
Convert radians to degrees

|Parameter Name|Remarks|
|--------------|-------|
|radians|An angle in radians|

_returns: The angle expressed in degrees_

#### Swap
```csharp
OpenTK.Functions.Swap(System.Single@,System.Single@)
```
Swaps two float values.

|Parameter Name|Remarks|
|--------------|-------|
|a|The first value.|
|b|The second value.|




### Properties

#### DTOR
Obsolete. Do not use.
#### DTORF
Obsolete. Do not use.
#### PI
Obsolete. Do not use.
#### PIF
Obsolete. Do not use.
#### RTOD
Obsolete. Do not use.
#### RTODF
Obsolete. Do not use.

