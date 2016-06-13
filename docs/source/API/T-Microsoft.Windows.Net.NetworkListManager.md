---
title: NetworkListManager
---

# NetworkListManager
_namespace: [Microsoft.Windows.Net](N-Microsoft.Windows.Net.html)_

Provides access to objects that represent networks and network connections.

### Methods

#### GetNetwork
```csharp
Microsoft.Windows.Net.NetworkListManager.GetNetwork(System.Guid)
```
Retrieves the @"T:Microsoft.Windows.Net.Network" identified by the specified network identifier.

|Parameter Name|Remarks|
|--------------|-------|
|networkId|
 A @"T:System.Guid" that specifies the unique identifier for the network.
 |

_returns: 
 The @"T:Microsoft.Windows.Net.Network" that represents the network identified by the identifier.
 _

#### GetNetworkConnection
```csharp
Microsoft.Windows.Net.NetworkListManager.GetNetworkConnection(System.Guid)
```
Retrieves the @"T:Microsoft.Windows.Net.NetworkConnection" identified by the specified connection identifier.

|Parameter Name|Remarks|
|--------------|-------|
|networkConnectionId|
 A @"T:System.Guid" that specifies the unique identifier for the network connection.
 |

_returns: 
 The @"T:Microsoft.Windows.Net.NetworkConnection" identified by the specified identifier.
 _

#### GetNetworkConnections
```csharp
Microsoft.Windows.Net.NetworkListManager.GetNetworkConnections
```
Retrieves a collection of @"T:Microsoft.Windows.Net.NetworkConnection" objects that represent the connections for this machine.
_returns: 
 A @"T:Microsoft.Windows.Net.NetworkConnectionCollection" containing the network connections.
 _

#### GetNetworks
```csharp
Microsoft.Windows.Net.NetworkListManager.GetNetworks(Microsoft.Windows.Net.NetworkConnectivityLevels)
```
Retrieves a collection of @"T:Microsoft.Windows.Net.Network" objects that represent the networks defined for this machine.

|Parameter Name|Remarks|
|--------------|-------|
|level|
 The @"T:Microsoft.Windows.Net.NetworkConnectivityLevels" that specify the connectivity level of the returned @"T:Microsoft.Windows.Net.Network" objects.
 |

_returns: 
 A @"T:Microsoft.Windows.Net.NetworkCollection" of @"T:Microsoft.Windows.Net.Network" objects.
 _



### Properties

#### Connectivity
Gets the connectivity state of this machine.
#### IsConnected
Gets a value that indicates whether this machine 
 has network connectivity.
#### IsConnectedToInternet
Gets a value that indicates whether this machine 
 has Internet connectivity.

