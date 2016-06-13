---
title: WiggleAnnotation
---

# WiggleAnnotation
_namespace: [Bio.IO.Wiggle](N-Bio.IO.Wiggle.html)_

Wiggle annotation class to represent sequence annotation data in wiggle format.
 Supports fixed/variable step wiggle data.

### Methods

#### #ctor
```csharp
Bio.IO.Wiggle.WiggleAnnotation.#ctor
```
Initializes a new instance of the WiggleAnnotation class.

#### GetEnumerator
```csharp
Bio.IO.Wiggle.WiggleAnnotation.GetEnumerator
```
Gets an enumerator to loop through all the annotation values.
_returns: Annotation items enumerator._

#### GetValueArray
```csharp
Bio.IO.Wiggle.WiggleAnnotation.GetValueArray(System.Int64,System.Int64)
```
Gets the annotation values at a given range.
 Supported only for fixed step annotations.

|Parameter Name|Remarks|
|--------------|-------|
|startIndex|Start location.|
|length|Total number of values to extract.|

_returns: Sub set of annotation data._

#### SetFixedStepAnnotationData
```csharp
Bio.IO.Wiggle.WiggleAnnotation.SetFixedStepAnnotationData(System.Single[])
```
Sets the fixed step annotation values of the current annotation object.

|Parameter Name|Remarks|
|--------------|-------|
|values|Annotation data.|


#### SetVariableStepAnnotationData
```csharp
Bio.IO.Wiggle.WiggleAnnotation.SetVariableStepAnnotationData(System.Collections.Generic.KeyValuePair{System.Int64,System.Single}[])
```
Sets the variable step annotation values of the current annotation object.

|Parameter Name|Remarks|
|--------------|-------|
|values|Annotation data.|


#### System#Collections#IEnumerable#GetEnumerator
```csharp
Bio.IO.Wiggle.WiggleAnnotation.System#Collections#IEnumerable#GetEnumerator
```
Gets an enumerator to loop through all the annotation values.
_returns: Annotation items enumerator._



### Properties

#### AnnotationType
Gets the type of annotation (fixed/variable).
#### BasePosition
Gets the base position or start in case of fixed step annotation.
#### Chromosome
Gets the chromosome to which this annotation applies.
#### Comments
Gets the list of comments on this annotation.
#### Count
Gets the total count of annotation values in this object.
#### Item
Gets the location and value of an annotation item at the given index.
 Index is zero based and is the index of the item in the annotation items list,
 not to be confused with the base pair index.
 Base pair index can be calculated as BasePosition + index (fixed step).
#### Metadata
Gets the metadata from the track line of wiggle file.
#### Span
Gets the span. -1 if not applicable.
#### Step
Gets the step in case of fixed step annotation.

