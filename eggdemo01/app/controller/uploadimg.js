'use strict';
const Controller = require('egg').Controller;
// 文件存储
const fs = require('fs');
const path = require('path');
const pump= require('mz-modules/pump');
 
class UploadimgController extends Controller {
  async uploadImg() {
    let parts = this.ctx.multipart({ autoFields: true });
    let stream, img_list = []; // 图片访问地址集合
    while ((stream = await parts()) != null) {
      if (!stream.filename) {
        break;
      }
      // 文件名为：时间戳+随机字符串+.文件后缀
      let filename = (new Date()).getTime() + Math.random().toString(36).substr(2) + path.extname(stream.filename).toLocaleLowerCase();
      // 上传图片的目录
      let target = 'app/public/admin/upload/' + filename;
      img_list.push('/public/admin/upload/' + filename);
      let writeStream = fs.createWriteStream(target);
			const imgs = { img: "http://127.0.0.1:7001/public/admin/upload/"+filename };
			const info = await this.ctx.service.user.putimg(imgs);
      await pump(stream, writeStream);
			
			
    }
    console.log(parts.field) // 表单其他数据，可以根据需要处理
    this.ctx.body = {
      url: img_list,
      
    }
  }
}
 
module.exports = UploadimgController;
