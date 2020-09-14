import request from '@/utils/request'
// import { param } from '@/utils/utils'

// 所有游戏分类接口
export const getAllGameCates = params => {
  return request({
    url: '/allgamecate',
    params
  })
}

// 所有游戏平台接口
export const getAllPlatforms = params => {
  return request({
    url: '/allplatform',
    params
  })
}

// 获取所有游戏分类的游戏平台
export const getAllGameCatesPlatforms = params => {
  // const newParams = Object.assign({
  //   merchant_no: process.env.VUE_APP_MERCHANT_NO
  // }, params)
  return request({
    url: '/gamecateplatform',
    params
  })
}


// merchant_no => 商户号
// game_cate_id => 游戏分类id
// platform_id => 游戏平台id
// is_accumulate => 是否累积 1=是，2=否
// is_payfor => 赔付线 [ 1=1-5线，2=5-20线，3=20-50线，4=50线以上（默认不传） ]
// name =>	游戏名字
// 游戏列表（查询
export const getGameLists = params => {
  return request({
    url: '/gamelist',
    params
  })
}
// 参数名	必选	类型	说明
// merchant_no	是	int	商户号
// game_cate_id	是	int	游戏分类id
// platform_id	否	int	游戏平台id
// name	否	string	游戏名字
export const getHotGameLists = params => {
  return request({
    url: '/hotgame',
    params
  })
}
// 参数名	必选	类型	说明
// merchant_no	是	int	商户号
// game_cate_id	是	int	游戏分类id
// platform_id	否	int	游戏平台id
// name	否	string	游戏名字
export const getNewGameLists = params => {
  return request({
    url: '/newgame',
    params
  })
}
// 参数名	必选	类型	说明
// game_cate_id	是	int	游戏分类id
// platform_id	否	int	游戏平台id
// name	否	string	游戏名字
export const getFavoriteGameLists = params => {
  return request({
    url: '/favoritelist',
    params
  })
}

// 奖金池游戏列表
export const getBonusGameLists = params => {
  return request({
    url: '/bonusgame',
    params
  })
}
// 今日盈利榜
export const getElepoollist = params => {
  return request({
    url: '/elepoollist',
    params
  })
}

// 收藏/取消收藏游戏接口
// 参数名	必选	类型	说明
// game_id	是	int	游戏id
export const favorite = data => {
  return request({
    url: '/favorite',
    method: 'POST',
    data
  })
}

// 奖金池（获取所有平台金额后统计）
export const jackpots = (params) => {
  return request({
    url: '/platformpot',
    params
  })
}

// 老虎机赔付线
export const getpayforline = (params) => {
  return request({
    url: '/getpayforline',
    params
  })
}

// 体育比赛数据
export const sports = (params) => {
  return request({
    url: '/sports',
    params
  })
}

// 电竞比赛数据
export const esports = (params) => {
  return request({
    url: '/gaming',
    params
  })
}

// 游戏分类接口
// merchant_no	是	int	商户号
// pid	否	int	游戏分类id
export const getAllGameSubcate = (params) => {
  return request({
    url: '/allgamesubcate',
    params
  })
}

// 热门彩种
// merchant_no	是	int	商户号
export const hotLottery = (params) => {
  return request({
    url: '/hotlottery',
    params
  })
}

// 游戏在线心跳检测
export const onlinecheck = data => {
  return request({
    url: '/onlinecheck',
    method: 'post',
    data
  })
}

// 游戏关闭自动转回
export const backtrans = data => {
  return request({
    url: '/backtrans',
    method: 'post',
    data
  })
}

// 获取游戏平台默认游戏ID接口
export const getPlatformGameIds = params => {
  return request({
    url: '/platformgameids',
    method: 'get',
    params
  })
}

// 电子游戏平台排序
export function getplatformgameidsv2() {
  return request({
    url: 'platformgameidsv2',
    method: 'get'
  })
}
