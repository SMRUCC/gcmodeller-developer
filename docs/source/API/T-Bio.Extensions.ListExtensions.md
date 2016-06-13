---
title: ListExtensions
---

# ListExtensions
_namespace: [Bio.Extensions](N-Bio.Extensions.html)_

Extension methods on List(T)

### Methods

#### AddRange``1
```csharp
Bio.Extensions.ListExtensions.AddRange``1(System.Collections.Generic.IList{``0},System.Collections.Generic.IEnumerable{``0})
```
Adds a set of items to a list.

|Parameter Name|Remarks|
|--------------|-------|
|list|-|
|newItems|-|


#### AsReadOnly``1
```csharp
Bio.Extensions.ListExtensions.AsReadOnly``1(System.Collections.Generic.IList{``0})
```
Convert a List into a ReadOnly list.

|Parameter Name|Remarks|
|--------------|-------|
|input|-|


#### ConvertAll``2
```csharp
Bio.Extensions.ListExtensions.ConvertAll``2(System.Collections.Generic.IList{``0},System.Func{``0,``1})
```
Runs each item through a conversion and returns the produced list.

|Parameter Name|Remarks|
|--------------|-------|
|input|-|
|converter|-|





