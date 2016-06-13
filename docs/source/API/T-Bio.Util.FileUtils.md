---
title: FileUtils
---

# FileUtils
_namespace: [Bio.Util](N-Bio.Util.html)_

A static class of methods related to files.

### Methods

#### CreateDirectoryForFileIfNeeded
```csharp
Bio.Util.FileUtils.CreateDirectoryForFileIfNeeded(System.IO.FileInfo)
```
Creates a directory for a file if the file's directory does not already exist.

|Parameter Name|Remarks|
|--------------|-------|
|fileInfo|The file for while the directory will be created.|


#### GetDirectoryName
```csharp
Bio.Util.FileUtils.GetDirectoryName(System.String,System.String)
```
Returns the normalized directory/path name for the combined string workingDirectory + exampleFileToCopy

|Parameter Name|Remarks|
|--------------|-------|
|exampleFileToCopy| name of source file|
|workingDirectory| name of path to source file|

_returns:  string holding the normalized path_

#### GetEntryOrCallingAssembly
```csharp
Bio.Util.FileUtils.GetEntryOrCallingAssembly
```
Returns the assembly in which program execution began. If no such assembly exists (for example, if this is running in Silverlight), then returns the calling assembly.

#### GetFiles
```csharp
Bio.Util.FileUtils.GetFiles(System.String,System.Boolean)
```
Get all the files that fit a pattern. The patterns can contain '*' as a wildcard. Patterns can
 include directories. Patterns can be combined into larger patterns with '+'

|Parameter Name|Remarks|
|--------------|-------|
|inputPattern|A file pattern.|
|zeroIsOK|True if its OK that no actual files match the pattern between '+''s.|

_returns: The names of actual files that match the pattern._

#### GetTextReaderWithExternalReadWriteAccess
```csharp
Bio.Util.FileUtils.GetTextReaderWithExternalReadWriteAccess(System.String)
```
Read a file stripping out comment, but with ReadWrite sharing.

|Parameter Name|Remarks|
|--------------|-------|
|filename|The file to read|

_returns: A StreamReader_

#### OpenTextStripComments
```csharp
Bio.Util.FileUtils.OpenTextStripComments(System.IO.FileInfo,System.Boolean)
```
Given a (possibly compressed) FileInfo with possible comments, return a StreamReader with uncompressed, uncommented text.

|Parameter Name|Remarks|
|--------------|-------|
|fileInfo|The FileInfo to open|
|allowGzip|(Optional) Tells if should uncompress files with names ending in ".gz" or ".gzip".|

_returns: a StreamReader with uncompressed, uncommented text._

#### ReadEachIndexedLine
```csharp
Bio.Util.FileUtils.ReadEachIndexedLine(System.IO.FileInfo)
```
Returns the lines of a file as a pair with both lines and their index number

|Parameter Name|Remarks|
|--------------|-------|
|file|A FileInfo to read from|

_returns: A sequence of KeyValuePair's. The key is the line and the value is the index number._

#### ReadEachLine
```csharp
Bio.Util.FileUtils.ReadEachLine(System.IO.FileInfo)
```
Returns a sequence of lines from a file.

|Parameter Name|Remarks|
|--------------|-------|
|fileInfo|A FileInfo from which to read lines.|

_returns: a sequence of lines from a file_

#### ReadLine
```csharp
Bio.Util.FileUtils.ReadLine(System.String)
```
Read the first line of a file after any comments.

|Parameter Name|Remarks|
|--------------|-------|
|filename|A name of the file from which to read|

_returns: The first line of a file after skipping any comments._

#### StripComments
```csharp
Bio.Util.FileUtils.StripComments(System.IO.Stream)
```
Filter the comments out of a stream.

|Parameter Name|Remarks|
|--------------|-------|
|stream|The steam to filter|

_returns: a StreamReader that skips over comments_

#### TryToOpenFile
```csharp
Bio.Util.FileUtils.TryToOpenFile(System.String,System.TimeSpan,System.IO.FileMode,System.IO.FileAccess,System.IO.FileShare,System.IO.FileStream@)
```
Keep trying to open file with a timeout

|Parameter Name|Remarks|
|--------------|-------|
|filename|-|
|timeout|-|
|fileMode|-|
|fileAcces|-|
|fileShare|-|
|filestream|-|

_returns: bool true if successfully opened, otherwise false_



### Properties

#### CommentHeader
The string that tells the parser how comments are marked.

