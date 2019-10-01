<template>
  <div class="AllUsersInfo">
    <span>用户信息</span>
    <el-divider></el-divider>
    <el-menu mode="horizontal" :default-active="index" @select="handleSelect">
      <el-menu-item index="1">全部</el-menu-item>
      <el-menu-item index="2">普通用户</el-menu-item>
      <el-menu-item index="3">铜牌用户</el-menu-item>
      <el-menu-item index="4">银牌用户</el-menu-item>
      <el-menu-item index="5">金牌用户</el-menu-item>
    </el-menu>
    <el-button @click="deleteSelectInfo">
      <i class="el-icon-finished">批量删除</i>
    </el-button>
    <el-dropdown split-button trigger="click" @command="handleCommand">
      <span>
        <i class="el-icon-finished">变更用户权限</i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="a">普通用户</el-dropdown-item>
        <el-dropdown-item command="b">铜牌用户</el-dropdown-item>
        <el-dropdown-item command="c">银牌用户</el-dropdown-item>
        <el-dropdown-item command="d">金牌用户</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-table ref="multipleTable" :data="usersDate"  height="610" @selection-change="handleSelectionChange" stripe>
      <el-table-column
          type="selection"
          width="55">
      </el-table-column>
      <el-table-column prop="account" label="账号"></el-table-column>
      <el-table-column prop="company" label="公司"></el-table-column>
      <el-table-column prop="telnum" label="联系方式"></el-table-column>
      <el-table-column prop="privilegeLevel" label="用户等级"></el-table-column>
      <el-table-column prop="password" label="密码"></el-table-column>
      <el-table-column prop="ip" label="IP地址"></el-table-column>
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
</template>
<script>
export default {
  name: 'AllUsersInfo',
  data () {
    return {
      index: '',
      usersDate: [],
      multipleTable: []
    }
  },
  created () {
    this.index = '1'
  },
  watch: {
    index: function (val) {
      switch (this.index) {
        case '1':
          this.usersDate = [{
            account: '13152526525',
            company: '上海企业',
            telnum: '123354564',
            privilegeLevel: '银牌用户',
            password: '12345678',
            ip: '127.0.0.1'
          }, {
            account: '13152526525',
            company: '深圳企业',
            telnum: '123354564',
            privilegeLevel: '银牌用户',
            password: '12345678',
            ip: '127.0.0.1'
          }, {
            account: '13152526525',
            company: '内江企业',
            telnum: '123354564',
            privilegeLevel: '银牌用户',
            password: '12345678',
            ip: '127.0.0.1'
          }, {
            account: '13152526525',
            company: '大连企业',
            telnum: '123354564',
            privilegeLevel: '银牌用户',
            password: '12345678',
            ip: '127.0.0.1'
          }]
          break
        case '2':
          this.usersDate = [{
            account: '13152526525',
            company: '上海企业',
            telnum: '123354564',
            privilegeLevel: '普通用户',
            password: '12345678',
            ip: '127.0.0.1'
          }]
          break
      }
    }
  },
  methods: {
    deleteSelectInfo () {
      if (this.multipleTable.length === 0) {
        this.$alert('请勾选用户后再操作！', '注意', '确定')
        return
      }
      this.$confirm('是否删除选中的用户信息?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.usersDate = this.usersDate.concat(this.multipleTable).filter(function (value, index, tempArr) {
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
    handleCommand (command) {
      if (this.multipleTable.length === 0) {
        this.$alert('请勾选用户后再操作！', '注意', '确定')
      } else {
        this.$confirm('是否变更选中用户权限?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          switch (command) {
            case 'a':
              this.multipleTable.map(i => { i.privilegeLevel = '普通用户' })
              break
            case 'b':
              this.multipleTable.map(i => { i.privilegeLevel = '铜牌用户' })
              break
            case 'c':
              this.multipleTable.map(i => { i.privilegeLevel = '银牌用户' })
              break
            case 'd':
              this.multipleTable.map(i => { i.privilegeLevel = '金牌用户' })
              break
          }
          this.$message({
            type: 'success',
            message: '操作成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消变更'
          })
        })
      }
    },
    handleSelectionChange (val) {
      this.multipleTable = val
    },
    handleEdit (index, row) {
      console.log(index)
      console.log(row)
    },
    handleDelete (index, row) {
      this.$confirm('是否删除该用户信息?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.usersDate.splice(index, 1)
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
    handleSelect (index, indexpath) {
      this.index = index
    }
  }
}
</script>
<style scoped>
el-header {
  color: #333!important;
  line-height: 60px!important;
}
.el-divider{
  margin: 12px auto 0px auto;
  background-color: #3a4f80;
}
[class*=" el-icon-"], [class^=el-icon-]{
  font-weight: bold;
}
.el-menu--horizontal {
  margin-bottom: 15px;
}
</style>
<style>
.el-button-group>.el-button:first-child {
  padding-right: 10px;
}
</style>
