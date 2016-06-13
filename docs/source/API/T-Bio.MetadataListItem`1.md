---
title: MetadataListItem`1
---

# MetadataListItem`1
_namespace: [Bio](N-Bio.html)_

It is common for a biological sequence file to contain lists of certain types of metadata,
 such as features or references, which can be stored as MetadataListItems. A
 MetadataListItem contains a key (which might not be unique) a free-text field of top level
 information (such as a sequence location), and a list of sub-items, each consisting of
 a key and a data field of type T. If the sub-items have unique keys, a string type can be
 used for T. But if the sub-item keys are not unique, a list of strings should be used
 for T.

### Methods

#### #ctor
```csharp
Bio.MetadataListItem`1.#ctor(System.String,System.String)
```
Constructs list item with given key and free text.

|Parameter Name|Remarks|
|--------------|-------|
|key|The key, which might not be unique among items in the list.|
|freeText|The top level free-text information, such as a location string.
            |




### Properties

#### FreeText
Gets the free-text for this item. This will often be a location string.
#### Key
Gets the key for this item. These are not necessarily unique within a list,
 which is why this is a property of an object to be included in a list, rather than
 omitting this as a property and using a dictionary instead of a list.
#### SubItems
Gets the dictionary of attributes.

