---
title: lib_wikipage_props
---

# lib_wikipage_props
_namespace: [ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL](N-ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL.html)_

--
 
 DROP TABLE IF EXISTS `lib_wikipage_props`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `lib_wikipage_props` (
 `pp_page` int(11) NOT NULL,
 `pp_propname` varbinary(60) NOT NULL,
 `pp_value` blob NOT NULL,
 `pp_sortkey` float DEFAULT NULL,
 UNIQUE KEY `pp_page_propname` (`pp_page`,`pp_propname`),
 UNIQUE KEY `pp_propname_page` (`pp_propname`,`pp_page`),
 UNIQUE KEY `pp_propname_sortkey_page` (`pp_propname`,`pp_sortkey`,`pp_page`)
 ) ENGINE=InnoDB DEFAULT CHARSET=binary;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --




