import request from '@/utils/request'

// 获取所有游戏分类
export function allgamecate(params) {
  return request({
    url: '/allgamecate',
    params
  })
}

export function gamecateplatform(params) {
  return request({
    url: '/gamecateplatform',
    params
  })
}

// 游戏试玩
export function fun(params) {
  return request({
    url: '/fun',
    params
  })
}

// 打开游戏接口
export function open(params) {
  return request({
    url: '/open',
    params
  })
}

// 打开游戏接口
export function sports(params) {
  return request({
    url: '/sports',
    params
  })
}

// 获取电竞展示数据。
export function gaming(params) {
  return request({
    url: '/gaming',
    params
  })
}

// 获取电竞展示数据。
export function gamelist(params) {
  return request({
    url: '/gamelist',
    params
  })
}

// 商户最新游戏列表接口。
export function newgame(params) {
  return request({
    url: '/newgame',
    params
  })
}

// 商户热门游戏列表接口。
export function hotgame(params) {
  return request({
    url: '/hotgame',
    params
  })
}

// 我的收藏
export function favoritelist(params) {
  return request({
    url: '/favoritelist?merchant_no='+params.merchant_no+'&access_token='+params.access_token+'&game_cate_id='+params.game_cate_id+'&platform_id='+(params.platform_id||'')+'&name='+(params.name||''),
    method: 'get',
  })
}

// 收藏，取消收藏
export function favorite(params) {
  return request({
    url: '/favorite',
    method: 'post',
    params
  })
}

// 游戏在线心跳检测
export function onlinecheck(data) {
  return request({
    url: '/onlinecheck',
    method: 'post',
    data
  })
}

// 赔付线
export function getpayforline(data) {
  return request({
    url: '/getpayforline?merchant_no='+data.merchant_no,
    method: 'get',
  })
}

// 奖金池（获取所有平台金额后统计）
export const platformpot = (params) => {
  return request({
    url: '/platformpot',
    params
  })
}

// 游戏关闭自动转回
export function backtrans(data) {
  return request({
    url: '/backtrans',
    method: 'post',
    data
  })
}