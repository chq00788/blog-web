import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/user/Login'
import Index from '@/pages/user/Index'
import User from '@/pages/user/User'
import Role from '@/pages/user/Role'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        { path: '/user', component:User},
        { path: '/role', component:Role},
      ]
    },
  ]
})
