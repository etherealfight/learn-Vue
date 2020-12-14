import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import homepage from '../components/Homepage/homepage'
import regist_login from '../components/Login/regist-login'
import regist from '../components/Login/regist'
import login from '../components/Login/login'

Vue.use(ElementUI)
Vue.use(VueRouter)

const routes = [{
    path: '/',
    components: {
      homepage:homepage,
      regist_login:regist_login,
    }
  },
  {
    path: '/homepage',
    component: homepage,
  },
  {
    path: '/regist-login',
    component: regist_login,
    children: [{
        path: '/regist-login/regist',
        component: regist
      },
      {
        path: '/regist-login/login',
        component: login
      }
    ]
  },


]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router