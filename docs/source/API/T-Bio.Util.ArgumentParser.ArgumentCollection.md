---
title: ArgumentCollection
---

# ArgumentCollection
_namespace: [Bio.Util.ArgumentParser](N-Bio.Util.ArgumentParser.html)_

Supports declarative and strongly typed parsing. Use Construct() to convert an argument collection to an instance of an object

### Methods

#### #ctor
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.#ctor(System.String)
```
Constructor.

|Parameter Name|Remarks|
|--------------|-------|
|lineToParse|Line to Parse.|


#### Add
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.Add(System.Object)
```
Add Argument to Argument List.

|Parameter Name|Remarks|
|--------------|-------|
|argument|Argument to be added to list.|


#### AddDefaultArgsIfMissing
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.AddDefaultArgsIfMissing(Bio.Util.ArgumentParser.ArgumentCollection)
```
Looks at all the flag-value pairs in defaultArgsOrNull and adds any to the current collection that are not already there.

|Parameter Name|Remarks|
|--------------|-------|
|defaultArgsOrNull|Default Arguments Or Null.|


#### AddMemberToCollection
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.AddMemberToCollection(System.Object@,System.Object,System.Reflection.MemberInfo,System.Boolean,System.Boolean,System.Boolean)
```
Add Member To Collection.

|Parameter Name|Remarks|
|--------------|-------|
|defaultObjOrNull|Default Object Or Null.|
|obj|The Object.|
|member|The Member.|
|isOptional|Is Optional.|
|suppressDefaults|Suppress Defaults.|
|labelRequireds|Required params Label.|


#### AddOptional
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.AddOptional(System.String,System.Object)
```
Add Optional.

|Parameter Name|Remarks|
|--------------|-------|
|argumentName|Argument Name.|
|argumentValue|Argument Value.|


#### AddOptionalFlag
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.AddOptionalFlag(System.String)
```
Add Optional Flag.

|Parameter Name|Remarks|
|--------------|-------|
|argumentName|The argument Name.|


#### AddRequiredParamsToCollection
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.AddRequiredParamsToCollection(System.Object,System.Reflection.MemberInfo,System.Boolean)
```
Add Required Params To Collection.

|Parameter Name|Remarks|
|--------------|-------|
|obj|The Object.|
|requiredParams|Required parameters.|
|suppressDefaults|Suppresses Defaults.|


#### CheckForHelp``1
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.CheckForHelp``1(System.String)
```
Check For Help.

|Parameter Name|Remarks|
|--------------|-------|
|value|Value for Check for help.|


#### CheckNoMoreOptions
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.CheckNoMoreOptions(System.Nullable{System.Int32},System.String)
```
Check for No More Options.

|Parameter Name|Remarks|
|--------------|-------|
|numberOfRequiredArgumentsOrNull|Number Of Required Arguments Or Null.|
|parseObjectTypeOrNull|Parse Object Type Or Null.|


#### CheckThatEmpty
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.CheckThatEmpty
```
Check That Empty.

#### Clone
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.Clone
```
Copy of object.
_returns: Clone of object._

#### Construct``1
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.Construct``1(System.Boolean,Bio.Util.ArgumentParser.ArgumentCollection)
```
Constructs an instance of type T from this ArgumentCollection. If SubtypeName is not null, will construct an instance 
 of the type SubtypeName, which is constructed by looking in all referenced assemblies for a type with the corresponding name.
 If SubtypeName is not a subtype of T, then an exception will be thrown. Whatever type is constructed must have a parameterless 
 constructor. Also, the type must have the //[Parsable] attribute. By default all of the type's public fields will be optional parameters. 
 Non-public fields can be marked as parsable, as can properties. Public fields can be hidden from parsing. Any field or property can 
 be marked as required. Mark fields as properties using the Parse attribute. The three Parse attributers are:
 [Parse(ParseAction.Optional)] (mark as optional. public fields default to this)
 [Parse(ParseAction.Required)] (mark as requried.)
 [Parse(ParseAction.Ignore)] (ignore this public field. has no effect on non-public members or non-fields)

|Parameter Name|Remarks|
|--------------|-------|
|checkComplete|If true, will make sure ArgumentCollection is empty when done parsing and will throw an exception if it is not.
            Set to false if you want to construct a class from ArgumentCollection and you expect arguments to be left over.|
|defaultArgsOrNull|defaultArgsOrNull|

_returns: Instance of type T from this ArgumentCollection._

#### ConstructAndRun``1
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.ConstructAndRun``1
```
Constructs T, then runs it. Catches Help and Parse exceptions and write's their messages to Console.Error. 
 All other exceptions are allowed to pass on through. Note that if a help exception is caught, the ExitCode
 will be set to 10022 (Operation canceled by user); if a parse exception is caught, the ExitCode is set
 to 1223 (Invalid argument). In either case, there is no apparent affect on the console, but the cluster
 will mark the task as failed.

#### ContainsOptionalFlag
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.ContainsOptionalFlag(System.String)
```
Contains Optional Flag.

|Parameter Name|Remarks|
|--------------|-------|
|flag|The flag.|

_returns: True if contains optional flag._

#### CreateArgList
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.CreateArgList(System.String)
```
Create Argument List.

|Parameter Name|Remarks|
|--------------|-------|
|lineToParse|Line To Parse.|

_returns: List of Arguments._

#### CreateFlagString
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.CreateFlagString(System.String)
```
Create Flag String.

|Parameter Name|Remarks|
|--------------|-------|
|flagBase|Flag Base.|

_returns: True if found._

#### CreateHelpMessage
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.CreateHelpMessage(System.Object,System.Reflection.MemberInfo,System.Boolean)
```
Create Help Message.

|Parameter Name|Remarks|
|--------------|-------|
|defaultInstance|Default Instance.|
|member|the Member.|
|isOption|Is Option flag.|

_returns: Created Help Message._

#### CreateHelpMessage``1
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.CreateHelpMessage``1(System.Boolean)
```
Create Help Message.

|Parameter Name|Remarks|
|--------------|-------|
|includeDateStamp|Include Date Stamp|

_returns: Created Help exception._

#### CreateInstance``1
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.CreateInstance``1
```
Create an instance of type T.
_returns: Created Instance._

#### CreateUsageString
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.CreateUsageString(System.Collections.Generic.IEnumerable{System.Reflection.MemberInfo},System.Reflection.MemberInfo,System.Type)
```
Create Usage String.

|Parameter Name|Remarks|
|--------------|-------|
|requireds|Required member Info.|
|requiredParamsOrNull|Required Params or null.|
|constructingType|Constructing Type.|


#### EnumerateValuesOfTypeFromParsable``1
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.EnumerateValuesOfTypeFromParsable``1(System.Object,System.Type)
```
Enumerate Values Of Type From Parsable.

|Parameter Name|Remarks|
|--------------|-------|
|values|The Values.|
|parseTypeOfObj|parse Type Of Obj.|

_returns: List of types._

#### Equals
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.Equals(System.Object)
```
Equals.

|Parameter Name|Remarks|
|--------------|-------|
|obj|The object to be compared.|

_returns: True if equal._

#### ExtractAt``1
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.ExtractAt``1(System.String,System.Int32)
```
Extract the argument name from position specified.

|Parameter Name|Remarks|
|--------------|-------|
|argumentName|Argument Name.|
|argPosition|Argument position.|

_returns: True if found._

#### ExtractAtInternal``1
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.ExtractAtInternal``1(System.String,System.Int32,System.String,System.Boolean)
```
Extract At Internal.

|Parameter Name|Remarks|
|--------------|-------|
|argumentName|Argument Name.|
|argPosition|Argument position.|
|defaultParseArgsOrNull|Default Parse Argument Or Null.|
|removeValue|Remove value.|

_returns: True if found._

#### ExtractNext``1
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.ExtractNext``1(System.String)
```
Extract Next Argument Name.

|Parameter Name|Remarks|
|--------------|-------|
|argumentName|Argument Name.|

_returns: True if found._

#### ExtractOptional``1
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.ExtractOptional``1(System.String,``0)
```
Extract Optional.

|Parameter Name|Remarks|
|--------------|-------|
|flag|The Flag.|
|defaultValue|Default Value.|

_returns: The type of default value._

#### ExtractOptionalFlag
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.ExtractOptionalFlag(System.String)
```
Extract Optional Flag.

|Parameter Name|Remarks|
|--------------|-------|
|flag|The Flag.|

_returns: True if found._

#### ExtractOptionalFlagInternal
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.ExtractOptionalFlagInternal(System.String,System.Boolean)
```
Extract Optional Flag Internal.

|Parameter Name|Remarks|
|--------------|-------|
|flag|The flag.|
|removeFlag|Remove Flag.|

_returns: True if found._

#### ExtractOptionalInternal``1
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.ExtractOptionalInternal``1(System.String,``0,System.Boolean,System.String)
```
Extract Optional Internal.

|Parameter Name|Remarks|
|--------------|-------|
|flag|The flag.|
|defaultValue|Default value.|
|removeFlagAndValue|Remove flag and value.|
|defaultParseArgsOrNull|Default Parse Arguments Or Null|

_returns: The type of default value._

#### ExtractSubtypeName
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.ExtractSubtypeName(System.String@)
```
Extract Sub Type Name.

|Parameter Name|Remarks|
|--------------|-------|
|lineToParse|Line To parse.|

_returns: Sub Type Name._

#### FindFlag
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.FindFlag(System.String)
```
Find if the Flag is present.

|Parameter Name|Remarks|
|--------------|-------|
|flag|The Flag.|

_returns: True if flag found._

#### ForceOptional``1
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.ForceOptional``1(System.String,``0)
```
Force Optional.

|Parameter Name|Remarks|
|--------------|-------|
|argumentName|Argument Name.|
|argumentValue|Argument Value.|


#### ForceOptionalFlag
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.ForceOptionalFlag(System.String)
```
Force Optional Flag.

|Parameter Name|Remarks|
|--------------|-------|
|optionalFlag|Optional Flag.|


#### GetActualParsingFieldOrPropertyType
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.GetActualParsingFieldOrPropertyType(System.Reflection.MemberInfo)
```
Get Actual Parsing Field Or Property Type.

|Parameter Name|Remarks|
|--------------|-------|
|member|The Member.|

_returns: Type of Parsing field or property._

#### GetEnumerator
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.GetEnumerator
```
Enumerator of the Argument List.
_returns: Enumerator of Argument list._

#### GetFieldOrPropertyType
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.GetFieldOrPropertyType(System.Reflection.MemberInfo)
```
Get Field Or Property Type.

|Parameter Name|Remarks|
|--------------|-------|
|memberInfo|Member info.|

_returns: Type of field or property._

#### GetFieldOrPropertyValue
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.GetFieldOrPropertyValue(System.Object,System.Reflection.MemberInfo)
```
Get Field Or Property Value.

|Parameter Name|Remarks|
|--------------|-------|
|obj|The Object.|
|member|The Member.|

_returns: Object that contains field or property value._

#### GetHashCode
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.GetHashCode
```
Get Hash Code.
_returns: Hash Code._

#### GetHelpOnKnownSubtypes
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.GetHelpOnKnownSubtypes(System.Type,System.Boolean)
```
Get Help On Known Subtypes.

|Parameter Name|Remarks|
|--------------|-------|
|type|Type of Help exception.|
|includeDateStamp|Optional Include Date Stamp.|

_returns: Help Exception._

#### GetParsableMembers
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.GetParsableMembers(System.Type,System.Collections.Generic.List{System.Reflection.MemberInfo}@,System.Collections.Generic.List{System.Reflection.MemberInfo}@,System.Collections.Generic.List{System.Reflection.MemberInfo}@,System.Reflection.MemberInfo@)
```
Get Parsable Members.

|Parameter Name|Remarks|
|--------------|-------|
|tType|Type of member.|
|optionals|Optional memberInfo.|
|requireds|List of required members.|
|constructingStrings|Constructing Strings Member.|
|requiredParams|Required Parameters.|


#### GetUnderlyingArray
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.GetUnderlyingArray
```
Get Underlying Array.
_returns: Argument List._

#### GetXmlDocumentation
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.GetXmlDocumentation(System.String,System.Xml.Linq.XDocument)
```
Get Xml Documentation.

|Parameter Name|Remarks|
|--------------|-------|
|xmlTagName|Xml Tag Name.|
|xmlDoc|Xml Doc.|

_returns: Xml Documentation._

#### HelpIsRequested
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.HelpIsRequested
```
Help Is Requested.
_returns: True if displayed._

#### ImplicitlyCastValueToType
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.ImplicitlyCastValueToType(System.Object,System.Type)
```
Implicitly Cast Value To Type.

|Parameter Name|Remarks|
|--------------|-------|
|value|The Object Value.|
|destinationTypeOrNull|Destination Type Or Null.|

_returns: Implicitly casted object._

#### Insert
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.Insert(System.Int32,System.String)
```
Insert argument name with specified index.

|Parameter Name|Remarks|
|--------------|-------|
|idx|The Index.|
|argumentName|Argument Name.|


#### IsFlag
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.IsFlag(System.String)
```
Is flag.

|Parameter Name|Remarks|
|--------------|-------|
|query|The Query.|

_returns: True if found._

#### LoadArgument
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.LoadArgument(System.Object@,System.Reflection.MemberInfo,System.Boolean)
```
Load argument.

|Parameter Name|Remarks|
|--------------|-------|
|result|The result object.|
|member|The member.|
|isOptional|Is Optional.|

_returns: True if the value was loaded from the ArgumentCollection. False otherwise (only can be false if isOption is true)_

#### LoadFlag
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.LoadFlag(System.Object@,System.Reflection.MemberInfo)
```
Load Flag.

|Parameter Name|Remarks|
|--------------|-------|
|result|The result object.|
|member|The member.|


#### LoadOptionalArguments
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.LoadOptionalArguments(System.Object@,System.Collections.Generic.IEnumerable{System.Reflection.MemberInfo})
```
Load Optional Params.

|Parameter Name|Remarks|
|--------------|-------|
|result|The result object.|
|optionals|List of optional parameters.|


#### LoadRequiredArguments
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.LoadRequiredArguments(System.Object@,System.Reflection.MemberInfo@,System.Collections.Generic.IEnumerable{System.Reflection.MemberInfo},System.Boolean)
```
Load Required Params.

|Parameter Name|Remarks|
|--------------|-------|
|result|The result object.|
|requiredParams|Required parameters.|
|requireds|List of required parameters.|
|checkComplete|Check Complete.|


#### LoadRequiredParams
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.LoadRequiredParams(System.Object@,System.Reflection.MemberInfo)
```
Load Required Params.

|Parameter Name|Remarks|
|--------------|-------|
|result|The result object.|
|requiredParamsArg|Required parameter argument.|


#### LoadXmlCodeDocumentationFile
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.LoadXmlCodeDocumentationFile(System.Type)
```
Load Xml Code Documentation File.

|Parameter Name|Remarks|
|--------------|-------|
|type|Type of Doc.|

_returns: Xml document._

#### MatchesFlag
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.MatchesFlag(System.String,System.String)
```
Matches Flag.

|Parameter Name|Remarks|
|--------------|-------|
|query|The query.|
|flagBase|Flag Base.|

_returns: True if found._

#### ParseInto``1
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.ParseInto``1(``0,System.Boolean,Bio.Util.ArgumentParser.ArgumentCollection)
```
Parses an instance of type T from this ArgumentCollection.

|Parameter Name|Remarks|
|--------------|-------|
|parseResult|Parse Result.|
|checkComplete|If true, will make sure ArgumentCollection is empty when done parsing and will throw an exception if it is not.
            Set to false if you want to construct a class from ArgumentCollection and you expect arguments to be left over.|
|defaultArgsOrNull|Default Arguments Or Null.|


#### ParseString
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.ParseString(System.String)
```
Parse string Function.

|Parameter Name|Remarks|
|--------------|-------|
|lineToParse|Line To parse.|


#### PeekOptional``1
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.PeekOptional``1(System.String,``0)
```
Peek Optional.

|Parameter Name|Remarks|
|--------------|-------|
|flag|The Flag.|
|defaultValue|Default Value.|

_returns: The type of default value._

#### PeekOptionalFlag
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.PeekOptionalFlag(System.String)
```
Peek Optional Flag.

|Parameter Name|Remarks|
|--------------|-------|
|flag|The Flag.|


#### PopulateFromParsableObject
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.PopulateFromParsableObject(System.Object,System.Boolean)
```
Populate From Parsable Object.

|Parameter Name|Remarks|
|--------------|-------|
|obj|The Object.|
|suppressDefaults|Suppress Defaults.|


#### RemoveAt
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.RemoveAt(System.Int32)
```
Removes arguments at specified index from Argument list.

|Parameter Name|Remarks|
|--------------|-------|
|idx|The Index.|


#### SetFieldOrPropertyValue
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.SetFieldOrPropertyValue(System.Object@,System.Reflection.MemberInfo,System.Object)
```
Set Field O rProperty Value.

|Parameter Name|Remarks|
|--------------|-------|
|obj|The Object.|
|member|The Member.|
|value|Object Value.|


#### System#Collections#IEnumerable#GetEnumerator
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.System#Collections#IEnumerable#GetEnumerator
```
Gets enumerator.
_returns: Enumerable Argument list._

#### TreatOptionAsFlag
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.TreatOptionAsFlag(System.Object,System.Reflection.MemberInfo)
```
Treat Option As Flag.

|Parameter Name|Remarks|
|--------------|-------|
|defaultObject|Default Object.|
|member|The Member.|


#### TryImplicitlyCastValueToType
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.TryImplicitlyCastValueToType(System.Object,System.Type,System.Object@)
```
Try Implicitly Cast Value To Type.

|Parameter Name|Remarks|
|--------------|-------|
|value|The Object Value.|
|destinationTypeOrNull|Destination Type Or Null.|
|result|The result object.|

_returns: True if implicitly casted._

#### TryValueAsCollectionString
```csharp
Bio.Util.ArgumentParser.ArgumentCollection.TryValueAsCollectionString(System.Object@,System.Type,System.Type,System.Boolean)
```
Try Value As Collection String.

|Parameter Name|Remarks|
|--------------|-------|
|value|The Value.|
|baseType|Base type.|
|parseTypeOrNull|Parse Type Or Null.|
|suppressDefaults|Suppress Defaults.|

_returns: True if value as collection string._



### Properties

#### _doubleNewLineRegEx
Double New Line RegEx.
#### Count
Count in Argument List.
#### FlagValuePairs
Enumerates all flag-value pairs. In case in which there are back to back flags, the first flag is enumerated with null as the value.
#### GenerateHelpPage
True/False whether to generate help page
#### SubtypeName
SubtypeName
#### xmlDocumentCache
Xml Document Cache.

