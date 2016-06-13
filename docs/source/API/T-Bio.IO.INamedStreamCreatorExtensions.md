---
title: INamedStreamCreatorExtensions
---

# INamedStreamCreatorExtensions
_namespace: [Bio.IO](N-Bio.IO.html)_

Extensions related to INamedStreamCreator

### Methods

#### OpenText
```csharp
Bio.IO.INamedStreamCreatorExtensions.OpenText(Bio.IO.INamedStreamCreator)
```
Open a INamedStreamCreator for reading as text. This should be used is a Using statement. (According to http://msdn.microsoft.com/en-us/library/hh40558e.aspx, the stream will be disposed of, too.)

|Parameter Name|Remarks|
|--------------|-------|
|namedStreamCreator|The INamedStreamCreator to read from|

_returns: a StreamReader_

#### OpenUncommentedText
```csharp
Bio.IO.INamedStreamCreatorExtensions.OpenUncommentedText(Bio.IO.INamedStreamCreator)
```
Open a INamedStreamCreator for reading as uncommented text. This should be used is a Using statement. (According to http://msdn.microsoft.com/en-us/library/hh40558e.aspx, the stream will be disposed of, too.)

|Parameter Name|Remarks|
|--------------|-------|
|namedStreamCreator|The INamedStreamCreator to read from|

_returns: a StreamReader_

#### ReadEachLine
```csharp
Bio.IO.INamedStreamCreatorExtensions.ReadEachLine(Bio.IO.INamedStreamCreator)
```
Enumerates the lines of a INamedStreamCreator.

|Parameter Name|Remarks|
|--------------|-------|
|namedStreamCreator|The INamedStreamCreator to read from|

_returns: an enumerator of lines_

#### ReadEachUncommentedLine
```csharp
Bio.IO.INamedStreamCreatorExtensions.ReadEachUncommentedLine(Bio.IO.INamedStreamCreator)
```
Enumerates the lines of a INamedStreamCreator without comments.

|Parameter Name|Remarks|
|--------------|-------|
|namedStreamCreator|The INamedStreamCreator to read from|

_returns: an enumerator of lines_

#### ReadToEnd
```csharp
Bio.IO.INamedStreamCreatorExtensions.ReadToEnd(Bio.IO.INamedStreamCreator)
```
Returns all the data of a INamedStreamCreator as a string.

|Parameter Name|Remarks|
|--------------|-------|
|namedStreamCreator|The INamedStreamCreator to read from|

_returns: The data as text_

#### ReadUncommentedLine
```csharp
Bio.IO.INamedStreamCreatorExtensions.ReadUncommentedLine(Bio.IO.INamedStreamCreator)
```
Return the first line of namedStreamCreator after any comments.

|Parameter Name|Remarks|
|--------------|-------|
|namedStreamCreator|The namedStreamCreator from which to read.|

_returns: The first line of a file after skipping any comments._

#### ToNamedStreamCreator
```csharp
Bio.IO.INamedStreamCreatorExtensions.ToNamedStreamCreator(System.Reflection.Assembly,System.String,System.String)
```
Turn a resource into a INamedStreamCreator

|Parameter Name|Remarks|
|--------------|-------|
|assembly|The assembly containing the resource|
|resourceName|The name of the resource|
|name|(Optional) The name of the INamedStreamCreator. If null, resourceName is used.|

_returns: a INamedStreamCreator_

#### ToNamedStreamCreatorFromFileName
```csharp
Bio.IO.INamedStreamCreatorExtensions.ToNamedStreamCreatorFromFileName(System.String,System.String)
```
Turn a file name (a string) into a INamedStreamCreator

|Parameter Name|Remarks|
|--------------|-------|
|fileName|The name of the file to turn into a INamedStreamCreator.|
|name|(Optional) The name of the INamedStreamCreator. If null, fileName is used.|

_returns: a INamedStreamCreator_

#### ToNamedStreamCreatorFromString
```csharp
Bio.IO.INamedStreamCreatorExtensions.ToNamedStreamCreatorFromString(System.String,System.String)
```
Turn a string into a INamedStreamCreator. The string will be used as the data for the stream.

|Parameter Name|Remarks|
|--------------|-------|
|text|The text to turn into a INamedStreamCreator.|
|name|(Optional) The name of the INamedStreamCreator. If null, string is used for both data and for the name.|

_returns: a INamedStreamCreator_

#### WriteToStream
```csharp
Bio.IO.INamedStreamCreatorExtensions.WriteToStream(Bio.IO.INamedStreamCreator,System.IO.Stream)
```
Write the context of a INamedStreamCreator to a stream.

|Parameter Name|Remarks|
|--------------|-------|
|namedStreamCreator|The INamedStreamCreator to read from|
|stream|The stream to write to|





