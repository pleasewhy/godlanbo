import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//刚看vuex，不熟
const state = {
	MainJudge:true,
    EditJudge: false,
    AddJudge:false,
    allowBack:false,
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
}
const mutations = {
	FixEditJudge(state){
		state.EditJudge=!state.EditJudge
	},
	FixAddJudge(state){
		state.AddJudge=!state.AddJudge
	},
	FixMainJudge(state){
		state.MainJudge=!state.MainJudge
	},
	updateAllowBack(state){
		state.allowBack=!state.allowBack;
	},
	changeLogin (state, user) {
      state.Authorization = user.Authorization;
      localStorage.setItem('Authorization', user.Authorization);
    }
}

export default new Vuex.Store({
    state,
    mutations
})