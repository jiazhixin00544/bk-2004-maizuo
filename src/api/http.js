// 封装axios
import axios from 'axios'
import store from "@/store/index"
// 响应拦截器
axios.interceptors.response.use((ret)=>{
    // 进行响应的拦截处理
    // if(ret.data){
    //     return ret.data
    // }else{
    //     return ret
    // }
    // 拦截jwt
    if(ret.data._token){
        // 存储在哪里（vuex+localstore）
        store.commit('global/setJwt',ret.data._token)

    }
    return ret.data || ret

})
// 请求拦截器
axios.interceptors.request.use((cfg)=>{
    cfg.headers['authorization']=store.state.global._token
    return cfg

})
// 导出
export default axios