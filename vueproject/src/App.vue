<template>
  <div id="app">
    <x-header>This is the page title.</x-header>
    <router-view></router-view>
    <tabbar>
      <tabbar-item link="/home">
        <!-- <router-link to="/home"> -->
          <img slot="icon">
          <span slot="label">首页</span>
        <!-- </router-link> -->
      </tabbar-item>
      <tabbar-item show-dot link="/member">
        <img slot="icon">
        <span slot="label">会员</span>
      </tabbar-item>
      <tabbar-item link="/shopcar">
        <img slot="icon">
        <span slot="label">购物车</span>
      </tabbar-item>
      <tabbar-item badge="2" link="/search">
        <img slot="icon">
        <span slot="label">搜索 </span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { XHeader, Tabbar, TabbarItem } from 'vux'
export default {
  name: 'app',
  components: {
    XHeader,
    Tabbar,
    TabbarItem
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
