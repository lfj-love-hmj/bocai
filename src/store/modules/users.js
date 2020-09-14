import { member, wallet as balance } from '@/api/memberCenter'
import * as types from '../types'

const storage = localStorage

let userInfo = storage.getItem('userInfo')
let token = storage.getItem('token') || ''
let isLogin = false
let username = ''
let wallet = storage.getItem('wallet')

if (userInfo && userInfo !== 'undefined') {
  userInfo = JSON.parse(userInfo)
  username = (userInfo && userInfo.username) || ''

  if (token && token !== 'null' && userInfo && userInfo.username) {
    isLogin = true
  }
}

if (wallet && wallet !== 'undefined') {
  wallet = JSON.parse(wallet)
}

const state = {
  userInfo,
  token,
  username,
  isLogin,
  // 资金账户信息
  wallet
}

// const computedState = (token, userInfo) => {
//   let isLogin = false
//   let username = (userInfo && userInfo.username) || ''
// }

const actions = {
  updateToken ({ commit }, token) {
    commit(types.SET_TOKEN, token)
  },
  updateUserInfo ({ commit }, data) {
    commit(types.SET_USER_INFO, data)
  },
  getUserInfo ({ commit }, params) {
    return new Promise((resolve, reject) => {
      member(params)
        .then(res => {
          const { code, data, msg } = res.data
          if (code === 0) {
            resolve(data)
            commit(types.SET_USER_INFO, data)
          } else {
            reject(msg)
          }
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  getWallet ({ commit }, params) {
    return new Promise((resolve, reject) => {
      balance(params)
        .then(res => {
          const { code, data, msg } = res.data
          if (code === 0) {
            resolve(data)
            commit(types.SET_USER_WALLET, data)
          } else {
            reject(msg)
          }
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  logout ({ commit }, token) {
    return new Promise((resolve) => {
      resolve()
      commit(types.SET_USER_INFO, null)
      commit(types.SET_TOKEN, '')
    })
  }
}

const getters = {
  token: state => state.token,
  userInfo: state => state.userInfo,
  username: state => {
    const { userInfo } = state
    return (userInfo && userInfo.username) || ''
  },
  isLogin: state => {
    const { token, userInfo } = state
    if (token && token !== 'null' && userInfo && userInfo.username) {
      return true
    }
    return false
  },
  wallet: state => state.wallet
}

const mutations = {
  [types.SET_TOKEN] (state, token) {
    state.token = token || ''
    if (token && token !== 'null') {
      storage.setItem('token', token)
    } else {
      storage.removeItem('token')
    }
  },
  [types.SET_USER_INFO] (state, data) {
    if (data && 'id' in data) {
      state.userInfo = data
      state.username = data.username
      state.isLogin = true
      storage.setItem('userInfo', JSON.stringify(data))
    } else {
      state.userInfo = null
      state.username = ''
      state.isLogin = false
      storage.removeItem('userInfo')

      state.wallet = null
      storage.removeItem('wallet')
    }
  },
  [types.SET_USER_WALLET] (state, data) {
    if (data) {
      state.wallet = data
      storage.setItem('wallet', JSON.stringify(data))
    } else {
      state.wallet = null
      storage.removeItem('wallet')
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
