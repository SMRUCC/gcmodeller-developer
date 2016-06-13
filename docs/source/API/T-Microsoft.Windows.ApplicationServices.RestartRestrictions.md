---
title: RestartRestrictions
---

# RestartRestrictions
_namespace: [Microsoft.Windows.ApplicationServices](N-Microsoft.Windows.ApplicationServices.html)_

Specifies the conditions when Windows Error Reporting
 should not restart an application that has registered
 for automatic restart.



### Properties

#### None
Always restart the application.
#### NotOnCrash
Do not restart when the application has crashed.
#### NotOnHang
Do not restart when the application is hung.
#### NotOnPatch
Do not restart when the application is terminated
 due to a system update.
#### NotOnReboot
Do not restart when the application is terminated 
 because of a system reboot.

