---
title: lib_wikiuser_former_groups
---

# lib_wikiuser_former_groups
_namespace: [ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL](N-ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL.html)_

--
 
 DROP TABLE IF EXISTS `lib_wikiuser_former_groups`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `lib_wikiuser_former_groups` (
 `ufg_user` int(10) unsigned NOT NULL DEFAULT '0',
 `ufg_group` varbinary(255) NOT NULL DEFAULT '',
 UNIQUE KEY `ufg_user_group` (`ufg_user`,`ufg_group`)
 ) ENGINE=InnoDB DEFAULT CHARSET=binary;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --




