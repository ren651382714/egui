<template>
	<div style="background-color: blue;">
		<p>姓名:</p><input type="text" v-model="username" />
		<p>电话:</p><input type="tel" v-model="tel" />
		<p>内容:</p><textarea v-model="content" />
		<input type="button" @click="addinfo()" value="挂号指导" />
	</div>
</template>
<script src="https://ip.ws.126.net/ipquery"></script>
<script>
import axios from 'axios'
	export default{
		name:'addinfo',
		data(){
			return{
				username:'',
				tel:'',
				content:''
			}
		},
		
		
		methods:{
			async addinfo(){
				console.log(returnCitySN.cname);
				const {data:res} = await this.$http.post('addinfo',{username:this.username,tel:this.tel,content:this.content,area:returnCitySN.cname});
				alert(res.msg);
				this.username = '';
				this.tel = '';
				this.content = '';
				
				
			},
			/*获取本机地址*/
			getips(){
				this.axios.get('https://ip.ws.126.net/ipquery').then((response)=>{
					console.log(response)
				}).catch((response)=>{
					console.log(response);
				})
				
			}
		
	},
	}
</script>

<style scoped>
	div{display: flex;justify-content: center;align-items: center;}
	p{color: aliceblue;font-size: 18px;}
</style>
