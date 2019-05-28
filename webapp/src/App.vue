<template>
  <div id="app">
    <header id="header">
      <router-link to="/">
        <img src="./assets/logo.png">
        贝肯为微信平台
      </router-link>
      <div class="nav">
        <router-link to="/">小程序</router-link>
        <router-link to="/">公众号</router-link>
        <router-link to="/">会员</router-link>
        <router-link to="/marketing">营销</router-link>
        <router-link to="/transaction">交易</router-link>
        <router-link to="/">设置</router-link>
      </div>
      <div class="operating">
        <div>用户名</div>
        <div>注销登录</div>
      </div>
    </header>
    
    <div class="page">
      <router-view/>
      <div class="floatDom">
        <div>联系客服</div>
        <div>帮助教程</div>
        <div>新手引导</div>
        <div>商家社区</div>
        <div>意见反馈</div>
        <div>开放平台</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
     return {
        'navDatra' : []
      }
  },
  mounted(){
    console.log(111)
    // this.getNavDatra()
  },
  methods:{
   
  }
  
}
</script>

<style lang="less">
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
  font-size: .5rem;
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
  .nav{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 75rem;
    a:hover{
      color: #f98a10;
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
.page{
  display: flex;
  // align-items: center;
  justify-content: space-between;
  background-color: #f4f4f4;
  .floatDom{
    width: 45px;
    height: auto;
    border-radius: 5px;
    
    div{
      width: 1.5rem;
      padding: .5rem;
      font-size: .5rem;
      color: #9f9f9f;
      background-color: #fff;
    }
  }
}

</style>
