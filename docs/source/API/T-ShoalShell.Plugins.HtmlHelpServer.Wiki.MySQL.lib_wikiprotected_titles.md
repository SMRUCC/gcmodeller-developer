---
title: lib_wikiprotected_titles
---

# lib_wikiprotected_titles
_namespace: [ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL](N-ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL.html)_

--
 
 DROP TABLE IF EXISTS `lib_wikiprotected_titles`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `lib_wikiprotected_titles` (
 `pt_namespace` int(11) NOT NULL,
 `pt_title` varbinary(255) NOT NULL,
 `pt_user` int(10) unsigned NOT NULL,
 `pt_reason` varbinary(767) DEFAULT NULL,
 `pt_timestamp` binary(14) NOT NULL,
 `pt_expiry` varbinary(14) NOT NULL DEFAULT '',
 `pt_create_perm` varbinary(60) NOT NULL,
 UNIQUE KEY `pt_namespace_title` (`pt_namespace`,`pt_title`),
 KEY `pt_timestamp` (`pt_timestamp`)
 ) ENGINE=InnoDB DEFAULT CHARSET=binary;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --




