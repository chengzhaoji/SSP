import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"


Vue.use(Router)
export default new Router({
  routes: [
    //组件访问路径    组件名 
    {path:'/',component:HelloContainer},
    
  ]
})