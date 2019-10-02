import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Message from '@/components/Message'
import MessageHistory from '@/components/MessageHistory'
import InformationManagement from '@/components/InformationManagement'
import Login from '@/components/Login'
import RecycleBin from '@/components/RecycleBin'
import AllUsersInfo from '@/components/AllUsersInfo'
import AddUser from '@/components/AddUser'
import MyInfo from '@/components/MyInfo'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Home',
      // name: 'Home',
      component: Home,
      meta: {
        login_required: false
      },
      children: [
        {
          path: 'Message',
          // name:'Message',
          component: Message,
          meta: {
            login_required: false
          }
        },
        {
          path: 'MessageHistory',
          // name:'MessageHistory',
          component: MessageHistory,
          meta: {
            login_required: false
          }
        },
        {
          path: 'InformationManagement',
          // name:'InformationManagement',
          component: InformationManagement,

          meta: {
            login_required: false
          }
        },
        {
          path: 'RecycleBin',
          component: RecycleBin,
          meta: {
            login_required: false
          }
        },
        {
          path: 'AllUsersInfo',
          component: AllUsersInfo,
          mata: {
            login_required: false
          }
        },
        {
          path: 'AddUser',
          component: AddUser,
          mata: {
            login_required: false
          }
        },
        {
          path: 'MyInfo',
          component: MyInfo,
          meta: {
            login_required: false
          }
        }
      ]
    }
  ],
  mode: 'history'
})
// router.beforeEach((to, from, next) => {
//   if (to.meta.login_required) {
//     next();
//   } else {
//     if(to.path=='/Login') {
//       next();
//     } else {
//      let token = localStorage.getItem('Authorization');
//      console.log(token)
//      if (token === null || token === undefined) {
//       next('/Login');
//     } else {
//       next();
//     }
//   }
// }
// });
export default router
