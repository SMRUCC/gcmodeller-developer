---
title: lib_wikiimagelinks
---

# lib_wikiimagelinks
_namespace: [ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL](N-ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL.html)_

--
 
 DROP TABLE IF EXISTS `lib_wikiimagelinks`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `lib_wikiimagelinks` (
 `il_from` int(10) unsigned NOT NULL DEFAULT '0',
 `il_from_namespace` int(11) NOT NULL DEFAULT '0',
 `il_to` varbinary(255) NOT NULL DEFAULT '',
 UNIQUE KEY `il_from` (`il_from`,`il_to`),
 KEY `il_to` (`il_to`,`il_from`),
 KEY `il_backlinks_namespace` (`il_to`,`il_from_namespace`,`il_from`)
 ) ENGINE=InnoDB DEFAULT CHARSET=binary;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --




