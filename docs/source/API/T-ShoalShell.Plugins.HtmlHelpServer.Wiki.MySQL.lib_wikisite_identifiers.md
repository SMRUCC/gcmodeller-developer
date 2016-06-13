---
title: lib_wikisite_identifiers
---

# lib_wikisite_identifiers
_namespace: [ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL](N-ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL.html)_

--
 
 DROP TABLE IF EXISTS `lib_wikisite_identifiers`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `lib_wikisite_identifiers` (
 `si_site` int(10) unsigned NOT NULL,
 `si_type` varbinary(32) NOT NULL,
 `si_key` varbinary(32) NOT NULL,
 UNIQUE KEY `site_ids_type` (`si_type`,`si_key`),
 KEY `site_ids_site` (`si_site`),
 KEY `site_ids_key` (`si_key`)
 ) ENGINE=InnoDB DEFAULT CHARSET=binary;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --




