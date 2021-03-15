import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/BlankLayout.vue'),
      children: [
        {
          path: '',
          name: 'login',
          component: () => import('@/views/Login.vue')
        },
        {
          path: 'forgot-password',
          name: 'forgot-password',
          component: () => import('@/views/ForgotPassword.vue')
        }
      ]
    },
    {
      path: '/dashboard',
      component: () => import('@/layouts/DashboardLayout.vue'),
      children: [
        {
          path: '',
          name: 'dashboard-home',
          component: () => import('@/views/Dashboard.vue')
        }
      ]
    }
  ]
})