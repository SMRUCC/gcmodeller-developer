---
title: PopupNotifier
---

# PopupNotifier
_namespace: [Microsoft.VisualBasic.MolkPlusTheme](N-Microsoft.VisualBasic.MolkPlusTheme.html)_

Non-visual component to show a notification window in the right lower
 corner of the screen.

### Methods

#### #ctor
```csharp
Microsoft.VisualBasic.MolkPlusTheme.PopupNotifier.#ctor
```
Create a new instance of the popup component.

#### Dispose
```csharp
Microsoft.VisualBasic.MolkPlusTheme.PopupNotifier.Dispose(System.Boolean)
```
Dispose the notification form.

|Parameter Name|Remarks|
|--------------|-------|
|disposing|-|


#### frmPopup_MouseEnter
```csharp
Microsoft.VisualBasic.MolkPlusTheme.PopupNotifier.frmPopup_MouseEnter(System.Object,System.EventArgs)
```
Stop wait timer if the mouse enters the form.

|Parameter Name|Remarks|
|--------------|-------|
|sender|-|
|e|-|


#### frmPopup_MouseLeave
```csharp
Microsoft.VisualBasic.MolkPlusTheme.PopupNotifier.frmPopup_MouseLeave(System.Object,System.EventArgs)
```
Start wait timer if the mouse leaves the form.

|Parameter Name|Remarks|
|--------------|-------|
|sender|-|
|e|-|


#### Hide
```csharp
Microsoft.VisualBasic.MolkPlusTheme.PopupNotifier.Hide
```
Hide the notification window.

#### tmAnimation_Tick
```csharp
Microsoft.VisualBasic.MolkPlusTheme.PopupNotifier.tmAnimation_Tick(System.Object,System.EventArgs)
```
Update form position and opacity to show/hide the window.

|Parameter Name|Remarks|
|--------------|-------|
|sender|-|
|e|-|


#### tmWait_Tick
```csharp
Microsoft.VisualBasic.MolkPlusTheme.PopupNotifier.tmWait_Tick(System.Object,System.EventArgs)
```
The wait timer has elapsed, start the animation to hide the window.

|Parameter Name|Remarks|
|--------------|-------|
|sender|-|
|e|-|




### Properties

#### fresh_count
Show the notification window if it is not already visible.
 If the window is currently disappearing, it is shown again.

