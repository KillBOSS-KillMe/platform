
<template>
  <div class="con">
    <div class="charts">
      <h3 class="title">交易概况</h3>
      <div class="conter dataManage">
        <div class="item">
          <i class="iconfont icon-shouye"></i>
          <div class="info">
            <h4>交易总额</h4>
            <div>
              10000.00
              <span>元</span>
            </div>
          </div>
          <div class="mark">收支明细</div>
        </div>
        <div class="item">
          <i class="iconfont icon-shouye"></i>
          <div class="info">
            <h4>订单数</h4>
            <div>
              66
              <span>单</span>
            </div>
          </div>
          <div class="mark">收支明细</div>
        </div>
        <div class="item">
          <i class="iconfont icon-shouye"></i>
          <div class="info">
            <h4>用户数</h4>
            <div>
              150
              <span>人</span>
            </div>
          </div>
          <div class="mark">用户列表</div>
        </div>
      </div>
    </div>
    <div class="charts">
      <h3 class="title">转化漏斗</h3>
      <div class="conter">
        <div class="selType">
          <div class="item">
            <!-- <label>类型:</label> -->
            <div>浏览数</div>
            <div>浏览数</div>
            <div>浏览数</div>
          </div>
        </div>
        <div class="timeChart">
          <el-table
            class="tableMin"
            :data="tableData"
            style="width: 100%"
            :row-class-name="tableRowClassName"
          >
            <el-table-column prop="time" label width="180"></el-table-column>
            <el-table-column prop="date" label="浏览数" width="180"></el-table-column>
            <el-table-column prop="name" label="转发数" width="180"></el-table-column>
            <el-table-column prop="address" label="新用户数"></el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <div class="charts">
      <h3 class="title">转化漏斗</h3>
      <div class="conter">
        <div class="selType">
          <div class="item">
            <!-- <label>类型:</label> -->
            <div>浏览数</div>
            <div>浏览数</div>
            <div>浏览数</div>
          </div>
        </div>
        <div class="timeChart">
          图表图表图表图表图表图表
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
    padding: 1rem;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    .selType {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .item {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-right: 1rem;
        label {
          font-size: 0.75rem;
          color: #5a5a5a;
          font-weight: 600;
        }
        div {
          font-size: 0.75rem;
          padding: 0.3rem 0.75rem;
          border: 1px solid #c4c4c4;
          color: #c4c4c4;
          border-radius: 0.25rem;
          margin: 0 0.5rem;
        }
        .active,
        div:hover {
          background-color: #3889fc;
          border-color: #3889fc;
          color: #fff;
        }
      }
    }
    .listChart {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      // .dataList{
      //   width: 60.4rem;
      //   height: 11rem;
      //   border: 1px solid #333;
      //   margin-top: .5rem;
      // }

      .char {
        width: 21rem;
        height: 16rem;
        border: 1px solid #333;
        margin-top: 0.5rem;
      }
    }
    .timeChart {
      width: 100%;
      min-height: 14rem;
      height: auto;
      margin-top: 1rem;
      border: 1px solid #333;
    }
    .tableMax,
    .tableMin {
      border: 1px solid #f0f0f0;
      color: #afafaf;
      font-size: 0.75rem;
      height: 16rem;
      td,
      tr,
      th {
        padding: 0 !important;
        margin: 0 !important;
        height: 1.75rem;
      }
      tr:nth-child(n) {
        background-color: #f9f9f9;
      }
      tr:nth-child(2n) {
        background-color: #ffffff;
      }
    }
    .tableMin {
      width: 60.4rem;
      height: 16rem;
      margin-top: 0.5rem;
    }
    .tableMax {
      width: 100%;
      height: auto;
      margin-top: 0.5rem;
      // tr{
      //   display: flex;
      //   align-items: center;
      //   justify-content: space-between;
      // }
    }
  }
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
}
.dataManage{
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  .item{
    position: relative;
    width: 24.75rem;
    height: 4rem;
    padding: 1rem 1.5rem;
    background-color: #f9f9f9;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .iconfont{
      width: 4.2rem;
      height: 4.2rem;
      border-radius: 4.2rem;
      color: #fff;
      font-size: 2rem;
      background-color: #333;
    }
    h4{
      font-size: .7rem;
      color: #484848;
      margin-bottom: .5rem;
    }
    .info{
      width: 21rem;
      padding-left: 1rem;
      text-align: left;
      div{
        font-weight: 600;
        margin-top: .5rem;
        font-size: 1.1rem;
        span{
          font-size: .7rem;
          color: #484848;
        }
      }
    }
    .mark{
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      font-size: .65rem;
      color: #b6b6b6;
    }
  }
  .item:nth-child(1){
    .iconfont{
      background-color: #3889fc;
    }
    .info{
      div{
        color: #3889fc;
      }
    }
  }
  .item:nth-child(2){
    .iconfont{
      background-color: #fe9900;
    }
    .info{
      div{
        color: #fe9900;
      }
    }
  }
  .item:nth-child(3){
    .iconfont{
      background-color: #e84341;
    }
    .info{
      div{
        color: #e84341;
      }
    }
  }
}

</style>
