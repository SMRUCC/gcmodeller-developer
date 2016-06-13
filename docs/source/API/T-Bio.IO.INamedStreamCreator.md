---
title: INamedStreamCreator
---

# INamedStreamCreator
_namespace: [Bio.IO](N-Bio.IO.html)_

Interface that has a name and that can create streams. It can be used as a generalization of file names, FileInfo, reading data from a string,
 reading data from a resource, etc.



### Properties

#### Creator
A factor that creates a stream.
#### Name
The name of the data source. This might be a file name, a resource name, the name of a text box on a form, etc. This name is mostly used
 in error messages when there is an error in the data to help the user understand which data source has the problem.

