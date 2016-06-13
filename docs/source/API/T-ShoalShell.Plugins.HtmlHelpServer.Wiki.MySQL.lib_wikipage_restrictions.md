---
title: lib_wikipage_restrictions
---

# lib_wikipage_restrictions
_namespace: [ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL](N-ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL.html)_

--
 
 DROP TABLE IF EXISTS `lib_wikipage_restrictions`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `lib_wikipage_restrictions` (
 `pr_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
 `pr_page` int(11) NOT NULL,
 `pr_type` varbinary(60) NOT NULL,
 `pr_level` varbinary(60) NOT NULL,
 `pr_cascade` tinyint(4) NOT NULL,
 `pr_user` int(11) DEFAULT NULL,
 `pr_expiry` varbinary(14) DEFAULT NULL,
 PRIMARY KEY (`pr_id`),
 UNIQUE KEY `pr_pagetype` (`pr_page`,`pr_type`),
 KEY `pr_typelevel` (`pr_type`,`pr_level`),
 KEY `pr_level` (`pr_level`),
 KEY `pr_cascade` (`pr_cascade`)
 ) ENGINE=InnoDB DEFAULT CHARSET=binary;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --




