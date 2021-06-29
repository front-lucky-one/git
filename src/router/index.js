import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import film from '@/views/film.vue'

Vue.use(VueRouter)

const router = new VueRouter({
   mode:'history',
   routes:[
       {
           name:'home',
           path:'/home',
           component:Home,
       },
       {
        name:'film',
        path:'/film/:id',
        component:film,
    },
    {
        name:'*',
        path:'/home',
        component:Home,
    }
   ]
})

router.afterEach((to,from)=>{
    if(to.path == '/home'){
        console.log('da',from)
    }
})

export default router