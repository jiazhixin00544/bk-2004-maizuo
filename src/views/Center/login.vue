<template>
    <div>
        <div class="logo">
            <img  src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3197336358,110608720&fm=26&gp=0.jpg" />
        </div>
        <div>
            <van-form @submit="onSubmit">
                <van-field
                    v-model="username"
                    name="username"
                    label="用户名"
                    placeholder="用户名"
                    :rules="[{ required: true, message: '请填写正确的用户名' }]"
                />
                <van-field
                    v-model="password"
                    type="password"
                    name="password"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ pattern, message: '请填写密码' }]"
                />
                <div style="margin: 16px;" >
                    <van-button square block type="info" native-type="submit" class="submit"
                        >提交</van-button
                    >
                </div>
            </van-form>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import { Form, Field, Button, Toast } from "vant";

Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
Vue.use(Toast);
import {mapMutations} from "vuex"


export default {
    data() {
        return {
            username: "",
            password: "",
            pattern: /^1[3-9]\d{9}$/,
        };
    },
    methods:{
    ...mapMutations("global",['setFooter'])
    },
    methods: {
        onSubmit(values) {            
            console.log("submit", values);
            this.$http.post('http://127.0.0.1:2004/login',values).then(
                ret=>{
                    // console.log(ret)
                    if(ret.error_code===0){
                        Toast.success("登陆成功,欢迎你")
                        if (this.$route.query.callback) {
                            this.$router.push(this.$route.query.callback);
                        } else {
                            this.$router.push("/center");
                        }
                    }else{
                        Toast.fail('登录失败了')
                    }
                }
            )
        },
    },
    created() {
        this.$store.commit("global/setFooter", false);
    },

    beforeDestroy() {
        this.$store.commit("global/setFooter", true);
    },
};
</script>

<style lang="scss" scoped>
.logo {
    // margin-top: 150px;
    // margin-bottom: 100px;
    // text-align: center;
    overflow: hidden;
    width: 100%;   
}
.logo>img {
    transform: translateX(-13%);
}
.submit{
    background-color: black;
    border: 1px solid black;
}
</style>
