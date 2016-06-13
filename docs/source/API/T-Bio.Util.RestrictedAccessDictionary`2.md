---
title: RestrictedAccessDictionary`2
---

# RestrictedAccessDictionary`2
_namespace: [Bio.Util](N-Bio.Util.html)_

A thin wrapper around Dictionary that allows access permissions to be set. Any changes not allowed result in an exception.

### Methods

#### #ctor
```csharp
Bio.Util.RestrictedAccessDictionary`2.#ctor(System.Collections.Generic.IDictionary{`0,`1},Bio.Util.AccessFlags)
```
Create a restricted access dictionary by wrapping a dictionary.

|Parameter Name|Remarks|
|--------------|-------|
|baseDictionary|The dictionary to wrap|
|accessFlags|The flags that define how to restrict the dictionary.|


#### GetEnumerator
```csharp
Bio.Util.RestrictedAccessDictionary`2.GetEnumerator
```
Enumerate the KeyValuePairs of the dictionary
_returns: A sequence of KeyValue pairs_

#### Remove
```csharp
Bio.Util.RestrictedAccessDictionary`2.Remove(System.Collections.Generic.KeyValuePair{`0,`1})
```
Remove an item from a restricted dictionary if that is allowd. It is not, raise an exception.

|Parameter Name|Remarks|
|--------------|-------|
|item|The item to remove|

_returns: true if the item was in the dictionary; otherwise, false_



### Properties

#### AddIsAllowed
True if and only if this dictionary allows elements to be added.
#### ChangeElementsIsAllowed
True if and only if this dictionary allows elements to change
#### RemoveIsAllowed
True if and only if this dictionary allows elments to be removed.

