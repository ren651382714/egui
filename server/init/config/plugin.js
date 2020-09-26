'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
	mysql: { // 开启插件
		enable: true,
		package: 'egg-mysql',
	},
	cors: {
	    enable: true,
	    package: 'egg-cors'
	}
};
