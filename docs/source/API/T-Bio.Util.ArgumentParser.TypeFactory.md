---
title: TypeFactory
---

# TypeFactory
_namespace: [Bio.Util.ArgumentParser](N-Bio.Util.ArgumentParser.html)_

Type Factory.

### Methods

#### EnumerateAllUserAssemblyCodeBases
```csharp
Bio.Util.ArgumentParser.TypeFactory.EnumerateAllUserAssemblyCodeBases
```
Enumerate AllUser Assembly CodeBases.
_returns: List of Assembly._

#### EnumerateReferencedSystemAssemblies
```csharp
Bio.Util.ArgumentParser.TypeFactory.EnumerateReferencedSystemAssemblies(System.Collections.Generic.IEnumerable{System.Reflection.Assembly})
```
Enumerate Referenced SystemAssemblies.

|Parameter Name|Remarks|
|--------------|-------|
|userAssemblies|User Assemblies.|


#### GetAssemblyTypes
```csharp
Bio.Util.ArgumentParser.TypeFactory.GetAssemblyTypes(System.Reflection.Assembly)
```
Get Assembly Types.

|Parameter Name|Remarks|
|--------------|-------|
|assembly|Assembly|

_returns: List of type._

#### GetReferencedTypes
```csharp
Bio.Util.ArgumentParser.TypeFactory.GetReferencedTypes
```
Get Referenced Types.
_returns: List of type._

#### GetType
```csharp
Bio.Util.ArgumentParser.TypeFactory.GetType(System.Reflection.Assembly,System.Type,System.String,System.Type[])
```
Returns the first type in assembly that matches the type name. If typeName includes the namespace, 
 then matches on the fully qualified name. Else, looks for the first type in any of Assembly's namespaces
 that matches typeName

|Parameter Name|Remarks|
|--------------|-------|
|assembly|The assembly in which to search|
|baseType|Will only return a type that is a subtype of baseType|
|typeName|The type name we're searching for. May either be fully qualified or contain only the class name|
|genericTypes|genericTypes|

_returns: The type, if found, or null._

#### TryGetGenericParameters
```csharp
Bio.Util.ArgumentParser.TypeFactory.TryGetGenericParameters(System.String@,System.Type[]@)
```
Checks to see if the type name is generic. If so, modifies the typeName and tries to construct the generic type arguments.

|Parameter Name|Remarks|
|--------------|-------|
|typeName|The type name. Will be modified if generic.|
|genericTypes|List of generic types. Null if this type is not generic.|

_returns: True if there was no problem parsing. False is there is a problem._

#### TryGetType
```csharp
Bio.Util.ArgumentParser.TypeFactory.TryGetType(System.String,System.Type,System.Type@)
```
Returns the first type in any of the referenced assemblies that matches the type name. If typeName includes the namespace, 
 then matches on the fully qualified name. Else, looks for the first type in any of namespaces
 that matches typeName AND is a subtype of baseType (use typeof(object) as a default).

|Parameter Name|Remarks|
|--------------|-------|
|typeName|The type name we're searching for. May either be fully qualified or contain only the class name|
|baseType|Will only return a type that is a subtype of baseType|
|returnType|The type matching typeName, if found, or null.|

_returns: true iff the typeName could be resolved into a type._

#### TryGetTypeInternal
```csharp
Bio.Util.ArgumentParser.TypeFactory.TryGetTypeInternal(System.String,System.Type,System.Type@)
```
Try Get Type Internal.

|Parameter Name|Remarks|
|--------------|-------|
|typeName|Type Name.|
|baseType|Base type.|
|returnType|Return type.|

_returns: True if Gets type internal._



### Properties

#### allReferencedAssemblies
All Referenced Assemblies.
#### TypeNameAndBaseNameToType
Type Name And BaseName To Type.

