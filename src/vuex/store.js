import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 刚看vuex，不熟
const state = {
  MainJudge: true,
  EditJudge: false,
  AddJudge: false,
  token: false
}
const mutations = {
  FixEditJudge (state) {
    state.EditJudge = !state.EditJudge
  },
  FixAddJudge (state) {
    state.AddJudge = !state.AddJudge
  },
  FixMainJudge (state) {
    state.MainJudge = !state.MainJudge
  },
  changeLogin (state, user_token) {
    localStorage.setItem('Authorization', user_token)
    state.token=true
  },
  removeLogin (state) {
  	localStorage.setItem('Authorization',null)
  	state.token=false
  }
}

export default new Vuex.Store({
  state,
  mutations
})
