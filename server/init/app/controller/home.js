'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
		const users = ctx.request.body.user;
		const options = {user:ctx.request.body.user, password:ctx.request.body.password, online:'1'};
    
		
  }
}

module.exports = HomeController;
