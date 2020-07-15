<template>
  <div id="app">
   
    <div>
      <router-link to="/about">关于</router-link> |
			<router-link to="/addinfo">添加患者信息</router-link> |
			<router-link to="/getinfo">查询患者信息</router-link> |
			<router-link to="/logo">上传图片</router-link> |
    </div>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
