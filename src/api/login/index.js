import request from '@/utils/request'

// 获取手机验证码
export function smscode(data) {
  return request({
    method: 'post',
    url: '/smscode',
    data
  })
}

// 一键开户
export function quickregister(data) {
  return request({
    method: 'post',
    url: '/quickregister',
    data
  })
}

// 手机号注册
export function mobileregister(data) {
  return request({
    method: 'post',
    url: '/mobileregister',
    data
  })
}

// 注册开户接口
export function register(data) {
  return request({
    method: 'post',
    url: '/register',
    data
  })
}

// 注册成功后首次修改用户名和密码接口
export function firstchange(data) {
  return request({
    method: 'post',
    url: '/firstchange',
    data
  })
}

// 手机登陆接口
export function mobilelogin(data) {
  return request({
    method: 'post',
    url: '/mobilelogin',
    data
  })
}

// 账号登陆接口
export function login(data) {
  return request({
    method: 'post',
    url: '/login',
    data
  })
}

//忘记密码检测接口
export function forgetpass(data) {
  return request({
    method: 'post',
    url: '/forgetpass',
    data
  })
}

//忘记密码检测接口
export function phonearea() {
  return request({
    url: '/phonearea'
  })
}
//V3手机区号列表接口
export function phoneareav3() {
  return request({
    url: '/phoneareav3'
  })
}

//后备域名列表接口
export function backdomain(params) {
  return request({
    method: 'get',
    url: '/backdomain',
    params
  })
}

//授权登录接口
export function authlogin(data) {
  return request({
    method: 'post',
    url: '/authlogin',
    data
  })
}

