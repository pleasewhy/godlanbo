<template>
  <div class="SearchInfo">
    <div v-if="$store.state.MainJudge">
      <el-form  :model="formInline" :rules="rules" ref="search" :inline="true" hide-required-asterisk>
        <el-form-item label="关键字" prop="keyword">
          <el-input v-model="formInline.keyword" placeholder="相关信息"></el-input>
        </el-form-item>
        <!-- <el-form-item label="信息来源" label-width="100px" prop="infofrom">
          <el-select v-model="formInline.infofrom" placeholder="请选择">
            <el-option label="自动抓取" value="自动抓取"></el-option>
            <el-option label="手动生成" value="手动生成"></el-option>
            <el-option label="全部" value="全部"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="渠道" label-width="100px" prop="path">
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
        </el-form-item> -->
      <el-form-item>
        <el-button type="primary" @click="submitSearch('search')">查询</el-button>
        <el-button :disabled="$store.state.loginLevel !=='jinpai'">导出</el-button>
      </el-form-item>
    </el-form>

      <el-table  ref="multipleTable" :data="tableData"  height="610" stripe>
        <el-table-column prop="name" label="商户名称" >
        </el-table-column>
        <!-- <el-table-column prop="level" label="质量评级" >
        </el-table-column> -->
        <el-table-column prop="address" label="地址" >
        </el-table-column>
        <!-- <el-table-column label="链接">
          <template slot-scope="scope">
            <a :href="''+tableData[scope.$index].linkAddress" target="_blank">{{tableData[scope.$index].linkAddress}}</a>
          </template>

        </el-table-column> -->
        <!-- <el-table-column prop="adminName" label="联系人">
        </el-table-column> -->
        <el-table-column prop="phonenumber" label="电话">
        </el-table-column>
        <!-- <el-table-column prop="infofrom" label="信息来源">
        </el-table-column>
        <el-table-column prop="path" label="渠道">
        </el-table-column> -->
      </el-table>
      <div class="block">
        <el-pagination
          @current-change="handleCurrentPage"
          layout="prev, pager, next, jumper"
          :page-size="20"
          :total="totalInfoNum">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchInfo',
  data () {
    return {
      tableDateRowIndex: 0,
      totalInfoNum: 1000,
      formInline: {
        keyword: '',
        infofrom: '',
        path: '',
        date1: '',
        date2: ''
      },
      rules: {
        keyword: [{required: true, message: '不能为空', trigger: 'blur'}]
      },
      tableData: [{
        name: '由睿婚礼策划',
        level: '五星好评',
        address: '新华街',
        linkAddress: 'http://www.google.com',
        adminName: '张三',
        phonenumber: '13100000000',
        infofrom: '自动抓取',
        path: '美团',
        sp_info: '已经联系过一次',
        fixTime: '2019-12-20 10:00:20'
      }, {
        name: '由睿婚礼策划',
        level: '五星好评',
        address: '新华街',
        linkAddress: 'http://www.google.com',
        adminName: '张三',
        phonenumber: '13100000000',
        infofrom: '自动抓取',
        path: '美团',
        sp_info: '已经联系过一次',
        fixTime: '2019-12-20 10:00:20'
      }]
    }
  },
  methods: {
    submitSearch (formdate) {
      // 提交数据到后端查询，接受返回数据
      this.$refs[formdate].validate((valid) => {
        if (valid) {
          console.log(1)
        } else {
          return false
        }
      })
    },
    handleCurrentPage (val) {
      console.log(val)
      // 传递给后端，重新获取数据
    },
    getPageDate (pagenumber) {
      console.log(pagenumber)
      // this.$axios.post('xxx', pagenumber)
      //   .then(response => {

      //   })
      //   .catch(function (error) {
      //     console.log(error)
      //   })
    }
  },
  mounted () {
    history.pushState(null, null, document.URL)
    window.addEventListener('popstate', function () {
      history.pushState(null, null, document.URL)
    })
  },
  created () {
    // getDate 在页面加载前获取数据
    this.getPageDate(1)
  }
}
</script>
<style scoped>
.el-header {
  background-color:  #808080;
  color: #333;
  line-height: 60px;
}
.SearchInfo>>>.el-table {
  margin-bottom: 50px;
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

</style>
