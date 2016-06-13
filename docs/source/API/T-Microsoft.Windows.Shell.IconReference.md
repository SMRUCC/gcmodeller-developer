---
title: IconReference
---

# IconReference
_namespace: [Microsoft.Windows.Shell](N-Microsoft.Windows.Shell.html)_

A refence to an icon resource

### Methods

#### #ctor
```csharp
Microsoft.Windows.Shell.IconReference.#ctor(System.String)
```
Overloaded constructor takes in the module name and resource id separated by a comma.

|Parameter Name|Remarks|
|--------------|-------|
|refPath|Reference path for the icon consiting of the module name and resource id.|


#### Equals
```csharp
Microsoft.Windows.Shell.IconReference.Equals(System.Object)
```
Determines if this object is equal to another.

|Parameter Name|Remarks|
|--------------|-------|
|obj|The object to compare|

_returns: Returns true if the objects are equal; false otherwise._

#### GetHashCode
```csharp
Microsoft.Windows.Shell.IconReference.GetHashCode
```
Generates a nearly unique hashcode for this structure.
_returns: A hash code._

#### op_Equality
```csharp
Microsoft.Windows.Shell.IconReference.op_Equality(Microsoft.Windows.Shell.IconReference,Microsoft.Windows.Shell.IconReference)
```
Implements the == (equality) operator.

|Parameter Name|Remarks|
|--------------|-------|
|icon1|First object to compare.|
|icon2|Second object to compare.|

_returns: True if icon1 equals icon1; false otherwise._

#### op_Inequality
```csharp
Microsoft.Windows.Shell.IconReference.op_Inequality(Microsoft.Windows.Shell.IconReference,Microsoft.Windows.Shell.IconReference)
```
Implements the != (unequality) operator.

|Parameter Name|Remarks|
|--------------|-------|
|icon1|First object to compare.|
|icon2|Second object to compare.|

_returns: True if icon1 does not equals icon1; false otherwise._



### Properties

#### ModuleName
String specifying the name of an executable file, DLL, or icon file
#### ReferencePath
Reference to a specific icon within a EXE, DLL or icon file.
#### ResourceId
Zero-based index of the icon

