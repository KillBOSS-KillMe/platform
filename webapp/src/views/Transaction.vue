
<template>
  <div class="transaction">
    <div class="nav">
      <el-row class="tac">
        <el-col>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
          >
            <router-link to="/dataRader">
              <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span slot="title">数据雷达</span>
              </el-menu-item>
            </router-link>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>交易管理</span>
              </template>
              <el-menu-item-group>
                <router-link to="/tarManagement">
                  <el-menu-item index="2-1">交易概况</el-menu-item>
                </router-link>
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
            </el-submenu>
            <el-menu-item index="4">
              <i class="el-icon-menu"></i>
              <span slot="title">商品</span>
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-menu"></i>
              <span slot="title">服务管理</span>
            </el-menu-item>
            <el-menu-item index="6">
              <i class="el-icon-menu"></i>
              <span slot="title">配送管理</span>
            </el-menu-item>
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
            </el-menu-item> -->
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "transaction",
  components: {},
  data() {
    return {

    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  
};
</script>
<style scoped lang="less">
.transaction {
  width: 100%;
  display: flex;
  justify-content: flex-start;
}
.nav {
  width: 10rem;
  height: 100%;
  background-color: #fff;
  overflow: hidden;
  li{
    text-align: left;
  }
}
// router-view{
//   width: 93rem;
// }

</style>
