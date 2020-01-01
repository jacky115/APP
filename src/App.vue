<template>
  <div id="app">
    <!-- 路由动态展示 -->
    <router-view />
    <!-- 底部导航 引入组件 -->
    <NavBottom/>
  </div>
</template>

<script>
import NavBottom from './components/NavBottom'
export default {
  name: "App",
  components:{
    NavBottom
  }
}
</script>

<style>
@import "./assets/index.css";
</style>
