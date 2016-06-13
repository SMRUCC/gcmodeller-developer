---
title: lib_wikichange_tag
---

# lib_wikichange_tag
_namespace: [ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL](N-ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL.html)_

--
 
 DROP TABLE IF EXISTS `lib_wikichange_tag`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `lib_wikichange_tag` (
 `ct_rc_id` int(11) DEFAULT NULL,
 `ct_log_id` int(11) DEFAULT NULL,
 `ct_rev_id` int(11) DEFAULT NULL,
 `ct_tag` varbinary(255) NOT NULL,
 `ct_params` blob,
 UNIQUE KEY `change_tag_rc_tag` (`ct_rc_id`,`ct_tag`),
 UNIQUE KEY `change_tag_log_tag` (`ct_log_id`,`ct_tag`),
 UNIQUE KEY `change_tag_rev_tag` (`ct_rev_id`,`ct_tag`),
 KEY `change_tag_tag_id` (`ct_tag`,`ct_rc_id`,`ct_rev_id`,`ct_log_id`)
 ) ENGINE=InnoDB DEFAULT CHARSET=binary;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --




