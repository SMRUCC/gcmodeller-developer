---
title: UOPair`1
---

# UOPair`1
_namespace: [Bio.Util](N-Bio.Util.html)_

Defines a pair in which the order of the two items are always keep sorted. This struct is hashable and IComparable based
 on its elements.

### Methods

#### #ctor
```csharp
Bio.Util.UOPair`1.#ctor(`0,`0)
```
Creates a new UOPair from new elements. The items may be the same and do not need to be in order. If T allows null, then null is allowed.
 If exactly one of e1 and e2 is null, then First will be null and Second will be non-null.
 The items must be IComparable{T}.

|Parameter Name|Remarks|
|--------------|-------|
|e1|an element for the UOPair|
|e2|another element for the UOPair. The two elements may be the same and do not need to be in order.|

_returns: A struct with the two items in sorted order._

#### CompareTo
```csharp
Bio.Util.UOPair`1.CompareTo(Bio.Util.UOPair{`0})
```
Compares the UOPair to the other UOPair and returns an indication of their relative values (based on the ICompare of their elements).

|Parameter Name|Remarks|
|--------------|-------|
|other|the UOPair to compare to|


#### Equals
```csharp
Bio.Util.UOPair`1.Equals(System.Object)
```
Two UOPairs are equal if their (sorted) elements are equal.

|Parameter Name|Remarks|
|--------------|-------|
|obj|-|


#### GetEnumerator
```csharp
Bio.Util.UOPair`1.GetEnumerator
```
Enumerates the pair in sorted order
_returns: the elements of the pair in sorted order._

#### GetHashCode
```csharp
Bio.Util.UOPair`1.GetHashCode
```
A hashcode such that two UOPairs{T} with the same elements will have the same hashcode.
 Depending on the subtypes, the hash code may be different on 32-bit and 64-bit machines

#### op_Equality
```csharp
Bio.Util.UOPair`1.op_Equality(Bio.Util.UOPair{`0},Bio.Util.UOPair{`0})
```


#### op_GreaterThan
```csharp
Bio.Util.UOPair`1.op_GreaterThan(Bio.Util.UOPair{`0},Bio.Util.UOPair{`0})
```


#### op_Inequality
```csharp
Bio.Util.UOPair`1.op_Inequality(Bio.Util.UOPair{`0},Bio.Util.UOPair{`0})
```


#### op_LessThan
```csharp
Bio.Util.UOPair`1.op_LessThan(Bio.Util.UOPair{`0},Bio.Util.UOPair{`0})
```


#### System#Collections#IEnumerable#GetEnumerator
```csharp
Bio.Util.UOPair`1.System#Collections#IEnumerable#GetEnumerator
```
Enumerates the pair in sorted order
_returns: the elements of the pair in sorted order._

#### ToString
```csharp
Bio.Util.UOPair`1.ToString
```
Either (UO e1 e2) -- if elements differ -- or (UO 2x e)



### Properties

#### ElementsAreSame
True, if the elements are Equals; false, otherwise. If both elements are null, also true.
#### First
The first of the two sorted items.
#### Second
The second of the two sorted items.

