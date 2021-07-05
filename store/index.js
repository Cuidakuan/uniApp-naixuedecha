import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex)

import menu from './modules/menu.js'
import takeFood from './modules/takeFood.js'

const state = {}
const mutations = {}
const actions = {}
const getters = {}


export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters,
	modules: {
		menu,
		takeFood
	}
})
