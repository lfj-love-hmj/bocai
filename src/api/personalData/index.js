import request from '@/utils/request'

// 绑定邮箱接口
export function setemail(data) {
  return request({
    method: 'post',
    url: '/setemail',
    data
  })
}

// 换绑手机验证码接口
export function bindsmscode(data) {
  return request({
    method: 'post',
    url: '/bindsmscode',
    data
  })
}

// 换绑手机号接口
export function bindmobile(data) {
  return request({
    method: 'post',
    url: '/bindmobile',
    data
  })
}

// 会员个人资料接口
export function personalinfo() {
  return request({
    url: '/personalinfo?access_token='+ window.localStorage.token
  })
}

// 设置密保问题接口
export function setpassquestion(data) {
  return request({
    method: 'post',
    url: '/setpassquestion?access_token='+ window.localStorage.token,
    data
  })
}

// 所有密保问题接口
export function passquestion() {
  return request({
    method: 'get',
    url: '/passquestion?access_token='+ window.localStorage.token
  })
}

// 用户反馈接口
export function feedback(data) {
  return request({
    method: 'POST',
    url: '/feedback?access_token='+ window.localStorage.token,
    data
  })
}

// 文件上传接口
export function upload(data) {
  return request({
    method: 'POST',
    url: '/upload?access_token='+ window.localStorage.token,
    headers:{'Content-Type':'multipart/form-data'},
    data
  })
}

// 账号安全接口
export function accountsafe() {
  return request({
    url: '/accountsafe?access_token='+ window.localStorage.token,
  })
}

// 忘记密码检测接口
export function forgetpass(data) {
  return request({
    url: '/forgetpass?access_token='+ window.localStorage.token,
    method: 'post',
    data
  })
}

// 常见问题接口
export function aqlist(params) {
  return request({
    url: '/aqlist?access_token='+ window.localStorage.token,
    params
  })
}
// 常见问题详情接口
export function aqdetail(params) {
  return request({
    url: '/aqdetail?access_token='+ window.localStorage.token,
    params
  })
}

// 游戏手册详情接口
export function gamemanualdetail(params) {
  return request({
    url: '/gamemanualdetail?access_token='+ window.localStorage.token,
    params
  })
}


// 游戏手册接口
export function gamemanual(params) {
  return request({
    url: '/gamemanual?access_token='+ window.localStorage.token,
    params
  })
}
// 所有静态页面接口
export function staticpage(params) {
  return request({
    url: '/staticpage?access_token='+ window.localStorage.token,
    params
  })
}

// 忘记密码获取手机验证码接口
export function forgetpasssmscode(data) {
  return request({
    url: '/forgetpasssmscode?access_token='+ window.localStorage.token,
    method: 'post',
    data
  })
}

// 忘记密码邮箱验证码验证
export function forgetpassemailcode(data) {
  return request({
    url: '/forgetpassemailcode?access_token='+ window.localStorage.token,
    method: 'post',
    data
  })
}

// 忘记密码邮箱验证码验证接口
export function forgetpassemailcodecheck(data) {
  return request({
    url: '/forgetpassemailcodecheck?access_token='+ window.localStorage.token,
    method: 'post',
    data
  })
}

// 忘记密码手机验证码验证接口
export function forgetpasscode(data) {
  return request({
    url: '/forgetpasscode?access_token='+ window.localStorage.token,
    method: 'post',
    data
  })
}
// 忘记密码重置密码接口
export function forgetpassreset(data) {
  return request({
    url: '/forgetpassreset?access_token='+ window.localStorage.token,
    method: 'post',
    data
  })
}
// 忘记密码密保问题验证接口
export function forgetsafequestion(data) {
  return request({
    url: '/forgetsafequestion?access_token='+ window.localStorage.token,
    method: 'post',
    data
  })
}


// 更新会员资料接口
export function updateprofile(data) {
  return request({
    url: '/updateprofile?access_token='+ window.localStorage.token,
    method: 'post',
    data
  })
}

// 重置密码接口
export function setpass(data) {
  return request({
    url: '/setpass',
    method: 'post',
    data
  })
}

// 重置密码接口
export function resetpass(data) {
  return request({
    url: '/resetpass',
    method: 'post',
    data
  })
}

// 静态页面详情接口
export function staticpagebycode(params) {
  return request({
    url: '/staticpagebycode',
    params
  })
}

// 邮箱绑定验证接口
export function bindemail(data) {
  return request({
    url: '/bindemail',
    method: 'post',
    data
  })
}

