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
        },{
          // 拼团
          path: '/fightGroup',
          name: 'fightGroup',
          component: () => import('@/components/marketing/FightGroup')
        }, {
          // 砍价
          path: '/bargain',
          name: 'bargain',
          component: () => import('@/components/marketing/Bargain')
        }, {
          // 积分
          path: '/integral',
          name: 'integral',
          component: () => import('@/components/marketing/Integral')
        }, {
          // 直播
          path: '/live',
          name: 'live',
          component: () => import('@/components/marketing/Live')
        }, {
          // 知识付费
          path: '/payment',
          name: 'payment',
          component: () => import('@/components/marketing/Payment')
        }, {
          // 产品预约
          path: '/reservation',
          name: 'reservation',
          component: () => import('@/components/marketing/Reservation')
        }, {
          // 代理
          path: '/proxy',
          name: 'proxy',
          component: () => import('@/components/marketing/Proxy')
        }, {
          // 分销
          path: '/distribution',
          name: 'distribution',
          component: () => import('@/components/marketing/Distribution')
        }, {
          // 分享
          path: '/share',
          name: 'share',
          component: () => import('@/components/marketing/Share')
        }, {
          // 会员
          path: '/vip',
          name: 'vip',
          component: () => import('@/components/marketing/Vip')
        }, {
          // 资讯
          path: '/news',
          name: 'news',
          component: () => import('@/components/marketing/News')
        }, {
          // 快递
          path: '/delivery',
          name: 'delivery',
          component: () => import('@/components/marketing/Delivery')
        }, {
          // 自提
          path: '/extract',
          name: 'extract',
          component: () => import('@/components/marketing/Extract')
        }]

        // delivery
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
