
<template>
  <div class="con">
    <div class="charts">
      <h3 class="title">出售中的商品</h3>
      <div class="conter">
        <div class="selType">
          <el-button type="primary">发布商品</el-button>
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item>
              <el-select v-model="formInline.region" placeholder="所有分组">
                <el-option label="所有分组" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-select v-model="formInline.region" placeholder="上品标题">
                <el-option label="上品标题" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-input v-model="formInline.user" placeholder="请输入上品标题"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">搜索</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
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
    .selType {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .el-form-item{
        margin-bottom: 0;
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
