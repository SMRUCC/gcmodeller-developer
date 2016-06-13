---
title: TabAnimator
---

# TabAnimator
_namespace: [Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.TabPage](N-Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.TabPage.html)_

Used for animating tabs.

### Methods

#### #ctor
```csharp
Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.TabPage.TabAnimator.#ctor(Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.TabPage)
```
Creates a new TabAnimator given a tab.

|Parameter Name|Remarks|
|--------------|-------|
|tab|The tab to animate.|


#### Enable
```csharp
Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.TabPage.TabAnimator.Enable(Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.TabPage.TabAnimator.AnimationType)
```
Starts the animation given a type.

|Parameter Name|Remarks|
|--------------|-------|
|type|The animation type to start.|


#### Finish
```csharp
Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.TabPage.TabAnimator.Finish
```
Finishes an animation.

#### Tick
```csharp
Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.TabPage.TabAnimator.Tick(System.Object,System.EventArgs)
```
Gets triggered when the timer updates.

|Parameter Name|Remarks|
|--------------|-------|
|sender|The sender object.|
|e|The event args.|




### Properties

#### _tab
The tab we're going to animate.
#### _timer
The timer in charge of iterating.
#### PIN_SIZE
The size of a pinned tab.
#### Working
Whether or not this animator is animating.

