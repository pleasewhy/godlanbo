<template>
	<el-main>


    <el-main-from>
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

        <el-form-item >
          <el-col :push="12"><el-button type="primary" @click="submitForm">查看</el-button></el-col>
        </el-form-item>
      </el-form>
    </el-main-from>

    <el-main-table>
      <el-table  :data="tableData"  height="610" stripe>

        <el-table-column prop="MessageTo" label="发送对象" width="840">
        </el-table-column>
        
        <el-table-column prop="sendTime" label="发送时间" width="840">
        </el-table-column>
        
      </el-table>
    </el-main-table>
  </el-main>

</template>
<script>
	export default {
    name: 'MessageHistory',
    data () {
     return {

      formInline:{
        MessageTo:"",
        date1:"",
        date2:""
      },
      tableData: [{
        MessageTo:"1312000000",
        sendTime:"2019-12-20 10:00:20",
      },{
        MessageTo:"1312000000",
        sendTime:"2019-12-20 10:00:20",
      }]
    }
  },
  methods: {

    handleEdit(index, row) {
      console.log(row);
    },

    handleSelectionChange(val) {
      console.log(val);
      this.multipleSelection = val;
    },
    linkToMessageHistory(key,keyPath) {
      console.log(key);
    },
    submitForm(){

    }
  }
}
</script>
<style>
	body{
    margin: 0px;
  }
  .el-mian-from{
    padding: 20px 20px 10px 20px;
  }
  .el-mian-table {
    margin: 0px auto;
    padding: 0px 20px 20px 20px;
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