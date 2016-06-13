---
title: PropertyAggregationType
---

# PropertyAggregationType
_namespace: [Microsoft.Windows.Shell.PropertySystem](N-Microsoft.Windows.Shell.PropertySystem.html)_

Property Aggregation Type



### Properties

#### Average
The numerical average of the selected values is displayed. This flag 
 is never returned for data types VT_LPWSTR, VT_BOOL, and VT_FILETIME.
#### DateRange
The date range of the selected values is displayed. This flag is only 
 returned for values of the VT_FILETIME data type.
#### Default
The string "Multiple Values" is displayed.
#### First
The first value in the selection is displayed.
#### Max
The highest of the selected values is displayed.
#### Min
The lowest of the selected values is displayed.
#### Sum
The sum of the selected values is displayed. This flag is never returned 
 for data types VT_LPWSTR, VT_BOOL, and VT_FILETIME.
#### Union
A concatenated string of all the values is displayed. The order of 
 individual values in the string is undefined. The concatenated 
 string omits duplicate values; if a value occurs more than once, 
 it only appears a single time in the concatenated string.

