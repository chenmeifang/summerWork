// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
// import Home from './components/HelloFromVux'
import router from './router/index'
import Vuex from 'vuex'
Vue.use(VueRouter)
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 4
  },
  mutations: {
  }
})
/* const routes = [{
  path: '/',
  component: Home
}] */
// 还不理解注释掉的这两个东西是用来干嘛的
/* const router = new VueRouter({
  routes
}) */

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  // 挂载路由对象
  // 也可以写成：
  // router：router
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
