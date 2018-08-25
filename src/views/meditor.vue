<template>
    <div class="meditor">
        <mark-down 
            @on-save="save"
            :autoSave="false"
            :title="'hello world'"
            :initialValue="'## 我是初始化内容'"
            :toolbars="config" />
    </div>
</template>

<script>
// https://github.com/coinsuper/vue-markdown  文档地址
import MarkDown from 'vue-meditor'
export default {
    data(){
        return{
            config:{
                print:false // 隐藏掉打印功能
            }
        }
    },
    methods:{
        save(a,b,c){
            console.log(a,b,c)
        }
    },
    components:{
        MarkDown
    }
}
</script>


<style lang="scss" scoped>
</style>

