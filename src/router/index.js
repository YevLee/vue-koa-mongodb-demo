import Vue from 'vue'
import Router from 'vue-router'
//import store from '../store/index'
import home from "@/pages/home"
import mine from "@/pages/mine"
import login from '@/pages/login'
import register from '@/pages/register'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'home',
      component: home,
			meta:{
				homePages:true
			}
    },
		{
			path:'/home',
			component:home,
			meta:{
				homePages:true
			}
		},
		{
			path:"/mine",
			name:"mime",
			component:mine,
			meta:{
				requiresAuth:false
			}
		},
    {
      path: '/login',
      name: 'login',
      component: login,
			meta:{
				requiresAuth:true
			}
    },
    {
      path: '/register',
      name: 'register',
      component: register,
			meta:{
				requiresAuth:true
			}
    },
  ]
});

router.beforeEach((to, from ,next) => {
    const token = localStorage.getItem("token")
    if(to.matched.some(record => record.meta.requireAuth || record.meta.homePages)){
        //路由元信息requireAuth:true，或者homePages:true，则不做登录校验
        next()
    }else{
        if(token){//判断用户是否登录
            if(Object.keys(from.query).length === 0){//判断路由来源是否有query，处理不是目的跳转的情况
                next()
            }else{
                let redirect = from.query.redirect//如果来源路由有query
                if(to.path === redirect){//这行是解决next无限循环的问题
                    next()
                }else{
                    next({path:redirect})//跳转到目的路由
                }
            }
        }else{
            if(to.path==="/login"){
                next()
            }else{
                next({
                      path:"/login",
                      query: {redirect: to.fullPath}//将目的路由地址存入login的query中
                })
            }
        }
    }
    return
})
export default router;
