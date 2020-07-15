'use strict';

const Controller = require('egg').Controller;

class LogoController extends Controller {
  async index() {
    const { ctx } = this;
		
		const user = ctx.request.body
		
		if(name){
				let userToken = {
					name:ctx.request.body.name
				}
				const token = app.jwt.sign(userToken,secret,{exporesIn:'1h'})
				ctx.body = {
					message:'获取token成功',
					code:1,
					token:token
				}
		}else{
			
			ctx.body = {
				
				message:'参数错误',
				code:-1
			}
		}
		
  }
}

module.exports = LogoController;
