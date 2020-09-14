import request from '@/utils/request'

// 网站公告列表接口
export function sitenotice(params) {
  return request({
    url: '/sitenotice',
    params
  })
}

// 网站公告列表接口
export function message(params) {
  return request({
    url: '/message',
    params
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


// 站内信标记全部已读接口
export function readallmessage(data) {
  return request({
    url: '/readallmessage',
    method: 'post',
    data
  })
}

// 站内信标记全部已读接口
export function readnotice(data) {
  return request({
    url: '/readnotice',
    method: 'post',
    data
  })
}

// 阅读一条站内信接口
export function readmessage(data) {
  return request({
    url: '/readmessage',
    method: 'post',
    data
  })
}

// 阅读一条站内信接口
export function messagetypelist(data,token) {
  return request({
    url: '/messagetypelist?merchant_no='+data+'&access_token='+token,
    method: 'get',
    data
  })
}
