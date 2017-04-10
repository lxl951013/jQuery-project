/*
Navicat MySQL Data Transfer

Source Server         : 本地mySQL
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : banggou

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-04-10 17:47:21
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `brandname` varchar(200) NOT NULL,
  `goodsname` varchar(1000) NOT NULL,
  `price` varchar(30) NOT NULL,
  `imgurl` varchar(200) DEFAULT NULL,
  `spanurl1` varchar(200) DEFAULT NULL,
  `spanurl2` varchar(200) DEFAULT NULL,
  `spanurl3` varchar(200) DEFAULT NULL,
  `reg_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', 'Metersbonwe', '【春推荐】男运动感印花轻薄茄克', '￥369', '../img/nc1d.jpg', '../img/nc1x1.jpg', '../img/nc1x2.jpg', '../img/nc1x3.jpg', null);
INSERT INTO `goods` VALUES ('2', 'Metersbonwe', '【春推荐】男针织科技绒连帽马甲', '￥59', '../img/nc2d.jpg', '../img/nc2d1.jpg', '../img/nc2d2.jpg', '../img/nc2d3.jpg', null);
INSERT INTO `goods` VALUES ('3', 'Metersbonwe', '【春推荐】男连帽防风衣', '￥399', '../img/nc3d.jpg', '../img/nc3d1.jpg', '../img/nc10d2.jpg', '', null);
INSERT INTO `goods` VALUES ('4', 'Metersbonwe', '【春推荐】男上下撞色棒球衫茄克', '￥369', '../img/nc4d.jpg', '../img/nc4d1.jpg', '../img/nc15d1.jpg', null, null);
INSERT INTO `goods` VALUES ('5', 'Metersbonwe', '【春推荐】男上下撞色棒球衫茄克', '￥369', '../img/nc5d.jpg', '../img/nc5d1.jpg', '../img/nc5d2.jpg', '../img/nc5d3.jpg', null);
INSERT INTO `goods` VALUES ('6', 'Metersbonwe', '【春推荐】男上下撞色棒球衫茄克', '￥109', '../img/nc6d.jpg', '../img/nc6d1.jpg', '../img/nc6d2.jpg', null, null);
INSERT INTO `goods` VALUES ('7', 'Metersbonwe', '【春推荐】男上下撞色棒球衫茄克', '￥299', '../img/nc7d.jpg', '../img/nc7d1.jpg', '../img/nc11d1.jpg', null, null);
INSERT INTO `goods` VALUES ('8', 'Metersbonwe', '【春推荐】男上下撞色棒球衫茄克', '￥289', '../img/nc8d.jpg', '../img/nc8d1.jpg', '../img/nc8d2.jpg', null, null);
INSERT INTO `goods` VALUES ('9', 'Metersbonwe', '【春推荐】男上下撞色棒球衫茄克', '￥499', '../img/nc9d.jpg', '../img/nc9d1.jpg', '../img/nc9d2.jpg', '../img/nc9d3.jpg', null);
INSERT INTO `goods` VALUES ('10', 'Metersbonwe', '【春推荐】男上下撞色棒球衫茄克', '￥199', '../img/nc10d.jpg', '../img/nc10d1.jpg', '../img/nc10d2.jpg', '../img/nc10d3.jpg', null);
INSERT INTO `goods` VALUES ('11', 'Metersbonwe', '【春推荐】男上下撞色棒球衫茄克', '￥299', '../img/nc11d.jpg', '../img/nc11d1.jpg', '../img/nc11d2.jpg', null, null);
INSERT INTO `goods` VALUES ('12', 'Metersbonwe', '【春推荐】男上下撞色棒球衫茄克', '￥129', '../img/nc12d.jpg', '../img/nc12d1.jpg', '../img/nc12d2.jpg', '../img/nc12d3.jpg', null);
INSERT INTO `goods` VALUES ('13', 'Metersbonwe', '【春推荐】男上下撞色棒球衫茄克', '￥149', '../img/nc13d.jpg', '../img/nc13d1.jpg', '../img/nc11d1.jpg', null, null);
INSERT INTO `goods` VALUES ('14', 'Metersbonwe', '【春推荐】男上下撞色棒球衫茄克', '￥189', '../img/nc14d.jpg', '../img/nc14d1.jpg', '../img/nc14d2.jpg', null, null);
INSERT INTO `goods` VALUES ('15', 'Metersbonwe', '【春推荐】男上下撞色棒球衫茄克', '￥279', '../img/nc15d.jpg', '../img/nc15d1.jpg', '../img/nc15d2.jpg', null, null);
INSERT INTO `goods` VALUES ('16', 'Metersbonwe', '【春推荐】男上下撞色棒球衫茄克', '￥229', '../img/nc16d.jpg', '../img/nc16d1.jpg', '../img/nc16d2.jpg', null, null);
INSERT INTO `goods` VALUES ('17', 'Metersbonwe', '【春推荐】男上下撞色棒球衫茄克', '￥49', '../img/nc17d.jpg', '../img/nc17d1.jpg', '../img/nc17d2.jpg', null, null);
INSERT INTO `goods` VALUES ('18', 'Metersbonwe', '【春推荐】男上下撞色棒球衫茄克', '￥99', '../img/nc18d.jpg', '../img/nc18d1.jpg', '../img/nc6d1.jpg', null, null);
INSERT INTO `goods` VALUES ('19', 'Metersbonwe', '【春推荐】男上下撞色棒球衫茄克', '￥119', '../img/nc19d.jpg', '../img/nc19d1.jpg', '../img/nc19d2.jpg', null, null);
INSERT INTO `goods` VALUES ('20', 'Metersbonwe', '【春推荐】男上下撞色棒球衫茄克', '￥210', '../img/nc20d.jpg', '../img/nc20d1.jpg', '../img/nc20d2.jpg', '../img/nc20d3.jpg', null);
INSERT INTO `goods` VALUES ('21', 'Metersbonwe', '【春推荐】男上下撞色棒球衫茄克', '￥239', '../img/nc21d.jpg', '../img/nc21d1.jpg', '../img/nc21d2.jpg', null, null);
INSERT INTO `goods` VALUES ('22', 'Metersbonwe', '【春推荐】男上下撞色棒球衫茄克', '￥9.99', '../img/nc22d.jpg', '../img/nc22d1.jpg', '../img/nc22d2.jpg', null, null);
INSERT INTO `goods` VALUES ('23', 'Metersbonwe', '【春推荐】男上下撞色棒球衫茄克', '￥210', '../img/nc23d.jpg', '../img/nc23d1.jpg', '../img/nc23d2.jpg', '', null);
INSERT INTO `goods` VALUES ('24', 'Metersbonwe', '【春推荐】男上下撞色棒球衫茄克', '￥99.9', '../img/nc24d.jpg', '../img/nc24d1.jpg', '../img/nc24d2.jpg', null, null);
INSERT INTO `goods` VALUES ('25', 'Metersbonwe', '【春推荐】男上下撞色棒球衫茄克', '￥909', '../img/nc25d.jpg', '../img/nc25d1.jpg', '../img/nc25d2.jpg', '../img/nc25d3.jpg', null);
SET FOREIGN_KEY_CHECKS=1;
