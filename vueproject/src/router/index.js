import Vue from 'vue'
import Router from 'vue-router'
// 导入路由的包
// import HelloWorld from '@/components/HelloWorld'
import HomeContainer from '../components/tabbar/HomeContainer.vue'
import MemberContainer from '../components/tabbar/MemberContainer.vue'
import ShopcarContainer from '../components/tabbar/shopcarContainer.vue'
import SearchContainer from '../components/tabbar/SearchContainer.vue'
import News from '../components/News.vue'

Vue.use(Router)
// 安装路由
export default new Router({
  routes: [
    {
      path: '/',
      // 重定向
      redirect: '/home'
    },
    {
      // 路径是自己配置的
      path: '/home',
      // 这个路径配置有点问题，到底是配/还是/home   这里有个路由重定向的问题
      // name: 'HomeContainer',
      component: HomeContainer
    },
    {
      path: '/member',
      // name: 'MemberContainer',
      component: MemberContainer
    },
    {
      path: '/shopcar',
      // name: 'ShopcarContainer',
      component: ShopcarContainer
    },
    {
      path: '/search',
      // name: 'SearchContainer',
      component: SearchContainer
    },
    {
      path: '/home/news',
      component: News
    }
  ]
})
