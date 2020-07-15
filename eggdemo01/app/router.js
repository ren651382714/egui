'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller,io } = app;
  router.get('/', controller.home.jwt);
	/* app.io.of('/').route('chat',app.io.controllers.chat); */
  router.get('/logo', controller.logo.index);
	router.post('/login', controller.login.jwt); /*加密*/
	
	router.post('/mdpas', controller.mdpas.index);
  router.post('/getinfo', controller.index.index);
  router.post('/user', controller.user.index);// 测试内容接口
  router.post('/adduser', controller.adduser.adduser); // 更改古楼密码接口
	router.post('/addinfo', controller.addinfo.addinfo);
	router.get('/fip', controller.fip.fip);
	router.post('/putcontent', controller.putcontent.index);//存备忘录
	router.post('/uploadimg', controller.uploadimg.uploadImg);//上传图片
	router.get('/qucontent', controller.cun.cun);//获取备忘录
	router.get('/getimg', controller.getimg.getimg);//获取图片
	/* router.get('/get',controller.login.jwt); */
};
