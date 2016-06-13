---
title: lib_wikiiwlinks
---

# lib_wikiiwlinks
_namespace: [ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL](N-ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL.html)_

--
 
 DROP TABLE IF EXISTS `lib_wikiiwlinks`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `lib_wikiiwlinks` (
 `iwl_from` int(10) unsigned NOT NULL DEFAULT '0',
 `iwl_prefix` varbinary(20) NOT NULL DEFAULT '',
 `iwl_title` varbinary(255) NOT NULL DEFAULT '',
 UNIQUE KEY `iwl_from` (`iwl_from`,`iwl_prefix`,`iwl_title`),
 KEY `iwl_prefix_title_from` (`iwl_prefix`,`iwl_title`,`iwl_from`),
 KEY `iwl_prefix_from_title` (`iwl_prefix`,`iwl_from`,`iwl_title`)
 ) ENGINE=InnoDB DEFAULT CHARSET=binary;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --




