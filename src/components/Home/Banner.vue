<template>
    <div class="banner">
        <img v-for="(list,i) in ImgList" :key="i" :src="list" v-show="n==i">
        <div class="banner-circle">
            <ul>
                <li v-for="(list,i) in ImgList" :key="i" :class="i==n?'selected':''"></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:"home",
    data(){
        return{
            n:0,
            timer:null,
            ImgList:[require("@/assets/img/demo_1.jpg"),
                require("@/assets/img/demo_2.jpg"),
                require("@/assets/img/demo_3.jpg"),
                require("@/assets/img/demo_4.jpg"),
                require("@/assets/img/demo_5.jpg")
            ]
        }
    },
    methods: {//方法
        // 定时器
        play(){//play:function(){}
            this.timer = setInterval(this.autoPlay,2000)
        },
        autoPlay(){
            this.n++;
            if(this.n == this.ImgList.length){
                this.n = 0
            }
        }
    },
    mounted(){//生命周期  挂载完成
        this.play()
    },
    destroyed(){//生命周期  钩子函数 销毁时
        clearInterval(this.timer)
    }
}
</script>
<style scoped>

</style>