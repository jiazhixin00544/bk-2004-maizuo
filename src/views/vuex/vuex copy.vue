<template>
    <div>
        <h1>这是vuex组件</h1>
            <button >触发修改</button>
        </div>
</template>
<script>
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
export default {
    created(){
        // (1)获取数据源数据
        // 获取state中的数据,但是不能给其赋值
        console.log(this.$store.state.num)
        console.log(this.$store.state.num1)
        // 赋值情况
        // this.$store.state.num=1234566
    },
    // 将全局函数映射为当前组件的计算属性
    computed:{
        ...mapState(['num','num1']),
    },
    mounted(){
        // console.log(this.num)
        // console.log(this.num1)
        // 调用
        // this.setNum()
        // this.setNum1()
    },
    methods:{
        change(){
        // // (2)调用修改数据
        // this.$store.commit('setNum',8)
        // this.$store.commit('setNum1',-8)
                // this.$store.dispetch("asyncSetNum",arg)

        },
        // // 映射操作
        // ...mapMutations(['setNum',"setNum1"])
        // 正常this调用修改数据
    }
}
</script>