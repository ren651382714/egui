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
	 exports.proxy = true;
	 
  const config = exports = {
    mysql: {
      client: {
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: '',
        database: 'gulou',
      },
      app: true,
      agent: false,
    },
		
    /* cors: {
			origin:'*',
			allowMethods:'GET,HEAD',
		} */
		
  };
	
	config.jwt = {
		 secret:'654321',
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
  config.keys = appInfo.name + '_1591771539838_6064';

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
