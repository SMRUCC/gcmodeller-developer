---
title: GaussianStatistics
---

# GaussianStatistics
_namespace: [Bio.Distributions](N-Bio.Distributions.html)_

Gaussian Statistics. It assumes that the observations are closely clustered 
 around the mean, μ, and this amount is decaying quickly as we go farther away from the mean.

### Methods

#### #ctor
```csharp
Bio.Distributions.GaussianStatistics.#ctor(System.Double,System.Double,System.Int32)
```
Constructor Gaussian Statistics.

|Parameter Name|Remarks|
|--------------|-------|
|mean|The Mean.|
|var|The Variance.|
|sampleSize|The Sample size.|


#### Add
```csharp
Bio.Distributions.GaussianStatistics.Add(Bio.Distributions.GaussianStatistics,Bio.Distributions.GaussianStatistics)
```
Add two Gaussian Statistics.

|Parameter Name|Remarks|
|--------------|-------|
|x|GaussianStatistics x.|
|y|GaussianStatistics y.|

_returns: Returns added result of two Gaussian Statistics._

#### AsBooleanStatistics
```csharp
Bio.Distributions.GaussianStatistics.AsBooleanStatistics
```
Converts current object As Boolean Statistics.
_returns: Boolean Statistics._

#### AsContinuousStatistics
```csharp
Bio.Distributions.GaussianStatistics.AsContinuousStatistics
```
Converts current object As Continuous Statistics.
_returns: Continuous Statistics._

#### AsDiscreteStatistics
```csharp
Bio.Distributions.GaussianStatistics.AsDiscreteStatistics
```
Converts current object As Discrete Statistics.
_returns: Discrete Statistics._

#### AsGaussianStatistics
```csharp
Bio.Distributions.GaussianStatistics.AsGaussianStatistics
```
Converts current object As Gaussian Statistics.
_returns: Gaussian Statistics._

#### AsStatisticsList
```csharp
Bio.Distributions.GaussianStatistics.AsStatisticsList
```
Converts current object As Statistics List.
_returns: Statistics List._

#### Equals
```csharp
Bio.Distributions.GaussianStatistics.Equals(Bio.Distributions.SufficientStatistics)
```
Compares Sufficient Statistics.

|Parameter Name|Remarks|
|--------------|-------|
|stats|Sufficient Statistics.|

_returns: Returns true if equal._

#### GetHashCode
```csharp
Bio.Distributions.GaussianStatistics.GetHashCode
```
Get Hash Code.
_returns: Returns the Hash code._

#### GetInstance
```csharp
Bio.Distributions.GaussianStatistics.GetInstance(System.Collections.Generic.IEnumerable{System.Double})
```
Get's the sufficient statistics of the population using population variance (as opposed to the unbiased sample variance).

|Parameter Name|Remarks|
|--------------|-------|
|observations|Collection of observations.|

_returns: Gaussian Statistics._

#### IsMissing
```csharp
Bio.Distributions.GaussianStatistics.IsMissing
```
Checks the IsMissing flag and returns it.
_returns: Returns the IsMissing flag._

#### op_Implicit
```csharp
Bio.Distributions.GaussianStatistics.op_Implicit(Bio.Distributions.MissingStatistics)~Bio.Distributions.GaussianStatistics
```
Missing Statistics to Gaussian Statistics converter.

|Parameter Name|Remarks|
|--------------|-------|
|missing|Missing Statistics|

_returns: Returns the converted type._

#### ToString
```csharp
Bio.Distributions.GaussianStatistics.ToString
```
Converts to string.
_returns: Returns to string._

#### TryParse
```csharp
Bio.Distributions.GaussianStatistics.TryParse(System.String,Bio.Distributions.SufficientStatistics@)
```
Try Parse the value.

|Parameter Name|Remarks|
|--------------|-------|
|val|The Value.|
|result|Sufficient Statistics result.|

_returns: Returns true if parsed properly._



### Properties

#### _isMissing
IsMissing flag.
#### _mean
The mean Value.
#### _sampleSize
Sample size.
#### _variance
The Variance.
#### GetMissingInstance
Get Missing Instance.
#### Mean
The Mean value.
#### SampleSize
The sample Size.
#### SumOfSquares
Sum Of Squares.
#### Variance
The Variance.

