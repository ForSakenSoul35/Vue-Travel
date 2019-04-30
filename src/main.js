// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'
// 入口文件
Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
// 执行index.html
// html 上有个 id="app"的 div 表示新建的vue实例 挂载到这个地方
// 新建的vue实例中有组件 App以及模板
//
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
