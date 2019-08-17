import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入mint-ui
import MintUI from "mint-ui"
import "mint-ui/lib/style.css"
Vue.use(MintUI)
//引入字体图标
import "./font/iconfont.css"
//引入axios第三方ajax模块
import axios from "axios"
axios.defaults.baseURL="http://127.0.0.1:3000/"
axios.defaults.withCredentials=true;
Vue.prototype.axios=axios


Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
