'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const { ctx	} = this;
		const token = ctx.header.authorization //获取jwt
		let payload;
    if(token){
			payload = await app.jwt.verify(token.split(' ')[1],secrty)
			ctx.body = {
			  code: 200,
			  data: payload,
			}
		}else{
			ctx.body = {
				message:'token错误',
				code:-1
			}
		}
    
  }
}

module.exports = UserController;
