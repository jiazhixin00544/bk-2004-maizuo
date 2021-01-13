<template>
  <div id="app">
    <Footer v-show="isShow"></Footer>
    <router-view/>
  </div>
</template>
<script>
// 导入底部导航组件
import Footer from '@/components/navgation/footer'
export default {
  data(){
    return{
      // isShow: true,
    }
  },
  // 注册组件
  components: {
    Footer,
  },
  //接收数据(监听SHOWfooter事件)
  created(){
    // this.$eventBus.$on("showFooter",(flag)=>{
    //   this.isShow = flag
    //   console.log(this.isShow)
    // })
    
  },
    computed: {
        isShow() {
            return this.$store.state.global.isShowFooter;
        },
    },

}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
