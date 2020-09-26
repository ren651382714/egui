'use strict';
const Controller = require('egg').Controller;

class IfController extends Controller {
  async ifuser() {
    const { ctx } = this;
    const users = ctx.request.body.user;
		const password = ctx.request.body.password;
    /* const options = {user:ctx.request.body.user, password:ctx.request.body.password, online:'1'}; */
    const info = await this.ctx.service.box.getuser(users,password);
		console.log(info);
		
		if(info){
			ctx.body = {
			  code: 200,
			  msg: "用户名或者密码错误",
			};
		}else{
				const ifusers = await this.ctx.service.box.ifuser(users)
				ctx.body = {
				  code: 200,
				  data: ifusers,
					msg:'用户名与密码正确'
				};
			}
		}
		
  }


module.exports = IfController;
