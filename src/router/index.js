import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Message from '@/components/Message'
import MessageHistory from '@/components/MessageHistory'
import InformationManagement from '@/components/InformationManagement'
import EditInformation from '@/components/EditInformation'
import Login from '@/components/Login'

Vue.use(Router)

const router = new Router({
  routes: [
  {
    path:'/Login',
    name:'Login',
    component:Login
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    meta:{
     login_required:false
   },
   chirdlen:[
   {
     path:'/Message',
     name:'Message',
     component:Message,
     meta:{
       login_required:false,
       allowBack:false
     }
   },
   ]
 },
 
 {
   path:'/MessageHistory',
   name:'MessageHistory',
   component:MessageHistory,
   meta:{
     login_required:false,
     allowBack:false
   }
 },
 {
   path:'/InformationManagement',
   name:'InformationManagement',
   component:InformationManagement,
   
   meta:{
     login_required:false,
     allowBack:false
   }
 }
 ],
 mode:'history'
});

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

// router.beforeEach((to, from, next) => {
//   console.log(to.path)
//   next()
//   let allowBack = true    //    给个默认值true
//   if (to.meta.allowBack !== undefined) {
//     allowBack = to.meta.allowBack
//   }
//   if (!allowBack) {
//       history.pushState(null, null, location.href)
//   }    
//   store.commit('updateAllowBack',allowBack)
// });
// router.beforeEach((to, from, next) => {
//   if(!from.meta.allowBack)
//     next(false)
//   else
//     next()
// });

export default router;