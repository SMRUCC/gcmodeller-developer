---
title: ExecutionStates
---

# ExecutionStates
_namespace: [Microsoft.Windows.ApplicationServices](N-Microsoft.Windows.ApplicationServices.html)_

Enumeration of execution states.



### Properties

#### AwayModeRequired
Enables away mode. This value must be specified with ES_CONTINUOUS.
 Away mode should be used only by media-recording and media-distribution applications that must perform critical background processing on desktop computers while the computer appears to be sleeping. See Remarks.
 
 Windows Server 2003 and Windows XP/2000: ES_AWAYMODE_REQUIRED is not supported.
#### Continuous
Informs the system that the state being set should remain in effect until the next call that uses ES_CONTINUOUS and one of the other state flags is cleared.
#### DisplayRequired
Forces the display to be on by resetting the display idle timer.
#### None
No state configured.
#### SystemRequired
Forces the system to be in the working state by resetting the system idle timer.

