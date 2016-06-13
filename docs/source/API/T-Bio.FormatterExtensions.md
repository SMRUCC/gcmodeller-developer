---
title: FormatterExtensions
---

# FormatterExtensions
_namespace: [Bio](N-Bio.html)_

Generic formatter extensions

### Methods

#### Close``1
```csharp
Bio.FormatterExtensions.Close``1(Bio.IO.IFormatter{``0})
```
Closes the formatter.

|Parameter Name|Remarks|
|--------------|-------|
|formatter|Formatter.|


#### DoFormat``1
```csharp
Bio.FormatterExtensions.DoFormat``1(System.Action{System.IO.Stream,``0},``0)
```
Performs a format to a memory stream and returns the result as a string.

|Parameter Name|Remarks|
|--------------|-------|
|formatter|-|
|data|-|


#### Format``1
```csharp
Bio.FormatterExtensions.Format``1(Bio.IO.IFormatter{``0},``0,System.String)
```
Writes a single sequence to the formatter.

|Parameter Name|Remarks|
|--------------|-------|
|formatter|Formatter|
|data|Sequence|
|filename|Filename|


#### FormatString
```csharp
Bio.FormatterExtensions.FormatString(Bio.IO.IPhylogeneticTreeFormatter,Bio.Phylogenetics.Tree)
```
Formats the Phylogenetic tree to a string.

|Parameter Name|Remarks|
|--------------|-------|
|formatter|Sequence formatter|
|tree|Tree data|


#### FormatString``1
```csharp
Bio.FormatterExtensions.FormatString``1(Bio.IO.IFormatter{``0},``0)
```
Formats the Wiggle annotation to a string.

|Parameter Name|Remarks|
|--------------|-------|
|formatter|-|
|data|-|


#### Open``1
```csharp
Bio.FormatterExtensions.Open``1(Bio.IO.IFormatter{``0},System.String)
```
Open a file and parse it with the formatter.

|Parameter Name|Remarks|
|--------------|-------|
|formatter|Formatter|
|filename|Filename|

_returns: IDisposable to close stream._




