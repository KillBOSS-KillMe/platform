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
      path: '/marketing',
      name: 'marketing',
      component: () => import('@/views/Marketing')
    },
    {
      // 交易页
      path: '/transaction',
      name: 'transaction',
      redirect: '/DataRader',
      component: () => import('@/views/Transaction'),
      // 子页跳转
      children:[{
        path: '/DataRader',
        name: 'DataRader',
        component: () => import('@/components/DataRader')
      }]
    },
    
    {
      path: '/pagetemplate',
      name: 'pagetemplate',
      component: () => import('@/views/Pageemtplate')
    }
    
  ]
})
