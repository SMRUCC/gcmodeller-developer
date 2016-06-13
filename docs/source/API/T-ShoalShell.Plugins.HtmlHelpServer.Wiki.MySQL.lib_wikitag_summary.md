---
title: lib_wikitag_summary
---

# lib_wikitag_summary
_namespace: [ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL](N-ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL.html)_

--
 
 DROP TABLE IF EXISTS `lib_wikitag_summary`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `lib_wikitag_summary` (
 `ts_rc_id` int(11) DEFAULT NULL,
 `ts_log_id` int(11) DEFAULT NULL,
 `ts_rev_id` int(11) DEFAULT NULL,
 `ts_tags` blob NOT NULL,
 UNIQUE KEY `tag_summary_rc_id` (`ts_rc_id`),
 UNIQUE KEY `tag_summary_log_id` (`ts_log_id`),
 UNIQUE KEY `tag_summary_rev_id` (`ts_rev_id`)
 ) ENGINE=InnoDB DEFAULT CHARSET=binary;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --




