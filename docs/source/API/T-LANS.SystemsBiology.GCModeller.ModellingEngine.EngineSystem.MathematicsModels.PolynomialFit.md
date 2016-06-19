﻿---
title: PolynomialFit
---

# PolynomialFit
_namespace: [LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.MathematicsModels](N-LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.MathematicsModels.html)_

The original works was comes from here: http://www.vb-helper.com/howto_net_polynomial_least_squares.html



### Methods

#### ErrorSquared
```csharp
LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.MathematicsModels.PolynomialFit.ErrorSquared(LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.MathematicsModels.PolynomialFit.PointF[],System.Double[])
```
Return the error squared.

|Parameter Name|Remarks|
|--------------|-------|
|points|-|
|coeffs|-|


#### F
```csharp
LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.MathematicsModels.PolynomialFit.F(System.Double[],System.Double)
```
Calculate the function value for a specific X.

|Parameter Name|Remarks|
|--------------|-------|
|coeffs|Calculation result from @"M:LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.MathematicsModels.PolynomialFit.FindPolynomialLeastSquaresFit(LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.MathematicsModels.PolynomialFit.PointF[],System.Int32)"[the polynomial fit function]|
|x|-|


#### FindPolynomialLeastSquaresFit
```csharp
LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.MathematicsModels.PolynomialFit.FindPolynomialLeastSquaresFit(LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.MathematicsModels.PolynomialFit.PointF[],System.Int32)
```
Find the least squares linear fit.

|Parameter Name|Remarks|
|--------------|-------|
|points|-|
|degree|-|


