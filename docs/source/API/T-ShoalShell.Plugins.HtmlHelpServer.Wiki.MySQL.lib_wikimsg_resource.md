---
title: lib_wikimsg_resource
---

# lib_wikimsg_resource
_namespace: [ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL](N-ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL.html)_

--
 
 DROP TABLE IF EXISTS `lib_wikimsg_resource`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `lib_wikimsg_resource` (
 `mr_resource` varbinary(255) NOT NULL,
 `mr_lang` varbinary(32) NOT NULL,
 `mr_blob` mediumblob NOT NULL,
 `mr_timestamp` binary(14) NOT NULL,
 UNIQUE KEY `mr_resource_lang` (`mr_resource`,`mr_lang`)
 ) ENGINE=InnoDB DEFAULT CHARSET=binary;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --




