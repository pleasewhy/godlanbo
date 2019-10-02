<template>
  <div class="MyInfo">
    <span>个人资料</span>
        <el-divider></el-divider>
        <el-form :model="formInline" label-width="80px" >
            <el-form-item label="账号:" >
                <el-input v-model="formInline.account" placeholder=" " disabled></el-input>
            </el-form-item>
            <el-form-item label="公司:" >
                <el-input v-model="formInline.company" placeholder=" " ></el-input>
            </el-form-item>
            <el-form-item label=" 联系方式: " >
                <el-input v-model="formInline.telnum" placeholder=" " ></el-input>
            </el-form-item>
            <el-form-item label="用户等级:" >
                <el-input v-model="formInline.telnum" placeholder=" " ></el-input>
            </el-form-item>

            <el-form-item label="密码:" >
                <el-input v-model="formInline.password" placeholder=" " ></el-input>
            </el-form-item>
            <el-form-item label="IP地址:" >
                <el-input v-model="formInline.ip" placeholder=" " ></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="save_add">保存</el-button>
            </el-form-item>
        </el-form>
  </div>
</template>
<script>
export default {
  name: 'AddUser',
  data () {
    return {
      formInline: {
        account: 'admin',
        company: 'xxx',
        telnum: '131200000000',
        privilegeLevel: '管理员',
        password: 'adminroot',
        ip: '0.0.0.0'
      }
    }
  },
  methods: {
    save_add () {
      this.$confirm('是否添加?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        console.log(this.formInline)
        this.$message({
          type: 'success',
          message: '添加成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消添加'
        })
      })
    }
  }
}
</script>
<style scoped>
.el-form>>>.el-form-item__content{
  margin-left: 20px !important;
  float: left;
}
.el-form>>>.el-input__inner{
  width: 210%;
  font-weight: bold;
}
.el-form>>>.el-form-item__label{
  margin-left: 470px;
}
/*.el-form>>>button.el-button.el-button--button{
  margin-left: 570px;
  margin-top:15px;
  padding-right: 50px;
  padding-left: 50px;
}*/
.el-form>>>button.el-button.el-button--primary{
  margin-left: 850px;
  margin-top:15px;
  padding-right: 50px;
  padding-left: 50px;
}
.el-divider{
  margin: 12px auto 30px auto;
  background-color: #3a4f80;
}
</style>
<style>
</style>
