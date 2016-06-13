---
title: SequenceRange
---

# SequenceRange
_namespace: [Bio](N-Bio.html)_

A SequenceRange holds the data necessary to represent a region within
 a sequence defined by its start and end index without necessarily holding
 any of the sequence item data. At a minimum and ID, start index, and end
 index are required. Additional metadata can be stored as well using a
 generic key value pair.

### Methods

#### #ctor
```csharp
Bio.SequenceRange.#ctor(System.String,System.Int64,System.Int64)
```
Data constructor that sets the most commonly used fields.
 Note that if the end value is less than start value then the end values is assigned to the start value.

|Parameter Name|Remarks|
|--------------|-------|
|id|An ID for the range. This does not need to be unique, and often represents the chromosome of the range.|
|start|A starting index for the range. In the BED format this index starts counting from 0.|
|end|An ending index for the range. In the BED format this index is exclusive.|


#### CompareTo
```csharp
Bio.SequenceRange.CompareTo(Bio.ISequenceRange)
```
Compares two sequence ranges.

|Parameter Name|Remarks|
|--------------|-------|
|other|SequenceRange instance to compare.|

_returns: 
            If the Start values of the two ranges are identical then the
            result of this comparison is the result from calling CompareTo() on
            the two End values. If the Start values are not equal then the result
            of this comparison is the result of calling CompareTo() on the two
            Start values.
            _

#### Equals
```csharp
Bio.SequenceRange.Equals(System.Object)
```
Overrides the equal method

|Parameter Name|Remarks|
|--------------|-------|
|obj|Object to be checked|

_returns: Is equals_

#### GetHashCode
```csharp
Bio.SequenceRange.GetHashCode
```
Overrides hash function for a particular type.
_returns: hash code_

#### op_Equality
```csharp
Bio.SequenceRange.op_Equality(Bio.SequenceRange,Bio.SequenceRange)
```
Override equal operator

|Parameter Name|Remarks|
|--------------|-------|
|leftHandSideObject|LHS object|
|rightHandSideObject|RHS object|

_returns: Is LHS == RHS_

#### op_GreaterThan
```csharp
Bio.SequenceRange.op_GreaterThan(Bio.SequenceRange,Bio.SequenceRange)
```
Override greater than operator

|Parameter Name|Remarks|
|--------------|-------|
|leftHandSideObject|LHS object|
|rightHandSideObject|RHS object|

_returns: Is LHS == RHS_

#### op_Inequality
```csharp
Bio.SequenceRange.op_Inequality(Bio.SequenceRange,Bio.SequenceRange)
```
Override not equal operator

|Parameter Name|Remarks|
|--------------|-------|
|leftHandSideObject|LHS object|
|rightHandSideObject|RHS object|

_returns: Is LHS == RHS_

#### op_LessThan
```csharp
Bio.SequenceRange.op_LessThan(Bio.SequenceRange,Bio.SequenceRange)
```
Override less than operator

|Parameter Name|Remarks|
|--------------|-------|
|leftHandSideObject|LHS object|
|rightHandSideObject|RHS object|

_returns: Is LHS == RHS_

#### ToString
```csharp
Bio.SequenceRange.ToString
```
Converts ID, Start, End of the sequence to string.
_returns: ID, Start, End of the sequence._



### Properties

#### End
The end index of the range. This index must be non-negative and
 it will be enforced to always be greater than or equal to the Start index.
#### ID
A string identifier of the sequence range.
#### Length
The length of the range, which can be zero. This result is the
 difference of the End and Start index.
#### Metadata
Optional additional data to store along with the ID and indices of
 the range. Metadata must be stored with a string key name.
#### ParentSeqRanges
Gets the sequence ranges from which this sequence range is obtained.
 This property will be filled by the operations like Merge, Intersect etc.
#### Start
The beginning index of the range. This index must be non-negative and
 it will be enforced to always be less than or equal to the End index.

