---
title: lib_wikiquerycachetwo
---

# lib_wikiquerycachetwo
_namespace: [ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL](N-ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL.html)_

--
 
 DROP TABLE IF EXISTS `lib_wikiquerycachetwo`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `lib_wikiquerycachetwo` (
 `qcc_type` varbinary(32) NOT NULL,
 `qcc_value` int(10) unsigned NOT NULL DEFAULT '0',
 `qcc_namespace` int(11) NOT NULL DEFAULT '0',
 `qcc_title` varbinary(255) NOT NULL DEFAULT '',
 `qcc_namespacetwo` int(11) NOT NULL DEFAULT '0',
 `qcc_titletwo` varbinary(255) NOT NULL DEFAULT '',
 KEY `qcc_type` (`qcc_type`,`qcc_value`),
 KEY `qcc_title` (`qcc_type`,`qcc_namespace`,`qcc_title`),
 KEY `qcc_titletwo` (`qcc_type`,`qcc_namespacetwo`,`qcc_titletwo`)
 ) ENGINE=InnoDB DEFAULT CHARSET=binary;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --




