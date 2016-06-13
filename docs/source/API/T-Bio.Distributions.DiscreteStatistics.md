---
title: DiscreteStatistics
---

# DiscreteStatistics
_namespace: [Bio.Distributions](N-Bio.Distributions.html)_

Discrete Statistics.This can not take a value between two values unlike Continuous Statistics.

### Methods

#### #ctor
```csharp
Bio.Distributions.DiscreteStatistics.#ctor(System.Int32)
```
Discrete Statistics constructor.

|Parameter Name|Remarks|
|--------------|-------|
|discreteClassification|The Discrete Classification.|


#### AsBooleanStatistics
```csharp
Bio.Distributions.DiscreteStatistics.AsBooleanStatistics
```
Converts current object As Boolean Statistics.
_returns: Boolean Statistics._

#### AsContinuousStatistics
```csharp
Bio.Distributions.DiscreteStatistics.AsContinuousStatistics
```
Converts current object As Continuous Statistics.
_returns: Continuous Statistics._

#### AsDiscreteStatistics
```csharp
Bio.Distributions.DiscreteStatistics.AsDiscreteStatistics
```
Converts current object As Discrete Statistics.
_returns: Discrete Statistics._

#### AsGaussianStatistics
```csharp
Bio.Distributions.DiscreteStatistics.AsGaussianStatistics
```
Converts current object As Gaussian Statistics.
_returns: Gaussian Statistics._

#### AsStatisticsList
```csharp
Bio.Distributions.DiscreteStatistics.AsStatisticsList
```
Converts current object As Statistics List.
_returns: Statistics List._

#### Equals
```csharp
Bio.Distributions.DiscreteStatistics.Equals(Bio.Distributions.SufficientStatistics)
```
Compares Sufficient Statistics with Discrete Statistics and Boolean Statistics.

|Parameter Name|Remarks|
|--------------|-------|
|stats|Sufficient Statistics.|

_returns: Returns true if equal._

#### GetHashCode
```csharp
Bio.Distributions.DiscreteStatistics.GetHashCode
```
Get Hash Code.
_returns: Returns the Hash code._

#### GetInstance
```csharp
Bio.Distributions.DiscreteStatistics.GetInstance(System.Int32)
```
Get Instance.

|Parameter Name|Remarks|
|--------------|-------|
|discreteteClassification|Discrete Classification.|

_returns: Discrete Statistics._

#### IsMissing
```csharp
Bio.Distributions.DiscreteStatistics.IsMissing
```
Checks the IsMissing flag and returns it.
_returns: Returns the IsMissing flag._

#### op_Implicit
```csharp
Bio.Distributions.DiscreteStatistics.op_Implicit(Bio.Distributions.MissingStatistics)~Bio.Distributions.DiscreteStatistics
```
Missing Statistics to Discrete Statistics converter.

|Parameter Name|Remarks|
|--------------|-------|
|missing|Missing Statistics.|

_returns: Returns the converted type._

#### ToString
```csharp
Bio.Distributions.DiscreteStatistics.ToString
```
Converts to string.
_returns: Returns to string._

#### TryParse
```csharp
Bio.Distributions.DiscreteStatistics.TryParse(System.String,Bio.Distributions.SufficientStatistics@)
```
Try to Parse the value.

|Parameter Name|Remarks|
|--------------|-------|
|val|The value.|
|result|Sufficient Statistics result.|

_returns: Returns true if parsed properly._



### Properties

#### _isMissing
Is missing flag.
#### _value
The Value.
#### GetMissingInstance
Get Missing Instance.
#### Value
The Value.

