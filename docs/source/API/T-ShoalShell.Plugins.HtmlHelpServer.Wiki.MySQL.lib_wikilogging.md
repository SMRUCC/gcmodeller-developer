---
title: lib_wikilogging
---

# lib_wikilogging
_namespace: [ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL](N-ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL.html)_

--
 
 DROP TABLE IF EXISTS `lib_wikilogging`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `lib_wikilogging` (
 `log_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
 `log_type` varbinary(32) NOT NULL DEFAULT '',
 `log_action` varbinary(32) NOT NULL DEFAULT '',
 `log_timestamp` binary(14) NOT NULL DEFAULT '19700101000000',
 `log_user` int(10) unsigned NOT NULL DEFAULT '0',
 `log_user_text` varbinary(255) NOT NULL DEFAULT '',
 `log_namespace` int(11) NOT NULL DEFAULT '0',
 `log_title` varbinary(255) NOT NULL DEFAULT '',
 `log_page` int(10) unsigned DEFAULT NULL,
 `log_comment` varbinary(767) NOT NULL DEFAULT '',
 `log_params` blob NOT NULL,
 `log_deleted` tinyint(3) unsigned NOT NULL DEFAULT '0',
 PRIMARY KEY (`log_id`),
 KEY `type_time` (`log_type`,`log_timestamp`),
 KEY `user_time` (`log_user`,`log_timestamp`),
 KEY `page_time` (`log_namespace`,`log_title`,`log_timestamp`),
 KEY `times` (`log_timestamp`),
 KEY `log_user_type_time` (`log_user`,`log_type`,`log_timestamp`),
 KEY `log_page_id_time` (`log_page`,`log_timestamp`),
 KEY `type_action` (`log_type`,`log_action`,`log_timestamp`),
 KEY `log_user_text_type_time` (`log_user_text`,`log_type`,`log_timestamp`),
 KEY `log_user_text_time` (`log_user_text`,`log_timestamp`)
 ) ENGINE=InnoDB DEFAULT CHARSET=binary;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --




