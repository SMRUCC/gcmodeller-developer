---
title: ComparisonWrapper`1
---

# ComparisonWrapper`1
_namespace: [Bio.Util](N-Bio.Util.html)_

Wrapper class to use Comparison delegate.

### Methods

#### #ctor
```csharp
Bio.Util.ComparisonWrapper`1.#ctor(System.Comparison{`0})
```
Creates an instance of ComparisonWrapper class.

|Parameter Name|Remarks|
|--------------|-------|
|comparison|Comparison delegate to use.|


#### Compare
```csharp
Bio.Util.ComparisonWrapper`1.Compare(`0,`0)
```
Compares two instance and returns a value indicating whether one is less than,
 equal to, or greater than the other.
 For more detail see the below table.-----------------------------------------Value | Meaning |-----------------------------------------Less than zero | x is less than y. |Zero | x equals y |Greater than zero | x is greater than y |-----------------------------------------

|Parameter Name|Remarks|
|--------------|-------|
|x|The first instance to compare|
|y|The second instance to compare|




### Properties

#### Comparison
Gets Comparison delegate.

