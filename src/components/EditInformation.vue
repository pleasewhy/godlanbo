<template>
    <div class="EditInformation">
        <span>编辑商户信息</span>
        <el-divider></el-divider>
        <el-form :model="formInline" label-width="80px">
            <el-form-item label="商户名称:" >
                <el-input v-model="formInline.name" placeholder=" " ></el-input>
            </el-form-item>
            <el-form-item label="质量评级:" >
                <el-input v-model="formInline.level" placeholder=" " ></el-input>
            </el-form-item>
            <el-form-item label=" 地址: " >
                <el-input v-model="formInline.address" placeholder=" " ></el-input>
            </el-form-item>
            <el-form-item label=" 链接: " >
                <el-input v-model="formInline.linkAddress" placeholder=" " ></el-input>
            </el-form-item>
            <el-form-item label="联系人:" >
                <el-input v-model="formInline.adminName" placeholder=" " ></el-input>
            </el-form-item>
            <el-form-item label="电话:" >
                <el-input v-model="formInline.phonenumber" placeholder=" " ></el-input>
            </el-form-item>
            <el-form-item label="信息来源:" >
                <el-select v-model="formInline.infofrom" placeholder="请选择" style="width: 93%;">
                    <el-option label="自动抓取" value="自动抓取"></el-option>
                    <el-option label="手动生成" value="手动生成"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="渠道:" >
                <el-select v-model="formInline.path" placeholder="请选择" style="width: 93%;">
                    <el-option label="美团" value="美团"></el-option>
                    <el-option label="饿了么" value="饿了么"></el-option>
                    <el-option label="大众点评" value="大众点评"></el-option>
                    <el-option label="口碑" value="口碑"></el-option>
                    <el-option label="全部" value="全部"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="备注:" >
                <el-input v-model="formInline.sp_info" placeholder=" " ></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="button" @click="save_edit">保存</el-button>
                <el-button  @click="cancel">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
  name: 'EditInformation',
  props: ['date', 'id'],
  data () {
    return {
      formInline: {
        name: this.date.name,
        level: this.date.level,
        address: this.date.address,
        linkAddress: this.date.linkAddress,
        adminName: this.date.adminName,
        phonenumber: this.date.phonenumber,
        infofrom: this.date.infofrom,
        path: this.date.path,
        sp_info: this.date.sp_info,
        fixTime: this.date.fixTime
      }
    }
  },
  methods: {
    save_edit () {
      this.$confirm('是否保存?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$emit('save_edit', this.formInline, this.id)
        this.$message({
          type: 'success',
          message: '保存成功!'
        })
        this.$store.commit('FixMainJudge')
        this.$store.commit('FixEditJudge')
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消保存'
        })
      })
    },
    cancel () {
      this.$store.commit('FixMainJudge')
      this.$store.commit('FixEditJudge')
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
.el-form>>>button.el-button.el-button--button{
  margin-left: 590px;
  margin-top:15px;
  padding-right: 50px;
  padding-left: 50px;
}
.el-form>>>button.el-button.el-button--default{
  margin-left: 100px;
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
.el-main{
  padding-top: 12px;
}
</style>
