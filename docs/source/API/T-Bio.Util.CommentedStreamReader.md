---
title: CommentedStreamReader
---

# CommentedStreamReader
_namespace: [Bio.Util](N-Bio.Util.html)_

A stream reader that can skip over comments in the input.

### Methods

#### #ctor
```csharp
Bio.Util.CommentedStreamReader.#ctor(System.IO.TextReader)
```
Create a CommentedStreamReader from a TextReader. Loads the entire contents of the text reader into memory.

|Parameter Name|Remarks|
|--------------|-------|
|reader|The TextReader to create a CommentedStreamReader from|


#### Peek
```csharp
Bio.Util.CommentedStreamReader.Peek
```
Returns the next available character but does not consume it.
_returns: 
            An integer representing the next character to be read, or -1 if there are no characters to be read or if the stream does not support seeking.
            _

#### Read
```csharp
Bio.Util.CommentedStreamReader.Read(System.Char[],System.Int32,System.Int32)
```
Reads a specified maximum of characters from the current stream into a buffer, beginning at the specified index.

|Parameter Name|Remarks|
|--------------|-------|
|buffer|When this method returns, contains the specified character array with the values between **index** and (**count**) replaced by the characters read from the current source. |
|index|The index of **buffer** at which to begin writing. |
|count|The maximum number of characters to read. |

_returns: 
            The number of characters that have been read, or 0 if at the end of the stream and no data was read. The number will be less than or equal to the **count** parameter, depending on whether the data is available within the stream.
            _

#### ReadAllComments
```csharp
Bio.Util.CommentedStreamReader.ReadAllComments
```
Read all the comments from the stream
_returns: A sequence of comment lines._

#### ReadBlock
```csharp
Bio.Util.CommentedStreamReader.ReadBlock(System.Char[],System.Int32,System.Int32)
```
Reads a specified maximum number of characters from the current stream and writes the data to a buffer, beginning at the specified index.

|Parameter Name|Remarks|
|--------------|-------|
|buffer|When this method returns, contains the specified character array with the values between **index** and (**count**) replaced by the characters read from the current source.|
|index|The position in **buffer** at which to begin writing.|
|count|The maximum number of characters to read.|

_returns: 
            The number of characters that have been read. The number will be less than or equal to **count**, depending on whether all input characters have been read.
            _

#### ReadCommentLine
```csharp
Bio.Util.CommentedStreamReader.ReadCommentLine
```
Returns the next comment line
_returns: A comment line_

#### ReadCommentOrNonCommentLine
```csharp
Bio.Util.CommentedStreamReader.ReadCommentOrNonCommentLine(System.Boolean)
```
Read the next line

|Parameter Name|Remarks|
|--------------|-------|
|returnComment|if true, returns the next comment line; otherwise, returns the next noncomment line.|

_returns: the next line_

#### ReadLine
```csharp
Bio.Util.CommentedStreamReader.ReadLine
```
Returns the next noncomment line
_returns: The next noncomment line_

#### ReadToEnd
```csharp
Bio.Util.CommentedStreamReader.ReadToEnd
```
Reads all characters from the current position to the end of the stream.
_returns: 
            The rest of the stream as a string, from the current position to the end. If the current position is at the end of the stream, returns an empty string ("").
            _



### Properties

#### CommentHeader
The string that tells the parser how comments are marked.
#### CommentToken
The string used to mark a line as a comment line.

