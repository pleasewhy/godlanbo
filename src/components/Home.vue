<template>
  <div class="home">
    <el-container>
      <el-header height="100px">
        <h1>后台管理系统</h1>
      </el-header>

      <el-container>

        <el-aside width="200px">
          <el-menu  :default-active="defaultActive"  background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">

            <!-- <el-menu-item index="/Home/InformationManagement">商户信息管理</el-menu-item>
            <el-menu-item index="/Home/Message">短信群发管理</el-menu-item>
            <el-menu-item index="/Home/MessageHistory">短信群发历史</el-menu-item> -->
            <el-menu-item index="/Home/InformationManagement" @click="toInformationManagement">商户信息管理</el-menu-item>
            <el-menu-item index="/Home/Message" @click="toMessage">短信群发管理</el-menu-item>
            <el-menu-item index="/Home/MessageHistory" @click="toMessageHistory">短信群发历史</el-menu-item>
          </el-menu>
        </el-aside>
        <router-view></router-view>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Message from './Message'
import MessageHistory from './MessageHistory'
import InformationManagement from './InformationManagement'

export default {
  name: 'Home',
  components: {
    Message, MessageHistory, InformationManagement
  },
  methods: {
    toInformationManagement () {
      if (this.$route.path !== '/Home/InformationManagement') {
        this.$router.push('/Home/InformationManagement')
      }
    },
    toMessage () {
      if (this.$route.path !== '/Home/Message') {
        this.$router.push('/Home/Message')
      }
    },
    toMessageHistory () {
      if (this.$route.path !== '/Home/MessageHistory') {
        this.$router.push('/Home/MessageHistory')
      }
    }
  },
  computed: {
    defaultActive () {
      console.log(this.$route.path.split('/'))
      return '/Home/' + this.$route.path.split('/')[2]
    }
  },
  mounted () {
    history.pushState(null, null, document.URL)
    window.addEventListener('popstate', function () {
      history.pushState(null, null, document.URL)
    })
  }
}
</script>
<style>
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
