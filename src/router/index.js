import Vue from 'vue'
import Router from 'vue-router'
// @ 指的是src文件夹
import Home from '@/pages/home/Home'
import List from '@/pages/list/List'
Vue.use(Router)

export default new Router({
  // 定义path
  routes: [
    {
      path: '/',
      // 根路由对应的是 helloworld组件
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
// 路由就是根据网址的不同 返回给用户的内容不同
