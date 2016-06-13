---
title: lib_wikijob
---

# lib_wikijob
_namespace: [ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL](N-ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL.html)_

--
 
 DROP TABLE IF EXISTS `lib_wikijob`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `lib_wikijob` (
 `job_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
 `job_cmd` varbinary(60) NOT NULL DEFAULT '',
 `job_namespace` int(11) NOT NULL,
 `job_title` varbinary(255) NOT NULL,
 `job_timestamp` varbinary(14) DEFAULT NULL,
 `job_params` blob NOT NULL,
 `job_random` int(10) unsigned NOT NULL DEFAULT '0',
 `job_attempts` int(10) unsigned NOT NULL DEFAULT '0',
 `job_token` varbinary(32) NOT NULL DEFAULT '',
 `job_token_timestamp` varbinary(14) DEFAULT NULL,
 `job_sha1` varbinary(32) NOT NULL DEFAULT '',
 PRIMARY KEY (`job_id`),
 KEY `job_sha1` (`job_sha1`),
 KEY `job_cmd_token` (`job_cmd`,`job_token`,`job_random`),
 KEY `job_cmd_token_id` (`job_cmd`,`job_token`,`job_id`),
 KEY `job_cmd` (`job_cmd`,`job_namespace`,`job_title`,`job_params`(128)),
 KEY `job_timestamp` (`job_timestamp`)
 ) ENGINE=InnoDB DEFAULT CHARSET=binary;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --




