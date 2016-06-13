---
title: IPortableDevicePropVariantCollection
---

# IPortableDevicePropVariantCollection
_namespace: [Microsoft.Windows.Sensors](N-Microsoft.Windows.Sensors.html)_

Holds a collection of PropVariant values of the same VARTYPE. The VARTYPE of the first item 
 that is added to the collection determines the VARTYPE of the collection. An attempt to add 
 an item of a different VARTYPE may fail if the PropVariant value cannot be changed to the 
 collection?s current VARTYPE. To change the VARTYPE of the collection manually, call ChangeType




