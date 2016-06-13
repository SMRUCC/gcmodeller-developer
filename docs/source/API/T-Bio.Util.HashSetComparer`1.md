---
title: HashSetComparer`1
---

# HashSetComparer`1
_namespace: [Bio.Util](N-Bio.Util.html)_

A basic hashset comparer which compares the contents of two hashsets.
 Basically built to use with Dictionary.

### Methods

#### Equals
```csharp
Bio.Util.HashSetComparer`1.Equals(System.Collections.Generic.HashSet{`0},System.Collections.Generic.HashSet{`0})
```
Checks if two hashSets contain same set of items or not.

|Parameter Name|Remarks|
|--------------|-------|
|x|First hashset.|
|y|Second hashset.|

_returns: Returns true if both have equal data._

#### GetHashCode
```csharp
Bio.Util.HashSetComparer`1.GetHashCode(System.Collections.Generic.HashSet{`0})
```
Serves as a hash function for a particular type.

|Parameter Name|Remarks|
|--------------|-------|
|obj|Object of which hashcode has to calculated.|

_returns: A hash code for the current System.Object._




