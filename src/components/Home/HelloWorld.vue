<template>
  <div>
    <!-- 导航 -->
      <Category />
    <!-- 轮播图 -->
      <Banner />
    <!-- 列表展示 -->
    <Lists />
    <div>

    </div>
  </div>
</template>

<script>
import Category from './Category'//导入导航
import Banner from './Banner'//导入轮播
import Lists from './Lists'//导入列表
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '这是首页'
    }
  },
  components:{ 
    Category,
      Banner,
      Lists

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
