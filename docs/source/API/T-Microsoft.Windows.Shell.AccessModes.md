---
title: AccessModes
---

# AccessModes
_namespace: [Microsoft.Windows.Shell](N-Microsoft.Windows.Shell.html)_

The STGM constants are flags that indicate 
 conditions for creating and deleting the object and access modes 
 for the object. 
 
 You can combine these flags, but you can only choose one flag 
 from each group of related flags. Typically one flag from each 
 of the access and sharing groups must be specified for all 
 functions and methods which use these constants.



### Properties

#### Convert
Creates the new object while preserving existing data in a stream named "Contents".
#### Create
Indicates that an existing storage object 
 or stream should be removed before the new object replaces it.
#### DeleteOnRelease
Indicates that the underlying file is to be automatically destroyed when the root 
 storage object is released. This feature is most useful for creating temporary files.
#### Direct
Indicates that, in direct mode, each change to a storage 
 or stream element is written as it occurs.
#### DirectSingleWriterMultipleReader
Supports direct mode for single-writer, multireader file operations.
#### FailIfThere
Causes the create operation to fail if an existing object with the specified name exists.
#### NoScratch
Indicates that, in transacted mode, a temporary scratch file is usually used 
 to save modifications until the Commit method is called. 
 Specifying NoScratch permits the unused portion of the original file 
 to be used as work space instead of creating a new file for that purpose.
#### NoSnapshot
This flag is used when opening a storage object with Transacted 
 and without ShareExclusive or ShareDenyWrite. 
 In this case, specifying NoSnapshot prevents the system-provided 
 implementation from creating a snapshot copy of the file. 
 Instead, changes to the file are written to the end of the file.
#### Priority
Opens the storage object with exclusive access to the most 
 recently committed version.
#### Read
Indicates that the object is read-only, 
 meaning that modifications cannot be made.
#### ReadWrite
Enables access and modification of object data.
#### ShareDenyNone
Specifies that subsequent openings of the object are 
 not denied read or write access.
#### ShareDenyRead
Prevents others from subsequently opening the object in Read mode.
#### ShareDenyWrite
Prevents others from subsequently opening the object 
 for Write or ReadWrite access.
#### ShareExclusive
Prevents others from subsequently opening the object in any mode.
#### Simple
Provides a faster implementation of a compound file 
 in a limited, but frequently used, case.
#### Transacted
Indicates that, in transacted mode, changes are buffered 
 and written only if an explicit commit operation is called.
#### Write
Enables you to save changes to the object, 
 but does not permit access to its data.

