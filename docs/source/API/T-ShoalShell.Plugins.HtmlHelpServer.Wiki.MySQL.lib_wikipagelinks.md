---
title: lib_wikipagelinks
---

# lib_wikipagelinks
_namespace: [ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL](N-ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL.html)_

--
 
 DROP TABLE IF EXISTS `lib_wikipagelinks`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `lib_wikipagelinks` (
 `pl_from` int(10) unsigned NOT NULL DEFAULT '0',
 `pl_from_namespace` int(11) NOT NULL DEFAULT '0',
 `pl_namespace` int(11) NOT NULL DEFAULT '0',
 `pl_title` varbinary(255) NOT NULL DEFAULT '',
 UNIQUE KEY `pl_from` (`pl_from`,`pl_namespace`,`pl_title`),
 KEY `pl_namespace` (`pl_namespace`,`pl_title`,`pl_from`),
 KEY `pl_backlinks_namespace` (`pl_namespace`,`pl_title`,`pl_from_namespace`,`pl_from`)
 ) ENGINE=InnoDB DEFAULT CHARSET=binary;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --




