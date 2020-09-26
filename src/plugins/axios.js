"use strict";

import axios from "axios";

// Full config:  https://github.com/axios/axios#request-config

// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.defaults.baseURL = 'http://85.10.205.173:3306/'

export default {
  install: function (Vue) {
    Object.defineProperty(Vue.prototype, '$http', { value: axios })
  }
}
