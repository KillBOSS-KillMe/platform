
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
              <li draggable="true" id="search1" @dragstart="copyDrop($event)">
                <i class="iconfont icon-fenxiang2"></i>
                搜索1
              </li>
              <li draggable="true" id="search2" @dragstart="copyDrop($event)">
                <i class="iconfont icon-fenxiang2"></i>
                搜索2
              </li>
              <li draggable="true" id="placard1" @dragstart="copyDrop($event)">
                <i class="iconfont icon-fenxiang2"></i>
                公告
              </li>
              <li draggable="true" id="nav1" @dragstart="copyDrop($event)">
                <i class="iconfont icon-fenxiang2"></i>
                导航1
              </li>
              <li draggable="true" id="nav2" @dragstart="copyDrop($event)">
                <i class="iconfont icon-fenxiang2"></i>
                导航2
              </li>
              <li draggable="true" id="nav3" @dragstart="copyDrop($event)">
                <i class="iconfont icon-fenxiang2"></i>
                导航3
              </li>
              <li draggable="true" id="nav4" @dragstart="copyDrop($event)">
                <i class="iconfont icon-fenxiang2"></i>
                导航4
              </li>
              <li draggable="true" id="commodityList1" @dragstart="copyDrop($event)">
                <i class="iconfont icon-fenxiang2"></i>
                商品1
              </li>
              <li draggable="true" id="commodityList2" @dragstart="copyDrop($event)">
                <i class="iconfont icon-fenxiang2"></i>
                商品2
              </li>
              <li draggable="true" id="commodityList3" @dragstart="copyDrop($event)">
                <i class="iconfont icon-fenxiang2"></i>
                商品3
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
        <div id="pageModel" class="pageShow" @drop="getDrop($event)" @dragover="allowDrop($event)">
          
        </div>
      </div>
      <div class="delDom" @drop="removedrap($event)" @dragover="allowDrop($event)">1</div>
      <div class="adjustment">1</div>
    </div>

    <div class="domList">
      <div draggable="true" data-type="search1" id="search1_dom" @dragstart="copyDrop($event)">
        <icon class="iconfont icon-fenxiang2"></icon>
        <input type='text' placeholder='请输入搜索内容' />
      </div>
      <div draggable="true" data-type="search2" id="search2_dom" @dragstart="copyDrop($event)">
        <icon class="iconfont icon-fenxiang2"></icon>
        <input type='text' placeholder='请输入搜索内容' />
      </div>
      <div draggable="true" data-type="placard1" id="placard1_dom" @dragstart="copyDrop($event)">
        <div class='title'>
          <icon class="iconfont icon-tuihuobaozhang"></icon>
          <div>公告：</div>
        </div>
        <div class='con'>公告公告公告公告公告公告公告公告公告公告公告公告！</div>
      </div>
      <div draggable="true" data-type="nav1" id="nav1_dom" @dragstart="copyDrop($event)">
        <!-- <block wx:for="{{data}}" key="index" index="index" item="item">
          <div class="item">
            <icon class="iconfont icon-tuihuobaozhang"></icon>
            <div>导航</div>
          </div>
          <div class="item">
            <icon class="iconfont icon-tuihuobaozhang"></icon>
            <div>导航</div>
          </div>
        </block> -->
        <div class="item">
          <icon class="iconfont icon-tuihuobaozhang"></icon>
          <div>导航</div>
        </div>
        <div class="item">
          <icon class="iconfont icon-tuihuobaozhang"></icon>
          <div>导航</div>
        </div>
        <div class="item">
          <icon class="iconfont icon-tuihuobaozhang"></icon>
          <div>导航</div>
        </div>
        <div class="item">
          <icon class="iconfont icon-tuihuobaozhang"></icon>
          <div>导航</div>
        </div>
        <div class="item">
          <icon class="iconfont icon-tuihuobaozhang"></icon>
          <div>导航</div>
        </div>
      </div>
      <div draggable="true" data-type="nav2" id="nav2_dom" @dragstart="copyDrop($event)">
        <div class="item">
          <icon class="iconfont icon-tuihuobaozhang"></icon>
          <div>导航</div>
        </div>
        <div class="item">
          <icon class="iconfont icon-tuihuobaozhang"></icon>
          <div>导航</div>
        </div>
        <div class="item">
          <icon class="iconfont icon-tuihuobaozhang"></icon>
          <div>导航</div>
        </div>
        <div class="item">
          <icon class="iconfont icon-tuihuobaozhang"></icon>
          <div>导航</div>
        </div>
        <div class="item">
          <icon class="iconfont icon-tuihuobaozhang"></icon>
          <div>导航</div>
        </div>
      </div>
      <div draggable="true" data-type="nav3" id="nav3_dom" @dragstart="copyDrop($event)">
        <div class="item">
          <icon class="iconfont icon-tuihuobaozhang"></icon>
          <div>导航</div>
        </div>
        <div class="item">
          <icon class="iconfont icon-tuihuobaozhang"></icon>
          <div>导航</div>
        </div>
        <div class="item">
          <icon class="iconfont icon-tuihuobaozhang"></icon>
          <div>导航</div>
        </div>
        <div class="item">
          <icon class="iconfont icon-tuihuobaozhang"></icon>
          <div>导航</div>
        </div>
        <div class="item">
          <icon class="iconfont icon-tuihuobaozhang"></icon>
          <div>导航</div>
        </div>
      </div>
      <div draggable="true" data-type="nav4" id="nav4_dom" @dragstart="copyDrop($event)">
        <div class="item">导航</div>
        <div class="item">导航</div>
        <div class="item">导航</div>
        <div class="item">导航</div>
        <div class="item">导航</div>
        <div class="item">导航</div>
        <div class="item">导航</div>
      </div>
      <div draggable="true" data-type="commodityList1" id="commodityList1_dom" @dragstart="copyDrop($event)">
        <div class="item">
          <img src="./../assets/logo.png">
          <div class='info'>
            <div class="name">名字名字</div>
            <div class="infoCon">
              <div class="infotext">
                <div class='price'>99999999</div>
                <div class='priceUnit'>元</div>
                <div class='salesVolume'>销售量:1000件</div>
              </div>
              <icon class="iconfont icon-tuihuobaozhang"></icon>
            </div>
          </div>
        </div>
      </div>
      <div draggable="true" data-type="commodityList2" id="commodityList2_dom" @dragstart="copyDrop($event)">
        <div class="item">
          <img src="./../assets/logo.png">
          <div class='info'>
            <div class="name">名字名字名字名字</div>
            <div class="infoCon">
              <div>
                <div class='price'>
                  99999999
                  <span class='priceUnit'>元</span>
                </div>
                <div class='salesVolume'>销售量:1000件</div>
              </div>
              <icon class="iconfont icon-tuihuobaozhang"></icon>
            </div>
          </div>
        </div>
      </div>
      <div draggable="true" data-type="commodityList3" id="commodityList3_dom" @dragstart="copyDrop($event)">
        <div class="item">
          <img src="./../assets/logo.png">
          <div class='info'>
            <div class="name">名字名字名字名字</div>
            <div class="infoCon">
              <div>
                <div class='price'>
                  99999999
                  <span class='priceUnit'>元</span>
                </div>
                <div class='salesVolume'>销售量:1000件</div>
              </div>
              <icon class="iconfont icon-tuihuobaozhang"></icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import templatedom from '@/components/template/template.vue'

export default {
  name: "workshop",
  components: {
    // HelloWorld
  },
  data() {
    return {
      domList: [],
      domListNode: [],
      isOpenWind: true //点击X关闭窗口
    };
  },
  mounted() {
    // this.getDomList()
  },
  methods: {
    copyDrop(e) {
      e.dataTransfer.setData("id", e.target.id);
    },
    copyDrop2(e) {
      e.dataTransfer.setData("id", e.path[1].id);
    },
    allowDrop(e) {
      e.preventDefault();
    },
    getDrop(e) {
      e.preventDefault();
      var id = e.dataTransfer.getData("id");
      if (id === null || id === "") {
        console.log("id is NULL！");
        return;
      }
      var itemName = id + parseInt(Math.random() * (1000000 - 1 + 1) + 1);
      // 克隆真实对象
      var cloneObject = document.getElementById(id + "_dom").cloneNode(true);
      // 为克隆对象设置唯一Id
      cloneObject.setAttribute("id", itemName);
      // 事件追加绑定
      cloneObject.addEventListener("dragstart", this.copyDrop2);
      // this.$set(cloneObject, 'id', itemName)
      // 把新的节点添加到新的区域中
      e.target.appendChild(cloneObject);
      this.CopyCss(id, "", "", "");

      // 修改名称
      this.dialogFormVisible = true;
      this.labelid = itemName;
      // 获取手机模型中的子元素
      this.findChildren();
    },
    // 移除放下
    removedrap(e) {
      e.preventDefault();
      var removeid = e.dataTransfer.getData("id");
      if (removeid === null || removeid === "") {
        console.log("removeId == null");
        return;
      }
      // 删除节点
      document
        .getElementById(removeid)
        .parentNode.removeChild(document.getElementById(removeid));
      // 获取手机模型中的子元素
      this.findChildren();
    },
    CopyCss(obj, border, background, borderradius) {
      let moveObj = document.getElementById(obj);
      moveObj.style.border = border;
      moveObj.style.background = background;
      moveObj.style.borderRadius = borderradius;
    },
    findChildren() {
      var domList = $("#pageModel").children();
      var i = 0;
      var domListNode = [];
      for (let i = 0; i < domList.length; i++) {
        let typeData = $("#" + domList[i].id).attr("data-type");
        let domNode = { type: typeData, data: {} };
        domListNode.push(domNode);
      }
      this.domListNode = domListNode;
    }
  }
};
</script>
<style scoped lang="less">
// 商品1
[data-type='commodityList1']{
  width: 375px;
  height: auto;
}
[data-type='commodityList1'] .item{
  width: 345px;
  height: 265px;
  margin: 15px;
  background-color: #fff;
  border-radius: 5px;
}
[data-type='commodityList1'] .item img{
  width: 345px;
  height: 185px;
  border-radius: 5px 5px 0 0;
}
[data-type='commodityList1'] .info{
  width: 335px;
  height: 60px;
  padding: 5px 5px;
}
[data-type='commodityList1'] .infoCon{
  width: 315px;
  margin: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
[data-type='commodityList1'] .infotext{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  // background-color: #000;
  width: 300px;
  height: 40px;
}
[data-type='commodityList1'] .name{
  width: 335px;
  font-size: 15px;
  font-weight: 600;
  color: #282828;
  text-align: left;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  margin-bottom: 10px;
}
[data-type='commodityList1'] icon{
  color: #e94340;
}
[data-type='commodityList1'] text{
  font-size: 12px;
}
[data-type='commodityList1'] .price{
  font-size: 15px;
  color: #e94340;
  font-weight: 600;
}
[data-type='commodityList1'] .priceUnit{
  font-size: 12px;
  color: #343434;
}
[data-type='commodityList1'] .salesVolume{
  font-size: 15px;
  color: #b9b9b9;
  padding-left: 15px;
}
// 商品2
[data-type='commodityList2']{
  width: 355px;
  height: auto;
  margin: 0 10px;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
}
[data-type='commodityList2'] .item{
  width: 172.5px;
  height: 265px;
  margin: 2.5px;
  background-color: #fff;
  border-radius: 5px;
}
[data-type='commodityList2'] .item img{
  width: 172.5px;
  height: 172.5px;
  border-radius: 5px 5px 0 0;
}
[data-type='commodityList2'] .info{
  width: 152.5px;
  height: 60px;
  padding: 5px 10px;
}
[data-type='commodityList2'] .infoCon{
  width: 152.5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
[data-type='commodityList2'] .name{
  text-align: left;
  width: 152.5px;
  height: 40px;
  font-size: 15px;
  font-weight: 600;
  color: #282828;
  overflow:hidden;
  margin-bottom: 5px;
}
[data-type='commodityList2'] icon{
  color: #e94340;
}
[data-type='commodityList2'] .infoCon div{
  font-size: 12px;
}
[data-type='commodityList2'] .price{
  text-align: left;
  font-size: 15px;
  color: #e94340;
  font-weight: 600;
}
[data-type='commodityList2'] .priceUnit{
  font-size: 12px;
  color: #343434;
}
[data-type='commodityList2'] .salesVolume{
  font-size: 15px;
  color: #b9b9b9;
}
// 商品3
[data-type='commodityList3']{
  width: 365px;
  height: auto;
}
[data-type='commodityList3'] .item{
  width: 345px;
  height: 130px;
  margin: 15px;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
[data-type='commodityList3'] .item img{
  width: 140px;
  height: 130px;
  border-radius: 5px 0 0 5px;
}
[data-type='commodityList3'] .info{
  width: 190px;
  height: 110px;
  padding: 5px 5px;
}
[data-type='commodityList3'] .infoCon{
  width: 190px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
[data-type='commodityList3'] .name{
  text-align: left;
  width: 190px;
  height: 75px;
  font-size: 15px;
  font-weight: 600;
  color: #282828;
  overflow:hidden;
  margin-bottom: 5px;
}
[data-type='commodityList3'] icon{
  color: #e94340;
}
[data-type='commodityList3'] .infoCon div{
  font-size: 12px;
}
[data-type='commodityList3'] .price{
  text-align: left;
  font-size: 15px;
  color: #e94340;
  font-weight: 600;
}
[data-type='commodityList3'] .priceUnit{
  font-size: 15px;
  color: #343434;
}
[data-type='commodityList3'] .salesVolume{
  font-size: 15px;
  color: #b9b9b9;
}
// 导航1
[data-type='nav1']{
  width: 345px;
  min-height: 103px;
  padding: 5px 15px;
  height: auto;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
}
[data-type='nav1'] .item{
  width: 75px;
  height:103px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
  background-color: #fff;
  margin: 5px 0;
}
[data-type='nav1'] .item icon{
  width: 60px;
  height: 60px;
  border-radius: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3399f4;
  color: #fff;
  font-size: 22.5px;
}
[data-type='nav1'] .item div{
  text-align: center;
  font-size: 14px;
  color: #484848;
  padding: 5px 0;
  width: 100%;
}
// 导航2
[data-type='nav2']{
  width: 345px;
  min-height: 103px;
  padding: 5px 15px;
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
}
[data-type='nav2'] .item{
  width: 170px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #fff;
  margin: 2.5px 0;
}
[data-type='nav2'] .item icon{
  width: 60px;
  height: 60px;
  border-radius: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3399f4;
  color: #fff;
  font-size: 22.5px;
  margin: 10px;
}
[data-type='nav2'] .item div{
  text-align: left;
  font-size: 14px;
  color: #484848;
  padding: 5px 0;
}
// 导航3
[data-type='nav3']{
  width: 375px;
  min-height: 60px;
  height: auto;
  padding: 5px 0;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
}
[data-type='nav3'] .item{
  width: 89.7px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #fff;
  margin: 2px 2px;
}
[data-type='nav3'] .item icon{
  width: 40px;
  height: 40px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3399f4;
  color: #fff;
  font-size: 14px;
  margin: 0 5px;
}
[data-type='nav3'] .item div{
  text-align:14px;
  color: #484848;
}
// 导航4
[data-type='nav4']{
  width: 375px;
  min-height: 60px;
  height: auto;
  padding: 5px 0;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
}
[data-type='nav4'] .item{
  width: 88.7px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  font-size: 14px;
  color: #585858;
  margin: 2.5px 2.5px;
}
// search1_dom 搜索
[data-type='search1']{
  width: 355px;
  height: auto;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e9e9e9;
  margin: 0;
}
[data-type='search1'] icon{
  width: 40px;
  height: 40px;
  border-radius: 5px 0 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: #bebebe;
  font-size: 15px;
}
[data-type='search1'] input{
  width: 310px;
  height: 39px;
  font-size: 15px;
  color: #484848;
  background-color: #fff;
  border-radius: 0 5px 5px 0;
  border-width: 0;
}
// search2_dom 搜索
[data-type='search2']{
  width: 355px;
  height: auto;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
}
[data-type='search2'] icon{
  width: 40px;
  height: 40px;
  border-radius: 5px 0 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: #bebebe;
  font-size: 15px;
  border: 1px solid #bebebe;
  border-right-width: 0;
}
[data-type='search2'] input{
   width: 310px;
  height: 38px;
  font-size: 15px;
  color: #484848;
  background-color: #fff;
  border-radius: 0 5px 5px 0;
  border: 1px solid #bebebe;
  border-left-width: 0;
}
// 公告
[data-type='placard1'] {
  width: 375px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #fff9f5;
  font-size: 14px;
  margin: 0;
}

[data-type='placard1'] icon, [data-type='placard1'] .title {
  background-color: #fff9f5;
  z-index: 10;
}

[data-type='placard1'] icon {
  font-size: 20px;
  color: #fc8508;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 5px;
}

[data-type='placard1'] .title {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #fff9f5;
  margin: 0;
}

[data-type='placard1'] .title div {
  width: 50px;
  color: #484848;
  font-weight: 600;
  display: flex;
  align-items: center;
  background-color: #fff9f5;
  z-index: 10;
}

[data-type='placard1'] .con {
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #5a5959;
  animation: 10s wordsLoop linear infinite normal;
}

@keyframes wordsLoop {
  0% {
    transform: translateX(200px);
    -webkit-transform: translateX(200px);
  }

  100% {
    transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
  }
}

@-webkit-keyframes wordsLoop {
  0% {
    transform: translateX(200px);
    -webkit-transform: translateX(200px);
  }

  100% {
    transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
  }
}










// ------------------------------------页面布局------------------------------------
.about {
  // display: flex;
  // // align-items: center;
  // justify-content: space-between;
  margin: 0.5rem;
  height: auto;
  background-color: #fff;
  width: 92rem;
}
.position {
  width: 100%;
  margin: 1rem;
  color: #2d8cf0;
  font-size: 0.8rem;
  text-align: left;
  span {
    color: #9f9f9f;
  }
}
.title {
  width: 100%;
  margin: 1rem;
  color: #343434;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  i {
    color: #f98a10;
    font-size: 0.8rem;
  }
  span {
    font-size: 0.6rem;
    color: #2d8cf0;
    margin-right: 1rem;
  }
}
.factory {
  display: flex;
  // align-items: center;
  justify-content: flex-start;
  .tool {
    margin: 0 1rem;
    margin-right: 1.5rem;

    width: 15rem;
    height: 33rem;
  }
  .effect {
    margin: 0 1rem;
    margin-right: 1.5rem;
    width: 390px;
    height: 33rem;
  }
  .delDom {
    margin: 0 1rem;
    margin-right: 1.5rem;
    width: 3rem;
    height: auto;
    border: 1px solid #999;
    border-radius: 1rem;
  }
  .adjustment {
    margin: 0 1rem;
    margin-right: 1.5rem;
    width: 35.3rem;
    height: auto;
  }
}
.tool {
  border: 1px solid #9f9f9f;
  border-radius: 0.5rem;
  .nav-tabs {
    border-bottom: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
    li {
      height: 2rem;
      width: 7.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #cfcfcf;
      color: #555;
      border-radius: 0 0.5rem 0 0;
    }
    li:nth-child(1) {
      border-radius: 0.5rem 0 0 0;
    }
    li:nth-child(2) {
      border-radius: 0 0.5rem 0 0;
    }
    .active {
      color: #2d8cf0 !important;
      background-color: #fff;
      border-radius: 0.5rem 0.5rem 0 0;
    }
  }
  .pageList {
    .newPage {
      width: 10.35rem;
      height: 1.52rem;
      line-height: 1.52rem;
      color: #555;
      background-color: #fff;
      border-radius: 0.3rem;
      border: 1px solid #9f9f9f;
      margin: 1rem auto;
    }
    .pageLi {
      li {
        width: 14rem;
        height: 1.9rem;
        border: solid #9f9f9f;
        border-width: 0px;
        border-top-width: 1px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 0.5rem;
        color: #555;
        font-size: 0.5rem;
        .iconfont {
          color: #9f9f9f;
          margin-left: 0.25rem;
        }
        .iconfont:hover {
          color: #f98a10;
        }
      }
      li:last-child {
        border-bottom: 1px solid #9f9f9f;
      }
    }
  }
  .moduleList {
    .item {
      margin-top: 1rem;
      .typeNmae {
        width: 100%;
        color: #555;
        font-size: 0.5rem;
      }
      ul {
        width: 100%;
        height: auto;
        text-align: left;
        li:hover {
          border: 1px dashed #2d8cf0;
        }
        li {
          border: 1px solid #cfcfcf;
          width: 2.25rem;
          height: 2rem;
          background-color: #fafaf9;
          color: #555;
          font-size: 0.5rem;
          display: inline-flex;
          align-items: center;
          justify-content: space-around;
          flex-direction: column;
          padding: 0.5rem;
          margin: 0.5rem 0.825rem;
          border-radius: 0.25rem;
          .iconfont {
            font-size: 0.85rem;
            color: #2d8cf0;
          }
        }
      }
    }
  }
}
.effect {
  border: 1px solid #9f9f9f;
  border-radius: 1.5rem;
  .mobileSta {
    padding: 1rem 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.25rem;
    color: #343434;
    .iconfont {
      margin: 0.2rem;
    }
    // div {
    //   display: flex;
    //   align-items: center;
    //   justify-content: flex-end;
    // }
  }
  .pageInfo {
    padding: 0 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      font-size: 0.3rem;
      font-weight: 600;
      color: #343434;
    }
    .iconfont {
      margin: 0.3rem;
    }
  }
  .pageShow {
    // width: 15rem;
    width: 375px;
    height: 25rem;
    padding: 0;
    position: relative;
    overflow-y: auto;
    margin: 0 auto;
    border: 1px solid #333;
    background-color: #000;
  }
  .pageShow::-webkit-scrollbar {
    display: none;
  }
}
.adjustment {
  border: 1px solid #9f9f9f;
  border-radius: 0.5rem;
}

.pageShow {
  // .deleteDom {
  //   position: absolute;
  //   top: 0;
  //   right: 0;
  //   width: 1rem;
  //   height: 1rem;
  //   display: none;
  // }
  // [data-type] {
  //   position: relative;
  //   width: 15rem;
  //   height: auto;
  //   margin: 0.5rem 0;
  // }
  // [data-type]:hover {
  //   border: 0.1px dashed #2d8cf0;
  //   .deleteDom {
  //     display: block;
  //   }
  // }
  // [data-type="1"] {
  //   img {
  //     width: 15rem;
  //     height: 15rem;
  //   }
  // }
  // [data-type="2"] {
  //   img {
  //     width: 15rem;
  //     height: 10rem;
  //   }
  // }
}

.domList {
  display: none;
}
#component1dom,
#component2dom {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 100%;
    height: 10rem;
  }
}
</style>