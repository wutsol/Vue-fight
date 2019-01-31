import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations.js'

Vue.use(Vuex) // 借助vuex实现数据共享

export default new Vuex.Store({
  state,
  mutations
})
