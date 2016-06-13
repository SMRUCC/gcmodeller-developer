---
title: RedirectionCapability
---

# RedirectionCapability
_namespace: [Microsoft.Windows.Shell](N-Microsoft.Windows.Shell.html)_

Specifies the redirection capabilities for known folders.



### Properties

#### AllowAll
The known folder can be redirected.
#### DenyAll
Redirection is not allowed.
#### DenyPermissions
The folder cannot be redirected because the calling 
 application does not have sufficient permissions.
#### DenyPolicy
The folder cannot be redirected because the policy 
 prohibits redirecting this folder.
#### DenyPolicyRedirected
The folder cannot be redirected because it is 
 already redirected by group policy.
#### None
Redirection capability is unknown.
#### Redirectable
The known folder can be redirected. 
 Currently, redirection exists only for 
 common and user folders; fixed and virtual folders 
 cannot be redirected.

