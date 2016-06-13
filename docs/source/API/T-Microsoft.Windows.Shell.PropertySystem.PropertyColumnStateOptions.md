---
title: PropertyColumnStateOptions
---

# PropertyColumnStateOptions
_namespace: [Microsoft.Windows.Shell.PropertySystem](N-Microsoft.Windows.Shell.PropertySystem.html)_

Describes how a property should be treated for display purposes.



### Properties

#### BatchRead
Marks columns with values that should be read in a batch.
#### DateType
The value is displayed as a date/time.
#### DisplayMask
Filters out new display flags.
#### Extended
Provided by a handler, not the folder.
#### FixedRatio
Fixed width and height ratio.
#### FixedWidth
Can't resize the column.
#### Hidden
Not displayed in the user interface (UI).
#### IntegerType
The value is displayed as an integer.
#### NoDpiScale
The width is the same in all dots per inch (dpi)s.
#### NoGroupBy
Grouping is disabled for this column.
#### None
Default value
#### NoSortByFolders
Do not sort folders separately.
#### OnByDefault
The column should be on by default in Details view.
#### PreferFormatForDisplay
PSFormatForDisplay produces same result as IShellFolder::CompareIDs.
#### PreferVariantCompare
VarCmp produces same result as IShellFolder::CompareIDs.
#### SecondaryUI
Not displayed in the context menu, but is listed in the More... dialog.
#### Slow
Will be slow to compute. Perform on a background thread.
#### StringType
The value is displayed as a string.
#### TypeMask
A mask for display type values StringType, IntegerType, and DateType.
#### ViewOnly
Only displayed in the UI.

