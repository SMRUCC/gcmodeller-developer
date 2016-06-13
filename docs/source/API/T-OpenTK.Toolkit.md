---
title: Toolkit
---

# Toolkit
_namespace: [OpenTK](N-OpenTK.html)_

Provides static methods to manage an OpenTK application.

### Methods

#### Dispose
```csharp
OpenTK.Toolkit.Dispose
```
Disposes of the resources consumed by this instance.

#### Init
```csharp
OpenTK.Toolkit.Init(OpenTK.ToolkitOptions)
```
Initializes OpenTK with the specified options. Use this method
 to influence the OpenTK.Platform implementation that will be used.

|Parameter Name|Remarks|
|--------------|-------|
|options|A ToolkitOptions instance
            containing the desired options.|

_returns: 
            An IDisposable instance that you can use to dispose of the resources
            consumed by OpenTK.
            _
> 
>             You *must* call this method if you are combining OpenTK with a
>             third-party windowing toolkit (e.g. GTK#). In this case, this should be the
>             first method called by your application:
>             '
>             static void Main()
>             {
>                 using (OpenTK.Toolkit.Init())
>                 {
>                  ...
>                 }
>             }
>             '
>             
>             The reason is that some toolkits do not configure the underlying platform
>             correctly or configure it in a way that is incompatible with OpenTK.
>             Calling this method first ensures that OpenTK is given the chance to
>             initialize itself and configure the platform correctly.
>             




