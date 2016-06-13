---
title: ContinuousStatistics
---

# ContinuousStatistics
_namespace: [Bio.Distributions](N-Bio.Distributions.html)_

Continuous Statistics class.

### Methods

#### #ctor
```csharp
Bio.Distributions.ContinuousStatistics.#ctor(System.Double)
```
Continuous Statistics.

|Parameter Name|Remarks|
|--------------|-------|
|value|The value.|


#### AsBooleanStatistics
```csharp
Bio.Distributions.ContinuousStatistics.AsBooleanStatistics
```
Converts current object As Boolean Statistics.
_returns: Boolean Statistics._

#### AsContinuousStatistics
```csharp
Bio.Distributions.ContinuousStatistics.AsContinuousStatistics
```
Converts current object As Continuous Statistics.
_returns: Continuous Statistics._

#### AsDiscreteStatistics
```csharp
Bio.Distributions.ContinuousStatistics.AsDiscreteStatistics
```
Converts current object As Discrete Statistics.
_returns: Discrete Statistics._

#### AsGaussianStatistics
```csharp
Bio.Distributions.ContinuousStatistics.AsGaussianStatistics
```
Converts current object As Gaussian Statistics.
_returns: Gaussian Statistics._

#### AsStatisticsList
```csharp
Bio.Distributions.ContinuousStatistics.AsStatisticsList
```
Converts current object As Statistics List.
_returns: Statistics List._

#### Equals
```csharp
Bio.Distributions.ContinuousStatistics.Equals(Bio.Distributions.SufficientStatistics)
```
Compares a given SufficientStatistics object with the current object.

|Parameter Name|Remarks|
|--------------|-------|
|stats|SufficientStatistics object to be compared.|

_returns: True if both the objects are equal._

#### GetHashCode
```csharp
Bio.Distributions.ContinuousStatistics.GetHashCode
```
Get Hash Code.
_returns: Returns the Hash code._

#### GetInstance
```csharp
Bio.Distributions.ContinuousStatistics.GetInstance(System.Double)
```
Get Instance.

|Parameter Name|Remarks|
|--------------|-------|
|value|The value.|

_returns: Continuous Statistics._

#### IsMissing
```csharp
Bio.Distributions.ContinuousStatistics.IsMissing
```
Is Missing.
_returns: True if missing._

#### op_Explicit
```csharp
Bio.Distributions.ContinuousStatistics.op_Explicit(Bio.Distributions.ContinuousStatistics)~Bio.Distributions.DiscreteStatistics
```
Converts ContinuousStatistics to DiscreteStatistics.

|Parameter Name|Remarks|
|--------------|-------|
|continuousStats|Continuous Statistics.|

_returns: DiscreteStatistics._

#### op_Implicit
```csharp
Bio.Distributions.ContinuousStatistics.op_Implicit(Bio.Distributions.DiscreteStatistics)~Bio.Distributions.ContinuousStatistics
```
Converts DiscreteStatistics to ContinuousStatistics.

|Parameter Name|Remarks|
|--------------|-------|
|discreteStats|Discrete Statistics.|

_returns: ContinuousStatistics._

#### ToString
```csharp
Bio.Distributions.ContinuousStatistics.ToString
```
converts to string.
_returns: Returns value in string format._

#### TryParse
```csharp
Bio.Distributions.ContinuousStatistics.TryParse(System.String,Bio.Distributions.SufficientStatistics@)
```
Try Parse.

|Parameter Name|Remarks|
|--------------|-------|
|val|Value String.|
|result|Sufficient Statistics.|

_returns: Return true in parsed properly._



### Properties

#### _isMissing
IsMissing.
#### _value
Value.
#### GetMissingInstance
GetMissing Instance.
#### Value
Value.

