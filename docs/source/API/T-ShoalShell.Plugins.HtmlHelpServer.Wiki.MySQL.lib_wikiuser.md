---
title: lib_wikiuser
---

# lib_wikiuser
_namespace: [ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL](N-ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL.html)_

--
 
 DROP TABLE IF EXISTS `lib_wikiuser`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `lib_wikiuser` (
 `user_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
 `user_name` varbinary(255) NOT NULL DEFAULT '',
 `user_real_name` varbinary(255) NOT NULL DEFAULT '',
 `user_password` tinyblob NOT NULL,
 `user_newpassword` tinyblob NOT NULL,
 `user_newpass_time` binary(14) DEFAULT NULL,
 `user_email` tinyblob NOT NULL,
 `user_touched` binary(14) NOT NULL DEFAULT '\0\0\0\0\0\0\0\0\0\0\0\0\0\0',
 `user_token` binary(32) NOT NULL DEFAULT '\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0',
 `user_email_authenticated` binary(14) DEFAULT NULL,
 `user_email_token` binary(32) DEFAULT NULL,
 `user_email_token_expires` binary(14) DEFAULT NULL,
 `user_registration` binary(14) DEFAULT NULL,
 `user_editcount` int(11) DEFAULT NULL,
 `user_password_expires` varbinary(14) DEFAULT NULL,
 PRIMARY KEY (`user_id`),
 UNIQUE KEY `user_name` (`user_name`),
 KEY `user_email_token` (`user_email_token`),
 KEY `user_email` (`user_email`(50))
 ) ENGINE=InnoDB DEFAULT CHARSET=binary;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --




