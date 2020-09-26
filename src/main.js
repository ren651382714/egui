import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant.js'
import axios from 'axios'
import './plugins/ant-design-vue.js'

axios.defaults.baseURL = 'http://127.0.0.1:7001/';
axios.interceptors.request.use(config => {
  config.headers.token = window.localStorage.getItem('token')
  return config
})

Vue.config.productionTip = false
Vue.prototype.$http = axios



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
