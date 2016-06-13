---
title: IndexedItem`1
---

# IndexedItem`1
_namespace: [Bio](N-Bio.html)_

IndexedItem holds an item and its index.
 Index is a zero based position of item.
 This class is used in Sparse Sequence to get the known sequence items with their positions.
 
 This class implements IComparable interface and all comparisons are based on index 
 and not on item.

### Methods

#### #ctor
```csharp
Bio.IndexedItem`1.#ctor(System.Int64,`0)
```
Creates a new IndexedItem from the specified index and item.

|Parameter Name|Remarks|
|--------------|-------|
|index|Index of the item specified.|
|item|Item.|


#### CompareTo
```csharp
Bio.IndexedItem`1.CompareTo(System.Object)
```
Compares Index property of this instance with the Index property of specified IndexedItem 
 and returns an indication of their relative values.
 
 Parameter obj must be of IndexedItem, else an ArgumentException will occur.

|Parameter Name|Remarks|
|--------------|-------|
|obj|IndexedItem instance to compare.|

_returns: 
            A signed number indicating the relative values of index property of this instance and the 
            index property of specified IndexedItem.
            Return Value Description:
                  Less than zero index of this instance is less than the index of specified IndexedItem.
                  Zero index of this instance is equal to the index of specified IndexedItem.
                  Greater than zero index of this instance is greater than the index of specified IndexedItem 
                    or specified IndexedItem is null.
            _

#### Equals
```csharp
Bio.IndexedItem`1.Equals(System.Object)
```
Returns a value indicating whether this instance is equal to a specified IndexedItem.
 
 Note that this method compares both index and item. If both Index and Item of this instance and 
 obj are equal then it returns true else returns false.

|Parameter Name|Remarks|
|--------------|-------|
|obj|IndexedItem instance to compare.|

_returns: Returns true if obj has the same index and item values as of this instance;
            otherwise, false._

#### GetHashCode
```csharp
Bio.IndexedItem`1.GetHashCode
```
Returns a hash code for this instance.
_returns: A hash code._

#### op_Equality
```csharp
Bio.IndexedItem`1.op_Equality(Bio.IndexedItem{`0},Bio.IndexedItem{`0})
```
Compares the index of leftHandSideObject and rightHandSideObject, if index of leftHandSideObject is
 equal to the index of rightHandSideObject then returns true else returns false.
 
 Note that this method will compare only index and will not compare Item property.

|Parameter Name|Remarks|
|--------------|-------|
|leftHandSideObject|An instance of IndexedItem as first operand.|
|rightHandSideObject|An instance of IndexedItem as second operand.|

_returns: Returns true if index of leftHandSideObject is equal to the index of rightHandSideObject,
            else returns false._

#### op_GreaterThan
```csharp
Bio.IndexedItem`1.op_GreaterThan(Bio.IndexedItem{`0},Bio.IndexedItem{`0})
```
Compares the index of leftHandSideObject and rightHandSideObject, if index of leftHandSideObject is greater than 
 the index of rightHandSideObject then returns true else returns false.
 
 Note that this method will compare only index and will not compare Item property.

|Parameter Name|Remarks|
|--------------|-------|
|leftHandSideObject|An instance of IndexedItem as first operand.|
|rightHandSideObject|An instance of IndexedItem as second operand.|

_returns: Returns true if index of leftHandSideObject is greater than the index of rightHandSideObject,
            else returns false._

#### op_GreaterThanOrEqual
```csharp
Bio.IndexedItem`1.op_GreaterThanOrEqual(Bio.IndexedItem{`0},Bio.IndexedItem{`0})
```
Compares the index of leftHandSideObject and rightHandSideObject, if index of leftHandSideObject is greater than
 or equal to the index of rightHandSideObject then returns true else returns false.
 
 Note that this method will compare only index and will not compare Item property.

|Parameter Name|Remarks|
|--------------|-------|
|leftHandSideObject|An instance of IndexedItem as first operand.|
|rightHandSideObject|An instance of IndexedItem as second operand.|

_returns: Returns true if index of leftHandSideObject is greater than or equal to the index of rightHandSideObject,
            else returns false._

#### op_Inequality
```csharp
Bio.IndexedItem`1.op_Inequality(Bio.IndexedItem{`0},Bio.IndexedItem{`0})
```
Compares the index of leftHandSideObject and rightHandSideObject, if index of leftHandSideObject is
 not equal to the index of rightHandSideObject then returns true else returns false.
 
 Note that this method will compare only index and will not compare Item property.

|Parameter Name|Remarks|
|--------------|-------|
|leftHandSideObject|An instance of IndexedItem as first operand.|
|rightHandSideObject|An instance of IndexedItem as second operand.|

_returns: Returns true if index of leftHandSideObject is not equal to the index of rightHandSideObject,
            else returns false._

#### op_LessThan
```csharp
Bio.IndexedItem`1.op_LessThan(Bio.IndexedItem{`0},Bio.IndexedItem{`0})
```
Compares the index of leftHandSideObject and rightHandSideObject, if index of leftHandSideObject is less than 
 the index of rightHandSideObject then returns true, else returns false.
 
 Note that this method will compare only index and will not compare Item property.

|Parameter Name|Remarks|
|--------------|-------|
|leftHandSideObject|An instance of IndexedItem as first operand.|
|rightHandSideObject|An instance of IndexedItem as second operand.|

_returns: Returns true if index of leftHandSideObject is less than the index of rightHandSideObject,
            else returns false._

#### op_LessThanOrEqual
```csharp
Bio.IndexedItem`1.op_LessThanOrEqual(Bio.IndexedItem{`0},Bio.IndexedItem{`0})
```
Compares the index of leftHandSideObject and rightHandSideObject, if index of leftHandSideObject is 
 less than or equal to the index of rightHandSideObject then returns true else returns false.
 
 Note that this method will compare only index and will not compare Item property.

|Parameter Name|Remarks|
|--------------|-------|
|leftHandSideObject|An instance of IndexedItem as first operand.|
|rightHandSideObject|An instance of IndexedItem as second operand.|

_returns: Returns true if index of leftHandSideObject is less than or equal to the index of rightHandSideObject,
            else returns false._



### Properties

#### Index
Gets or sets the index.
 Specifies the zero based position of the item.
#### Item
Gets or sets the item.

