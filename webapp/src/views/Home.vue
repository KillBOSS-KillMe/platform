<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="features">
      <div class="companyInfo">
        <div class="info">
          <div class="imgorInfo">
            <img src="@/assets/logo.png" />
            <div class="">
              <div class="name">西安贝肯伟</div>
              <div class="description">
                通用版·普通版
                <span>2020年04月03日到期</span>
              </div>
            </div>
          </div>
          <div class="thisInfo">
            <div>
              已开通小程序：
              <span>1</span>
              个
            </div>
            <div>
              系统稳定运营：
              <span>42</span>
              天
            </div>
          </div>
        </div>
        <div class="swiper">
          <img src="@/assets/logo.png" />
        </div>
      </div>
      <div class="programList">
        <div class="name">
          小程序列表
          <span>列表中所有授权的小程序必须属于同一个公司主体账号</span>
        </div>
        <div class="button">
          <button>创建小程序</button>
          <button>创建小程序</button>
          <button>创建小程序</button>
          <button>创建小程序</button>
        </div>
        <div class="list">
          <div class="item">
            <div class="status">
              <div class="sta">
                <span>·</span>
                审核中
              </div>
              <div class="version">
                V2.92
                <span>更新</span>
              </div>
            </div>
            <div class="QRCode">
              <img src="@/assets/logo.png">
              <img class="QRCodeImg" src="@/assets/logo.png">
            </div>
            <div class="programInfo">
              <div class="iconfont icon-shouye programIcon"></div>
              <div>
                <div class="programName">小程序名称</div>
                <div class="time"> 
                  <icon class="iconfont icon-shouye"></icon>
                  2019-05-05 18:11:11
                </div>
              </div>
            </div>
            <div class="operating">
              <div>
                <icon class="iconfont icon-shouye"></icon>
                装修
              </div>
              <div>
                <icon class="iconfont icon-shouye"></icon>
                数据
              </div>
              <div>
                <icon class="iconfont icon-shouye"></icon>
                设置
              </div>
              <div>
                <icon class="iconfont icon-shouye"></icon>
                删除
              </div>
            </div>
          </div>
          <div class="item">
            <div class="status">
              <div class="sta">
                <span>·</span>
                审核中
              </div>
              <div class="version">
                V2.92
                <span>更新</span>
              </div>
            </div>
            <div class="QRCode">
              <img src="@/assets/logo.png">
              <img class="QRCodeImg" src="@/assets/logo.png">
            </div>
            <div class="programInfo">
              <div class="iconfont icon-shouye programIcon"></div>
              <div>
                <div class="programName">小程序名称</div>
                <div class="time"> 
                  <icon class="iconfont icon-shouye"></icon>
                  2019-05-05 18:11:11
                </div>
              </div>
            </div>
            <div class="operating">
              <div>
                <icon class="iconfont icon-shouye"></icon>
                装修
              </div>
              <div>
                <icon class="iconfont icon-shouye"></icon>
                数据
              </div>
              <div>
                <icon class="iconfont icon-shouye"></icon>
                设置
              </div>
              <div>
                <icon class="iconfont icon-shouye"></icon>
                删除
              </div>
            </div>
          </div>
          <div class="item">
            <div class="status">
              <div class="sta">
                <span>·</span>
                审核中
              </div>
              <div class="version">
                V2.92
                <span>更新</span>
              </div>
            </div>
            <div class="QRCode">
              <img src="@/assets/logo.png">
              <img class="QRCodeImg" src="@/assets/logo.png">
            </div>
            <div class="programInfo">
              <div class="iconfont icon-shouye programIcon"></div>
              <div>
                <div class="programName">小程序名称</div>
                <div class="time"> 
                  <icon class="iconfont icon-shouye"></icon>
                  2019-05-05 18:11:11
                </div>
              </div>
            </div>
            <div class="operating">
              <div>
                <icon class="iconfont icon-shouye"></icon>
                装修
              </div>
              <div>
                <icon class="iconfont icon-shouye"></icon>
                数据
              </div>
              <div>
                <icon class="iconfont icon-shouye"></icon>
                设置
              </div>
              <div>
                <icon class="iconfont icon-shouye"></icon>
                删除
              </div>
            </div>
          </div>
          <div class="item">
            <div class="status">
              <div class="sta">
                <span>·</span>
                审核中
              </div>
              <div class="version">
                V2.92
                <span>更新</span>
              </div>
            </div>
            <div class="QRCode">
              <img src="@/assets/logo.png">
              <img class="QRCodeImg" src="@/assets/logo.png">
            </div>
            <div class="programInfo">
              <div class="iconfont icon-shouye programIcon"></div>
              <div>
                <div class="programName">小程序名称</div>
                <div class="time"> 
                  <icon class="iconfont icon-shouye"></icon>
                  2019-05-05 18:11:11
                </div>
              </div>
            </div>
            <div class="operating">
              <div>
                <icon class="iconfont icon-shouye"></icon>
                装修
              </div>
              <div>
                <icon class="iconfont icon-shouye"></icon>
                数据
              </div>
              <div>
                <icon class="iconfont icon-shouye"></icon>
                设置
              </div>
              <div>
                <icon class="iconfont icon-shouye"></icon>
                删除
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="guide">
        <div class="name">
          小程序发布指南
          <span class="guideInfo">
            更多教程请到
            <span class="community">商家社区</span>
          </span>
        </div>
        <div class="con">
          <div class="item novice">
            <icon class="iconfont icon-shouye"></icon>
            新手引导
          </div>
          <div class="item Application">
            <icon class="iconfont icon-shouye"></icon>
            新手引导<br>
            新手引导
          </div>
          <div class="item release">
            <icon class="iconfont icon-shouye"></icon>
            新手引导<br>
            新手引导
          </div>
        </div>
      </div>
      <div class="special">
        <div class="name">小程序特殊能力</div>
        <div class="con">
          <div class="item">
            <img src="@/assets/logo.png">
            附近的小程序
          </div>
          <div class="item">
            <img src="@/assets/logo.png">
            申请微信支付
          </div>
          <div class="item">
            <img src="@/assets/logo.png">
            支付后引导<br>关注公众昂好
          </div>
          <div class="item">
            <img src="@/assets/logo.png">
            小程序体验者
          </div>
        </div>
      </div>
    </div>
    <div class="message">
      <div class="messageSys">
        <div class="title">
          <div class="name">
            <icon class="iconfont icon-shouye"></icon>
            消息通知
          </div>
          <div class="more">
            更多
            <icon class="iconfont icon-shouye"></icon>
          </div>
        </div>
        <div class="con">
          <div class="item">
            <div class="messageCon">
              <icon class="iconfont icon-shouye"></icon>
              <div>【系统公告】公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告</div>
              <img src="@/assets/logo.png">
            </div>
            <div class="time">05-11</div>
          </div>
          <div class="item">
            <div class="messageCon">
              <icon class="iconfont icon-shouye"></icon>
              <div>【系统公告】公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告</div>
              <img src="@/assets/logo.png">
            </div>
            <div class="time">05-11</div>
          </div>
          <div class="item">
            <div class="messageCon">
              <icon class="iconfont icon-shouye"></icon>
              <div>【系统公告】公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告</div>
              <img src="@/assets/logo.png">
            </div>
            <div class="time">05-11</div>
          </div>
          <div class="item">
            <div class="messageCon">
              <icon class="iconfont icon-shouye"></icon>
              <div>【系统公告】公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告</div>
              <img src="@/assets/logo.png">
            </div>
            <div class="time">05-11</div>
          </div>
          <div class="item">
            <div class="messageCon">
              <icon class="iconfont icon-shouye"></icon>
              <div>【系统公告】公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告</div>
              <img src="@/assets/logo.png">
            </div>
            <div class="time">05-11</div>
          </div>
        </div>
      </div>
      <div class="feedback">
        <div class="item">
          <icon class="iconfont icon-shouye"></icon>
          <div class="con">
            <div class="name">遇到问题</div>
            <div class="description">
              <span>在线客服</span>
              即将为您服务
            </div>
          </div>
        </div>
        <div class="item">
          <icon class="iconfont icon-shouye"></icon>
          <div class="con">
            <div class="name">商家社区</div>
            <div class="description">
              <span></span>
              在商家互相交流中成长
            </div>
          </div>
        </div>
        <div class="item">
          <icon class="iconfont icon-shouye"></icon>
          <div class="con">
            <div class="name">意见反馈</div>
            <div class="description">
              <span></span>
              用心聆听反馈
            </div>
          </div>
        </div>
      </div>
      <div class="QRCode">
        <img src="@/assets/logo.png">
        <img src="@/assets/logo.png">
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
  .home{
    display: flex;
    // align-items: center;
    justify-content: space-between;
    margin: .5rem;
    height: auto;
    .features{
      width: 67.4rem;
    }
    .message{
      margin-left: 1rem ;
      width: 23.444rem;
      // background-color: #fff;
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
      border-radius: .5rem;
      background-color: #fff;
      .imgorInfo{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        div{
          text-align: left;
          margin: .5rem;
        }
        span{
          color: #f98a10;
        }
        .name{
          color: #343434;
          font-size: 1rem;
          font-weight: 600;
        }
        .description{
          font-size: .7rem;
          color: #555;
        }
        img{
          width: 3rem;
          height: 3rem;
          margin: .5rem;
        }
        
      }
      .thisInfo{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: .78rem;
        background-color: rgb(249, 249, 249);
        padding: 1rem;
        div{
          font-size: .4rem;
          color: #555;
          margin-right: 2rem;
          span{
            color: #343434;
          }
        }
      }
    }
    .swiper{
      width: 41rem;
      height: 7rem;
      border-radius: .5rem;
      background-color: #fff;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  .programList{
    width: 67.4rem;
    height: auto;
    margin-top: .5rem;
    background-color: #fff;
    .name{
      font-size: .8rem;
      color: #343434;
      padding: .8rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      span{
        margin-left: 1rem;
        font-size: .7rem;
        color: #9f9f9f;
      }
    }
    .button{
      padding: .4rem .8rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      button{
        margin-right: 1rem;
        border-width: 0;
        padding: .4rem .8rem;
        background-color: #f98a10;
        border-radius: .2rem;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .list{
      text-align: left;
      margin-left: 1rem;
      height: auto;
      .item{
        width: 20rem;
        height: 20rem;
        padding: .5rem;
        display: inline-block;
        .status{
          width: 100%;
          height: 1.8rem;
          background-color: #f9f9f9;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: .5rem;
          .sta{
            display: flex;
            align-items: center;
            justify-content: flex-start;
            span{
              font-size: 5rem;
              color: #f98a10;
              border-radius: 5rem;
            }
          }
          .version{
            span{
              color: #2d8cf0;
              margin-right: .5rem;
            }
          }
        }
        .QRCode{
          height: 13rem;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          img{
            width: 100%;
            height: 100%;
          }
          .QRCodeImg{
            width: 7rem;
            height: 7rem;
            border-radius: 7rem;
            position: absolute;
            z-index: 5;
          }
        }
        .programInfo{
          height: 3rem;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          .programIcon{
            width: 2rem;
            height: 2rem;
            margin: .5rem;
            border: 1px solid #f98a10;
            border-radius: .1rem;
            color: #f98a10;
            background-color: #fff3ee;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .programName{
            font-size: .7rem;
            color: #343434;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .time{
            font-size: .7rem;
            color: #9f9f9f;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
        }
        .operating{
          background-color: #f9f9f9;
          display: flex;
          align-items: center;
          justify-content: space-around;
          font-size: .7rem;
          color: #9f9f9f;
          div{
            width: 5rem;
            height: 1.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            icon{
              margin-right: .2rem;
            }
          }
          div:hover{
            background-color: #f98a10;
            color: #fff;
          }
        }
      }
    }
  }
  .special{
    width: 67.4rem;
    height: auto;
    margin-top: .5rem;
    background-color: #fff;
    .name{
      font-size: .8rem;
      color: #343434;
      padding: .8rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
    .con{
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 5.5rem;
      .item{
        width: 16.2rem;
        height: 4.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: .8rem;
        background-color: #f9f9f9;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
          width: 3.1rem;
          height: 3.6rem;
          margin-right: .5rem;
        }
      }
    }
    
  }
  .guide{
    width: 67.4rem;
    height: auto;
    margin-top: .5rem;
    background-color: #fff;
    .name{
      font-size: .8rem;
      color: #343434;
      padding: .8rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .guideInfo{
        margin-left: 1rem;
        font-size: .7rem
      }
      .community{
        color: #2d8cf0;
      }
    }
    .con{
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 5.5rem;
      .item{
        width: 20.8rem;
        height: 4.5rem;
        background-color: #999;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: .8rem;
        icon{
          width: 3.6rem;
          height: 3.6rem;
          border-radius: 3.6rem;
          color: #fff;
          font-size: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: .5rem;
        }
        
      }
      .novice{
        background-color: #f0ffef;
        color: #59b752;
        icon{
          background-color: #59b752;
        }
      }
      .Application{
        background-color: #fff9ef;
        color: #f98a10;
        icon{
          background-color: #f98a10;
        }
      }
      .release{
        background-color: #f1f8ff;
        color: #6bc2ff;
        icon{
          background-color: #6bc2ff;
        }
      }
    }
  }
  .message{
    .messageSys{
      padding: .4rem;
      width: 23rem;
      background-color: #fff;
      .title{
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: .8rem;
        color: #343434;
        .name{
          icon{
            font-size: .7rem;
            color: #9f9f9f;
          }
        }
        .more{
          font-size: .7rem;
          color: #9f9f9f;
        }
      }
      .con{
        height: auto;
        .item{
          height: 1.75rem;
          border-bottom: 1px solid #f9f9f9;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #fd1e1f;
          font-size: .5rem;
          .messageCon{
            display: flex;
            align-items: center;
            justify-content: flex-start;
            icon{
              font-size: .5rem;
            }
            div{
              width: 10rem;
              overflow: hidden;
              text-overflow:ellipsis;
              white-space:nowrap;
            }
            img{
              width: 1.5rem;
              height: .5rem;
            }
          }
          .time{
            
          }
        }
      }
    }
    .feedback{
      padding: .4rem;
      width: 23rem;
      background-color: #fff;
      margin-top: .5rem;
      .item:hover{
        background-color: #ebf7ff;
      }
      .item{
        margin: .5rem 0;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        icon{
          width: 3rem;
          height: 3rem;
          margin-right: .5rem;
          background-color: #efdfd9;
          color: #ff8d55;
          font-size: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .con{
          width: 20rem;
        }
        .name{
          width: 100%;
          font-size: .9rem;
          color: #343434;
          text-align: center;
          margin-bottom: .3rem;
          display: flex;
          justify-content: flex-start;
        }
        .description{
          display: flex;
          justify-content: flex-start;
          width: 100%;
          text-align: center;
          font-size: .5rem;
          color: #9f9f9f;
          span{
            color: #2d8cf0;
          }
        }

      }
    }
    .QRCode{
      width: 23rem;
      padding: .4rem;
      margin-top: .5rem;
      background-color: #ff7967;
      display: flex;
      align-items: center;
      justify-content: space-between;
      img{
        width: 7.5rem;
        height: 7.5rem;
      }
    }
  }
  
</style>