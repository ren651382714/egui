<template>
		<div id="app">
			<router-link :to="{path:'login'}">login1</router-link>
			<router-link :to="{path:'login2'}">login2</router-link>
			<router-view></router-view>
		</div>
</template>

<script>
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN'

export default {
  name: 'app',
  data() {
    return {
      zh_CN,
    }
  },
  
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
