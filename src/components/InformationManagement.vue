<template>
  <div class="InformationManagement">
    <div v-if="$store.state.MainJudge">
      <el-form :inline="true" :model="formInline">
        <el-form-item label="关键字">
          <el-input v-model="formInline.keyword" placeholder="相关信息"></el-input>
        </el-form-item>
        <el-form-item label="信息来源" label-width="100px">
          <el-select v-model="formInline.infofrom" placeholder="请选择">
            <el-option label="自动抓取" value="自动抓取"></el-option>
            <el-option label="手动生成" value="手动生成"></el-option>
            <el-option label="全部" value="全部"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="渠道" label-width="100px">
          <el-select v-model="formInline.path" placeholder="请选择">
            <el-option label="美团" value="美团"></el-option>
            <el-option label="饿了么" value="饿了么"></el-option>
            <el-option label="大众点评" value="大众点评"></el-option>
            <el-option label="口碑" value="口碑"></el-option>
            <el-option label="全部" value="全部"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="更新时间" label-width="100px">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="formInline.date1" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col :span="2">&nbsp;——</el-col>
          <el-col :span="11">
            <el-time-picker placeholder="选择时间" v-model="formInline.date2" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
      <el-form-item>
        <el-button type="primary">查询</el-button>
        <el-button @click="addInformation">新增</el-button>
        <el-button>导出</el-button>
        <el-button type="primary" @click="sendMessage">群发短信</el-button>
      </el-form-item>
    </el-form>

      <el-table  ref="multipleTable" :data="tableData"  height="610" @selection-change="handleSelectionChange" stripe>
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column prop="name" label="商户名称" width="120">
        </el-table-column>
        <el-table-column prop="level" label="质量评级" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址" width="120">
        </el-table-column>
        <el-table-column label="链接">
          <template slot-scope="scope">
            <a :href="''+tableData[scope.$index].linkAddress" target="_blank">{{tableData[scope.$index].linkAddress}}</a>
          </template>

        </el-table-column>
        <el-table-column prop="adminName" label="联系人">
        </el-table-column>
        <el-table-column prop="phonenumber" label="电话">
        </el-table-column>
        <el-table-column prop="infofrom" label="信息来源">
        </el-table-column>
        <el-table-column prop="path" label="渠道">
        </el-table-column>
        <el-table-column prop="sp_info" label="备注">
        </el-table-column>
        <el-table-column prop="fixTime" label="更新时间">
        </el-table-column>
        <el-table-column  label="操作">
          <template slot-scope="scope">
            <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div v-else-if="$store.state.EditJudge">
      <EditInformation @save_edit="updateform" :date="tableData[tableDateRowIndex]" :id="tableDateRowIndex"></EditInformation>
    </div>
    <div v-else-if="$store.state.AddJudge">
      <AddInformation @save_add="addInformationToform"></AddInformation>
    </div>
  </div>
</template>

<script>
import EditInformation from './EditInformation.vue'
import AddInformation from './AddInformation.vue'
export default {
  name: 'InformationManagement',
  components: {
    EditInformation, AddInformation
  },
  data () {
    return {
      tableDateRowIndex: 0,
      formInline: {
        keyword: '',
        infofrom: '',
        path: '',
        date1: '',
        date2: ''
      },
      tableData: [{
        'name': '由睿婚礼策划',
        'level': '五星好评',
        'address': '新华街',
        'linkAddress': 'http://www.google.com',
        'adminName': '张三',
        'phonenumber': '13100000000',
        'infofrom': '自动抓取',
        'path': '美团',
        'sp_info': '已经联系过一次',
        'fixTime': '2019-12-20 10:00:20'
      }, {
        'name': '由睿婚礼策划',
        'level': '五星好评',
        'address': '新华街',
        'linkAddress': 'http://www.google.com',
        'adminName': '张三',
        'phonenumber': '13100000000',
        'infofrom': '自动抓取',
        'path': '美团',
        'sp_info': '已经联系过一次',
        'fixTime': '2019-12-20 10:00:20'
      }],
      multipleSelection: []
    }
  },
  methods: {
    getDateTime () {
      var d = new Date()
      var year = d.getFullYear()
      var month = d.getMonth() + 1
      var day = d.getDate()
      var hour = d.getHours()
      var minutes = d.getMinutes()
      var sec = d.getSeconds()
      if (minutes < 10) {
        minutes = '0' + minutes
      }
      if (sec < 10) {
        sec = '0' + sec
      }
      if (month < 10) {
        month = '0' + month
      }
      if (day < 10) {
        day = '0' + day
      }
      return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + sec
    },
    updateform (obj, index) {
      obj.fixTime = this.getDateTime()
      this.tableData[index] = obj
    },
    addInformationToform (obj) {
      obj.fixTime = this.getDateTime()
      this.tableData[this.tableData.length] = obj
    },
    handleEdit (index, row) {
      this.tableDateRowIndex = index
      this.$store.commit('FixMainJudge')
      this.$store.commit('FixEditJudge')
    },
    addInformation () {
      this.$store.commit('FixMainJudge')
      this.$store.commit('FixAddJudge')
    },
    handleDelete (index, row) {
      this.$confirm('是否确认删除该用户信息?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.tableData.splice(index, 1)
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    handleSelectionChange (val) {
      console.log(val)
      this.multipleSelection = val
    },
    sendMessage () {
      if (this.multipleSelection.length === 0) {
        localStorage.clear()
        this.$alert('请勾选商户后再点击群发短信！', '注意', '确定')
      } else {
        this.$alert('已选中' + this.multipleSelection.length + '个商户进行短信群发', '发送成功', '成功')
      }
    }
  },
  created () {
    this.$store.commit('InitializationMainJudge')
    this.$store.commit('InitializationEditJudge')
    this.$store.commit('InitializationAddJudge')
  }
}
</script>
<style scoped>
.el-header {
  background-color:  #808080;
  color: #333;
  line-height: 60px;
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
/*.el-header {
  background-color:  #808080;
  color: #333;
  line-height: 60px;
}*/
.el-aside {
  background-color: rgb(238, 241, 246);
  text-align: center;
  line-height: 60px;
  height: 800px;
}
</style>
