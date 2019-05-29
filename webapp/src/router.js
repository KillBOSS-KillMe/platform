import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About')
    },
    {
      // 营销页
      path: '/marketing',
      name: 'marketing',
      redirect: '/marketingCenter',
      component: () => import('@/views/Marketing'),
      // 子页跳转
      children:[{
        path: '/marketingCenter',
        name: 'marketingCenter',
        component: () => import('@/components/marketing/MarketingCenter')
      }]
    },
    {
      // 交易页
      path: '/transaction',
      name: 'transaction',
      redirect: '/dataRader',
      component: () => import('@/views/Transaction'),
      // 子页跳转
      children:[{
        path: '/dataRader',
        name: 'dataRader',
        component: () => import('@/components/transaction/DataRader')
      },{
        path: '/tarManagement',
        name: 'tarManagement',
        component: () => import('@/components/transaction/TarManagement')
      }]
    },
    
    {
      path: '/pagetemplate',
      name: 'pagetemplate',
      component: () => import('@/views/Pageemtplate')
    }
    
  ]
})
