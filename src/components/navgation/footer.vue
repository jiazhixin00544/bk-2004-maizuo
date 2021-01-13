<template>
    <div>
        <van-tabbar @change="changeItem" v-model="active" active-color="#ee0a24" inactive-color="#000">
        <van-tabbar-item icon="home-o">电影</van-tabbar-item>
        <van-tabbar-item icon="search">城市影院</van-tabbar-item>
        <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
</van-tabbar>
    </div>
</template>
<script>
// 导入
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar);
Vue.use(TabbarItem);

export default {
    data(){
        return{
            active: 0,
            // 定义底部导航所需要的地址，按照顺序定义
            urls:["/Films/nowPlaying","/cinemas",'/Center']
        }
    },
    // 生命周期
    created(){
        // 纠正刷新之后索引归零情况
        console.log(this.$route.path)
        var m=this.urls.indexOf(this.$route.path)
        this.active=m
        // console.log(this.active)
        // this.active = this.urls.indexOf(this.$route.path);
    },
    methods:{
        changeItem(index){
            console.log(index)
            // index为索引
            // 存在问题（刷新页面，地址栏不变）
            this.$router.push(this.urls[index])
        }
    }
}
</script>