'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async jwt() {
    const { ctx } = this;
    const userId = '123456789';
		const result = await ctx.service.user.signjwt(userId);
		ctx.body = result;

  }
}

module.exports = HomeController;
