---
title: StandardFeatureMap
---

# StandardFeatureMap
_namespace: [Bio.IO.GenBank](N-Bio.IO.GenBank.html)_

Class to map each standard feature key to the class which can hold that feature.
 Note that the classes which can hold feature has to be derived from FeatureItem class.

### Methods

#### #cctor
```csharp
Bio.IO.GenBank.StandardFeatureMap.#cctor
```
Static constructor.

#### GetStandardFeatureItem
```csharp
Bio.IO.GenBank.StandardFeatureMap.GetStandardFeatureItem(Bio.IO.GenBank.FeatureItem)
```
Returns standard feature class instance, if the key in the specified feature item is found 
 in the map; otherwise returns the specified feature item itself.
 For example:
 If the specified feature item has the key "Gene" then this method returns instance of the Gene class
 with data copied from the specified item.

|Parameter Name|Remarks|
|--------------|-------|
|item|Feature item instance to which the standard feature item instance is needed.|

_returns: If found returns appropriate class instance for the specified feature item, otherwise returns 
            the specified item itself._




