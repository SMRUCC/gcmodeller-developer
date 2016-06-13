---
title: SufficientStatistics
---

# SufficientStatistics
_namespace: [Bio.Distributions](N-Bio.Distributions.html)_

Act as a base class for classes which contains distributional statistics.

### Methods

#### AsBooleanStatistics
```csharp
Bio.Distributions.SufficientStatistics.AsBooleanStatistics
```
Converts current object to BooleanStatistics.
_returns: BooleanStatistics object._

#### AsContinuousStatistics
```csharp
Bio.Distributions.SufficientStatistics.AsContinuousStatistics
```
Converts current object to ContinuousStatistics.
_returns: ContinuousStatistics object._

#### AsDiscreteStatistics
```csharp
Bio.Distributions.SufficientStatistics.AsDiscreteStatistics
```
Converts current object to DiscreteStatistics.
_returns: DiscreteStatistics object._

#### AsGaussianStatistics
```csharp
Bio.Distributions.SufficientStatistics.AsGaussianStatistics
```
Converts current object to GaussianStatistics.
_returns: GaussianStatistics object._

#### AsStatisticsList
```csharp
Bio.Distributions.SufficientStatistics.AsStatisticsList
```
Converts current object to StatisticsList.
_returns: StatisticsList object._

#### CompareTo
```csharp
Bio.Distributions.SufficientStatistics.CompareTo(Bio.Distributions.SufficientStatistics)
```
Compares the current object with another object of the same type.

|Parameter Name|Remarks|
|--------------|-------|
|other| An object to compare with this object.|

_returns:  A value that indicates the relative order of the objects being compared.
            The return value has the following meanings: Value Meaning Less than zero
            This object is less than the other parameter.Zero This object is equal to
            other. Greater than zero This object is greater than other._

#### Equals
```csharp
Bio.Distributions.SufficientStatistics.Equals(System.Object)
```
Determines whether the specified SObject is equal to the current Object.

|Parameter Name|Remarks|
|--------------|-------|
|obj|The Object to compare with the current Object|

_returns: true if the specified Object is equal to the current Object; otherwise, false._

#### GetHashCode
```csharp
Bio.Distributions.SufficientStatistics.GetHashCode
```
Serves as a hash function for a particular type.
_returns: A hash code for the current object._

#### IsMissing
```csharp
Bio.Distributions.SufficientStatistics.IsMissing
```
Determines the value of object which cannot be classified into any statistical distribution bins.

#### Parse
```csharp
Bio.Distributions.SufficientStatistics.Parse(System.String)
```
Convert given string into SufficientStatistics object.
 If string is not in correct format, throws an argument exception.

|Parameter Name|Remarks|
|--------------|-------|
|val|string to be converted.|

_returns: SufficentStatistics object which corresponding to the given string._

#### TryParse
```csharp
Bio.Distributions.SufficientStatistics.TryParse(System.String,Bio.Distributions.SufficientStatistics@)
```
Try converting the given string into SufficientStatistics object.

|Parameter Name|Remarks|
|--------------|-------|
|val|string to be converted.|
|result|SufficentStatistics object which corresponding to the given string.|

_returns: Whether string was successfully converted._




