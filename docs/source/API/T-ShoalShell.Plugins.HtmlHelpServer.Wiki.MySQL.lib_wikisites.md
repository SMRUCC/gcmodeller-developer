---
title: lib_wikisites
---

# lib_wikisites
_namespace: [ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL](N-ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL.html)_

--
 
 DROP TABLE IF EXISTS `lib_wikisites`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `lib_wikisites` (
 `site_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
 `site_global_key` varbinary(32) NOT NULL,
 `site_type` varbinary(32) NOT NULL,
 `site_group` varbinary(32) NOT NULL,
 `site_source` varbinary(32) NOT NULL,
 `site_language` varbinary(32) NOT NULL,
 `site_protocol` varbinary(32) NOT NULL,
 `site_domain` varbinary(255) NOT NULL,
 `site_data` blob NOT NULL,
 `site_forward` tinyint(1) NOT NULL,
 `site_config` blob NOT NULL,
 PRIMARY KEY (`site_id`),
 UNIQUE KEY `sites_global_key` (`site_global_key`),
 KEY `sites_type` (`site_type`),
 KEY `sites_group` (`site_group`),
 KEY `sites_source` (`site_source`),
 KEY `sites_language` (`site_language`),
 KEY `sites_protocol` (`site_protocol`),
 KEY `sites_domain` (`site_domain`),
 KEY `sites_forward` (`site_forward`)
 ) ENGINE=InnoDB DEFAULT CHARSET=binary;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --




