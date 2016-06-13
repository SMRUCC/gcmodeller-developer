---
title: URL
---

# URL
_namespace: [Oracle.Java.net](N-Oracle.Java.net.html)_

Class URL represents a Uniform Resource Locator, a pointer to a "resource" on the World Wide Web. A resource can be something 
 as simple as a file or a directory, or it can be a reference to a more complicated object, such as a query to a database or 
 to a search engine. More information on the types of URLs and their formats can be found at:
 
 http://www.socs.uts.edu.au/MosaicDocs-old/url-primer.html
 
 In general, a URL can be broken into several parts. The previous example of a URL indicates that the protocol to use Is http 
 (HyperText Transfer Protocol) And that the information resides on a host machine named www.socs.uts.edu.au. The information 
 on that host machine Is named /MosaicDocs-old/url-primer.html. The exact meaning of this name on the host machine Is both 
 protocol dependent And host dependent. The information normally resides in a file, but it could be generated on the fly. 
 This component of the URL Is called the path component.
 
 A URL can optionally specify a "port", which Is the port number To which the TCP connection Is made On the remote host machine. 
 If the port Is Not specified, the Default port For the protocol Is used instead. For example, the Default port For http Is 80. 
 An alternative port could be specified As
 
 http://www.socs.uts.edu.au:80/MosaicDocs-old/url-primer.html
 
 The syntax Of URL Is defined by RFC 2396: Uniform Resource Identifiers (URI): Generic Syntax, amended by RFC 2732: Format for 
 Literal IPv6 Addresses in URLs. The Literal IPv6 address format also supports scope_ids. The syntax And usage of scope_ids 
 Is described here.
 
 A URL may have appended To it a "fragment", also known As a "ref" Or a "reference". The fragment Is indicated by the sharp sign 
 character "#" followed by more characters. For example,
 
 http://java.sun.com/index.html#chapter1
 
 This fragment Is Not technically part Of the URL. Rather, it indicates that after the specified resource Is retrieved, the application 
 Is specifically interested In that part Of the document that has the tag chapter1 attached To it. The meaning Of a tag Is resource 
 specific.
 
 An application can also specify a "relative URL", which contains only enough information To reach the resource relative To another URL. 
 Relative URLs are frequently used within HTML pages. For example, If the contents Of the URL
 
 http://java.sun.com/index.html
 
 contained within it the relative URL:
 FAQ.html
 
 it would be a shorthand For
 http://java.sun.com/FAQ.html
 
 The relative URL need Not specify all the components Of a URL. If the protocol, host name, Or port number Is missing, the value Is 
 inherited from the fully specified URL. The file component must be specified. The Optional fragment Is Not inherited.
 
 The URL Class does Not itself encode Or decode any URL components according To the escaping mechanism defined In RFC2396. It Is the 
 responsibility Of the caller To encode any fields, which need To be escaped prior To calling URL, And also To decode any escaped 
 fields, that are returned from URL. Furthermore, because URL has no knowledge Of URL escaping, it does Not recognise equivalence 
 between the encoded Or decoded form Of the same URL. For example, the two URLs
 http://foo.com/hello world/ And http://foo.com/hello%20world
 would be considered Not equal To Each other.
 Note, the URI class does perform escaping of its component fields in certain circumstances. The recommended way to manage the encoding 
 And decoding of URLs Is to use URI, And to convert between these two classes using toURI() And URI.toURL().
 
 The URLEncoder And URLDecoder classes can also be used, but only For HTML form encoding, which Is Not the same As the encoding scheme defined In RFC2396.

### Methods

#### #ctor
```csharp
Oracle.Java.net.URL.#ctor(Oracle.Java.net.URL,System.String,Oracle.Java.net.URLStreamHandler)
```
Creates a URL by parsing the given spec With the specified handler within a specified context. If the handler Is null, the parsing occurs As With the two argument constructor.

|Parameter Name|Remarks|
|--------------|-------|
|context|the context in which to parse the specification.|
|spec|the String to parse as a URL.|
|handler|the stream handler for the URL.|


#### Equals
```csharp
Oracle.Java.net.URL.Equals(System.Object)
```
Compares this URL for equality with another object.
 If the given object is not a URL then this method immediately returns false.

 Two URL objects are equal if they have the same protocol, reference equivalent hosts, have the same port number on the host, and the same file and fragment of the file.

 Two hosts are considered equivalent if both host names can be resolved into the same IP addresses; else if either host name can't be resolved, the host names must be equal without regard to case; or both host names equal to null.

 Since hosts comparison requires name resolution, this operation is a blocking operation.

 Note: The defined behavior for equals is known to be inconsistent with virtual hosting in HTTP.

|Parameter Name|Remarks|
|--------------|-------|
|obj|the URL to compare against.|

_returns: true if the objects are the same; false otherwise._

#### getAuthority
```csharp
Oracle.Java.net.URL.getAuthority
```
Gets the authority part of this URL.
_returns: the authority part of this URL_

#### getContent
```csharp
Oracle.Java.net.URL.getContent(Oracle.Java.net.Class[])
```
Gets the contents of this URL. This method is a shorthand for:
 openConnection().getContent(Class[])

|Parameter Name|Remarks|
|--------------|-------|
|classes|an array of Java types|

_returns: the content object of this URL that is the first match of the types specified in the classes array. null if none of the requested types are supported._

#### getDefaultPort
```csharp
Oracle.Java.net.URL.getDefaultPort
```
Gets the default port number of the protocol associated with this URL. If the URL scheme or the URLStreamHandler for the URL do not define a default port number, then -1 is returned.
_returns: the port number_

#### getFile
```csharp
Oracle.Java.net.URL.getFile
```
Gets the file name of this URL. The returned file portion will be the same as getPath(), plus the concatenation of the value of getQuery(), if any. If there is no query portion, this method and getPath() will return identical results.
_returns: the file name of this URL, or an empty string if one does not exist_

#### getHost
```csharp
Oracle.Java.net.URL.getHost
```
Gets the host name of this URL, if applicable. The format of the host conforms to RFC 2732, i.e. for a literal IPv6 address, this method will return the IPv6 address enclosed in square brackets ('[' and ']').
_returns: the host name of this URL._

#### getPath
```csharp
Oracle.Java.net.URL.getPath
```
Gets the path part of this URL.
_returns: the path part of this URL, or an empty string if one does not exist_

#### getPort
```csharp
Oracle.Java.net.URL.getPort
```
Gets the port number of this URL.
_returns: the port number, or -1 if the port is not set_

#### getProtocol
```csharp
Oracle.Java.net.URL.getProtocol
```
Gets the protocol name of this URL.
_returns: the protocol of this URL._

#### getQuery
```csharp
Oracle.Java.net.URL.getQuery
```
Gets the query part of this URL.
_returns: the query part of this URL, or null if one does not exist_

#### getRef
```csharp
Oracle.Java.net.URL.getRef
```
Gets the anchor (also known as the "reference") of this URL.
_returns: the anchor (also known as the "reference") of this URL, or null if one does not exist_

#### getUserInfo
```csharp
Oracle.Java.net.URL.getUserInfo
```
Gets the userInfo part of this URL.
_returns: the userInfo part of this URL, or null if one does not exist_

#### hashCode
```csharp
Oracle.Java.net.URL.hashCode
```
Creates an integer suitable for hash table indexing.
 The hash code is based upon all the URL components relevant for URL comparison.As such, this operation is a blocking operation.
_returns: a hash code for this URL._

#### openConnection
```csharp
Oracle.Java.net.URL.openConnection(Oracle.Java.net.Proxy)
```
Same as openConnection(), except that the connection will be made through the specified proxy; Protocol handlers that do not support proxing will ignore the proxy parameter and make a normal connection. Calling this method preempts the system's default ProxySelector settings.

|Parameter Name|Remarks|
|--------------|-------|
|proxy|the Proxy through which this connection will be made. If direct connection is desired, Proxy.NO_PROXY should be specified.|

_returns: a URLConnection to the URL._

#### openStream
```csharp
Oracle.Java.net.URL.openStream
```
Opens a connection to this URL and returns an InputStream for reading from that connection. This method is a shorthand for:
 openConnection().getInputStream()
_returns: an input stream for reading from the URL connection._

#### sameFile
```csharp
Oracle.Java.net.URL.sameFile(Oracle.Java.net.URL)
```
Compares two URLs, excluding the fragment component.
 Returns true if this URL and the other argument are equal without taking the fragment component into consideration.

|Parameter Name|Remarks|
|--------------|-------|
|other|the URL to compare against.|

_returns: true if they reference the same remote object; false otherwise._

#### set
```csharp
Oracle.Java.net.URL.set(System.String,System.String,System.Int32,System.String,System.String,System.String,System.String,System.String)
```
Sets the specified 8 fields of the URL. This is not a public method so that only URLStreamHandlers can modify URL fields. URLs are otherwise constant.

|Parameter Name|Remarks|
|--------------|-------|
|protocol|the name of the protocol to use|
|host|the name of the host|
|port|the port number on the host|
|authority|the authority part for the url|
|userInfo|the username and password|
|path|the file on the host|
|query|the query part of this URL|
|ref|the internal reference in the URL|


#### setURLStreamHandlerFactory
```csharp
Oracle.Java.net.URL.setURLStreamHandlerFactory(Oracle.Java.net.URLStreamHandlerFactory)
```
Sets an application's URLStreamHandlerFactory. This method can be called at most once in a given Java Virtual Machine.
 The URLStreamHandlerFactory instance is used to construct a stream protocol handler from a protocol name.

 If there is a security manager, this method first calls the security manager's checkSetFactory method to ensure the operation is allowed. This could result in a SecurityException.

|Parameter Name|Remarks|
|--------------|-------|
|fac|the desired factory.|


#### toExternalForm
```csharp
Oracle.Java.net.URL.toExternalForm
```
Constructs a string representation of this URL. The string is created by calling the toExternalForm method of the stream protocol handler for this object.
_returns: a string representation of this object._

#### toURI
```csharp
Oracle.Java.net.URL.toURI
```
Returns a URI equivalent to this URL. This method functions in the same way as new URI (this.toString()).
 Note, any URL instance that complies with RFC 2396 can be converted to a URI.However, some URLs that are not strictly in compliance can not be converted to a URI.
_returns: a URI instance equivalent to this URL._




