import request from '@/utils/request'

// 首页banner接口
export function indexbanner(data,params) {
  return request({
    url: '/indexbanner?merchant_no='+ data,
    params
  })
}

// 网站公告列表接口
export function sitenotice(data) {
  return request({
    url: '/sitenotice?merchant_no='+ data
  })
}

// 网站基本信息接口
export function siteinfo() {
  return request({
    url: '/siteinfo'
  })
}

// 客户请求回电接口
export function recall(data) {
  return request({
    url: '/recall',
    method: 'post',
    data
  })
}

// 阅读全部公告接口
export function readallnotice(data) {
  return request({
    url: '/readallnotice',
    method: 'post',
    data
  })
}

// 用户历史游戏列表接口
export function historylist(data) {
  return request({
    url: '/historylist?access_token=' + data
  })
}

// 品牌大使
// merchant_no	是	int	商户号
export const brandlist = (params) => {
  return request({
    url: '/brandlist',
    params
  })
}

// 品牌详情
export const branddetail = (params) => {
  return request({
    url: '/branddetail',
    params
  })
}

// 每日任务
export function dailytasks (params) {
  return request({
    url: '/dailytasks',
    params
  })
}

// 领取每日任务
export function getreward (params) {
  return request({
    url: '/getreward',
    params
  })
}

//获取首页集团咨询图片
export function indexarticle (params) {
  return request({
    url: '/indexarticle',
    params
  })
}
