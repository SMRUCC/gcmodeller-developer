---
title: Wavelets
---

# Wavelets
_namespace: [LANS.SystemsBiology.Toolkits.RNA_Seq.RTools](N-LANS.SystemsBiology.Toolkits.RNA_Seq.RTools.html)_

wavelets: A package of functions for computing wavelet filters, wavelet transforms and multiresolution analyses.
 This package contains functions for computing and plotting discrete wavelet transforms (DWT) and maximal overlap 
 discrete wavelet transforms (MODWT), as well as their inverses. Additionally, it contains functionality for 
 computing and plotting wavelet transform filters that are used in the above decompositions as well as 
 multiresolution analyses.

### Methods

#### DWT
```csharp
LANS.SystemsBiology.Toolkits.RNA_Seq.RTools.Wavelets.DWT(System.Double[],System.String,System.Int32,System.String,System.Boolean)
```
Discrete Wavelet Transform
 Computes the discrete wavelet transform coefficients for a univariate or multivariate time series.
 
 The discrete wavelet transform is computed via the pyramid algorithm, using pseudocode written by Percival and Walden (2000), pp. 100-101. 
 When boundary="periodic" the resulting wavelet and scaling coefficients are computed without making changes to the original series - 
 the pyramid algorithm treats X as if it is circular. However, when boundary="reflection" a call is made to extend.series, resulting in 
 a new series which is reflected to twice the length of the original series. The wavelet and scaling coefficients are then computed by using 
 a periodic boundary condition on the reflected sereis, resulting in twice as many wavelet and scaling coefficients at each level.

|Parameter Name|Remarks|
|--------------|-------|
|X|A univariate or multivariate time series. Numeric vectors, matrices and data frames are also accepted.|
|filter|Either a wt.filter object, a character string indicating which wavelet filter to use in the 
 decomposition, or a numeric vector of wavelet coefficients (not scaling coefficients). See help(wt.filter) for acceptable filter names.|
|nlevels|An integer specifying the level of the decomposition. By default this is the value J such that the length of X 
 is at least as great as the length of the level J wavelet filter, but less than the length of the level J+1 wavelet filter. 
 Thus, j <= log((N-1)/(L-1)+1), where N is the length of X.|
|boundary|A character string indicating which boundary method to use. boundary = "periodic" and boundary = "reflection" 
 are the only supported methods at this time.|
|fast|A logical flag which, if true, indicates that the pyramid algorithm is computed with an internal C function. 
 Otherwise, only R code is used in all computations.|

_returns: Returns an object of class dwt, which is an S4 object with slots_

#### MODWT
```csharp
LANS.SystemsBiology.Toolkits.RNA_Seq.RTools.Wavelets.MODWT(System.Double[],System.String,System.Int32,System.String,System.Boolean)
```
Maximal Overlap Discrete Wavelet Transform.
 Computes the maximal overlap discrete wavelet transform coefficients for a univariate or multivariate time series.
 
 The maximal overlap discrete wavelet transform is computed via the pyramid algorithm, using pseudocode written 
 by Percival and Walden (2000), p. 178. When boundary="periodic" the resulting wavelet and scaling coefficients 
 are computed without making changes to the original series - the pyramid algorithm treats X as if it is circular. 
 However, when boundary="reflection" a call is made to extend.series, resulting in a new series which is reflected 
 to twice the length of the original series. The wavelet and scaling coefficients are then computed by using a 
 periodic boundary condition on the reflected sereis, resulting in twice as many wavelet and scaling coefficients 
 at each level.

|Parameter Name|Remarks|
|--------------|-------|
|X|A univariate or multivariate time series. Numeric vectors, matrices and data frames are also accepted.|
|boundary|A character string indicating which boundary method to use. boundary = "periodic" and boundary = "reflection" are the only supported methods at this time.|
|fast|A logical flag which, if true, indicates that the pyramid algorithm is computed with an internal C function. Otherwise, only R code is used in all computations.|
|filter|Either a wt.filter object, a character string indicating which wavelet filter to use in the decomposition, or a numeric vector of wavelet coefficients (not scaling coefficients). See help(wt.filter) for acceptable filter names.|
|nlevels|An integer specifying the level of the decomposition. By default this is the value J such that the length of X is at least as great as the length of the level J wavelet filter, but less than the length of the level J+1 wavelet filter. Thus, j <= log((N-1)/(L-1)+1), where N is the length of X.|

> Returns an object of class modwt, which is an S4 object with slots




