---
title: CommonFileDialogFilter
---

# CommonFileDialogFilter
_namespace: [Microsoft.Windows.Dialogs](N-Microsoft.Windows.Dialogs.html)_

Stores the file extensions used when filtering files in File Open and File Save dialogs.

### Methods

#### #ctor
```csharp
Microsoft.Windows.Dialogs.CommonFileDialogFilter.#ctor(System.String,System.String)
```
Creates a new instance of this class with the specified display name and 
 file extension list.

|Parameter Name|Remarks|
|--------------|-------|
|rawDisplayName|The name of this filter.|
|extensionList|The list of extensions in 
 this filter. See remarks.|

> The **extensionList** can use a semicolon(";") 
>  or comma (",") to separate extensions. Extensions can be prefaced 
>  with a period (".") or with the file wild card specifier "*.".

#### GetFilterSpec
```csharp
Microsoft.Windows.Dialogs.CommonFileDialogFilter.GetFilterSpec
```
Internal helper that generates a single filter 
 specification for this filter, used by the COM API.
_returns: Filter specification for this filter_

#### ToString
```csharp
Microsoft.Windows.Dialogs.CommonFileDialogFilter.ToString
```
Returns a string representation for this filter that includes
 the display name and the list of extensions.
_returns: A @"T:System.String"._



### Properties

#### DisplayName
Gets or sets the display name for this filter.
#### Extensions
Gets a collection of the individual extensions 
 described by this filter.
#### ShowExtensions
Gets or sets a value that controls whether the extensions are displayed.

