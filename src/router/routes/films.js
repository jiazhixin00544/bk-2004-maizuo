// 4.导入(电影模块)
import Films from '@/views/Films/index.vue'
import ComingSoon from '@/views/Films/comingSoon.vue'
import NowPlaying from '@/views/Films/nowPlaying.vue'
import Detail from '@/views/Films/detail.vue'
var films=[
    {
        path:'/films',
        component: Films,
        children:[
        {path:'comingSoon',component:ComingSoon},
        {path:'nowPlaying',component:NowPlaying},
        ]
    },
    {path:'/film/:filmID',component:Detail},

]
// 导出（电影模块）
export default films