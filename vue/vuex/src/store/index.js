import Vue from 'vue'
import Vuex from 'vuex'
import index from './modules/index'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    num: 1
  },
  mutations: {

  },
  actions: {

  },
  modules: {
    index
  }
})

export default store;


