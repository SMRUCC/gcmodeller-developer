---
title: lib_wikitemplatelinks
---

# lib_wikitemplatelinks
_namespace: [ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL](N-ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL.html)_

--
 
 DROP TABLE IF EXISTS `lib_wikitemplatelinks`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `lib_wikitemplatelinks` (
 `tl_from` int(10) unsigned NOT NULL DEFAULT '0',
 `tl_from_namespace` int(11) NOT NULL DEFAULT '0',
 `tl_namespace` int(11) NOT NULL DEFAULT '0',
 `tl_title` varbinary(255) NOT NULL DEFAULT '',
 UNIQUE KEY `tl_from` (`tl_from`,`tl_namespace`,`tl_title`),
 KEY `tl_namespace` (`tl_namespace`,`tl_title`,`tl_from`),
 KEY `tl_backlinks_namespace` (`tl_namespace`,`tl_title`,`tl_from_namespace`,`tl_from`)
 ) ENGINE=InnoDB DEFAULT CHARSET=binary;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --




