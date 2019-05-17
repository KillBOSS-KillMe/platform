
<template>
  <div class="about">
    <div class="position">
      小程序管理
      <span>/ 小程序名称 /</span>
      装修
    </div>
    <div class="title">
      <i class="iconfont icon-shouye"></i>
      装修
      <span>更换模板</span>
      <span>装修过程中不想影响线上客户使用要怎么做呢？</span>
    </div>
    <div class="factory">
      <div class="tool">1</div>
      <div class="effect">1</div>
      <div class="adjustment">1</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'about',
  components: {
    // HelloWorld
  }
}
</script>
<style lang="less">
  .about{
    // display: flex;
    // // align-items: center;
    // justify-content: space-between;
    margin: .5rem;
    height: auto;
    background-color: #fff;
    width: 92rem;
  }
  .position{
    width: 100%;
    margin: 1rem;
    color: #2d8cf0;
    font-size: .8rem;
    text-align: left;
    span{
      color: #9f9f9f;
    }
  }
  .title{
    width: 100%;
    margin: 1rem;
    color: #343434;
    font-size: .8rem;
    text-align: left;
    i{
      color: #f98a10;
      font-size: .8rem;
    }
    span{
      font-size: .6rem;
      color: #2d8cf0;
      margin-right: 1rem;
    }
  }
  .factory{
    display: flex;
    // align-items: center;
    justify-content: flex-start;
    .tool{
      margin: 0 1rem;
      margin-right: 1.5rem;
      border: 1px solid #000;
      width: 15rem;
      height: 33rem;
    }
    .effect{
      margin: 0 1rem;
      margin-right: 1.5rem;
      border: 1px solid #000;
      width: 16.2rem;
      height: 33rem;
    }
    .adjustment{
      margin: 0 1rem;
      margin-right: 1.5rem;
      border: 1px solid #000;
      width: 35.3rem;
      height: auto;
    }
  }
  
</style>