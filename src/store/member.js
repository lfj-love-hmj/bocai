/**
 *
 * @type {string}
 */

export default {
  state: {
    info:{}
  },
  mutations: {
    updateMember (state, payload) {
      for (let i in payload) {
        state.info[i] = payload[i]
      }
    },
    clearMember (state, payload) {
      state.info = payload
    }
  }
}
