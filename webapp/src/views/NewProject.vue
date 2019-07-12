
<template>
  <div class="newProject">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="企业名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="企业法人" prop="person">
        <el-input v-model="ruleForm.person"></el-input>
      </el-form-item>
      <el-form-item label="法人微信号" prop="wechatcode">
        <el-input v-model="ruleForm.wechatcode"></el-input>
      </el-form-item>
      <el-form-item label="联系方式" prop="phone">
        <el-input v-model="ruleForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="企业代码类型" prop="codetype">
        <el-radio-group v-model="ruleForm.codetype">
          <el-radio label="1">组织机构代码</el-radio>
          <el-radio label="2">营业执照注册号</el-radio>
          <el-radio label="3">统一社会信用代码</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="企业代码" prop="code">
        <el-input v-model="ruleForm.code"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "newProject",
  components: {},
  data() {
    return {
      ruleForm: {
        name: "",
        person: "",
        wechatcode: "",
        phone: "",
        codetype: "",
        code: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入企业名称", trigger: "blur" },
          { min: 1, max: 100, message: "长度不符", trigger: "blur" }
        ],
        person: [
          { required: true, message: "请输入企业法人", trigger: "blur" },
          { min: 1, max: 100, message: "长度不符", trigger: "blur" }
        ],
        wechatcode: [
          { required: true, message: "请输入法人微信号", trigger: "blur" },
          { min: 1, max: 100, message: "长度不符", trigger: "blur" }
        ],
        phone: [
          { required: true, message: "请输入联系电话", trigger: "blur" },
          { min: 1, max: 100, message: "长度不符", trigger: "blur" }
        ],
        codetype: [
          { required: true, message: "请选择企业代码类型", trigger: "change" }
        ],
        code: [
          { required: true, message: "请输入企业代码", trigger: "blur" },
          { min: 1, max: 100, message: "长度不符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    submitForm() {
      console.log("submit!");
      console.log(this.ruleForm);
      let subData = this.ruleForm
      console.log(this.axios)
      this.axios.post(
          "https://api.weixin.qq.com/cgi-bin/component/fastregisterweapp?action=search&component_access_token=TOKEN",
          {
            // 前面声明了post请求，不需要在进行设置
            // name: this.username, // 默认使用data，如果是axios.get，需要使用parmas:{}将数据包裹
            name: subData.name,   // 企业名
            code: subData.code,         // 企业代码
            code_type: subData.codetype, // 企业代码类型（1：统一社会信用代码， 2：组织机构代码，3：营业执照注册号）
            legal_persona_wechat: subData.wechatcode,   // 法人微信
            legal_persona_name:subData.person ,   // 法人姓名
            component_phone:subData.phone //第三方联系电话  
          },
          {
            headers: { "Content-Type": "application/json" } // 这里可以设置请求头类型
          }
        ).then(res => {
          console.log(res); //请求成功打印res
        }).catch(err => {
          alert("请求错误"); //弹出请求错误
        });
    }
  }
};
</script>
<style scoped lang="less">
.newProject {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.el-form {
  background-color: #fff;
  padding: 1.5rem;
}
.el-form-item__label {
  width: 6rem;
}
.el-form-item__content {
  margin-left: 6rem;
}
</style>
