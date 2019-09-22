import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//刚看vuex，不熟
const state = {
	MainJudge:true,
    EditJudge: false,
    AddJudge:false,
    allowBack:false,
    tableDate:[]   //这个是解决不了父子路由那里无法触发事件，想在这里统一一下数据来达到目的
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
	}
}

export default new Vuex.Store({
    state,
    mutations
})