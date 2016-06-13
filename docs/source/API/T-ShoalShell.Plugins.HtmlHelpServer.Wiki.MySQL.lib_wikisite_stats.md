---
title: lib_wikisite_stats
---

# lib_wikisite_stats
_namespace: [ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL](N-ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL.html)_

--
 
 DROP TABLE IF EXISTS `lib_wikisite_stats`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `lib_wikisite_stats` (
 `ss_row_id` int(10) unsigned NOT NULL,
 `ss_total_edits` bigint(20) unsigned DEFAULT '0',
 `ss_good_articles` bigint(20) unsigned DEFAULT '0',
 `ss_total_pages` bigint(20) DEFAULT '-1',
 `ss_users` bigint(20) DEFAULT '-1',
 `ss_active_users` bigint(20) DEFAULT '-1',
 `ss_images` int(11) DEFAULT '0',
 UNIQUE KEY `ss_row_id` (`ss_row_id`)
 ) ENGINE=InnoDB DEFAULT CHARSET=binary;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --




