import { createClient } from '@libsql/client'

const client = createClient({
  url: "libsql://technologyline-database-trimeas.turso.io",
  authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MDg2MzI2NDksImlkIjoiY2Y0YzhiODktZDE3Yi0xMWVlLWEyYTctOGU4YjRkMDEwY2ViIn0.2SH_T4fnPJIT4V5RV8NT9s2peRX19ArtmnY4Kp4bmrMg1ZkyKFltOUUz6-RfkoD9Ams6Zh9Sbtq-pOIaltoGBQ",
})

const createTableConcepts = `
CREATE TABLE concepts (
  id INTEGER NOT NULL PRIMARY KEY,
  name TEXT COLLATE NOCASE,
  type TEXT COLLATE NOCASE
);`

const data = [
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (1,26, 'Pacheco Dadin, Alvaro Maria', 'Roosevelt 2160 6º A Capital Fe', '1987/05/31', 'Argentino','Soltero', '32999209', 'Mensual', 'VENTAS', 'VENDEDOR 1/2 J', 10958.52, '20329992099', '07/01/2008', 'Realcolor', NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (2,152,'Ceballos, Clever Alejandro','TRELLES 2377','10/29/1979','Argentino','Soltero','27220122','Mensual','VENTAS','VENDEDOR 1/2 J','2111154','20272201227','11/06/2017','Realcolor','09/27/2018');`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (3,33,'Baello, Maricel Vanesa','Argerich 1475','11/21/1976','Argentino','casada','25733968','Mensual','VENTAS','VENDEDOR 1/2 J','11264.15','27257339683','08/01/2008','Realcolor',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (4,37,'Zaiontz, Joaquin Hernan','Roosevelt 2973 Pso 4 Dto 15','11/13/1977','Argentino','casado','25910558','Mensual','VENTAS','VENDEDOR J Comp','10958.52','20259105588','08/01/2008','Realcolor',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (5,31,'Ibarra, Analia Gisela','Adolfo Carranza 2173 PB Dto 1','02/12/1978','Argentino','soltero','26451253','Mensual','ADMINIS','ADMINIS 1/2 J','11213.2','27264512536','08/01/2008','Realcolor','10/31/2019');`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (6,54,'Sevilla, Emilio Gerardo','Ipela 796','03/16/1961','Argentino','casado','14600673','Mensual','MAESTR','MAESTRANZA 1/2 J','10754.81','27146006731','10/01/2009','Realcolor','03/04/2021');`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (7,53,'Lopez, Adrian','Laprida 1051','10/17/1986','Argentino','soltero','32660634','Mensual','MAESTR','MAESTRANZA 1/2 J','10795.52','20326606341','08/03/2009','Realcolor',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (8,79,'Ortiz, Ramon Alejandro','Briand 1321 San antonio de padua','01/02/1976','Argentino','soltero','25130800','Mensual','ADMINIS','ADMINIS Jcomp','11590.15','20251308005','06/07/2011','Realcolor',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (9,93,'Yzaurralde, Jairo Matias','Ipela 796','03/23/1994','Argentino','soltero','38142677','Mensual','VENTAS','VENDEDOR 1/2 J','10754.81','20381426778','06/01/2012',NULL,NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (10,95,'Garcia, Carlos Alberto','Pasaje las Indias 1050, C.A.B.A.','09/15/1967','Argentino','casado','18558074','Mensual','VENTAS','VENDEDOR J Comp','10958.52','20185580742','06/21/2012','Realcolor',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (11,118,'Yzaurralde, Vanesa Valeria','Bolivia 3115, Caseros, Prov Bs As','12/07/1978','Argentino','casada','27027420','Mensual','ADMINIS','ADMINIS 1/2 J','10907.6','27270274205','01/05/2015','Realcolor','03/04/2021');`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (12,120,'Marini, Gonzalo','Massenet 515, Hurlinghan, Prov Bs As','06/01/1979','Argentino','soltero','27416253','Mensual','VENTAS','VENDEDOR 1/2 J','10958.52','20274162539','03/03/2015','Realcolor','07/01/2021');`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (13,123,'Pettinato, Andrea Lorena','20 de junio 512, Francisco Alvarez, Bs As','03/23/1981','Argentino','casada','28799078','Mensual','VENTAS','VENDEDOR 1/2 J','10958.52','27287990788','06/01/2015',NULL,'06/11/2019');`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (14,127,'Del Rosario Peña, Raul Eduardo','Av San Juan 1560, 1 piso Dto B CABA','04/11/1981','Venezolano','soltero','95040284','Mensual','VENTAS','VENDEDOR 1/2 J','10958.52','23950402849','08/24/2015','Realcolor',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (15,137,'Glatzel, Yamila Daniela','Victor Hugo 2562 CABA','09/22/1983','Argentina','soltera','30496035','Mensual','VENTAS','VENDEDOR 1/2 J','10958.52','27304960359','01/08/2016',NULL,NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (16,140,'Pozzi, Aldo Felix Martin','Gabriela Mistral 3150 CABA','03/05/1976','Argentina','soltero','25529178','Mensual','VENTAS','VENDEDOR 1/2 J','23990','20255291786','04/12/2016','Realcolor','11/05/2018');`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (17,143,'Siffre, Karina Gabriela','Achega 3134 3B CABA','06/08/1975','Argentina','soltera','24979153','Mensual','VENTAS','VENDEDOR 1/2 J','36467','27249791534','09/01/2016','Realcolor','10/06/2020');`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (18,145,'Molina, Horacio Daniel','Gral Pico 1254, Avellaneda, BS AS','03/02/1984','Argentina','soltero','30535739','Mensual','MAESTR','MAESTRANZA 1/2 J','27311','20305357392','01/11/2017','Realcolor',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (19,146,'Sepulveda, Silva Sandra Carolina','Azcuenaga 1930, Bs As','08/22/1987','Colombiana','soltera','94740954','Mensual','ADMINIS','ADMINIS 1/2 J','21968.6','27947409544','01/23/2017','Realcolor','09/10/2018');`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (20,148,'Carbajal, Raul Eliseo','Bacacay 2860 2do piso dpto 7, Bs As','02/25/1973','Argentina','casado','23178244','Mensual','VENTAS','VENDEDOR 1/2 J',10.00,'20231782444','02/06/2017',NULL,'10/31/2018');`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (21,149,'Garcia Avila, Norma Estefany','Bernardo de Irygoyen 1136, CABA','09/21/1992','Venezolana','soltera','95668811','Mensual','ADMINIS','ADMINIS 1/2 J','27699.54','27956688111','05/01/2017','Realcolor','06/28/2019');`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (22,150,'Ibarra, Eliana Paola','Spilimbergo 2343, Ituzaingo Bs As','03/12/1996','Argentina','soltera','39562248','Mensual','VENTAS','VENDEDOR 1/2 J','57436','27395622485','05/19/2017','Realcolor',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (23,154,'Cordoba, Oscar David','misiones 34  piso 3 dep B balvanera Cap fed','09/19/1982','Colombiana','soltero','95412246','Mensual','VENTAS','VENDEDOR 1/2 J','57436','20954122469','09/14/2017','Realcolor',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (24,156,'Maionchi, Damiel Alejandro','MARTIN CORONADO 7595','01/30/1981','Argentina','CASADO','28596756','Mensual','MAESTR','MAESTRANZA 1/2 J','20719.15','20285967563','10/13/2017','Realcolor','06Jul');`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (25,155,'Lombardo, Walter Fabian','GIANNASTRACIO 3450','07/22/1991','Argentina','CASADO','36293516','Mensual','MAESTR','MAESTRANZA 1/2 J','20719.15','20362935165','10/06/2017','Realcolor','07/10/2018');`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (26,153,'Panuele, Gustavo Daniel','pampa 1624  el palomar bs as','02/01/1980','Argentina','soltero','27789380','Mensual','MAESTR','MAESTRANZA 1/2 J','56616','20277893801','12/19/2017','Realcolor',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (27,159,'Lopez Chavez, Wilmer','Federico Fernadez 6348','11/21/1986','boliviano','soltero','94004343','Mensual','MAESTR','MAESTRANZA 1/2 J','54116.01','20940043434','01/12/2018','Realcolor','04/30/2021');`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (28,160,'Bautista Torrez, David','jose ignacio rucci','07/30/1982','boliviano','casado','94138908','Mensual','MAESTR','MAESTRANZA 1/2 J','41790','20941389083','01/12/2018','Realcolor','10/09/2020');`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (29,161,'Ferreyra, Facundo Guillermo','baradero 1827  moron buenos aires','08/30/1987','Argentina','casado','33237462','Mensual','MAESTR','MAESTRANZA 1/2 J','70771','20332374622','02/28/2018','Realcolor',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (30,162,'Scarcella, Claudio','ARREGUI 6165','03/30/1990','Argentina','SOLTERO','35201748','Mensual','VENTAS','VENDEDOR 1/2 J','21111.54','20352017486','02/27/2018','Realcolor','08/02/2018');`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (31,164,'Rivero, Beatriz Cecilia','argerich  1441 merlo buenos aires','12/14/1977','Argentina','casada','35201748','Mensual','ADMINIS','ADMINIS 1/2 J','71538','27263379220','06/22/2018','Realcolor',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (32,166,'Buitron Diaz, Javier Morales','GUARDIA VIEJA 3420','03/29/1991','PERUANA','SOLTERO','95230889','Mensual','VENTAS','VENDEDOR J Comp','21111.54','20952308891','11/02/2017','Realcolor','07/27/2018');`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (33,167,'Giacomelli, Rizardo Marcelo','JORGE DE KAY 2978','08/18/1990','ARGENTINA','SOLTERO','35393503','Mensual','VENTAS','VENDEDOR 1/2 J','22071.16','20353935039','11/01/2017','Realcolor','09/27/2018');`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (34,3,'Fiasco Miliante, Daiana','Cervantes 1452 PB 2 CABA','11/17/1988','argentina','soltera','34142623','Mensual','VENTAS','VENDEDOR 1/2 J','71538','27341426230','07/04/2017','Linetechnology',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (35,2,'Fleitas, Santiago','TTE GRAL J.D.PERON 2511','06/09/1993','ARGENTINA','SOLTERO','37755555','Mensual','VENTAS','VENDEDOR 1/2J','57436.15','20377555555','09/13/2021','Linetechnology','09/20/2021');`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (36,168,'Casarramona, Marcelo Luis','SAN JOSE DE CALASANZ 775','11/15/1981','ARGENTINO',NULL,'29111428','Mensual','VENTAS','VENDEDOR 1/2 J',10.00,'20291114289','07/30/2017',NULL,'05/15/2019');`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (37,170,'Aguirre, Bruno Ayrton','vinara 2292  moron  bs as','05/07/1996','argentino','soltero','39486365','Mensual','MAESTR','MAESTRANZA 1/2J','27311','20394863654','08/09/2018','Realcolor',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (38,171,'Parra Ramones, Mairim Carolina','charcas 4148 palermo caba','12/28/1989','venezolana','casada','95698715','Mensual','ADMINIS','ADMINIS 1/2 J','18278.39','27956987151','08/09/2018','Realcolor','09/15/2021');`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (39,172,'Dimare, Diego Pascual','ALSINA 1069','11/10/1980','ARGENTINO','CASADO','28465048','Mensual','MAESTR','MAESTRANZA 1/2 J','27311','20284650485','05/11/2018','Realcolor','04/22/2019');`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (40,173,'Camio, Pablo Daniel','caaguazu 6568  PB 2 caba','12/10/1972','argentino','casado','23003817','Mensual','VENTAS','VENDEDOR 1/2 J','71795','20230038172','10/02/2018','Realcolor',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (41,174,'Campana Vidal, Pedro Manuel','av general mosconi 2328 caba','06/30/1984','venezolana','soltero','95554147','Mensual','VENTAS','VENDEDOR 1/2 J',10.00,'20955541473','10/05/2018','Realcolor','12/16/2020');`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (42,105,'Ibarola, Jose Gabriel','Guardia Nacional 544 PB 3º CABA','03/05/1977','argentino','soltero','25847129','Mensual','VENTAS','VENDEDOR 1/2 J',10.00,'20258471297','01/14/2014',NULL,NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (43,108,'Cuevas, Claudio Manuel','Culapaligue 441, piso 14 Dto D','03/09/1965','argentino','divorciado','17478275','Mensual','VENTAS','VENDEDOR 1/2 J','1675519','20174782750','04/14/2014','Realcolor','09/08/2017');`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (44,116,'De Giglio, Gimena Cecilia','Av Gaona 4248, Ciudadela, Bs As','05/05/1991','argentina','soltera','35972680','Mensual','ADMINIS','ADMINIS 1/2 J',10.00,'27359726800','09/01/2014','Realcolor','11/28/2017');`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (45,121,'Echeverria, Ricardo Daniel','Av Dorrego 2468, Belgrano, CABA','07/27/1983','argentino','soltero','31049966','Mensual','VENTAS','VENDEDOR 1/2 J',10.00,'20310499669','03/18/2015',NULL,NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (46,124,'Andrada Hidalgo, Gonzalo Sebastian','Cosme Gaviña 1921, Ituzaingo, Bs As','11/24/1984','argentino','soltero','31245223','Mensual','DEPOSITO','AUXILIAR 1/2 J',10.00,'20312452236','06/05/2015','Realcolor','02/24/2017');`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (47,128,'Carnicelli, Matias Leonardo','Estados Unidos 1861 Piso 5 Dto D CABA','02/23/1979','argentino','soltero','27217169','Mensual','VENTAS','VENDEDOR 1/2 J','16755.19','20272171697','08/20/2015','Realcolor','08/01/2017');`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (48,129,'Elizathe, Juan Miguel','Roberto Ortiz 1709, Ciudad Madero, CABA','03/15/1983','argentino','soltero','30122040','Mensual','VENTAS','VENDEDOR 1/2 J',10.00,'20301220406','09/01/2015',NULL,NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (49,130,'Tejerina Coronel, Adela Patricia','Calle 314 Nro 93 Ciudad Evita, Bs As','02/02/1987','argentina','soltera','32808715','Mensual','VENTAS','VENDEDOR 1/2 J',10.00,'23328087154','11/17/2015','Realcolor',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (50,131,'Sosa Latina, Juan Pablo','Mazzini 2060, Hurlingan Bs As','09/17/1989','argentino','soltero','34880766','Mensual','ADMINIS','ADMINIS','5453.8','20348807669','11/20/2015','Realcolor','03/16/2016');`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (51,136,'Moreyra, Juan Pablo','Taboada 2350, Merlo, Bs As','05/05/1989','argentino','soltero','34539571','Mensual','MAESTR','MAESTRANZA 1/2J',10.00,'20345395718','01/08/2016','Realcolor','12/26/2017');`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (52,138,'Guzman, Facundo Nahuel','Soldado de la frontera 5455 CABA','06/18/1989','argentino','soltero','34532925','Mensual','DEPOSITO','AUXILIAR JC',10.00,'20345329251','01/08/2016','Realcolor',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (53,139,'Jesus, Laura Roxana','Chacabuco 246, Dto A, Ciudadela, Bs As','03/19/1976','argentina','soltera','25129467','Mensual','VENTAS','VENDEDOR 1/2 J',10.00,'23251294674','01/04/2016',NULL,NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (54,141,'Arce, Sergio Ariel','Cmte Lucena 4829, Avellaneda Buenos Aires','04/19/1982','argentino','soltero','29460828','Mensual','MAESTR','MAESTRANZA 1/2J','17938.65','20294608282','05/04/2016','Realcolor','12/26/2017');`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (55,14,'Dominguez, Jose Sebastian','ANGEL CARRANZA 2352','12/28/1988','ARGENTINO','SOLTERO','34175245','Mensual','ADMINS','ADMINIS 1/2J','42298','20341752451','02/01/2021','Tline','03/14/2021');`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (56,147,'Vila Paredes, Ramon Jose','Juncal 1759, Lanus este, Bs As','01/24/1977','paraguayo','soltero','92544472','Mensual','VENTAS','VENDEDOR 1/2 J',10.00,'20925444724','02/06/2017','Realcolor','10/4/02017');`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (57,175,'Noya, Flavia Soledad','Roma 560','29/02/1997','Argentina','Soltera','34574272','Mensual','VENTAS','VENDEDOR 1/2J',10.00,'27345742722','12/17/2018',NULL,NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (58,176,'Angarita Castillo, Pilar Andrea','Risso Patron 1009, Almirante Brown','10/02/1992','Colombiana','soltera','95849705','Mensual','ADMINIS','ADMINIS','54731','27958497054','02/18/2019','Realcolor','06/07/2021');`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (59,177,'Diaz Yanez, Argelis Rafael','Ramon Falcon 1535, C.A.B.A.','02/20/1986','venezolano','soltero','95596569','Mensual','VENTAS','VENDEDOR 1/2J','71795','20955965699','04/24/2019','Realcolor','18');`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (60,178,'Chavez, Marco','CAÑADA DE GOMEZ 5235  LUGANO','10/20/1980','boliviana','casado','94857009','Mensual','VENTAS','VENDEDOR 1/2J','57436','20948570093','06/05/2019','Realcolor',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (61,200,'Naya, Matias','ARANGUREN 1004','05/20/1981','ARGENTINO',NULL,'28863480','Mensual','COMPRAS','COMPRAS',10.00,'20288634808','06/19/2013',NULL,NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (62,5,'Carvajal, Jorge Duilio','Pampa 1728  villa luzuriga','04/18/1971','argentino','soltero','22004948','Mensual','DEPOSITO','MAESTRANZA 1/2J','56616','20220049486','08/29/2019','Tline','10/19/2021');`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (63,5,'Bialolenkier, Gustavo Javier','SALVADOR SOREDA 5912 WILDW','11/22/1970','ARGENTINO','Soltero','21602347','Mensual','VENTAS','VENDEDOR J Comp','57436','20216023472','09/18/2019','Tline',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (64,4,'Vivado, Fernando Sebastian','AV RIVADAVIA 8444','12/29/1981','ARGENTINO','SOLTERO','29248492','Mensual','ADMINIS','ADMINIS 1/2J','57231','20292484926','01/05/2021','Technologyline',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (65,5,'Mitton, Fernando Martin','TRIUNVIRATO 2823 MUNRO BSAS','02/09/1952','ARGENTINO','SOLTERO','36090580','Mensual','VENTAS','VENDEDOR 1/2J','71795','20360905803','03/16/2021','Technologyline',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (66,7,'Diaz, luis alberto','ABRAMO 26 LIBERTAD BSAS','04/05/1996','ARGENTINO','SOLTERO','39513101','Mensual','MAESTR','MAESTRANZA 1/2J',10.00,'20395131010','03/14/2020','Tline',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (67,8,'Dulio, Gustavo Alejandro','ARROYO GARIO 874 ING MASCHWITZ BSAS','07/09/1981','ARGENTINA','CASADO','28846888','Mensual','MAESTRANZA','MAESTR 1/2J','56616.01','20288468886','06/10/2021','Technologyline','12/09/2021');`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (68,11,'elias vargas, kevin ricardo','HIPOLITO HIRIGOYEN 3396','05/20/1994','ARGENTINO','SOLTERO','38153884','Mensual','DEPOSITO','MAESTRANZA 1/2J','70770','20381538843','11/01/2020','Tline','03/10/2022');`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (69,12,'Figueroa, Lucas Daniel','GUEMES 2261, SAN MARTIN','03/03/1978','ARGENTINO','SOLTERO','26425194','Mensual','VENTAS','VENDEDOR 1/2J','57436.15','20264251940','12/10/2020','Tline','08/20/2021');`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (70,1,'Yzaurralde, Gonzalo Fabian','TORQUINS 6226I. CASANOVA BSAS','07/06/1998','ARGENTINO','SOLTERO','41352721','Mensual','MAESTR','MAESTR 1/2J','56616','20413527210','11/01/2020','Realcolor','10/19/2021');`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (71,2,'Vega, Guillermo David','CHARLONE 602','07/21/1991','PARAGUAYA','CASADO','95084175','Mensual','MAESTR','MAESTR 1/2J','54116.01','20950841754','12/10/2020','Technologyline','05/31/2021');`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (72,3,'Rossetti, Lucas Nicolas','BARADERO 1827 MORON BSAS','05/16/1995','ARGENTINO','SOLTERO','39062533','Mensual','MAESTR','MAESTRANZA 1/2J','70770','20390625333','01/12/2021','Technologyline',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (73,180,'Fal, Marilina','AV SANTA FE 4950 2 H','12/05/1992','argentina','soltera','37171456','Mensual','VENTAS','VENDEDOR 1/2J',10.00,'27371714567','12/19/2019',NULL,NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (74,13,'Monteiro, Javier Enrique','PARIS 2015, PONTEVEDRA','01/13/1982','ARGENTINA','SOLTERO','29328466','Mensual','ADMINIS','ADMINIS J comp','42986','20293284661','02/02/2021','Tline',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (75,6,'Bolañez, Lucia','CUCHA CUCHA 1890 CABA','04/03/1989','ARGENTINA','SOLTERA','34494268','Mensual','VENTAS','VENDEDOR 1/2J','71795','23344942684','05/14/2021','Technologyline',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (76,182,'Garcia, Julieta','TRAFULL 3650 CABA','06/23/1999','ARGENTINA',NULL,'40570891','Mensual','VENTAS','VENDEDOR 1/2J','57437','23405708914','05/03/2021','Realcolor',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (77,179,'Ibarra, Luis Angel','SPILIMBERGO 2343 ITUZAINGO','06/23/1999','ARGENTINA','SOLTERO','42012461','Mensual','DEPOSITO','MAESTRANZA 1/2J','56616','23420124619','05/18/2021','Realcolor',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (78,180,'Parodi, Nahuel Gerardo','MANUEL PEDRASA','03/29/1996','ARGENINA',NULL,'39595538','Mensual','VENTAS','VENDEDOR 1/2J','71795','20395955382','06/02/2021','Realcolor',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (79,181,'Mora, Fernando','MUÑECAS 1163 CABA','07/23/1970','ARGENTINA',NULL,'21613171','Mensual','VENTAS','VENDEDOR 1/2J','71795','20216131712','06/09/2021','Realcolor',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (80,183,'Vallejos, Diego Ezequiel','SAN MARTIN 91 EZEIZA','12/16/1986','ARGENTINA',NULL,'32663398','Mensual','MAESTRANZA','MAESTR 1/2J','70770','20326633985','07/14/2021','Realcolor',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (81,191,'Suazo, Adrian Oscar','Condarco 1271 paternal, CABA','11/25/1968','argentino','casado','20607521','Mensual','MAESTR','MAESTRANZA 1/2J',10.00,'20206075210','09/01/2016','Tline',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (82,1,'Giglio, Luciano Javier','BUENOS AIRES 55 BANFIELD BSAS','03/12/1999','ARGENTNA','SOLTERO','41690646','Mensual','VENTAS','VENDEDOR 1/2J','71538','20416906468','09/02/2021','Linetechnology',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (83,2,'Rangel Velasco, Marghiory Alejandra','SERRANO 1109','07/01/1988','Venezolana','Soltera','95972331','Mensual','VENTAS','VENDEDOR 1/2J','71538','27958723317','10/01/2021',NULL,'10/25/2021');`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (84,4,'Armero Navarrete, Michael Steven','SALTA 686 CABA','06/20/1990','COLOMBIANA','Soltero','95021589','Mensual','VENTAS','VENDEDOR 1/2J','71538','20950215896','11/01/2021','Linetechnology',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (85,9,'Rueda, Carlos Facundo','ISLAS MALVINAS 3869. ISIDRO CASANOVA','07/04/1995','ARGENTINA','SOLTERO','39059504','Mensual','AUXILIAR','AUXILIAR 1/2J','71795','20390595043','11/10/2021','Technologyline',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (86,10,'Gaona Ortega, Pablo Roberto','RIO GALLEGOS 633, MONTE GRANDE','02/07/1985','ARGENTINO','SOLTERO','31048884','Mensual','AUXILIAR','AUXILIAR 1/2J','71795','20310488845','11/26/2021','Technologyline',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (87,15,'Blanco, Enzo Daniel','SUDAMERICA 5485 G. DE LA FERRERE BSAS','11/29/1995','ARGENTINA','SOLTERO','39494416','Mensual','AUXILIAR','AUXILIAR 1/2J','71795','20394944166','11/10/2021','Tline',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (88,185,'Rivero, Sol Nazarena','ARGERICH 1475 MERLO','04/25/1999','ARGENTINA','SOLTERA','41837070','Mensual','ADM','ADMINIS 1/2J','71538','27418370705','11/01/2021','Realcolor',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (89,5,'Garcia, Carla Daniela','Santiago de las Carreras 45 pb 4','02/13/1987','ARGENTINA','SOLTERA','32881170','Mensual','ADM','ADMINIS 1/2J','71538.9','27328811702','12/17/2021','Linetechnology',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (90,14,'Carismo Diarte, Florencia Magali','BERNA 761','09/19/1998','ARGENTINA','SOLTERA','41586102','Mensual','ADMINISTRACION','ADM 1/2 JORNADA A','55847','27415861023','11/01/2022','Technologyline',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (91,6,'Lencina Atala Marcelo Exequiel','VIRREY DEL PINO 1989','04/25/1998','ARGENTINA','Soltero','41550014','Mensual','MAESTRANZA','MAESTR 1/2J',10.00,'23415500149','01/25/2022','Linetechnology',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (92,7,'Holthoff, Federico Alberto','AV JUAN B JUSTO 9100 CABA','12/01/1993','ARGENTINA','SOLTERO','38321670','Mensual','VENTAS','VENDEDOR 1/2J','71795','20383216703','03/23/2020','Tline',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (93,8,'Monasterios Corcega, Yetsibel Eglee','SAAVEDRA 36 BALVANERA CABA','09/18/1992','VENEZOLANA','SOLTERA','96038045','Mensual','VENTAS','VENDEDOR 1/2J','1235','27960380458','05/14/2021','Tline','10/07/2021');`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (94,9,'ANDRADE CORONEL, OTTO ALBERTO','SALTA 944 CABA','10/06/1980','ECUATORIANA','SOLTERO','95874102','Mensual','VENTAS','VENDEDOR 1/2J','71795','20958741023','03/13/2020','Tline',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (95,186,'DAMBRISI ALMIRON, LUCIANA AILEN','BARRAGAN 667, LINIERS','04/07/1999','ARGENTINA','SOLTERA','41667253','Mensual','VENTAS','VENDEDOR 1/2J','71796','37416672534','02/01/2022','Realcolor',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (96,187,'RUIZ, GUSTAVO FERNANDO','SAN LORENZO 6042, SAN MARTIN','01/31/1975','ARGENTINA','SOLTERO','24502918','Mensual','AUXILIAR','AUX 1/2J','71796','20245029188','02/04/2022','Realcolor',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (97,3,'Romero, Carlos Alberto','F.BOERO 2186','01/10/1966','ARGENTINA','SEPARADO','17606322','Mensual','VENTAS','VENDEDOR 1/2J','62031','20176063220','03/21/2020','Tline','16/062021');`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (98,14,'SUAZO, ADRIAN OSCAR','CONDARCO 1271','11/25/1968','ARGENTINA','CASADO','20607521','Mensual','MAESTRANZA','MAESTRANZA 1/2J','16443.76','20206075210','08/01/2021','Realcolor','12/21/2015');`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (99,13,'FLORES PEREYRA, JONATHAN JOSE','EUGENIO GARZON 3978','07/19/1989','ARGENTINA','SOLTERO','34617250','Mensual','AUXILIAR','AUXILIAR 1/2J','57436.15','23346172509','05/13/2021','Tline','06/15/2021');`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (100,20,'SAUCEDO LEANDRO OSCAR','CARHUE 467 HURLINGAM BUENOS AIRES','03/21/1977','BRASILEÑA','SOLTERO','92568182','Mensual','DEPOSITO','AUXILIAR 1/2 J','71795.18','20925681823','03/02/2022','Tline',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (101,19,'PARRA NICOLAS DANIEL','ISLA DECEPCION 229 EL JAGUEL BUENOS AIRES','05/07/1989','ARGENTINO','SOLTERO','34572619','Mensual','DEPOSITO','AUXILIAR 1/2 J','71798.18','20345726196','03/02/2022','Tline',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (102,189,'SILVEIRA, NESTOR','AV.CORRIENTES 5626 PB3','05/10/1970','URUGUAYA','CASADO','92318780','Mensual','DEPOSITO','MAESTRANZA 1/2J','88451','20923187805','04/05/2022','Realcolor',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (103,188,'DOMINGUEZ, MANUEL','GUEMES 48, QUILMES','08/17/1988','ARGENTINA','SOLTERO','34098067','Mensual','LOGISTICA','AUXILIAR 1/2J','88451','20340980671','03/02/2022','Realcolor',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (104,191,'Girodetti, Carlos Adrian',NULL,NULL,NULL,NULL,36647750,'Mensual','LOGISTICA','AUX 1/2J',10.00,'20366477501','05/09/2022','Realcolor',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (105,190,'AMARILLO, SANTO VICTORIO','ARGERICH 1475','08/17/1975','ARGENTINA','SOLTERO','28439606','Mensual','LOGISTICA','AUX 1/2 J','88451','20284396066','05/09/2022','Realcolor',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (106,96,'Miramon, Rafael CArlos','agüero 1653 5º "D" cap fed','05/02/1978','ARGENTINA','SOLTERO','26282292','Mensual','VENTAS','VENDEDOR 1/2 J','10958.52','20262822924','04/03/2013','Realcolor',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (107,193,'ACOSTA, GONZALO CLAUDIO','SEGUROLA 1918','09/23/2002','ARGENTINA','CASADO','44447873','Mensual','SERVICIO TECTICO Y PROGRAMACION','AUXILIAR','43000','20444478730','06/21/2022','Realcolor',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (108,192,'ARROYO LAZARTE, JULIO CESAR','CORONEL VIDAL 1462','10/07/1983','BOLIVIANA','CASADO','92732025','Mensual','SERVICIO TECNICO Y PROGRAMACION','AUXILIAR','43000','20927320259','06/22/2022','Realcolor',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (109,22,'OBCHAKA, ALAN JOAQUIN','N.SILVA 328','12/01/1998','ARGENTINA','SOLTERO','41509690','Mensual','SERVICIO TECNICO','AUX','44210','23415096909','07/11/2022','Tline',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (110,20,'CONTE, RODRIGO JULIAN','AV. RIESTRA 5909','10/19/1999','ARGENTINA','SOLTERO','42148093','Mensual','SERVICIO TECNICO','PERSONAL AUXILIAR','44225.83','20421480932','09/08/2022','Tline',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (111,13,'Cordoba, Brenda Vanesa','PINTOS 2530','01/23/1987','ARGENTINA','SOLTERA','32536978','Mensual','ADMINISTRACION','ADMIN 1/2 JORNADA A','52850','37325369782','09/21/2022','Technologyline',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (112,2,'Makarski, Javier Martin','Guarani 1415, El Palomar','03/10/1979','argentino','casado','27201767','Mensual','DEPOSITO','MAESTRANZA JC',10.00,'20272017671','08/19/2017','Tline',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (113,55,'Oropeza Martinez, Mariela Josefina','YERBAL 727','09/07/1980','VENEZOLANA',NULL,'96065740','Mensual','ADM','ADMINIS 1/2J','71538','27960657409','12/27/2021','Technologyline',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (114,3,'Valente, Agustina','misiones 725 bella vista bs as','09/30/1996','argentino','soltera','39748266','Mensual','VENTAS','MAESTRANZA JC','31803.54','20397492664','10/15/2019',NULL,NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (115,1,'ALTAMIRA, ROMINA','caguazu 6568  PB 2 caba','03/17/1983','ARGENTINA','DIVORCIADA','30114621','Mensual','CHOFER','MAESTRANZA   JC','4285','27301146219','07/15/2020',NULL,NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (116,24,'CHIESA, PABLO DAMIAN','DR.KELLERTAS 2843','03/30/1979','ARGENTINA','SOLTERO','27277845','Mensual','VENTAS','VENTAS 1/2 JORNADA A','80000','20272778451','11/03/2022','Tline',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (117,15,'Flores, Gabriel Luciano','CRISOLOGO LARRALDE 2267','05/28/1980','ARGENTINA','DIVORCIADO','28232964','Mensual','VENTAS','VENDEDOR','75000','202823294647','11/04/2022','Technologyline','11/08/2022');`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (118,24,'LAPIAZZA IBARRA, TATIANA AYELEN','BARADERO 1827','12/24/1996','ARGENTINA','CASADA','40011504','Mensual','AUXILIAR A','1/2 JORNADA','60250','23400115044','02/17/2023','Tline',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (119,16,'SILVA, MARIO EZEQUIEL','DARDO ROCHA 1982','07/02/2004','ARGENTINA','SOLTERO','45735770','Mensual','AUXILIAR A','1/2 JORNADA','60500','20457357703','02/01/2023','Technologyline',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (120,97,'ALFARO, ALEXIS LEANDRO','ANIBAL TROILO 988','03/22/1996','ARGENTINA','SOLTERO','39531445','Mensual','AUXILIAR A','1/2 JORNADA','60500','23395314459','02/01/2023','Tline',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (121,194,'POGGI, JOAN FRANCO','M. DE SARRATEA 349','04/25/1998','ARGENTINA','SOLTERO','41572819','Mensual','VENTA','VENDEDOR 1/2J','60350','20415728191','02/01/2023','Realcolor',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (122,98,'RENDON, JORGE ANIBAL','CERETTI 3191','01/27/2002','ARGENTINA','SOLTERO','43817854','Mensual','VENTAS','VENDEDOR 1/2J','68066','20438178547','03/06/2023','Realcolor',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (123,196,'SAPORITI, HORACIO ADRIAN','MUÑECAS 1163','18/18/1968','ARGENTINA','SOLTERO','20404772','Mensual','VENTAS','VENDEDOR 1/2J','68066','20204047724','03/10/2023','Realcolor',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (124,8,'FERNANDEZ, MARTIN JOEL','MANUEL SOLER 1585','12/07/1998','ARGENTINA','SOLTERO','41550174','Mensual','MAESTRANZA','A','84000','23415501749','05/16/2023','Linetechnology',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (125,17,'LOPEZ, DARIO RAUL','SOLON 2061','10/05/1989','ARGENTINA','SOLTERO','34796716','Mensual','MAESTRANZA','A','84000','20347967166','05/12/2023','Technologyline',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (126,197,'RONCHINI, GIULIANA ABRIL','PORTUGAL 2950','05/08/2003','ARGENTINA','SOLTERA','44511238','Mensual','ADMINISTRACION','A','85000','27445112386','07/14/2023','Realcolor',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (127,289,'ROJAS, THOMAS ESTEBAN','ITALIA 1151','12/23/2000','ARGENTINA','SOLTERO','43315624','Mensual','TECNICO','AUXILIAR','123000','20433156243','09/21/2023','Realcolor',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (128,240,'ESPOSITO, SEBASTIAN MARIANO','TOMAS VALENCIA 537','08/15/1982','ARGENTINA','SOLTERO','29698013','Mensual','VENTAS','A','118000','20296980138','09/01/2023','Realcolor',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (129,241,'OVIEDO CHAVEZ, GASTON ARIEL','PASAJE DEL OMBU 1650','02/12/2003','ARGENTINA','SOLTERO','44793719','Mensual','MAESTRANZA','A','123000','20447937191','09/21/2023','Realcolor',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (130,10,'NAVARRO, NESTOR OSCAR','INSUA 3058','05/29/1968','ARGENTINA','CASADO','20282604','Mensual','AUXILIAR','A','138000','20202826041','10/11/2023','Linetechnology',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (131,12,'Sandoval, Richard Dante','CALLE 47 4975, BERAZATEGUI','06/07/1989','Argentino','Soltero','36336768','Mensual','Auxiliar A','Auxiliar 1/2 J','71795','20363367683','01/24/2022','Technologyline','02/23/2022');`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (132,151,'Parra Castañeda, Jair Gerardo','ISLA DECEPCION 229 EL JAGUEL','05/07/1989','ARGENTINO','SOLTERO','34572619','Mensual','VENTAS','VENDEDOR 1/2 J','16755','20345726196','08/24/2017','Realcolor',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (133,154,'Jove Ticona, Rodrigo','AV. VIAMONTE 2807, LANUS OESTE, CP: 2807','10/03/1989','Boliviano','Soltero','94508428','Mensual','Deposito','MAESTRANZA 1/2 J','16443','20945084287','10/06/2017','Realcolor',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (134,250,'LOPEZ FRANCO, LISANDRO SABINO','MONTIEL 2739','01/23/2003','ARGENTINA','SOLTERO','44641346','Mensual','AUX 1/2 JORNADA','A','157000','20446413466','11/19/2023','Realcolor',NULL);`,
  `INSERT INTO employees(id,docket,full_name,domicile,birth_date,nacionality,civilstatus,dni,salary_settlement,sector,categoria,basic,cuil,admision_date,company,departure_date) 
  VALUES (135,9,'Amarillo, Gonzalo Mauricio',NULL,NULL,NULL,NULL,42321292,'Mensual','AUXILIAR','AUXILIAR 1/2J',10.00,'20423212927','05/12/2023','Linetechnology',NULL);`,
]

const dataConcepts = [
 `INSERT INTO concepts(name,type) VALUES ('Basico','REMUNERATIVO')`,
 `INSERT INTO concepts(name,type) VALUES ('Presentismo','REMUNERATIVO')`,
 `INSERT INTO concepts(name,type) VALUES ('Antiguedad','REMUNERATIVO')`,
 `INSERT INTO concepts(name,type) VALUES ('Aguinaldo Prop','REMUNERATIVO')`,
 `INSERT INTO concepts(name,type) VALUES ('Dia comercio','REMUNERATIVO')`,
 `INSERT INTO concepts(name,type) VALUES ('Preaviso','REMUNERATIVO')`,
 `INSERT INTO concepts(name,type) VALUES ('Feriados Nacionales','REMUNERATIVO')`,
 `INSERT INTO concepts(name,type) VALUES ('SAC Preaviso','REMUNERATIVO')`,
 `INSERT INTO concepts(name,type) VALUES ('Vacaciones','REMUNERATIVO')`,
 `INSERT INTO concepts(name,type) VALUES ('Dia del gremio','REMUNERATIVO')`,
 `INSERT INTO concepts(name,type) VALUES ('Premios','REMUNERATIVO')`,
 `INSERT INTO concepts(name,type) VALUES ('Decreto 14-2020 acuerdo solidario','REMUNERATIVO')`,
 `INSERT INTO concepts(name,type) VALUES ('Comisiones por ventas','REMUNERATIVO')`,
 `INSERT INTO concepts(name,type) VALUES ('Gratificacion Rem','REMUNERATIVO')`,
 `INSERT INTO concepts(name,type) VALUES ('SAC / Vacac no gozadas','REMUNERATIVO')`,
 `INSERT INTO concepts(name,type) VALUES ('Vacac no gozadas','REMUNERATIVO')`,
 `INSERT INTO concepts(name,type) VALUES ('Pres. Norem Acue. Oct','NO REMUNERATIVO')`,
 `INSERT INTO concepts(name,type) VALUES ('Vacaciones norem','NO REMUNERATIVO')`,
 `INSERT INTO concepts(name,type) VALUES ('Aguinaldo Prop norem','NO REMUNERATIVO')`,
 `INSERT INTO concepts(name,type) VALUES ('Preaviso','NO REMUNERATIVO')`,
 `INSERT INTO concepts(name,type) VALUES ('SAC Preaviso','NO REMUNERATIVO')`,
 `INSERT INTO concepts(name,type) VALUES ('Feriados nac no rem','NO REMUNERATIVO')`,
 `INSERT INTO concepts(name,type) VALUES ('Indemnizacion por Antiguedad','NO REMUNERATIVO')`,
 `INSERT INTO concepts(name,type) VALUES ('Integracion mes despido','NO REMUNERATIVO')`,
 `INSERT INTO concepts(name,type) VALUES ('sac/SvacNoG 2021','NO REMUNERATIVO')`,
 `INSERT INTO concepts(name,type) VALUES ('Vacac no goz 2021','NO REMUNERATIVO')`,
 `INSERT INTO concepts(name,type) VALUES ('Embargo Sueldo','NO REMUNERATIVO-')`,
 `INSERT INTO concepts(name,type) VALUES ('Gratificacion Extraord no rem','NO REMUNERATIVO')`,
 `INSERT INTO concepts(name,type) VALUES ('Anti. Acue. Norem Oct','NO REMUNERATIVO')`,
 `INSERT INTO concepts(name,type) VALUES ('SAC Integr mes despido','NO REMUNERATIVO')`,
 `INSERT INTO concepts(name,type) VALUES ('Bono norem','NO REMUNERATIVO')`,
 `INSERT INTO concepts(name,type) VALUES ('INCREMENTO Norem Octubre 2023','NO REMUNERATIVO')`,
 `INSERT INTO concepts(name,type) VALUES ('Acuerdo Mayo 2019','NO REMUNERATIVO')`,
 `INSERT INTO concepts(name,type) VALUES ('decreto 665/19 no rem','NO REMUNERATIVO')`,
 `INSERT INTO concepts(name,type) VALUES ('Descuento DTO 561/19','NO REMUNERATIVO')`,
 `INSERT INTO concepts(name,type) VALUES ('Adelanto de Liquidacion Final','NO REMUNERATIVO')`,
 `INSERT INTO concepts(name,type) VALUES ('Asig norem Comp AC 2021','NO REMUNERATIVO')`,
 `INSERT INTO concepts(name,type) VALUES ('Asig. No Rem. Acuerdo 04/23','NO REMUNERATIVO')`,
 `INSERT INTO concepts(name,type) VALUES ('Acuerdo Feb-20 Comercio','NO REMUNERATIVO')`,
 `INSERT INTO concepts(name,type) VALUES ('Asig. No Rem. Dto 438/2023 cuota 1/2','NO REMUNERATIVO')`,
 `INSERT INTO concepts(name,type) VALUES ('Jubilacion','DESCUENTO')`,
 `INSERT INTO concepts(name,type) VALUES ('Obra Social','DESCUENTO')`,
 `INSERT INTO concepts(name,type) VALUES ('Sindicato','DESCUENTO')`,
 `INSERT INTO concepts(name,type) VALUES ('Faecys','DESCUENTO')`,
 `INSERT INTO concepts(name,type) VALUES ('Ley 19032','DESCUENTO')`,
 `INSERT INTO concepts(name,type) VALUES ('Desc. O. Social','DESCUENTO')`,
 `INSERT INTO concepts(name,type) VALUES ('Faecys norem','DESCUENTO')`,
 `INSERT INTO concepts(name,type) VALUES ('O.social J.completa','DESCUENTO')`,
 `INSERT INTO concepts(name,type) VALUES ('O.social J.comp norem','DESCUENTO')`,
 `INSERT INTO concepts(name,type) VALUES ('Sindicato norem','DESCUENTO')`,
 `INSERT INTO concepts(name,type) VALUES ('Aporte Osecac','DESCUENTO')`,
 `INSERT INTO concepts(name,type) VALUES ('Descuento DTO 561/19','DESCUENTO')`
]

// Usado para creartabla Employees
  // async function startServer() {
  //   try {
  //     await createTable()
  //     await insertData()
  //   } catch (error) {
  //     console.error('Error while executing queries:', error)
  //     process.exit(1)
  //   }
  // }
  // startServer();

  
// Para bozrrar la tabla
// const dropTableQuery = `DROP TABLE IF EXISTS employees`;
// await client.execute(dropTableQuery);

export async function createTable() {
  try {
    const dropTableQuery = `DROP TABLE IF EXISTS concepts`;
    await client.execute(dropTableQuery);
    const resultCreateTable = await client.execute(createTableConcepts);
    console.log('Tabla creada:', resultCreateTable);
  } catch (error) {
    console.error('Error al crear la tabla:', error);
  }
}


export async function insertData() {
  for (const query of dataConcepts) {
    try {
      const result = await client.execute(query);
      console.log('Consulta ejecutada:', result);
    } catch (error) {
      console.error('Error al ejecutar la consulta:', error);
    }
  }
}

// export async function insertData() {
//   const result = await client.execute(insertDataEmployees)
//   console.log('Datos insertados:', result)
// }
