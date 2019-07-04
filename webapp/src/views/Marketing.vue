
<template>
  <div class="marketing">
    <div class="nav">
      <el-row class="tac">
        <el-col>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
          >
            <router-link to="/marketingCenter">
              <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span slot="title">营销中心</span>
              </el-menu-item>
            </router-link>
            <!-- <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>交易管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">交易概况</el-menu-item>
                <el-menu-item index="2-2">收支明细</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>订单管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="3-1">所有订单</el-menu-item>
                <el-menu-item index="3-2">代发货订单</el-menu-item>
                <el-menu-item index="3-3">上门自提订单</el-menu-item>
                <el-menu-item index="3-4">维权订单</el-menu-item>
                <el-menu-item index="3-5">评价管理</el-menu-item>
                <el-menu-item index="3-6">批量发货</el-menu-item>
                <el-menu-item index="3-7">批量退款</el-menu-item>
                <el-menu-item index="3-8">订单设置</el-menu-item>
                <el-menu-item index="3-9">核销记录</el-menu-item>
              </el-menu-item-group>
            </el-submenu>-->
            <router-link to="/coupon">
              <el-menu-item index="4">
                <i class="el-icon-menu"></i>
                <span slot="title">优惠券</span>
              </el-menu-item>
            </router-link>
            <router-link to="/marketingCenter">
              <el-menu-item index="5">
                <i class="el-icon-menu"></i>
                <span slot="title">拼团</span>
              </el-menu-item>
            </router-link>
            <router-link to="/marketingCenter">
              <el-menu-item index="6">
                <i class="el-icon-menu"></i>
                <span slot="title">秒杀</span>
              </el-menu-item>
            </router-link>
            <router-link to="/fullReduction">
              <el-menu-item index="6">
                <i class="el-icon-menu"></i>
                <span slot="title">满减</span>
              </el-menu-item>
            </router-link>
            <router-link to="/marketingCenter">
              <el-menu-item index="6">
                <i class="el-icon-menu"></i>
                <span slot="title">砍价</span>
              </el-menu-item>
            </router-link>
            <router-link to="/marketingCenter">
              <el-menu-item index="6">
                <i class="el-icon-menu"></i>
                <span slot="title">积分</span>
              </el-menu-item>
            </router-link>
            <router-link to="/marketingCenter">
              <el-menu-item index="6">
                <i class="el-icon-menu"></i>
                <span slot="title">直播</span>
              </el-menu-item>
            </router-link>
            <router-link to="/marketingCenter">
              <el-menu-item index="6">
                <i class="el-icon-menu"></i>
                <span slot="title">知识付费</span>
              </el-menu-item>
            </router-link>
            <router-link to="/marketingCenter">
              <el-menu-item index="6">
                <i class="el-icon-menu"></i>
                <span slot="title">产品预约</span>
              </el-menu-item>
            </router-link>
            <router-link to="/marketingCenter">
              <el-menu-item index="6">
                <i class="el-icon-menu"></i>
                <span slot="title">代理</span>
              </el-menu-item>
            </router-link>
            <router-link to="/marketingCenter">
              <el-menu-item index="6">
                <i class="el-icon-menu"></i>
                <span slot="title">分销</span>
              </el-menu-item>
            </router-link>
            <router-link to="/marketingCenter">
              <el-menu-item index="6">
                <i class="el-icon-menu"></i>
                <span slot="title">分享</span>
              </el-menu-item>
            </router-link>
            <router-link to="/marketingCenter">
              <el-menu-item index="6">
                <i class="el-icon-menu"></i>
                <span slot="title">会员</span>
              </el-menu-item>
            </router-link>
            <router-link to="/marketingCenter">
              <el-menu-item index="6">
                <i class="el-icon-menu"></i>
                <span slot="title">资讯</span>
              </el-menu-item>
            </router-link>
            <router-link to="/marketingCenter">
              <el-menu-item index="6">
                <i class="el-icon-menu"></i>
                <span slot="title">快递</span>
              </el-menu-item>
            </router-link>
            <router-link to="/marketingCenter">
              <el-menu-item index="6">
                <i class="el-icon-menu"></i>
                <span slot="title">自提</span>
              </el-menu-item>
            </router-link>

            <!-- <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>-->
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "marketing",
  components: {
    // HelloWorld
  },
  data() {
    return {
      domList: [],
      isOpenWind: true //点击X关闭窗口
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style scoped lang="less">
.marketing {
  width: 100%;
  display: flex;
  justify-content: flex-start;
}
.nav {
  width: 10rem;
  height: 100%;
  background-color: #fff;
  overflow: hidden;
  li {
    text-align: left;
  }
}
</style>