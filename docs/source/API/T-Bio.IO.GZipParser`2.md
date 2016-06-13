---
title: GZipParser`2
---

# GZipParser`2
_namespace: [Bio.IO](N-Bio.IO.html)_

A parser which unzips the file and then passes the work off to an inner parser.

### Methods

#### #ctor
```csharp
Bio.IO.GZipParser`2.#ctor(`0)
```
Constructor which takes the parser as input.

|Parameter Name|Remarks|
|--------------|-------|
|parser|Parser to use.|


#### CanProcessFile
```csharp
Bio.IO.GZipParser`2.CanProcessFile(System.String)
```
Initializes a new instance of the FastAParser class by 
 loading the specified filename and ensuring that it ends with ".gz"

|Parameter Name|Remarks|
|--------------|-------|
|filename|Name of the File.|


#### Parse
```csharp
Bio.IO.GZipParser`2.Parse(System.IO.Stream)
```
Parses a list of biological sequence texts from a given stream.
_returns: The collection of parsed ISequence objects._

#### ParseOne
```csharp
Bio.IO.GZipParser`2.ParseOne(System.IO.Stream)
```
Parse a single data sequence from the file.

|Parameter Name|Remarks|
|--------------|-------|
|stream|Stream|

_returns: Data_



### Properties

#### Description
Gets the description of the parser being
 implemented. This is intended to give the
 developer some information of the parser.
#### Name
Gets the name of the parser being implemented. 
 This is intended to give the developer name of the parser.
#### Parser
Inner parser
#### SupportedFileTypes
Gets the file extensions that the parser supports.
 If multiple extensions are supported then this property 
 will return a string containing all extensions with a ',' delimited.

