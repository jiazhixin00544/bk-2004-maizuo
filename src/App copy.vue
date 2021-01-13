<template>
  <div id="app">
    <!-- 只是进行测试，测试完毕删除即可 -->
    <van-cell title="选择单个日期" :value="date" @click="show = true" />
<van-calendar v-model="show" @confirm="onConfirm" />
    <router-view/>
  </div>
</template>
<script>
// 导入want组件
import Vue from 'vue';
import { Calendar,Cell } from 'vant';
Vue.use(Calendar);
Vue.use(Cell);
// 导入uri地址模块
import uri from "@/config/uri"
export default {
  data() {
    return {
      date: '',
      show: false,
    };
  },
  methods: {
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    },
  },
  
  created(){
    this.$http.get(uri.getCities).then((ret)=>{
      console.log(ret)
    })
    this.$http.get(uri.getNowPlaying).then((ret)=>{
      console.log(ret)
    })
    this.$http.get(uri.getComingSoon).then((ret)=>{
      console.log(ret)
    })
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
