---
title: StatisticsList
---

# StatisticsList
_namespace: [Bio.Distributions](N-Bio.Distributions.html)_

Statistics List.

### Methods

#### #ctor
```csharp
Bio.Distributions.StatisticsList.#ctor(System.Collections.Generic.IEnumerable{Bio.Distributions.SufficientStatistics})
```
Statistics List constructor.

|Parameter Name|Remarks|
|--------------|-------|
|stats|Collection of Sufficient Statistics.|


#### Add
```csharp
Bio.Distributions.StatisticsList.Add(Bio.Distributions.SufficientStatistics,Bio.Distributions.SufficientStatistics)
```
Add two Sufficient Statistics.

|Parameter Name|Remarks|
|--------------|-------|
|stats1|Sufficient Statistics 1.|
|stats2|Sufficient Statistics 2.|

_returns: Returns the Addition of all._

#### AsBooleanStatistics
```csharp
Bio.Distributions.StatisticsList.AsBooleanStatistics
```
Converts current object As Boolean Statistics.
_returns: Boolean Statistics._

#### AsContinuousStatistics
```csharp
Bio.Distributions.StatisticsList.AsContinuousStatistics
```
Converts current object As Continuous Statistics.
_returns: Continuous Statistics._

#### AsDiscreteStatistics
```csharp
Bio.Distributions.StatisticsList.AsDiscreteStatistics
```
Converts current object As Discrete Statistics.
_returns: Discrete Statistics._

#### AsGaussianStatistics
```csharp
Bio.Distributions.StatisticsList.AsGaussianStatistics
```
Converts current object As Statistics List.
_returns: Statistics List._

#### AsStatisticsList
```csharp
Bio.Distributions.StatisticsList.AsStatisticsList
```


#### Clone
```csharp
Bio.Distributions.StatisticsList.Clone
```
Gives the clone of Statistics List.
_returns: Returns clone of Statistics List._

#### Equals
```csharp
Bio.Distributions.StatisticsList.Equals(Bio.Distributions.SufficientStatistics)
```
Compares Sufficient Statistics.

|Parameter Name|Remarks|
|--------------|-------|
|stats|Sufficient Statistics.|

_returns: Returns true if equal._

#### GetEnumerator
```csharp
Bio.Distributions.StatisticsList.GetEnumerator
```
Gets Enumerator for Sufficient Statistics.
_returns: Returns Enumerator of Sufficient Statistics._

#### GetHashCode
```csharp
Bio.Distributions.StatisticsList.GetHashCode
```
Gets the Hash code.
_returns: Returns the Hash code._

#### GetInstance
```csharp
Bio.Distributions.StatisticsList.GetInstance(System.Collections.Generic.IEnumerable{Bio.Distributions.SufficientStatistics})
```
Get Instance.

|Parameter Name|Remarks|
|--------------|-------|
|stats|Collection of Sufficient Statistics.|

_returns: Statistics List._

#### IsMissing
```csharp
Bio.Distributions.StatisticsList.IsMissing
```
Checks the IsMissing flag and returns it.
_returns: Returns the IsMissing flag._

#### op_Implicit
```csharp
Bio.Distributions.StatisticsList.op_Implicit(Bio.Distributions.MissingStatistics)~Bio.Distributions.StatisticsList
```
Missing Statistics to Statistics List converter.

|Parameter Name|Remarks|
|--------------|-------|
|missing|Missing Statistics.|

_returns: Returns the converted type._

#### Remove
```csharp
Bio.Distributions.StatisticsList.Remove(System.Int32)
```
Remove value from Sufficient Statistics.

|Parameter Name|Remarks|
|--------------|-------|
|i|The index from SufficientStatistics to be removed.|

_returns: Returns Sufficient Statistics._

#### RemoveRange
```csharp
Bio.Distributions.StatisticsList.RemoveRange(System.Int32,System.Int32)
```
Remove Range.

|Parameter Name|Remarks|
|--------------|-------|
|startPos|Starting position.|
|count|The no of Count to be removed.|


#### ResetIsMissing
```csharp
Bio.Distributions.StatisticsList.ResetIsMissing
```
Reset Is Missing.

#### SubSequence
```csharp
Bio.Distributions.StatisticsList.SubSequence(System.Int32,System.Int32)
```
The Sub Sequence.

|Parameter Name|Remarks|
|--------------|-------|
|start|Starting position.|
|count|The Count.|

_returns: Sufficient Statistics._

#### System#Collections#IEnumerable#GetEnumerator
```csharp
Bio.Distributions.StatisticsList.System#Collections#IEnumerable#GetEnumerator
```
Gets Enumerator.
_returns: Returns Enumerator._

#### ToString
```csharp
Bio.Distributions.StatisticsList.ToString
```
Converts to string.
_returns: Returns string._

#### TryParse
```csharp
Bio.Distributions.StatisticsList.TryParse(System.String,Bio.Distributions.SufficientStatistics@)
```
Try Parse the value.

|Parameter Name|Remarks|
|--------------|-------|
|val|The Value.|
|result|Sufficient Statistics result.|

_returns: Returns true if parsed properly._



### Properties

#### Count
Stats count.
#### GetMissingInstance
Get Missing Instance.
#### hashCode
Hash Code.
#### isMissing
IsMissing Flag.
#### Item
Sufficient Statistics indexer.
#### Last
Sufficient Statistics end.
#### Separator
The separator.
#### stats
List of SufficientStatistics.

