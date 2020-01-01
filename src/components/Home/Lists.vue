<template>
    <div>
        列表展示
    </div>
</template>
import axios from ''
<script>
export default {
    data(){
        return{

        }
    },
    methods: {
        getLists(){
            axios.get("https://127.0.0.1:3333/home").then(res=>{//res后端返回的数据
                console.log(res)
            }).catch(error=>{//失败

            })
        }
    },
    components:{

    },
    mounted(){
        getLists()
    }
}
</script>
<style >
    
</style>