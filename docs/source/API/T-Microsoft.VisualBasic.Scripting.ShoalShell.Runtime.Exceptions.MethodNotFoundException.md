---
title: MethodNotFoundException
---

# MethodNotFoundException
_namespace: [Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.Exceptions](N-Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.Exceptions.html)_

The exception that is thrown when there is an attempt to dynamically access a
 method that does not exist.

### Methods

#### #ctor
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.Exceptions.MethodNotFoundException.#ctor(Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Linker.APIHandler.APIEntryPoint,System.Collections.Generic.KeyValuePair{System.String,System.Object}[],Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.LDM.Expressions.FunctionCalls,Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.ScriptEngine)
```
Initializes a new instance of the @"T:Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.Exceptions.MethodNotFoundException" class with the
 specified class name and method name.

|Parameter Name|Remarks|
|--------------|-------|
|API|The name of the class in which access to a nonexistent method was attempted.|
|args|-|
|Expr|The name of the method that cannot be accessed.|
|ScriptEngine|-|





