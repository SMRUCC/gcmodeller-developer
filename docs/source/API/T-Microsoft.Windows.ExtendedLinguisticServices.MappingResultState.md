---
title: MappingResultState
---

# MappingResultState
_namespace: [Microsoft.Windows.ExtendedLinguisticServices](N-Microsoft.Windows.ExtendedLinguisticServices.html)_

This class serves as the result status of asynchronous calls to ELS and
 as the result status of linguistic exceptions.

### Methods

#### Equals
```csharp
Microsoft.Windows.ExtendedLinguisticServices.MappingResultState.Equals(Microsoft.Windows.ExtendedLinguisticServices.MappingResultState)
```
Compares a @"T:Microsoft.Windows.ExtendedLinguisticServices.MappingResultState"[MappingResultState] obj for value equality.

|Parameter Name|Remarks|
|--------------|-------|
|obj|@"T:Microsoft.Windows.ExtendedLinguisticServices.MappingResultState"[MappingResultState] to compare.|

_returns: True if obj is equal to this instance, false otherwise._

#### GetHashCode
```csharp
Microsoft.Windows.ExtendedLinguisticServices.MappingResultState.GetHashCode
```
Uses the HResult param as the object hashcode.
_returns: An integer hashcode_

#### op_Equality
```csharp
Microsoft.Windows.ExtendedLinguisticServices.MappingResultState.op_Equality(Microsoft.Windows.ExtendedLinguisticServices.MappingResultState,Microsoft.Windows.ExtendedLinguisticServices.MappingResultState)
```
Compares two @"T:Microsoft.Windows.ExtendedLinguisticServices.MappingResultState"[MappingResultState] objs for value equality.

|Parameter Name|Remarks|
|--------------|-------|
|one|First @"T:Microsoft.Windows.ExtendedLinguisticServices.MappingResultState"[MappingResultState] to compare.|
|two|Second @"T:Microsoft.Windows.ExtendedLinguisticServices.MappingResultState"[MappingResultState] to compare.|

_returns: True if the two @"T:Microsoft.Windows.ExtendedLinguisticServices.MappingResultState"[MappingResultStates] are equal, false otherwise._

#### op_Inequality
```csharp
Microsoft.Windows.ExtendedLinguisticServices.MappingResultState.op_Inequality(Microsoft.Windows.ExtendedLinguisticServices.MappingResultState,Microsoft.Windows.ExtendedLinguisticServices.MappingResultState)
```
Compares two @"T:Microsoft.Windows.ExtendedLinguisticServices.MappingResultState"[MappingResultState] objs against value equality.

|Parameter Name|Remarks|
|--------------|-------|
|one|First @"T:Microsoft.Windows.ExtendedLinguisticServices.MappingResultState"[MappingResultState] to compare.|
|two|Second @"T:Microsoft.Windows.ExtendedLinguisticServices.MappingResultState"[MappingResultState] to compare.|

_returns: True if the two @"T:Microsoft.Windows.ExtendedLinguisticServices.MappingResultState"[MappingResultStates] are not equal, false otherwise._



### Properties

#### ErrorMessage
Gets a human-readable description of the HResult error code,
 as constructed by @"T:System.ComponentModel.Win32Exception"[Win32Exception].
#### HResult
Gets the HResult error code associated with this structure.

