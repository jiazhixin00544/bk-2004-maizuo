import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    // 状态：（数据源，用来存储数据，共享数据）
    state:{
        // 定义一个数据源(可使用任意类型，)
        num:0,
        num1:100,
    },
    // 用于存放修改状态的方法（同步操作）
    // 
    mutations:{
        // 参数1,表示原数据对象，arg表示新数据
        setNum(state,arg){
            // 每次调用，+arg（不需要return,直接修改即可）
            state.num +=arg
        },
        setNum1(state,arg){
            // 每次调用，+arg（不需要return,直接修改即可）
            state.num1 +=arg
        },

    },
    // 用来存放修改状态的方法（异步操作）
    actions:{
        asyncSetNum(context,arg){
            setTimeout(()=>{
                // 修改数据
                context.commit('setNum1',arg)
            },1000)
        }

    },
    // 用于存储对数据进行加工处理的方法(类似于计算属性)
    getters:{

    },
    // 用于存放模块的（从前四个模块抽离出去形成的模块）
    modules:{

    }
})