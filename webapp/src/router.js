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
      component: () => import('./views/About.vue')
    },
    {
      path: '/marketing',
      name: 'marketing',
      component: () => import('./views/Marketing.vue')
    },
    {
      path: '/transaction',
      name: 'transaction',
      component: () => import('./views/Transaction.vue')
    },
    
    {
      path: '/pagetemplate',
      name: 'pagetemplate',
      component: () => import('./views/Pageemtplate.vue')
    }
    
  ]
})
