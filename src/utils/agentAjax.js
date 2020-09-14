/**
 * axios 的封装
 */

import axios from 'axios';
import Vue from 'vue';
import { Toast } from 'vant';
Vue.use(Toast);

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_AGENT_API_URL, // api的base_url
  // timeout: 30000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  config.headers['X-Device-Type'] = 'h5'
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  
  response => {
    //if (window.localStorage.token) {
      if (response.data.code === -998 || response.data.code === -999) {
        Toast.fail('登录超时，请重新登录')
        setTimeout(() => {
          window.location.href = '/agentLogin'
        }, 1500);
      } else if(response.data.code < 0) {
        Toast.fail(response.data.msg)
      }
    //}
    return response
  },
  error => {
    console.log('err' + error)
    return Promise.reject(error)
  })

export default service