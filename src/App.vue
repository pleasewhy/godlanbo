<template>
  <div class="app">
  <router-view/>
  </div>
</template>

<script>
// 导入组件
import Home from './components/Home'
import Message from './components/Message'
import MessageHistory from './components/MessageHistory'
import InformationManagement from './components/InformationManagement'
import EditInformation from './components/EditInformation'
export default {
  name: 'app',
  components: {
    Home, Message, MessageHistory, InformationManagement, EditInformation
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
