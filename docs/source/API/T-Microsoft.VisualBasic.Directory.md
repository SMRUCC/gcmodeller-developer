---
title: Directory
---

# Directory
_namespace: [Microsoft.VisualBasic](N-Microsoft.VisualBasic.html)_

A wrapper object for the processing of relative file path.

### Methods

#### #ctor
```csharp
Microsoft.VisualBasic.Directory.#ctor(System.String)
```
Construct a directory object from the specific Dir path value.

|Parameter Name|Remarks|
|--------------|-------|
|DIR|Target directory path|


#### GetFullPath
```csharp
Microsoft.VisualBasic.Directory.GetFullPath(System.String)
```
Gets the full path of the target file based on the path relative to this directory object.

|Parameter Name|Remarks|
|--------------|-------|
|file|
 The relative path of the target file, and this parameter is also compatible with absolute file path.
 (相对路径)|


#### IsAbsolutePath
```csharp
Microsoft.VisualBasic.Directory.IsAbsolutePath(System.String)
```
Determined that the input file path is a absolute path or not?

|Parameter Name|Remarks|
|--------------|-------|
|file|-|





