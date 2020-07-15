'use strict';

const Controller = require('egg').Controller;

class AddInfoController extends Controller {
 
  async addinfo() {
    const { ctx } = this;
		const	users	= ctx.request.body.username;
    const options = { username: ctx.request.body.username, tel: ctx.request.body.tel,content:ctx.request.body.content,area: ctx.request.body.area};
		console.log(options);
		const ifinfo = await this.ctx.service.user.finds(users);
		console.log("测试:"+ifinfo);
			
		if(ifinfo == false ){
			ctx.body = {
			  code: 200,
			  msg: "用户名已存在",
			};
		}else{
			const info = await this.ctx.service.user.addinfo(options);
			ctx.body = {
			  code: 200,
			  data: info,
				msg:'发送成功'
			};
		}
    
    this.ctx.status = 200;
		
  }

}

module.exports = AddInfoController;
