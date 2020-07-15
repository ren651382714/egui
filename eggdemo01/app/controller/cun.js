'use strict';

const Controller = require('egg').Controller;

class PutcontentController extends Controller {
 
 
	async cun() {
		const { ctx } = this;
		
		
		const contents = await this.ctx.service.user.qugonggong();
		console.log(contents)
		ctx.body = {
		  code: 200,
		  data: contents,
		};
		this.ctx.status = 200;
	}

}

module.exports = PutcontentController;