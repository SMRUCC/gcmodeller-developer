---
title: lib_wikiquerycache_info
---

# lib_wikiquerycache_info
_namespace: [ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL](N-ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL.html)_

--
 
 DROP TABLE IF EXISTS `lib_wikiquerycache_info`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `lib_wikiquerycache_info` (
 `qci_type` varbinary(32) NOT NULL DEFAULT '',
 `qci_timestamp` binary(14) NOT NULL DEFAULT '19700101000000',
 UNIQUE KEY `qci_type` (`qci_type`)
 ) ENGINE=InnoDB DEFAULT CHARSET=binary;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --




