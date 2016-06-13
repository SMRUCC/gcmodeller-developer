---
title: lib_wikilanglinks
---

# lib_wikilanglinks
_namespace: [ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL](N-ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL.html)_

--
 
 DROP TABLE IF EXISTS `lib_wikilanglinks`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `lib_wikilanglinks` (
 `ll_from` int(10) unsigned NOT NULL DEFAULT '0',
 `ll_lang` varbinary(20) NOT NULL DEFAULT '',
 `ll_title` varbinary(255) NOT NULL DEFAULT '',
 UNIQUE KEY `ll_from` (`ll_from`,`ll_lang`),
 KEY `ll_lang` (`ll_lang`,`ll_title`)
 ) ENGINE=InnoDB DEFAULT CHARSET=binary;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --




