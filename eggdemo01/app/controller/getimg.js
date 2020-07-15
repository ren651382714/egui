'use strict';

const Controller = require('egg').Controller;

class GetImgController extends Controller {
 
  async getimg() {
    const { ctx } = this;

   

    const info = await this.ctx.service.user.getimg();
    ctx.body = {
      code: 200,
      data: info,
    };
    this.ctx.status = 200;
		
  }

}

module.exports = GetImgController;