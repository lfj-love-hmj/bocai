/**
 * axios 的封装
 */

import axios from 'axios'
import { Toast } from 'vant'
import store from '@/store'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_H5_API_URL, // api的base_url
  // timeout: 30000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  const merchant_no = process.env.VUE_APP_MERCHANT_NO
  const access_token = store.state.users.token

  config.headers['X-Device-Type'] = 'h5'

  if (config.method === 'post' || config.method === 'put' || config.method === 'patch') {
    // if (config.data) config.data.merchant_no = merchant_no
    config.data ? config.data.merchant_no = merchant_no : {}
    config.data ? config.data.access_token = access_token : {}
    console.log(config, 8888)
  } else {
    if (config.params) {
      config.params.merchant_no = merchant_no
      config.params.access_token = access_token
    } else {
      config.params = {
        merchant_no,
        access_token
      }
    }
  }
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    if (response.data.code === -998 || response.data.code === -999) {
      setTimeout(() => {
        window.location.href = '/login'
      }, 1500)
      store.dispatch('users/updateToken', '')
      store.dispatch('users/updateUserInfo', null)
    }

    if (response.data.code !== 0 && response.data.code !== '-9' && response.data.code !== -13) {
      Toast.fail({
        message: response.data.msg,
        duration: 3000
      })
      throw new Error(response.data.msg)
    }

    return response
  },
  error => {
    console.log('err' + error)
    return Promise.reject(error)
  })

export default service
