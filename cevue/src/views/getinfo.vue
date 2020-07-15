<template>
	<div>
		<h3>获取患者信息</h3>
		<div class="div">
			<h2>备忘录</h2>
			<textarea v-model="content" style="width: 400px;height: 350px;"></textarea>
			<button @click="tijiao()">上传到服务器</button>
			<button @click="qu()">取出上一条备忘录</button>
		</div>
		<el-table
			:data="tableData"
			style="width: 100%">
			<el-table-column
				prop="id"
				label="id"
				width="180">
			</el-table-column>
			<el-table-column
				prop="username"
				label="患者姓名"
				width="180">
			</el-table-column>
			<el-table-column
				prop="tel"
				label="患者电话"
				width="180">
			</el-table-column>
			<el-table-column
				prop="area"
				label="患者地区"
				width="180">
			</el-table-column>
			<el-table-column
				prop="content"
				label="留言内容">
			</el-table-column>
		</el-table>
		<div class="block">
			<el-pagination
					small
					@size-change="handleSizeChange"
					@current-change="handleCurrentChange"
					:current-page.sync="page"
					:page-size="pagesize"
					layout="total, prev, pager, next"
					:total="total">
			</el-pagination>
		</div>
		
		<button @click="getinfos()">获取患者信息</button>
	</div>
	
</template>

<script>
	export default{
		name:'geuinfo',
		data(){
			return {
					content:'',
					total:0,
					tableData:[],
					limit:7,
					page:1,
					pagesize:0,
						
				}
			},
			created(){
				this.getinfos();
			},
			methods:{
				handleSizeChange(val){
					this.limit=val  
				},
				handleCurrentChange(val){
					this.page = val;
					this.getinfos();
				},
				async getinfos(){
					const {data:res} = await this.$http.post('getinfo',{page:this.page,limit:this.limit});
					this.tableData = res.data.user;
					this.total = res.total;
				
					this.pagesize =res.pagesize
					
				},
				async tijiao(){
					
					const {data:res} = await this.$http.post('putcontent',{content:this.content});
					this.$message.success('提交成功');
				},
				async qu(){
					const {data:res} = await this.$http.get('qucontent',{});
					console.log(res.data)
					this.content = res.data.content.pop().content
				}
			}
		}
</script>

<style scoped>
	.div{display: flex; justify-content: center;flex-direction: column;}
	textarea{margin: 0 auto;}
	button{width: 20%; padding: 5px;margin: 20px auto;}
</style>
