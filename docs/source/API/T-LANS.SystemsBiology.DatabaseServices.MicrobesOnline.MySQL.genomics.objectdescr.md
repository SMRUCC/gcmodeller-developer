---
title: objectdescr
---

# objectdescr
_namespace: [LANS.SystemsBiology.DatabaseServices.MicrobesOnline.MySQL.genomics](N-LANS.SystemsBiology.DatabaseServices.MicrobesOnline.MySQL.genomics.html)_

--
 
 DROP TABLE IF EXISTS `objectdescr`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `objectdescr` (
 `objectId` int(2) unsigned NOT NULL DEFAULT '0',
 `description` varchar(255) DEFAULT NULL,
 PRIMARY KEY (`objectId`)
 ) ENGINE=MyISAM DEFAULT CHARSET=latin1;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --




