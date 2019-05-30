
<template>
  <div class="con">
    <div class="charts">
      <h3 class="title">创建商品</h3>
      <div class="conter">
        <div class="step">
          <el-steps :active="active" finish-status="success">
            <el-step title="选择商品种类"></el-step>
            <el-step title="编辑基本信息"></el-step>
            <el-step title="编辑商品信息"></el-step>
          </el-steps>
        </div>
      </div>
      <div class="conter stepCon">
        <div class="titleList">
          <div class="item">
            <h5>基本信息</h5>
            <div></div>
          </div>
        </div>
        <div class="stepOperating">
          <div class="selList">
            <div class="item">
              <el-input v-model="input" placeholder="请输入搜索内容"></el-input>
              <ul class="itemList">
                <li>
                  配件
                  <i class="iconfont icon-shouye"></i>
                </li>
                <li>
                  配件
                  <i class="iconfont icon-shouye"></i>
                </li>
                <li>
                  配件
                  <i class="iconfont icon-shouye"></i>
                </li>
                <li>
                  配件
                  <i class="iconfont icon-shouye"></i>
                </li>
                <li>
                  配件
                  <i class="iconfont icon-shouye"></i>
                </li>
              </ul>
            </div>
            <div class="item">
              <el-input v-model="input" placeholder="请输入搜索内容"></el-input>
              <ul class="itemList">
                <li>
                  配件
                  <i class="iconfont icon-shouye"></i>
                </li>
                <li>
                  配件
                  <i class="iconfont icon-shouye"></i>
                </li>
                <li>
                  配件
                  <i class="iconfont icon-shouye"></i>
                </li>
                <li>
                  配件
                  <i class="iconfont icon-shouye"></i>
                </li>
                <li>
                  配件
                  <i class="iconfont icon-shouye"></i>
                </li>
              </ul>
            </div>
            <div class="item">
              <el-input v-model="input" placeholder="请输入搜索内容"></el-input>
              <ul class="itemList">
                <li>
                  配件
                  <i class="iconfont icon-shouye"></i>
                </li>
                <li>
                  配件
                  <i class="iconfont icon-shouye"></i>
                </li>
                <li>
                  配件
                  <i class="iconfont icon-shouye"></i>
                </li>
                <li>
                  配件
                  <i class="iconfont icon-shouye"></i>
                </li>
                <li>
                  配件
                  <i class="iconfont icon-shouye"></i>
                </li>
              </ul>
            </div>
          </div>
          <div class="selList">
            <el-button @click="next">下一步</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "transaction",
  components: {},
  data() {
    return {
      active: 0,
      formInline: {
        user: '',
        region: ''
      },
      tableData: [
        {
          time: "昨日",
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          time: "7日",
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          time: "30日",
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          time: "历史汇总",
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          time: "每日平均",
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          time: "历史峰值",
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  methods: {
    next() {
      if (this.active++ > 2) this.active = 0;
    },
    onSubmit() {
      console.log('submit!');
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    }
  }
};
</script>
<style scoped lang="less">
.con {
  width: 93rem;
  height: auto;
  margin-left: 0.5rem;
  display: inline-flex;
  flex-wrap: wrap;
}
.charts,
.list {
  width: 93rem;
  height: auto;
  margin-top: 0.5rem;
  background-color: #fff;
  border-radius: 0.5rem;
  .title {
    padding: 1rem;
    font-weight: 600;
    font-size: 0.75rem;
    color: #343434;
    border-bottom: 1px solid #f7f7f7;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    span {
      font-size: 0.65rem;
      color: #3889fc;
      margin-left: 1rem;
    }
  }
  .conter {
    width: 91rem;
    height: auto;
    padding: 1rem;
    text-align: left;
    .step {
      width: 49.5rem;
      margin: auto;
    }
  }
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
}
.stepCon{
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  position: relative;
  .titleList{
    width: 6.5rem;
    height: 35rem;
    background-color: #f7f7f7;
    // background-color: #333;
    // position: absolute;
    .item{
      width: 8.85rem;
      height: 2.25rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      white-space: nowrap;
      h5{
        width: 6.5rem;
        height: 100%;
        background-color: #3889fb;
        font-size: .75rem;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      div{
        width: 0;
        height: 0;
        border: solid #fff;
        border-left-color: #3889fb;
        border-width: 1.1rem;
      }
    }
  }
  .stepOperating{
    width: 77.75rem;
    height: auto;
    right: 0;
    .selList{
      display: flex;
      align-items: center;
      justify-content: space-around;
      .el-button{
        margin-top: 2rem;
      }
      .item{
        width: 16.26rem;
        height: auto;
        
        .itemList{
          width: 16.15rem;
          height: 23rem;
          border: 1px solid #eee;
          margin-top: 1rem;
          overflow-y: auto;
          li{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 1rem;
            height: 2rem;
            font-size: .7rem;
            color: #505050;
          }
          li:hover{
            color: #3889fb;
            background-color: #f7f7f7;
          }
        }
      }
    }
  }

}
</style>
