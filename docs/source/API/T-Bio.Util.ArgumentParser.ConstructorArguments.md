---
title: ConstructorArguments
---

# ConstructorArguments
_namespace: [Bio.Util.ArgumentParser](N-Bio.Util.ArgumentParser.html)_

Constructor arguments take the form:
 '
 (option1:value,option2:value,...,req1,req2...)
 '
 Optionally, the opening paren can be preceded by a class name. For example:
 '
 LogisticRegression(option1:value,option2:value,...,req1,req2...)
 '
 This class name specifies what will be constructed when the Construct() method is called. Note that flags are treated
 exactly like options. So a boolean flag called verbose would be set using verbose:true. Note also that required
 arguments can be named, in which case they can be in any order.

### Methods

#### #ctor
```csharp
Bio.Util.ArgumentParser.ConstructorArguments.#ctor(System.Collections.Generic.IEnumerable{System.String})
```
Constructor.

|Parameter Name|Remarks|
|--------------|-------|
|args|The Arguments.|


#### AddOptionalFlag
```csharp
Bio.Util.ArgumentParser.ConstructorArguments.AddOptionalFlag(System.String)
```
Add Optional Flag.

|Parameter Name|Remarks|
|--------------|-------|
|argumentName|Argument Name.|


#### Construct``1
```csharp
Bio.Util.ArgumentParser.ConstructorArguments.Construct``1(System.String)
```
Simple wrapper that constructs an instance of type T from the command string. 
 See ArgumentCollection.Construct() for documentation.

|Parameter Name|Remarks|
|--------------|-------|
|commandString|The string from which to construct|

_returns: The fully instantiated object_

#### ConstructAndRun``1
```csharp
Bio.Util.ArgumentParser.ConstructorArguments.ConstructAndRun``1(System.String)
```
Constructs and instance of T, then runs it. This convenience method creates an instance of CommandArguments, then
 call ConstructAndRun on that result.

|Parameter Name|Remarks|
|--------------|-------|
|constructorString|Constructor arguments|


#### CreateArgList
```csharp
Bio.Util.ArgumentParser.ConstructorArguments.CreateArgList(System.String)
```
Create Argument List.

|Parameter Name|Remarks|
|--------------|-------|
|constructorArgsAsString|Constructor Args As String.|

_returns: Created Argument List._

#### CreateFlagString
```csharp
Bio.Util.ArgumentParser.ConstructorArguments.CreateFlagString(System.String)
```
Create Flag String.

|Parameter Name|Remarks|
|--------------|-------|
|flagBase|The flag Base.|

_returns: Created Flag String._

#### CreateUsageString
```csharp
Bio.Util.ArgumentParser.ConstructorArguments.CreateUsageString(System.Collections.Generic.IEnumerable{System.Reflection.MemberInfo},System.Reflection.MemberInfo,System.Type)
```
Create Usage String.

|Parameter Name|Remarks|
|--------------|-------|
|requireds|Required members.|
|requiredParamsOrNull|Required Params Or Null.|
|constructingType|Constructing Type.|

_returns: Created Usage String._

#### ExtractOptionalFlagInternal
```csharp
Bio.Util.ArgumentParser.ConstructorArguments.ExtractOptionalFlagInternal(System.String,System.Boolean)
```
Extract Optional Flag Internal.

|Parameter Name|Remarks|
|--------------|-------|
|flag|The Flag.|
|removeFlag|Remove flag or Not.|

_returns: True if Extract Optional Flag Internal._

#### ExtractSubtypeName
```csharp
Bio.Util.ArgumentParser.ConstructorArguments.ExtractSubtypeName(System.String@)
```
Extract Subtype Name.

|Parameter Name|Remarks|
|--------------|-------|
|lineToParse|Line To Parse.|

_returns: Extracted Subtype Name._

#### FromParsable
```csharp
Bio.Util.ArgumentParser.ConstructorArguments.FromParsable(System.Object,System.Type,System.Boolean)
```
Constructs and instance of ConstructorArguments from a parsable object. This is the inverse of Construct().
 Note: will always set SubtypeName to the Type of object.

|Parameter Name|Remarks|
|--------------|-------|
|obj|The object from which to construct the ConstructorArguments|
|parseTypeOrNull|parseTypeOrNull|
|suppressDefaults|Specifies whether values that are equal to the defaults should be included in the resulting ArgumentCollection|

_returns: The result_

#### IsFlag
```csharp
Bio.Util.ArgumentParser.ConstructorArguments.IsFlag(System.String)
```
Is Flag.

|Parameter Name|Remarks|
|--------------|-------|
|query|The Query.|

_returns: True if flag is set._

#### MatchesFlag
```csharp
Bio.Util.ArgumentParser.ConstructorArguments.MatchesFlag(System.String,System.String)
```
Matches Flag.

|Parameter Name|Remarks|
|--------------|-------|
|query|The Query.|
|flagBase|The Flag base.|

_returns: True if flag matches._

#### ToString
```csharp
Bio.Util.ArgumentParser.ConstructorArguments.ToString
```
To String for Argument list.
_returns: String form of Argument list._



### Properties

#### ArgumentDelimiter
Argument Delimiter.

