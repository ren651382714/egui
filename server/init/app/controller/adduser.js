'use strict';

const Controller = require('egg').Controller;

class AddUserController extends Controller {
  async adduser() {
    const { ctx } = this;
		const users = ctx.request.body.user;
		const options = {user:ctx.request.body.user, password:ctx.request.body.password, online:'0'};
		const info = await this.ctx.service.box.getuser(users);
		console.log(options);
		if(info == false ){
			ctx.body = {
			  code: 200,
			  msg: "用户名已存在",
			};
		}else{
			const addinfo = await this.ctx.service.box.adduser(options);
			ctx.body = {
			  code: 200,
			  data: addinfo,
				msg:'注册成功'
			};
  }
}
}
module.exports = AddUserController;