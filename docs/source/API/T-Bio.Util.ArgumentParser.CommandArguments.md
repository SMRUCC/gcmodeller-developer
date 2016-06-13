---
title: CommandArguments
---

# CommandArguments
_namespace: [Bio.Util.ArgumentParser](N-Bio.Util.ArgumentParser.html)_

Command line arguments take the form:
 '
 -flag 1 ... -option1 value -option2 value ... required1 required 2
 '
 Note that the presence of the flag indicates that the optional value is true.
 Note also that required arguments can be named, in which case they can be in any order.

### Methods

#### #ctor
```csharp
Bio.Util.ArgumentParser.CommandArguments.#ctor(System.Collections.Generic.IEnumerable{System.String})
```
Constructor.

|Parameter Name|Remarks|
|--------------|-------|
|args|-|


#### AddOptionalFlag
```csharp
Bio.Util.ArgumentParser.CommandArguments.AddOptionalFlag(System.String)
```
Add Optional Flag.

|Parameter Name|Remarks|
|--------------|-------|
|argumentName|The argumentName.|


#### Construct``1
```csharp
Bio.Util.ArgumentParser.CommandArguments.Construct``1(System.String)
```
Simple wrapper that constructs an instance of type T from the command line string. 
 See ArgumentCollection.Construct() for documentation.

|Parameter Name|Remarks|
|--------------|-------|
|commandString|The string from which to construct|

_returns: The fully instantiated object_

#### ConstructAndRun``1
```csharp
Bio.Util.ArgumentParser.CommandArguments.ConstructAndRun``1(System.String[],System.Boolean)
```
Constructs and instance of T, then runs it. This convenience method creates an instance of CommandArguments, then
 call ConstructAndRun on that result.

|Parameter Name|Remarks|
|--------------|-------|
|commandArgs|Command line arguments.|
|generateHelpPage|True/False whether to generate help or throw HelpException|


#### CreateArgList
```csharp
Bio.Util.ArgumentParser.CommandArguments.CreateArgList(System.String)
```
Create Argument List.

|Parameter Name|Remarks|
|--------------|-------|
|lineToParse|Line To Parse.|

_returns: Created Argument List._

#### CreateFlagString
```csharp
Bio.Util.ArgumentParser.CommandArguments.CreateFlagString(System.String)
```
Create Flag String.

|Parameter Name|Remarks|
|--------------|-------|
|flagBase|The Flag Base.|

_returns: Created Flag String._

#### CreateUsageString
```csharp
Bio.Util.ArgumentParser.CommandArguments.CreateUsageString(System.Collections.Generic.IEnumerable{System.Reflection.MemberInfo},System.Reflection.MemberInfo,System.Type)
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
Bio.Util.ArgumentParser.CommandArguments.ExtractOptionalFlagInternal(System.String,System.Boolean)
```
Extract Optional Flag Internal.

|Parameter Name|Remarks|
|--------------|-------|
|flag|The Flag.|
|removeFlag|Remove flag or Not.|

_returns: True if extracted Optional Flag Internal._

#### ExtractSubtypeName
```csharp
Bio.Util.ArgumentParser.CommandArguments.ExtractSubtypeName(System.String@)
```
Extract Subtype Name.

|Parameter Name|Remarks|
|--------------|-------|
|lineToParse|Line To Parse.|

_returns: Extracted Subtype Name._

#### FromParsable
```csharp
Bio.Util.ArgumentParser.CommandArguments.FromParsable(System.Object,System.Boolean)
```
Constructs and instance of CommandArguments from a parsable object. This is the inverse of Construct().

|Parameter Name|Remarks|
|--------------|-------|
|obj|The object from which to construct the ConstructorArguments|
|suppressDefaults|Specifies whether values that are equal to the defaults should be included in the resulting ArgumentCollection|

_returns: The result_

#### IsFlag
```csharp
Bio.Util.ArgumentParser.CommandArguments.IsFlag(System.String)
```
Is Flag.

|Parameter Name|Remarks|
|--------------|-------|
|query|The Query.|

_returns: True if flag set._

#### MatchesFlag
```csharp
Bio.Util.ArgumentParser.CommandArguments.MatchesFlag(System.String,System.String)
```
Matches Flag.

|Parameter Name|Remarks|
|--------------|-------|
|query|The Query.|
|flagBase|The Flag Base.|

_returns: True if Matches Flag._

#### ToString
```csharp
Bio.Util.ArgumentParser.CommandArguments.ToString(System.Boolean)
```
To String for Argument list.

|Parameter Name|Remarks|
|--------------|-------|
|protectWithQuotes|Protect With Quotes optional.|

_returns: String form of Argument list. _




