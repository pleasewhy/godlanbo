<template>
  <div class="home">
    <el-container>
      <el-header height="100px">
        <h1 style="margin-left: 20px">后台管理系统</h1>
      </el-header>

      <el-container>

        <el-aside width="200px">
          <el-menu  :default-active="defaultActive" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item index="/Home/InformationManagement" @click="toSomeRouter('InformationManagement')">商户信息管理</el-menu-item>
            <el-menu-item index="/Home/Message" @click="toSomeRouter('Message')">短信群发管理</el-menu-item>
            <el-menu-item index="/Home/MessageHistory" @click="toSomeRouter('MessageHistory')">短信群发历史</el-menu-item>
            <el-submenu index="users">
              <template slot="title">
                  <span>用户</span>
              </template>
              <el-menu-item index="/Home/AllUsersInfo" @click="toSomeRouter('AllUsersInfo')">所有用户</el-menu-item>
            </el-submenu>

            <!-- <el-menu-item index="/Home/UsersInfoAndOperation" @click="toUsersInfoAndOperation">用户</el-menu-item> -->
            <!-- <el-menu-item index="/Home/RecycleBin" @click="toRecycleBin">回收站</el-menu-item> -->
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    // toInformationManagement () {
    //   if (this.$route.path !== '/Home/InformationManagement') {
    //     this.$router.push('/Home/InformationManagement')
    //   }
    // },
    // toMessage () {
    //   if (this.$route.path !== '/Home/Message') {
    //     this.$router.push('/Home/Message')
    //   }
    // },
    // toMessageHistory () {
    //   if (this.$route.path !== '/Home/MessageHistory') {
    //     this.$router.push('/Home/MessageHistory')
    //   }
    // },
    // toRecycleBin () {
    //   if (this.$route.path !== '/Home/RecycleBin') {
    //     this.$router.push('/Home/RecycleBin')
    //   }
    // },
    // toAllUsersInfo () {
    //   if (this.$route.path !== '/Home/AllUsersInfo') {
    //     this.$router.push('/Home/AllUsersInfo')
    //   }
    // },
    toSomeRouter (RouterPath) {
      if (this.$route.path !== '/Home/' + RouterPath) {
        this.$router.push('/Home/' + RouterPath)
      }
    }
  },
  computed: {
    defaultActive () {
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
<style scoped>
.el-header {
  background: repeating-linear-gradient(45deg, #333, rgb(84, 92, 100) 50px);
  color: #f5f7fa;
  line-height: 60px;
}
.el-menu-item.is-active {
  background-color: rgb(67, 74, 80)!important;
}
.el-menu {
  border-right: 0;
}
.el-menu-item {
  font-size: 16px;
}
</style>
<style>
body{
  margin: 0px;
}

.el-aside {
  background-color: #bebfc1;
  text-align: center;
  line-height: 60px;
  height: 835px;
}
.cell {
  text-align: center;
}
</style>
