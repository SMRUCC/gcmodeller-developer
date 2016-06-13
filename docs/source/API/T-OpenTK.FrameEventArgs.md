---
title: FrameEventArgs
---

# FrameEventArgs
_namespace: [OpenTK](N-OpenTK.html)_

Defines the arguments for frame events.
 A FrameEventArgs instance is only valid for the duration of the relevant event;
 do not store references to FrameEventArgs outside this event.

### Methods

#### #ctor
```csharp
OpenTK.FrameEventArgs.#ctor(System.Double)
```
Constructs a new FrameEventArgs instance.

|Parameter Name|Remarks|
|--------------|-------|
|elapsed|The amount of time that has elapsed since the previous event, in seconds.|




### Properties

#### Time
Gets a @"T:System.Double" that indicates how many seconds of time elapsed since the previous event.

