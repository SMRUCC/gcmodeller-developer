---
title: PGMap
---

# PGMap
_namespace: [LANS.SystemsBiology.Assembly.DOMINE.Tables](N-LANS.SystemsBiology.Assembly.DOMINE.Tables.html)_



> 
>  CREATE TABLE PGMAP
>  (
>  DomainAcc char(7),
>  GoTerm char(10),
>  PRIMARY KEY (DomainAcc, GoTerm),
>  FOREIGN KEY (DomainAcc) references PFAM(DomainAcc),
>  FOREIGN KEY (GoTerm) references GO(GoTerm)
>  );
>  



