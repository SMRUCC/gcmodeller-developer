---
title: lib_wikiuser_newtalk
---

# lib_wikiuser_newtalk
_namespace: [ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL](N-ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL.html)_

--
 
 DROP TABLE IF EXISTS `lib_wikiuser_newtalk`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `lib_wikiuser_newtalk` (
 `user_id` int(10) unsigned NOT NULL DEFAULT '0',
 `user_ip` varbinary(40) NOT NULL DEFAULT '',
 `user_last_timestamp` varbinary(14) DEFAULT NULL,
 KEY `user_id` (`user_id`),
 KEY `user_ip` (`user_ip`)
 ) ENGINE=InnoDB DEFAULT CHARSET=binary;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --




