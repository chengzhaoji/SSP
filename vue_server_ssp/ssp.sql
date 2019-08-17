SET NAMES UTF8;
DROP DATABASE IF EXISTS ssp;
CREATE DATABASE ssp CHARSET=UTF8;
USE ssp;
CREATE TABLE ssp_index_carousel(
id INT PRIMARY KEY AUTO_INCREMENT,
uname VARCHAR(32),
uname_img VARCHAR(16),
title VARCHAR(50),
src VARCHAR(32)
);
INSERT INTO ssp_index_carousel VALUE(null,'Lila-阿敏','uname1.jpg','未曾相见','carousel01.jpg');
INSERT INTO ssp_index_carousel VALUE(null,'乐山人','uname2.jpg','晨耕','carousel04.jpg');
INSERT INTO ssp_index_carousel VALUE(null,'唐歌','uname3.jpg','漫步青州古城','carousel03.jpg');
INSERT INTO ssp_index_carousel VALUE(null,'爱摄影的小一','uname4.jpg','《暴风雨即将来临》山水武宁风光!','carousel02.jpg');