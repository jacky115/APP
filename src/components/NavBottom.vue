<template>
  <!-- 底部导航 -->
  <div class="nav-bottom">
    <router-link v-for="(liste,i) in liste" :key="i" :to="liste.url" exact>
      <i class="iconfont " :class="liste.icon"></i>
      <label for="">{{liste.title}}</label>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      msg: "",
      liste:[
        {title:'首页',url:'/home',icon:'icon-shouye3'},
        {title:'发现',url:'/find',icon:'icon-faxian2'},
        {title:'订单',url:'/order',icon:'icon-icon1'},
        {title:'我的',url:'/me',icon:'icon-wode1'}
      ]
    };
  }
};
</script>
<style scope>
  .active{
    color:red;
  }
</style>
