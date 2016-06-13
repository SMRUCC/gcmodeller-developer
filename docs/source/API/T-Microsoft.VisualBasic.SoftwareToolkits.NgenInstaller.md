---
title: NgenInstaller
---

# NgenInstaller
_namespace: [Microsoft.VisualBasic.SoftwareToolkits](N-Microsoft.VisualBasic.SoftwareToolkits.html)_

Ngen.exe (Native Image Generator)
 
 The Native Image Generator (Ngen.exe) is a tool that improves the performance of managed applications. 
 Ngen.exe creates native images, which are files containing compiled processor-specific machine code, 
 and installs them into the native image cache on the local computer. The runtime can use native images 
 from the cache instead of using the just-in-time (JIT) compiler to compile the original assembly.
 
 Changes To Ngen.exe In the .NET Framework 4
 Ngen.exe now compiles assemblies With full trust, And code access security (CAS) policy Is no longer evaluated.
 Native images that are generated With Ngen.exe can no longer be loaded into applications that are running In Partial trust.
 
 Changes To Ngen.exe In the .NET Framework version 2.0:
 Installing an assembly also installs its dependencies, simplifying the syntax Of Ngen.exe.
 Native images can now be Shared across application domains.
 A New Action, update, re - creates images that have been invalidated.
 Actions can be deferred For execution by a service that uses idle time On the computer To generate And install images.
 Some causes Of image invalidation have been eliminated.

### Methods

#### Display
```csharp
Microsoft.VisualBasic.SoftwareToolkits.NgenInstaller.Display(System.String)
```
Display the state of the native images for an assembly and its dependencies.
 If no argument Is supplied, everything In the native image cache Is displayed.

|Parameter Name|Remarks|
|--------------|-------|
|assemblyName|-|


#### ExecuteQueuedItems
```csharp
Microsoft.VisualBasic.SoftwareToolkits.NgenInstaller.ExecuteQueuedItems(Microsoft.VisualBasic.SoftwareToolkits.NgenInstaller.PriorityLevels)
```
Execute queued compilation jobs.
 If a priority Is specified, compilation jobs With greater Or equal priority are executed. 
 If no priority Is specified, all queued compilation jobs are executed.

|Parameter Name|Remarks|
|--------------|-------|
|queue|-|


#### Install
```csharp
Microsoft.VisualBasic.SoftwareToolkits.NgenInstaller.Install
```
将当前目录下的所有的.NET程序都进行安装

#### Queue
```csharp
Microsoft.VisualBasic.SoftwareToolkits.NgenInstaller.Queue(Microsoft.VisualBasic.SoftwareToolkits.NgenInstaller.QueueActions)
```
Pause the native image service, allow the paused service to continue, or query the status of the service.

#### Uninstall
```csharp
Microsoft.VisualBasic.SoftwareToolkits.NgenInstaller.Uninstall(System.String,Microsoft.VisualBasic.SoftwareToolkits.NgenInstaller.Scenarios,System.String,System.Boolean)
```
Delete the native images of an assembly and its dependencies from the native image cache.
 To uninstall a single image And its dependencies, use the same command-line arguments that were used to install the image.
 
 Note In the .NET Framework 4, the action uninstall * Is no longer supported.

|Parameter Name|Remarks|
|--------------|-------|
|assemblyName|
 The full display name of the assembly. For example, "myAssembly, Version=2.0.0.0, Culture=neutral, PublicKeyToken=0038abc9deabfle5".
 Only one assembly can be specified per Ngen.exe command line.
 
 * Note You can supply a Partial assembly name, such As myAssembly, For the display And uninstall actions.
 
 The explicit path of the assembly. You can specify a full or relative path.
 If you specify a file name without a path, the assembly must be located In the current directory.
 Only one assembly can be specified per Ngen.exe command line.
 |
|scenarios|-|
|ExeConfig|exePath, Use the configuration of the specified executable assembly.
 Ngen.exe needs to make the same decisions as the loader when binding to dependencies. When a shared component Is loaded at run time, 
 using the Load method, the application's configuration file determines the dependencies that are loaded for the shared component — 
 for example, the version of a dependency that is loaded. The /ExeConfig switch gives Ngen.exe guidance on which dependencies would be loaded at run time.|
|AppBase|directoryPath, When locating dependencies, use the specified directory as the application base.|


#### Update
```csharp
Microsoft.VisualBasic.SoftwareToolkits.NgenInstaller.Update(System.Boolean)
```
Update native images that have become invalid.
 If /queue Is specified, the updates are queued For the native image service. Updates are always scheduled at priority 3, so they run When the computer Is idle.

|Parameter Name|Remarks|
|--------------|-------|
|queue|-|





