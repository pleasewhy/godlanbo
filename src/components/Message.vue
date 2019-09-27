<template>
  <el-main>
    <el-form :inline="true" :model="formInline" >
      <el-form-item label="发送对象">
        <el-input v-model="formInline.MessageTo" placeholder=" "></el-input>
      </el-form-item>
      <el-form-item label="发送时间" label-width="100px">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="formInline.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col :span="2">&nbsp;——</el-col>
        <el-col :span="11">
          <el-time-picker placeholder="选择时间" v-model="formInline.date2" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>

      <el-form-item label="发送状态" label-width="100px">
        <el-select v-model="formInline.sendNow" placeholder="请选择">
          <el-option label="已发送" value="已发送"></el-option>
          <el-option label="待发送" value="待发送"></el-option>
          <el-option label="全部" value="全部"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-col :push="12"><el-button type="primary" @click="submitForm">查询</el-button></el-col>
      </el-form-item>
    </el-form>
    <el-table :data="tableData"  height="610" stripe>
     <el-table-column prop="MessageTo" label="发送对象" width="420">
     </el-table-column>
     <el-table-column prop="sendTime" label="发送时间" width="410">
     </el-table-column>
     <el-table-column prop="sendNow" label="发送状态" width="420">
     </el-table-column>
     <el-table-column  label="操作" width="420">
      <template  slot-scope="scope">
        <el-button
        :disabled ='scope.row.sendNow!="未发送"'
        size="mini"
        @click="cancelSend(scope.$index, scope.row.sendNow)">取消发送</el-button>
      </template>
    </el-table-column>
  </el-table>
</el-main>
</template>
<script>
export default {
  name: 'Message',
  data () {
    return {
      formInline: {
        MessageTo: '',
        sendNow: '',
        date1: '',
        date2: ''
      },
      tableData: [{
        MessageTo: '1312000000',
        sendTime: '2019-12-20 10:00:20',
        sendNow: '已发送'
      }, {
        MessageTo: '1312000000',
        sendTime: '2019-12-20 10:00:20',
        sendNow: '未发送'
      }]
    }
  },
  methods: {
    cancelSend (index, row) {
      this.$confirm('是否取消向该用户发送短信?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.tableData[index].sendNow = '已取消'
        this.$message({
          type: 'success',
          message: '取消成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消操作'
        })
      })
    },
    handleSelectionChange (val) {
      console.log(val)
      this.multipleSelection = val
    },
    linkToMessageHistory (key, keyPath) {
      console.log(key)
    }
  }
}
</script>
<style>
body{
  margin: 0px;
}
.el-form{
  padding: 10px 20px 10px 20px;
}
.el-table {
  margin: 0px auto;
  padding: 0px auto 20px auto;
}
.el-main{
  margin-top: 10px;
  padding-top: 0px;
}
.el-header {
  background-color:  #808080;
  color: #333;
  line-height: 60px;
}

.el-aside {
  background-color: rgb(238, 241, 246);
  text-align: center;
  line-height: 60px;
  height: 800px;
}
</style>
