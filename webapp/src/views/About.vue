
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
              <li draggable="true" id="component1"  @dragstart='copyDrop($event)'>
                <i class="iconfont icon-shouye"></i>
                店招
              </li>
              <li draggable="true" id="component2"  @dragstart='copyDrop($event)'>
                <i class="iconfont icon-shouye"></i>
                搜索框
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="effect">
        <div class="mobileSta">
          <span>9:50</span>
          <div>
            <i class="iconfont icon-shouye"></i>
            <i class="iconfont icon-shouye"></i>
            <i class="iconfont icon-shouye"></i>
          </div>
        </div>
        <div class="pageInfo">
          <i class="iconfont icon-shouye"></i>
          <span>页面名称</span>
          <i class="iconfont icon-shouye"></i>
        </div>
        <div class="pageShow" @drop='getDrop($event)' @dragover='allowDrop($event)'></div>
      </div>
      <div class="adjustment">1</div>
    </div>


    <div class="domList">
      <!-- <div :for="(item, index) in domList">
        {{item}}
      </div> -->
       <div v-for="item in domList">
         <div v-html="item"></div>
        
      </div>
      <div  id="component1dom">
        <i class="iconfont icon-shouye"></i>
        <img src="@/assets/logo.png" />
      </div>
      <div id="component2dom">
        <i class="iconfont icon-shouye"></i>
        <img src="@/assets/logo.png" />
      </div>
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
  },
  data(){
    return {
      domList:[],
      isOpenWind :true  //点击X关闭窗口
    }
  },
  mounted(){
    
    this.getDomList()
  },
  methods:{
    copyDrop(e) {
      e.dataTransfer.setData("id", e.target.id);
        // e.dataTransfer.setData('addBuffer', e.target.id)
        this.CopyCss(e.target.id, '1px dashed #66CC99', 'rgba(204,204,204,0.3)', '4px')
    },
    getDrop(e) {
      // alert(11)
      // console.log(e)
      // console.log('SET -> addBuffer:::111:::')
      // e.preventDefault();
      // var data = e.dataTransfer.getData("id");
      // e.target.appendChild(document.getElementById(data+'dom'));
      // this.getDomList()
      // console.log('放下')
        e.preventDefault()
        var id = e.dataTransfer.getData('id')
        if (id === null || id === '') {
          console.log('id is NULL！')
          return
        }
        var itemName = 'item' + parseInt(Math.random() * (1000000 - 1 + 1) + 1)
        console.log('GET-> addBuffer:', itemName)
        // 克隆真实对象
        var cloneObject = document.getElementById(id+'dom').cloneNode(true)

        // 为克隆对象设置唯一Id
        cloneObject.setAttribute('id', itemName)
        // this.$set(cloneObject, 'id', itemName)
        // this.$set(cloneObject, '@click', 'updateLabel()')
        // 把新的节点添加到新的区域中
        e.target.appendChild(cloneObject)

        console.log(e.target.id)
        // console.log(cloneObject)
        // 设置样式
        this.CopyCss(id, '', '', '')

        // 修改名称
        this.dialogFormVisible = true
        this.labelid = itemName
    },
    allowDrop(e) {
      e.preventDefault();
      // var data = e.dataTransfer.getData("id");
      // e.target.appendChild(document.getElementById(data+'dom'));
    },
    getDomList() {
      console.log(22222)
      this.domList = [
        `<div draggable="true" data-type="1" id="component1dom">
          <i class="iconfont icon-shouye"></i>
          <img src="@/assets/logo.png" />
        </div>`,
        `<div draggable="true" data-type="2" id="component2dom">
          <i class="iconfont icon-shouye"></i>
          <img src="@/assets/logo.png" />
        </div>`,
        `<div draggable="true" data-type="3" id="component3dom">
          <i class="iconfont icon-shouye"></i>
          <img src="@/assets/logo.png" />
        </div>`,
        `<div draggable="true" data-type="4" id="component4dom">
          <i class="iconfont icon-shouye"></i>
          <img src="@/assets/logo.png" />
        </div>`
      ]
    },
    CopyCss(obj, border, background, borderradius) {
        let moveObj = document.getElementById(obj)
        moveObj.style.border = border
        moveObj.style.background = background
        moveObj.style.borderRadius = borderradius
      },
  },
  

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
            border: 1px dashed #2d8cf0;
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
    .mobileSta{
      padding: 1rem .5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: .25rem;
      color: #343434;
      .iconfont{
        margin: .2rem;
      }
    }
    .pageInfo{
      padding: 0 .5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span{
        font-size: .3rem;
        font-weight: 600;
        color: #343434;
      }
      .iconfont{
        margin: .3rem;
      }
    }
    .pageShow{
      width: 15rem;
      height: 25rem;
      padding: 0;
      position: relative;
      overflow-y: auto;
      margin: 0 auto;
      border: 1px solid #333;
    }
    .pageShow::-webkit-scrollbar {
      display: none;
    }
  }
  .adjustment{
    border: 1px solid #9f9f9f;
    border-radius: .5rem;
  }






  .domList{
    // display: none;
  }
  #component1dom,#component2dom{
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img{
      width: 100%;
      height: 10rem;
    }
  }
</style>