import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 刚看vuex，不熟
const state = {
  MainJudge: true,
  EditJudge: false,
  AddJudge: false,
  token: false,
  loginLevel: 'superRoot',
  automaticGrabState: false
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
  changeLogin (state, userToken) {
    localStorage.setItem('Authorization', userToken)
    state.token = true
  },
  removeLogin (state) {
    localStorage.setItem('Authorization', null)
    state.token = false
  },
  InitializationMainJudge (state) {
    state.MainJudge = true
  },
  InitializationEditJudge (state) {
    state.EditJudge = false
  },
  InitializationAddJudge (state) {
    state.AddJudge = false
  },
  InitializationLoginLevel (state, loginLevel) {
    state.loginLevel = loginLevel
  },
  InitializationAutomaticGrabState (state, nowState) {
    state.automaticGrabState = nowState
  }
}

export default new Vuex.Store({
  state,
  mutations
})
