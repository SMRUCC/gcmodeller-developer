---
title: CoreErrorHelper
---

# CoreErrorHelper
_namespace: [Microsoft.Windows.Internal](N-Microsoft.Windows.Internal.html)_

Provide Error Message Helper Methods.
 This is intended for Library Internal use only.

### Methods

#### Failed
```csharp
Microsoft.Windows.Internal.CoreErrorHelper.Failed(System.Int32)
```
This is intended for Library Internal use only.

|Parameter Name|Remarks|
|--------------|-------|
|result|The error code.|

_returns: True if the error code indicates failure._

#### HResultFromWin32
```csharp
Microsoft.Windows.Internal.CoreErrorHelper.HResultFromWin32(System.Int32)
```
This is intended for Library Internal use only.

|Parameter Name|Remarks|
|--------------|-------|
|win32ErrorCode|The Windows API error code.|

_returns: The equivalent HRESULT._

#### Matches
```csharp
Microsoft.Windows.Internal.CoreErrorHelper.Matches(System.Int32,System.Int32)
```
This is intended for Library Internal use only.

|Parameter Name|Remarks|
|--------------|-------|
|result|The COM error code.|
|win32ErrorCode|The Win32 error code.|

_returns: Inticates that the Win32 error code corresponds to the COM error code._

#### Succeeded
```csharp
Microsoft.Windows.Internal.CoreErrorHelper.Succeeded(Microsoft.Windows.Internal.HResult)
```
This is intended for Library Internal use only.

|Parameter Name|Remarks|
|--------------|-------|
|result|The error code.|

_returns: True if the error code indicates success._



### Properties

#### FacilityWin32
This is intended for Library Internal use only.
#### Ignored
This is intended for Library Internal use only.

