<template>
  <el-main>
      <el-form :inline="true" :model="formInline" >
        <el-form-item label="发送对象">
          <el-input v-model="formInline.MessageTo" placeholder="商户联系电话"></el-input>
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
          <el-col :push="12"><el-button type="primary" @click="searchInfo">查看</el-button></el-col>
        </el-form-item>
      </el-form>
      <el-table  :data="tableData"  height="610" stripe>
        <el-table-column prop="MessageTo" label="发送对象" width="415"></el-table-column>
        <el-table-column prop="sendTime" label="发送时间" width="415"></el-table-column>
        <el-table-column prop="MessageInfo" label="详细信息" width="415">
          <div slot-scope="scope">
            <el-button
              type="text"
              icon="el-icon-message"
              @click="MessageInfoBox(scope.$index, scope.row)">
            </el-button>
            <el-dialog
              title="消息内容:"
              :visible.sync="dialogVisible"
              width="30%">
              <!-- <el-button @click="test(scope.$index, scope.row)">test</el-button> -->
              <el-divider></el-divider>
              <!-- <p>{{ tableData[scope.$index].MessageInfo }}</p> -->
              <p>{{ dialogText }}</p>
              <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false">确定</el-button>
              </span>
            </el-dialog>
          </div>
        </el-table-column>
        <el-table-column label="操作" width="415">
          <div slot-scope="scope">
            <el-button type="danger" size="mini" @click="deleteHistoryInfo(scope.$index, scope.row)">删除</el-button>
          </div>
        </el-table-column>
      </el-table>
  </el-main>
</template>
<script>
export default {
  name: 'MessageHistory',
  data () {
    return {
      formInline: {
        MessageTo: '',
        date1: '',
        date2: ''
      },
      dialogText: '',
      tableData: [{
        MessageTo: '1312000000',
        sendTime: '2019-12-20 10:00:20',
        MessageInfo: '尊敬的131200000：近期电信诈骗行为频发，请小心防范；如您有积分兑换需求，请自行登录中国移动积分商城官网https://m.jf.10086.cn/兑换；值此国庆佳节之际，内江移动温馨提示您：请提前预存足额话费，避免影响正常通信。如有出国计划，请提前拨打10086开通国长国漫功能。祝您愉快度过国庆长假。【中国移动】'
      }, {
        MessageTo: '1312000000',
        sendTime: '2019-12-20 10:00:20',
        MessageInfo: '尊敬的客户：近期电信诈骗行为频发，请小心防范；如您有积分兑换需求，请自行登录中国移动积分商城官网https://m.jf.10086.cn/兑换；值此国庆佳节之际，内江移动温馨提示您：请提前预存足额话费，避免影响正常通信。如有出国计划，请提前拨打10086开通国长国漫功能。祝您愉快度过国庆长假。【中国移动】'
      }],
      dialogVisible: false
    }
  },
  methods: {
    deleteHistoryInfo (index, row) {
      console.log(index)
      console.log(row)
    },
    handleEdit (index, row) {
      console.log(row)
    },
    handleSelectionChange (val) {
      console.log(val)
      this.multipleSelection = val
    },
    linkToMessageHistory (key, keyPath) {
      console.log(key)
    },
    searchInfo () {

    },
    MessageInfoBox (index, row) {
      this.dialogText = row.MessageInfo
      console.log(index)
      console.log(row)
      this.dialogVisible = true
    }
  }
}
</script>
<style scoped>
.el-table>>>button.el-button.el-button--text {
  padding-top: 0px;
  padding-bottom: 0px;
}
.el-table>>>.el-icon-message {
  font-size: 35px;
}
.el-table>>>.el-dialog__body {
  padding: 0px;
}
.el-table>>>.el-dialog__header {
  padding-top: 15px;
  text-align: left;
}
.el-table>>>p {
  text-align: left;
  margin-left: 15px;
  margin-right: 15px;
  font-size: 15px;
}
.el-table>>>.el-divider--horizontal {
  margin-top: 0px;
  margin-bottom: 0px;
  background-color: #3a4f80;
}
</style>
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
