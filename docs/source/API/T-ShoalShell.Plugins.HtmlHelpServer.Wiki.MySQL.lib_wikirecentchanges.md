---
title: lib_wikirecentchanges
---

# lib_wikirecentchanges
_namespace: [ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL](N-ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL.html)_

--
 
 DROP TABLE IF EXISTS `lib_wikirecentchanges`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `lib_wikirecentchanges` (
 `rc_id` int(11) NOT NULL AUTO_INCREMENT,
 `rc_timestamp` varbinary(14) NOT NULL DEFAULT '',
 `rc_user` int(10) unsigned NOT NULL DEFAULT '0',
 `rc_user_text` varbinary(255) NOT NULL,
 `rc_namespace` int(11) NOT NULL DEFAULT '0',
 `rc_title` varbinary(255) NOT NULL DEFAULT '',
 `rc_comment` varbinary(767) NOT NULL DEFAULT '',
 `rc_minor` tinyint(3) unsigned NOT NULL DEFAULT '0',
 `rc_bot` tinyint(3) unsigned NOT NULL DEFAULT '0',
 `rc_new` tinyint(3) unsigned NOT NULL DEFAULT '0',
 `rc_cur_id` int(10) unsigned NOT NULL DEFAULT '0',
 `rc_this_oldid` int(10) unsigned NOT NULL DEFAULT '0',
 `rc_last_oldid` int(10) unsigned NOT NULL DEFAULT '0',
 `rc_type` tinyint(3) unsigned NOT NULL DEFAULT '0',
 `rc_source` varbinary(16) NOT NULL DEFAULT '',
 `rc_patrolled` tinyint(3) unsigned NOT NULL DEFAULT '0',
 `rc_ip` varbinary(40) NOT NULL DEFAULT '',
 `rc_old_len` int(11) DEFAULT NULL,
 `rc_new_len` int(11) DEFAULT NULL,
 `rc_deleted` tinyint(3) unsigned NOT NULL DEFAULT '0',
 `rc_logid` int(10) unsigned NOT NULL DEFAULT '0',
 `rc_log_type` varbinary(255) DEFAULT NULL,
 `rc_log_action` varbinary(255) DEFAULT NULL,
 `rc_params` blob,
 PRIMARY KEY (`rc_id`),
 KEY `rc_timestamp` (`rc_timestamp`),
 KEY `rc_namespace_title` (`rc_namespace`,`rc_title`),
 KEY `rc_cur_id` (`rc_cur_id`),
 KEY `new_name_timestamp` (`rc_new`,`rc_namespace`,`rc_timestamp`),
 KEY `rc_ip` (`rc_ip`),
 KEY `rc_ns_usertext` (`rc_namespace`,`rc_user_text`),
 KEY `rc_user_text` (`rc_user_text`,`rc_timestamp`)
 ) ENGINE=InnoDB DEFAULT CHARSET=binary;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --




