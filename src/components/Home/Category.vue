<template>
        <div class="index-category">
        <div class="category" v-for="(list,i) in lists" :key="i">
          <i class="iconfont" :class="list.icon" :style="{background:list.color}"></i>
          <table>{{list.title}}</table>
        </div>
      </div>
</template>
<script>
export default {
    name:"",
    data(){
        return {
            lists:[
                {title:'美食',icon:'icon-meishi1',color:"#f607"},
                {title:'电影',icon:'icon-meishi1',color:"#f60"},
                {title:'住宿',icon:'icon-jiudianzhusu',color:"#ead07"}, 
                {title:'娱乐',icon:'icon-yule',color:"#ff6009"},
                {title:'外卖',icon:'icon-waimai',color:"#ac6d"},
                {title:'打车',icon:'icon-ziyuan5',color:"#f60"},
                {title:'景点',icon:'icon-lvyou3',color:"#bc45"},
                {title:'旅游',icon:'icon-lvyou',color:"#d57e"}
            ]
        } 
    }
}
</script>
<style scope>
    
</style>