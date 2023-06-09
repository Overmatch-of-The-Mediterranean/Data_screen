import {createRouter,createWebHashHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../components/Test.vue'
import Body1 from '../views/body1/index.vue'
import index from '../views/index/index.vue'
import wordCloud from '../views/body3/index.vue'
const routes = [
    {
        name:'home',
        path:'/',
        component: Home,
        redirect: "/body1",
        children: [
            {
                name: "body1",
                path: "body1",
                component: Body1,
            },
            {
                name: "report",
                path: "report",
                component: index,
            },
            {
                name: "wordCloud",
                path: "wordCloud",
                component: wordCloud,
            }
        ]
    },
    {
        path:'/test',
        name:'test',
        component: Test
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})
export default  router