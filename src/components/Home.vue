<template>
  <div class="home">
    <el-container>
      <el-header height="100px">
        <h1 style="margin-left: 20px">后台管理系统</h1>
      </el-header>

      <el-container>

        <el-aside width="200px"  ref="asideHeight">
          <el-menu  :default-active="defaultActive" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item index="/Home/InformationManagement" @click="toSomeRouter('InformationManagement')">商户信息管理</el-menu-item>
            <el-menu-item index="/Home/Message" @click="toSomeRouter('Message')">短信群发管理</el-menu-item>
            <el-menu-item index="/Home/MessageHistory" @click="toSomeRouter('MessageHistory')">短信群发历史</el-menu-item>
            <el-submenu index="users">
              <template slot="title">
                  <span>用户</span>
              </template>
              <el-menu-item index="/Home/AllUsersInfo" @click="toSomeRouter('AllUsersInfo')">所有用户</el-menu-item>
              <el-menu-item index="/Home/AddUser" @click="toSomeRouter('AddUser')">添加用户</el-menu-item>
              <el-menu-item index="/Home/MyInfo" @click="toSomeRouter('MyInfo')">个人资料</el-menu-item>
            </el-submenu>
            <el-divider></el-divider>
            <!-- <el-menu-item index="/Home/UsersInfoAndOperation" @click="toUsersInfoAndOperation">用户</el-menu-item> -->
            <el-menu-item index="/Home/RecycleBin" @click="toSomeRouter('RecycleBin')">回收站</el-menu-item>
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
  data () {
    return {
      bodyHeight: ''
    }
  },
  watch: {
    bodyHeight: function () {
      // this.bodyHeight = (parseInt(this.bodyHeight) - 100) + ''
      this.$refs.asideHeight.$el.style.height = this.bodyHeight - 100 + 'px'
    }
  },
  methods: {
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
    // this.$set(this.data, 'bodyHeight', `${document.documentElement.clientHeight}`)
    // window.onresize = function temp() {
    //   this.bodyHeight = `${document.documentElement.clientHeight}`
    //   console.log(this.bodyHeight)
    // }
    this.bodyHeight = document.documentElement.clientHeight
    window.onresize = () => {
      this.bodyHeight = `${document.documentElement.clientHeight}`
      console.log(this.bodyHeight)
    }
    history.pushState(null, null, document.URL)
    window.addEventListener('popstate', function () {
      history.pushState(null, null, document.URL)
    })
  }
}
</script>
<style scoped>
.el-menu>>>.el-submenu__title i{
  color: #ffd04c;
}
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
span{
  font-size: 16px;
}
.el-divider--horizontal {
  margin-top: 0px;
  margin-bottom: 0px;
  background-color: #333;
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
}
.cell {
  text-align: center;
}
</style>
