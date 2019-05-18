
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
      <div class="tool">
        <ul class="nav-tabs">
          <li role="presentation" class="active">页面管理</li>
          <li role="presentation">组件库</li>
        </ul>
        <div class="pageList" style="display: none">
          <div class="newPage">
            <i class="iconfont icon-shouye"></i>
            新建页面
          </div>
          <ul class="pageLi">
            <li>
              页面名称
              <span>
                <i class="iconfont icon-shouye"></i>
                <i class="iconfont icon-shouye"></i>
              </span>
            </li>
            <li>
              页面名称
              <span>
                <i class="iconfont icon-shouye"></i>
                <i class="iconfont icon-shouye"></i>
              </span>
            </li>
            <li>
              页面名称
              <span>
                <i class="iconfont icon-shouye"></i>
                <i class="iconfont icon-shouye"></i>
              </span>
            </li>
          </ul>
        </div>
        <div class="moduleList">
          <div class="item">
            <div class="typeNmae">--标题--</div>
            <ul>
              <li>
                <i class="iconfont icon-shouye"></i>
                装修
              </li>
              <li>
                <i class="iconfont icon-shouye"></i>
                装修
              </li>
              <li>
                <i class="iconfont icon-shouye"></i>
                装修
              </li>
              <li>
                <i class="iconfont icon-shouye"></i>
                装修
              </li>
            </ul>
          </div>
          <div class="item">
            <div class="typeNmae">--标题--</div>
            <ul>
              <li>
                <i class="iconfont icon-shouye"></i>
                装修
              </li>
              <li>
                <i class="iconfont icon-shouye"></i>
                装修
              </li>
              <li>
                <i class="iconfont icon-shouye"></i>
                装修
              </li>
              <li>
                <i class="iconfont icon-shouye"></i>
                装修
              </li>
            </ul>
          </div>
          <div class="item">
            <div class="typeNmae">--标题--</div>
            <ul>
              <li>
                <i class="iconfont icon-shouye"></i>
                装修
              </li>
              <li>
                <i class="iconfont icon-shouye"></i>
                装修
              </li>
              <li>
                <i class="iconfont icon-shouye"></i>
                装修
              </li>
              <li>
                <i class="iconfont icon-shouye"></i>
                装修
              </li>
            </ul>
          </div>
        </div>
      </div>
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
      
      width: 15rem;
      height: 33rem;
    }
    .effect{
      margin: 0 1rem;
      margin-right: 1.5rem;
      width: 16.2rem;
      height: 33rem;
    }
    .adjustment{
      margin: 0 1rem;
      margin-right: 1.5rem;
      width: 35.3rem;
      height: auto;
    }
  }
  .tool{
    border: 1px solid #9f9f9f;
    border-radius: .5rem;
    .nav-tabs{
      border-bottom: 1px solid #ddd;
      display: flex;
      justify-content: space-between;
      li{
        height: 2rem;
        width: 7.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #cfcfcf;
        color: #555;
        border-radius: 0 .5rem 0 0;
      }
      li:nth-child(1){
        border-radius: .5rem 0 0 0;
      }
      li:nth-child(2){
        border-radius: 0 .5rem 0 0;
      }
      .active{
        color: #2d8cf0 !important;
        background-color: #fff;
        border-radius: .5rem .5rem 0 0;
      }
    }
    .pageList{
      .newPage{
        width: 10.35rem;
        height: 1.52rem;
        line-height: 1.52rem;
        color: #555;
        background-color: #fff;
        border-radius: .3rem;
        border: 1px solid #9f9f9f;
        margin: 1rem auto;
      }
      .pageLi{
        li{
          width: 14rem;
          height: 1.9rem;
          border: solid #9f9f9f;
          border-width: 0px;
          border-top-width: 1px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 .5rem;
          color: #555;
          font-size: .5rem;
          .iconfont{
            color: #9f9f9f;
            margin-left: .25rem;
          }
          .iconfont:hover{
            color: #f98a10;
          }
        }
        li:last-child{
          border-bottom: 1px solid #9f9f9f;
        }
      }
    }
    .moduleList{
      .item{
        margin-top: 1rem;
        .typeNmae{
          width: 100%;
          color: #555;
          font-size: .5rem;
        }
        ul{
          width: 100%;
          height: auto;
          text-align: left;
          li:hover{
            border: 1px dashed #f98a10;
          }
          li{
            border: 1px solid #cfcfcf;
            width: 2.25rem;
            height: 2rem;
            background-color: #fafaf9;
            color: #555;
            font-size: .5rem;
            display: inline-flex;
            align-items: center;
            justify-content: space-around;
            flex-direction: column;
            padding: .5rem;
            margin: .5rem .825rem;
            border-radius: .25rem;
            .iconfont{
              font-size: .85rem;
              color: #2d8cf0;
            }
          }
        }
      }
      
    }
  }
  .effect{
    border: 1px solid #9f9f9f;
    border-radius: 1.5rem;
  }
  .adjustment{
    border: 1px solid #9f9f9f;
    border-radius: .5rem;
  }
  
</style>