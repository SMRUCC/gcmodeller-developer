---
title: ThumbnailProviderAttribute
---

# ThumbnailProviderAttribute
_namespace: [Microsoft.Windows.ShellExtensions](N-Microsoft.Windows.ShellExtensions.html)_

This class attribute is applied to a Thumbnail Provider to specify registration parameters
 and aesthetic attributes.

### Methods

#### #ctor
```csharp
Microsoft.Windows.ShellExtensions.ThumbnailProviderAttribute.#ctor(System.String,System.String)
```
Creates a new instance of the attribute.

|Parameter Name|Remarks|
|--------------|-------|
|name__1|Name of the provider|
|extensions__2|Semi-colon-separated list of extensions supported by this provider.|




### Properties

#### DisableProcessIsolation
Opts-out of running within the surrogate process DllHost.exe.
 This will reduce robustness and security.
 This value should be true if the provider does not implement @"T:Microsoft.Windows.ShellExtensions.IThumbnailFromStream" 
 Note: The msdn documentation and property name are contradicting.
 http://msdn.microsoft.com/en-us/library/cc144118(VS.85).aspx
#### Extensions
Gets the semi-colon-separated list of extensions supported by the provider.
#### Name
Gets the name of the provider
#### ThumbnailAdornment
Specifies the @"P:Microsoft.Windows.ShellExtensions.ThumbnailProviderAttribute.ThumbnailAdornment" for the thumbnail.
 
 Only 32bpp bitmaps support adornments. 
 While 24bpp bitmaps will be displayed, their adornments will not.
 If an adornment is specified by the file-type's associated application, 
 the applications adornment will override the value specified in this registration.
#### ThumbnailCutoff
Below this size thumbnail images will not be generated - file icons will be used instead.
#### TypeOverlay
A resource reference string pointing to the icon to be used as an overlay on the bottom right of the thumbnail.
 ex. ISVComponent.dll@,-155
 ex. C:\Windows\System32\SampleIcon.ico
 If an empty string is provided, no overlay will be used.
 If the property is set to null, the default icon for the associated icon will be used as an overlay.

