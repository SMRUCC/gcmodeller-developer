---
title: ParseExtensions
---

# ParseExtensions
_namespace: [Bio.Util.ArgumentParser](N-Bio.Util.ArgumentParser.html)_

Parse Extensions class.

### Methods

#### DoNotParseInherited
```csharp
Bio.Util.ArgumentParser.ParseExtensions.DoNotParseInherited(System.Type)
```
Determines if the ParseExplicit attribute has been set.

|Parameter Name|Remarks|
|--------------|-------|
|type|-|


#### GetDefaultParametersOrNull
```csharp
Bio.Util.ArgumentParser.ParseExtensions.GetDefaultParametersOrNull(System.Reflection.MemberInfo)
```
Get Default Parameters Or Null.

|Parameter Name|Remarks|
|--------------|-------|
|member|The Member.|

_returns: Default Parameter or null._

#### GetInheritanceHierarchy
```csharp
Bio.Util.ArgumentParser.ParseExtensions.GetInheritanceHierarchy(System.Type)
```
Get Inheritance Hierarchy.

|Parameter Name|Remarks|
|--------------|-------|
|type|Type|

_returns: List of types._

#### GetParseAttribute
```csharp
Bio.Util.ArgumentParser.ParseExtensions.GetParseAttribute(System.Reflection.MemberInfo,System.Type[])
```
Get Parse Attribute.

|Parameter Name|Remarks|
|--------------|-------|
|member|The Member.|
|actualTypeInheritanceHierarchy|Actual Type Inheritance Hierarchy.|

_returns: Parse Attribute._

#### GetParseAttributeInternal
```csharp
Bio.Util.ArgumentParser.ParseExtensions.GetParseAttributeInternal(System.Reflection.MemberInfo,System.Type[])
```
Gets the default or declared parse attribute for the specified member.

|Parameter Name|Remarks|
|--------------|-------|
|member|The Member.|
|actualTypeInheritanceHierarchy|actualTypeInheritanceHierarchy|

_returns: Parse Attribute._

#### GetParseTypeOrNull
```csharp
Bio.Util.ArgumentParser.ParseExtensions.GetParseTypeOrNull(System.Reflection.MemberInfo)
```
Get Parse Type Or Null.

|Parameter Name|Remarks|
|--------------|-------|
|member|The Member.|

_returns: Type of Parse._

#### HasPublicDefaultConstructor
```csharp
Bio.Util.ArgumentParser.ParseExtensions.HasPublicDefaultConstructor(System.Type)
```
Has Public Default Constructor.

|Parameter Name|Remarks|
|--------------|-------|
|t|Type of default constructor.|

_returns: True if it has public default constructor._

#### IsCollection
```csharp
Bio.Util.ArgumentParser.ParseExtensions.IsCollection(System.Type)
```
Is collection.

|Parameter Name|Remarks|
|--------------|-------|
|type|Type of interface.|

_returns: True if interface type matches._

#### IsCollection``1
```csharp
Bio.Util.ArgumentParser.ParseExtensions.IsCollection``1(System.Type)
```
Is collection.

|Parameter Name|Remarks|
|--------------|-------|
|type|Type of interface.|

_returns: True if interface type matches._

#### IsConstructable
```csharp
Bio.Util.ArgumentParser.ParseExtensions.IsConstructable(System.Type)
```
Returns true if and only if the type has a public default constructor, or is an interface or abstract class, in which case a derived type may be parsed.

#### IsIndexer
```csharp
Bio.Util.ArgumentParser.ParseExtensions.IsIndexer(System.Reflection.MemberInfo)
```
Is Indexer.

|Parameter Name|Remarks|
|--------------|-------|
|member|The Member.|

_returns: Member Indexer._

#### ParseAsCollection
```csharp
Bio.Util.ArgumentParser.ParseExtensions.ParseAsCollection(System.Type)
```
Parse As Collection.

|Parameter Name|Remarks|
|--------------|-------|
|parseType|Parse type.|

_returns: True if parse as collection._

#### ToParseString
```csharp
Bio.Util.ArgumentParser.ParseExtensions.ToParseString(System.Object,System.Type,System.Boolean)
```
To Parse String.

|Parameter Name|Remarks|
|--------------|-------|
|obj|The Object.|
|parseTypeOrNull|Parse Type Or Null.|
|suppressDefaults|Suppress Defaults|




### Properties

#### _parseAttributeCache
Parse Attribute Cache.
#### DefaultIgnoreAttribute
Default Ignore Attribute
#### DefaultOptionalAttribute
Default Optional Attribute.

