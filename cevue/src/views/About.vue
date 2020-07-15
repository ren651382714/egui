<template>
  <div class="about">
    <h1>给古楼注册账户{{dat}}</h1>
		<button @click="getSqls()">按钮</button>
		
		<p>用户名:<input  type="text" v-model="username"/></p>
		<p>密码:<input v-model="password" type="text"/></p>
		
		<div>是否能登录：<input  type="radio"  :checked="picked"  @input="pickeds" />
		</div>
		<button @click="addgulou()">添加古楼账户</button>
		
		
		
		<p>密码加密:<input type="text" v-model="paw"/></p>
		<p>原密码:{{paw}}</p>
		<p>加密后的密码:{{passmd}}</p>
		<button @click="paword()">密码加密</button>
		<h1>校验token</h1>
		<button @click="isbtn()">校验token</button>
		<p>{{isttt}}</p>
		
	
		<button @click="getfip()">访问ip</button>
		
	<!-- 	<button @click="socketdemo">socketdemo测试</button> -->
  </div>
</template>
<script>
	export default{
		name:'about',
		data(){
			return{
				username:'',
				password:'',
				paw:'',
				isttt:'',
				picked:false,
				passmd:'',
				name:'ssssssa',
				dat:'你好'
			}
		},
		methods:{
			
			pickeds(){
				this.picked = !this.picked;
			},
			
			async isbtn(){
				const {data:res} = await this.$http.get('index',{});
				this.isttt = res;
			},
			
			async paword(){
				const {data:res} = await this.$http.post('mdpas',{psw:this.paw});
				alert(res.message);
				this.passmd = res.md5.psws;
				console.log(res);
				
			},
			
			async getSqls(){
				
				const {data:res} = await this.$http.post('login',{userName:this.name,psw:'aef484683fc283db3c98551d67ffe218'});
				console.log(res);
				localStorage.setItem('token', res.token.token);
				this.dat = res.token.token;
				
			},
			async addgulou(){
				const {data:res} = await this.$http.post('adduser',{username:this.username,password:'aef484683fc283db3c98551d67ffe218',quanxian:this.picked==true?1:0,});
				alert("添加成功");
				this.username = '';
				this.password = '';
				console.log(res);
			},
			async getfip(){
				const {data:res} = await this.$http.get('fip',{});
				alert("添加成功");
			
				console.log(res);
			}
			
			
		}
	}
</script>