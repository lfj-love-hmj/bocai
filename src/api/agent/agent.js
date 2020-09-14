import Vue from 'vue'

// 代理首页统计接口
// "data": {
//   "id": 116,
//   "money": "828.75",                //账户余额
//   "merchant_no": 10001,
//   "member_counts": 7,                // 会员总数
//   "member_new_counts": 0,            // 当日新增会员总数
//   "month_fee": 0,                    // 当月佣金
//   "valid_invest": "0.00"            // 有效投注额
// }
const usercount = () => {
  return Vue.httpAgent({
    url: '/usercount'
  })
}

// 获取图形验证地址接口
const getcaptcha = () => {
  return Vue.httpAgent({
    url: '/getcaptcha'
  })
}

// 代理注册接口
const register = data => {
  return Vue.httpAgent({
    method: 'post',
    url: '/register',
    data
  })
}

// 更新代理资料接口
const updatedetail = data => {
  return Vue.httpAgent({
    method: 'post',
    url: '/updatedetail',
    data
  })
}

// 登录
const login = data => {
  return Vue.httpAgent({
    method: 'post',
    url: '/login',
    data
  })
}

// 代理详细资料接口
const userinfo = params => {
  return Vue.httpAgent({
    url: '/userinfo',
    params
  })
}

// 添加下级
const addmember = data => {
  return Vue.httpAgent({
    url: '/addmember',
    method: 'post',
    data
  })
}

// 用户所有银行卡接口
const bankcardlist = params => {
  return Vue.httpAgent({
    url: '/bankcardlist',
    params
  })
}

// 代理提现接口
const withdraw = data => {
  return Vue.httpAgent({
    url: '/withdraw',
    method: 'post',
    data
  })
}

// 新增绑定银行卡接口
const addbankcard = data => {
  return Vue.httpAgent({
    url: '/addbankcard',
    method: 'post',
    data
  })
}

// 代理绑定手机号获取手机验证码
const bindsmscode = data => {
  return Vue.httpAgent({
    url: '/bindsmscode',
    method: 'post',
    data
  })
}

// 修改代理绑定手机号
const bindmobile = data => {
  return Vue.httpAgent({
    url: '/bindmobile',
    method: 'post',
    data
  })
}

// 代理修改密码接口
const setpass = data => {
  return Vue.httpAgent({
    url: '/setpass',
    method: 'post',
    data
  })
}

// 代理合作协议
// 参数名 必选 类型 说明
// merchant_no 是 int 商户号
// code 是 string 页面代码
// ========
// code对应的关系：
// 联系我们 ag_contact_us
// 代理合作协议 agent_agreement
const getStaticPageByCode = params => {
  return Vue.httpAgent({
    url: '/staticpagebycode',
    params
  })
}

// 代理报表接口
const agentsheet = params => {
  return Vue.httpAgent({
    url: '/agentsheet',
    params
  })
}

// start_date 否 string 开始日期
// end_date 否 string 结束日期
// page 否 int 页码默认第一页为1
// size 否 int 每页显示数量默认20
// 佣金报表接口
const commisionsheet = params => {
  return Vue.httpAgent({
    url: '/commisionsheet',
    params
  })
}

// 所有佣金领取状态接口
const allcommissionstatus = params => {
  return Vue.httpAgent({
    url: '/allcommissionstatus',
    params
  })
}

// 代理佣金提取接口
const getcommission = data => {
  return Vue.httpAgent({
    url: '/getcommission',
    method: 'post',
    data
  })
}

// 代理佣金提取接口
const allbanklist = params => {
  return Vue.httpAgent({
    url: '/allbanklist',
    params
  })
}

// 优秀代理列表(目前在user环境)
const excellentagent = params => {
  return Vue.httpAgent({
    url: '/excellentagent',
    method: 'get'
  })
}

// 会员等级列表
const memberlevellist = params => {
  return Vue.httpAgent({
    url: '/memberlevellist',
    method: 'get',
    params
  })
}

// 会员列表
// username 否 string 会员用户名
// start_date 否 string 注册开始日期
// end_date 否 string 注册结束日期
const memberlist = params => {
  return Vue.httpAgent({
    url: '/memberlist',
    method: 'get',
    params
  })
}

// 帐变类型
const agentaccountchangetype = params => {
  return Vue.httpAgent({
    url: '/agentaccountchangetype',
    method: 'get',
    params
  })
}

// 帐变记录
const agentaccountchangelog = params => {
  return Vue.httpAgent({
    url: '/agentaccountchangelog',
    method: 'get',
    params
  })
}

// 代理数据汇总
const agentstatinfo = params => {
  return Vue.httpAgent({
    url: '/agentstatinfo',
    method: 'get',
    params
  })
}

// 代理存取款折线图
const agentdwtrend = params => {
  return Vue.httpAgent({
    url: '/agentdwtrend',
    method: 'get',
    params
  })
}

// 代理会员变化折线图
const agentmemberstrend = params => {
  return Vue.httpAgent({
    url: '/agentmemberstrend',
    method: 'get',
    params
  })
}

// 代理总览饼图
const agentbetstat = params => {
  return Vue.httpAgent({
    url: '/agentbetstat',
    method: 'get',
    params
  })
}

// 佣金记录
const agentcommissionlog = params => {
  return Vue.httpAgent({
    url: '/agentcommissionlog',
    method: 'get',
    params
  })
}

// 佣金结算状态
const agentcommissionstatus = params => {
  return Vue.httpAgent({
    url: '/agentcommissionstatus',
    method: 'get',
    params
  })
}

// 代理下级转账
const membertrans = data => {
  return Vue.httpAgent({
    method: 'post',
    url: '/membertrans',
    data
  })
}

// 代理下级转账获取验证码
const membertranssmscode = data => {
  return Vue.httpAgent({
    method: 'post',
    url: '/membertranssmscode',
    data
  })
}

// 佣金转钱包余额
const commissiontrans = data => {
  return Vue.httpAgent({
    method: 'post',
    url: '/commissiontrans',
    data
  })
}

// 佣金转钱包余额
const agentuserbetrank = params => {
  return Vue.httpAgent({
    method: 'get',
    url: '/agentuserbetrank',
    params
  })
}


export {
  usercount,
  getcaptcha,
  register,
  updatedetail,
  login,
  userinfo,
  addmember,
  bankcardlist,
  withdraw,
  addbankcard,
  setpass,
  getStaticPageByCode,
  agentsheet,
  commisionsheet,
  allcommissionstatus,
  getcommission,
  allbanklist,
  excellentagent,
  memberlevellist,
  memberlist,
  bindsmscode,
  bindmobile,
  agentaccountchangetype,
  agentstatinfo,
  agentdwtrend,
  agentmemberstrend,
  agentbetstat,
  agentcommissionlog,
  agentcommissionstatus,
  agentaccountchangelog,
  membertrans,
  membertranssmscode,
  commissiontrans,
  agentuserbetrank
}
