'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async jwt() {
    const { ctx } = this;
    const userId = '123456789';
		let {userName,psw} = ctx.request.body;
		const results = await this.ctx.service.user.signjwt(userName,psw);
		/* let ddds = app.jwt.sign({ userName,psw }, app.config.jwt.secret,{expiresIn:'1h'});
		 */
		
		console.log("用户:"+userName+"-密码:"+psw)
		console.log(results.token);
		ctx.body = {
			code:200,
			message:'获取token成功',
			token:results,
		};

  }
}

module.exports = LoginController;