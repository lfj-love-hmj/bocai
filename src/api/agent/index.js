import agentAjax from '@/utils/agentAjax'

// 获取图形验证地址接口
export function getcaptcha() {
  return agentAjax({
    url: '/getcaptcha'
  })
}

// 代理注册接口
export function register(data) {
  return agentAjax({
    method: 'post',
    url: '/register',
    data
  })
}

// 更新代理资料接口
export function updatedetail(data) {
  return agentAjax({
    method: 'post',
    url: '/updatedetail',
    data
  })
}

// 更新代理资料接口
export function login(data) {
  return agentAjax({
    method: 'post',
    url: '/login',
    data
  })
}

// 代理详细资料接口
export function userinfo(params) {
  return agentAjax({
    url: '/userinfo',
    params
  })
}

// 代理详细资料接口
export function addmember(data) {
  return agentAjax({
    url: '/addmember',
    method: 'post',
    data
  })
}

// 用户所有银行卡接口
export function bankcardlist(params) {
  return agentAjax({
    url: '/bankcardlist',
    params
  })
}

// 代理提现接口
export function withdraw(data) {
  return agentAjax({
    url: '/withdraw',
    method: 'post',
    data
  })
}

// 新增绑定银行卡接口
export function addbankcard(data) {
  return agentAjax({
    url: '/addbankcard',
    method: 'post',
    data
  })
}

// 代理修改密码接口
export function setpass(data) {
  return agentAjax({
    url: '/setpass',
    method: 'post',
    data
  })
}

// 代理修改密码接口
export function agStaticpagebycode(params) {
  return agentAjax({
    url: '/staticpagebycode',
    params
  })
}

// 代理报表接口
export function agentsheet(params) {
  return agentAjax({
    url: '/agentsheet',
    params
  })
}

// 佣金报表接口
export function commisionsheet(params) {
  return agentAjax({
    url: '/commisionsheet',
    params
  })
}

// 佣金记录接口
export function agentcommissionlog(params) {
  return agentAjax({
    url: '/agentcommissionlog',
    params
  })
}

// 佣金结算状态
export function agentcommissionstatus(params) {
  return agentAjax({
    url: '/agentcommissionstatus',
    params
  })
}

// 所有佣金领取状态接口
export function allcommissionstatus(params) {
  return agentAjax({
    url: '/allcommissionstatus',
    params
  })
}

// 代理佣金提取接口
export function getcommission(data) {
  return agentAjax({
    url: '/getcommission',
    method: 'post',
    data
  })
}

// 代理佣金提取接口
export function allbanklist(params) {
  return agentAjax({
    url: '/allbanklist',
    params
  })
}

// 优秀代理列表(目前在user环境)
export function excellentagent(params) {
  return agentAjax({
    url: '/excellentagent?merchant_no='+params.merchant_no,
    method: 'get'
  })
}

// 会员等级列表
export function memberlevellist(params) {
  return agentAjax({
    url: '/memberlevellist',
    method: 'get',
    params
  })
}

// 会员列表
export function memberlist(params) {
  return agentAjax({
    url: '/memberlist',
    method: 'get',
    params
  })
}

// 代理首页统计接口
export function usercount(params) {
  return agentAjax({
    url: '/usercount',
    method: 'get',
    params
  })
}

// 帐变类型
export function agentaccountchangetype(params) {
  return agentAjax({
    url: '/agentaccountchangetype',
    method: 'get',
    params
  })
}

// 帐变记录
export function agentaccountchangelog(params) {
  return agentAjax({
    url: '/agentaccountchangelog',
    method: 'get',
    params
  })
}

// 代理下级转账获取验证码
export function membertranssmscode(data) {
  return agentAjax({
    method: 'post',
    url: '/membertranssmscode',
    data
  })
}

// 佣金转钱包余额
export function commissiontrans(data) {
  return agentAjax({
    method: 'post',
    url: '/commissiontrans',
    data
  })
}

// 代理下级转账
export function membertrans(data) {
  return agentAjax({
    method: 'post',
    url: '/membertrans',
    data
  })
}