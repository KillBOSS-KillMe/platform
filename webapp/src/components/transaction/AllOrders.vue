
<template>
  <div class="con">
    <div class="charts">
      <h3 class="title">收支明细</h3>
      <div class="conter">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="商品名称">
            <el-input v-model="formInline.user" placeholder="请输入订单号"></el-input>
          </el-form-item>
          <el-form-item label="订单号">
            <el-input v-model="formInline.user" placeholder="请选择时间"></el-input>
          </el-form-item>
          <el-form-item label="外部单号">
            <el-input v-model="formInline.user" placeholder="请选择时间"></el-input>
          </el-form-item>
          <el-form-item label="下单时间">
            <el-input v-model="formInline.user" placeholder="请选择时间"></el-input>
          </el-form-item>
          <el-form-item label="完成时间">
            <el-input v-model="formInline.user" placeholder="请选择时间"></el-input>
          </el-form-item>
          <el-form-item label="订单状态">
            <el-select v-model="formInline.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="维权状态">
            <el-select v-model="formInline.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="收货人姓名">
            <el-input v-model="formInline.user" placeholder="请选择时间"></el-input>
          </el-form-item>
          <el-form-item label="收货人手机">
            <el-input v-model="formInline.user" placeholder="请选择时间"></el-input>
          </el-form-item>
          <el-form-item label="会员账号">
            <el-input v-model="formInline.user" placeholder="请选择时间"></el-input>
          </el-form-item>
          <el-form-item label="收获地址">
            <el-select v-model="formInline.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="配送方式">
            <el-select v-model="formInline.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="订单类型">
            <el-select v-model="formInline.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="来源小程序">
            <el-select v-model="formInline.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="付款方式">
            <el-select v-model="formInline.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">筛选</el-button>
            <el-button type="primary" @click="onSubmit">生产报表</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="conter">
        <div class="selType">
          <div class="item">
            <div class="active">全部</div>
            <div>待付款</div>
            <div>待发货</div>
            <div>已发货</div>
            <div>已完成</div>
            <div>已关闭</div>
            <div>退款中</div>
          </div>
        </div>
      </div>
    </div>
    <div class="charts">
      <h3 class="title">订单趋势</h3>
      <div class="conter">
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
        <el-pagination
  background
  layout="prev, pager, next"
  :total="10000">
</el-pagination>
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
  width: 81rem;
  height: auto;
  margin-left: 0.5rem;
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
    width: 91rem;
    height: auto;
    padding: 1rem;
    text-align: left;
    form{
      .el-form-item{
        width: 21.25rem;
        // .el-form-item__label{
        //   color: red !important;
        //   width: 5.5rem !important;
        // }
        // .el-form-item__content{
        //   width: 15.5rem;
        // }
      }
    }
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
  }
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
}
.el-pagination{
  text-align: center;
  margin-top: 1rem;
}

</style>
