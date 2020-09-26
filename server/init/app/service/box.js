const Service = require('egg').Service;

class UserService extends Service {
	
	async adduser(options) {
		const conn = await this.app.mysql.beginTransaction();
		try {
		  const adduser = await this.app.mysql.insert('user', options);
		  await conn.commit(); // 提交事务
		  return { adduser };
		} catch (err) {
		  await conn.rollback();// 回滚事务
		  throw err;
		}
	}
	async ifuser(users) {
		const conn = await this.app.mysql.beginTransaction();
		try {
		  const adduser = await this.app.mysql.query('update user set online="'+1+'" where user = "'+users+'"','');
			const result = await this.app.mysql.query('select * from user where user = "'+users+'"','')
		  await conn.commit(); // 提交事务
		  return { result };
		} catch (err) {
		  await conn.rollback();// 回滚事务
		  throw err;
		}
	}
	async getuser(users,password) {
		const user = await this.app.mysql.query('select * from user where user="'+users+'"and password="'+password+'"','');
		if(user.length == 0 || user == null ||user.length ==""){
			return true
		}else{
			return false;
		}
	}

  /* const adduser = await this.app.mysql.select('xr_user',{id:1});
	return adduser[0].name; */
}

module.exports = UserService;
