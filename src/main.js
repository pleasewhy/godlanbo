// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import Qs from 'qs'
import store from './vuex/store'
import 'element-ui/lib/theme-chalk/index.css'
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$axios = axios
Vue.prototype.qs = Qs
Vue.prototype.HOME='/api'
Vue.use(ElementUI) 
Vue.config.productionTip = false

axios.interceptors.request.use(config => {
    config.headers.permission = localStorage.getItem("Authorization")
    return config
})
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
