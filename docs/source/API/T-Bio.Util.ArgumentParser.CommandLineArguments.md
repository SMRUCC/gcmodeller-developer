---
title: CommandLineArguments
---

# CommandLineArguments
_namespace: [Bio.Util.ArgumentParser](N-Bio.Util.ArgumentParser.html)_

This class parses all the command line arguments.

### Methods

#### #ctor
```csharp
Bio.Util.ArgumentParser.CommandLineArguments.#ctor
```
Initializes a new instance of the CommandLineArguments class.

#### AddParsedParameter
```csharp
Bio.Util.ArgumentParser.CommandLineArguments.AddParsedParameter(System.String,System.String)
```
Adds the parsed parameter and the value to the parsed argument list.

|Parameter Name|Remarks|
|--------------|-------|
|paramName|The new parameter which is to be added to FoundParameters.|
|paramValue|Value which corresponds to NewParam.|


#### AssignTargetObjectProperties
```csharp
Bio.Util.ArgumentParser.CommandLineArguments.AssignTargetObjectProperties
```
Assign Target Object Properties.

#### CheckRequiredParameters
```csharp
Bio.Util.ArgumentParser.CommandLineArguments.CheckRequiredParameters
```
Check if the values for required parameters are passed or not.

#### EncodeValue
```csharp
Bio.Util.ArgumentParser.CommandLineArguments.EncodeValue(System.String)
```
Encode Value.

|Parameter Name|Remarks|
|--------------|-------|
|value|The Value.|

_returns: The Encoded Value._

#### GetEnumerator
```csharp
Bio.Util.ArgumentParser.CommandLineArguments.GetEnumerator
```
Returns a enumerator which walks through the dictionary of found parameters.
_returns: Enumerator of dictionary of found parameters._

#### GetMismatchPosition
```csharp
Bio.Util.ArgumentParser.CommandLineArguments.GetMismatchPosition(System.String,System.String)
```
Returns the position of the mismatch of arguments.

|Parameter Name|Remarks|
|--------------|-------|
|regExpr|Regular expression used for matching.|
|srchExpr|Expression to be searched.|

_returns: Returns the character position where there is a mismatch._

#### MoveNext
```csharp
Bio.Util.ArgumentParser.CommandLineArguments.MoveNext
```
Sets the enumerator to the next found parameter.
_returns: true if there is a next found parameter, else false._

#### Parameter
```csharp
Bio.Util.ArgumentParser.CommandLineArguments.Parameter(Bio.Util.ArgumentParser.ArgumentType,System.String,Bio.Util.ArgumentParser.ArgumentValueType,System.String,System.String)
```
Defines the argument that the commandline utility supports.

|Parameter Name|Remarks|
|--------------|-------|
|argType|Argument type.|
|parameterName|Name of the parameter.|
|argValueType|Defines the argument value type (int or string or bool) for the argument.|
|shortName|ShortName or alias for the argument.|
|helpDesc|Description of the argument.|


#### Parse
```csharp
Bio.Util.ArgumentParser.CommandLineArguments.Parse(System.String)
```
Parses the command line arguments passed from the utility.

|Parameter Name|Remarks|
|--------------|-------|
|arguments|Arguments passed via command line utility.|


#### ParseValue
```csharp
Bio.Util.ArgumentParser.CommandLineArguments.ParseValue(System.Type,System.String,System.Object@)
```
Parse Value.

|Parameter Name|Remarks|
|--------------|-------|
|type|The Type of value.|
|stringData|String Data.|
|value|The object Value.|

_returns: True if value parsed._

#### Reset
```csharp
Bio.Util.ArgumentParser.CommandLineArguments.Reset
```
Resets the enumerator to the initial position in front of the first found parameter.



### Properties

#### AllowAdditionalArguments
Gets or sets a value indicating whether additional arguments are reqiured or not.
#### argumentList
All the required and optional parameters from commandline are stored.
#### ArgumentSeparator
Gets or sets the argument separator character.
#### Current
Gets the current found parameter from enumerator.
#### enumerator
The Command Line enumerator.
#### paramNameAliasMap
Contains the mapping between parameter name and the alias (shortName).
#### parsedArguments
All the parameters and values passed from commandline are stored after parsing.
#### System#Collections#IEnumerator#Current
Gets current value from enumerator.
#### targetObject
The target object to which the command line arguments are to be set.

