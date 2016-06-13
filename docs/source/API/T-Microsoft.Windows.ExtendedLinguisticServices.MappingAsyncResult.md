---
title: MappingAsyncResult
---

# MappingAsyncResult
_namespace: [Microsoft.Windows.ExtendedLinguisticServices](N-Microsoft.Windows.ExtendedLinguisticServices.html)_

@"T:System.IAsyncResult"[IAsyncResult] implementation for use with asynchronous calls to ELS.

### Methods

#### Dispose
```csharp
Microsoft.Windows.ExtendedLinguisticServices.MappingAsyncResult.Dispose(System.Boolean)
```
Dispose the MappingAsyncresult



### Properties

#### AsyncState
Returns the result state.
#### AsyncWaitHandle
Gets the WaitHandle which will be notified when
 the opration completes (successfully or not).
#### CallerData
Returns the caller data associated with this operation.
#### CompletedSynchronously
From MSDN:
 Most implementers of the IAsyncResult interface
 will not use this property and should return false.
#### IsCompleted
Queries whether the operation has completed.
#### PropertyBag
Gets the resulting @"T:Microsoft.Windows.ExtendedLinguisticServices.MappingPropertyBag"[MappingPropertyBag] (if it exists).
#### ResultState
Returns the current result state associated with this operation.
#### Succeeded
Queries whether the operation completed successfully.

