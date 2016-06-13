---
title: URLStreamHandler
---

# URLStreamHandler
_namespace: [Oracle.Java.net](N-Oracle.Java.net.html)_

The abstract class URLStreamHandler is the common superclass for all stream protocol handlers. A stream protocol handler knows how to make a connection for a particular protocol type, such as http, ftp, or gopher.
 In most cases, an instance of a URLStreamHandler subclass is not created directly by an application.Rather, the first time a protocol name is encountered when constructing a URL, the appropriate stream protocol handler is automatically loaded.

### Methods

#### Equals
```csharp
Oracle.Java.net.URLStreamHandler.Equals(Oracle.Java.net.URL,Oracle.Java.net.URL)
```
Provides the default equals calculation.May be overidden by handlers for other protocols that have different requirements for equals(). This method requires that none of its arguments is null. This is guaranteed by the fact that it is only called by java.net.URL class.

|Parameter Name|Remarks|
|--------------|-------|
|u1|a URL object|
|u2|a URL object|

_returns: true if the two urls are considered equal, ie. they refer to the same fragment in the same file._

#### getDefaultPort
```csharp
Oracle.Java.net.URLStreamHandler.getDefaultPort
```
Returns the default port for a URL parsed by this handler.This method is meant to be overidden by handlers with default port numbers.
_returns: the default port for a URL parsed by this handler._

#### getHostAddress
```csharp
Oracle.Java.net.URLStreamHandler.getHostAddress(Oracle.Java.net.URL)
```
Get the IP address of our host.An empty host field or a DNS failure will result in a null return.

|Parameter Name|Remarks|
|--------------|-------|
|u|a URL object|

_returns: an InetAddress representing the host IP address._

#### hashCode
```csharp
Oracle.Java.net.URLStreamHandler.hashCode(Oracle.Java.net.URL)
```
Provides the default hash calculation.May be overidden by handlers for other protocols that have different requirements for hashCode calculation.

|Parameter Name|Remarks|
|--------------|-------|
|u|a URL object|

_returns: an int suitable for hash table indexing_

#### hostsEqual
```csharp
Oracle.Java.net.URLStreamHandler.hostsEqual(Oracle.Java.net.URL,Oracle.Java.net.URL)
```
Compares the host components of two URLs.

|Parameter Name|Remarks|
|--------------|-------|
|u1|the URL of the first host to compare|
|u2|the URL of the second host to compare|

_returns: true if and only if they are equal, false otherwise._

#### openConnection
```csharp
Oracle.Java.net.URLStreamHandler.openConnection(Oracle.Java.net.URL,Oracle.Java.net.Proxy)
```
Same as openConnection(URL), except that the connection will be made through the specified proxy; Protocol handlers that do not support proxying will ignore the proxy parameter and make a normal connection.Calling this method preempts the system's default ProxySelector settings.

|Parameter Name|Remarks|
|--------------|-------|
|u|the URL that this connects to.|
|p|the proxy through which the connection will be made.If direct connection is desired, Proxy.NO_PROXY should be specified.|

_returns: a URLConnection object for the URL._

#### parseURL
```csharp
Oracle.Java.net.URLStreamHandler.parseURL(Oracle.Java.net.URL,System.String,System.Int32,System.Int32)
```
Parses the string representation of a URL into a URL object.
 If there is any inherited context, then it has already been copied into the URL argument.

 The parseURL method of URLStreamHandler parses the string representation as if it were an http specification.Most URL protocol families have a similar parsing. A stream protocol handler for a protocol that has a different syntax must override this routine.

|Parameter Name|Remarks|
|--------------|-------|
|u|the URL to receive the result of parsing the spec.|
|spec|the String representing the URL that must be parsed.|
|start|the character index at which to begin parsing. This is just past the ':' (if there is one) that specifies the determination of the protocol name.|
|limit|the character position to stop parsing at. This is the end of the string or the position of the "#" character, if present.All information after the sharp sign indicates an anchor.|


#### sameFile
```csharp
Oracle.Java.net.URLStreamHandler.sameFile(Oracle.Java.net.URL,Oracle.Java.net.URL)
```
Compare two urls to see whether they refer to the same file, i.e., having the same protocol, host, port, and path.This method requires that none of its arguments is null. This is guaranteed by the fact that it is only called indirectly by java.net.URL class.

|Parameter Name|Remarks|
|--------------|-------|
|u1|a URL object|
|u2|a URL object|

_returns: true if u1 and u2 refer to the same file_

#### setURL
```csharp
Oracle.Java.net.URLStreamHandler.setURL(Oracle.Java.net.URL,System.String,System.String,System.Int32,System.String,System.String)
```
Sets the fields of the URL argument to the indicated values.Only classes derived from URLStreamHandler are supposed to be able to call the set method on a URL.

|Parameter Name|Remarks|
|--------------|-------|
|u|the URL to modify.|
|protocol|the protocol name.This value is ignored since 1.2.|
|host|the remote host value for the URL.|
|port|the port on the remote machine.|
|file|the file.|
|ref|the reference.|


#### toExternalForm
```csharp
Oracle.Java.net.URLStreamHandler.toExternalForm(Oracle.Java.net.URL)
```
Converts a URL of a specific protocol to a String.

|Parameter Name|Remarks|
|--------------|-------|
|u|the URL.|

_returns: a string representation of the URL argument._




