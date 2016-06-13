---
title: ShellPropertyDescription
---

# ShellPropertyDescription
_namespace: [Microsoft.Windows.Shell.PropertySystem](N-Microsoft.Windows.Shell.PropertySystem.html)_

Defines the shell property description information for a property.

### Methods

#### Dispose
```csharp
Microsoft.Windows.Shell.PropertySystem.ShellPropertyDescription.Dispose
```
Release the native objects

#### Finalize
```csharp
Microsoft.Windows.Shell.PropertySystem.ShellPropertyDescription.Finalize
```
Release the native objects

#### GetSortDescriptionLabel
```csharp
Microsoft.Windows.Shell.PropertySystem.ShellPropertyDescription.GetSortDescriptionLabel(System.Boolean)
```
Gets the localized display string that describes the current sort order.

|Parameter Name|Remarks|
|--------------|-------|
|descending|Indicates the sort order should 
 reference the string "Z on top"; otherwise, the sort order should reference the string "A on top".|

_returns: The sort description for this property._
> The string retrieved by this method is determined by flags set in the 
>  sortDescription attribute of the labelInfo element in the property's .propdesc file.



### Properties

#### AggregationTypes
Gets a value that describes how the property values are displayed when 
 multiple items are selected in the user interface (UI).
#### CanonicalName
Gets the case-sensitive name of a property as it is known to the system, 
 regardless of its localized name.
#### ColumnState
Gets the column state flag, which describes how the property 
 should be treated by interfaces or APIs that use this flag.
#### ConditionOperation
Gets the default condition operation to use 
 when displaying the property in the query builder user 
 interface (UI). This influences the list of predicate conditions 
 (for example, equals, less than, and contains) that are shown 
 for this property.
#### ConditionType
Gets the condition type to use when displaying the property in 
 the query builder user interface (UI). This influences the list 
 of predicate conditions (for example, equals, less than, and 
 contains) that are shown for this property.
#### DefaultColumWidth
Gets the default user interface (UI) column width for this property.
#### DisplayName
Gets the display name of the property as it is shown in any user interface (UI).
#### DisplayType
Gets the current data type used to display the property.
#### EditInvitation
Gets the text used in edit controls hosted in various dialog boxes.
#### GroupingRange
Gets the method used when a view is grouped by this property.
#### HasSystemDescription
Gets a value that determines if the native property description is present on the system.
#### NativePropertyDescription
Get the native property description COM interface
#### PropertyEnumTypes
Gets a list of the possible values for this property.
#### PropertyKey
Gets the property key identifying the underlying property.
#### SortDescription
Gets the current sort description flags for the property, 
 which indicate the particular wordings of sort offerings.
#### TypeFlags
Gets a set of flags that describe the uses and capabilities of the property.
#### ValueType
Gets the .NET system type for a value of this property, or
 null if the value is empty.
#### VarEnumType
Gets the VarEnum OLE type for this property.
#### ViewFlags
Gets the current set of flags governing the property's view.

