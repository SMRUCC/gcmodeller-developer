---
title: HelpException
---

# HelpException
_namespace: [Bio.Util.ArgumentParser](N-Bio.Util.ArgumentParser.html)_

HelpException

### Methods

#### #ctor
```csharp
Bio.Util.ArgumentParser.HelpException.#ctor(System.String,System.Object[])
```
Constructor.

|Parameter Name|Remarks|
|--------------|-------|
|messageFormat|The Message Format.|
|args|Argument list.|


#### FormatMessage
```csharp
Bio.Util.ArgumentParser.HelpException.FormatMessage(System.String,System.Boolean)
```
Format Message.

|Parameter Name|Remarks|
|--------------|-------|
|message|The message.|
|includeDateStamp|Include Date Stamp Optional.|

_returns: Formatted Message._

#### GetDateCompiledString
```csharp
Bio.Util.ArgumentParser.HelpException.GetDateCompiledString
```
Get Date Compiled String.
_returns: DateCompiledString._

#### IndentString
```csharp
Bio.Util.ArgumentParser.HelpException.IndentString(System.Int32,System.Int32)
```
Indent String.

|Parameter Name|Remarks|
|--------------|-------|
|indents|Indents size.|
|indentWidth|Indent width.|

_returns: Indent String._

#### KnownTag
```csharp
Bio.Util.ArgumentParser.HelpException.KnownTag(System.String)
```
Known Tag.

|Parameter Name|Remarks|
|--------------|-------|
|tag|Tag passed.|

_returns: True if found._

#### Tokens
```csharp
Bio.Util.ArgumentParser.HelpException.Tokens(System.String)
```
Tokens inside passed string.

|Parameter Name|Remarks|
|--------------|-------|
|str|String passed.|

_returns: List of tokens inside string._



### Properties

#### RawMessage
Raw Message.

