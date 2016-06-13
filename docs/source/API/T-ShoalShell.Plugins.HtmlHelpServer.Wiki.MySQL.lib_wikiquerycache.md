---
title: lib_wikiquerycache
---

# lib_wikiquerycache
_namespace: [ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL](N-ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL.html)_

--
 
 DROP TABLE IF EXISTS `lib_wikiquerycache`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `lib_wikiquerycache` (
 `qc_type` varbinary(32) NOT NULL,
 `qc_value` int(10) unsigned NOT NULL DEFAULT '0',
 `qc_namespace` int(11) NOT NULL DEFAULT '0',
 `qc_title` varbinary(255) NOT NULL DEFAULT '',
 KEY `qc_type` (`qc_type`,`qc_value`)
 ) ENGINE=InnoDB DEFAULT CHARSET=binary;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --




