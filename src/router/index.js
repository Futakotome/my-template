import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '../layouts/components/Layouts'

Vue.use(VueRouter)

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('../views/Login'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: {
        title: 'Dashboard',
        icon: 'dashboard'
      }
    }]
  },
]

export default constantRoutes
