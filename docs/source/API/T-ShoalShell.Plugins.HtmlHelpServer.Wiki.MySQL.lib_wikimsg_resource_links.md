---
title: lib_wikimsg_resource_links
---

# lib_wikimsg_resource_links
_namespace: [ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL](N-ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL.html)_

--
 
 DROP TABLE IF EXISTS `lib_wikimsg_resource_links`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `lib_wikimsg_resource_links` (
 `mrl_resource` varbinary(255) NOT NULL,
 `mrl_message` varbinary(255) NOT NULL,
 UNIQUE KEY `mrl_message_resource` (`mrl_message`,`mrl_resource`)
 ) ENGINE=InnoDB DEFAULT CHARSET=binary;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --




