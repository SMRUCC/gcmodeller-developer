---
title: lib_wikiipblocks
---

# lib_wikiipblocks
_namespace: [ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL](N-ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL.html)_

--
 
 DROP TABLE IF EXISTS `lib_wikiipblocks`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `lib_wikiipblocks` (
 `ipb_id` int(11) NOT NULL AUTO_INCREMENT,
 `ipb_address` tinyblob NOT NULL,
 `ipb_user` int(10) unsigned NOT NULL DEFAULT '0',
 `ipb_by` int(10) unsigned NOT NULL DEFAULT '0',
 `ipb_by_text` varbinary(255) NOT NULL DEFAULT '',
 `ipb_reason` varbinary(767) NOT NULL,
 `ipb_timestamp` binary(14) NOT NULL DEFAULT '\0\0\0\0\0\0\0\0\0\0\0\0\0\0',
 `ipb_auto` tinyint(1) NOT NULL DEFAULT '0',
 `ipb_anon_only` tinyint(1) NOT NULL DEFAULT '0',
 `ipb_create_account` tinyint(1) NOT NULL DEFAULT '1',
 `ipb_enable_autoblock` tinyint(1) NOT NULL DEFAULT '1',
 `ipb_expiry` varbinary(14) NOT NULL DEFAULT '',
 `ipb_range_start` tinyblob NOT NULL,
 `ipb_range_end` tinyblob NOT NULL,
 `ipb_deleted` tinyint(1) NOT NULL DEFAULT '0',
 `ipb_block_email` tinyint(1) NOT NULL DEFAULT '0',
 `ipb_allow_usertalk` tinyint(1) NOT NULL DEFAULT '0',
 `ipb_parent_block_id` int(11) DEFAULT NULL,
 PRIMARY KEY (`ipb_id`),
 UNIQUE KEY `ipb_address` (`ipb_address`(255),`ipb_user`,`ipb_auto`,`ipb_anon_only`),
 KEY `ipb_user` (`ipb_user`),
 KEY `ipb_range` (`ipb_range_start`(8),`ipb_range_end`(8)),
 KEY `ipb_timestamp` (`ipb_timestamp`),
 KEY `ipb_expiry` (`ipb_expiry`),
 KEY `ipb_parent_block_id` (`ipb_parent_block_id`)
 ) ENGINE=InnoDB DEFAULT CHARSET=binary;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --




