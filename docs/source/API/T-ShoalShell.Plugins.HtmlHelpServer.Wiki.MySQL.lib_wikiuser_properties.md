---
title: lib_wikiuser_properties
---

# lib_wikiuser_properties
_namespace: [ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL](N-ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL.html)_

--
 
 DROP TABLE IF EXISTS `lib_wikiuser_properties`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `lib_wikiuser_properties` (
 `up_user` int(11) NOT NULL,
 `up_property` varbinary(255) NOT NULL,
 `up_value` blob,
 UNIQUE KEY `user_properties_user_property` (`up_user`,`up_property`),
 KEY `user_properties_property` (`up_property`)
 ) ENGINE=InnoDB DEFAULT CHARSET=binary;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --




