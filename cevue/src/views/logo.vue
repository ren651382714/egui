<template>
	<div>
		<h2>上传头像</h2>
		
		<div class="box"><img :src="srcs" v-if="this.srcs" /></div>
		
		<input type="file" @change="uploadFile($event)"/>
		
		
		<button @click="getimg()">获取图片</button>
		
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
	  name: 'logoimg',
	  data(){
			return{
				file:'',
				srcs:''
				
			}
		},
		created() {
			this.getimg();
		},
		methods:{
		    uploadFile:function(event){
		          this.file = event.target.files[0]; //获取input的图片file值
		          let param = new FormData(); // 创建form对象
		          param.append('imgFile', this.file);//对应后台接收图片名
		          axios.post('http://localhost:7001/uploadimg',param)
		            .then(function(res){
		              console.log(res);
		            })
		            .catch(function(error){
		              console.log(error);
		            });
								
		        },
						async getimg(){
							const {data:res} = await this.$http.get('getimg',{});
							console.log(res.data.content)
							this.srcs = res.data.content.pop().img
						}
	},
	}
</script>

<style scoped>
	.box{height: 250px;width: 250px;margin: 0 auto;text-align: center;}
	img{
		border-radius: 50%;
		width: 80px;
		height: 80px;
	}
</style>
