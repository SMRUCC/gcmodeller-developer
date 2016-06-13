---
title: FileAccessComparer
---

# FileAccessComparer
_namespace: [Bio.Util](N-Bio.Util.html)_

Compare FileInfo for equal file access capabilities

### Methods

#### Equals
```csharp
Bio.Util.FileAccessComparer.Equals(System.IO.FileInfo,System.IO.FileInfo)
```
Compare for file equality using name and timestamps

|Parameter Name|Remarks|
|--------------|-------|
|x|-|
|y|-|

_returns:  bool true if FileInfo name and LastWriteTimes are equal, otherwise false _

#### GetHashCode
```csharp
Bio.Util.FileAccessComparer.GetHashCode(System.IO.FileInfo)
```
Returns HashCode from FileInfo.Name

|Parameter Name|Remarks|
|--------------|-------|
|obj|-|





