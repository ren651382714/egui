/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/

	 const config = exports = {
		 mysql: {
			 client: {
				 host: '85.10.205.173',
				 port: '3306',
				 user: 'ren651382714',
				 password: 'phpmyadmin',
				 database: 'cedemo',
			 },
			 app: true,
			 agent: false,
		 }, 
	 };
	 
 config.security = {
   csrf: {
     enable: false,
     ignoreJSON: true,
   },
 	domainWhiteList:['127.0.0.1','192.168.0.112'],
 };
 config.cors = {
   origin: '*',
   allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
 };
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1598500248684_8171';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
