'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
	io: {
		enable:false,
		package: 'egg-socket.io',
	},
	jwt: {
	  enable: true,
		package: 'egg-jwt',
	},
  mysql: { // 开启插件
    enable: true,
    package: 'egg-mysql',
  },
  cors: {
    enable: true,
    package: 'egg-cors',
  },
};
