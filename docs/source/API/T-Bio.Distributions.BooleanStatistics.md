---
title: BooleanStatistics
---

# BooleanStatistics
_namespace: [Bio.Distributions](N-Bio.Distributions.html)_

Implementation of SufficientStatistics class for Boolean values and
 Missing values which cannot be classified in either of two states.

### Methods

#### #ctor
```csharp
Bio.Distributions.BooleanStatistics.#ctor(Bio.Distributions.Classification)
```
Instantiate a new instance of BooleanStatistics class.

|Parameter Name|Remarks|
|--------------|-------|
|classification|State of object. (True or False or Missing)|


#### AsBooleanStatistics
```csharp
Bio.Distributions.BooleanStatistics.AsBooleanStatistics
```
Converts current object to BooleanStatistics.
_returns: BooleanStatistics object._

#### AsContinuousStatistics
```csharp
Bio.Distributions.BooleanStatistics.AsContinuousStatistics
```
Converts current object to ContinuousStatistics.
_returns: ContinuousStatistics object._

#### AsDiscreteStatistics
```csharp
Bio.Distributions.BooleanStatistics.AsDiscreteStatistics
```
Converts current object to DiscreteStatistics.
_returns: DiscreteStatistics object._

#### AsGaussianStatistics
```csharp
Bio.Distributions.BooleanStatistics.AsGaussianStatistics
```
Converts current object to GaussianStatistics.
_returns: GaussianStatistics object._

#### AsStatisticsList
```csharp
Bio.Distributions.BooleanStatistics.AsStatisticsList
```
Converts current object to StatisticsList.
_returns: StatisticsList object._

#### ConvertToBooleanStatistics
```csharp
Bio.Distributions.BooleanStatistics.ConvertToBooleanStatistics(System.Collections.Generic.Dictionary{System.String,Bio.Distributions.SufficientStatistics})
```
Convert Sufficient statistics to boolean statistics.

|Parameter Name|Remarks|
|--------------|-------|
|dictionary|Dictionary containing key and state statistics.|

_returns: Dictionary containing key and BooleanStatistics._

#### Equals
```csharp
Bio.Distributions.BooleanStatistics.Equals(Bio.Distributions.SufficientStatistics)
```
Compares a given SufficientStatistics object with the current object.

|Parameter Name|Remarks|
|--------------|-------|
|stats|SufficientStatistics object to be compared|

_returns: True if both the objects are equal._

#### GetHashCode
```csharp
Bio.Distributions.BooleanStatistics.GetHashCode
```
Serves as a hash function for a particular type.
_returns: A hash code for the current object._

#### GetInstance
```csharp
Bio.Distributions.BooleanStatistics.GetInstance(System.Boolean)
```
Instantiate a new instance of BooleanStatistics class.

|Parameter Name|Remarks|
|--------------|-------|
|classification|The classification flag.|


#### IsMissing
```csharp
Bio.Distributions.BooleanStatistics.IsMissing
```
Determines the value of object which cannot be classified into any statistical distribution bins.

#### op_Explicit
```csharp
Bio.Distributions.BooleanStatistics.op_Explicit(Bio.Distributions.DiscreteStatistics)~Bio.Distributions.BooleanStatistics
```
Converts Discrete statistics to boolean statistics.

|Parameter Name|Remarks|
|--------------|-------|
|stats|Object of discrete statistics to be converted.|

_returns: Boolean statistics representing DiscreteStatistics_

#### op_Implicit
```csharp
Bio.Distributions.BooleanStatistics.op_Implicit(Bio.Distributions.MissingStatistics)~Bio.Distributions.BooleanStatistics
```
Converts MissingStatistics to boolean statistics.

|Parameter Name|Remarks|
|--------------|-------|
|missing|Object of MissingStatistics to be converted.|

_returns: BooleanStatistics object._

#### ToString
```csharp
Bio.Distributions.BooleanStatistics.ToString
```
Returns a System.String that represents the current Object.
_returns: A string that represents the current Object._

#### TryParse
```csharp
Bio.Distributions.BooleanStatistics.TryParse(System.String,Bio.Distributions.SufficientStatistics@)
```
Try converting the given string into SufficientStatistics object.

|Parameter Name|Remarks|
|--------------|-------|
|val|string to be converted.|
|result|SufficentStatistics object which corresponding to the given string.|

_returns: Whether string was successfully converted._



### Properties

#### _isMissing
Whether boolean value is missing.
#### _value
Boolean value at current state.
#### False
False: Boolean state.
#### GetMissingInstance
Gets a new instance of BooleanStatistics as missing value.
#### Missing
Use integer mapping for consistent array indexing conventions.
 Missing value which cannot be classified in either of two states.
#### True
True: Boolean state.

