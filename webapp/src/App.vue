<template>
  <div id="app">
    <header id="header">
      <router-link to="/">
        <img src="./assets/logo.png">
        贝肯为微信平台
      </router-link>
      <div class="operating">
        <div>用户名</div>
        <div>注销登录</div>
      </div>
    </header>
    <div class="content">
      <nav>
        <!-- <a> -->
        <!-- <ul class="nav">
          <li>
            <router-link to="/">
              <i class="iconfont icon-shouye"></i>
              Home
              <i class="iconfont icon-shouye"></i>
            </router-link>
          </li>
          <li>
            <router-link to="/about">
              <i class="iconfont icon-shouye"></i>
              About
              <i class="iconfont icon-shouye"></i>
            </router-link>
          </li>
        </ul> -->
        <ul class="nav">
          <li>
            <router-link to="/">
              <i class="iconfont icon-shouye"></i>
              后头首页
              <i class="iconfont icon-shouye"></i>
            </router-link>
          </li>
          <li>
            <a>
              <i class="iconfont icon-shouye"></i>
              账户中心
              <i class="iconfont icon-shouye"></i>
            </a>
            <ul class="navLi">
              <li>
                <router-link to="/about">
                  <span>├─账户充值</span>
                </router-link>
              </li>
              <li>
                <router-link to="/about">
                  <span>├─账户充值</span>
                </router-link>
              </li>
              <li>
                <router-link to="/about">
                  <span>├─账户充值</span>
                </router-link>
              </li>
              <li>
                <router-link to="/about">
                  <span>├─账户充值</span>
                </router-link>
              </li>
            </ul>
          </li>
          <li>
            <a>
              <i class="iconfont icon-shouye"></i>
              小程序制作
              <i class="iconfont icon-shouye"></i>
            </a>
            <ul class="navLi" v-if="ss">
              <li>
                <router-link to="/about">
                  <span>├─ 小程序发布</span>
                </router-link>
              </li>
              <li>
                <router-link to="/about">
                  <span>├─ 小程序编辑</span>
                </router-link>
              </li>
              <li>
                <router-link to="/about">
                  <span>├─ 模板市场</span>
                </router-link>
              </li>
              <li>
                <router-link to="/about">
                  <span>├─ 支付设置</span>
                </router-link>
              </li>
              <li>
                <router-link to="/about">
                  <span>├─ 小程序下载</span>
                </router-link>
              </li>
              <li>
                <router-link to="/about">
                  <span>├─ 生成模板</span>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div class="page">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld
  }
}
</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
}
@font-face {
  font-family: 'iconfont';  /* project id 1187878 */
  src: url('//at.alicdn.com/t/font_1187878_nxbn7dgd4sh.eot');
  src: url('//at.alicdn.com/t/font_1187878_nxbn7dgd4sh.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1187878_nxbn7dgd4sh.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1187878_nxbn7dgd4sh.woff') format('woff'),
  url('//at.alicdn.com/t/font_1187878_nxbn7dgd4sh.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1187878_nxbn7dgd4sh.svg#iconfont') format('svg');
}

.iconfont {
  font-family:"iconfont" !important;
  font-size: 50rpx;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-shouye:before { content: "\e64c"; } // 搜索

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#header{
  width: 100%;
  height: 50px;
  color: #FFF;
  background-color: #0099cc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    margin: 10px 20px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #FFF;
    img{
      width: 2em;
      height: 2em;
      margin-right: 10px;
    }
  }
  .operating{
    margin: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    div{
      padding: 0 20px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    div:hover{
      background-color: #2c3e50;
    }
  }

}
.content{
  position: absolute;
  bottom: 0;
  top: 50px;
  width: 100vw;
  display: flex;
  // align-items: center;
  justify-content: flex-start;
  nav {
    padding: 0;
    width: 220px;
    height: 100%;
    background: #2e3e4e;
    // a {
    //   font-weight: bold;
    //   color: #2c3e50;
    //   &.router-link-exact-active {
    //     color: #42b983;
    //   }
    // }
    .nav{
      margin: 0;
      padding: 0;
      list-style: none;
      li{
        position: relative;
        display: block;
        list-style: none;
        color: #9db1c5;
        line-height: 1.5;
        a{
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 11px 15px;
          position: relative;
          font-weight: bold;
          font-size: 14px;
          border-color: rgba(255,255,255,0.05);
          transition: color .3s ease-in-out 0s;
          color: #FFF;
          i{
            margin: -12px -15px;
            line-height: 44px;
            width: 44px;
            float: left;
            margin-right: 10px;
            font-size: 14px;
            border-right: 1px solid rgba(255,255,255,0.05);
            text-align: center;
            position: relative;
            overflow: hidden;
          }
        }
      }
    }
      .navLi{
        background: rgb(245, 245, 245);
        overflow: hidden;
        display: block;
        margin: 0;
        padding-left: 0;
        list-style: none;
        line-height: 1.5;
        li{
          line-height: 1.5;
          position: relative;
          display: block;
          background-color: #fff;
          a{
            color: #000;
            border-bottom: 1px solid rgba(0,0,0,0.1);
            font-weight: normal;
            text-transform: none;
            font-size: 13px;
            padding: 11px 15px;
            position: relative;
          }
        }
      }
  }
  .page{
    height: 100%;
    width: 100%;
  }
}

</style>
