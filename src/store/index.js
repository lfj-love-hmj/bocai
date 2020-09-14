import Vue from 'vue'
import Vuex from 'vuex'
// import member from './member'
import modules from './modules'
import app from './app'
// import VuexPersistence from 'vuex-persist/dist/cjs/index.js'
// const vuexLocal = new VuexPersistence({
//   modules: ['member']
// })

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production', // 在非生产环境下，使用严格模式
  modules: {
    app,
    // member,
    ...modules
  },
  // plugins: [vuexLocal.plugin],
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
