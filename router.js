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
          component: () => import('@/views/Dashboard/index.vue')
        },
        {
          path: 'manage-loans',
          name: 'manage-loans',
          component: () => import('@/views/Dashboard/ManageLoans.vue')
        },
        {
          path: 'loan-request',
          name: 'loan-request',
          component: () => import('@/views/Dashboard/LoanRequest.vue')
        },
        {
          path: 'organisation',
          name: 'organisation',
          component: () => import('@/views/Dashboard/Organisation.vue')
        },
        {
          path: 'customers',
          name: 'customers',
          component: () => import('@/views/Dashboard/Customers.vue')
        },
        {
          path: 'system-users',
          name: 'system-users',
          component: () => import('@/views/Dashboard/SystemUsers.vue')
        },
        {
          path: 'user-groups',
          name: 'user-groups',
          component: () => import('@/views/Dashboard/UserGroup.vue')
        },
        {
          path: 'system-log',
          name: 'system-log',
          component: () => import('@/views/Dashboard/SystemLog.vue')
        }
      ]
    }
  ]
})