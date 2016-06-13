---
title: ExplorerBrowserNavigationLog
---

# ExplorerBrowserNavigationLog
_namespace: [Microsoft.Windows.Controls](N-Microsoft.Windows.Controls.html)_

The navigation log is a history of the locations visited by the explorer browser.

### Methods

#### ClearLog
```csharp
Microsoft.Windows.Controls.ExplorerBrowserNavigationLog.ClearLog
```
Clears the contents of the navigation log.



### Properties

#### CanNavigateBackward
Indicates the presence of locations in the log that can be 
 reached by calling Navigate(Backward)
#### CanNavigateForward
Indicates the presence of locations in the log that can be 
 reached by calling Navigate(Forward)
#### CurrentLocation
Gets the shell object in the Locations collection pointed to
 by CurrentLocationIndex.
#### CurrentLocationIndex
An index into the Locations collection. The ShellObject pointed to 
 by this index is the current location of the ExplorerBrowser.
#### Locations
The navigation log
#### m_currentLocationIndex
The index into the Locations collection. -1 if the Locations colleciton 
 is empty.
#### pendingNavigation
The pending navigation log action. null if the user is not navigating 
 via the navigation log.

