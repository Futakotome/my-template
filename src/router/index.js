import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '../layouts/components/Layouts'

Vue.use(VueRouter)

export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [{
      path: '/redirect/:path(.*)',
      component: () => import("../views/redirect/index")
    }]
  },
  {
    path: '/login',
    component: () => import('../views/Login'),
    hidden: true
  },
  {
    path: '/404',
    hidden: true,
    component: () => import('../views/error-page/404')
  },
  {
    path: '/401',
    hidden: true,
    component: () => import('../views/error-page/401')
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
        icon: 'el-icon-s-home',
        affix: true
      }
    }]
  },
  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1/menu1-1',
    name: 'Nested',
    meta: {
      title: 'Nested Routes',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: {title: 'Menu 1'},
        redirect: '/nested/menu1/menu1-1',
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: {title: 'Menu 1-1'}
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            redirect: '/nested/menu1/menu1-2/menu1-2-1',
            meta: {title: 'Menu 1-2'},
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: {title: 'Menu 1-2-1'}
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: {title: 'Menu 1-2-2'}
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: {title: 'Menu 1-3'}
          }
        ]
      },
      {
        path: 'menu2',
        name: 'Menu2',
        component: () => import('@/views/nested/menu2/index'),
        meta: {title: 'Menu 2'}
      }
    ]
  }
]

export default constantRoutes
