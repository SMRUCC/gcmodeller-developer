---
title: File
---

# File
_namespace: [Oracle.Java.IO](N-Oracle.Java.IO.html)_

An abstract representation of file and directory pathnames.
 User interfaces and operating systems use system-dependent pathname strings to name files and directories. This class presents an abstract, system-independent view of hierarchical pathnames. An abstract pathname has two components:
 
 An optional system-dependent prefix string, such as a disk-drive specifier, "/" for the UNIX root directory, or "\\\\" for a Microsoft Windows UNC pathname, and
 A sequence of zero or more string names.
 The first name in an abstract pathname may be a directory name or, in the case of Microsoft Windows UNC pathnames, a hostname. Each subsequent name in an abstract pathname denotes a directory; the last name may denote either a directory or a file. The empty abstract pathname has no prefix and an empty name sequence.
 The conversion of a pathname string to or from an abstract pathname is inherently system-dependent. When an abstract pathname is converted into a pathname string, each name is separated from the next by a single copy of the default separator character. The default name-separator character is defined by the system property file.separator, and is made available in the public static fields separator and separatorChar of this class. When a pathname string is converted into an abstract pathname, the names within it may be separated by the default name-separator character or by any other name-separator character that is supported by the underlying system.
 
 A pathname, whether abstract or in string form, may be either absolute or relative. An absolute pathname is complete in that no other information is required in order to locate the file that it denotes. A relative pathname, in contrast, must be interpreted in terms of information taken from some other pathname. By default the classes in the java.io package always resolve relative pathnames against the current user directory. This directory is named by the system property user.dir, and is typically the directory in which the Java virtual machine was invoked.
 
 The parent of an abstract pathname may be obtained by invoking the getParent() method of this class and consists of the pathname's prefix and each name in the pathname's name sequence except for the last. Each directory's absolute pathname is an ancestor of any File object with an absolute abstract pathname which begins with the directory's absolute pathname. For example, the directory denoted by the abstract pathname "/usr" is an ancestor of the directory denoted by the pathname "/usr/local/bin".
 
 The prefix concept is used to handle root directories on UNIX platforms, and drive specifiers, root directories and UNC pathnames on Microsoft Windows platforms, as follows:
 
 For UNIX platforms, the prefix of an absolute pathname is always "/". Relative pathnames have no prefix. The abstract pathname denoting the root directory has the prefix "/" and an empty name sequence.
 For Microsoft Windows platforms, the prefix of a pathname that contains a drive specifier consists of the drive letter followed by ":" and possibly followed by "\\" if the pathname is absolute. The prefix of a UNC pathname is "\\\\"; the hostname and the share name are the first two names in the name sequence. A relative pathname that does not specify a drive has no prefix.
 Instances of this class may or may not denote an actual file-system object such as a file or a directory. If it does denote such an object then that object resides in a partition. A partition is an operating system-specific portion of storage for a file system. A single storage device (e.g. a physical disk-drive, flash memory, CD-ROM) may contain multiple partitions. The object, if any, will reside on the partition named by some ancestor of the absolute form of this pathname.
 
 A file system may implement restrictions to certain operations on the actual file-system object, such as reading, writing, and executing. These restrictions are collectively known as access permissions. The file system may have multiple sets of access permissions on a single object. For example, one set may apply to the object's owner, and another may apply to all other users. The access permissions on an object may cause some methods in this class to fail.
 
 Instances of the File class are immutable; that is, once created, the abstract pathname represented by a File object will never change.

### Methods

#### #ctor
```csharp
Oracle.Java.IO.File.#ctor(System.Uri)
```
Creates a new File instance by converting the given file: URI into an abstract pathname.
 The exact form of a file: URI is system-dependent, hence the transformation performed by this constructor is also system-dependent.
 
 For a given abstract pathname f it is guaranteed that
 
 new File( f.toURI()).equals( f.getAbsoluteFile())
 so long as the original abstract pathname, the URI, and the new abstract pathname are all created in (possibly different invocations of) the same Java virtual machine. This relationship typically does not hold, however, when a file: URI that is created in a virtual machine on one operating system is converted into an abstract pathname in a virtual machine on a different operating system.

|Parameter Name|Remarks|
|--------------|-------|
|uri|An absolute, hierarchical URI with a scheme equal to "file", a non-empty path component, and undefined authority, query, and fragment components|


#### canExecute
```csharp
Oracle.Java.IO.File.canExecute
```
Tests whether the application can execute the file denoted by this abstract pathname.
_returns: true if and only if the abstract pathname exists and the application is allowed to execute the file_

#### canRead
```csharp
Oracle.Java.IO.File.canRead
```
Tests whether the application can read the file denoted by this abstract pathname.
_returns: true if and only if the file specified by this abstract pathname exists and can be read by the application; false otherwise_

#### canWrite
```csharp
Oracle.Java.IO.File.canWrite
```
Tests whether the application can modify the file denoted by this abstract pathname.
_returns: true if and only if the file system actually contains a file denoted by this abstract pathname and the application is allowed to write to the file; false otherwise._

#### CompareTo
```csharp
Oracle.Java.IO.File.CompareTo(Oracle.Java.IO.File)
```
Compares two abstract pathnames lexicographically. The ordering defined by this method depends upon the underlying system. On UNIX systems, alphabetic case is significant in comparing pathnames; on Microsoft Windows systems it is not.

|Parameter Name|Remarks|
|--------------|-------|
|pathname|The abstract pathname to be compared to this abstract pathname|

_returns: Zero if the argument is equal to this abstract pathname, a value less than zero if this abstract pathname is lexicographically less than the argument, or a value greater than zero if this abstract pathname is lexicographically greater than the argument_

#### createNewFile
```csharp
Oracle.Java.IO.File.createNewFile
```
Atomically creates a new, empty file named by this abstract pathname if and only if a file with this name does not yet exist. 
 The check for the existence of the file and the creation of the file if it does not exist are a single operation that is atomic with respect to all other filesystem activities that might affect the file.
 Note: this method should not be used for file-locking, as the resulting protocol cannot be made to work reliably. The FileLock facility should be used instead.
_returns: true if the named file does not exist and was successfully created; false if the named file already exists_

#### createTempFile
```csharp
Oracle.Java.IO.File.createTempFile(System.String,System.String)
```
Creates an empty file in the default temporary-file directory, using the given prefix and suffix to generate its name. Invoking this method is equivalent to invoking createTempFile(prefix, suffix, null).
 The Files.createTempFile method provides an alternative method to create an empty file in the temporary-file directory. Files created by that method may have more restrictive access permissions to files created by this method and so may be more suited to security-sensitive applications.

|Parameter Name|Remarks|
|--------------|-------|
|prefix|The prefix string to be used in generating the file's name; must be at least three characters long|
|suffix|The suffix string to be used in generating the file's name; may be null, in which case the suffix ".tmp" will be used|


#### delete
```csharp
Oracle.Java.IO.File.delete
```
Deletes the file or directory denoted by this abstract pathname. If this pathname denotes a directory, then the directory must be empty in order to be deleted.
 Note that the Files class defines the delete method to throw an IOException when a file cannot be deleted. This is useful for error reporting and to diagnose why a file cannot be deleted.
_returns: true if and only if the file or directory is successfully deleted; false otherwise_

#### deleteOnExit
```csharp
Oracle.Java.IO.File.deleteOnExit
```
Requests that the file or directory denoted by this abstract pathname be deleted when the virtual machine terminates. Files (or directories) are deleted in the reverse order that they are registered. Invoking this method to delete a file or directory that is already registered for deletion has no effect. Deletion will be attempted only for normal termination of the virtual machine, as defined by the Java Language Specification.
 Once deletion has been requested, it is not possible to cancel the request. This method should therefore be used with care.
 
 Note: this method should not be used for file-locking, as the resulting protocol cannot be made to work reliably. The FileLock facility should be used instead.

#### Equals
```csharp
Oracle.Java.IO.File.Equals(System.Object)
```
Tests this abstract pathname for equality with the given object. Returns true if and only if the argument is not null and is an abstract pathname that denotes the same file or directory as this abstract pathname. Whether or not two abstract pathnames are equal depends upon the underlying system. On UNIX systems, alphabetic case is significant in comparing pathnames; on Microsoft Windows systems it is not.

|Parameter Name|Remarks|
|--------------|-------|
|obj|The object to be compared with this abstract pathname|

_returns: true if and only if the objects are the same; false otherwise_

#### exists
```csharp
Oracle.Java.IO.File.exists
```
Tests whether the file or directory denoted by this abstract pathname exists.
_returns: true if and only if the file or directory denoted by this abstract pathname exists; false otherwise_

#### getAbsoluteFile
```csharp
Oracle.Java.IO.File.getAbsoluteFile
```
Returns the absolute form of this abstract pathname. Equivalent to new File(this.getAbsolutePath()).
_returns: The absolute abstract pathname denoting the same file or directory as this abstract pathname_

#### getAbsolutePath
```csharp
Oracle.Java.IO.File.getAbsolutePath
```
Returns the absolute pathname string of this abstract pathname.
 If this abstract pathname is already absolute, then the pathname string is simply returned as if by the getPath() method. 
 If this abstract pathname is the empty abstract pathname then the pathname string of the current user directory, which is 
 named by the system property user.dir, is returned. Otherwise this pathname is resolved in a system-dependent way. 
 
 On UNIX systems, a relative pathname is made absolute by resolving it against the current user directory. 
 On Microsoft Windows systems, a relative pathname is made absolute by resolving it against the current directory 
 of the drive named by the pathname, if any; if not, it is resolved against the current user directory.
_returns: The absolute pathname string denoting the same file or directory as this abstract pathname_

#### getCanonicalFile
```csharp
Oracle.Java.IO.File.getCanonicalFile
```
Returns the canonical form of this abstract pathname. Equivalent to new File(this.getCanonicalPath()).
_returns: The canonical pathname string denoting the same file or directory as this abstract pathname_

#### getCanonicalPath
```csharp
Oracle.Java.IO.File.getCanonicalPath
```
Returns the canonical pathname string of this abstract pathname.
 A canonical pathname is both absolute and unique. The precise definition of canonical form is system-dependent. This method first converts this pathname to absolute form if necessary, as if by invoking the getAbsolutePath() method, and then maps it to its unique form in a system-dependent way. This typically involves removing redundant names such as "." and ".." from the pathname, resolving symbolic links (on UNIX platforms), and converting drive letters to a standard case (on Microsoft Windows platforms).
 
 Every pathname that denotes an existing file or directory has a unique canonical form. Every pathname that denotes a nonexistent file or directory also has a unique canonical form. The canonical form of the pathname of a nonexistent file or directory may be different from the canonical form of the same pathname after the file or directory is created. Similarly, the canonical form of the pathname of an existing file or directory may be different from the canonical form of the same pathname after the file or directory is deleted.
_returns: The canonical pathname string denoting the same file or directory as this abstract pathname_

#### getFreeSpace
```csharp
Oracle.Java.IO.File.getFreeSpace
```
Returns the number of unallocated bytes in the partition named by this abstract path name.
 The returned number of unallocated bytes is a hint, but not a guarantee, that it is possible to use most or any of these bytes. The number of unallocated bytes is most likely to be accurate immediately after this call. It is likely to be made inaccurate by any external I/O operations including those made on the system outside of this virtual machine. This method makes no guarantee that write operations to this file system will succeed.
_returns: The number of unallocated bytes on the partition or 0L if the abstract pathname does not name a partition. This value will be less than or equal to the total file system size returned by getTotalSpace()._

#### getName
```csharp
Oracle.Java.IO.File.getName
```
Returns the name of the file or directory denoted by this abstract pathname. This is just the last name in the pathname's name sequence. If the pathname's name sequence is empty, then the empty string is returned.
_returns: The name of the file or directory denoted by this abstract pathname, or the empty string if this pathname's name sequence is empty_

#### getParent
```csharp
Oracle.Java.IO.File.getParent
```
Returns the pathname string of this abstract pathname's parent, or null if this pathname does not name a parent directory.
 The parent of an abstract pathname consists of the pathname's prefix, if any, and each name in the pathname's name sequence except for the last. If the name sequence is empty then the pathname does not name a parent directory.
_returns: The pathname string of the parent directory named by this abstract pathname, or null if this pathname does not name a parent_

#### getParentFile
```csharp
Oracle.Java.IO.File.getParentFile
```
Returns the abstract pathname of this abstract pathname's parent, or null if this pathname does not name a parent directory.
 The parent of an abstract pathname consists of the pathname's prefix, if any, and each name in the pathname's name sequence except for the last. If the name sequence is empty then the pathname does not name a parent directory.
_returns: The abstract pathname of the parent directory named by this abstract pathname, or null if this pathname does not name a parent_

#### getPath
```csharp
Oracle.Java.IO.File.getPath
```
Converts this abstract pathname into a pathname string. The resulting string uses the default name-separator character to separate the names in the name sequence.
_returns: The string form of this abstract pathname_

#### getTotalSpace
```csharp
Oracle.Java.IO.File.getTotalSpace
```
Returns the size of the partition named by this abstract pathname.
_returns: The size, in bytes, of the partition or 0L if this abstract pathname does not name a partition_

#### getUsableSpace
```csharp
Oracle.Java.IO.File.getUsableSpace
```
Returns the number of bytes available to this virtual machine on the partition named by this abstract pathname. When possible, this method checks for write permissions and other operating system restrictions and will therefore usually provide a more accurate estimate of how much new data can actually be written than getFreeSpace().
 The returned number of available bytes is a hint, but not a guarantee, that it is possible to use most or any of these bytes. The number of unallocated bytes is most likely to be accurate immediately after this call. It is likely to be made inaccurate by any external I/O operations including those made on the system outside of this virtual machine. This method makes no guarantee that write operations to this file system will succeed.
_returns: The number of available bytes on the partition or 0L if the abstract pathname does not name a partition. On systems where this information is not available, this method will be equivalent to a call to getFreeSpace()._

#### hashCode
```csharp
Oracle.Java.IO.File.hashCode
```
Computes a hash code for this abstract pathname. Because equality of abstract pathnames is inherently system-dependent, so is the computation of their hash codes. On UNIX systems, the hash code of an abstract pathname is equal to the exclusive or of the hash code of its pathname string and the decimal value 1234321. On Microsoft Windows systems, the hash code is equal to the exclusive or of the hash code of its pathname string converted to lower case and the decimal value 1234321. Locale is not taken into account on lowercasing the pathname string.
_returns: A hash code for this abstract pathname_

#### isAbsolute
```csharp
Oracle.Java.IO.File.isAbsolute
```
Tests whether this abstract pathname is absolute. The definition of absolute pathname is system dependent. 
 On UNIX systems, a pathname is absolute if its prefix is "/". On Microsoft Windows systems, a pathname is 
 absolute if its prefix is a drive specifier followed by "\\", or if its prefix is "\\\\".
_returns: true if this abstract pathname is absolute, false otherwise_

#### isDirectory
```csharp
Oracle.Java.IO.File.isDirectory
```
Tests whether the file denoted by this abstract pathname is a directory.
 Where it is required to distinguish an I/O exception from the case that the file is not a directory, or where several attributes of the same file are required at the same time, then the Files.readAttributes method may be used.
_returns: true if and only if the file denoted by this abstract pathname exists and is a directory; false otherwise_

#### isFile
```csharp
Oracle.Java.IO.File.isFile
```
Tests whether the file denoted by this abstract pathname is a normal file. A file is normal if it is not a directory and, in addition, satisfies other system-dependent criteria. Any non-directory file created by a Java application is guaranteed to be a normal file.
 Where it is required to distinguish an I/O exception from the case that the file is not a normal file, or where several attributes of the same file are required at the same time, then the Files.readAttributes method may be used.
_returns: true if and only if the file denoted by this abstract pathname exists and is a normal file; false otherwise_

#### isHidden
```csharp
Oracle.Java.IO.File.isHidden
```
Tests whether the file named by this abstract pathname is a hidden file. The exact definition of hidden is system-dependent. On UNIX systems, a file is considered to be hidden if its name begins with a period character ('.'). On Microsoft Windows systems, a file is considered to be hidden if it has been marked as such in the filesystem.
_returns: true if and only if the file denoted by this abstract pathname is hidden according to the conventions of the underlying platform_

#### lastModified
```csharp
Oracle.Java.IO.File.lastModified
```
Returns the time that the file denoted by this abstract pathname was last modified.
 Where it is required to distinguish an I/O exception from the case where 0L is returned, or where several attributes of the same file are required at the same time, or where the time of last access or the creation time are required, then the Files.readAttributes method may be used.
_returns: A long value representing the time the file was last modified, measured in milliseconds since the epoch (00:00:00 GMT, January 1, 1970), or 0L if the file does not exist or if an I/O error occurs_

#### length
```csharp
Oracle.Java.IO.File.length
```
Returns the length of the file denoted by this abstract pathname. The return value is unspecified if this pathname denotes a directory.
 Where it is required to distinguish an I/O exception from the case that 0L is returned, or where several attributes of the same file are required at the same time, then the Files.readAttributes method may be used.
_returns: The length, in bytes, of the file denoted by this abstract pathname, or 0L if the file does not exist. Some operating systems may return 0L for pathnames denoting system-dependent entities such as devices or pipes._

#### list
```csharp
Oracle.Java.IO.File.list(Oracle.Java.FilenameFilter)
```
Returns an array of strings naming the files and directories in the directory denoted by this abstract pathname that satisfy the specified filter. The behavior of this method is the same as that of the list() method, except that the strings in the returned array must satisfy the filter. If the given filter is null then all names are accepted. Otherwise, a name satisfies the filter if and only if the value true results when the FilenameFilter.accept(File, String) method of the filter is invoked on this abstract pathname and the name of a file or directory in the directory that it denotes.

|Parameter Name|Remarks|
|--------------|-------|
|filter|A filename filter|

_returns: An array of strings naming the files and directories in the directory denoted by this abstract pathname that were accepted by the given filter. The array will be empty if the directory is empty or if no names were accepted by the filter. Returns null if this abstract pathname does not denote a directory, or if an I/O error occurs._

#### listFiles
```csharp
Oracle.Java.IO.File.listFiles(Oracle.Java.FileFilter)
```
Returns an array of abstract pathnames denoting the files and directories in the directory denoted by this abstract pathname that satisfy the specified filter. The behavior of this method is the same as that of the listFiles() method, except that the pathnames in the returned array must satisfy the filter. If the given filter is null then all pathnames are accepted. Otherwise, a pathname satisfies the filter if and only if the value true results when the FileFilter.accept(File) method of the filter is invoked on the pathname.

|Parameter Name|Remarks|
|--------------|-------|
|filter|A file filter|

_returns: An array of abstract pathnames denoting the files and directories in the directory denoted by this abstract pathname. The array will be empty if the directory is empty. Returns null if this abstract pathname does not denote a directory, or if an I/O error occurs._

#### listRoots
```csharp
Oracle.Java.IO.File.listRoots
```
List the available filesystem roots.
 A particular Java platform may support zero or more hierarchically-organized file systems. Each file system has a root directory from which all other files in that file system can be reached. Windows platforms, for example, have a root directory for each active drive; UNIX platforms have a single root directory, namely "/". The set of available filesystem roots is affected by various system-level operations such as the insertion or ejection of removable media and the disconnecting or unmounting of physical or virtual disk drives.
 
 This method returns an array of File objects that denote the root directories of the available filesystem roots. It is guaranteed that the canonical pathname of any file physically present on the local machine will begin with one of the roots returned by this method.
 
 The canonical pathname of a file that resides on some other machine and is accessed via a remote-filesystem protocol such as SMB or NFS may or may not begin with one of the roots returned by this method. If the pathname of a remote file is syntactically indistinguishable from the pathname of a local file then it will begin with one of the roots returned by this method. Thus, for example, File objects denoting the root directories of the mapped network drives of a Windows platform will be returned by this method, while File objects containing UNC pathnames will not be returned by this method.
 
 Unlike most methods in this class, this method does not throw security exceptions. If a security manager exists and its SecurityManager.checkRead(String) method denies read access to a particular root directory, then that directory will not appear in the result.
_returns: An array of File objects denoting the available filesystem roots, or null if the set of roots could not be determined. The array will be empty if there are no filesystem roots._

#### mkdir
```csharp
Oracle.Java.IO.File.mkdir
```
Creates the directory named by this abstract pathname.
_returns: true if and only if the directory was created; false otherwise_

#### mkdirs
```csharp
Oracle.Java.IO.File.mkdirs
```
Creates the directory named by this abstract pathname, including any necessary but nonexistent parent directories. Note that if this operation fails it may have succeeded in creating some of the necessary parent directories.
_returns: true if and only if the directory was created, along with all necessary parent directories; false otherwise_

#### renameTo
```csharp
Oracle.Java.IO.File.renameTo(Oracle.Java.IO.File)
```
Renames the file denoted by this abstract pathname.
 Many aspects of the behavior of this method are inherently platform-dependent: The rename operation might not be able to move a file from one filesystem to another, it might not be atomic, and it might not succeed if a file with the destination abstract pathname already exists. The return value should always be checked to make sure that the rename operation was successful.
 
 Note that the Files class defines the move method to move or rename a file in a platform independent manner.

|Parameter Name|Remarks|
|--------------|-------|
|dest|The new abstract pathname for the named file|

_returns: true if and only if the renaming succeeded; false otherwise_

#### setExecutable
```csharp
Oracle.Java.IO.File.setExecutable(System.Boolean)
```
A convenience method to set the owner's execute permission for this abstract pathname.
 An invocation of this method of the form file.setExcutable(arg) behaves in exactly the same way as the invocation
 
 File.setExecutable(arg, True)

|Parameter Name|Remarks|
|--------------|-------|
|executable|If true, sets the access permission to allow execute operations; if false to disallow execute operations|

_returns: true if and only if the operation succeeded. The operation will fail if the user does not have permission to change the access permissions of this abstract pathname. If executable is false and the underlying file system does not implement an excute permission, then the operation will fail._

#### setLastModified
```csharp
Oracle.Java.IO.File.setLastModified(System.Int64)
```
Sets the last-modified time of the file or directory named by this abstract pathname.
 All platforms support file-modification times to the nearest second, but some provide more precision. The argument will be truncated to fit the supported precision. If the operation succeeds and no intervening operations on the file take place, then the next invocation of the lastModified() method will return the (possibly truncated) time argument that was passed to this method.

|Parameter Name|Remarks|
|--------------|-------|
|time|The new last-modified time, measured in milliseconds since the epoch (00:00:00 GMT, January 1, 1970)|

_returns: true if and only if the operation succeeded; false otherwise_

#### setReadable
```csharp
Oracle.Java.IO.File.setReadable(System.Boolean)
```
A convenience method to set the owner's read permission for this abstract pathname.
 An invocation of this method of the form file.setReadable(arg) behaves in exactly the same way as the invocation
 
 File.setReadable(arg, True)

|Parameter Name|Remarks|
|--------------|-------|
|readable|If true, sets the access permission to allow read operations; if false to disallow read operations|

_returns: true if and only if the operation succeeded. The operation will fail if the user does not have permission to change the access permissions of this abstract pathname. If readable is false and the underlying file system does not implement a read permission, then the operation will fail._

#### setReadOnly
```csharp
Oracle.Java.IO.File.setReadOnly
```
Marks the file or directory named by this abstract pathname so that only read operations are allowed. After invoking this method the file or directory is guaranteed not to change until it is either deleted or marked to allow write access. Whether or not a read-only file or directory may be deleted depends upon the underlying system.
_returns: true if and only if the operation succeeded; false otherwise_

#### setWritable
```csharp
Oracle.Java.IO.File.setWritable(System.Boolean)
```
A convenience method to set the owner's write permission for this abstract pathname.
 An invocation of this method of the form file.setWritable(arg) behaves in exactly the same way as the invocation
 
 File.setWritable(arg, True)

|Parameter Name|Remarks|
|--------------|-------|
|writable|If true, sets the access permission to allow write operations; if false to disallow write operations|

_returns: true if and only if the operation succeeded. The operation will fail if the user does not have permission to change the access permissions of this abstract pathname._

#### toPath
```csharp
Oracle.Java.IO.File.toPath
```
Returns a java.nio.file.Path object constructed from the this abstract path. The resulting Path is associated with the default-filesystem.
 The first invocation of this method works as if invoking it were equivalent to evaluating the expression:
 
 FileSystems.getDefault().getPath(this.getPath());
 
 Subsequent invocations of this method return the same Path.
 If this abstract pathname is the empty abstract pathname then this method returns a Path that may be used to access the current user directory.
_returns: a Path constructed from this abstract path_

#### ToString
```csharp
Oracle.Java.IO.File.ToString
```
Returns the pathname string of this abstract pathname. This is just the string returned by the getPath() method.
_returns: The string form of this abstract pathname_

#### toURI
```csharp
Oracle.Java.IO.File.toURI
```
Constructs a file: URI that represents this abstract pathname.
 The exact form of the URI is system-dependent. If it can be determined that the file denoted by this abstract pathname is a directory, then the resulting URI will end with a slash.
 
 For a given abstract pathname f, it is guaranteed that
 
 new File( f.toURI()).equals( f.getAbsoluteFile())
 so long as the original abstract pathname, the URI, and the new abstract pathname are all created in (possibly different invocations of) the same Java virtual machine. Due to the system-dependent nature of abstract pathnames, however, this relationship typically does not hold when a file: URI that is created in a virtual machine on one operating system is converted into an abstract pathname in a virtual machine on a different operating system.
 Note that when this abstract pathname represents a UNC pathname then all components of the UNC (including the server name component) are encoded in the URI path. The authority component is undefined, meaning that it is represented as null. The Path class defines the toUri method to encode the server name in the authority component of the resulting URI. The toPath method may be used to obtain a Path representing this abstract pathname.
_returns: An absolute, hierarchical URI with a scheme equal to "file", a path representing this abstract pathname, and undefined authority, query, and fragment components_

#### toURL
```csharp
Oracle.Java.IO.File.toURL
```
Deprecated. This method does not automatically escape characters that are illegal in URLs. It is recommended that new code convert an abstract pathname into a URL by first converting it into a URI, via the toURI method, and then converting the URI into a URL via the URI.toURL method.
 Converts this abstract pathname into a file: URL. The exact form of the URL is system-dependent. If it can be determined that the file denoted by this abstract pathname is a directory, then the resulting URL will end with a slash.
_returns: A URL object representing the equivalent file URL_



### Properties

#### Directory
文件夹是否存在
#### pathSeparator
The system-dependent path-separator character, represented as a string for convenience. This string contains a single character, namely pathSeparatorChar.
#### pathSeparatorChar
The system-dependent path-separator character. This field is initialized to contain the first character of the value of the system property path.separator. 
 This character is used to separate filenames in a sequence of files given as a path list. 
 On UNIX systems, this character is ':'; on Microsoft Windows systems it is ';'.
#### separator
The system-dependent default name-separator character, represented as a string for convenience. This string contains a single character, namely separatorChar.
#### separatorChar
The system-dependent default name-separator character. This field is initialized to contain the first character of the value of the system property file.separator. 
 On UNIX systems the value of this field is '/'; on Microsoft Windows systems it is '\\'.

