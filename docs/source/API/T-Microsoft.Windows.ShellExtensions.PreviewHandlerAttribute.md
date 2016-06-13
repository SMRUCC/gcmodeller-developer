---
title: PreviewHandlerAttribute
---

# PreviewHandlerAttribute
_namespace: [Microsoft.Windows.ShellExtensions](N-Microsoft.Windows.ShellExtensions.html)_

This class attribute is applied to a Preview Handler to specify registration parameters.

### Methods

#### #ctor
```csharp
Microsoft.Windows.ShellExtensions.PreviewHandlerAttribute.#ctor(System.String,System.String,System.String)
```
Creates a new instance of the attribute.

|Parameter Name|Remarks|
|--------------|-------|
|name__1|Name of the Handler|
|extensions__2|Semi-colon-separated list of file extensions supported by the handler.|
|appId__3|A unique guid used for process isolation.|




### Properties

#### AppId
Gets the AppId associated with the handler for use with the surrogate host process.
#### DisableLowILProcessIsolation
Disables low integrity-level process isolation. 
 This should be avoided as it could be a security risk.
#### Extensions
Gets the semi-colon-separated list of extensions supported by the preview handler.
#### Name
Gets the name of the handler.

