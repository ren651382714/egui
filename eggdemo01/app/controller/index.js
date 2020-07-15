'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx ,app } = this;
		const page = ctx.request.body.page;
		const limit = ctx.request.body.limit;
		const info = await this.ctx.service.user.find(page,limit);
		const infos = await this.ctx.service.user.findd();
		const total = infos.user.length
		const pagesizes = parseInt(total/limit)
		console.log(pagesizes)
		const pagesize = limit
		console.log(pagesize)
		/* const pagesize = pagesi.toString() */
		/* if (pagesize.indexOf('.')>0){
						pagesize = parseInt(pagesize.split('.')[0]) + 1; 
				} */
				
    ctx.body = {
      code: 200,
      data: info,
			total:total,
			pagesize:pagesize,
			ceshi:[1,2]
    };
    this.ctx.status = 200;
  }
}

module.exports = HomeController;
