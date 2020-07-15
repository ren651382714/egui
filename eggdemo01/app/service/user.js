'use strict';

const Service = require('egg').Service;

class UserService extends Service {
	
	async addinfo(options) {
		const conn = await this.app.mysql.beginTransaction();
		try {
		  const adduser = await this.app.mysql.insert('xr_cun', options);
		  await conn.commit(); // 提交事务
		  return { adduser };
		} catch (err) {
		  await conn.rollback();// 回滚事务
		  throw err;
		}
	}
	async gonggong(conten) {
		const conn = await this.app.mysql.beginTransaction();
		try {
		  const adduser = await this.app.mysql.insert('xr_content', conten);
		  await conn.commit(); // 提交事务
		  return { adduser };
		} catch (err) {
		  await conn.rollback();// 回滚事务
		  throw err;
		}
	}
	async putimg(imgs) {
		const conn = await this.app.mysql.beginTransaction();
		try {
		  const img = await this.app.mysql.insert('xr_img', imgs);
		  await conn.commit(); // 提交事务
		  return { img };
		} catch (err) {
		  await conn.rollback();// 回滚事务
		  throw err;
		}
	}
	async getimg() {
		const content = await this.app.mysql.query('select * from xr_img','');
		
		return {content};
	}
	async qugonggong() {
		const content = await this.app.mysql.query('select * from xr_content','');
		return {content};
	}
	
	
	async mdpaw(psw) {
		const crypto = require('crypto');
		const md5 = crypto.createHash('md5');
		const psws = crypto.createHash('md5').update(psw).digest('hex');
		console.log(psws);
		return { psws };
	}
	async finds(users){
		const user = await this.app.mysql.query('select * from xr_cun where username like "'+users+'"','');
		console.log("第一次:"+user);
		if(user.length == 0 || user == null ||user.length ==""){
			return true
		}else{
			return false;
		}
		
		
	}
	async findd(){
		const user = await this.app.mysql.query('select * from xr_cun','');
		return {user}
		
		
	}
  async find(page,limit) {
		const start = (page - 1) * limit;
    const user = await this.app.mysql.query('select * from xr_cun limit '+start+','+limit,'');
		
    return {user};
  }
	async signjwt(userName,psw){
		
		if(userName&&psw){
				const token = this.app.jwt.sign({ userName,psw }, this.app.config.jwt.secret,{expiresIn:'1h'});
				
				return { token };
			}else{
				return '没传';
			}
	
	}
  async addusers(options) {
    const conn = await this.app.mysql.beginTransaction();
    try {
      const adduser = await this.app.mysql.insert('xr_user', options);
      await conn.commit(); // 提交事务
      return { adduser };
    } catch (err) {
      await conn.rollback();// 回滚事务
      throw err;
    }


  }

  /* const adduser = await this.app.mysql.select('xr_user',{id:1});
	return adduser[0].name; */
}

module.exports = UserService;
