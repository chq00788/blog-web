import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/user/Login'
import Index from '@/pages/user/Index'
import User from '@/pages/user/User'
import Role from '@/pages/user/Role'
import Org from '@/pages/user/Org'
import Menu from '@/pages/user/Menu'

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
        {path: '/user', component: User},
        {path: '/role', component: Role},
        {path: '/org', component: Org},
        {path: '/menu', component: Menu},
      ]
    },
  ]
})
