'use strict';

const Controller = require('egg').Controller;

class CustomController extends Controller {
  /* 更改古楼密码 接口 */
  async adduser() {
    const { ctx } = this;

    const options = { username: ctx.request.body.username, password: ctx.request.body.password,user_group_id:ctx.request.body.quanxian};
    const info = await this.ctx.service.user.addusers(options);
    ctx.body = {
      code: 200,
      data: info,
    };
    this.ctx.status = 200;
		
  }

}

module.exports = CustomController;
