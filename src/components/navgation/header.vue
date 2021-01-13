<template>
    <div :class="{header:isSticky}" style>
        <!-- 头部 -->
        <van-tabs @click="onClick" v-model="active">
        <van-tab title="正在热映"></van-tab>
        <van-tab title="即将上映"></van-tab>
</van-tabs>
</div>
</template>
<script>
import Vue from 'vue';
import { Tab, Tabs } from 'vant';
Vue.use(Tab);
Vue.use(Tabs);
export default {
    data(){
        return{
            active:0,
            urls:["/Films/nowPlaying","/Films/comingSoon"],
            isSticky:false,
        }
    },
    created(){
        this.active = this.urls.indexOf(this.$route.path);

    },
    mounted(){
        window.addEventListener("scroll",()=>{
            let scrollTop=document.documentElement.scrollTop
            if(scrollTop>100){
                this.isSticky=true
                }else{
                    this.isSticky=false
                }
        })


    },
    methods: {
    onClick(index, title) {
        this.$router.push(this.urls[index])
    },
    },
}
</script>
<style scoped>
.header{
    position: fixed;
    width: 100%;
    z-index: 999;   
}
</style>