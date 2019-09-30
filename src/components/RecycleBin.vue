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

      <el-table  :data="tableInfo"  height="610"  stripe>
        <el-table-column prop="name" label="商户名称" width="415"></el-table-column>
        <el-table-column prop="phoneNumber" label="联系电话" width="415"></el-table-column>
        <el-table-column prop="deleteTime" label="删除时间" width="415"></el-table-column>
        <el-table-column label="操作" width="415">
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
        name: '由睿婚礼策划',
        phoneNumber: '13100002121',
        deleteTime: '2019-12-20 10:00:20'
      }]
    }
  },
  methods: {
    RecoveryInfo (index, row) {
      alert('恢复')
      console.log(index)
      console.log(row)
    },
    PermanentlyDelete (index, row) {
      alert('delete')
      console.log(index)
      console.log(row)
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
</style>
<style>
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
