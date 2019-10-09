<template>
    <div class="AddInformation">
        <span>新增商户信息</span>
        <el-divider></el-divider>

        <el-form :model="formInline" label-width="80px">
            <el-form-item label="商户名称:" >
                <el-input v-model="formInline.name" placeholder=" " :disabled="judgeShowInput"></el-input>
            </el-form-item>
            <el-form-item label="质量评级:" >
                <el-input v-model="formInline.level" placeholder=" " :disabled="judgeShowInput"></el-input>
            </el-form-item>
            <el-form-item label=" 地址: " >
                <el-input v-model="formInline.address" placeholder=" " :disabled="judgeShowInput"></el-input>
            </el-form-item>
            <el-form-item label=" 链接: " >
                <el-input v-model="formInline.linkAddress" placeholder=" " :disabled="judgeShowInput"></el-input>
            </el-form-item>
            <el-form-item label="联系人:" >
                <el-input v-model="formInline.adminName" placeholder=" " :disabled="judgeShowInput"></el-input>
            </el-form-item>
            <el-form-item label="电话:" >
                <el-input v-model="formInline.phonenumber" placeholder=" " :disabled="judgeShowInput"></el-input>
            </el-form-item>
            <el-form-item label="信息来源:" >
                <el-select v-model="formInline.infofrom" placeholder="请选择" style="width: 93%;">
                    <el-option label="自动抓取" value="自动抓取" v-if="$store.state.loginLevel == 'superRoot'"></el-option>
                    <el-option label="手动生成" value="手动生成"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="渠道:" >
                <el-select v-model="formInline.path" placeholder="请选择" :disabled="automaticGrabState" style="width: 93%;">
                    <el-option label="美团" value="美团"></el-option>
                    <el-option label="大众点评" value="大众点评"></el-option>
                    <el-option label="全部" value="全部"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="备注:" >
                <el-input v-model="formInline.sp_info" placeholder=" " :disabled="judgeShowInput"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="button" @click="save_add" :disabled="automaticGrabState">添加</el-button>
                <el-button  @click="cancel" >取消</el-button>
            </el-form-item>
        </el-form>
        <div class="autoText" v-if="automaticGrabState">数据抓取中<i class="el-icon-loading"></i></div>
        <el-progress :percentage="percentageNum" :format="format" :stroke-width="14" v-if="automaticGrabState"></el-progress>
    </div>
</template>
<script>
export default {
  name: 'EditInformation',
  data () {
    return {
      formInline: {
        name: '',
        level: '',
        address: '',
        linkAddress: '',
        adminName: '',
        phonenumber: '',
        infofrom: '手动生成',
        path: '',
        sp_info: '',
        fixTime: ''
      },
      automaticGrabState: false,
      percentageNum: 50
    }
  },
  methods: {
    save_add () {
      if (this.formInline.infofrom === '手动生成') {
        this.$confirm('是否添加?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$emit('save_add', this.formInline)
          this.$message({
            type: 'success',
            message: '添加成功!'
          })
          this.$store.commit('FixAddJudge')
          this.$store.commit('FixMainJudge')
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消保存'
          })
        })
      } else if (this.formInline.infofrom === '自动抓取') {
        this.automaticGrabState = true
      }
    },
    format (percentage) {
      return percentage === 100 ? '完成' : `${percentage}%`
    },
    cancel () {
      this.$store.commit('FixAddJudge')
      this.$store.commit('FixMainJudge')
    }
  },
  computed: {
    judgeShowInput: function () {
      return (this.formInline.infofrom === '自动抓取' || this.automaticGrabState) && this.formInline.infofrom !== '手动生成'
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
.AddInformation>>>.el-progress-bar{
  width: 32%;
  margin-left: 33%;
}
</style>
<style>
.el-main{
  /*padding: 12px;*/
  padding-top: 12px;
}
.autoText{
  margin-left: 33%;
  margin-top:-15px;
}
</style>
