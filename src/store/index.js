import Vue from 'vue'
import Vuex from 'vuex'
// 导入模块
import global from "./modules/global"
Vue.use(Vuex)
export default new Vuex.Store({
    namespaced:true,

    // 状态：（数据源，用来存储数据，共享数据）
    state:{},
    mutations:{},
    actions:{},
    getters:{},
    modules:{
        // 这里是用于存放模块的
        global,

    }



})