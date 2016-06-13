---
title: PropertyDescriptionFormatOptions
---

# PropertyDescriptionFormatOptions
_namespace: [Microsoft.Windows.Shell.PropertySystem](N-Microsoft.Windows.Shell.PropertySystem.html)_

Delineates the format of a property string.



### Properties

#### AlwaysKB
The sizes displayed in kilobytes (KB), regardless of size.
#### FileName
The string treated as a file name.
#### HideDate
The date portion of date/time hidden.
#### HideTime
The time portion of date/time hidden.
#### LongDate
The date displayed as 'DayOfWeek Month day, year'. 
 For example, 'Monday, March 21, 2004'.
#### LongTime
The time displayed as 'hh:mm:ss am/pm'.
#### NoAutoReadingOrder
The detection of the reading order is not automatic. Useful when converting 
 to ANSI to omit the Unicode reading order characters.
#### None
The format settings specified in the property's .propdesc file.
#### PrefixName
The value preceded with the property's display name.
#### ReadOnly
This flag requires UseEditInvitation to also be specified. When the 
 formatting flags are ReadOnly | UseEditInvitation and the algorithm 
 would have shown invitation text, a string is returned that indicates 
 the value is "Unknown" instead of the invitation text.
#### RelativeDate
The friendly date descriptions, such as "Yesterday".
#### RightToLeft
Reserved.
#### ShortDate
The date displayed as 'MM/DD/YY'. For example, '3/21/04'.
#### ShortTime
The time displayed as 'hh:mm am/pm'.
#### SmartDateTime
Smart display of DateTime values
#### UseEditInvitation
The text displayed in a text box as a cue for the user, such as 'Enter your name'.

