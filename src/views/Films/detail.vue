<template>
<div class="">
    <!-- 图片信息 -->
    <div><img v-lazy="filmInfo.poster" width="100%" height="450px" /></div>
    <!-- 电影详情信息 -->
    <div class="filmDetail">
    <div class="filmName">
        {{ filmInfo.name }}<span class="filmGrades">{{ filmInfo.grade }}分</span>
    </div>
    <div class="filmCategory">{{ filmInfo.category }}</div>
    <div class="filmPremiereAt">{{ filmInfo.premiereAt | paresPremiereAt }}上映</div>
    <div>{{ filmInfo.nation }} | {{ filmInfo.runtime }}</div>
    <div class="filmSynopsis">影片详情介绍：{{ filmInfo.synopsis }}</div>
    </div>
    <!-- 演员名单轮播图 -->
    <!-- 显示剧照 -->
    <div class="filmActors ">
        <!-- 填坑 -->
        <Actors :key="filmInfo.actors.length">
        <div class="swiper-slide" v-for="(item,index) in filmInfo.actors" :key="index">
            <img :src="item.avatarAddress" width="80px">
        </div>
        </Actors>
    </div>
    <!-- 选座购票 -->
    <div class="chooseSit">选座购票</div>
    </div>
</template>
<script>
// 导入(懒加载)
import Lazyload from "vue-lazyload";
import Vue from "vue";
import { Toast } from "vant";
// 导入（moment包）
import moment from "moment";
Vue.use(Toast);
Vue.use(Lazyload, {
lazyComponent: true,
loading:
    "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2251237614,2173262015&fm=26&gp=0.jpg",
});
import uri from "@/config/uri";
// 导入演员信息组件
import Actors from "@/views/Films/actors";
// 导入映射系列的方法
import {mapMutations} from "vuex"

export default {
    data() {
    return {
        filmInfo: {actors: []},
    };
    },
    methods:{
        ...mapMutations("global",['setFooter'])
    },
    created() {
    // console.log(this.$route.params)
    this.$http
        .get(uri.getDetail + "?filmId=" + this.$route.params.filmID)
        .then((ret) => {
        // console.log(ret)
        if (ret.status == 0) {
          // 请求成功
            this.filmInfo = ret.data.film;
        } else {
            Toast.fail("网络繁忙，重新打开");
        }
        });
        // 在详情页通知根组件
        // this.$eventBus.$emit("showFooter",false)
        this.setFooter("false")
    },
    beforeDestroy(){
        console.log('我执行了')
        // this.$eventBus.$emit("showFooter",true)
        this.setFooter("true")

    },

    filters: {
    // 设置过滤器（过滤时间信息）
    paresPremiereAt(timestamp) {
      // console.log(moment(timestamp*1000).format("YYYY-MM-DD"))
      return moment(timestamp * 1000).format("YYYY-MM-DD");
    },
},
components: {
    // 导入我们的组件以后，这里需要注册组件
    Actors,
},
};
</script>
<style lang="scss" scoped>
    .chooseSit{
        background-color: #FF5F16;
        width: 100%;
        height: 50px;
        color: white;
        text-align: center;
        line-height: 50px;
        position: fixed;
        bottom: 0;
        z-index: 999;
        font-size: 24px;
        font-weight: 800;
    }
    .filmDetail{
        margin-left: 10px;
        color: #797D82;
    }
    .filmActors{
        margin-bottom: 80px;
    }
    .filmName{
        margin-top: 10px;
        font-weight: 800;
        font-size: 24px;
        margin-bottom: 10px;
        color: #191A1B;
    }
    // 电影评分
    .filmGrades{
        color: #FFCC6B;
        font-weight: normal;
        margin-left: 20px;
    }
    .filmCategory,.filmPremiereAt,.filmSynopsis{
        margin-bottom: 10px;
        font-size: 18px;
        margin-right: 8px;
    }

</style>
