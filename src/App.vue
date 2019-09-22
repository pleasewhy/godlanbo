<template>
  <div id="app">
    <el-container>
      <el-header height="100px">
        <h1>后台管理系统</h1>
      </el-header>

      <el-container>

        <el-aside width="200px">
          <!-- <i class="el-icon-s-home">&nbsp;首页</i> -->
          <el-menu router :default-active="defaultActive"  background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">

            <el-menu-item index="/InformationManagement">商户信息管理</el-menu-item>
            <el-menu-item index="/Message">短信群发管理</el-menu-item>
            <el-menu-item index="/MessageHistory">短信群发历史</el-menu-item>
          </el-menu>
        </el-aside>
        <router-view></router-view>
      </el-container>
    </el-container>
    
  </div>
</template>

<script>
// 导入组件
import Home from './components/Home'
import Message from './components/Message'
import MessageHistory from './components/MessageHistory'
import InformationManagement from './components/InformationManagement'
import EditInformation from './components/EditInformation'
import Login from './components/Login'
export default {
  name: 'app',
  components: {
    Home,Message,MessageHistory,InformationManagement,EditInformation
  },

  computed: {
    defaultActive() {
      return '/' + this.$route.path.split('/')[1];
    }
  }

}

</script>
<style type="text/css">
  body{
    margin: 0px;
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
