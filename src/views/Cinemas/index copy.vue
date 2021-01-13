<template>
    <div>
    <van-index-bar :index-list="indexList">
        <div v-for="(item, index) in dataList" :key="index">
        <van-index-anchor index="1">{{ item.title }}</van-index-anchor>
        <van-cell
        :title="city.name"
        v-for="city in item.data"
        :key="city.cityId"
        @click="jumpIndex"
        />
    </div>
    </van-index-bar>
</div>
</template>
<script>
// 导入vant
import Vue from "vue";
import { IndexBar, IndexAnchor, Cell } from "vant";
Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Cell);
// 导入路径（以便获取我们需要的城市信息）
import uri from "@/config/uri";
export default {
  data() {
    return {
      // 右侧索引
      indexList: [],
      // 主体数据
      dataList: [],
      // 零时存放26字母数组
      charList: [],
    };
  },
  methods:{
    jumpIndex(){
        this.$router.push("/Films/nowPlaying");

    }
  },
  created() {
    this.$http.get(uri.getCities).then((ret) => {
      // console.log(ret)
      if (ret.status == 0) {
        // 请求成功
        // 产生数据需要26个大写字母，可结合ASICC码
        for (let i = 65; i <= 90; i++) {
          this.charList.push(String.fromCharCode(i));
        }
        // 将26字母与城市信息首字母比较（比对上，大写字母留下，否则提出）
        // this.charList.forEach(el=>{
        //     ret.data.cities.forEach(item=>{
        //         if(el.toLowerCase()==item.pinyin.substr(0,1)){
        //             if(!this.indexList.includes(el)){
        //                 this.indexList.push(el)
        //             }
        //         }
        //     })
        // })
        // filter
        this.charList.forEach((el) => {
          // el每个大写字母
          let tmp = ret.data.cities.filter(
            (item) => el.toLowerCase() == item.pinyin.substr(0, 1)
          );
          // 判断是否为空
          if (tmp.length > 0) {
            this.indexList.push(el);
            this.dataList.push({
              title: el,
              data: tmp,
            });
          }
        });
      }
    });
  },
};
</script>
> <style lang="scss" scoped>
</style>
