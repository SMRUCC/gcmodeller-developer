---
title: ThumbnailProvider
---

# ThumbnailProvider
_namespace: [Microsoft.Windows.ShellExtensions](N-Microsoft.Windows.ShellExtensions.html)_

This is the base class for all thumbnail providers and provides their basic functionality.
 To create a custom thumbnail provider a class must derive from this, use the @"T:Microsoft.Windows.ShellExtensions.ThumbnailProviderAttribute",
 and implement 1 or more of the following interfaces: 
 @"T:Microsoft.Windows.ShellExtensions.IThumbnailFromStream", @"T:Microsoft.Windows.ShellExtensions.IThumbnailFromShellObject", @"T:Microsoft.Windows.ShellExtensions.IThumbnailFromFile".

### Methods

#### Dispose
```csharp
Microsoft.Windows.ShellExtensions.ThumbnailProvider.Dispose(System.Boolean)
```
Disploses the thumbnail provider.

|Parameter Name|Remarks|
|--------------|-------|
|disposing|-|


#### Finalize
```csharp
Microsoft.Windows.ShellExtensions.ThumbnailProvider.Finalize
```
Finalizer for the thumbnail provider.

#### GetThumbnailAlphaType
```csharp
Microsoft.Windows.ShellExtensions.ThumbnailProvider.GetThumbnailAlphaType
```
Sets the AlphaType of the generated thumbnail.
 Override this method in a derived class to change the thumbnails AlphaType, default is Unknown.
_returns: ThumnbailAlphaType_

#### Register
```csharp
Microsoft.Windows.ShellExtensions.ThumbnailProvider.Register(System.Type)
```
Called when the assembly is registered via RegAsm.

|Parameter Name|Remarks|
|--------------|-------|
|registerType|Type to be registered.|


#### Unregister
```csharp
Microsoft.Windows.ShellExtensions.ThumbnailProvider.Unregister(System.Type)
```
Called when the assembly is registered via RegAsm.

|Parameter Name|Remarks|
|--------------|-------|
|registerType|Type to register.|





