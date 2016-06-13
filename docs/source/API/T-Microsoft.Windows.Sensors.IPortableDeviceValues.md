---
title: IPortableDeviceValues
---

# IPortableDeviceValues
_namespace: [Microsoft.Windows.Sensors](N-Microsoft.Windows.Sensors.html)_

The nativeIPortableDeviceValues interface holds a collection of PROPERTYKEY/PropVariant pairs. 
 Values in the collection do not need to be all the same VARTYPE. Values are stored as key-value 
 pairs; each key must be unique in the collection. Clients can search for items by PROPERTYKEY 
 or zero-based index. Data values are stored as PropVariant structures. You can add or retrieve 
 values of any type by using the generic methods SetValue and GetValue, or you add items by using 
 the method specific to the type of data added.




