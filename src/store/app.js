/**
 *
 * @type {string}
 */
let load = 0

export default {
  state: {
    // token: window.localStorage.token,
    isLoading: false,
    choiceApplyId: -1,
    keepAlivePages: [],
    location: {}
  },
  mutations: {
    // 移到modules/users.js
    // updateToken (state, payload) {
    //   let token = payload.token || ''
    //   state.token = token
    //   if (token) {
    //     window.localStorage.token = token
    //   } else {
    //     window.localStorage.removeItem('token')
    //   }
    // },
    updateLoadingStatus (state, payload) {
      if (payload.isLoading) {
        load++
      } else if (load > 0) {
        load--
      }
      state.isLoading = !!load
    },
    updateKeepAlivePages (state, payload) {
      state.keepAlivePages = payload
    },
  }
}
