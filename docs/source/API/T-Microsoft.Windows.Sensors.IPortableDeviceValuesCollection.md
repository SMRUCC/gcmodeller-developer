---
title: IPortableDeviceValuesCollection
---

# IPortableDeviceValuesCollection
_namespace: [Microsoft.Windows.Sensors](N-Microsoft.Windows.Sensors.html)_

Holds a collection of indexed nativeIPortableDeviceValues interfaces. This interface can be 
 retrieved from a method, or if a new object is required, call CoCreate with 
 CLSID_PortableDeviceValuesCollection.

### Methods

#### Add
```csharp
Microsoft.Windows.Sensors.IPortableDeviceValuesCollection.Add(Microsoft.Windows.Sensors.IPortableDeviceValues)
```
Adds an item to the collection.

|Parameter Name|Remarks|
|--------------|-------|
|pValues|Pointer to an nativeIPortableDeviceValues interface to add to the collection. The interface is not actually copied, but AddRef is called on it|


#### Clear
```csharp
Microsoft.Windows.Sensors.IPortableDeviceValuesCollection.Clear
```
Releases all items from the collection.

#### GetAt
```csharp
Microsoft.Windows.Sensors.IPortableDeviceValuesCollection.GetAt(System.UInt32,Microsoft.Windows.Sensors.IPortableDeviceValues@)
```
Retrieves an item from the collection by a zero-based index.

|Parameter Name|Remarks|
|--------------|-------|
|dwIndex|DWORD that specifies a zero-based index in the collection.|
|ppValues|Address of a variable that receives a pointer to an nativeIPortableDeviceValues interface from the collection. The caller is responsible for calling Release on this interface when done with it|


#### GetCount
```csharp
Microsoft.Windows.Sensors.IPortableDeviceValuesCollection.GetCount(System.UInt32@)
```
Retrieves the number of items in the collection.

|Parameter Name|Remarks|
|--------------|-------|
|pcElems|Pointer to a DWORD that contains the number of nativeIPortableDeviceValues interfaces in the collection.|


#### RemoveAt
```csharp
Microsoft.Windows.Sensors.IPortableDeviceValuesCollection.RemoveAt(System.UInt32)
```
Removes an item from the collection by a zero-based index.

|Parameter Name|Remarks|
|--------------|-------|
|dwIndex|DWORD that specifies a zero-based index in the collection.|





