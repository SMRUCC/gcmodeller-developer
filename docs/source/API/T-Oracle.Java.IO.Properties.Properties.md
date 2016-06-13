---
title: Properties
---

# Properties
_namespace: [Oracle.Java.IO.Properties](N-Oracle.Java.IO.Properties.html)_

The Properties class represents a persistent set of properties. The Properties can be saved to a stream or loaded 
 from a stream. Each key and its corresponding value in the property list is a string.
 A property list can contain another property list as its "defaults"; this second property list is searched if the 
 property key is not found in the original property list.
 Because Properties inherits from Hashtable, the put and putAll methods can be applied to a Properties object. Their 
 use is strongly discouraged as they allow the caller to insert entries whose keys or values are not Strings. The 
 setProperty method should be used instead. If the store or save method is called on a "compromised" Properties 
 object that contains a non-String key or value, the call will fail. Similarly, the call to the propertyNames or 
 list method will fail if it is called on a "compromised" Properties object that contains a non-String key.

### Methods

#### #ctor
```csharp
Oracle.Java.IO.Properties.Properties.#ctor(Oracle.Java.IO.Properties.Properties)
```
Creates an empty property list with the specified defaults.

|Parameter Name|Remarks|
|--------------|-------|
|defaults|defaults - the defaults.|


#### close
```csharp
Oracle.Java.IO.Properties.Properties.close
```
保存数据并关闭该文件

#### getProperty
```csharp
Oracle.Java.IO.Properties.Properties.getProperty(System.String,System.String)
```
Searches for the property with the specified key in this property list. If the key is not found in this property list, the default property list, 
 and its defaults, recursively, are then checked. The method returns the default value argument if the property is not found.

|Parameter Name|Remarks|
|--------------|-------|
|key|the hashtable key.|
|defaultValue|a default value.|

_returns: the value in this property list with the specified key value._

#### list
```csharp
Oracle.Java.IO.Properties.Properties.list(Oracle.Java.PrintWriter)
```
Prints this property list out to the specified output stream. This method is useful for debugging.

|Parameter Name|Remarks|
|--------------|-------|
|out|an output stream.|


#### Load
```csharp
Oracle.Java.IO.Properties.Properties.Load(Oracle.Java.IO.InputStream)
```
Reads a property list (key and element pairs) from the input byte stream. The input stream is in a simple line-oriented format as specified in load(Reader) and is assumed to use the ISO 8859-1 character encoding; that is each byte is one Latin1 character. Characters not in Latin1, and certain special characters, are represented in keys and elements using Unicode escapes.
 The specified stream remains open after this method returns.

|Parameter Name|Remarks|
|--------------|-------|
|inStream|the input stream.|


#### loadFromXML
```csharp
Oracle.Java.IO.Properties.Properties.loadFromXML(Oracle.Java.IO.InputStream)
```
Loads all of the properties represented by the XML document on the specified input stream into this properties table.
 The XML document must have the following DOCTYPE declaration:
 
 !DOCTYPE properties SYSTEM "http://java.sun.com/dtd/properties.dtd"
 
 Furthermore, the document must satisfy the properties DTD described above.
 The specified stream is closed after this method returns.

|Parameter Name|Remarks|
|--------------|-------|
|in|the input stream from which to read the XML document.|


#### propertyNames
```csharp
Oracle.Java.IO.Properties.Properties.propertyNames
```
Returns an enumeration of all the keys in this property list, including distinct keys in the default property list if a key of the same name has not 
 already been found from the main properties list.
_returns: an enumeration of all the keys in this property list, including the keys in the default property list._

#### save
```csharp
Oracle.Java.IO.Properties.Properties.save(Oracle.Java.OutputStream,System.String)
```
Deprecated. This method does not throw an IOException if an I/O error occurs while saving the property list. The preferred way to save a properties list is via the store(OutputStream out, String comments) method or the storeToXML(OutputStream os, String comment) method.
 Calls the store(OutputStream out, String comments) method and suppresses IOExceptions that were thrown.

|Parameter Name|Remarks|
|--------------|-------|
|out|an output stream.|
|comments|a description of the property list.|


#### setProperty
```csharp
Oracle.Java.IO.Properties.Properties.setProperty(System.String,System.String)
```
Calls the Hashtable method put. Provided for parallelism with the getProperty method. Enforces use of strings for property keys and values. The value returned is the result of the Hashtable call to put.

|Parameter Name|Remarks|
|--------------|-------|
|key|the key to be placed into this property list.|
|value|the value corresponding to key.|

_returns: the previous value of the specified key in this property list, or null if it did not have one._

#### store
```csharp
Oracle.Java.IO.Properties.Properties.store(Oracle.Java.OutputStream,System.String)
```
Writes this property list (key and element pairs) in this Properties table to the output stream in a format suitable for loading into a Properties table using the load(InputStream) method.
 Properties from the defaults table of this Properties table (if any) are not written out by this method.
 
 This method outputs the comments, properties keys and values in the same format as specified in store(Writer), with the following differences:
 
 The stream is written using the ISO 8859-1 character encoding.
 Characters not in Latin-1 in the comments are written as \uxxxx for their appropriate unicode hexadecimal value xxxx.
 Characters less than \u0020 and characters greater than \u007E in property keys or values are written as \uxxxx for the appropriate hexadecimal value xxxx.
 After the entries have been written, the output stream is flushed. The output stream remains open after this method returns.

|Parameter Name|Remarks|
|--------------|-------|
|out|an output stream.|
|comments|a description of the property list.|


#### storeToXML
```csharp
Oracle.Java.IO.Properties.Properties.storeToXML(Oracle.Java.OutputStream,System.String,System.String)
```
Emits an XML document representing all of the properties contained in this table, using the specified encoding.
 The XML document will have the following DOCTYPE declaration:
 
 !DOCTYPE properties SYSTEM "http://java.sun.com/dtd/properties.dtd"
 
 If the specified comment is null then no comment will be stored in the document.
 
 The specified stream remains open after this method returns.

|Parameter Name|Remarks|
|--------------|-------|
|os|the output stream on which to emit the XML document.|
|comment|a description of the property list, or null if no comment is desired.|
|encoding|-|


#### stringPropertyNames
```csharp
Oracle.Java.IO.Properties.Properties.stringPropertyNames
```
Returns a set of keys in this property list where the key and its corresponding value are strings, including distinct keys in the default property list 
 if a key of the same name has not already been found from the main properties list. Properties whose key or value is not of type String are omitted.
 The returned set is not backed by the Properties object. Changes to this Properties are not reflected in the set, or vice versa.
_returns: a set of keys in this property list where the key and its corresponding value are strings, including the keys in the default property list._



### Properties

#### defaults
A property list that contains default values for any keys not found in this property list.

