export default{
    namespaced:true,
    // 控制底部导航是否显示
    state:{
        isShowFooter:true,
        // jwt
        _token:''
    },
    mutations:{
        // 设置是否显示底部导航
        setFooter(state,arg){
            state.isShowFooter=arg
        },
        // 更新jwt
        setJwt(state,arg){
            state._token =arg
            localStorage.setItem('_token',arg)
        }

    },
}