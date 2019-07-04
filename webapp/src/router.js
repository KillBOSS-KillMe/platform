import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/homecli',
      name: 'homecli',
      redirect: '/Home',
      component: () => import('@/views/Homecli'),
      // 子页跳转
      children: [{
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home')
      },
      {
        path: '/workshop',
        name: 'workshop',
        component: () => import('@/views/Workshop')
      },
      {
        // 营销页
        path: '/marketing',
        name: 'marketing',
        redirect: '/marketingCenter',
        component: () => import('@/views/Marketing'),
        // 子页跳转
        children: [{
          // 营销页--首页
          path: '/marketingCenter',
          name: 'marketingCenter',
          component: () => import('@/components/marketing/MarketingCenter')
        }, {
          // 优惠券
          path: '/coupon',
          name: 'coupon',
          component: () => import('@/components/marketing/Coupon')
        }, {
          // 满减
          path: '/fullReduction',
          name: 'fullReduction',
          component: () => import('@/components/marketing/FullReduction')
        }, {
          // 秒杀
          path: '/spike',
          name: 'spike',
          component: () => import('@/components/marketing/Spike')
        }, {
          // 砍价
          path: '/bargain',
          name: 'bargain',
          component: () => import('@/components/marketing/Bargain')
        }]
      },
      {
        // 交易页
        path: '/transaction',
        name: 'transaction',
        redirect: '/dataRader',
        component: () => import('@/views/Transaction'),
        // 子页跳转
        children: [{
          // 数据雷达
          path: '/dataRader',
          name: 'dataRader',
          component: () => import('@/components/transaction/DataRader')
        }, {
          // 交易概况
          path: '/tarManagement',
          name: 'tarManagement',
          component: () => import('@/components/transaction/TarManagement')
        }, {
          // 收支明细
          path: '/inOrOutDetail',
          name: 'inOrOutDetail',
          component: () => import('@/components/transaction/InOrOutDetail')
        }, {
          // 所有订单
          path: '/allOrders',
          name: 'allOrders',
          component: () => import('@/components/transaction/AllOrders')
        }, {
          // 出售中的上品
          path: '/productList',
          name: 'productList',
          component: () => import('@/components/transaction/ProductList')
        }, {
          // 发布商品
          path: '/publishGoods',
          name: 'publishGoods',
          component: () => import('@/components/transaction/PublishGoods')
        }]
      },
      {
        path: '/pagetemplate',
        name: 'pagetemplate',
        component: () => import('@/views/Pageemtplate')
      }]
    }



  ]
})
