import request from '@/utils/request'
import store from '@/store'
import { Toast } from "vant";

// 用户所有银行卡接口
export function bankcardlist () {
  return request({
    url: '/bankcardlist'
  })
}

// 用户所有银行卡接口
export function banklist (params) {
  return request({
    url: '/banklist',
    params
  })
}

// 新增绑定银行卡接口
export function addbankcard (data) {
  return request({
    url: '/addbankcard',
    method: 'post',
    data
  })
}

// 会员存款记录接口
export function orderlist (data) {
  return request({
    url: '/orderlist',
    params: data
  })
}

// 所有存款订单状态接口
export function allorderstatus () {
  return request({
    url: '/allorderstatus',
  })
}

// 会员存款方式列表接口
export function paytype (data) {
  return request({
    url: '/paytype',
    params: data
  })
}

// 会员存款方式列表接口
// merchant_no	是	int	商户号
// pay_type	是	int	支付方式id
export function paysubtype (params) {
  return request({
    url: '/mybetstat',
    params
  })
}

// 会员存款方式列表接口
export function withdrawlist (params) {
  return request({
    url: '/withdrawlist',
    params
  })
}

// 会员存款方式列表接口
export function allwithdrawstatus () {
  return request({
    url: '/allwithdrawstatus'
  })
}

// 转账记录接口
export function translog (params) {
  return request({
    url: '/translog',
    params
  })
}

// 投注记录接口
export function betlog (params) {
  return request({
    url: '/betlog',
    params
  })
}

// 优惠中心接口
export function preferencecenter (params) {
  return request({
    url: '/preferencecenter',
    params
  })
}

// 所有活动记录状态接口
export function activityallrecordstatus (params) {
  return request({
    url: '/activityallrecordstatus',
    params
  })
}

// 所有活动记录状态接口
export function preferentialactivity (params) {
  return request({
    url: '/preferentialactivity',
    params
  })
}

// 所有支付类型接口
export function allordertype (params) {
  return request({
    url: '/allordertype',
    params
  })
}

// 用户存款接口
export function order (data) {
  return request({
    url: '/order',
    method: 'post',
    data
  })
}

// 用户存款接口
export function withdraw (data) {
  return request({
    url: '/withdraw',
    method: 'post',
    data
  })
}

// 设置资金密码接口
export function setpaypass (data) {
  return request({
    url: '/setpaypass',
    method: 'post',
    data
  })
}

// 验证旧资金密码
export function checkpayoldpass (data) {
  return request({
    url: '/checkpayoldpass',
    method: 'post',
    data
  })
}

// 会员信息接口
export function member (params) {
  // let info = store.state.member.info
  // !info.id && Toast.loading({
  //   className: 'toast-loading',
  //   mask: true,
  //   forbidClick: true,
  //   loadingType: 'spinner',
  //   message: '加载中...',
  //   duration: 0 // 持续展示 toast
  // })
  // return request({
  //   url: '/member',
  //   params
  // }).then((data) => {
  //   !info.id && Toast.clear()
  //   if (data.data.code === 0) {
  //     store.commit('updateMember', data.data.data)
  //   }
  //   return data
  // }).catch(() => {
  //   !info.id && Toast.clear()
  // })
  // 移到/modules/users.js下处理
  return request({
    url: '/member',
    params
  })
}

// 所有游戏平台接口
export function allplatform (params) {
  return request({
    url: '/allplatform',
    params
  })
}

// 活动红利转出接口
export function transbenefit (data) {
  return request({
    url: '/transbenefit',
    method: 'post',
    data
  })
}

// 会员平台钱包余额接口
export function wallet (params) {
  return request({
    url: '/wallet',
    params
  })
}

// 用户平台间转账接口
export function trans (data) {
  return request({
    url: '/trans',
    method: 'post',
    data
  })
}

// 用户平台间转账接口
export function merchantbank (params) {
  return request({
    url: '/merchantbank',
    params
  })
}

// 优惠红利记录接口
export function benefitlist (params) {
  return request({
    url: '/benefitlist',
    params
  })
}

// 会员等级列表接口
export function memberlevellist (params) {
  return request({
    url: '/memberlevellist',
    params
  })
}

// 会员中心福利活动接口
export function privilegeactivity (params) {
  return request({
    url: '/privilegeactivity',
    params
  })
}

// 所有特权等级与洗码比例对应接口
export function allactivitybenefit (params) {
  return request({
    url: '/allactivitybenefit',
    params
  })
}

// 商户收款银行信息接口
export function memberCenter () {
  return request({
    url: '/memberCenter'
  })
}

// 商户收款银行信息接口
export function checkorder (params) {
  return request({
    url: '/checkorder',
    params
  })
}

// 所有银行列表接口
export function allbanklist (params) {
  return request({
    url: '/allbanklist',
    params
  })
}

// 获取单个游戏分类下面平台接口
export function platformbygamecate (params) {
  return request({
    url: '/platformbygamecate',
    params
  })
}

// 获取所有游戏余额
export function gamecateplatform (params) {
  return request({
    url: '/gamecateplatform',
    params
  })
}

// 会员等级升级类型列表接口
export function memberleveltypelist (params) {
  return request({
    url: '/memberleveltypelist',
    params
  })
}

// 会员升级提示接口
export function memberupdatetips (params) {
  return request({
    url: '/memberupdatetips',
    params
  })
}

// 最大金额最小金额
export function depositinfo (params) {
  return request({
    // url: '/depositinfo',
    url: `/paymethodinfo/${params.pay_method_id}`,
    method: 'get',
    params
  })
}

// 阅读一条站内信接口
export function readmessage (data) {
  return request({
    url: '/readmessage',
    method: 'post',
    data
  })
}

// 免转接口
export function autotrans (data) {
  return request({
    url: '/autotrans',
    method: 'post',
    data
  })
}

// 回收
export function backtransall (data) {
  return request({
    url: '/backtransall',
    method: 'post',
    data
  })
}

// 获取活动专题
export function specialdetailbytype (data) {
  return request({
    url: '/specialdetailbytype?merchant_no=' + data.merchant_no + '&type=' + data.type,
    method: 'get',
  })
}

// 优秀代理列表(目前在user环境)
export function excellentagent (params) {
  return request({
    url: '/excellentagent?merchant_no=' + params.merchant_no,
    method: 'get'
  })
}

// 理财小金库交易类型接口
export function allmoneytranstype (data) {
  return request({
    url: '/allmoneytranstype?merchant_no=' + data.merchant_no + '&access_token=' + data.access_token,
    method: 'get',
  })
}

// 理财小金库交易记录接口
export function transrecord (data) {
  return request({
    url: '/transrecord?merchant_no=' + data.merchant_no + '&access_token=' + data.access_token + '&start_time=' + data.start_time + '&end_time=' + data.end_time + '&type=' + data.type,
    method: 'get',
  })
}

// 理财小金库余额以及收益接口
export function moneywallet (data) {
  return request({
    url: '/moneywallet?merchant_no=' + data.merchant_no + '&access_token=' + data.access_token,
    method: 'get',
  })
}

// 理财小金库转账接口
export function moneytrans (data) {
  return request({
    url: '/moneytrans?merchant_no=' + data.merchant_no + '&access_token=' + data.access_token,
    method: 'post',
    data
  })
}

// 快捷存款金额列表接口
export function quickmoneylist (data) {
  return request({
    url: '/quickmoneylist?merchant_no=' + data.merchant_no + '&access_token=' + data.access_token,
    method: 'get',
  })
}

// 一键洗码列表接口
export function washcodelist (data) {
  return request({
    url: '/washcodelist?merchant_no=' + data.merchant_no + '&access_token=' + data.access_token,
    method: 'get',
  })
}

// 一键洗码列表接口
export function userindexcontent (params) {
  return request({
    url: '/userindexcontent',
    params
  })
}

// 一键洗码接口
export function dowashcode (data) {
  return request({
    url: '/dowashcode',
    method: 'post',
    data
  })
}

// 洗码历史接口
export function washcoderecord (params) {
  return request({
    url: '/washcoderecord',
    method: 'get',
    params
  })
}

// 获取服务订阅接口
export function getsubscribe (data) {
  return request({
    url: '/getsubscribe',
    method: 'get',
    data
  })
}
// 服务订阅接口
export function subscribe (data) {
  return request({
    url: '/subscribe',
    method: 'post',
    data
  })
}

// 新版获取服务订阅接口
export function getsubscribemsg (data) {
  return request({
    url: '/getsubscribemsg',
    method: 'get',
    data
  })
}

// 取款周排行榜接口
export function withdrawtopinfo (data) {
  return request({
    url: '/withdrawtopinfo',
    method: 'get',
    data
  })
}

// 最新取款动态
export const withdrawlistinfo = (params) => {
  return request({
    url: '/withdrawlistinfo',
    params
  })
}

// 所有理财小金库方式接口
export function allmoneytype (data) {
  return request({
    url: '/allmoneytype',
    method: 'get',
    data
  })
}

// 账变记录
export function walletrecord (params) {
  return request({
    url: '/walletrecord',
    method: 'get',
    params
  })
}

// 账变记录类型
export function walletrecordtype (params) {
  return request({
    url: '/walletrecordtype',
    method: 'get',
    params
  })
}

// 账变记录汇总
export function walletrecordinfo (params) {
  return request({
    url: '/walletrecordinfo',
    method: 'get',
    params
  })
}

// 流水稽查
export function canwithdraw (data) {
  return request({
    url: '/canwithdraw',
    method: 'GET',
    data
  })
}

// 流水列表
export function rechargeflow () {
  return request({
    url: '/rechargeflow',
    method: 'GET',
  })
}

// 取款未达到流水和需扣除红利金额
export function withdrawlimitinfo () {
  return request({
    url: '/withdrawlimitinfo',
    method: 'GET',
  })
}

// 获取审核中的存款和取款列表
export function getdepositandwithdrawlist (params) {
  return request({
    url: '/getdepositandwithdrawlist',
    method: 'GET',
    params
  })
}

// 获取可兑换X币额度和X币余额
export function getxcoininfo (params) {
  return request({
    url: '/getxcoininfo',
    method: 'GET',
    params
  })
}

// X币兑换
export function xcoinexchange (data) {
  return request({
    url: '/xcoinexchange',
    method: 'post',
    data
  })
}
