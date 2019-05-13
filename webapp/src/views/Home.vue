<template>
  <div class="about">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="place">
      <span>位置：</span>
      <a>首页</a>
    </div>
    <div class="mainindex">
      <div id="wcindex">
        <router-link class="dashboard_button color1" to="/pagetemplate">
          <div class="iconfont icon-shouye"></div>
          <span class="name">小程序制作</span>
          <span class="description">轻松制作小程序</span>
        </router-link>
        <router-link class="dashboard_button color2" to="/pagetemplate">
          <div class="iconfont icon-shouye"></div>
          <span class="name">小程序制作</span>
          <span class="description">轻松制作小程序</span>
        </router-link>
        <router-link class="dashboard_button color3" to="/pagetemplate">
          <div class="iconfont icon-shouye"></div>
          <span class="name">小程序制作</span>
          <span class="description">轻松制作小程序</span>
        </router-link>
        <router-link class="dashboard_button color1" to="/pagetemplate">
          <div class="iconfont icon-shouye"></div>
          <span class="name">小程序制作</span>
          <span class="description">轻松制作小程序</span>
        </router-link>
        <router-link class="dashboard_button color2" to="/pagetemplate">
          <div class="iconfont icon-shouye"></div>
          <span class="name">小程序制作</span>
          <span class="description">轻松制作小程序</span>
        </router-link>
        <router-link class="dashboard_button color3" to="/pagetemplate">
          <div class="iconfont icon-shouye"></div>
          <span class="name">小程序制作</span>
          <span class="description">轻松制作小程序</span>
        </router-link>
        <router-link class="dashboard_button color1" to="/pagetemplate">
          <div class="iconfont icon-shouye"></div>
          <span class="name">小程序制作</span>
          <span class="description">轻松制作小程序</span>
        </router-link>
        <router-link class="dashboard_button color2" to="/pagetemplate">
          <div class="iconfont icon-shouye"></div>
          <span class="name">小程序制作</span>
          <span class="description">轻松制作小程序</span>
        </router-link>
        <router-link class="dashboard_button color3" to="/pagetemplate">
          <div class="iconfont icon-shouye"></div>
          <span class="name">小程序制作</span>
          <span class="description">轻松制作小程序</span>
        </router-link>
        <router-link class="dashboard_button color1" to="/pagetemplate">
          <div class="iconfont icon-shouye"></div>
          <span class="name">小程序制作</span>
          <span class="description">轻松制作小程序</span>
        </router-link>
        <router-link class="dashboard_button color2" to="/pagetemplate">
          <div class="iconfont icon-shouye"></div>
          <span class="name">小程序制作</span>
          <span class="description">轻松制作小程序</span>
        </router-link>
        <router-link class="dashboard_button color3" to="/pagetemplate">
          <div class="iconfont icon-shouye"></div>
          <span class="name">小程序制作</span>
          <span class="description">轻松制作小程序</span>
        </router-link>
        <router-link class="dashboard_button color1" to="/pagetemplate">
          <div class="iconfont icon-shouye"></div>
          <span class="name">小程序制作</span>
          <span class="description">轻松制作小程序</span>
        </router-link>
        <router-link class="dashboard_button color2" to="/pagetemplate">
          <div class="iconfont icon-shouye"></div>
          <span class="name">小程序制作</span>
          <span class="description">轻松制作小程序</span>
        </router-link>
        <router-link class="dashboard_button color3" to="/pagetemplate">
          <div class="iconfont icon-shouye"></div>
          <span class="name">小程序制作</span>
          <span class="description">轻松制作小程序</span>
        </router-link>
        <router-link class="dashboard_button color1" to="/pagetemplate">
          <div class="iconfont icon-shouye"></div>
          <span class="name">小程序制作</span>
          <span class="description">轻松制作小程序</span>
        </router-link>
        <router-link class="dashboard_button color2" to="/pagetemplate">
          <div class="iconfont icon-shouye"></div>
          <span class="name">小程序制作</span>
          <span class="description">轻松制作小程序</span>
        </router-link>
        <router-link class="dashboard_button color3" to="/pagetemplate">
          <div class="iconfont icon-shouye"></div>
          <span class="name">小程序制作</span>
          <span class="description">轻松制作小程序</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
  }
}
</script>
<style lang="less">
.place{
  height: 40px;
  background-color: #edf6fa;
  border: 1px solid #d7e4ea;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.mainindex{
  background-color: #ededf0;
  padding: 50px;
  overflow: hidden;
  #wcindex{
    overflow:hidden;
    width:100%;
    margin: 0px auto;
    .dashboard_button{
      display: inline-block;
      width: 180px;
      height: 230px;
      overflow: hidden;
      margin: 10px 30px;
      background: #FFF;
      font-size: 12px;
      line-height: 1.4em;
      text-decoration: none;
      color: #a1a1a1;
      padding: 0px;
      div{
        width:180px;
        height:121px;
        font-size: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
      }
      .name{
        display: block;
        padding-top: 7px;
        height: 30px;
        line-height: 20px;
        width: 100px;
        border-radius: 30px;
        background: #FFF;
        margin: 0px auto;
        text-align: center;
        margin-top: -18px;
        z-index: 100;
        padding: 0;
      }
      .description{
        text-align: center;
        line-height: 30px;
      }
    }
    .color1{
      color: #6aa5e5;
      .name{
        border: 1px solid #6aa5e5;
      }
      div{
        background-color: #6aa5e5;
      }
    }
    .color2{
      color: #a6e56c;
      .name{
        border: 1px solid #a6e56c;
      }
      div{
        background-color: #a6e56c;
      }
    }
    .color3{
      color: #F68583;
      .name{
        border: 1px solid #F68583;
      }
      div{
        background-color: #F68583;
      }
    }
  }
}
</style>