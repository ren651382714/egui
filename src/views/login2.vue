<template>
	<div class="login">
		<div class="login_cont">
			<h3 class="bai">您好,</h3>
			<h4>欢迎进入xx系统</h4>
			<van-cell-group>
				<van-field
					v-model="username"
					color="yellow"
					label="用户名"
					placeholder="请输入用户名"
				/>
				<van-field
					v-model="password"
					type="password"
					label="密码"
					placeholder="请输入密码"
				/>
			</van-cell-group>
			
			<van-button @click="logins()">注册</van-button>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Login2',
		data(){
			return{
				username:'',
				password:''
			}
		},
		methods: {
			async logins(){
				const {data:res} = await this.$http.post('ifuser',{user:this.username,password:this.password});
				console.log(res);
				alert(res.msg) 
			},
			
		}
	} 
</script>

<style>
	.login{
		background: #2C3E50;
		height: 935px;
	}
	.bai{
		color: aliceblue;
		font-size: 36px;
	}
	.login_cont{
		display: flex;
		width: 80%;
		margin: 0 auto;
		flex-direction: column;
		justify-content: left;
		padding-top: 8%;
		text-align: text-align;
	}
	.login_cont h3,.login_cont h4{
		color: #F0F8FF;
		font-size: 24;
	}
	.van-cell{
		background-color:#2C3E50 ;
	}
	.van-field__label span{
		color: #F0F8FF;
		font-size: 19px;
	}
	.van-button--normal{
		margin-top: 25px;
		background-color: #2C3E50;
	}
	.van-button__content span{
		color: #F0F8FF;
	}
	.van-field__control{
		color: #fff;
	}
</style>
