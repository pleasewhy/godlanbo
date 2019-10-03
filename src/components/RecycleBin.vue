<template>
  <div class="RecycleBin">
      <el-form :inline="true" :model="formTable">
        <el-form-item label="关键字">
          <el-input v-model="formTable.keyword" placeholder="商户地址或电话"></el-input>
        </el-form-item>
        <el-form-item label="时间范围" label-width="100px">
        <el-select v-model="formTable.timeFrame" placeholder="请选择">
          <el-option label="10天以内" value="10"></el-option>
          <el-option label="20天以内" value="20"></el-option>
          <el-option label="30天以内" value="30"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">查询</el-button>
      </el-form-item>
      </el-form>
      <el-button @click="deleteSelectInfo">
        <i class="el-icon-finished">批量删除</i>
      </el-button>
      <el-button @click="recoverySelectInfo">
        <i class="el-icon-finished">批量恢复</i>
      </el-button>
      <el-table ref="multipleTable" :data="tableInfo"  height="610" stripe @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column prop="account" label="账户" ></el-table-column>
        <el-table-column prop="company" label="公司" ></el-table-column>
        <el-table-column prop="telnum" label="联系人" ></el-table-column>
        <el-table-column prop="privilegeLevel" label="用户权限" ></el-table-column>
        <el-table-column prop="password" label="密码" ></el-table-column>
        <el-table-column prop="ip" label="IP地址" ></el-table-column>
        <el-table-column label="操作" >
          <div slot-scope="scope">
            <el-button type="default" size="mini" @click="RecoveryInfo(scope.$index, scope.row)">恢复用户</el-button>
            <el-button type="danger" size="mini" @click="PermanentlyDelete(scope.$index, scope.row)">永久删除</el-button>
          </div>
        </el-table-column>
      </el-table>
  </div>
</template>
<script>
export default {
  name: 'RecycleBin',
  data () {
    return {
      formTable: {
        keyword: '',
        timeFrame: ''
      },
      tableInfo: [{
        account: '13100002121',
        company: '上海企业',
        telnum: '13100002121',
        privilegeLevel: '普通用户',
        password: '123456',
        ip: '0.0.0.0',
        deleteTime: '2019-12-20 10:00:20'
      }, {
        account: '13100002121',
        company: '内江企业',
        telnum: '13100002121',
        privilegeLevel: '普通用户',
        password: '123456',
        ip: '0.0.0.0',
        deleteTime: '2019-12-20 10:00:20'
      }, {
        account: '13100002121',
        company: '大红企业',
        telnum: '13100002121',
        privilegeLevel: '普通用户',
        password: '123456',
        ip: '0.0.0.0',
        deleteTime: '2019-12-20 10:00:20'
      }, {
        account: '13100002121',
        company: '123企业',
        telnum: '13100002121',
        privilegeLevel: '普通用户',
        password: '123456',
        ip: '0.0.0.0',
        deleteTime: '2019-12-20 10:00:20'
      }],
      multipleTable: []
    }
  },
  created () {
    // 请求数据
  },
  methods: {
    RecoveryInfo (index, row) {
      this.$confirm('是否恢复该用户信息?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.tableInfo.splice(index, 1)
        this.$message({
          type: 'success',
          message: '恢复成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消恢复'
        })
      })
    },
    PermanentlyDelete (index, row) {
      this.$confirm('是否彻底删除该用户信息?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.tableInfo.splice(index, 1)
        // 向后端请求恢复数据
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
      this.multipleTable = val
    },
    deleteSelectInfo () {
      if (this.multipleTable.length === 0) {
        this.$alert('请勾选信息后再操作！', '注意', '确定')
        return
      }
      this.$confirm('是否删除选中的用户信息?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.tableInfo = this.tableInfo.concat(this.multipleTable).filter(function (value, index, tempArr) {
          return tempArr.indexOf(value) === tempArr.lastIndexOf(value)
        })
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
    recoverySelectInfo () {
      if (this.multipleTable.length === 0) {
        this.$alert('请勾选信息后再操作！', '注意', '确定')
        return
      }
      this.$confirm('是否恢复选中的用户信息?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.tableInfo = this.tableInfo.concat(this.multipleTable).filter(function (value, index, tempArr) {
          return tempArr.indexOf(value) === tempArr.lastIndexOf(value)
        })
        // 向后端请求恢复数据
        this.$message({
          type: 'success',
          message: '恢复成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消恢复'
        })
      })
    }
  }
}
</script>
<style scoped>
.el-header {
  background-color:  #808080;
  color: #333;
  line-height: 60px;
}
[class*=" el-icon-"], [class^=el-icon-]{
  font-weight: bold;
}
</style>
<style>
/*.el-header {
  background-color:  #808080;
  color: #333;
  line-height: 60px;
}*/
/*.el-aside {
  background-color: rgb(238, 241, 246);
  text-align: center;
  line-height: 60px;
  height: 800px;
}*/
</style>
