'use strict';

const Controller = require('egg').Controller;

class MdpawController extends Controller {
  async index() {
    const { ctx } = this;
		let {psw} = ctx.request.body;
		
		const results = await this.ctx.service.user.mdpaw(psw);
		/* let ddds = app.jwt.sign({ userName,psw }, app.config.jwt.secret,{expiresIn:'1h'});
		 */
		
		ctx.body = {
			code:200,
			message:'密码加密成功',
			md5:results,
		};

  }
}

module.exports = MdpawController;