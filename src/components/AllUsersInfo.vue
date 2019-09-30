<template>
  <div class="AllUsersInfo">
    <span>用户信息</span>
    <el-divider></el-divider>
    <el-menu mode="horizontal" :default-active="index">
      <el-menu-item index="1">全部</el-menu-item>
      <!-- <el-menu-item index="2">管理员</el-menu-item> -->
      <el-menu-item index="2">普通用户</el-menu-item>
      <el-menu-item index="3">铜牌用户</el-menu-item>
      <el-menu-item index="4">银牌用户</el-menu-item>
      <el-menu-item index="5">金牌用户</el-menu-item>
    </el-menu>
    <el-table :data="usersDate"  height="610" stripe>
      <el-table-column prop="adminName" label="联系人">
        </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'AllUsersInfo',
  data () {
    return {
      index: '1',
      usersDate: [{
        account: '13152526525',
        company: '上海企业',
        telnum: ''
      }]
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
</style>
<style>
.header_top {
  background-color: red;
}
</style>
