---
title: SearchConditionFactory
---

# SearchConditionFactory
_namespace: [Microsoft.Windows.Shell](N-Microsoft.Windows.Shell.html)_

Provides methods for creating or resolving a condition tree 
 that was obtained by parsing a query string.

### Methods

#### CreateAndOrCondition
```csharp
Microsoft.Windows.Shell.SearchConditionFactory.CreateAndOrCondition(Microsoft.Windows.Shell.SearchConditionType,System.Boolean,Microsoft.Windows.Shell.SearchCondition[])
```
Creates a condition node that is a logical conjunction ("AND") or disjunction ("OR") 
 of a collection of subconditions.

|Parameter Name|Remarks|
|--------------|-------|
|conditionType|The SearchConditionType of the condition node. 
 Must be either AndCondition or OrCondition.|
|simplify|TRUE to logically simplify the result, if possible; 
 then the result will not necessarily to be of the specified kind. FALSE if the result should 
 have exactly the prescribed structure. An application that plans to execute a query based on the 
 condition tree would typically benefit from setting this parameter to TRUE. |
|conditionNodes|Array of subconditions|

_returns: New SearchCondition based on the operation_

#### CreateLeafCondition
```csharp
Microsoft.Windows.Shell.SearchConditionFactory.CreateLeafCondition(Microsoft.Windows.Shell.PropertySystem.PropertyKey,System.Int32,Microsoft.Windows.Shell.SearchConditionOperation)
```
Creates a leaf condition node that represents a comparison of property value and Integer value. 
 Overload method takes a DateTime parameter for the comparison value.

|Parameter Name|Remarks|
|--------------|-------|
|propertyKey|The property to be compared.|
|value|The Integer value against which the property value should be compared.|
|operation|Specific condition to be used when comparing the actual value and the expected value of the given property|

_returns: SearchCondition based on the given parameters_
> 
>  The search will only work for files that are indexed, as well as the specific properties are indexed. To find 
>  the properties that are indexed, look for the specific property's property description and 
>  @"P:Shell.PropertySystem.ShellPropertyDescription.TypeFlags" property for IsQueryable flag.
>  

#### CreateNotCondition
```csharp
Microsoft.Windows.Shell.SearchConditionFactory.CreateNotCondition(Microsoft.Windows.Shell.SearchCondition,System.Boolean)
```
Creates a condition node that is a logical negation (NOT) of another condition 
 (a subnode of this node).

|Parameter Name|Remarks|
|--------------|-------|
|conditionToBeNegated|SearchCondition node to be negated.|
|simplify|True to logically simplify the result if possible; False otherwise. 
 In a query builder scenario, simplyfy should typically be set to false.|

_returns: New SearchCondition_

#### ParseStructuredQuery
```csharp
Microsoft.Windows.Shell.SearchConditionFactory.ParseStructuredQuery(System.String,System.Globalization.CultureInfo)
```
Parses an input string that contains Structured Query keywords (using Advanced Query Syntax 
 or Natural Query Syntax) and produces a SearchCondition object.

|Parameter Name|Remarks|
|--------------|-------|
|query|The query to be parsed|
|cultureInfo|The culture used to select the localized language for keywords.|

_returns: Search condition resulting from the query_
> For more information on structured query syntax, visit http://msdn.microsoft.com/en-us/library/bb233500.aspx and
>  http://www.microsoft.com/windows/products/winfamily/desktopsearch/technicalresources/advquery.mspx




