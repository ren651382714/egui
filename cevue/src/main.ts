import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import './plugins/element.js'


axios.defaults.baseURL = 'http://localhost:7001/'
axios.interceptors.request.use(config => {
  config.headers.token = window.localStorage.getItem('token')
  return config
})

Vue.config.productionTip = false
Vue.prototype.$http = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
