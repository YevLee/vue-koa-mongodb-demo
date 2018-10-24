<template>
    <div class="page">
        <header class="pageTitle">请登录</header>
        <div class="content">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="姓名" prop="name">
                    <el-input v-model.number="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
             </el-form>
        </div>
        <div class="toRegister" @click="toReg()">
            没有账号，去注册
        </div>
    </div>
</template>
<script>
export default {
  data() {
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("姓名不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入姓名"));
        } else {
            callback();
          }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        name: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" },
        { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }],
        name: [{ validator: checkName, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
            //后台请求接口
           console.log(valid)
           console.log("submit!");
           if(this.ruleForm.name!="123"){
               this.$message({
                   type:"info",
                   message:"账号不是123呢"
               })
           }else{
                this.$message({
                   type:"info",
                   message:"登陆成功"
               });
               localStorage.setItem("token",this.ruleForm.name)
               this.$router.push("/Index")
           }
         this.ruleForm.pass="";   
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    toReg(){
        this.$router.push({path:"/register"})
    }
  }
};
</script>
<style>
.toRegister{
    color:#333;
    font-size:16px;
    text-align: left;
    padding-left:60px;
}
</style>
