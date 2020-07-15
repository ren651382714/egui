'use strict';

const Controller = require('egg').Controller;

class PutcontentController extends Controller {
 
 

  async index() {
		const { ctx } = this;
		const conten = { content:ctx.request.body.content }
		
		
		
		const conte = await this.ctx.service.user.gonggong(conten);
    ctx.body = {
      code: 200,
      data: '存储成功',
    };
    this.ctx.status = 200;
		
  }
	

}

module.exports = PutcontentController;