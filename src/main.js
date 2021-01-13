import Vue from 'vue'
import App from './App.vue'
import router from './router'
// axios导入
import axios from '@/api/http'
// 导入VUEX
import store from '@/store/index'
// 将需要的内容挂载到vue原型上
Vue.prototype.$http=axios
// 从缓冲取出jwt
let  jwt =localStorage.getItem("_token")
if(jwt){
  store.commit('global/setJwt',jwt)
}
// 定义事件中心
// Vue.prototype.$eventBus=new Vue()
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
