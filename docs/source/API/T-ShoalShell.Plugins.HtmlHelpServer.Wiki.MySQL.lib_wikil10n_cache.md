---
title: lib_wikil10n_cache
---

# lib_wikil10n_cache
_namespace: [ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL](N-ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL.html)_

--
 
 DROP TABLE IF EXISTS `lib_wikil10n_cache`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `lib_wikil10n_cache` (
 `lc_lang` varbinary(32) NOT NULL,
 `lc_key` varbinary(255) NOT NULL,
 `lc_value` mediumblob NOT NULL,
 KEY `lc_lang_key` (`lc_lang`,`lc_key`)
 ) ENGINE=InnoDB DEFAULT CHARSET=binary;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --




