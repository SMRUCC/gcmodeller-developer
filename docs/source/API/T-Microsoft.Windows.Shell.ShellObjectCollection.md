---
title: ShellObjectCollection
---

# ShellObjectCollection
_namespace: [Microsoft.Windows.Shell](N-Microsoft.Windows.Shell.html)_

An ennumerable list of ShellObjects

### Methods

#### #ctor
```csharp
Microsoft.Windows.Shell.ShellObjectCollection.#ctor
```
Constructs an empty ShellObjectCollection' Left empty

#### Add
```csharp
Microsoft.Windows.Shell.ShellObjectCollection.Add(Microsoft.Windows.Shell.ShellObject)
```
Adds a ShellObject to the collection,

|Parameter Name|Remarks|
|--------------|-------|
|item|The ShellObject to add.|


#### BuildShellIDList
```csharp
Microsoft.Windows.Shell.ShellObjectCollection.BuildShellIDList
```
Builds the data for the CFSTR_SHELLIDLIST Drag and Clipboard data format from the 
 ShellObjects in the collection.
_returns: A memory stream containing the drag/drop data._

#### Clear
```csharp
Microsoft.Windows.Shell.ShellObjectCollection.Clear
```
Clears the collection of ShellObjects.

#### Contains
```csharp
Microsoft.Windows.Shell.ShellObjectCollection.Contains(Microsoft.Windows.Shell.ShellObject)
```
Determines if the collection contains a particular ShellObject.

|Parameter Name|Remarks|
|--------------|-------|
|item|The ShellObject.|

_returns: true, if the ShellObject is in the list, false otherwise._

#### CopyTo
```csharp
Microsoft.Windows.Shell.ShellObjectCollection.CopyTo(Microsoft.Windows.Shell.ShellObject[],System.Int32)
```
Copies the ShellObjects in the collection to a ShellObject array.

|Parameter Name|Remarks|
|--------------|-------|
|array|The destination to copy to.|
|arrayIndex|The index into the array at which copying will commence.|


#### Dispose
```csharp
Microsoft.Windows.Shell.ShellObjectCollection.Dispose(System.Boolean)
```
Standard Dispose patterns

|Parameter Name|Remarks|
|--------------|-------|
|disposing|Indicates that this is being called from Dispose(), rather than the finalizer.|


#### Finalize
```csharp
Microsoft.Windows.Shell.ShellObjectCollection.Finalize
```
Finalizer

#### FromDataObject
```csharp
Microsoft.Windows.Shell.ShellObjectCollection.FromDataObject(System.Runtime.InteropServices.ComTypes.IDataObject)
```
Creates a ShellObjectCollection from an IDataObject passed during Drop operation.

|Parameter Name|Remarks|
|--------------|-------|
|dataObject|An object that implements the IDataObject COM interface.|

_returns: ShellObjectCollection created from the given IDataObject_

#### GetEnumerator
```csharp
Microsoft.Windows.Shell.ShellObjectCollection.GetEnumerator
```
Collection enumeration

#### IEnumerable_GetEnumerator
```csharp
Microsoft.Windows.Shell.ShellObjectCollection.IEnumerable_GetEnumerator
```
Allows for enumeration through the list of ShellObjects in the collection.
_returns: The IEnumerator interface to use for enumeration._

#### IndexOf
```csharp
Microsoft.Windows.Shell.ShellObjectCollection.IndexOf(Microsoft.Windows.Shell.ShellObject)
```
Returns the index of a particualr shell object in the collection

|Parameter Name|Remarks|
|--------------|-------|
|item|The item to search for.|

_returns: The index of the item found, or -1 if not found._

#### Insert
```csharp
Microsoft.Windows.Shell.ShellObjectCollection.Insert(System.Int32,Microsoft.Windows.Shell.ShellObject)
```
Inserts a new shell object into the collection.

|Parameter Name|Remarks|
|--------------|-------|
|index|The index at which to insert.|
|item|The item to insert.|


#### Remove
```csharp
Microsoft.Windows.Shell.ShellObjectCollection.Remove(Microsoft.Windows.Shell.ShellObject)
```
Removes a particular ShellObject from the list.

|Parameter Name|Remarks|
|--------------|-------|
|item|The ShellObject to remove.|

_returns: True if the item could be removed, false otherwise._

#### RemoveAt
```csharp
Microsoft.Windows.Shell.ShellObjectCollection.RemoveAt(System.Int32)
```
Removes the specified ShellObject from the collection

|Parameter Name|Remarks|
|--------------|-------|
|index|The index to remove at.|




### Properties

#### Count
Item count
#### ICollection_Count
Retrieves the number of ShellObjects in the collection
#### IsReadOnly
If true, the contents of the collection are immutable.
#### Item
The collection indexer

