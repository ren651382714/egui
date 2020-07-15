'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx ,app} = this;
		
    ctx.body = '`你好<p style="color:red"> 这里是首页</p>`';
  }
}

module.exports = HomeController;
