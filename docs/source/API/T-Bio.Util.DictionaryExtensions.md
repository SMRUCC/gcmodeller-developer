---
title: DictionaryExtensions
---

# DictionaryExtensions
_namespace: [Bio.Util](N-Bio.Util.html)_

Extension methods for IDictionary{TKey,TValue}

### Methods

#### AsRestrictedAccessDictionary``2
```csharp
Bio.Util.DictionaryExtensions.AsRestrictedAccessDictionary``2(System.Collections.Generic.IDictionary{``0,``1},Bio.Util.AccessFlags)
```
Creates a shallow restricted access dictionary wrapper around the given dictionary. Only access specified by the flags is allowed.

#### GetValueOrDefault``2
```csharp
Bio.Util.DictionaryExtensions.GetValueOrDefault``2(System.Collections.Generic.IDictionary{``0,``1},``0,``1,System.Boolean)
```
Returns the value associated with key in the dictionary. If not present, adds the default value to the dictionary and returns that
 value.
_returns: A value for this key._

#### Invert``2
```csharp
Bio.Util.DictionaryExtensions.Invert``2(System.Collections.Generic.IDictionary{``0,``1})
```
With throw exception if not 1-1 mapping.




