<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="features">
      <div class="companyInfo">
        <div class="info">
          <div class="imgorInfo">
            <img src="@/assets/logo.png" />
            <div class="">1</div>
          </div>
          <div class="">1</div>
        </div>
        <div class="swiper">
          <img src="@/assets/logo.png" />
        </div>
      </div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
    </div>
    <div class="message">
      <div>1</div>
      <div>1</div>
      <div>1</div>
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
  .home{
    display: flex;
    // align-items: center;
    justify-content: space-between;
    margin: .5rem;
    height: 200rem;
    .features{
      width: 67.4rem;
      background-color: #fff;
    }
    .message{
      margin-left: 1rem ;
      width: 23.444rem;
      background-color: #fff;
    }
  }
  .companyInfo{
    display: flex;
    // align-items: center;
    justify-content: space-between;
    height: auto;
    .info{
      width: 25rem;
      height: 7rem;
      border: 1px solid #000;
    }
    .swiper{
      width: 41rem;
      height: 7rem;
      border: 1px solid #000;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
</style>