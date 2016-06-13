---
title: TypeExtensions
---

# TypeExtensions
_namespace: [Bio.Util.ArgumentParser](N-Bio.Util.ArgumentParser.html)_

Type Extensions.

### Methods

#### GetDerivedTypes
```csharp
Bio.Util.ArgumentParser.TypeExtensions.GetDerivedTypes(System.Type)
```
Get Derived Types.

|Parameter Name|Remarks|
|--------------|-------|
|classType|Class Type.|

_returns: List of type._

#### GetEnumNames
```csharp
Bio.Util.ArgumentParser.TypeExtensions.GetEnumNames(System.Type)
```
Get Enum Names.

|Parameter Name|Remarks|
|--------------|-------|
|type|Type.|

_returns: Array of Enum Names._

#### GetFieldsAndPropertiesOfType
```csharp
Bio.Util.ArgumentParser.TypeExtensions.GetFieldsAndPropertiesOfType(System.Type,System.Type)
```
Get Fields And Properties Of Type.

|Parameter Name|Remarks|
|--------------|-------|
|type|The type.|
|memberType|Member type.|

_returns: List of Member Info._

#### GetFieldsOfType
```csharp
Bio.Util.ArgumentParser.TypeExtensions.GetFieldsOfType(System.Type,System.Type)
```
Get Fields Of Type.

|Parameter Name|Remarks|
|--------------|-------|
|type|Type.|
|fieldType|Field type.|

_returns: List of field Info._

#### GetImplementingTypes
```csharp
Bio.Util.ArgumentParser.TypeExtensions.GetImplementingTypes(System.Type)
```
Get Implementing Types.

|Parameter Name|Remarks|
|--------------|-------|
|interfaceType|Interface type.|

_returns: List of type._

#### GetPropertiesOfType
```csharp
Bio.Util.ArgumentParser.TypeExtensions.GetPropertiesOfType(System.Type,System.Type)
```
Get Properties Of Type.

|Parameter Name|Remarks|
|--------------|-------|
|type|type.|
|propertyType|Property type.|

_returns: List of Property Info._

#### Implements
```csharp
Bio.Util.ArgumentParser.TypeExtensions.Implements(System.Type,System.Type)
```
Implements.

|Parameter Name|Remarks|
|--------------|-------|
|type|Type.|
|interfaceType|InterFace type.|

_returns: True if Implements._

#### IsInstanceOf
```csharp
Bio.Util.ArgumentParser.TypeExtensions.IsInstanceOf(System.Type,System.Type)
```
Tests if typeOne is an instance of testType. Same as IsSubclassOfOrImplements, but also checks for equality.

|Parameter Name|Remarks|
|--------------|-------|
|typeOne|Type One.|
|testType|Test Type.|

_returns: True if found to be is instance of._

#### IsSubclassOfOrImplements
```csharp
Bio.Util.ArgumentParser.TypeExtensions.IsSubclassOfOrImplements(System.Type,System.Type)
```
Is Subclass Of Or Implements.

|Parameter Name|Remarks|
|--------------|-------|
|type|Type.|
|baseType|Base Type.|

_returns: True if Subclass Of Or Implements._

#### ToTypeString
```csharp
Bio.Util.ArgumentParser.TypeExtensions.ToTypeString(System.Type)
```
To Type String.

|Parameter Name|Remarks|
|--------------|-------|
|type|Type.|

_returns: To type String._




