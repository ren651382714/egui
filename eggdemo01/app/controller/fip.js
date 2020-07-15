'use strict';

const Controller = require('egg').Controller;

class FipController extends Controller {
 
  async fip() {
    const { ctx } = this;

    const ip = ctx.request.ip

		console.log(ip);
    
    ctx.body = {
      code: 200,
      data: ip,
    };
    this.ctx.status = 200;
		
  }

}

module.exports = FipController;