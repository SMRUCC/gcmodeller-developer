---
title: lib_wikilog_search
---

# lib_wikilog_search
_namespace: [ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL](N-ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL.html)_

--
 
 DROP TABLE IF EXISTS `lib_wikilog_search`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `lib_wikilog_search` (
 `ls_field` varbinary(32) NOT NULL,
 `ls_value` varbinary(255) NOT NULL,
 `ls_log_id` int(10) unsigned NOT NULL DEFAULT '0',
 UNIQUE KEY `ls_field_val` (`ls_field`,`ls_value`,`ls_log_id`),
 KEY `ls_log_id` (`ls_log_id`)
 ) ENGINE=InnoDB DEFAULT CHARSET=binary;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --




