<template>
<div class="listFilm">
    <!-- 功能，下拉获取数据 -->
    <van-pull-refresh v-model="isLoading2" @refresh="onRefresh">
    <!-- <p>刷新次数: {{ count }}</p> -->
    <div v-show="isLoading" class="loading">
        <van-loading type="spinner" />
    </div>
    <div class="">
        <!-- 循环列表信息 -->
        <van-card @click="goDetail(item.filmId)" class="playing" v-for="item in list" :key="item.filmID">
        <!-- 封面图片 -->
        <template #thumb>
            <img class="pictures" :src="item.poster" width="68" />
        </template>
        <!-- 电影名称 -->
        <template #title>
            <div class="title">
            {{ item.name }}
            <span class="item">{{ item.filmType.name }}</span>
            </div>
        </template>
        <!-- 电影的介绍 -->
        <template #desc>
            <div class="filmInformation">
            <div class="showGrades">
                观众评分<span class="grades">{{ item.grade }}分</span>
            </div>
            <div class="showActors">
                主演：{{ item.actors | parseActors }}
            </div>
            <div class="showTime">
                {{ item.nation }} | {{ item.runtime }}分钟
            </div>
            <div class="buyTicket">购票</div>
            </div>
        </template>
        </van-card>
    </div>
    </van-pull-refresh>
</div>
</template>
<script>
// 获取列表数据（发送网络请求，请求数据）
// 导入地址模块
import uri from "@/config/uri";
// 添加（正在加载组件）
import Vue from "vue";
import { Loading, Card, Tag, Button, Toast,PullRefresh } from "vant";
Vue.use(Loading);
Vue.use(Card);
Vue.use(Tag);
Vue.use(Button);
Vue.use(Toast);
Vue.use(PullRefresh);

export default {
data() {
    return {
    list: [],
    isLoading: true,
    count: 0,
    isLoading2: false,
    pageNum:1,
    };
},
  // 这里设置一个过滤器（把需要的信息拿出来）
filters: {
    parseActors(actors) {
    if (actors) {
        var str = " ";
        actors.forEach((element) => {
        str += element.name + " ";
        });
        return str.substr(0, 14) + "···";
    } else {
        return "暂无主演";
    }
    },
},
methods: {
    // 去详情页
    goDetail(filmId){
        this.$router.push('/film/'+filmId)
    },
    onRefresh() {
        this.getData()
        // console.log(this.pageNum)
    },
    getData(){
        this.$http.get(uri.getNowPlaying+"?pageNum="+this.pageNum).then((ret) => {
        // console.log(ret)
        if (ret.status == 0) {
            // 判断当前页面页数（目前我们页面只有4页，过多不需要在请求）
            if(this.pageNum<=Math.ceil(ret.data.total/10)){
            // 请求成功
            this.list =[...ret.data.films,...this.list];
            this.pageNum++
            }
        } else {
        // 请求失败
        Toast.fail("网络繁忙");
        }
        // 完成以后LOADING隐藏
        this.isLoading = false;
        this.isLoading2 = false;
        })
},
    
},
created() {
            this.getData()

    // this.$http.get(uri.getNowPlaying).then((ret) => {
    //   // console.log(ret)
    // if (ret.status == 0) {
    //     // 请求成功
    //     this.list = ret.data.films;
    // } else {
    //     // 请求失败
    //     Toast.fail("网络繁忙");
    // }
    // // 完成以后LOADING隐藏
    // this.isLoading = false;
    // });
},
};
</script>
<style lang="scss" scoped>
.loading {
  text-align: center;
}
.pictures {
  border-radius: 0;
}
.item {
    color: white;
    padding-left: 5px;
    font-weight: normal;
    display: block;
    width: 20px;
    height: 14px;
    background-color:#D2D6DC;
    line-height: 14px;
    margin-left: 5px;
}
.title {
    font-weight: 800;
    display: flex;
    margin-bottom: 5px;
    margin-top: 5px;
}
.grades {
    color: red;
    padding-left: 10px;
}
.filmInformation {
    position: relative;
}
.buyTicket {
    text-align: center;
    line-height: 18px;
    font-size: 12px;
    width: 40px;
    height: 18px;
  // background-color: red;
    color: #ffa05e;
    border: 1px solid #ffa05e;
    position: absolute;
    top: 0;
    right: 0;
}
.showGrades,
.showActors,
.showTime {
    margin-top: 8px;
    color: #797D82
}
.listFilm {
    margin-bottom: 60px;
}</style
>>
