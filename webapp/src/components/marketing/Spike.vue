<template>
  <div class="con">
    <div class="charts">
      <h3 class="title">秒杀</h3>
      <div class="conter">
        <div class="selType">
          <div class="item">
            <div class="type">全部</div>
            <div class="type">未生效</div>
            <div class="type">已生效</div>
            <div class="type">已失效</div>
          </div>
        </div>
        <div class="selType">
          <div class="item">
            <el-button type="success" icon="el-icon-search">搜索</el-button>
            <el-input v-model="input" placeholder="请输入内容"></el-input>
            <el-button type="primary">主要按钮</el-button>
          </div>
        </div>
      </div>
      <div class="conter">
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="name"
            label="名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="range"
            label="有效范围"
            width="180">
          </el-table-column>
          <el-table-column
            prop="condition"
            label="生效条件">
          </el-table-column>
          <el-table-column
            prop="preferential"
            label="优惠内容">
          </el-table-column>
          <el-table-column
            prop="stock"
            label="库存总量">
            <!-- <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">派发</el-button>
            </template> -->
          </el-table-column>
          <el-table-column
            prop="status"
            label="状态">
          </el-table-column>
          <el-table-column
            prop="receive"
            label="领取状态">
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.receive"
                active-text=""
                inactive-text="">
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column
            prop="right"
            label="管理">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="conter">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "spike",
  components: {
    // HelloWorld
  },
  data() {
    return {
      domList: [],
      isOpenWind: true, //点击X关闭窗口
      tableData: [{
          name: '2016-05-02',
          range: '王小虎',
          condition: '上海市普陀区金沙江路 1518 弄',
          preferential: '王小虎',
          stock: '王小虎',
          status: '王小虎',
          receive: true,
          right: '王小虎'
        },{
          name: '2016-05-02',
          range: '王小虎',
          condition: '上海市普陀区金沙江路 1518 弄',
          preferential: '王小虎',
          stock: '王小虎',
          status: '王小虎',
          receive: false,
          right: '王小虎'
        },{
          name: '2016-05-02',
          range: '王小虎',
          condition: '上海市普陀区金沙江路 1518 弄',
          preferential: '王小虎',
          stock: '王小虎',
          status: '王小虎',
          receive: true,
          right: '王小虎'
        }]
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style scoped lang="less">
.con {
  width: 81rem;
  height: auto;
  margin-left: 1rem;
  display: inline-flex;
  flex-wrap: wrap;
}
.charts,
.list {
  width: 81rem;
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
    width: 79rem;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .selType {
      display: flex;
      align-items: center;
      .item {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-right: 1rem;
        .el-input{
          margin: 0 1rem;
        }
        label {
          font-size: 0.75rem;
          color: #5a5a5a;
          font-weight: 600;
        }
        .type{
          font-size: 0.75rem;
          padding: 0.3rem 0.75rem;
          border: 1px solid #c4c4c4;
          color: #c4c4c4;
          border-radius: 0.25rem;
          margin: 0 0.5rem;
        }
        .active,
        .type:hover {
          background-color: #3889fc;
          border-color: #3889fc;
          color: #fff;
        }
      }
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