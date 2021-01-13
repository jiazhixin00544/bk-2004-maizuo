import Vue from 'vue'
import VueRouter from 'vue-router'
// (1)新建模块（在router/views中建立）
// (2)导入模块
// import Center from '@/views/Center/index.vue'
// import Cinemas from '@/views/Cinemas/index.vue'
// import Films from '@/views/Films/index.vue'
// import ComingSoon from '@/views/Films/comingSoon.vue'
// import NowPlaying from '@/views/Films/nowPlaying.vue'
// import Detail from '@/views/Films/detail.vue'

// （5）导入已经模块化的路由
import centerRouter from './routes/center'
import cinemasRouter from './routes/cinemas'
import filmsRouter from './routes/films'
import cityRouter from "./routes/city"

Vue.use(VueRouter)
// 导入vuex组件模块
import VuexCmp from "@/views/vuex/vuex"
const routes = [
  // 导入模块化的路由
  ...centerRouter,
  cinemasRouter,
  ...filmsRouter,
  // 城市信息
  cityRouter,
  {
    path:"/vuex",
    component:VuexCmp
  },
  // (3)路由模块
  // 访问根目录的时候让页面显示正在热映模块
  {path:'/',redirect:'/Films/nowPlaying'},
  // (3.1)电影模块（电影模块父模块-->即将上映、正在热映）
  // {
  //   path:'/films',
  //   component: Films,
  //   children:[
  //     {path:'comingSoon',component:ComingSoon},
  //     {path:'nowPlaying',component:NowPlaying},
  //   ]
  // },
  // (3.2)电影详情页面
  // {path:'/film/:filmID',component:Detail},
  // (3.3)影院模块
  // {path:'/cinemas',component:Cinemas},
  // (3.4)我的模块
  // {path:'/center',component:Center},
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
