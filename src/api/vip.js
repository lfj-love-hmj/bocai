import request from '@/utils/request'
// import { param } from '@/utils/utils'

// 个人vip特权信息
// merchant_no	是	int	商户号
export const vipBasicInfo = params => {
  return request({
    url: '/vipprivilegeinfo',
    params
  })
}

// VIP特权等级与洗码比例对应接口
// merchant_no	是	int	商户号
// game_cate_id	是	int	游戏分类id
export const vipLevelProfile = params => {
  return request({
    url: '/activitybenefit',
    params
  })
}

// VIP权益与特享接口
// merchant_no	是	int	商户号
// type	是	int	1=权益，2=特享
export const vipPrivilege = params => {
  return request({
    url: '/vipindex',
    params
  })
}

// 参与VIP活动接口
// merchant_no	是	int	商户号
// vip_act_id	是	int	活动id
// name	是	string	用户姓名
// mobile	是	string	手机号带区号如+86135667788
// join_time	是	datetime	参与时间如2019-10-10 00:00:00
export const applyActivity = data => {
  return request({
    url: '/joininactivity',
    method:'post',
    data
  })
}

// VIP特权与尊享活动接口
// merchant_no	是	int	商户号
// type	是	int	1=特权，2=尊享活动
// status	是	int	1=未开始，2=进行中，3=已结束
export const vipActivity = params => {
  return request({
    url: '/vipactivity',
    params
  })
}

// VIP特权与尊享活动接口
// merchant_no	是	int	商户号
// days	是	int	查看天数，做多15天
export const mybetstat = params => {
  return request({
    url: '/mybetstat',
    params
  })
}

export const activitySave = data => {
  return request({
    url: '/activity_save',
    data
  })
}
