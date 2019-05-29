
<template>
  <div class="transaction">
    <div class="nav">
      <el-row class="tac">
        <el-col>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <div class="con">
      <div class="charts">
        <h3 class="title">小程序数据汇总</h3>
        <div class="conter">
          <div class="selType">
            <div class="item">
              <label>类型:</label>
              <div>浏览数</div>
              <div>浏览数</div>
              <div>浏览数</div>
            </div>
            <div class="item">
              <label>时间:</label>
              <div>浏览数</div>
              <div>浏览数</div>
              <div class="active">浏览数</div>
            </div>
          </div>
          <div class="listChart">
            <el-table class="tableMin"
              :data="tableData"
              style="width: 100%"
              :row-class-name="tableRowClassName">
              <el-table-column
                prop="time"
                label=""
                width="180">
              </el-table-column>
              <el-table-column
                prop="date"
                label="浏览数"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="转发数"
                width="180">
              </el-table-column>
              <el-table-column
                prop="address"
                label="新用户数">
              </el-table-column>
            </el-table>
            <div class="char">用户活跃度图表</div>
          </div>
          <div class="timeChart">最贱三十天曲线图图表</div>
        </div>
      </div>
      <div class="charts">
        <h3 class="title">交易情况</h3>
        <div class="conter">
          <div class="selType">
            <div class="item">
              <label>类型:</label>
              <div>浏览数</div>
              <div>浏览数</div>
              <div>浏览数</div>
            </div>
            <div class="item">
              <label>时间:</label>
              <div>浏览数</div>
              <div>浏览数</div>
              <div class="active">浏览数</div>
            </div>
          </div>
          <div class="listChart">
            <el-table class="tableMin"
              :data="tableData"
              style="width: 100%"
              :row-class-name="tableRowClassName">
              <el-table-column
                prop="time"
                label=""
                width="180">
              </el-table-column>
              <el-table-column
                prop="date"
                label="浏览数"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="转发数"
                width="180">
              </el-table-column>
              <el-table-column
                prop="address"
                label="新用户数">
              </el-table-column>
            </el-table>
            <div class="char">用户活跃度图表</div>
          </div>
          <div class="timeChart">最贱三十天曲线图图表</div>
        </div>
      </div>
      <div class="charts">
        <h3 class="title">
          商品排行榜
          <span>查看更多</span>
        </h3>
        <div class="conter">
          <div class="selType">
            <div class="item">
              <div>浏览数</div>
              <div>浏览数</div>
              <div class="active">浏览数</div>
            </div>
          </div>
          <el-table class="tableMax"
              :data="tableData"
              style="width: 100%"
              :row-class-name="tableRowClassName">
              <el-table-column
                prop="time"
                label=""
                width="180">
              </el-table-column>
              <el-table-column
                prop="date"
                label="浏览数"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="转发数"
                width="180">
              </el-table-column>
              <el-table-column
                prop="address"
                label="新用户数">
              </el-table-column>
            </el-table>
        </div>
      </div>
      <div class="charts">
        <h3 class="title">推客统计</h3>
        <div class="conter">
          <div class="selType">
            <div class="item">
              <label>类型:</label>
              <div>浏览数</div>
              <div>浏览数</div>
              <div>浏览数</div>
            </div>
            <div class="item">
              <label>时间:</label>
              <div>浏览数</div>
              <div>浏览数</div>
              <div class="active">浏览数</div>
            </div>
          </div>
          <div class="listChart">
            <el-table class="tableMin"
              :data="tableData"
              style="width: 100%"
              :row-class-name="tableRowClassName">
              <el-table-column
                prop="time"
                label=""
                width="180">
              </el-table-column>
              <el-table-column
                prop="date"
                label="浏览数"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="转发数"
                width="180">
              </el-table-column>
              <el-table-column
                prop="address"
                label="新用户数">
              </el-table-column>
            </el-table>
            <div class="char">用户活跃度图表</div>
          </div>
          <div class="timeChart">最贱三十天曲线图图表</div>
        </div>
      </div>
      <div class="charts">
        <h3 class="title">
          推客价值排行版
          <span>查看更多</span>
        </h3>
        <div class="conter">
          <div class="selType">
            <div class="item">
              <div>浏览数</div>
              <div>浏览数</div>
              <div class="active">浏览数</div>
            </div>
          </div>
          <el-table class="tableMax"
            :data="tableData"
            style="width: 100%"
            :row-class-name="tableRowClassName">
            <el-table-column
              prop="time"
              label=""
              width="180">
            </el-table-column>
            <el-table-column
              prop="date"
              label="浏览数"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="转发数"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="新用户数">
            </el-table-column>
          </el-table>
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
      tableData: [{
        time: '昨日',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        time: '7日',
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        time: '30日',
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        time: '历史汇总',
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        time: '每日平均',
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        time: '历史峰值',
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style scoped lang="less">
.transaction {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.nav {
  width: 10rem;
  height: 100%;
  background-color: #fff;
  overflow: hidden;
  li{
    text-align: left;
  }
}
.con {
  width: 85.65rem;
  height: auto;
  margin-left: 1rem;
  display: inline-flex;
  flex-wrap: wrap;
}
.charts,
.list {
  width: 85rem;
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
    width: 83rem;
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
      height: 14rem;
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
</style>
